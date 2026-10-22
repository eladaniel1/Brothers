// Build-time prerendering. Runs AFTER `vite build` has emitted the client
// bundle to dist/apps/web. It renders every route listed in the sitemap to
// static HTML (full content + react-helmet head: title, meta description,
// canonical link, JSON-LD scripts) and writes one index.html per route,
// leaving the React bundle in place so the app hydrates on top.
//
// Invoked from package.json `build` script: `node tools/prerender.mjs`.
import path from 'node:path';
import fs from 'node:fs/promises';
import { existsSync, statSync } from 'node:fs';
import { createServer } from 'vite';

const root = process.cwd();
const outDir = path.resolve(root, '../../dist/apps/web');

process.env.NODE_ENV = 'production';

const vite = await createServer({
    root,
    logLevel: 'error',
    server: { middlewareMode: true },
    appType: 'custom',
});

try {
    const { render } = await vite.ssrLoadModule('/src/entry-server.jsx');
    const { getRoutes } = await vite.ssrLoadModule('/src/prerenderRoutes.js');
    const routes = getRoutes();

    const builtTemplatePath = path.join(outDir, 'index.html');
    const sourceTemplatePath = path.join(root, 'index.html');
    const templatePath = existsSync(builtTemplatePath) ? builtTemplatePath : sourceTemplatePath;
    const template = await fs.readFile(templatePath, 'utf-8');

    let succeeded = 0;
    const failed = [];

    for (const route of routes) {
        try {
            const { html: appHtml, helmet } = render(route);

            const headInjection = [
                helmet.title ? helmet.title.toString() : '',
                helmet.meta ? helmet.meta.toString() : '',
                helmet.link ? helmet.link.toString() : '',
                helmet.script ? helmet.script.toString() : '',
            ].join('');

            // Guarantee a canonical link on every prerendered route: pages that
            // do not declare one in their own <Helmet> get one derived from the route.
            // Every non-root canonical uses a trailing slash so it matches the sitemap.
            const canonicalUrl = route === '/' ? 'https://brothersremodelers.com/' : `https://brothersremodelers.com${route.endsWith('/') ? route : `${route}/`}`;
            const canonicalTag = `<link data-prerender="canonical" rel="canonical" href="${canonicalUrl}" />`;
            const finalHead = /rel="canonical"/.test(headInjection) ? headInjection : `${headInjection}${canonicalTag}`;

            const html = template
                // Drop the empty placeholder title/description so Helmet's are authoritative.
                .replace(/<title>[\s\S]*?<\/title>/i, '')
                .replace(/<meta\s+name="description"[^>]*>/i, '')
                .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
                .replace('</head>', `${finalHead}</head>`);

            const rel = route === '/' ? 'index.html' : `${route.replace(/^\//, '').replace(/\/+$/, '')}/index.html`;
            const filePath = path.join(outDir, rel);
            await fs.mkdir(path.dirname(filePath), { recursive: true });
            await fs.writeFile(filePath, html, 'utf-8');
            succeeded += 1;
        } catch (err) {
            failed.push({ route, message: err?.message || String(err) });
        }
    }

    console.log(`Prerendered ${succeeded}/${routes.length} routes -> ${path.relative(root, outDir) || outDir}`);
    if (failed.length) {
        console.error('Prerender failures:');
        for (const f of failed) {
            console.error(`  ${f.route}: ${f.message}`);
        }
        process.exitCode = 1;
    }

    // Prerender a standalone 404.html from the catch-all NotFoundPage so the
    // host can serve it (with a real 404 status via ErrorDocument) for any URL
    // that has no prerendered page. The route is intentionally unknown so the
    // StaticRouter falls through to the "*" route.
    try {
        const { html: appHtml, helmet } = render('/__not_found__');

        const headInjection = [
            helmet.title ? helmet.title.toString() : '',
            helmet.meta ? helmet.meta.toString() : '',
            helmet.link ? helmet.link.toString() : '',
            helmet.script ? helmet.script.toString() : '',
        ].join('');

        // Guarantee a noindex robots directive on the 404 page so unknown URLs
        // are never indexed, even if the component's Helmet output is missing.
        const noindexTag = '<meta name="robots" content="noindex, nofollow" />';
        const final404Head = /name="robots"/.test(headInjection) ? headInjection : `${headInjection}${noindexTag}`;

        const html = template
            .replace(/<title>[\s\S]*?<\/title>/i, '')
            .replace(/<meta\s+name="description"[^>]*>/i, '')
            .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
            .replace('</head>', `${final404Head}</head>`);

        const filePath = path.join(outDir, '404.html');
        await fs.writeFile(filePath, html, 'utf-8');
        console.log(`Prerendered 404 page -> ${path.relative(root, filePath)}`);
    } catch (err) {
        console.error(`404 page prerender failed: ${err?.message || String(err)}`);
        process.exitCode = 1;
    }

    // Write an Apache/LiteSpeed .htaccess into the build output so the deployed
    // origin returns a real HTTP 404 (serving /404.html) for unknown URLs
    // instead of a soft-200 SPA fallback to /index.html. The site is fully
    // prerendered, so every real route already has its own index.html file and
    // no SPA fallback is needed.
    try {
        const htaccessPath = path.join(outDir, '.htaccess');
        const htaccess = [
            '# Brothers Remodelers — prerendered multi-page site.',
            '<IfModule mod_rewrite.c>',
            '    RewriteEngine On',
            '# 301 redirect the Sarasota County Lakewood Ranch page to the Manatee',
            '# County page (the canonical one). Runs before the 404 rule.',
            '    RewriteRule ^areas-we-serve/sarasota/lakewood-ranch/?$ /areas-we-serve/manatee/lakewood-ranch/ [R=301,L]',
            '# 301 redirect any slashless URL to its trailing-slash canonical form (the',
            '# homepage keeps its single slash). Only real directories (prerendered',
            '# routes) are redirected; unknown slashless URLs fall through to the 404 rule.',
            '    RewriteCond %{REQUEST_FILENAME} !-f',
            '    RewriteCond %{REQUEST_FILENAME} -d',
            '    RewriteCond %{REQUEST_URI} !/$',
            '    RewriteRule ^(.*)$ /$1/ [R=301,L]',
            '# Unknown URLs return a real HTTP 404 (not a soft-200 fallback).',
            '# The 404 response carries a noindex X-Robots-Tag so unknown URLs are',
            '# never indexed, in addition to the noindex meta tag inside 404.html.',
            '    RewriteCond %{REQUEST_FILENAME} !-f',
            '    RewriteCond %{REQUEST_FILENAME} !-d',
            '    RewriteRule . - [R=404,L]',
            '</IfModule>',
            'ErrorDocument 404 /404.html',
            '<IfModule mod_headers.c>',
            '    <Files "404.html">',
            '        Header set X-Robots-Tag "noindex, nofollow"',
            '    </Files>',
            '</IfModule>',
            '',
        ].join('\n');
        await fs.writeFile(htaccessPath, htaccess, 'utf-8');
        console.log(`Wrote .htaccess -> ${path.relative(root, htaccessPath)}`);
    } catch (err) {
        console.error(`.htaccess write failed: ${err?.message || String(err)}`);
        process.exitCode = 1;
    }

    // ---- sitemap.xml ----
    // Generated from the same route list used for prerendering, so every live
    // page is listed. Every URL uses a trailing slash (the homepage keeps its
    // single slash) so it matches the canonical tag exactly.
    // lastmod is derived from the mtime of the source file(s) that produce each
    // route's content — not today's date for every entry. No changefreq/priority.
    try {
        const routeSourceFiles = (route) => {
            const files = [];
            if (route === '/') {
                files.push('src/pages/HomePage.jsx', 'src/components/Seo.jsx');
            } else if (route === '/services/kitchen-remodeling') {
                files.push('src/pages/KitchenRemodelingPage.jsx');
            } else if (route === '/services/bathroom-remodeling') {
                files.push('src/pages/BathroomRemodelingPage.jsx');
            } else if (route === '/services/general-contracting') {
                files.push('src/pages/GeneralContractingPage.jsx');
            } else if (route === '/services/home-additions') {
                files.push('src/pages/HomeAdditionsPage.jsx');
            } else if (route === '/services' || route.startsWith('/services/')) {
                files.push('src/pages/Pages.jsx', 'src/data/site.js');
            } else if (route === '/areas-we-serve' || /^\/areas-we-serve\/(hillsborough|pinellas|pasco|sarasota|manatee)$/.test(route)) {
                files.push('src/pages/Pages.jsx', 'src/data/site.js');
            } else if (route === '/areas-we-serve/hillsborough/tampa') {
                files.push('src/pages/TampaPage.jsx');
            } else if (route === '/areas-we-serve/hillsborough/brandon') {
                files.push('src/pages/BrandonPage.jsx');
            } else if (route.startsWith('/areas-we-serve/hillsborough/')) {
                files.push('src/pages/HillsboroughCityPage.jsx', 'src/data/cities.js');
            } else if (route.startsWith('/areas-we-serve/')) {
                files.push('src/pages/CityPage.jsx', 'src/data/allCities.js');
            } else if (route.startsWith('/guides/')) {
                files.push('src/pages/Fema50PercentRuleGuidePage.jsx', 'src/pages/RemodelingPermitsGuidePage.jsx', 'src/pages/RemodelingCostGuidePage.jsx');
            } else {
                files.push('src/pages/Pages.jsx');
            }
            return files;
        };

        const lastmodFor = (route) => {
            const files = routeSourceFiles(route);
            let max = 0;
            for (const rel of files) {
                try {
                    const st = statSync(path.join(root, rel));
                    if (st.mtimeMs > max) max = st.mtimeMs;
                } catch { /* ignore missing */ }
            }
            if (!max) return new Date().toISOString().slice(0, 10);
            return new Date(max).toISOString().slice(0, 10);
        };

        const sitemapEntries = routes.map((route) => {
            const url = route === '/' ? 'https://brothersremodelers.com/' : `https://brothersremodelers.com${route.endsWith('/') ? route : `${route}/`}`;
            const lastmod = lastmodFor(route);
            return `  <url><loc>${url}</loc><lastmod>${lastmod}</lastmod></url>`;
        });

        const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries.join('\n')}\n</urlset>\n`;
        const sitemapPath = path.join(outDir, 'sitemap.xml');
        await fs.writeFile(sitemapPath, sitemapXml, 'utf-8');
        console.log(`Generated sitemap.xml with ${sitemapEntries.length} URLs -> ${path.relative(root, sitemapPath)}`);
    } catch (err) {
        console.error(`sitemap.xml generation failed: ${err?.message || String(err)}`);
        process.exitCode = 1;
    }

    // Generate the crawler policy in the build output. The source robots.txt is
    // platform-managed, so the prerendered deployment artifact is authoritative.
    try {
        const robotsTxt = [
            'User-agent: Googlebot',
            'Allow: /',
            '',
            'User-agent: Bingbot',
            'Allow: /',
            '',
            'User-agent: GPTBot',
            'Allow: /',
            '',
            'User-agent: ClaudeBot',
            'Allow: /',
            '',
            'User-agent: PerplexityBot',
            'Allow: /',
            '',
            'User-agent: OAI-SearchBot',
            'Allow: /',
            '',
            'User-agent: *',
            'Allow: /',
            '',
            'Sitemap: https://brothersremodelers.com/sitemap.xml',
            '',
        ].join('\n');
        const robotsPath = path.join(outDir, 'robots.txt');
        await fs.writeFile(robotsPath, robotsTxt, 'utf-8');
        console.log(`Generated robots.txt -> ${path.relative(root, robotsPath)}`);
    } catch (err) {
        console.error(`robots.txt generation failed: ${err?.message || String(err)}`);
        process.exitCode = 1;
    }
} finally {
    await vite.close();
}
