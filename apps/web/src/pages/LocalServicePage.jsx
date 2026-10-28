import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SiteLayout, { CtaBand, Eyebrow, PageHero, Section } from '@/components/SiteLayout';
import BrandsSection from '@/components/BrandsSection';
import GetEstimateCTA from '@/components/GetEstimateCTA';
import { brandSchemaFor } from '@/data/brands';
import { getBespokeLocalPage } from '@/data/bespokeLocalPages';
import { getLocalCity, localCities } from '@/data/localCities';
import { getLocalTrade, localTrades } from '@/data/localTrades';
import { company, services } from '@/data/site';
import { withArticle } from '@/lib/format';
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

    const title = `${trade.name} in ${city.name}, FL`;
    const url = `${SITE}/services/${slug}/${city.slug}/`;
    const metaTitle = `${title} | Brothers Remodelers`;
    const metaDescription = `${trade.name} in ${city.name}, ${city.county}, by a licensed Florida general contractor. Permits with ${city.permitOffice.split(',')[0]}, written estimates and Florida-code installation.`;
    const notes = trade.notes(city);
    const faqs = [
        ...trade.faqs(city),
        [`Which ${city.name} neighborhoods and ZIP codes do you serve?`, `We serve all of ${city.name}, including ${city.neighborhoods.slice(0, -1).join(', ')} and ${city.neighborhoods[city.neighborhoods.length - 1]}, in ZIP code${city.zips.length > 1 ? 's' : ''} ${city.zips.join(', ')}.`],
    ];
    const nearby = city.nearby.map(getLocalCity).filter(Boolean);
    const otherTrades = localTrades.filter((t) => t.slug !== slug);

    const facts = [
        ['Service area', `${city.name}, ${city.county}, Florida`],
        ['Permits filed with', city.permitOffice.charAt(0).toUpperCase() + city.permitOffice.slice(1)],
        ['Permit required', trade.permit],
        ['Typical timeline', trade.timeline],
        ['Main cost drivers', trade.costDrivers],
        ['License', `Florida Certified General Contractor ${company.licenseNumber}`],
        [city.zips.length > 1 ? 'ZIP codes served' : 'ZIP code served', city.zips.join(', ')],
        ...(['electrical', 'ac-repair'].includes(slug) ? [['Electric utility', city.power]] : []),
        ...(slug === 'plumbing' ? [['Water utility', city.waterUtility]] : []),
    ];

    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: title,
        serviceType: service.title,
        url,
        description: trade.answer(city),
        areaServed: {
            '@type': 'City',
            name: city.name,
            containedInPlace: { '@type': 'AdministrativeArea', name: `${city.county}, Florida` },
        },
        provider: {
            '@type': 'GeneralContractor',
            '@id': `${SITE}/#business`,
            name: company.name,
            url: `${SITE}/`,
            telephone: company.phoneHref.replace('tel:', ''),
        },
        brand: brandSchemaFor(slug),
    };
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
    };
    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
            { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE}/services/` },
            { '@type': 'ListItem', position: 3, name: service.title, item: `${SITE}/services/${slug}/` },
            { '@type': 'ListItem', position: 4, name: city.name, item: url },
        ],
    };

    return (
        <SiteLayout>
            <Helmet>
                <title>{metaTitle}</title>
                <meta name="description" content={metaDescription} />
                <link rel="canonical" href={url} />
                <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
            </Helmet>
            <PageHero
                title={title}
                subtitle={`Licensed ${trade.phrase} service for ${city.name} homeowners, permitted and built to Florida code.`}
                image={service.image}
                crumbs={[{ label: 'Services', to: '/services' }, { label: service.title, to: `/services/${slug}` }, { label: city.name }]}
            />
            <Section width="wide">
                <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
                    <div>
                        <Eyebrow>Short answer</Eyebrow>
                        <h2 className="font-display mt-4 text-3xl font-bold uppercase md:text-4xl">Who does {trade.phrase} work in {city.name}?</h2>
                        <p className="mt-5 text-lg leading-relaxed text-neutral-700">{trade.answer(city)}</p>

                        <h3 className="font-display mt-12 text-2xl font-bold uppercase">Key facts</h3>
                        <dl className="mt-4 divide-y divide-neutral-200 border-y border-neutral-200">
                            {facts.map(([term, value]) => (
                                <div key={term} className="grid gap-1 py-3 sm:grid-cols-[11rem_1fr] sm:gap-6">
                                    <dt className="text-sm font-semibold text-neutral-500">{term}</dt>
                                    <dd className="text-sm leading-relaxed text-neutral-800">{value}</dd>
                                </div>
                            ))}
                        </dl>

                        <h3 className="font-display mt-12 text-2xl font-bold uppercase">{trade.name} in {city.name}: local context</h3>
                        <div className="mt-4 space-y-4 leading-relaxed text-neutral-600">
                            <p>{city.context} Homes here include {city.housing}.</p>
                            <p>{city.storms} {trade.stormTie}</p>
                        </div>

                        <h3 className="font-display mt-12 text-2xl font-bold uppercase">{trade.name} considerations in {city.name}</h3>
                        <div className="mt-6 grid gap-6 md:grid-cols-2">
                            {notes.map(([noteTitle, text]) => (
                                <div key={noteTitle} className="border-l-2 border-[hsl(var(--brand))] bg-neutral-50 p-5">
                                    <h4 className="font-display text-lg font-bold uppercase">{noteTitle}</h4>
                                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">{text}</p>
                                </div>
                            ))}
                        </div>

                        <p className="mt-8 text-sm leading-relaxed text-neutral-600">
                            For the full scope of work, options and our step-by-step process, see our main{' '}
                            <Link to={`/services/${slug}`} className="font-semibold text-[hsl(var(--brand))] underline-offset-2 hover:underline">{service.title} page</Link>.
                        </p>

                        <BrandsSection slug={slug} title={service.title} />

                        <h3 className="font-display mt-12 text-2xl font-bold uppercase">{trade.name} questions from {city.name} homeowners</h3>
                        <div className="mt-4 divide-y divide-neutral-200 border-y border-neutral-200">
                            {faqs.map(([q, a]) => (
                                <div key={q} className="py-5">
                                    <h4 className="font-display text-lg font-bold uppercase">{q}</h4>
                                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">{a}</p>
                                </div>
                            ))}
                        </div>

                        <h3 className="font-display mt-12 text-2xl font-bold uppercase">Neighborhoods we serve in {city.name}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                            {city.neighborhoods.join(', ')} and the rest of {city.name}. See our{' '}
                            <Link to={city.areaUrl} className="font-semibold text-[hsl(var(--brand))] underline-offset-2 hover:underline">{city.name} service area page</Link>{' '}
                            for every service we offer there.
                        </p>
                    </div>

                    <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
                        <GetEstimateCTA heading="Get an Estimate" text={`Free, no-obligation ${trade.phrase} estimate in ${city.name}. Line-item proposal in writing.`} />
                        <div>
                            <p className="font-display text-sm font-bold uppercase tracking-widest text-neutral-500">{trade.name} nearby</p>
                            <ul className="mt-3 space-y-2">
                                {nearby.map((c) => (
                                    <li key={c.slug}>
                                        <Link to={`/services/${slug}/${c.slug}`} className="group flex items-center justify-between border border-neutral-200 px-4 py-3 text-sm font-semibold hover:border-[hsl(var(--brand))]">
                                            {trade.name} in {c.name}
                                            <ArrowRight className="h-4 w-4 text-neutral-400 group-hover:text-[hsl(var(--brand))]" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <p className="font-display text-sm font-bold uppercase tracking-widest text-neutral-500">Other services in {city.name}</p>
                            <ul className="mt-3 flex flex-wrap gap-2">
                                {otherTrades.map((t) => (
                                    <li key={t.slug}>
                                        <Link to={`/services/${t.slug}/${city.slug}`} className="block border border-neutral-300 px-3 py-1.5 text-xs font-bold uppercase tracking-wide hover:border-[hsl(var(--brand))] hover:text-[hsl(var(--brand))]">
                                            {t.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>
                </div>
            </Section>
            <CtaBand heading={`Get ${withArticle(trade.phrase)} estimate in ${city.name}`} />
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
                        <Link to={`/services/${slug}/${c.slug}`} className="group flex items-center justify-between border border-neutral-200 px-4 py-3 text-sm font-semibold hover:border-[hsl(var(--brand))]">
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
