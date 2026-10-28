import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import SiteLayout, { CtaBand, Eyebrow, PageHero, Section } from '@/components/SiteLayout';
import BrandsSection from '@/components/BrandsSection';
import CountUp from '@/components/CountUp';
import GetEstimateCTA from '@/components/GetEstimateCTA';
import QuoteForm from '@/components/QuoteForm';
import { brandSchemaFor } from '@/data/brands';
import { company } from '@/data/site';

const SITE = 'https://brothersremodelers.com';

const Stars = ({ count = 5 }) => (
    <div className="flex gap-0.5 text-[hsl(var(--brand))]" aria-hidden="true">
        {Array.from({ length: count }, (_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
    </div>
);

const ScrollTable = ({ id, caption, columns, children }) => (
    <div className="mt-6 hidden min-w-0 max-w-full md:block">
        <div className="max-w-full overflow-x-auto overscroll-x-contain">
            <table id={id} className="w-full max-w-full border-collapse text-left text-sm">
                <caption className="sr-only">{caption}</caption>
                <thead className="bg-neutral-50">
                    <tr>
                        {columns.map((column) => (
                            <th key={column} scope="col" className="border-b border-neutral-200 px-3 py-3 font-display text-xs font-bold uppercase tracking-wide text-neutral-700">{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>{children}</tbody>
            </table>
        </div>
    </div>
);

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
            <section className="w-full min-w-0 max-w-full border-b border-neutral-200 bg-white">
                <div className="mx-auto grid min-w-0 max-w-[90rem] grid-cols-2 gap-px bg-neutral-200 md:grid-cols-4">
                    {page.stats.map((stat) => (
                        <div key={stat.label} className="min-w-0 bg-white px-4 py-5">
                            <p className="font-display break-words text-2xl font-bold text-[hsl(var(--brand))] sm:text-3xl">
                                {stat.display || <CountUp value={stat.value} suffix={stat.suffix} />}
                            </p>
                            <p className="mt-1 text-xs font-semibold uppercase leading-snug tracking-wide text-neutral-500">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>
            <Section width="wide">
                <div className="grid min-w-0 max-w-full gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
                    <div className="min-w-0 max-w-full break-words">
                        <dl className="grid gap-3 border border-neutral-200 bg-neutral-50 p-4 sm:grid-cols-2">
                            {page.trust.map((item) => (
                                <div key={item}>
                                    <dt className="sr-only">Project fact</dt>
                                    <dd className="break-words text-xs font-semibold uppercase tracking-widest text-neutral-600">{item}</dd>
                                </div>
                            ))}
                        </dl>

                        <Eyebrow>Quick answer</Eyebrow>
                        <h2 className="font-display mt-4 break-words text-3xl font-bold uppercase md:text-4xl">{page.capsuleHeading}</h2>
                        <p id="aeo-answer-capsule" className="mt-5 text-lg leading-relaxed text-neutral-700">{page.capsule}</p>

                        <h2 className="font-display mt-12 text-2xl font-bold uppercase md:text-3xl">{page.costHeading}</h2>
                        <p className="mt-4 leading-relaxed text-neutral-600">{page.costIntro}</p>
                        <div className="mt-6 grid min-w-0 gap-3 md:hidden">
                            {page.tiers.map((tier) => (
                                <article key={tier.name} className="min-w-0 max-w-full border border-neutral-200 p-4">
                                    <h3 className="font-display break-words text-lg font-bold uppercase">{tier.name}</h3>
                                    <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-neutral-500">{tier.size}</p>
                                    <p className="font-display mt-3 text-2xl font-bold text-[hsl(var(--brand))]">{tier.costLabel}</p>
                                    <p className="text-sm text-neutral-500">{tier.perSqFt}</p>
                                    <p className="mt-3 text-sm leading-relaxed text-neutral-700">{tier.included}</p>
                                    <p className="mt-3 text-sm leading-relaxed text-neutral-700"><span className="font-semibold text-neutral-900">Timeline. </span>{tier.timeline}</p>
                                    <p className="mt-2 text-sm leading-relaxed text-neutral-700"><span className="font-semibold text-neutral-900">Inspections. </span>{tier.permits}</p>
                                </article>
                            ))}
                        </div>
                        <ScrollTable id="cost-breakdown-table" caption={page.costHeading} columns={page.costColumns}>
                            {page.tiers.map((tier) => (
                                <tr key={tier.name} className="border-b border-neutral-200 align-top">
                                    <th scope="row" className="break-words px-3 py-3 font-semibold text-neutral-900">{tier.name}<span className="mt-1 block font-normal text-neutral-500">{tier.size}</span></th>
                                    <td className="break-words px-3 py-3 leading-relaxed text-neutral-700">{tier.included}</td>
                                    <td className="break-words px-3 py-3 font-semibold text-neutral-900">{tier.costLabel}</td>
                                    <td className="break-words px-3 py-3 text-neutral-700">{tier.perSqFt}</td>
                                    <td className="break-words px-3 py-3 leading-relaxed text-neutral-700">{tier.timeline}</td>
                                    <td className="break-words px-3 py-3 leading-relaxed text-neutral-700">{tier.permits}</td>
                                </tr>
                            ))}
                        </ScrollTable>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-500">{page.costFootnote}</p>

                        <h2 className="font-display mt-12 break-words text-2xl font-bold uppercase md:text-3xl">{page.galleryHeading}</h2>
                        <p className="mt-4 leading-relaxed text-neutral-600">{page.galleryIntro}</p>
                        <div className="mt-6 grid min-w-0 gap-4 sm:grid-cols-2">
                            {page.gallery.map((shot) => (
                                <article key={shot.title} className="group relative min-w-0 isolate overflow-hidden">
                                    <img src={shot.image} alt="" style={{ objectPosition: shot.imagePosition }} className="h-64 w-full max-w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] sm:h-72" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--ink))] via-[hsl(var(--ink))]/25 to-transparent" />
                                    <div className="absolute inset-x-0 bottom-0 min-w-0 p-5 text-white">
                                        <p className="text-xs font-bold uppercase tracking-widest text-[hsl(var(--brand))]">{shot.neighborhood}</p>
                                        <h3 className="font-display mt-1 break-words text-xl font-bold uppercase">{shot.title}</h3>
                                        <p className="mt-1 text-sm leading-relaxed text-white/80">{shot.scope}</p>
                                        <p className="mt-2 text-xs font-bold uppercase tracking-widest text-white">{shot.tier}</p>
                                    </div>
                                </article>
                            ))}
                        </div>

                        <div className="mt-12 min-w-0 max-w-full bg-[hsl(var(--ink))] p-5 text-white sm:p-8">
                            <Eyebrow className="text-white/60">On a Tampa job</Eyebrow>
                            <h2 className="font-display mt-4 break-words text-2xl font-bold uppercase text-white md:text-3xl">{page.processHeading}</h2>
                            <p className="mt-3 text-sm leading-relaxed text-white/70">{page.processIntro}</p>
                            <ol className="mt-8 grid min-w-0 gap-6 sm:grid-cols-2">
                                {page.process.map((step, index) => (
                                    <li key={step.title} className="min-w-0 border-t-2 border-[hsl(var(--brand))] pt-4">
                                        <span className="font-display text-3xl font-bold text-[hsl(var(--brand))]">0{index + 1}</span>
                                        <h3 className="font-display mt-2 break-words text-lg font-bold uppercase">{step.title}</h3>
                                        <p className="mt-2 text-sm leading-relaxed text-white/70">{step.text}</p>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        <h2 className="font-display mt-12 break-words text-2xl font-bold uppercase md:text-3xl">{page.neighborhoodHeading}</h2>
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
                        <div className="mt-6 grid min-w-0 gap-3 md:hidden">
                            {page.permitRows.map(([label, detail]) => (
                                <article key={label} className="min-w-0 max-w-full border border-neutral-200 p-4">
                                    <h3 className="font-display break-words text-lg font-bold uppercase">{label}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-neutral-700">{detail}</p>
                                </article>
                            ))}
                        </div>
                        <ScrollTable caption={page.permitHeading} columns={page.permitColumns}>
                            {page.permitRows.map(([label, detail]) => (
                                <tr key={label} className="border-b border-neutral-200 align-top">
                                    <th scope="row" className="break-words px-3 py-3 font-semibold text-neutral-900">{label}</th>
                                    <td className="break-words px-3 py-3 leading-relaxed text-neutral-700">{detail}</td>
                                </tr>
                            ))}
                        </ScrollTable>
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
                        <div className="mt-6 grid min-w-0 gap-3 md:hidden">
                            {page.specs.map(([item, detail]) => (
                                <article key={item} className="min-w-0 max-w-full border border-neutral-200 p-4">
                                    <h3 className="font-display break-words text-lg font-bold uppercase">{item}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-neutral-700">{detail}</p>
                                </article>
                            ))}
                        </div>
                        <ScrollTable caption={page.specHeading} columns={page.specColumns}>
                            {page.specs.map(([item, detail]) => (
                                <tr key={item} className="border-b border-neutral-200 align-top">
                                    <th scope="row" className="break-words px-3 py-3 font-semibold text-neutral-900">{item}</th>
                                    <td className="break-words px-3 py-3 leading-relaxed text-neutral-700">{detail}</td>
                                </tr>
                            ))}
                        </ScrollTable>
                        <BrandsSection slug="bathroom-remodeling" title="Bathroom" />

                        <h2 className="font-display mt-12 break-words text-2xl font-bold uppercase md:text-3xl">{page.reviewsHeading}</h2>
                        <p className="mt-4 leading-relaxed text-neutral-600">{page.reviewsIntro}</p>
                        <div className="mt-6 grid min-w-0 gap-4 sm:grid-cols-2">
                            {page.reviews.map((review) => (
                                <blockquote key={review.neighborhood} className="min-w-0 border-l-2 border-[hsl(var(--brand))] bg-neutral-50 p-5">
                                    <div className="flex flex-wrap items-center justify-between gap-2">
                                        <p className="text-xs font-bold uppercase tracking-widest text-[hsl(var(--brand))]">{review.neighborhood}</p>
                                        <Stars count={review.stars} />
                                    </div>
                                    <p className="mt-2 text-xs font-bold uppercase tracking-widest text-neutral-500">{review.project}</p>
                                    <p className="mt-3 text-sm leading-relaxed text-neutral-700">{review.note}</p>
                                </blockquote>
                            ))}
                        </div>
                        <p className="mt-4 text-sm text-neutral-600">
                            <Link to="/reviews" className="font-semibold text-[hsl(var(--ink))] underline decoration-[hsl(var(--brand))] underline-offset-4 hover:text-[hsl(var(--brand))]">Read the published reviews</Link>
                        </p>

                        <div className="mt-12 grid min-w-0 gap-8 border border-neutral-200 bg-neutral-50 p-4 sm:p-6 lg:grid-cols-2">
                            <div className="min-w-0">
                                <Eyebrow>Free quote</Eyebrow>
                                <h2 className="font-display mt-4 break-words text-2xl font-bold uppercase">{page.quoteHeading}</h2>
                                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{page.quoteIntro}</p>
                            </div>
                            <QuoteForm compact defaultService="Bathroom Remodeling" defaultCity="Hillsborough County" />
                        </div>

                        <h2 className="font-display mt-12 break-words text-2xl font-bold uppercase md:text-3xl">{page.faqHeading}</h2>
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

                    <aside className="min-w-0 max-w-full space-y-8 lg:sticky lg:top-28 lg:self-start">
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
