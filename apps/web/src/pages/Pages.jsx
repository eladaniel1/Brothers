import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Check, Clock, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import SiteLayout, { CtaBand, Eyebrow, PageHero, Section } from '@/components/SiteLayout';
import QuoteForm from '@/components/QuoteForm';
import GetEstimateCTA from '@/components/GetEstimateCTA';
import ServiceCardGrid from '@/components/ServiceCardGrid';
import { areas, company, concreteImage, faqs, founderImage, heroImage, kitchenImage, officeImage, processSteps, projects, services, stats, testimonials } from '@/data/site';
import { serviceEnhancements, processStepIcons } from '@/data/serviceEnhancements';
import { cityPageByNeighborhood } from '@/data/cities';
import { neighborhoodToCity } from '@/data/allCities';

const Meta = ({ title, description }) => (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
    </Helmet>
);

const Prose = ({ children }) => <div className="space-y-4 leading-relaxed text-neutral-600">{children}</div>;

const FaqList = ({ items }) => (
    <div className="divide-y divide-neutral-200 border-y border-neutral-200">
        {items.map(([q, a]) => (
            <div key={q} className="py-5">
                <h3 className="font-display text-lg font-bold uppercase">{q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{a}</p>
            </div>
        ))}
    </div>
);

// Verified shared city/community list for the 13 additional service pages.
// City and county names are plain text only — no anchors, links, or buttons.
const serviceCities = [
    {
        county: 'Hillsborough County',
        cities: 'Mango, Palm River-Clair Mel, Progress Village, Egypt Lake-Leto, Lake Magdalene, University area, Temple Terrace, Carrollwood, Northdale, Town ’n’ Country, Brandon, Seffner, Riverview, Gibsonton, Citrus Park, Westchase, Lutz, Valrico, Bloomingdale, Thonotosassa, Apollo Beach, Keystone, Dover, Odessa, Ruskin, FishHawk, Lithia, Plant City, Sun City Center, Wimauma, Balm.',
    },
    {
        county: 'Pinellas County',
        cities: 'Oldsmar, Safety Harbor, Pinellas Park, East Lake, St. Petersburg, Clearwater, Largo, Palm Harbor, Kenneth City, Belleair, Belleair Bluffs, Seminole, Dunedin, Gulfport, South Pasadena, Clearwater Beach, Indian Rocks Beach, Indian Shores, Madeira Beach, Redington Beaches, Treasure Island, St. Pete Beach, Tarpon Springs, Tierra Verde.',
    },
    {
        county: 'Pasco County',
        cities: 'Land O’ Lakes, Wesley Chapel, Trinity, Holiday, Zephyrhills, New Port Richey, San Antonio, Port Richey.',
    },
    {
        county: 'Sarasota County',
        cities: 'Sarasota (downtown, Southside Village, Gulf Gate, Palmer Ranch), Lido Key, St. Armands, Fruitville, Bee Ridge, Siesta Key, Longboat Key, University Park, Lakewood Ranch (Sarasota side), Osprey, Laurel, Nokomis, Venice, South Venice, Warm Mineral Springs, North Port, Englewood.',
    },
    {
        county: 'Manatee County',
        cities: 'Bradenton, Cortez, Bradenton Beach, Holmes Beach, Palmetto, Ellenton, Anna Maria, Myakka City, Parrish.',
    },
];

export const CitiesWeServe = () => (
    <Section width="narrow" className="border-t border-neutral-200">
        <h2 className="font-display text-3xl font-bold uppercase md:text-4xl">Cities We Serve</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600">
            Brothers Remodelers offers this service across the Tampa Bay and Sarasota region. The communities listed below are the verified cities and neighborhoods we serve, grouped by county.
        </p>
        <dl className="mt-6 space-y-4">
            {serviceCities.map((c) => (
                <div key={c.county} className="border-l-2 border-[hsl(var(--brand))] bg-neutral-50 p-4">
                    <dt className="font-display text-base font-bold uppercase tracking-wide">{c.county}</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-neutral-700">{c.cities}</dd>
                </div>
            ))}
        </dl>
    </Section>
);

export const ServicesPage = () => (
    <SiteLayout>
        <Meta title="Construction Services in the Tampa Bay & Sarasota Region | Brothers Remodelers" description="Explore our home remodeling services: whole-home renovations, kitchen and bathroom remodeling, home additions, commercial build-outs, concrete and foundations across the Tampa Bay and Sarasota region." />
        <PageHero title="Construction Services" subtitle="Licensed home remodeling and general contracting services delivered by one Florida contractor across the Tampa Bay and Sarasota region." image={heroImage} crumbs={[{ label: 'Services' }]} />
        <Section width="wide">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                    <Eyebrow>What we build</Eyebrow>
                    <h2 className="font-display mt-4 max-w-2xl text-4xl font-bold uppercase leading-tight md:text-5xl">Remodeling services we provide</h2>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-600">One licensed contractor runs every trade on your project, from permits and engineering to final inspection.</p>
                </div>
            </div>
            <ServiceCardGrid items={services} />
        </Section>
        <CtaBand />
    </SiteLayout>
);

export const ServiceDetailPage = () => {
    const { slug } = useParams();
    const service = services.find((s) => s.slug === slug);
    if (!service) return <Navigate to="/services" replace />;

    const metaTitle = service.metaTitle || `${service.title} in the Tampa Bay & Sarasota Region | Brothers Remodelers`;
    const metaDescription = service.metaDescription || `${service.summary} Licensed and insured ${service.title.toLowerCase()} contractors serving Hillsborough, Pinellas, Pasco, Sarasota and Manatee counties.`;
    const canonicalUrl = `https://brothersremodelers.com/services/${service.slug}/`;
    const enh = serviceEnhancements[service.slug];
    const webPageSchema = enh ? {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: metaTitle,
        description: metaDescription,
        url: canonicalUrl,
        isPartOf: { '@type': 'WebSite', name: company.name, url: 'https://brothersremodelers.com/' },
        about: { '@type': 'Service', name: service.title },
        breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brothersremodelers.com/' },
                { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://brothersremodelers.com/services/' },
                { '@type': 'ListItem', position: 3, name: service.title, item: canonicalUrl },
            ],
        },
    } : null;

    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: service.title,
        provider: {
            '@type': 'GeneralContractor',
            name: company.name,
            telephone: '+1-954-355-1520',
            url: 'https://brothersremodelers.com/',
            license: company.licenseNumber,
            areaServed: areas.map((a) => ({ '@type': 'AdministrativeArea', name: a.city })),
        },
        areaServed: 'Tampa Bay and Sarasota region, Florida',
        description: service.summary,
    };
    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brothersremodelers.com/' },
            { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://brothersremodelers.com/services/' },
            { '@type': 'ListItem', position: 3, name: service.title, item: canonicalUrl },
        ],
    };
    const faqSchema = service.faqs && service.faqs.length ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: service.faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
    } : null;

    return (
        <SiteLayout>
            <Helmet>
                <title>{metaTitle}</title>
                <meta name="description" content={metaDescription} />
                <link rel="canonical" href={canonicalUrl} />
                <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
                <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
                {webPageSchema && <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>}
                {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
            </Helmet>
            <PageHero title={service.title} subtitle={service.summary} image={service.image} crumbs={[{ label: 'Services', to: '/services' }, { label: service.title }]} />
            <Section width="wide">
                <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
                    <div>
                        <Eyebrow>Overview</Eyebrow>
                        <h2 className="font-display mt-4 text-3xl font-bold uppercase md:text-4xl">{service.title} done right the first time</h2>
                        <Prose>
                            <p className="mt-4">{service.intro}</p>
                        </Prose>

                        {enh && (
                            <div className="mt-8 border-l-2 border-[hsl(var(--brand))] bg-neutral-50 p-5">
                                <p className="text-sm font-bold uppercase tracking-widest text-neutral-500">At a glance</p>
                                <dl className="mt-3 grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2">
                                    <div>
                                        <dt className="font-semibold text-neutral-800">Typical timeline</dt>
                                        <dd className="text-neutral-600">{enh.timeline}</dd>
                                    </div>
                                    <div>
                                        <dt className="font-semibold text-neutral-800">Permits required</dt>
                                        <dd className="text-neutral-600">{enh.permitTypes}</dd>
                                    </div>
                                    <div>
                                        <dt className="font-semibold text-neutral-800">Main cost drivers</dt>
                                        <dd className="text-neutral-600">{enh.costDrivers}</dd>
                                    </div>
                                    <div>
                                        <dt className="font-semibold text-neutral-800">Warranty</dt>
                                        <dd className="text-neutral-600">Two-year workmanship warranty plus manufacturer coverage on installed products.</dd>
                                    </div>
                                </dl>
                            </div>
                        )}

                        <h3 className="font-display mt-10 text-2xl font-bold uppercase">What is included</h3>
                        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                            {service.scope.map((item) => (
                                <li key={item} className="flex gap-2 border border-neutral-200 p-3 text-sm text-neutral-700">
                                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand))]" />{item}
                                </li>
                            ))}
                        </ul>

                        {service.options && service.options.length > 0 && (
                            <>
                                <h3 className="font-display mt-12 text-2xl font-bold uppercase">Service options &amp; benefits</h3>
                                <dl className="mt-4 divide-y divide-neutral-200 border-y border-neutral-200">
                                    {service.options.map(([term, desc]) => (
                                        <div key={term} className="py-5">
                                            <dt className="font-display text-lg font-bold uppercase">{term}</dt>
                                            <dd className="mt-2 text-sm leading-relaxed text-neutral-600">{desc}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </>
                        )}

                        {service.processSteps && service.processSteps.length > 0 && (
                            <>
                                <h3 className="font-display mt-12 text-2xl font-bold uppercase">Our {service.title.toLowerCase()} process</h3>
                                <ol className="mt-6 grid gap-6 sm:grid-cols-2">
                                    {service.processSteps.map(([title, text], i) => {
                                        const StepIcon = enh ? processStepIcons[i % processStepIcons.length] : null;
                                        return (
                                        <li key={title} className="border-t-2 border-[hsl(var(--brand))] pt-4">
                                            {StepIcon ? (
                                                <div className="flex items-center gap-3">
                                                    <StepIcon className="h-5 w-5 text-[hsl(var(--brand))]" strokeWidth={2} />
                                                    <span className="font-display text-sm font-bold uppercase tracking-widest text-neutral-500">Step 0{i + 1}</span>
                                                </div>
                                            ) : (
                                                <span className="font-display text-sm font-bold uppercase tracking-widest text-neutral-500">Step 0{i + 1}</span>
                                            )}
                                            <h4 className="font-display mt-2 text-lg font-bold uppercase">{title}</h4>
                                            <p className="mt-2 text-sm leading-relaxed text-neutral-600">{text}</p>
                                        </li>
                                        );
                                    })}
                                </ol>
                            </>
                        )}

                        {service.floridaNotes && service.floridaNotes.length > 0 && (
                            <>
                                <h3 className="font-display mt-12 text-2xl font-bold uppercase">Florida considerations</h3>
                                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                                    Building in the Tampa Bay and Sarasota region comes with conditions that affect scope, cost and permitting. These are the issues that most often affect {service.title.toLowerCase()} projects here.
                                </p>
                                <div className="mt-6 grid gap-6 md:grid-cols-2">
                                    {service.floridaNotes.map(([title, text]) => (
                                        <div key={title} className="border-l-2 border-[hsl(var(--brand))] bg-neutral-50 p-5">
                                            <h4 className="font-display text-lg font-bold uppercase">{title}</h4>
                                            <p className="mt-2 text-sm leading-relaxed text-neutral-600">{text}</p>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}

                        {enh && (
                            <>
                                <h3 className="font-display mt-12 text-2xl font-bold uppercase">What affects the cost of {service.title.toLowerCase()}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                                    Every estimate is built from the same line items. Knowing what drives them helps you compare bids fairly and decide where to invest.
                                </p>
                                <dl className="mt-6 divide-y divide-neutral-200 border-y border-neutral-200">
                                    {enh.costFactors.map(([term, desc]) => (
                                        <div key={term} className="py-5">
                                            <dt className="font-display text-lg font-bold uppercase">{term}</dt>
                                            <dd className="mt-2 text-sm leading-relaxed text-neutral-600">{desc}</dd>
                                        </div>
                                    ))}
                                </dl>
                                <p className="mt-5 text-sm leading-relaxed text-neutral-600">
                                    After a walkthrough and scope conversation, we return a written line-item proposal — usually within five business days. Allowances for owner-selected finishes are stated plainly, and payments follow completed milestones. See how owners fund projects on our{' '}
                                    <Link to="/financing" className="font-semibold underline decoration-[hsl(var(--brand))] underline-offset-2 hover:text-[hsl(var(--brand))]">financing page</Link>.
                                </p>

                                <h3 className="font-display mt-12 text-2xl font-bold uppercase">Permits and inspections</h3>
                                <div className="mt-3 space-y-4 leading-relaxed text-neutral-600">
                                    <p>
                                        {service.title} work in Florida is governed by the Florida Building Code. If you live inside city limits — Tampa, St. Petersburg, Clearwater, Sarasota, Bradenton — the permit runs through the city’s building department. In unincorporated areas it goes through the county. Each department sets its own review times and inspection windows, which is why we file early and order long-lead materials during pre-construction.
                                    </p>
                                    <p>
                                        We schedule every required inspection and keep the records in your closeout package, alongside sign-offs and warranty documents. Read more about our{' '}
                                        <Link to="/safety" className="font-semibold underline decoration-[hsl(var(--brand))] underline-offset-2 hover:text-[hsl(var(--brand))]">licensing, insurance and site safety standards</Link>.
                                    </p>
                                </div>

                                <h3 className="font-display mt-12 text-2xl font-bold uppercase">How to choose a {service.title.toLowerCase()} contractor</h3>
                                <div className="mt-4 space-y-4 leading-relaxed text-neutral-600">
                                    <p>
                                        The contractor you hire matters more than any single finish. Before signing, confirm the following:
                                    </p>
                                    <ul className="space-y-2">
                                        <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand))]" /><span><strong className="text-neutral-800">Verify the license.</strong> A Florida Certified General Contractor (CGC) number can be confirmed through the state DBPR online license check. Ours is {company.licenseNumber}.</span></li>
                                        <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand))]" /><span><strong className="text-neutral-800">Ask for certificates of insurance.</strong> General liability and workers' compensation should be sent directly to your HOA, lender or landlord — not handed over as a photocopy.</span></li>
                                        <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand))]" /><span><strong className="text-neutral-800">Require a line-item proposal.</strong> Fixed pricing with stated allowances lets you compare bids on equal terms and exposes where money is hidden in a single lump sum.</span></li>
                                        <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand))]" /><span><strong className="text-neutral-800">Confirm who supervises the site.</strong> A dedicated superintendent on site — not a project manager juggling ten jobs by phone — is what keeps a project on schedule.</span></li>
                                        <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand))]" /><span><strong className="text-neutral-800">Get the warranty in writing.</strong> Workmanship coverage and manufacturer warranties should be documented in a closeout package at handover, not promised verbally.</span></li>
                                    </ul>
                                    <p>
                                        See completed work in our{' '}
                                        <Link to="/projects" className="font-semibold underline decoration-[hsl(var(--brand))] underline-offset-2 hover:text-[hsl(var(--brand))]">project gallery</Link>, or read what other owners say on our{' '}
                                        <Link to="/reviews" className="font-semibold underline decoration-[hsl(var(--brand))] underline-offset-2 hover:text-[hsl(var(--brand))]">reviews page</Link>.
                                    </p>
                                </div>

                                <h3 className="font-display mt-12 text-2xl font-bold uppercase">Why homeowners hire Brothers Remodelers</h3>
                                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                                    {[
                                        [ShieldCheck, 'Licensed & insured', `${company.license}. Certificates issued to your HOA or lender on request.`],
                                        [enh.whyIcon, enh.whyTitle, enh.whyText],
                                        [Clock, 'On-schedule builds', 'A live schedule and weekly photo updates from a dedicated site superintendent.'],
                                        [Check, 'Two-year warranty', 'Workmanship warranty plus manufacturer warranties, documented at closeout.'],
                                    ].map(([Icon, title, text]) => (
                                        <div key={title} className="flex gap-3 border border-neutral-200 p-4">
                                            <Icon className="mt-0.5 h-5 w-5 shrink-0 text-[hsl(var(--brand))]" strokeWidth={2} />
                                            <div>
                                                <h4 className="font-semibold">{title}</h4>
                                                <p className="mt-1 text-sm text-neutral-600">{text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}

                        <h3 className="font-display mt-12 text-2xl font-bold uppercase">Cities we serve</h3>
                        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                            We provide {service.title.toLowerCase()} for homeowners and property owners across the Tampa Bay and Sarasota region. Select a county below to see the communities we serve, or browse the full{' '}
                            <Link to="/areas-we-serve" className="font-semibold text-[hsl(var(--ink))] underline decoration-[hsl(var(--brand))] underline-offset-2 hover:text-[hsl(var(--brand))]">Areas We Serve</Link> page.
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {areas.map((a) => (
                                <Link key={a.slug} to={a.path ?? `/areas-we-serve/${a.slug}`} className="border border-neutral-300 px-4 py-2 text-xs font-bold uppercase tracking-widest hover:border-[hsl(var(--brand))] hover:text-[hsl(var(--brand))]">
                                    {a.city}
                                </Link>
                            ))}
                        </div>

                        {service.relatedServices && service.relatedServices.length > 0 && (
                            <>
                                <h3 className="font-display mt-12 text-2xl font-bold uppercase">Related services</h3>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {service.relatedServices.map((s) => (
                                        <Link key={s.slug} to={`/services/${s.slug}`} className="border border-neutral-300 px-4 py-2 text-xs font-bold uppercase tracking-widest hover:border-[hsl(var(--brand))] hover:text-[hsl(var(--brand))]">
                                            {s.label}
                                        </Link>
                                    ))}
                                </div>
                            </>
                        )}

                        <h3 className="font-display mt-12 text-2xl font-bold uppercase">Questions we get asked</h3>
                        <div className="mt-4"><FaqList items={service.faqs} /></div>

                        <h3 className="font-display mt-12 text-2xl font-bold uppercase">Plan your {service.title.toLowerCase()} project</h3>
                        <div className="mt-4 space-y-4 leading-relaxed text-neutral-600">
                            <p>
                                Ready to move forward? The fastest path is a free site walkthrough — we measure, confirm scope and return a written line-item proposal within five business days.{' '}
                                <Link to="/quote" className="font-semibold underline decoration-[hsl(var(--brand))] underline-offset-2 hover:text-[hsl(var(--brand))]">Request a free quote</Link> or{' '}
                                <Link to="/contact" className="font-semibold underline decoration-[hsl(var(--brand))] underline-offset-2 hover:text-[hsl(var(--brand))]">contact our office</Link> directly.
                            </p>
                        </div>

                        {enh && (
                            <>
                                <h3 className="font-display mt-12 text-2xl font-bold uppercase">Where we work</h3>
                                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                                    We provide {service.title.toLowerCase()} across the Tampa Bay and Sarasota region, including{' '}
                                    <Link to="/areas-we-serve/hillsborough/tampa" className="font-semibold underline decoration-[hsl(var(--brand))] underline-offset-2 hover:text-[hsl(var(--brand))]">Tampa</Link>,{' '}
                                    <Link to="/areas-we-serve/pinellas/st-petersburg" className="font-semibold underline decoration-[hsl(var(--brand))] underline-offset-2 hover:text-[hsl(var(--brand))]">St. Petersburg</Link>,{' '}
                                    <Link to="/areas-we-serve/pasco/wesley-chapel" className="font-semibold underline decoration-[hsl(var(--brand))] underline-offset-2 hover:text-[hsl(var(--brand))]">Wesley Chapel</Link>,{' '}
                                    <Link to="/areas-we-serve/sarasota/sarasota" className="font-semibold underline decoration-[hsl(var(--brand))] underline-offset-2 hover:text-[hsl(var(--brand))]">Sarasota</Link>{' '}
                                    and{' '}
                                    <Link to="/areas-we-serve/manatee/bradenton" className="font-semibold underline decoration-[hsl(var(--brand))] underline-offset-2 hover:text-[hsl(var(--brand))]">Bradenton</Link>.{' '}
                                    See the full list on our{' '}
                                    <Link to="/areas-we-serve" className="font-semibold underline decoration-[hsl(var(--brand))] underline-offset-2 hover:text-[hsl(var(--brand))]">areas we serve page</Link>.
                                </p>
                            </>
                        )}
                    </div>
                    <div className="lg:sticky lg:top-32 lg:self-start">
                        <GetEstimateCTA heading="Get an Estimate" text={`Request a free, no-obligation line-item proposal for your ${service.title.toLowerCase()} project within five business days.`} />
                    </div>
                </div>
            </Section>
            <CtaBand heading={`Get a ${service.title.toLowerCase()} estimate`} />
            <CitiesWeServe />
        </SiteLayout>
    );
};

export const AreasPage = () => (
    <SiteLayout>
        <Meta title="Areas We Serve | Tampa Bay & Sarasota Home Remodelers | Brothers Remodelers" description="Brothers Remodelers serves Hillsborough, Pinellas, Pasco, Sarasota and Manatee counties with licensed general contracting, renovations and concrete work." />
        <PageHero title="Areas We Serve" subtitle="Local crews and local knowledge in every county we build in." image={officeImage} crumbs={[{ label: 'Areas We Serve' }]} />
        <Section width="wide">
            <div className="grid gap-8 md:grid-cols-2">
                {areas.map((a) => (
                    <article key={a.slug} className="border border-neutral-200">
                        <img src={a.image} alt={`${a.city} construction project`} className="h-52 w-full object-cover" />
                        <div className="p-6">
                            <h2 className="font-display text-2xl font-bold uppercase">{a.city} Contractors</h2>
                            <p className="text-xs uppercase tracking-widest text-neutral-500">{a.region}</p>
                            <p className="mt-3 text-sm leading-relaxed text-neutral-600">{a.blurb}</p>
                            <Link to={a.path ?? `/areas-we-serve/${a.slug}`} className="mt-5 inline-flex min-h-[44px] items-center bg-[hsl(var(--ink))] px-5 text-xs font-bold uppercase tracking-widest text-white">
                                {a.city} details
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </Section>
        <CtaBand />
    </SiteLayout>
);

export const AreaDetailPage = ({ slugOverride }) => {
    const { slug } = useParams();
    const area = areas.find((a) => a.slug === (slugOverride ?? slug));
    if (!area) return <Navigate to="/areas-we-serve" replace />;
    return (
        <SiteLayout>
            <Meta title={`${area.city} Home Remodeler | Brothers Remodelers`} description={`Licensed home remodeler in ${area.city}, ${area.region}. Whole-home renovations, kitchens, bathrooms, additions and concrete work with free estimates.`} />
            <PageHero title={`${area.city} Home Remodeler`} subtitle={area.blurb} image={area.image} crumbs={[{ label: 'Areas We Serve', to: '/areas-we-serve' }, { label: area.city }]} />
            <Section width="wide">
                <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
                    <div>
                        <Eyebrow>Building in {area.city}</Eyebrow>
                        <h2 className="font-display mt-4 text-3xl font-bold uppercase md:text-4xl">What {area.city} projects require</h2>
                        <Prose><p className="mt-4">{area.notes}</p></Prose>
                        <h3 className="font-display mt-10 text-2xl font-bold uppercase">Neighborhoods we cover</h3>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {area.neighborhoods.map((n) => {
                                const hillsSlug = area.slug === 'hillsborough' ? cityPageByNeighborhood[n] : undefined;
                                const match = neighborhoodToCity[n];
                                const link = match ? `/areas-we-serve/${match.countySlug}/${match.slug}` : (hillsSlug ? `/areas-we-serve/hillsborough/${hillsSlug}` : null);
                                return link ? (
                                    <Link
                                        key={n}
                                        to={link}
                                        className="border border-neutral-300 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-neutral-600 hover:border-[hsl(var(--brand))] hover:text-[hsl(var(--brand))]"
                                    >
                                        {n}
                                    </Link>
                                ) : (
                                    <span key={n} className="border border-neutral-300 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-neutral-600">{n}</span>
                                );
                            })}
                        </div>
                        {area.slug === 'hillsborough' && (
                            <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                                Planning a project in the city itself? See our dedicated{' '}
                                <Link to="/areas-we-serve/hillsborough/tampa" className="font-semibold underline hover:text-[hsl(var(--brand))]">
                                    Tampa home remodeling and general contracting page
                                </Link>.
                            </p>
                        )}
                        {area.slug === 'hillsborough' && (
                            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                                Building in the Brandon area? See our dedicated{' '}
                                <Link to="/areas-we-serve/hillsborough/brandon" className="font-semibold underline hover:text-[hsl(var(--brand))]">
                                    Brandon home remodeling and general contracting page
                                </Link>.
                            </p>
                        )}
                        {area.slug === 'hillsborough' && (
                            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                                We also maintain dedicated city pages for{' '}
                                <Link to="/areas-we-serve/hillsborough/riverview" className="font-semibold underline hover:text-[hsl(var(--brand))]">Riverview</Link>,{' '}
                                <Link to="/areas-we-serve/hillsborough/westchase" className="font-semibold underline hover:text-[hsl(var(--brand))]">Westchase</Link>,{' '}
                                <Link to="/areas-we-serve/hillsborough/lutz" className="font-semibold underline hover:text-[hsl(var(--brand))]">Lutz</Link>,{' '}
                                <Link to="/areas-we-serve/hillsborough/odessa" className="font-semibold underline hover:text-[hsl(var(--brand))]">Odessa</Link> and{' '}
                                <Link to="/areas-we-serve/hillsborough/fishhawk" className="font-semibold underline hover:text-[hsl(var(--brand))]">FishHawk</Link>.
                            </p>
                        )}
                        {area.slug === 'sarasota' && (
                            <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                                Lakewood Ranch spans Manatee and Sarasota counties; see our{' '}
                                <Link to="/areas-we-serve/manatee/lakewood-ranch" className="font-semibold underline hover:text-[hsl(var(--brand))]">
                                    Lakewood Ranch page
                                </Link>.
                            </p>
                        )}
                        <h3 className="font-display mt-10 text-2xl font-bold uppercase">Services available in {area.city}</h3>
                        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                            {services.map((s) => (
                                <li key={s.slug}>
                                    <Link to={`/services/${s.slug}`} className="flex gap-2 border border-neutral-200 p-3 text-sm text-neutral-700 hover:border-[hsl(var(--brand))]">
                                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand))]" />{s.title} in {area.city}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:sticky lg:top-32 lg:self-start">
                        <QuoteForm compact defaultCity={area.city} />
                    </div>
                </div>
            </Section>
            <CtaBand heading={`Serving ${area.city} six days a week`} />
        </SiteLayout>
    );
};

export const AboutPage = () => (
    <SiteLayout>
        <Meta title="About Us | Family-Run Home Remodelers | Brothers Remodelers" description="Founded in 2006, Brothers Remodelers is a family-run home remodeling company delivering renovations, additions and commercial build-outs across the Tampa Bay and Sarasota region." />
        <PageHero title="About Brothers Remodelers" subtitle="A family-run remodeling company that grew by finishing jobs, not by advertising them." image={founderImage} crumbs={[{ label: 'About' }]} />
        <Section>
            <div className="grid gap-10 lg:grid-cols-2">
                <div>
                    <Eyebrow>Our story</Eyebrow>
                    <Prose>
                        <p className="mt-4">
                            We started in {company.founded} with one truck and a punch list. Nearly two decades later we run
                            whole-home renovations, additions and commercial build-outs across the Tampa Bay and Sarasota region with the same rule:
                            the person who priced the job is still reachable when it is being built.
                        </p>
                        <p>
                            Most of our work comes from repeat owners, architects and property managers. That only happens
                            when schedules hold, sites stay clean and change orders are honest.
                        </p>
                        <p>
                            Our crews are in-house for carpentry, demolition and supervision, and we hold long-standing
                            relationships with licensed plumbers, electricians and HVAC partners rather than chasing the
                            cheapest sub each month.
                        </p>
                    </Prose>
                </div>
                <img src={kitchenImage} alt="Completed kitchen renovation" className="h-full w-full object-cover" />
            </div>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((s) => (
                    <div key={s.label} className="border-t-2 border-[hsl(var(--brand))] pt-4">
                        <p className="font-display text-4xl font-bold">{s.value}{s.suffix}</p>
                        <p className="mt-1 text-xs uppercase tracking-widest text-neutral-500">{s.label}</p>
                    </div>
                ))}
            </div>
        </Section>
        <CtaBand />
    </SiteLayout>
);

export const ProcessPage = () => (
    <SiteLayout>
        <Meta title="Our Remodeling Process | Brothers Remodelers" description="From consultation and line-item estimate to pre-construction, build and closeout, see how Brothers Remodelers runs every remodeling project." />
        <PageHero title="Our Process" subtitle="Five stages, documented, so you always know what happens next." image={concreteImage} crumbs={[{ label: 'Process' }]} />
        <Section width="narrow">
            <ol className="space-y-8">
                {processSteps.map(([title, text], i) => (
                    <li key={title} className="flex gap-6 border-b border-neutral-200 pb-8">
                        <span className="font-display text-5xl font-bold text-[hsl(var(--brand))]">0{i + 1}</span>
                        <div>
                            <h2 className="font-display text-2xl font-bold uppercase">{title}</h2>
                            <p className="mt-2 leading-relaxed text-neutral-600">{text}</p>
                        </div>
                    </li>
                ))}
            </ol>
        </Section>
        <CtaBand />
    </SiteLayout>
);

export const ProjectsPage = () => (
    <SiteLayout>
        <Meta title="Project Gallery | Renovations & Build-Outs | Brothers Remodelers" description="Browse completed Brothers Remodelers projects: whole-home renovations, kitchens and baths, office build-outs, additions and foundation work across the Tampa Bay and Sarasota region." />
        <PageHero title="Project Gallery" subtitle="A sample of recently completed work with scope and delivered value." image={kitchenImage} crumbs={[{ label: 'Projects' }]} />
        <Section width="wide">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((p) => (
                    <article key={p.title} className="border border-neutral-200">
                        <img src={p.image} alt={p.title} className="h-64 w-full object-cover" />
                        <div className="p-5">
                            <p className="text-xs font-bold uppercase tracking-widest text-neutral-500">{p.place}</p>
                            <h2 className="font-display mt-1 text-xl font-bold uppercase">{p.title}</h2>
                            <p className="mt-2 text-sm text-neutral-600">{p.scope}</p>
                            <p className="mt-3 text-sm font-bold">{p.value}</p>
                        </div>
                    </article>
                ))}
            </div>
        </Section>
        <CtaBand />
    </SiteLayout>
);

export const ReviewsPage = () => (
    <SiteLayout>
        <Meta title="Client Reviews | Brothers Remodelers" description="Read reviews from homeowners, landlords and commercial tenants who hired Brothers Remodelers for renovations across the Tampa Bay and Sarasota region." />
        <PageHero title="Client Reviews" subtitle="4.9 average across 180+ verified reviews from homeowners across the region." image={heroImage} crumbs={[{ label: 'Reviews' }]} />
        <Section width="narrow">
            <div className="grid gap-6">
                {testimonials.map((t) => (
                    <blockquote key={t.name} className="border-l-2 border-[hsl(var(--brand))] bg-neutral-50 p-6">
                        <p className="leading-relaxed text-neutral-700">“{t.quote}”</p>
                        <footer className="mt-4 text-xs font-bold uppercase tracking-widest text-neutral-500">{t.name} — {t.role}</footer>
                    </blockquote>
                ))}
            </div>
        </Section>
        <CtaBand />
    </SiteLayout>
);

export const SafetyPage = () => (
    <SiteLayout>
        <Meta title="Safety, Licensing & Insurance | Brothers Remodelers" description="Brothers Remodelers holds a Florida Certified General Contractor license, general liability, workers' compensation and disability coverage, with site-specific safety plans on every job." />
        <PageHero title="Safety, Licensing & Insurance" subtitle="Documentation your building, lender or landlord can verify before we mobilize." image={concreteImage} crumbs={[{ label: 'Safety' }]} />
        <Section width="narrow">
            <Prose>
                <p>{company.license}. Certificates of insurance are issued to your HOA, managing agent or lender on request, usually the same business day.</p>
                <p>Every job gets a site-specific safety plan: heat and hydration protocols, dust containment and negative air in occupied homes, daily housekeeping, and OSHA-trained supervision on site.</p>
                <p>All required building department, special and progress inspections are scheduled by us and recorded in your closeout package alongside sign-offs and warranty documents.</p>
            </Prose>
        </Section>
        <CtaBand />
    </SiteLayout>
);

export const FinancingPage = () => (
    <SiteLayout>
        <Meta title="Renovation Financing Options | Brothers Remodelers" description="Understand renovation financing options for remodeling projects, from home equity lines and renovation loans to phased scheduling that fits your budget." />
        <PageHero title="Financing Your Project" subtitle="Practical ways owners fund renovations, plus how we phase scope to match a budget." image={kitchenImage} crumbs={[{ label: 'Financing' }]} />
        <Section width="narrow">
            <Prose>
                <p>Most of our residential clients fund work through a home equity line, a renovation loan or savings. We provide the line-item scope, schedule of values and payment milestones lenders typically request.</p>
                <p>If the full scope exceeds the budget today, we phase it: structural, mechanical and waterproofing work first, cosmetic finishes second, so nothing already built has to be reopened later.</p>
                <p>Payments follow completed milestones. We never ask for the full contract value up front, and deposits follow Florida home improvement contract requirements.</p>
            </Prose>
        </Section>
        <CtaBand />
    </SiteLayout>
);

export const CareersPage = () => (
    <SiteLayout>
        <Meta title="Remodeling Careers | Brothers Remodelers" description="Join Brothers Remodelers. We hire carpenters, superintendents, laborers and project managers across Hillsborough, Pinellas, Pasco, Sarasota and Manatee counties." />
        <PageHero title="Careers" subtitle="We hire people who take pride in the punch list." image={officeImage} crumbs={[{ label: 'Careers' }]} />
        <Section width="narrow">
            <Prose>
                <p>We are regularly hiring lead carpenters, site superintendents, skilled laborers and project managers. Pay is competitive and weekly, tools and PPE are provided, and we promote from the field.</p>
                <p>Send your experience and the trades you are strongest in to <a className="font-semibold underline" href={`mailto:${company.email}`}>{company.email}</a>, or use the form below and note the role in the details field.</p>
            </Prose>
            <div className="mt-10"><QuoteForm compact /></div>
        </Section>
    </SiteLayout>
);

export const FaqPage = () => (
    <SiteLayout>
        <Meta title="Frequently Asked Questions | Brothers Remodelers" description="Answers about licensing, pricing, timelines, change orders, warranties and service areas for Brothers Remodelers." />
        <PageHero title="Frequently Asked Questions" subtitle="Straight answers to what owners ask before signing a construction contract." image={heroImage} crumbs={[{ label: 'FAQ' }]} />
        <Section width="narrow"><FaqList items={faqs} /></Section>
        <CtaBand />
    </SiteLayout>
);

export const ContactPage = () => (
    <SiteLayout>
        <Meta title="Contact Us | Brothers Remodelers" description={`Contact Brothers Remodelers at ${company.phone} or ${company.email}. Office at ${company.address}. Free estimates across Hillsborough, Pinellas, Pasco, Sarasota and Manatee counties.`} />
        <PageHero title="Contact Us" subtitle="Call, email or send the form. An estimator replies within one business day." image={officeImage} crumbs={[{ label: 'Contact' }]} />
        <Section width="wide">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
                <div>
                    <Eyebrow>Office</Eyebrow>
                    <ul className="mt-6 space-y-5">
                        <li className="flex gap-3"><Phone className="mt-0.5 h-5 w-5 text-[hsl(var(--brand))]" /><a href={company.phoneHref} className="font-semibold">{company.phone}</a></li>
                        <li className="flex gap-3"><Mail className="mt-0.5 h-5 w-5 text-[hsl(var(--brand))]" /><a href={`mailto:${company.email}`} className="font-semibold">{company.email}</a></li>
                        <li className="flex gap-3"><MapPin className="mt-0.5 h-5 w-5 text-[hsl(var(--brand))]" />{company.address}</li>
                    </ul>
                    <p className="mt-6 text-sm text-neutral-600">{company.hours}</p>
                    <p className="mt-2 text-sm text-neutral-600">{company.license}</p>
                </div>
                <QuoteForm />
            </div>
        </Section>
    </SiteLayout>
);

export const QuotePage = () => (
    <SiteLayout>
        <Meta title="Request a Free Construction Quote | Brothers Remodelers" description="Request a free, no-obligation remodeling quote from Brothers Remodelers. Line-item pricing for renovations, additions and build-outs across the Tampa Bay and Sarasota region." />
        <PageHero title="Request a Free Quote" subtitle="Tell us about the project. We walk the site, then send a line-item proposal within five business days." image={heroImage} crumbs={[{ label: 'Free Quote' }]} />
        <Section width="wide">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
                <QuoteForm />
                <div>
                    <Eyebrow>What happens next</Eyebrow>
                    <ol className="mt-6 space-y-5">
                        {[
                            ['We call you back', 'Within one business day, to confirm scope and book the walkthrough.'],
                            ['Site walkthrough', 'A superintendent measures, photographs and flags existing conditions.'],
                            ['Line-item proposal', 'Fixed pricing with allowances and an outline schedule, in writing.'],
                            ['Contract & start date', 'Filings and procurement begin as soon as the contract is signed.'],
                        ].map(([t, d], i) => (
                            <li key={t} className="flex gap-4 border-b border-neutral-200 pb-4">
                                <span className="font-display text-3xl font-bold text-[hsl(var(--brand))]">0{i + 1}</span>
                                <div>
                                    <h3 className="font-semibold">{t}</h3>
                                    <p className="text-sm text-neutral-600">{d}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </Section>
    </SiteLayout>
);

export const PrivacyPage = () => (
    <SiteLayout>
        <Meta title="Privacy Policy | Brothers Remodelers" description="How Brothers Remodelers collects, uses and protects the information you submit through quote requests and contact forms." />
        <PageHero title="Privacy Policy" crumbs={[{ label: 'Privacy' }]} />
        <Section width="narrow">
            <Prose>
                <p>We collect only the details you submit through our quote and contact forms: name, email, phone, project location and project description. We use them to prepare your estimate and to contact you about your project.</p>
                <p>We do not sell or rent your information. We share it only with team members and trade partners who need it to price or perform your work.</p>
                <p>To request deletion of your information, email <a className="font-semibold underline" href={`mailto:${company.email}`}>{company.email}</a>.</p>
            </Prose>
        </Section>
    </SiteLayout>
);

export const TermsPage = () => (
    <SiteLayout>
        <Meta title="Terms of Service | Brothers Remodelers" description="Terms governing use of the Brothers Remodelers website, estimates, and communications." />
        <PageHero title="Terms of Service" crumbs={[{ label: 'Terms' }]} />
        <Section width="narrow">
            <Prose>
                <p>Content on this website is provided for general information about our construction services. Pricing examples and timelines are illustrative and are not offers.</p>
                <p>Estimates become binding only when issued in a signed written contract that states scope, schedule and payment milestones.</p>
                <p>By submitting a form you consent to be contacted about your project by phone, text or email.</p>
            </Prose>
        </Section>
    </SiteLayout>
);
