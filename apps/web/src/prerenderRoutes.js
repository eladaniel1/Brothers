// Central list of every route that should be prerendered to static HTML at
// build time. Mirrors the sitemap (apps/web/src/pages/SitemapPage.jsx) so every
// services, areas-we-serve county and city route gets its own prerendered page.
import { services, areas } from '@/data/site';
import { hillsboroughCities } from '@/data/cities';
import { allCities } from '@/data/allCities';
import { localCities } from '@/data/localCities';
import { localTrades } from '@/data/localTrades';

export function getRoutes() {
    const routes = [
        '/',
        '/services',
        '/areas-we-serve',
        '/about',
        '/process',
        '/projects',
        '/reviews',
        '/safety',
        '/financing',
        '/careers',
        '/faq',
        '/contact',
        '/quote',
        '/privacy',
        '/terms',
        '/sitemap',
        '/guides/fema-50-percent-rule/',
        '/guides/remodeling-permits-tampa-bay-sarasota/',
        '/guides/remodeling-cost-tampa-bay/',
    ];

    for (const s of services) {
        routes.push(`/services/${s.slug}`);
    }

    // Trade-by-city pages, e.g. /services/ac-repair/st-petersburg.
    for (const t of localTrades) {
        for (const c of localCities) {
            routes.push(`/services/${t.slug}/${c.slug}`);
        }
    }

    for (const a of areas) {
        routes.push(`/areas-we-serve/${a.slug}`);
    }

    routes.push('/areas-we-serve/hillsborough/tampa');
    routes.push('/areas-we-serve/hillsborough/brandon');

    for (const c of hillsboroughCities) {
        routes.push(`/areas-we-serve/hillsborough/${c.slug}`);
    }

    for (const c of allCities) {
        // The Sarasota County Lakewood Ranch page is redirected to the Manatee
        // County page (see App.jsx), so it is not prerendered or listed in the
        // sitemap — only the Manatee version is.
        if (c.countySlug === 'sarasota' && c.slug === 'lakewood-ranch') continue;
        routes.push(`/areas-we-serve/${c.countySlug}/${c.slug}`);
    }

    return [...new Set(routes)];
}
