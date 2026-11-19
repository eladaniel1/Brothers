import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SiteLayout, { CtaBand, PageHero, Section } from '@/components/SiteLayout';
import GetEstimateCTA from '@/components/GetEstimateCTA';
import { brandSchemaFor } from '@/data/brands';
import { CONTRACTOR_ID, contractorNode } from '@/data/contractor';
import { LAST_UPDATED, getCityEssay } from '@/data/essays';
import { getLocalCity, isTradePageCity, tradePageCities } from '@/data/localCities';
import { getLocalTrade, localTrades } from '@/data/localTrades';
import { company, services } from '@/data/site';

const SITE = 'https://brothersremodelers.com';

// One trade in one city, e.g. /services/ac-repair/st-petersburg/. Written
// answer-first for search and AI assistants: a short direct answer, a key-facts
// table, local context and considerations, brands and local FAQs. The generic
// scope and process live on the main service page, linked from here, so the 13
// city pages for a trade do not repeat the same blocks.
const LocalServicePage = () => {
    const { slug, citySlug } = useParams();
    const trade = getLocalTrade(slug);
    const city = getLocalCity(citySlug);
    const service = services.find((s) => s.slug === slug);
    if (!trade || !city || !service || !isTradePageCity(city.slug)) {
        return <Navigate to={trade && service ? `/services/${slug}/` : '/services/'} replace />;
    }

    const essay = getCityEssay(slug, city.slug);
    if (!essay) return <Navigate to={`/services/${slug}/`} replace />;
    const h1 = `${trade.name} in ${city.name}, FL`;
    const permitLabel = city.permitOffice.replace(/^the /i, '').replace(/\.$/, '');
    const permitHead = city.permitOffice.split(/,| for /)[0];
    const permitShort = /City of /i.test(permitHead) && /County/i.test(city.permitOffice)
        ? 'City or county'
        : /City of /i.test(permitHead)
            ? `City of ${city.name}`
            : city.county.replace(/ County$/, '');
    const url = `${SITE}/services/${slug}/${city.slug}/`;
    const nearby = tradePageCities.filter((item) => item.slug !== city.slug && (city.nearby || []).includes(item.slug));
    const nearbyShown = nearby.length ? nearby : tradePageCities.filter((item) => item.slug !== city.slug).slice(0, 4);
    const otherTrades = localTrades.filter((t) => t.slug !== slug);

    const graph = {
        '@context': 'https://schema.org',
        '@graph': [
            contractorNode,
            {
                '@type': 'WebPage',
                '@id': `${url}#webpage`,
                url,
                name: essay.title,
                description: essay.description,
                dateModified: '2026-11-19',
                isPartOf: { '@type': 'WebSite', name: 'Brothers Remodelers', url: `${SITE}/` },
                about: { '@id': `${url}#service` },
                publisher: { '@id': CONTRACTOR_ID },
                breadcrumb: { '@id': `${url}#breadcrumb` },
            },
            {
                '@type': 'Service',
                '@id': `${url}#service`,
                name: h1,
                serviceType: trade.name,
                url,
                description: essay.answer,
                provider: { '@id': CONTRACTOR_ID },
                areaServed: {
                    '@type': 'City',
                    name: city.name,
                    containedInPlace: { '@type': 'AdministrativeArea', name: `${city.county}, Florida` },
                },
                brand: brandSchemaFor(slug),
            },
            {
                '@type': 'FAQPage',
                '@id': `${url}#faq`,
                mainEntity: essay.faqs.map(({ q, a }) => ({
                    '@type': 'Question',
                    name: q,
                    acceptedAnswer: { '@type': 'Answer', text: a },
                })),
            },
            {
                '@type': 'BreadcrumbList',
                '@id': `${url}#breadcrumb`,
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
                    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE}/services/` },
                    { '@type': 'ListItem', position: 3, name: service.title, item: `${SITE}/services/${slug}/` },
                    { '@type': 'ListItem', position: 4, name: city.name, item: url },
                ],
            },
            {
                '@type': 'HowTo',
                name: `How ${trade.name.toLowerCase()} runs in ${city.name}`,
                step: essay.steps.map((step, index) => ({
                    '@type': 'HowToStep',
                    position: index + 1,
                    name: step.title,
                    text: step.text,
                })),
            },
        ],
    };

    return (
        <SiteLayout>
            <Helmet>
                <title>{essay.title}</title>
                <meta name="description" content={essay.description} />
                <link rel="canonical" href={url} />
                <meta property="og:title" content={essay.title} />
                <meta property="og:description" content={essay.description} />
                <meta property="og:url" content={url} />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Brothers Remodelers" />
                <meta property="og:image" content={`${SITE}${service.image}`} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={essay.title} />
                <meta name="twitter:description" content={essay.description} />
                <meta name="twitter:image" content={`${SITE}${service.image}`} />
                <script type="application/ld+json">{JSON.stringify(graph)}</script>
            </Helmet>
            <PageHero
                title={h1}
                subtitle={`${trade.name} in ${city.name}, ${city.county}. License ${company.licenseNumber}.`}
                image={service.image}
                imageAlt={`${trade.name} in ${city.name}, Florida`}
                crumbs={[{ label: 'Services', to: '/services/' }, { label: service.title, to: `/services/${slug}/` }, { label: city.name }]}
            />
            <Section width="wide">
                <dl className="city-stats" style={{ gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', marginBottom: 36 }}>
                    <div>
                        <dt className="num">{company.licenseNumber}</dt>
                        <dd className="lbl">Florida GC license</dd>
                    </div>
                    <div>
                        <dt className="num">{city.county.replace(/ County$/, '')}</dt>
                        <dd className="lbl">County</dd>
                    </div>
                    <div>
                        <dt className="num" style={{ fontSize: permitShort.length > 16 ? 22 : undefined }}>{permitShort}</dt>
                        <dd className="lbl">{permitLabel}</dd>
                    </div>
                </dl>
                <div className="split city-layout">
                    <div className="prose city-body min-w-0">
                        <p className="small mute">Last updated {LAST_UPDATED}</p>
                        <h2>Who handles {trade.name.toLowerCase()} in {city.name}?</h2>
                        <p id="aeo-answer">{essay.answer}</p>
                        <h2>What the {trade.name.toLowerCase()} work includes</h2>
                        {essay.included.map((paragraph) => <p key={paragraph.slice(0, 40)}>{paragraph}</p>)}
                        <div className="city-steps">
                            <h2>How the job runs</h2>
                            <ol>
                                {essay.steps.map((step, index) => (
                                    <li key={step.title}>
                                        <span className="n">0{index + 1}</span>
                                        <h3>{step.title}</h3>
                                        <p>{step.text}</p>
                                    </li>
                                ))}
                            </ol>
                        </div>
                        <h2>Permits and the local rules</h2>
                        {essay.permits.map((paragraph) => <p key={paragraph.slice(0, 40)}>{paragraph}</p>)}
                        {essay.local.map((paragraph) => <p key={paragraph.slice(0, 40)}>{paragraph}</p>)}
                        <h2>What affects the cost</h2>
                        {essay.cost.map((paragraph) => <p key={paragraph.slice(0, 40)}>{paragraph}</p>)}
                        <p>
                            <Link to={`/services/${slug}/`}>{trade.name} service details</Link>
                            {' · '}
                            <Link to={city.areaUrl.endsWith('/') ? city.areaUrl : `${city.areaUrl}/`}>{city.name} service area</Link>
                        </p>
                        <h2>Questions homeowners ask</h2>
                        <div>
                            {essay.faqs.map(({ q, a }) => (
                                <div key={q}>
                                    <h3>{q}</h3>
                                    <p>{a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <aside className="city-aside">
                        <GetEstimateCTA heading="Get an Estimate" text={`Two-year workmanship warranty. Written price for ${trade.name} in ${city.name}.`} />
                        <div>
                            <p className="font-display text-sm font-bold uppercase tracking-widest text-neutral-500">Same trade nearby</p>
                            <ul className="mt-3 space-y-2">
                                {nearbyShown.map((c) => (
                                    <li key={c.slug}>
                                        <Link to={`/services/${slug}/${c.slug}/`}>{trade.name} in {c.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <p className="font-display text-sm font-bold uppercase tracking-widest text-neutral-500">Other trades in {city.name}</p>
                            <ul className="mt-3 space-y-2">
                                {otherTrades.map((t) => (
                                    <li key={t.slug}>
                                        <Link to={`/services/${t.slug}/${city.slug}/`}>{t.name} in {city.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>
                </div>
            </Section>
            <CtaBand heading={`Get an estimate in ${city.name}`} />
        </SiteLayout>
    );
};

// "<Trade> by city" links for a service page. Renders nothing for services
// without local pages.
export const LocalCityLinks = ({ slug }) => {
    const trade = getLocalTrade(slug);
    if (!trade) return null;
    return (
        <>
            <h3 className="font-display mt-12 text-2xl font-bold uppercase">{trade.name} by city</h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {tradePageCities.map((c) => (
                    <li key={c.slug}>
                        <Link to={`/services/${slug}/${c.slug}/`} className="group flex items-center justify-between border border-neutral-200 px-4 py-3 text-sm font-semibold hover:border-[hsl(var(--brand))]">
                            {trade.name} in {c.name}
                            <ArrowRight className="h-4 w-4 text-neutral-400 group-hover:text-[hsl(var(--brand))]" />
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default LocalServicePage;
