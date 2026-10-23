import React from 'react';
import LocalTradeLinks from '@/components/LocalTradeLinks';
import { Helmet } from 'react-helmet';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Check, Phone } from 'lucide-react';
import SiteLayout, { CtaBand, Eyebrow, Section } from '@/components/SiteLayout';
import GetEstimateCTA from '@/components/GetEstimateCTA';
import { company, kitchenImage, projects, stats } from '@/data/site';
import { cityProcess, homeownerInfo, getCity, citiesByCounty } from '@/data/allCities';

const cityWork = [
    { ...projects[1], image: '/images/project-kitchen-sink.jpg' },
    { ...projects[3], image: '/images/project-bath.jpg' },
    { ...projects[5], image: '/images/project-kitchen-island.jpg' },
];

const CityPage = () => {
    const { countySlug, citySlug } = useParams();
    const city = getCity(countySlug, citySlug);
    if (!city) return <Navigate to={`/areas-we-serve/${countySlug}`} replace />;

    const siblings = citiesByCounty(countySlug).filter((c) => c.slug !== city.slug);
    const cityUrl = `https://brothersremodelers.com/areas-we-serve/${countySlug}/${city.slug}`;
    const countyUrl = `https://brothersremodelers.com/areas-we-serve/${countySlug}`;

    const structuredData = [
        {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brothersremodelers.com/' },
                { '@type': 'ListItem', position: 2, name: 'Areas We Serve', item: 'https://brothersremodelers.com/areas-we-serve' },
                { '@type': 'ListItem', position: 3, name: city.countyName, item: countyUrl },
                { '@type': 'ListItem', position: 4, name: city.name, item: cityUrl },
            ],
        },
        {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: city.faqs.map(([q, a]) => ({
                '@type': 'Question',
                name: q,
                acceptedAnswer: { '@type': 'Answer', text: a },
            })),
        },
    ];

    return (
        <SiteLayout>
            <Helmet>
                <title>{city.metaTitle}</title>
                <meta name="description" content={city.metaDescription} />
                {structuredData.map((sd, i) => (
                    <script key={i} type="application/ld+json">{JSON.stringify(sd)}</script>
                ))}
            </Helmet>

            {/* Hero */}
            <div className="relative isolate overflow-hidden bg-[hsl(var(--ink))]">
                <img src={kitchenImage} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
                <div className="relative mx-auto max-w-[72rem] px-4 py-16 md:py-24">
                    <nav className="mb-5 flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-white/50">
                        <Link to="/" className="hover:text-[hsl(var(--brand))]">Home</Link>
                        <span>/</span>
                        <Link to="/areas-we-serve" className="hover:text-[hsl(var(--brand))]">Areas We Serve</Link>
                        <span>/</span>
                        <Link to={`/areas-we-serve/${countySlug}`} className="hover:text-[hsl(var(--brand))]">{city.countyName}</Link>
                        <span>/</span>
                        <span className="text-white/80">{city.name}</span>
                    </nav>
                    <h1 className="font-display max-w-3xl text-4xl font-bold uppercase leading-[1.05] text-white sm:text-5xl md:text-6xl">
                        {city.name} Home Remodeling &amp; General Contracting
                    </h1>
                    <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">{city.heroIntro}</p>
                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link
                            to="/quote"
                            className="flex min-h-[44px] items-center bg-[hsl(var(--brand))] px-6 text-sm font-bold uppercase tracking-wide text-[hsl(var(--brand-foreground))] transition-transform hover:-translate-y-px active:translate-y-0"
                        >
                            Request a Free Quote
                        </Link>
                        <Link
                            to="/services"
                            className="flex min-h-[44px] items-center border-2 border-white/40 px-6 text-sm font-bold uppercase tracking-wide text-white hover:border-white"
                        >
                            Explore Our Services
                        </Link>
                    </div>
                </div>
                <div className="hatch h-1.5 w-full" />
            </div>

            {/* Direct answer / AEO */}
            <Section width="narrow">
                <Eyebrow>Quick answer</Eyebrow>
                <h2 className="font-display mt-4 text-3xl font-bold uppercase md:text-4xl">
                    Looking for a Remodeling Contractor in {city.name}, FL?
                </h2>
                <p className="mt-5 leading-relaxed text-neutral-600">{city.quickAnswer}</p>
            </Section>

            {/* Services */}
            <Section width="wide" className="border-t border-neutral-200">
                <Eyebrow>What we build</Eyebrow>
                <h2 className="font-display mt-4 text-3xl font-bold uppercase md:text-4xl">Home Remodeling Services in {city.name}</h2>
                <p className="mt-4 max-w-2xl leading-relaxed text-neutral-600">{city.servicesIntro}</p>
                <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
                    {city.services.map((s) => (
                        <article key={s.title} className="border-t-2 border-neutral-200 pt-5">
                            <h3 className="font-display text-xl font-bold uppercase">
                                <Link to={s.to} className="hover:text-[hsl(var(--brand))]">{s.title}</Link>
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-neutral-600">{s.text}</p>
                            <Link
                                to={s.to}
                                className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[hsl(var(--brand))] hover:underline"
                            >
                                {s.title} details
                            </Link>
                        </article>
                    ))}
                </div>
            </Section>

            {/* Why homeowners remodel */}
            <Section width="wide" className="bg-neutral-50">
                <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
                    <div>
                        <Eyebrow>Why remodel</Eyebrow>
                        <h2 className="font-display mt-4 text-3xl font-bold uppercase md:text-4xl">{city.whyTitle}</h2>
                        <p className="mt-4 leading-relaxed text-neutral-600">{city.whyIntro}</p>
                    </div>
                    <ul className="space-y-5">
                        {city.whyRemodel.map(([title, text]) => (
                            <li key={title} className="flex gap-3 border-b border-neutral-200 pb-5 last:border-0">
                                <Check className="mt-1 h-4 w-4 shrink-0 text-[hsl(var(--brand))]" />
                                <div>
                                    <h3 className="font-semibold">{title}</h3>
                                    <p className="mt-1 text-sm leading-relaxed text-neutral-600">{text}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </Section>

            {/* Service area */}
            <Section width="standard">
                <Eyebrow>Service area</Eyebrow>
                <h2 className="font-display mt-4 text-3xl font-bold uppercase md:text-4xl">{city.areaTitle}</h2>
                <div className="mt-5 space-y-4 leading-relaxed text-neutral-600">
                    {city.areaParas.map((p) => (
                        <p key={p.slice(0, 40)}>{p}</p>
                    ))}
                    <p>
                        See the full <Link to={`/areas-we-serve/${countySlug}`} className="font-semibold underline hover:text-[hsl(var(--brand))]">{city.countyName} service area page</Link> or
                        browse all <Link to="/areas-we-serve" className="font-semibold underline hover:text-[hsl(var(--brand))]">areas we serve</Link> across the Tampa Bay and Sarasota region.
                    </p>
                    {siblings.length > 0 && (
                        <p>
                            We also maintain dedicated city pages for{' '}
                            {siblings.map((sib, i) => (
                                <React.Fragment key={sib.slug}>
                                    <Link to={`/areas-we-serve/${countySlug}/${sib.slug}`} className="font-semibold underline hover:text-[hsl(var(--brand))]">{sib.name}</Link>
                                    {i < siblings.length - 2 ? ', ' : i === siblings.length - 2 ? ' and ' : '.'}
                                </React.Fragment>
                            ))}
                        </p>
                    )}
                </div>
            </Section>

            {/* Local homeowner information */}
            <Section width="wide" className="border-t border-neutral-200">
                <Eyebrow>Plan the project</Eyebrow>
                <h2 className="font-display mt-4 text-3xl font-bold uppercase md:text-4xl">What a {city.name} Homeowner Should Know Before Starting</h2>
                <p className="mt-4 max-w-2xl leading-relaxed text-neutral-600">
                    A successful remodel is decided before demolition starts. These are the eight things we tell every
                    homeowner to work through — with us or with any contractor.
                </p>
                <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
                    {homeownerInfo.map(([title, text], i) => (
                        <div key={title} className="border-t-2 border-neutral-200 pt-5">
                            <h3 className="font-display flex items-center text-lg font-bold uppercase">
                                <span className="mr-3 text-[hsl(var(--brand))]">{String(i + 1).padStart(2, '0')}</span>
                                {title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-neutral-600">{text}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Process */}
            <Section width="narrow" className="bg-neutral-50">
                <Eyebrow>How it works</Eyebrow>
                <h2 className="font-display mt-4 text-3xl font-bold uppercase md:text-4xl">Our Remodeling Process</h2>
                <ol className="mt-10 grid gap-x-8 gap-y-8 md:grid-cols-2">
                    {cityProcess.map(([title, text], i) => (
                        <li key={title} className="flex gap-6 border-b border-neutral-200 pb-8 last:border-0">
                            <span className="font-display text-5xl font-bold text-[hsl(var(--brand))]">0{i + 1}</span>
                            <div>
                                <h3 className="font-display text-2xl font-bold uppercase">{title}</h3>
                                <p className="mt-2 leading-relaxed text-neutral-600">{text}</p>
                            </div>
                        </li>
                    ))}
                </ol>
            </Section>

            {/* Projects */}
            <Section width="wide">
                <Eyebrow>Recent work</Eyebrow>
                <h2 className="font-display mt-4 text-3xl font-bold uppercase md:text-4xl">{city.name} Area Remodeling Projects</h2>
                <p className="mt-4 max-w-2xl leading-relaxed text-neutral-600">
                    A sample of recently completed Brothers Remodelers projects. References from the {city.countyName}
                    area are available on request during your estimate.
                </p>
                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    {cityWork.map((p) => (
                        <article key={p.title} className="border border-neutral-200">
                            <img src={p.image} alt={`${p.scope.split(',')[0]} project by Brothers Remodelers`} className="h-56 w-full object-cover" />
                            <div className="p-5">
                                <p className="text-xs font-bold uppercase tracking-widest text-neutral-500">{p.place}</p>
                                <h3 className="font-display mt-1 text-xl font-bold uppercase">{p.title}</h3>
                                <p className="mt-2 text-sm text-neutral-600">{p.scope}</p>
                            </div>
                        </article>
                    ))}
                </div>
                <Link
                    to="/projects"
                    className="mt-8 inline-flex min-h-[44px] items-center bg-[hsl(var(--ink))] px-5 text-xs font-bold uppercase tracking-widest text-white"
                >
                    View the full project gallery
                </Link>
            </Section>

            {/* Trust */}
            <Section width="wide" className="bg-[hsl(var(--ink))] text-white">
                <Eyebrow className="text-white/60">Why homeowners choose us</Eyebrow>
                <h2 className="font-display mt-4 text-3xl font-bold uppercase md:text-4xl">Why {city.name} Homeowners Choose Brothers Remodelers</h2>
                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((s) => (
                        <div key={s.label} className="border-t-2 border-[hsl(var(--brand))] pt-4">
                            <p className="font-display text-4xl font-bold">{s.value}{s.suffix}</p>
                            <p className="mt-1 text-xs uppercase tracking-widest text-white/60">{s.label}</p>
                        </div>
                    ))}
                </div>
                <ul className="mt-10 grid gap-3 text-sm leading-relaxed text-white/80 md:grid-cols-2">
                    <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand))]" />Florida certified general contractor — license #CGC1535875, fully licensed and insured.</li>
                    <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand))]" />A dedicated superintendent on every site, with weekly photo updates.</li>
                    <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand))]" />Written line-item proposals and signed change orders before work proceeds.</li>
                    <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand))]" />Two-year workmanship warranty plus manufacturer warranties, documented at closeout.</li>
                </ul>
                <p className="mt-8 text-sm text-white/60">
                    Read <Link to="/reviews" className="font-semibold underline hover:text-[hsl(var(--brand))]">client reviews</Link>, learn
                    more <Link to="/about" className="font-semibold underline hover:text-[hsl(var(--brand))]">about our company</Link>, or
                    review our <Link to="/safety" className="font-semibold underline hover:text-[hsl(var(--brand))]">licensing and insurance documentation</Link>.
                </p>
            </Section>

            {/* FAQ */}
            <Section width="narrow">
                <Eyebrow>FAQ</Eyebrow>
                <h2 className="font-display mt-4 text-3xl font-bold uppercase md:text-4xl">Frequently Asked Questions</h2>
                <div className="mt-8 divide-y divide-neutral-200 border-y border-neutral-200">
                    {city.faqs.map(([q, a]) => (
                        <div key={q} className="py-5">
                            <h3 className="font-display text-lg font-bold uppercase">{q}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-neutral-600">{a}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Quote */}
            <Section width="wide" className="border-t border-neutral-200">
                <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
                    <div>
                        <Eyebrow>Free estimate</Eyebrow>
                        <h2 className="font-display mt-4 text-3xl font-bold uppercase md:text-4xl">Request a Free Quote</h2>
                        <p className="mt-4 leading-relaxed text-neutral-600">
                            Tell us about your {city.name} remodeling project. We walk the site, then send a line-item proposal
                            within five business days — or call and an estimator picks up.
                        </p>
                        <a
                            href={company.phoneHref}
                            className="mt-6 inline-flex min-h-[44px] items-center gap-2 border border-neutral-300 px-5 text-sm font-semibold text-[hsl(var(--ink))] hover:border-[hsl(var(--ink))]"
                        >
                            <Phone className="h-4 w-4" strokeWidth={2.2} />
                            {company.phone}
                        </a>
                        <p className="mt-4 text-sm text-neutral-500">{company.hours} · {company.license}</p>
                    </div>
                    <GetEstimateCTA heading="Get an Estimate" text={`Tell us about your ${city.name} remodeling project and get a free, no-obligation line-item proposal within five business days.`} />
                </div>
            </Section>

            <LocalTradeLinks areaUrl={`/areas-we-serve/${countySlug}/${citySlug}`} />
            <CtaBand heading={`Planning a ${city.name} remodeling project?`} text="Send us your scope and we will come out, measure, and return a line-item proposal within five business days." />
        </SiteLayout>
    );
};

export default CityPage;
