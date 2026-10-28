import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SiteLayout, { CtaBand, Eyebrow, PageHero, Section } from '@/components/SiteLayout';
import BrandsSection from '@/components/BrandsSection';
import GetEstimateCTA from '@/components/GetEstimateCTA';
import { brandSchemaFor } from '@/data/brands';
import { company } from '@/data/site';

const SITE = 'https://brothersremodelers.com';

// Renders a pre-written trade×city dossier. It does not compose sentences.
const BespokeLocalServicePage = ({ page }) => {
    const url = `${SITE}${page.path}`;
    const graph = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': ['GeneralContractor', 'HomeAndConstructionBusiness'],
                '@id': `${SITE}/#organization`,
                name: company.name,
                url: `${SITE}/`,
                telephone: company.telephone,
                priceRange: '$$$',
                address: {
                    '@type': 'PostalAddress',
                    streetAddress: company.streetAddress,
                    addressLocality: company.addressLocality,
                    addressRegion: company.addressRegion,
                    postalCode: company.postalCode,
                    addressCountry: 'US',
                },
                geo: {
                    '@type': 'GeoCoordinates',
                    latitude: company.latitude,
                    longitude: company.longitude,
                },
                identifier: {
                    '@type': 'PropertyValue',
                    name: 'Florida Certified General Contractor License',
                    propertyID: 'FL-DBPR-CGC',
                    value: company.licenseNumber,
                },
                hasCredential: {
                    '@type': 'EducationalOccupationalCredential',
                    credentialCategory: 'license',
                    name: `Florida Certified General Contractor #${company.licenseNumber}`,
                    recognizedBy: {
                        '@type': 'GovernmentOrganization',
                        name: 'Florida Department of Business and Professional Regulation (DBPR)',
                        url: 'https://www.myfloridalicense.com/',
                    },
                },
                areaServed: [
                    { '@type': 'AdministrativeArea', name: 'Hillsborough County, FL' },
                    { '@type': 'AdministrativeArea', name: 'Pinellas County, FL' },
                    { '@type': 'AdministrativeArea', name: 'Pasco County, FL' },
                    { '@type': 'AdministrativeArea', name: 'Sarasota County, FL' },
                    { '@type': 'AdministrativeArea', name: 'Manatee County, FL' },
                ],
            },
            {
                '@type': 'Service',
                '@id': `${url}#service`,
                name: page.title,
                serviceType: page.serviceType,
                url,
                description: page.capsule,
                provider: { '@id': `${SITE}/#organization` },
                areaServed: {
                    '@type': 'City',
                    name: page.schema.cityName,
                    sameAs: page.schema.wikiUrl,
                    geo: {
                        '@type': 'GeoCoordinates',
                        latitude: page.schema.lat,
                        longitude: page.schema.lng,
                    },
                    containedInPlace: {
                        '@type': 'AdministrativeArea',
                        name: page.schema.countyName,
                    },
                    address: {
                        '@type': 'PostalAddress',
                        addressLocality: page.schema.cityName,
                        addressRegion: 'FL',
                        postalCode: page.schema.zipCodes.join(', '),
                        addressCountry: 'US',
                    },
                },
                brand: brandSchemaFor('bathroom-remodeling'),
                hasOfferCatalog: {
                    '@type': 'OfferCatalog',
                    name: `2026 ${page.schema.cityName} Bathroom Remodeling Cost Tiers`,
                    itemListElement: page.tiers.map((tier) => ({
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Service',
                            name: `${tier.name} in ${page.schema.cityName}, FL`,
                        },
                        priceSpecification: {
                            '@type': 'PriceSpecification',
                            minPrice: tier.minPrice,
                            maxPrice: tier.maxPrice,
                            priceCurrency: 'USD',
                        },
                    })),
                },
            },
            {
                '@type': 'WebPage',
                '@id': `${url}#webpage`,
                url,
                name: page.metaTitle,
                datePublished: page.reviewedDate,
                dateModified: page.reviewedDate,
                lastReviewed: page.reviewedDate,
                isPartOf: {
                    '@type': 'WebSite',
                    '@id': `${SITE}/#website`,
                    name: company.name,
                    url: `${SITE}/`,
                },
                about: { '@id': `${url}#service` },
                breadcrumb: { '@id': `${url}#breadcrumb` },
                speakable: {
                    '@type': 'SpeakableSpecification',
                    cssSelector: ['#aeo-answer-capsule', '#cost-breakdown-table'],
                },
            },
            {
                '@type': 'BreadcrumbList',
                '@id': `${url}#breadcrumb`,
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
                    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE}/services/` },
                    { '@type': 'ListItem', position: 3, name: 'Bathroom Remodeling', item: `${SITE}/services/bathroom-remodeling/` },
                    { '@type': 'ListItem', position: 4, name: `${page.schema.cityName}, FL`, item: url },
                ],
            },
            {
                '@type': 'FAQPage',
                '@id': `${url}#faq`,
                mainEntity: page.faqs.map((faq) => ({
                    '@type': 'Question',
                    name: faq.q,
                    acceptedAnswer: { '@type': 'Answer', text: faq.a },
                })),
            },
        ],
    };

    return (
        <SiteLayout>
            <Helmet>
                <title>{page.metaTitle}</title>
                <meta name="description" content={page.metaDescription} />
                <link rel="canonical" href={url} />
                <script type="application/ld+json">{JSON.stringify(graph)}</script>
            </Helmet>
            <PageHero
                title={page.title}
                subtitle={page.heroSubtitle}
                image={page.image}
                crumbs={page.crumbs}
            />
            <Section width="wide">
                <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
                    <div>
                        <dl className="grid gap-3 border border-neutral-200 bg-neutral-50 p-4 sm:grid-cols-2">
                            {page.trust.map((item) => (
                                <div key={item}>
                                    <dt className="sr-only">Project fact</dt>
                                    <dd className="text-xs font-semibold uppercase tracking-widest text-neutral-600">{item}</dd>
                                </div>
                            ))}
                        </dl>

                        <Eyebrow>Quick answer</Eyebrow>
                        <h2 className="font-display mt-4 text-3xl font-bold uppercase md:text-4xl">{page.capsuleHeading}</h2>
                        <p id="aeo-answer-capsule" className="mt-5 text-lg leading-relaxed text-neutral-700">{page.capsule}</p>

                        <h2 className="font-display mt-12 text-2xl font-bold uppercase md:text-3xl">{page.costHeading}</h2>
                        <p className="mt-4 leading-relaxed text-neutral-600">{page.costIntro}</p>
                        <div className="mt-6 overflow-x-auto border border-neutral-200">
                            <table id="cost-breakdown-table" className="w-full min-w-[52rem] border-collapse text-left text-sm">
                                <caption className="sr-only">{page.costHeading}</caption>
                                <thead className="bg-neutral-50">
                                    <tr>
                                        {page.costColumns.map((column) => (
                                            <th key={column} scope="col" className="border-b border-neutral-200 px-3 py-3 font-display text-xs font-bold uppercase tracking-wide text-neutral-700">{column}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {page.tiers.map((tier) => (
                                        <tr key={tier.name} className="border-b border-neutral-200 align-top">
                                            <th scope="row" className="px-3 py-3 font-semibold text-neutral-900">{tier.name}<span className="mt-1 block font-normal text-neutral-500">{tier.size}</span></th>
                                            <td className="px-3 py-3 leading-relaxed text-neutral-700">{tier.included}</td>
                                            <td className="px-3 py-3 whitespace-nowrap font-semibold text-neutral-900">{tier.costLabel}</td>
                                            <td className="px-3 py-3 whitespace-nowrap text-neutral-700">{tier.perSqFt}</td>
                                            <td className="px-3 py-3 leading-relaxed text-neutral-700">{tier.timeline}</td>
                                            <td className="px-3 py-3 leading-relaxed text-neutral-700">{tier.permits}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-500">{page.costFootnote}</p>

                        <h2 className="font-display mt-12 text-2xl font-bold uppercase md:text-3xl">{page.neighborhoodHeading}</h2>
                        <p className="mt-4 leading-relaxed text-neutral-600">{page.neighborhoodIntro}</p>
                        <div className="mt-6 grid gap-6 md:grid-cols-2">
                            {page.neighborhoods.map((card) => (
                                <article key={card.name} className="border-l-2 border-[hsl(var(--brand))] bg-neutral-50 p-5">
                                    <p className="text-xs font-semibold uppercase tracking-widest text-[hsl(var(--brand))]">{card.eraTag}</p>
                                    <h3 className="font-display mt-2 text-lg font-bold uppercase">{card.name}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-neutral-700">{card.housingFact}</p>
                                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">{card.remodelImpact}</p>
                                </article>
                            ))}
                        </div>

                        <h2 className="font-display mt-12 text-2xl font-bold uppercase md:text-3xl">{page.permitHeading}</h2>
                        <p className="mt-4 leading-relaxed text-neutral-600">{page.permitIntro}</p>
                        <div className="mt-6 overflow-x-auto border border-neutral-200">
                            <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
                                <caption className="sr-only">{page.permitHeading}</caption>
                                <thead className="bg-neutral-50">
                                    <tr>
                                        {page.permitColumns.map((column) => (
                                            <th key={column} scope="col" className="border-b border-neutral-200 px-3 py-3 font-display text-xs font-bold uppercase tracking-wide text-neutral-700">{column}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {page.permitRows.map(([label, detail]) => (
                                        <tr key={label} className="border-b border-neutral-200 align-top">
                                            <th scope="row" className="px-3 py-3 font-semibold text-neutral-900">{label}</th>
                                            <td className="px-3 py-3 leading-relaxed text-neutral-700">{detail}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-8 space-y-8">
                            {page.permitLayers.map((layer) => (
                                <section key={layer.title}>
                                    <h3 className="font-display text-xl font-bold uppercase">{layer.title}</h3>
                                    <p className="mt-3 leading-relaxed text-neutral-600">{layer.body}</p>
                                </section>
                            ))}
                        </div>

                        <h2 className="font-display mt-12 text-2xl font-bold uppercase md:text-3xl">{page.specHeading}</h2>
                        <p className="mt-4 leading-relaxed text-neutral-600">{page.specIntro}</p>
                        <div className="mt-6 overflow-x-auto border border-neutral-200">
                            <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
                                <caption className="sr-only">{page.specHeading}</caption>
                                <thead className="bg-neutral-50">
                                    <tr>
                                        {page.specColumns.map((column) => (
                                            <th key={column} scope="col" className="border-b border-neutral-200 px-3 py-3 font-display text-xs font-bold uppercase tracking-wide text-neutral-700">{column}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {page.specs.map(([item, detail]) => (
                                        <tr key={item} className="border-b border-neutral-200 align-top">
                                            <th scope="row" className="px-3 py-3 font-semibold text-neutral-900">{item}</th>
                                            <td className="px-3 py-3 leading-relaxed text-neutral-700">{detail}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <BrandsSection slug="bathroom-remodeling" title="Bathroom" />

                        <h2 className="font-display mt-12 text-2xl font-bold uppercase md:text-3xl">{page.faqHeading}</h2>
                        <div className="mt-4 divide-y divide-neutral-200 border-y border-neutral-200">
                            {page.faqs.map((faq) => (
                                <div key={faq.q} className="py-5">
                                    <h3 className="font-display text-lg font-bold uppercase">{faq.q}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-neutral-600">{faq.a}</p>
                                </div>
                            ))}
                        </div>

                        <h2 className="font-display mt-12 text-2xl font-bold uppercase">{page.crossHeading}</h2>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-600">{page.crossIntro}</p>
                        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                            {page.crossLinks.map((link) => (
                                <li key={link.to}>
                                    <Link to={link.to} className="group flex items-center justify-between border border-neutral-200 px-4 py-3 text-sm font-semibold hover:border-[hsl(var(--brand))]">
                                        {link.label}
                                        <ArrowRight className="h-4 w-4 shrink-0 text-neutral-400 group-hover:text-[hsl(var(--brand))]" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
                        <GetEstimateCTA heading="Get an Estimate" text={page.ctaText} />
                        <div>
                            <p className="font-display text-sm font-bold uppercase tracking-widest text-neutral-500">{page.nearbyHeading}</p>
                            <ul className="mt-3 space-y-2">
                                {page.nearby.map((link) => (
                                    <li key={link.to}>
                                        <Link to={link.to} className="group flex items-center justify-between border border-neutral-200 px-4 py-3 text-sm font-semibold hover:border-[hsl(var(--brand))]">
                                            {link.label}
                                            <ArrowRight className="h-4 w-4 text-neutral-400 group-hover:text-[hsl(var(--brand))]" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>
                </div>
            </Section>
            <CtaBand heading={page.ctaHeading} />
        </SiteLayout>
    );
};

export default BespokeLocalServicePage;
