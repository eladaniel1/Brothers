import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

// Social + canonical tags only. The page's own <Helmet> must keep a literal
// <title> and <meta name="description">, because the llms.txt build step reads
// those two tags straight out of the page file's source.
// The preferred canonical domain is the non-www HTTPS version. On the
// production host we always emit the non-www origin so the canonical and
// og:url stay correct even when the page is loaded via www.brothersremodelers.com
// (where window.location.origin would otherwise be the www URL). Preview/staging
// hosts are left untouched. During SSR (no window) the non-www origin is used.
const PROD_ORIGIN = 'https://brothersremodelers.com';
const ORIGIN = (() => {
    if (typeof window === 'undefined') return PROD_ORIGIN;
    const host = window.location.hostname;
    if (host === 'brothersremodelers.com' || host === 'www.brothersremodelers.com') {
        return PROD_ORIGIN;
    }
    return window.location.origin;
})();

const Seo = ({ title, description, image, url, siteName, type = 'website' }) => {
    const location = useLocation();
    // Canonical URLs use a trailing slash on every non-root path so they
    // match the sitemap entries exactly.
    const path = location.pathname === '/' ? '/' : `${location.pathname.replace(/\/+$/, '')}/`;
    const canonical = url || `${ORIGIN}${path}`;
    // Social cards need an absolute image URL; site photos are served from /images.
    const imageUrl = image?.startsWith('/') ? `${ORIGIN}${image}` : image;

    return (
        <Helmet>
            <link rel="canonical" href={canonical} />
            <meta property="og:url" content={canonical} />
            <meta property="og:type" content={type} />
            {siteName && <meta property="og:site_name" content={siteName} />}
            {title && <meta property="og:title" content={title} />}
            {description && <meta property="og:description" content={description} />}
            {imageUrl && <meta property="og:image" content={imageUrl} />}
            <meta name="twitter:card" content={imageUrl ? 'summary_large_image' : 'summary'} />
            {title && <meta name="twitter:title" content={title} />}
            {description && <meta name="twitter:description" content={description} />}
            {imageUrl && <meta name="twitter:image" content={imageUrl} />}
        </Helmet>
    );
}

export default Seo;

export { Seo };
