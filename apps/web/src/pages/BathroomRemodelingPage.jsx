import React from 'react';
import { Helmet } from 'react-helmet';
import BrandsSection from '@/components/BrandsSection';
import { brandSchemaFor } from '@/data/brands';
import { Link } from 'react-router-dom';
import { Check, Clock, Droplets, FileCheck, Layers, Ruler, ShieldCheck, Wrench } from 'lucide-react';
import SiteLayout, { CtaBand, Eyebrow, PageHero, Section } from '@/components/SiteLayout';
import GetEstimateCTA from '@/components/GetEstimateCTA';
import { CitiesWeServe } from '@/pages/Pages';
import { company } from '@/data/site';

const bathroomImage = '/images/bathroom.jpg';

const META_TITLE = 'Bathroom Remodeling in Tampa Bay & Sarasota | Brothers Remodelers';
const META_DESC =
    'Licensed bathroom remodeling contractor serving Hillsborough, Pinellas, Pasco, Sarasota and Manatee counties. Full bathroom rebuilds — waterproofing, tile, plumbing, vanities and permits managed end to end. Free estimates.';

const scope = [
    'Full demolition to studs and blocking',
    'Sheet or liquid waterproofing membrane assemblies',
    'Curbless and low-threshold shower pans',
    'Large-format tile, mosaic and stone setting',
    'Plumbing and valve replacement by licensed trades',
    'Ventilation upgrades to code CFM',
];

const processSteps = [
    {
        icon: Ruler,
        title: 'Consultation & layout',
        text: 'We measure the existing bathroom, confirm fixture locations and clearances, and talk through how the room is used — who needs grab bars, a curbless shower, a double vanity or better storage. You leave knowing what the layout can and cannot do.',
    },
    {
        icon: Layers,
        title: 'Design & selections',
        text: 'Tile, vanity, counter, plumbing fixtures and lighting are pinned down before pricing, so the estimate reflects the bathroom you actually want — not a placeholder. Drain locations and wet-wall routing are confirmed against the layout.',
    },
    {
        icon: FileCheck,
        title: 'Permits & procurement',
        text: 'We file the plumbing, electrical and building permits with the city or county, then order long-lead items like stone, glass shower enclosures and custom vanities so they arrive on schedule.',
    },
    {
        icon: Wrench,
        title: 'Demolition & rough-in',
        text: 'The bathroom is taken to the studs. Licensed plumbers and electricians reroute supply and drain lines, replace valves, add dedicated circuits for lighting and ventilation, and install blocking for grab bars and accessories.',
    },
    {
        icon: Droplets,
        title: 'Waterproofing & tile',
        text: 'Sheet or liquid waterproofing membrane is installed over a sloped shower pan and inspected before any tile is set. Large-format tile, mosaics and stone are then laid, leveled and grouted.',
    },
    {
        icon: Check,
        title: 'Fixtures & closeout',
        text: 'Vanity, counter, faucets, shower fixtures, glass enclosure, mirrors, lighting and paint are installed. Final inspections are scheduled, the punch list is walked with you, and warranty documents are handed over.',
    },
];

const costFactors = [
    ['Plumbing moves', 'Relocating a toilet, shower or vanity means rerouting supply and drain lines, often through a concrete slab. The further the fixtures move, the more trenching and patching is required. Keeping fixtures in place is the single biggest way to control a bathroom budget.'],
    ['Waterproofing assembly', 'A properly waterproofed shower uses a sheet or liquid membrane over a sloped pan. Skipping or under-specifying this layer is what causes leaks and mold years later. We never build a wet area without a documented waterproofing assembly.'],
    ['Tile and stone selection', 'Large-format porcelain, natural stone and handmade mosaics each carry different material and labor costs. Intricate patterns, niches and full-height wall tile take more setting time than a standard field tile install.'],
    ['Shower enclosure', 'A custom glass frameless enclosure is templated after tile is set and is a meaningful line item. Semi-frameless or framed options cost less while still meeting code.'],
    ['Vanity and cabinetry', 'A stock vanity costs the least; semi-custom and custom vanities with soft-close hardware, integrated storage and stone tops raise the price but extend the bathroom’s useful life.'],
    ['Permits and inspections', 'A permitted bathroom remodel in Florida requires plumbing, electrical and building inspections. Permit fees vary by city and county and are part of the written estimate.'],
    ['Existing conditions', 'Water damage, rotted subfloor, outdated wiring or galvanized drain lines found during demolition are common in older homes. We flag and price any repair before the work continues, never as a surprise change order.'],
];

const faqs = [
    [
        'How long does a bathroom remodel take?',
        'A full bathroom gut typically runs 4 to 6 weeks of active construction after permits are approved and materials are on hand. Glass enclosures and stone tops have lead times that can shift the finish date, which is why we order long-lead items during pre-construction. You receive a written schedule before demolition begins.',
    ],
    [
        'Do I need a permit to remodel a bathroom in Florida?',
        'Yes, when the work involves plumbing, electrical or structural changes — which a full bathroom rebuild usually does. The permit is filed with your city’s building department if you live inside city limits, or with the county in unincorporated areas. We handle the filings and schedule every required inspection.',
    ],
    [
        'How much does a bathroom remodel cost?',
        'Cost depends on how far the plumbing moves, the waterproofing assembly, tile and stone selection, the shower enclosure, vanity and cabinetry, and the condition of the existing space. After a site visit and selections conversation, we return a line-item proposal with allowances stated plainly so you can see where the money goes and compare bids on equal terms.',
    ],
    [
        'What is waterproofing and why does it matter?',
        'Waterproofing is the membrane assembly behind the tile in a shower or wet area — sheet or liquid membrane applied over a sloped pan, with corners and penetrations sealed. It is what keeps water out of the wall cavity and subfloor. We inspect the waterproofing before a single tile is set, because a failed assembly is the most common cause of bathroom leaks and mold.',
    ],
    [
        'Can I live in the house during a bathroom remodel?',
        'Usually yes, as long as you have another bathroom. The remodeled bathroom itself will be out of service for the duration. We isolate the work zone with dust barriers, protect floors, and keep the demolition-to-rough-in phase tight. For a single-bathroom home, many families arrange access to a second bathroom or temporary housing for the roughest phase.',
    ],
    [
        'Can you build a curbless or walk-in shower?',
        'Yes. Curbless and low-threshold showers require a sloped pan and a waterproofed recessed or linear drain, and we confirm the floor assembly can accommodate the slope before pricing. They are a common request for aging-in-place and accessible bathrooms, and we install blocking for future grab bars even when they are not requested today.',
    ],
    [
        'Do you work in HOA communities?',
        'Constantly. We carry the insurance certificates most associations require and work within HOA alteration agreements, approved vendor lists and work-hour restrictions. If your community needs architectural review, we help assemble the submission.',
    ],
    [
        'What warranty do you offer on bathroom work?',
        'Two years on our workmanship, plus the manufacturer warranties on installed products like tile, stone, plumbing fixtures and glass enclosures. Everything is documented in your closeout package at handover.',
    ],
];

const relatedServices = [
    { slug: 'kitchen-remodeling', label: 'Kitchen Remodeling' },
    { slug: 'general-contracting', label: 'General Contracting' },
    { slug: 'home-additions', label: 'Home Additions' },
    { slug: 'concrete-foundations', label: 'Concrete & Foundations' },
];

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    brand: brandSchemaFor('bathroom-remodeling'),
    serviceType: 'Bathroom Remodeling',
    provider: {
        '@type': 'GeneralContractor',
        name: company.name,
        telephone: '+1-954-355-1520',
        url: 'https://brothersremodelers.com/',
        license: 'CGC1535875',
        areaServed: [
            { '@type': 'AdministrativeArea', name: 'Hillsborough County' },
            { '@type': 'AdministrativeArea', name: 'Pinellas County' },
            { '@type': 'AdministrativeArea', name: 'Pasco County' },
            { '@type': 'AdministrativeArea', name: 'Sarasota County' },
            { '@type': 'AdministrativeArea', name: 'Manatee County' },
        ],
    },
    areaServed: 'Tampa Bay and Sarasota region, Florida',
    description:
        'Full bathroom rebuilds including waterproofing, tile and stone setting, plumbing and valve replacement, vanities, shower enclosures and permits, managed end to end by a licensed Florida general contractor.',
};

const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: META_TITLE,
    description: META_DESC,
    url: 'https://brothersremodelers.com/services/bathroom-remodeling',
    isPartOf: {
        '@type': 'WebSite',
        name: company.name,
        url: 'https://brothersremodelers.com/',
    },
    about: {
        '@type': 'Service',
        name: 'Bathroom Remodeling',
    },
    breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brothersremodelers.com/' },
            { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://brothersremodelers.com/services' },
            { '@type': 'ListItem', position: 3, name: 'Bathroom Remodeling', item: 'https://brothersremodelers.com/services/bathroom-remodeling' },
        ],
    },
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brothersremodelers.com/' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://brothersremodelers.com/services' },
        { '@type': 'ListItem', position: 3, name: 'Bathroom Remodeling', item: 'https://brothersremodelers.com/services/bathroom-remodeling' },
    ],
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(([q, a]) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
    })),
};

const BathroomRemodelingPage = () => (
    <SiteLayout>
        <Helmet>
            <title>{META_TITLE}</title>
            <meta name="description" content={META_DESC} />
            <link rel="canonical" href="https://brothersremodelers.com/services/bathroom-remodeling/" />
            <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
            <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
            <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
            <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        </Helmet>

        <PageHero
            title="Bathroom Remodeling"
            subtitle="Full bathroom rebuilds — waterproofed wet areas, tile and stone, plumbing and vanities — managed from permit to final inspection by one licensed Florida contractor."
            image={bathroomImage}
            crumbs={[{ label: 'Services', to: '/services' }, { label: 'Bathroom Remodeling' }]}
        />

        <Section width="wide">
            <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
                <div>
                    <Eyebrow>Overview</Eyebrow>
                    <h2 className="font-display mt-4 text-3xl font-bold uppercase md:text-4xl">
                        A bathroom built to stay dry, code-compliant and usable for decades
                    </h2>
                    <div className="mt-4 space-y-4 leading-relaxed text-neutral-600">
                        <p>
                            Bathrooms fail at the waterproofing, not at the tile. A full bathroom remodel touches
                            demolition, rough plumbing, electrical, waterproofing, tile setting, cabinetry, stone and
                            paint — and every one of them has to land in the right sequence or the room leaks, molds or
                            misses its finish date.
                        </p>
                        <p>
                            Brothers Remodelers runs the whole rebuild under one Florida Certified General Contractor
                            license. We build the waterproofing assembly first and inspect it before a single tile is
                            set, file the permits, and keep a dedicated superintendent on site so the bathroom lands on
                            the drawings and on the schedule. You get a line-item proposal before demolition and priced
                            change orders before anything changes.
                        </p>
                    </div>

                    <div className="mt-8 border-l-2 border-[hsl(var(--brand))] bg-neutral-50 p-5">
                        <p className="text-sm font-bold uppercase tracking-widest text-neutral-500">At a glance</p>
                        <dl className="mt-3 grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2">
                            <div>
                                <dt className="font-semibold text-neutral-800">Typical timeline</dt>
                                <dd className="text-neutral-600">4–6 weeks of active construction after permits and materials are in place.</dd>
                            </div>
                            <div>
                                <dt className="font-semibold text-neutral-800">Permits required</dt>
                                <dd className="text-neutral-600">Plumbing, electrical and building permits, filed by us with the city or county.</dd>
                            </div>
                            <div>
                                <dt className="font-semibold text-neutral-800">Main cost drivers</dt>
                                <dd className="text-neutral-600">Plumbing moves, waterproofing, tile and stone, shower enclosure, vanity, permits.</dd>
                            </div>
                            <div>
                                <dt className="font-semibold text-neutral-800">Warranty</dt>
                                <dd className="text-neutral-600">Two-year workmanship warranty plus manufacturer coverage on installed products.</dd>
                            </div>
                        </dl>
                    </div>

                    <h3 className="font-display mt-10 text-2xl font-bold uppercase">What a bathroom remodel includes</h3>
                    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                        {scope.map((item) => (
                            <li key={item} className="flex gap-2 border border-neutral-200 p-3 text-sm text-neutral-700">
                                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand))]" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    <h3 className="font-display mt-12 text-2xl font-bold uppercase">Our bathroom remodeling process</h3>
                    <ol className="mt-6 grid gap-6 sm:grid-cols-2">
                        {processSteps.map(({ icon: Icon, title, text }, i) => (
                            <li key={title} className="border-t-2 border-[hsl(var(--brand))] pt-4">
                                <div className="flex items-center gap-3">
                                    <Icon className="h-5 w-5 text-[hsl(var(--brand))]" strokeWidth={2} />
                                    <span className="font-display text-sm font-bold uppercase tracking-widest text-neutral-500">
                                        Step 0{i + 1}
                                    </span>
                                </div>
                                <h4 className="font-display mt-2 text-lg font-bold uppercase">{title}</h4>
                                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{text}</p>
                            </li>
                        ))}
                    </ol>

                    <h3 className="font-display mt-12 text-2xl font-bold uppercase">What affects the cost of a bathroom remodel</h3>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                        Every bathroom estimate is built from the same line items. Knowing what drives them helps you
                        compare bids fairly and decide where to invest.
                    </p>
                    <dl className="mt-6 divide-y divide-neutral-200 border-y border-neutral-200">
                        {costFactors.map(([term, desc]) => (
                            <div key={term} className="py-5">
                                <dt className="font-display text-lg font-bold uppercase">{term}</dt>
                                <dd className="mt-2 text-sm leading-relaxed text-neutral-600">{desc}</dd>
                            </div>
                        ))}
                    </dl>
                    <p className="mt-5 text-sm leading-relaxed text-neutral-600">
                        After a walkthrough and selections conversation, we return a written line-item proposal —
                        usually within five business days. Allowances for owner-selected finishes are stated plainly, and
                        payments follow completed milestones. See how owners fund projects on our{' '}
                        <Link to="/financing" className="font-semibold underline decoration-[hsl(var(--brand))] underline-offset-2 hover:text-[hsl(var(--brand))]">
                           financing page
                        </Link>.
                    </p>

                    <h3 className="font-display mt-12 text-2xl font-bold uppercase">Permits and inspections</h3>
                    <div className="mt-3 space-y-4 leading-relaxed text-neutral-600">
                        <p>
                            A full bathroom rebuild in Florida requires plumbing, electrical and building permits. If
                            you live inside city limits — Tampa, St. Petersburg, Clearwater, Sarasota, Bradenton — the
                            permit runs through the city’s building department. In unincorporated areas it goes through
                            the county. Each department sets its own review times and inspection windows, which is why
                            we file early and order long-lead materials during pre-construction.
                        </p>
                        <p>
                            We schedule every required inspection and keep the records in your closeout package, alongside
                            sign-offs and warranty documents. Read more about our{' '}
                            <Link to="/safety" className="font-semibold underline decoration-[hsl(var(--brand))] underline-offset-2 hover:text-[hsl(var(--brand))]">
                                licensing, insurance and site safety standards
                            </Link>.
                        </p>
                    </div>

                    <h3 className="font-display mt-12 text-2xl font-bold uppercase">How to choose a bathroom remodeling contractor</h3>
                    <div className="mt-4 space-y-4 leading-relaxed text-neutral-600">
                        <p>
                            A bathroom remodel is a wet-area project governed by Florida building code, so the contractor
                            you hire matters more than the tile you pick. Before signing, confirm the following:
                        </p>
                        <ul className="space-y-2">
                            <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand))]" /><span><strong className="text-neutral-800">Verify the license.</strong> A Florida Certified General Contractor (CGC) number can be confirmed through the state DBPR online license check. Ours is {company.licenseNumber}.</span></li>
                            <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand))]" /><span><strong className="text-neutral-800">Ask about waterproofing.</strong> A reputable contractor will name the membrane assembly and confirm it is inspected before tile is set. If they cannot, the shower is being built to leak.</span></li>
                            <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand))]" /><span><strong className="text-neutral-800">Ask for certificates of insurance.</strong> General liability and workers' compensation should be sent directly to your HOA, lender or landlord — not handed over as a photocopy.</span></li>
                            <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand))]" /><span><strong className="text-neutral-800">Require a line-item proposal.</strong> Fixed pricing with stated allowances lets you compare bids on equal terms and exposes where money is hidden in a single lump sum.</span></li>
                            <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand))]" /><span><strong className="text-neutral-800">Get the warranty in writing.</strong> Workmanship coverage and manufacturer warranties should be documented in a closeout package at handover, not promised verbally.</span></li>
                        </ul>
                        <p>
                            See completed bathrooms and full-home renovations in our{' '}
                            <Link to="/projects" className="font-semibold underline decoration-[hsl(var(--brand))] underline-offset-2 hover:text-[hsl(var(--brand))]">project gallery</Link>, or read what other owners say on our{' '}
                            <Link to="/reviews" className="font-semibold underline decoration-[hsl(var(--brand))] underline-offset-2 hover:text-[hsl(var(--brand))]">reviews page</Link>.
                        </p>
                    </div>

                    <h3 className="font-display mt-12 text-2xl font-bold uppercase">Why homeowners hire Brothers Remodelers</h3>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                        {[
                            [ShieldCheck, 'Licensed & insured', `${company.license}. Certificates issued to your HOA or lender on request.`],
                            [Droplets, 'Waterproofing first', 'Membrane assemblies inspected before tile is set, so showers stay dry for decades.'],
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

                    <BrandsSection slug="bathroom-remodeling" title="Bathroom remodeling" />

                    <h3 className="font-display mt-12 text-2xl font-bold uppercase">Related services</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {relatedServices.map((s) => (
                            <Link
                                key={s.slug}
                                to={`/services/${s.slug}`}
                                className="border border-neutral-300 px-4 py-2 text-xs font-bold uppercase tracking-widest hover:border-[hsl(var(--brand))] hover:text-[hsl(var(--brand))]"
                            >
                                {s.label}
                            </Link>
                        ))}
                    </div>

                    <h3 className="font-display mt-12 text-2xl font-bold uppercase">Questions we get asked</h3>
                    <div className="mt-4 divide-y divide-neutral-200 border-y border-neutral-200">
                        {faqs.map(([q, a]) => (
                            <div key={q} className="py-5">
                                <h4 className="font-display text-lg font-bold uppercase">{q}</h4>
                                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{a}</p>
                            </div>
                        ))}
                    </div>

                    <h3 className="font-display mt-12 text-2xl font-bold uppercase">Plan your bathroom project</h3>
                    <div className="mt-4 space-y-4 leading-relaxed text-neutral-600">
                        <p>
                            Ready to move forward? The fastest path is a free site walkthrough — we measure, confirm
                            scope and return a written line-item proposal within five business days.{' '}
                            <Link to="/quote" className="font-semibold underline decoration-[hsl(var(--brand))] underline-offset-2 hover:text-[hsl(var(--brand))]">Request a free quote</Link> or{' '}
                            <Link to="/contact" className="font-semibold underline decoration-[hsl(var(--brand))] underline-offset-2 hover:text-[hsl(var(--brand))]">contact our office</Link> directly. If you are still weighing how to fund the work, our{' '}
                            <Link to="/financing" className="font-semibold underline decoration-[hsl(var(--brand))] underline-offset-2 hover:text-[hsl(var(--brand))]">financing page</Link> explains how owners typically phase scope to a budget.
                        </p>
                    </div>

                    <h3 className="font-display mt-12 text-2xl font-bold uppercase">Where we build bathrooms</h3>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                        We remodel bathrooms across the Tampa Bay and Sarasota region, including{' '}
                        <Link to="/areas-we-serve/hillsborough/tampa" className="font-semibold underline decoration-[hsl(var(--brand))] underline-offset-2 hover:text-[hsl(var(--brand))]">Tampa</Link>,{' '}
                        <Link to="/areas-we-serve/pinellas/st-petersburg" className="font-semibold underline decoration-[hsl(var(--brand))] underline-offset-2 hover:text-[hsl(var(--brand))]">St. Petersburg</Link>,{' '}
                        <Link to="/areas-we-serve/pasco/wesley-chapel" className="font-semibold underline decoration-[hsl(var(--brand))] underline-offset-2 hover:text-[hsl(var(--brand))]">Wesley Chapel</Link>,{' '}
                        <Link to="/areas-we-serve/sarasota/sarasota" className="font-semibold underline decoration-[hsl(var(--brand))] underline-offset-2 hover:text-[hsl(var(--brand))]">Sarasota</Link>{' '}
                        and{' '}
                        <Link to="/areas-we-serve/manatee/bradenton" className="font-semibold underline decoration-[hsl(var(--brand))] underline-offset-2 hover:text-[hsl(var(--brand))]">Bradenton</Link>.{' '}
                        See the full list on our{' '}
                        <Link to="/areas-we-serve" className="font-semibold underline decoration-[hsl(var(--brand))] underline-offset-2 hover:text-[hsl(var(--brand))]">
                            areas we serve page
                        </Link>.
                    </p>
                </div>

                <div className="lg:sticky lg:top-32 lg:self-start">
                    <GetEstimateCTA heading="Get an Estimate" text="Request a free, no-obligation line-item proposal for your bathroom remodel within five business days." />
                </div>
            </div>
        </Section>

        <CtaBand heading="Get a bathroom remodeling estimate" />
        <CitiesWeServe />
    </SiteLayout>
);

export default BathroomRemodelingPage;
