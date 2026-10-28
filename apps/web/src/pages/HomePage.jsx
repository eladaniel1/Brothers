import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight, Hammer, HardHat, Ruler, ShieldCheck, Star } from 'lucide-react';
import SiteLayout, { Eyebrow, Section } from '@/components/SiteLayout';
import GetEstimateCTA from '@/components/GetEstimateCTA';
import Reveal from '@/components/Reveal';
import CountUp from '@/components/CountUp';
import Seo from '@/components/Seo';
import ServiceCardGrid from '@/components/ServiceCardGrid';
import FinancingSection from '@/components/FinancingSection';
import FloridaServiceMap from '@/components/FloridaServiceMap';
import { MarkerUnderline } from '@/components/MarkerAccents';
import { company, heroImage, processSteps, projects, services, stats, testimonials } from '@/data/site';
const ticker = ['Gut Renovations', 'Kitchens & Baths', 'Home Additions', 'Commercial Build-Outs', 'Concrete & Foundations', 'Licensed & Insured'];

const areaCardCommunities = {
  hillsborough: ['Tampa', 'Brandon', 'Riverview', 'Plant City', 'Temple Terrace'],
  pinellas: ['St. Petersburg', 'Clearwater', 'Largo', 'Palm Harbor', 'Dunedin'],
  pasco: ['Wesley Chapel', "Land O' Lakes", 'New Port Richey', 'Zephyrhills'],
  sarasota: ['Sarasota', 'Venice', 'North Port', 'Siesta Key'],
  manatee: ['Bradenton', 'Lakewood Ranch', 'Palmetto', 'Parrish'],
};
const cityLinks = {
  Tampa: '/areas-we-serve/hillsborough/tampa',
  Brandon: '/areas-we-serve/hillsborough/brandon',
  Riverview: '/areas-we-serve/hillsborough/riverview',
  Westchase: '/areas-we-serve/hillsborough/westchase',
  Lutz: '/areas-we-serve/hillsborough/lutz',
  Odessa: '/areas-we-serve/hillsborough/odessa',
  'FishHawk / Lithia': '/areas-we-serve/hillsborough/fishhawk',
  'St. Petersburg': '/areas-we-serve/pinellas/st-petersburg',
  Clearwater: '/areas-we-serve/pinellas/clearwater',
  'Palm Harbor': '/areas-we-serve/pinellas/palm-harbor',
  'Wesley Chapel': '/areas-we-serve/pasco/wesley-chapel',
  Sarasota: '/areas-we-serve/sarasota/sarasota',
  'Siesta Key': '/areas-we-serve/sarasota/siesta-key',
  'Longboat Key': '/areas-we-serve/sarasota/longboat-key',
  'Lakewood Ranch': {
    sarasota: '/areas-we-serve/manatee/lakewood-ranch',
    manatee: '/areas-we-serve/manatee/lakewood-ranch'
  },
  Venice: '/areas-we-serve/sarasota/venice',
  'North Port': '/areas-we-serve/sarasota/north-port',
  Bradenton: '/areas-we-serve/manatee/bradenton',
  // Additional Hillsborough
  Mango: '/areas-we-serve/hillsborough/mango',
  'Lake Magdalene': '/areas-we-serve/hillsborough/lake-magdalene',
  'Temple Terrace': '/areas-we-serve/hillsborough/temple-terrace',
  'Carrollwood / Northdale': '/areas-we-serve/hillsborough/carrollwood-northdale',
  "Town 'n' Country": '/areas-we-serve/hillsborough/town-n-country',
  Seffner: '/areas-we-serve/hillsborough/seffner',
  Gibsonton: '/areas-we-serve/hillsborough/gibsonton',
  'Citrus Park': '/areas-we-serve/hillsborough/citrus-park',
  'Valrico / Bloomingdale': '/areas-we-serve/hillsborough/valrico-bloomingdale',
  Thonotosassa: '/areas-we-serve/hillsborough/thonotosassa',
  'Apollo Beach': '/areas-we-serve/hillsborough/apollo-beach',
  Keystone: '/areas-we-serve/hillsborough/keystone',
  Dover: '/areas-we-serve/hillsborough/dover',
  Ruskin: '/areas-we-serve/hillsborough/ruskin',
  'Plant City': '/areas-we-serve/hillsborough/plant-city',
  'Sun City Center': '/areas-we-serve/hillsborough/sun-city-center',
  Wimauma: '/areas-we-serve/hillsborough/wimauma',
  Balm: '/areas-we-serve/hillsborough/balm',
  // Additional Pinellas
  Oldsmar: '/areas-we-serve/pinellas/oldsmar',
  'Safety Harbor': '/areas-we-serve/pinellas/safety-harbor',
  'Pinellas Park': '/areas-we-serve/pinellas/pinellas-park',
  'East Lake': '/areas-we-serve/pinellas/east-lake',
  Largo: '/areas-we-serve/pinellas/largo',
  'Kenneth City': '/areas-we-serve/pinellas/kenneth-city',
  Belleair: '/areas-we-serve/pinellas/belleair',
  Seminole: '/areas-we-serve/pinellas/seminole',
  Dunedin: '/areas-we-serve/pinellas/dunedin',
  Gulfport: '/areas-we-serve/pinellas/gulfport',
  'Clearwater Beach': '/areas-we-serve/pinellas/clearwater-beach',
  'Indian Rocks Beach': '/areas-we-serve/pinellas/indian-rocks-beach',
  'Madeira Beach': '/areas-we-serve/pinellas/madeira-beach',
  'Treasure Island': '/areas-we-serve/pinellas/treasure-island',
  'St. Pete Beach': '/areas-we-serve/pinellas/st-pete-beach',
  'Tarpon Springs': '/areas-we-serve/pinellas/tarpon-springs',
  'Tierra Verde': '/areas-we-serve/pinellas/tierra-verde',
  'South Pasadena': '/areas-we-serve/pinellas/south-pasadena',
  'Indian Shores': '/areas-we-serve/pinellas/indian-shores',
  // Additional Pasco
  "Land O' Lakes": '/areas-we-serve/pasco/land-o-lakes',
  Trinity: '/areas-we-serve/pasco/trinity',
  Holiday: '/areas-we-serve/pasco/holiday',
  Zephyrhills: '/areas-we-serve/pasco/zephyrhills',
  'New Port Richey': '/areas-we-serve/pasco/new-port-richey',
  'San Antonio': '/areas-we-serve/pasco/san-antonio',
  'Port Richey': '/areas-we-serve/pasco/port-richey',
  // Additional Sarasota
  'Lido Key': '/areas-we-serve/sarasota/lido-key',
  Fruitville: '/areas-we-serve/sarasota/fruitville',
  'Bee Ridge': '/areas-we-serve/sarasota/bee-ridge',
  'University Park': '/areas-we-serve/sarasota/university-park',
  Osprey: '/areas-we-serve/sarasota/osprey',
  Laurel: '/areas-we-serve/sarasota/laurel',
  Nokomis: '/areas-we-serve/sarasota/nokomis',
  'South Venice': '/areas-we-serve/sarasota/south-venice',
  'Warm Mineral Springs': '/areas-we-serve/sarasota/warm-mineral-springs',
  Englewood: '/areas-we-serve/sarasota/englewood',
  // Additional Manatee
  Cortez: '/areas-we-serve/manatee/cortez',
  'Bradenton Beach': '/areas-we-serve/manatee/bradenton-beach',
  'Holmes Beach': '/areas-we-serve/manatee/holmes-beach',
  Palmetto: '/areas-we-serve/manatee/palmetto',
  Ellenton: '/areas-we-serve/manatee/ellenton',
  'Anna Maria': '/areas-we-serve/manatee/anna-maria',
  'Myakka City': '/areas-we-serve/manatee/myakka-city',
  Parrish: '/areas-we-serve/manatee/parrish'
};
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': 'https://brothersremodelers.com/#business',
  name: company.name,
  url: 'https://brothersremodelers.com/',
  telephone: company.telephone,
  email: company.email,
  image: heroImage,
  foundingDate: String(company.founded),
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: company.streetAddress,
    addressLocality: company.addressLocality,
    addressRegion: company.addressRegion,
    postalCode: company.postalCode,
    addressCountry: 'US'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: company.latitude,
    longitude: company.longitude
  },
  openingHours: 'Mo-Sa 07:00-18:00',
  areaServed: [{
    '@type': 'AdministrativeArea',
    name: 'Hillsborough County'
  }, {
    '@type': 'AdministrativeArea',
    name: 'Pinellas County'
  }, {
    '@type': 'AdministrativeArea',
    name: 'Pasco County'
  }, {
    '@type': 'AdministrativeArea',
    name: 'Sarasota County'
  }, {
    '@type': 'AdministrativeArea',
    name: 'Manatee County'
  }],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '180'
  },
  identifier: 'Florida Certified General Contractor License #CGC1541183'
};
const homeFaqs = [
    {
        q: 'What affects the cost of a home remodel in Tampa Bay?',
        a: <>Cost depends on the size and scope of the project, the materials and finishes you choose, and how much of the structure changes. In Florida homes, moving walls in concrete block construction or rerouting plumbing through a slab adds cost. Permits, engineering, wind-code or flood-zone requirements, and damage found during demolition also affect the price. After we visit and measure, we provide a line-item proposal so you can see where the money goes.</>
    },
    {
        q: 'Do I need a permit to remodel a kitchen or bathroom in Florida?',
        a: <>Usually, yes. A permit is generally required when a remodel involves plumbing, electrical, structural or mechanical work, such as moving a sink, adding circuits or removing a wall. Purely cosmetic updates like painting may not need one, but the rules vary by city and county. If you live inside city limits, the permit goes through the city’s building department; if not, it goes through the county. We handle permit filings during pre-construction.</>
    },
    {
        q: 'How long does a whole-home renovation take?',
        a: <>It depends on the size of the home, the scope of work and how quickly permits are approved. Engineering, long-lead materials such as windows and cabinetry, and inspection scheduling also affect the timeline. Larger renovations usually take several months from the start of construction to closeout. Before work starts, we give you a written schedule, and during the build you get a live schedule and weekly photo updates.</>
    },
    {
        q: 'How do I verify a Florida contractor’s license?',
        a: <>Use the Florida Department of Business and Professional Regulation’s license search at <a href="https://www.myfloridalicense.com/wl11.asp" target="_blank" rel="noopener noreferrer" className="font-semibold text-[hsl(var(--ink))] underline decoration-[hsl(var(--brand))] underline-offset-2 hover:text-[hsl(var(--brand))]">myfloridalicense.com</a>. Search by the contractor’s name or license number and confirm the license is active and matches the business you are hiring. A Certified General Contractor (CGC) license is issued by the state and is valid statewide. Brothers Remodelers holds license CGC1541183, and we provide certificates of insurance on request.</>
    },
    {
        q: 'Do you offer financing?',
        a: <>Yes. Financing is available for qualifying homeowners through [Sunlight Financial]. Visit our <Link to="/financing" className="font-semibold text-[hsl(var(--ink))] underline decoration-[hsl(var(--brand))] underline-offset-2 hover:text-[hsl(var(--brand))]">Financing page</Link> to see how it works and how to apply, or ask about it during your free consultation.</>
    },
    {
        q: 'Which counties and cities do you serve?',
        a: <>Brothers Remodelers serves homeowners and property owners in five Florida counties: Hillsborough, Pinellas, Pasco, Sarasota and Manatee. That includes Tampa, Brandon, Riverview, St. Petersburg, Clearwater, Largo, Wesley Chapel, New Port Richey, Sarasota, Venice, North Port, Bradenton, Lakewood Ranch and Palmetto. See the full list on our <Link to="/areas-we-serve" className="font-semibold text-[hsl(var(--ink))] underline decoration-[hsl(var(--brand))] underline-offset-2 hover:text-[hsl(var(--brand))]">Areas We Serve page</Link>.</>
    }
];
const nodeText = node => {
    if (node == null || typeof node === 'boolean') return '';
    if (typeof node === 'string' || typeof node === 'number') return String(node);
    if (Array.isArray(node)) return node.map(nodeText).join('');
    if (node.props && node.props.children !== undefined) return nodeText(node.props.children);
    return '';
};
const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: homeFaqs.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: {
            '@type': 'Answer',
            text: nodeText(f.a.props.children)
        }
    }))
};
const homepageReviewRoles = [
    'Homeowner, Tampa',
    'Retail Operations Director, Sarasota',
    'Homeowner, St. Petersburg',
    'Homeowner, Bradenton',
];
const homepageProjectAlts = [
    'Exterior photograph of a two-story white home with a wraparound porch.',
    'Interior photograph of a remodeled white kitchen with an island and range hood.',
    'Interior photograph of a modern commercial office space.',
];
const homepageProjectDimensions = [
    { width: 1216, height: 896 },
    { width: 1280, height: 832 },
    { width: 1216, height: 896 },
];

const homepageHeroDimensions = { width: 1472, height: 640 };
const homepageFounderDimensions = { width: 1153, height: 1364 };
const HomePage = () => <SiteLayout homepageImages>
        <Helmet>
            <title>Remodeling Contractor Tampa Bay | Brothers Remodelers</title>
            <meta name="description" content="Looking for a remodeling contractor in Tampa Bay? Brothers Remodelers offers home improvement services to help bring your project to life. Contact us today." />
            <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
            <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        </Helmet>
        <Seo title="Remodeling Contractor Tampa Bay | Brothers Remodelers" description="Looking for a remodeling contractor in Tampa Bay? Brothers Remodelers offers home improvement services to help bring your project to life. Contact us today." image={heroImage} siteName={company.name} />

        <section className="relative isolate min-h-[100dvh] overflow-hidden bg-[hsl(var(--ink))]">
            {/* eslint-disable-next-line react/no-unknown-property -- React 18 in this preview warns on fetchPriority; the DOM attribute must be lowercase */}
            <img src={heroImage} alt="Carpenter in a hard hat cutting lumber on a remodeling job site" width={homepageHeroDimensions.width} height={homepageHeroDimensions.height} fetchpriority="high" className="absolute inset-0 h-full w-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--ink))] via-[hsl(var(--ink))]/85 to-transparent" />
            <div className="relative mx-auto grid max-w-[90rem] items-center gap-12 px-4 pb-16 pt-14 md:pt-20 lg:grid-cols-[1.05fr_0.95fr]">
                <div>
                    <Reveal>
                        <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-[hsl(var(--brand))]">
                            <span className="h-3 w-8 bg-[hsl(var(--brand))]" />
                            Remodeling since {company.founded}
                        </p>
                    </Reveal>
                    <Reveal delay={0.08}>
                        <h1 className="font-display mt-6 text-5xl font-bold uppercase leading-[0.95] text-white sm:text-6xl lg:text-7xl">
                            <span className="relative inline-block">
                                <span className="relative z-10">Your Remodeling Contractor in Tampa Bay</span>
                                <span className="absolute inset-x-0 bottom-1 z-0 h-3 bg-[hsl(var(--brand))]/80" />
                            </span>
                        </h1>
                    </Reveal>
                    <Reveal delay={0.16}>
                        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
                            Brothers Remodelers is a residential remodeling and general contracting company serving
                            homeowners across Tampa Bay and Sarasota. From kitchen and bathroom remodels to home
                            additions, whole-home renovations and concrete work, every project runs through one licensed
                            Florida contractor — one team, one schedule, one line-item price.
                        </p>
                    </Reveal>
                    <Reveal delay={0.24}>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link to="/quote" className="flex min-h-[48px] items-center gap-2 bg-[hsl(var(--brand))] px-7 text-sm font-bold uppercase tracking-wide text-[hsl(var(--brand-foreground))] transition-transform hover:-translate-y-0.5 active:translate-y-0">
                                Get a free estimate <ArrowRight className="h-4 w-4" />
                            </Link>
                            <Link to="/projects" className="flex min-h-[48px] items-center border border-white/30 px-7 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:border-[hsl(var(--brand))]">
                                See our work
                            </Link>
                        </div>
                    </Reveal>
                    <Reveal delay={0.3}>
                        <ul className="mt-5 grid max-w-3xl grid-cols-2 gap-x-4 gap-y-3 text-xs font-semibold uppercase leading-snug tracking-wide text-white/80 sm:grid-cols-4">
                            <li>Licensed FL contractor CGC1541183</li>
                            <li>Fixed line-item pricing</li>
                            <li>Superintendent on site daily</li>
                            <li>[Two-year workmanship warranty]</li>
                        </ul>
                    </Reveal>
                    <Reveal delay={0.32}>
                        <div className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-white/15 pt-6">
                            {stats.slice(0, 3).map(s => <div key={s.label}>
                                    <p className="font-display text-3xl font-bold text-[hsl(var(--brand))]">
                                        <CountUp value={s.value} suffix={s.suffix} />
                                    </p>
                                    <p className="mt-1 text-xs uppercase tracking-widest text-white/55">{s.label}</p>
                                </div>)}
                        </div>
                    </Reveal>
                </div>
                <div className="lg:pl-6">
                    <GetEstimateCTA tone="dark" heading="Get an Estimate" text="Tell us about your project and get a free, no-obligation line-item proposal within five business days." />
                </div>
            </div>
        </section>

        <section className="border-b border-neutral-200 bg-white px-4 py-12 md:py-14">
            <div className="mx-auto max-w-[72rem]">
                <h2 className="font-display text-3xl font-bold leading-tight md:text-4xl">What Brothers Remodelers does</h2>
                <p className="mt-3 max-w-4xl text-base leading-relaxed text-neutral-600">
                    Brothers Remodelers is a Florida-licensed <Link to="/services/general-contracting" className="font-semibold text-[hsl(var(--ink))] underline decoration-[hsl(var(--brand))] underline-offset-4 hover:text-[hsl(var(--brand))]">general contractor</Link> (CGC1541183) that has remodeled homes since [2006]. We handle kitchen and bathroom remodeling, home additions, [whole-home renovations,] general contracting and concrete work for homeowners in <Link to="/areas-we-serve" className="font-semibold text-[hsl(var(--ink))] underline decoration-[hsl(var(--brand))] underline-offset-4 hover:text-[hsl(var(--brand))]">Hillsborough, Pinellas, Pasco, Sarasota and Manatee counties</Link>. One team manages design, permits, trades and inspections, and every proposal is priced line by line.
                </p>
            </div>
        </section>

        <div className="overflow-hidden border-y border-neutral-200 bg-[hsl(var(--brand))] py-3">
            <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
                {[...ticker, ...ticker].map((t, i) => <span key={`${t}-${i}`} className="font-display flex items-center gap-10 text-lg font-semibold uppercase tracking-wide text-[hsl(var(--brand-foreground))]">
                        {t} <span className="h-2 w-2 rotate-45 bg-[hsl(var(--brand-foreground))]" />
                    </span>)}
            </div>
        </div>

        <Section width="wide">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                    <Eyebrow>What we build</Eyebrow>
                    <h2 className="font-display mt-4 max-w-2xl text-4xl font-bold uppercase leading-tight md:text-5xl">Remodeling services we provide</h2>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-600">One licensed contractor runs every trade on your project, from permits and engineering to final inspection.</p>
                </div>
                <Link to="/services" className="text-sm font-bold uppercase tracking-widest text-neutral-600 hover:text-[hsl(var(--ink))]">
                    All services →
                </Link>
            </div>
            <ServiceCardGrid items={services} />
        </Section>

        <Section>
            <div className="mx-auto max-w-[56rem] text-center">
                <Eyebrow className="justify-center">FLORIDA REMODELING</Eyebrow>
                <h2 className="font-display mt-4 text-4xl font-bold uppercase leading-tight md:text-5xl">Remodeling in Florida: What Gulf Coast Homeowners Should Know</h2>
                <p className="mt-5 text-base leading-relaxed text-neutral-600 md:text-lg">
                    Remodeling a Gulf Coast home comes with rules and building conditions that most of the country doesn&apos;t deal with. These are the issues that most often affect the scope, cost and permitting of projects in Hillsborough, Pinellas, Pasco, Sarasota and Manatee counties.
                </p>
            </div>
            <div className="mt-12 grid gap-10 md:grid-cols-2">
                <div>
                    <h3 className="font-display text-2xl font-bold uppercase">Wind Code and Storm Protection</h3>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                        Every permitted remodel in Florida is built to the Florida Building Code, which sets wind-load requirements across the state. On an addition, that affects how new walls are anchored to the slab and how the new roof ties into the existing one. When windows or exterior doors are replaced, homes in wind-borne debris regions need impact-rated products or approved storm protection. Whether that applies depends on where the home sits, so we confirm the requirements for your address during pre-construction.
                    </p>
                    <Link to="/services/home-additions" className="mt-4 inline-flex text-sm font-semibold text-[hsl(var(--ink))] underline decoration-[hsl(var(--brand))] underline-offset-4 hover:text-[hsl(var(--brand))]">Home additions and extensions</Link>
                </div>
                <div>
                    <h3 className="font-display text-2xl font-bold uppercase">Flood Zones and the FEMA 50% Rule</h3>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                        If your home is in a FEMA Special Flood Hazard Area, a large remodel can trigger the substantial improvement rule. When the cost of the work reaches 50% or more of the building&apos;s market value (the structure only, not the land), the whole home has to be brought up to current flood requirements, which can mean elevating it. Some local governments add together permits from several years when applying the rule. It comes up most often in coastal Pinellas, Manatee and Sarasota, so check your flood zone before you set a budget.
                    </p>
                    <Link to="/services/general-contracting" className="mt-4 inline-flex text-sm font-semibold text-[hsl(var(--ink))] underline decoration-[hsl(var(--brand))] underline-offset-4 hover:text-[hsl(var(--brand))]">Whole-home remodeling and general contracting</Link>
                </div>
                <div>
                    <h3 className="font-display text-2xl font-bold uppercase">Concrete Block Walls and Slab Foundations</h3>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                        Most Florida homes have concrete block walls on a concrete slab, and that changes how a remodel is planned. Opening up a block wall usually needs an engineered beam or lintel. Moving a kitchen sink or adding a bathroom means cutting and trenching the slab to reroute plumbing, then patching it. We plan those steps before demolition so they appear in the estimate instead of as change orders.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                        <Link to="/services/kitchen-remodeling" className="inline-flex text-sm font-semibold text-[hsl(var(--ink))] underline decoration-[hsl(var(--brand))] underline-offset-4 hover:text-[hsl(var(--brand))]">Kitchen remodeling</Link>
                        <Link to="/services/concrete-foundations" className="inline-flex text-sm font-semibold text-[hsl(var(--ink))] underline decoration-[hsl(var(--brand))] underline-offset-4 hover:text-[hsl(var(--brand))]">Concrete and foundation work</Link>
                    </div>
                </div>
                <div>
                    <h3 className="font-display text-2xl font-bold uppercase">Bathrooms Built for Humidity</h3>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                        Florida&apos;s humidity is hard on bathrooms. Tile and grout are not waterproof on their own, so a waterproofing membrane goes behind showers and wet walls before any tile is set. Exhaust fans should vent outside the house, not into the attic. In older bathrooms, rot or mold behind the shower walls is common, so we check for it at demolition and price any repair before work continues.
                    </p>
                    <Link to="/services/bathroom-remodeling" className="mt-4 inline-flex text-sm font-semibold text-[hsl(var(--ink))] underline decoration-[hsl(var(--brand))] underline-offset-4 hover:text-[hsl(var(--brand))]">Bathroom remodeling</Link>
                </div>
                <div className="md:col-span-2">
                    <h3 className="font-display text-2xl font-bold uppercase">City vs. County Permits</h3>
                    <p className="mt-3 max-w-3xl text-sm leading-relaxed text-neutral-600">
                        Which building department reviews your permit depends on whether your home is inside city limits. Homes in cities such as Tampa, St. Petersburg, Clearwater, Sarasota and Bradenton are permitted through that city. Homes in unincorporated areas go through the county. Each department has its own review times and inspection scheduling, which affects your start date. Florida also requires a Notice of Commencement to be recorded for many permitted jobs, and we walk you through that step.
                    </p>
                    <Link to="/services/general-contracting" className="mt-4 inline-flex text-sm font-semibold text-[hsl(var(--ink))] underline decoration-[hsl(var(--brand))] underline-offset-4 hover:text-[hsl(var(--brand))]">How our general contracting works</Link>
                </div>
            </div>
            <div className="mx-auto mt-14 max-w-[44rem] border-t border-neutral-200 pt-10 text-center">
                <p className="text-base leading-relaxed text-neutral-600">Not sure which of these apply to your home? Send us your address and project scope and we&apos;ll tell you before you get an estimate.</p>
                <Link to="/quote" className="mt-6 inline-flex min-h-[48px] items-center bg-[hsl(var(--brand))] px-7 text-sm font-bold uppercase tracking-wide text-[hsl(var(--brand-foreground))] transition-transform hover:-translate-y-px active:translate-y-0">Request a Free Quote</Link>
            </div>
        </Section>

        <Section className="bg-neutral-50">
            <div className="grid items-center gap-10 lg:grid-cols-2">
                <div className="relative">
                    <img src="/images/founder-hardhat.jpg" alt="Construction professional wearing a yellow hard hat on a job site." width={homepageFounderDimensions.width} height={homepageFounderDimensions.height} loading="lazy" className="w-full object-cover" />
                    <div className="absolute -bottom-5 -right-4 hidden bg-[hsl(var(--brand))] px-6 py-4 sm:block">
                        <p className="font-display text-3xl font-bold">{company.founded}</p>
                        <p className="text-xs font-bold uppercase tracking-widest">Family-run since day one</p>
                    </div>
                </div>
                <div>
                    <Eyebrow>Why owners hire us</Eyebrow>
                    <h2 className="font-display mt-4 text-4xl font-bold uppercase leading-tight md:text-5xl">
                        Why homeowners hire Brothers Remodelers
                    </h2>
                    <p className="mt-5 leading-relaxed text-neutral-600">
                        A remodeling contractor who answers the phone. We keep a small number of jobs open at a time so every project gets a superintendent on site daily.
                        You get a live schedule, weekly photo updates and priced change orders before work happens.
                    </p>
                    <div className="mt-8 divide-y divide-neutral-200 border-y border-neutral-200">
                        {[[ShieldCheck, 'Licensed, bonded and insured', <>State-certified Florida general contractor, <a href="https://www.myfloridalicense.com/wl11.asp" target="_blank" rel="noopener noreferrer" className="font-semibold text-[hsl(var(--ink))] underline decoration-[hsl(var(--brand))] underline-offset-2 hover:text-[hsl(var(--brand))]">license CGC1541183</a>. Certificates of insurance available on request.</>], [Ruler, 'Fixed line-item pricing', 'Allowances stated in plain language so you can compare bids fairly.'], [HardHat, 'Dedicated site supervision', 'One superintendent owns your job from demolition to punch list.'], [Hammer, 'Two-year workmanship warranty', 'Documented at closeout with all manufacturer warranties.']].map(([Icon, title, text]) => <div key={title} className="flex gap-4 py-4">
                                <Icon className="mt-1 h-5 w-5 shrink-0 text-[hsl(var(--brand))]" strokeWidth={2} />
                                <div>
                                    <h3 className="font-semibold">{title}</h3>
                                    <p className="text-sm text-neutral-600">{text}</p>
                                </div>
                            </div>)}
                    </div>
                    <Link to="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[hsl(var(--ink))] transition-colors hover:text-[hsl(var(--brand))]">
                        Learn more about Brothers Remodelers <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </Section>

        <Section width="wide">
            <Eyebrow>Recent projects</Eyebrow>
            <h2 className="font-display mt-4 text-4xl font-bold uppercase md:text-5xl">Home remodeling projects</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.slice(0, 3).map((p, i) => <Reveal key={p.title} delay={i * 0.06}>
                        <article className="group relative isolate overflow-hidden">
                            <img src={p.image} alt={homepageProjectAlts[i]} width={homepageProjectDimensions[i].width} height={homepageProjectDimensions[i].height} loading="lazy" className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--ink))] via-[hsl(var(--ink))]/20 to-transparent" />
                            <div className="absolute bottom-0 p-6 text-white">
                                <p className="text-xs font-bold uppercase tracking-widest text-white">{p.place}</p>
                                <h3 className="font-display mt-1 text-xl font-bold uppercase">{p.title}</h3>
                                <p className="mt-1 text-sm text-white/70">{p.scope}</p>
                            </div>
                        </article>
                    </Reveal>)}
            </div>
            <Link to="/projects" className="mt-8 inline-flex min-h-[44px] items-center border border-neutral-300 px-6 text-sm font-bold uppercase tracking-widest hover:border-[hsl(var(--ink))]">
                View project gallery
            </Link>
        </Section>

        <Section className="bg-[hsl(var(--ink))] text-white">
            <Eyebrow>How it works</Eyebrow>
            <h2 className="font-display mt-4 text-4xl font-bold uppercase text-white md:text-5xl"><Link to="/process" className="hover:text-white/85">our remodeling process</Link>: five steps, no surprises</h2>
            <ol className="mt-10 grid gap-8 md:grid-cols-5">
                {processSteps.map(([title, text], i) => <li key={title} className="border-t-2 border-[hsl(var(--brand))] pt-4">
                        <span className="font-display text-4xl font-bold text-[hsl(var(--brand))]">0{i + 1}</span>
                        <h3 className="font-display mt-2 text-lg font-bold uppercase">{title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-white/65">{text}</p>
                    </li>)}
            </ol>
        </Section>

        <Section>
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
                <div>
                    <Eyebrow>Client reviews</Eyebrow>
                    <h2 className="font-display mt-4 text-4xl font-bold uppercase leading-tight">What remodeling clients say</h2>
                    <div className="mt-4 flex gap-1 text-[hsl(var(--brand))]">
                        {[0, 1, 2, 3, 4].map(i => <Star key={i} className="h-5 w-5 fill-current" />)}
                    </div>
                    <p className="mt-2 text-sm text-neutral-600">4.9 average across 180+ verified reviews. <Link to="/reviews" className="ml-1 font-semibold text-[hsl(var(--ink))] underline decoration-[hsl(var(--brand))] underline-offset-4 hover:text-[hsl(var(--brand))]">Read more reviews</Link></p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                    {testimonials.map((t, i) => <blockquote key={t.name} className="border-l-2 border-[hsl(var(--brand))] bg-neutral-50 p-6">
                            <p className="text-[0.95rem] leading-relaxed text-neutral-700">“{t.quote}”</p>
                            <footer className="mt-4 text-xs font-bold uppercase tracking-widest text-neutral-500">{t.name} — {homepageReviewRoles[i]}</footer>
                        </blockquote>)}
                </div>
            </div>
        </Section>

        <FinancingSection />

        <Section className="bg-white" width="wide">
            <div className="mx-auto max-w-[86rem] text-center">
                <Eyebrow className="justify-center">Service area</Eyebrow>
                <h2 className="font-display mt-3 inline-block text-4xl font-bold uppercase leading-tight text-[#0f223d] md:text-5xl">
                    Areas we serve
                    <MarkerUnderline src="/images/graffiti-underline-blue-thick-right.png" className="mx-auto mt-1 h-4 max-w-[20rem]" />
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-neutral-600">
                    Five Gulf Coast counties. Select one on the map to open its cities.
                    <MarkerUnderline src="/images/graffiti-underline-yellow-thick-right.png" className="mx-auto mt-2 h-3 max-w-[14rem]" />
                </p>
            </div>

            <FloridaServiceMap communities={areaCardCommunities} cityLinks={cityLinks} />

            <div className="mt-10 text-center">
                <Link to="/areas-we-serve" className="inline-flex min-h-[48px] items-center gap-2 border border-neutral-300 px-7 text-sm font-bold uppercase tracking-wide text-[hsl(var(--ink))] transition-colors hover:border-[hsl(var(--ink))]">
                    Explore All Service Areas <ArrowRight className="h-4 w-4" />
                </Link>
            </div>
        </Section>

        <Section>
            <div className="mx-auto max-w-[56rem]">
                <Eyebrow>FAQ</Eyebrow>
                <h2 className="font-display mt-4 text-4xl font-bold uppercase leading-tight md:text-5xl">Home Remodeling FAQs for Tampa Bay Homeowners</h2>
                <div className="mt-10 divide-y divide-neutral-200 border-y border-neutral-200">
                    {homeFaqs.map(f => <div key={f.q} className="py-5">
                            <h3 className="font-display text-lg font-bold uppercase">{f.q}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-neutral-600">{f.a}</p>
                        </div>)}
                </div>
                <Link to="/faq" className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[hsl(var(--ink))] transition-colors hover:text-[hsl(var(--brand))]">
                    See all frequently asked questions <ArrowRight className="h-4 w-4" />
                </Link>
            </div>
        </Section>

        <Section className="bg-neutral-50">
            <div className="mx-auto max-w-[44rem] border-t border-neutral-200 pt-10 text-center">
                <p className="font-display text-3xl font-bold uppercase leading-tight">Planning a Remodeling Project?</p>
                <p className="mt-3 text-base leading-relaxed text-neutral-600">
                    Tell us where your project is located and what you are planning. Our team can help you determine the
                    next steps for your remodeling project.
                </p>
                <Link to="/quote" className="mt-6 inline-flex min-h-[48px] items-center gap-2 bg-[hsl(var(--brand))] px-7 text-sm font-bold uppercase tracking-wide text-[hsl(var(--brand-foreground))] transition-transform hover:-translate-y-px active:translate-y-0">
                    Request a Free Quote <ArrowRight className="h-4 w-4" />
                </Link>
                <p className="mt-4 text-sm text-neutral-600">Prefer to talk first? <Link to="/contact" className="font-semibold text-[hsl(var(--ink))] underline decoration-[hsl(var(--brand))] underline-offset-4 hover:text-[hsl(var(--brand))]">Contact us</Link> or call <a href={company.phoneHref} className="font-semibold text-[hsl(var(--ink))] underline decoration-[hsl(var(--brand))] underline-offset-4 hover:text-[hsl(var(--brand))]">{company.phone}</a>.</p>
            </div>
        </Section>

    </SiteLayout>;
export default HomePage;