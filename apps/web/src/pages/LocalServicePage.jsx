import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SiteLayout, { CtaBand, PageHero, Section } from '@/components/SiteLayout';
import GetEstimateCTA from '@/components/GetEstimateCTA';
import { brandSchemaFor } from '@/data/brands';
import { CONTRACTOR_ID, contractorNode } from '@/data/contractor';
import { getBespokeLocalPage } from '@/data/bespokeLocalPages';
import { getLocalCity, localCities } from '@/data/localCities';
import { getLocalTrade, localTrades } from '@/data/localTrades';
import { LAST_UPDATED, getLocalPageCopy } from '@/data/localPageCopy';
import { company, services } from '@/data/site';
import BespokeLocalServicePage from '@/pages/BespokeLocalServicePage';

const SITE = 'https://brothersremodelers.com';

// One trade in one city, e.g. /services/ac-repair/st-petersburg/. Written
// answer-first for search and AI assistants: a short direct answer, a key-facts
// table, local context and considerations, brands and local FAQs. The generic
// scope and process live on the main service page, linked from here, so the 13
// city pages for a trade do not repeat the same blocks.
const LocalServicePage = () => {
    const { slug, citySlug } = useParams();
    const bespoke = getBespokeLocalPage(slug, citySlug);
    if (bespoke) return <BespokeLocalServicePage page={bespoke} />;

    const trade = getLocalTrade(slug);
    const city = getLocalCity(citySlug);
    const service = services.find((s) => s.slug === slug);
    if (!trade || !city || !service) return <Navigate to={service ? `/services/${slug}` : '/services'} replace />;

    const copy = getLocalPageCopy(slug, city);
    if (!copy) return <Navigate to={`/services/${slug}/`} replace />;
    const url = `${SITE}/services/${slug}/${city.slug}/`;
    const nearby = city.nearby.map(getLocalCity).filter(Boolean).filter((item) => item.slug !== city.slug);
    const otherTrades = localTrades.filter((t) => t.slug !== slug);

    const graph = {
        '@context': 'https://schema.org',
        '@graph': [
            contractorNode,
            {
                '@type': 'WebPage',
                '@id': `${url}#webpage`,
                url,
                name: copy.title,
                description: copy.description,
                dateModified: '2026-11-19',
                isPartOf: { '@type': 'WebSite', name: 'Brothers Remodelers', url: `${SITE}/` },
                about: { '@id': `${url}#service` },
                publisher: { '@id': CONTRACTOR_ID },
                breadcrumb: { '@id': `${url}#breadcrumb` },
            },
            {
                '@type': 'Service',
                '@id': `${url}#service`,
                name: copy.h1,
                serviceType: trade.name,
                url,
                description: copy.answer,
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
                mainEntity: copy.faqs.map(([q, a]) => ({
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
                name: copy.stepsHeading,
                step: copy.steps.map((text, index) => ({
                    '@type': 'HowToStep',
                    position: index + 1,
                    text,
                })),
            },
        ],
    };

    return (
        <SiteLayout>
            <Helmet>
                <title>{copy.title}</title>
                <meta name="description" content={copy.description} />
                <link rel="canonical" href={url} />
                <meta property="og:title" content={copy.title} />
                <meta property="og:description" content={copy.description} />
                <meta property="og:url" content={url} />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Brothers Remodelers" />
                <meta property="og:image" content={`${SITE}${service.image}`} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={copy.title} />
                <meta name="twitter:description" content={copy.description} />
                <meta name="twitter:image" content={`${SITE}${service.image}`} />
                <script type="application/ld+json">{JSON.stringify(graph)}</script>
            </Helmet>
            <PageHero
                title={copy.h1}
                subtitle={`${trade.name} in ${city.name}, ${city.county}. License ${company.licenseNumber}.`}
                image={service.image}
                imageAlt={`${trade.name} in ${city.name}, Florida`}
                crumbs={[{ label: 'Services', to: '/services/' }, { label: service.title, to: `/services/${slug}/` }, { label: city.name }]}
            />
            <Section width="wide">
                <div className="split city-layout">
                    <p className="small mute">Last updated {LAST_UPDATED}</p>
                    <div className="prose city-body min-w-0">
                        <h2>{copy.answerHeading}</h2>
                        <p id="aeo-answer">{copy.answer}</p>
                        <h2>{copy.stepsHeading}</h2>
                        <ol>
                            {copy.steps.map((step) => <li key={step}>{step}</li>)}
                        </ol>
                        <h2>{copy.includedHeading}</h2>
                        <p>{copy.included}</p>
                        <h2>{copy.rulesHeading}</h2>
                        <p>{copy.rules}</p>
                        <p>
                            <Link to={`/services/${slug}/`}>{trade.name} service details</Link>
                            {' · '}
                            <Link to={city.areaUrl.endsWith('/') ? city.areaUrl : `${city.areaUrl}/`}>{city.name} service area</Link>
                        </p>
                        <h2>{copy.faqHeading}</h2>
                        <div>
                            {copy.faqs.map(([q, a]) => (
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
                                {nearby.map((c) => (
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
                {localCities.map((c) => (
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
