import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { AppRoutes } from '@/App';

// Render a single route to static HTML for build-time prerendering.
// Returns the body markup plus the collected react-helmet head tags so the
// prerender script can inject <title>, meta description, canonical link and
// JSON-LD scripts into the document <head> before any JavaScript runs.
export function render(url) {
    const html = renderToString(
        <StaticRouter location={url}>
            <AppRoutes />
        </StaticRouter>
    );
    const helmet = Helmet.renderStatic();
    return { html, helmet };
}
