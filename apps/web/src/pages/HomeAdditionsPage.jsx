import React from 'react';
import { Helmet } from 'react-helmet';
import BrandsSection from '@/components/BrandsSection';
import { brandSchemaFor } from '@/data/brands';
import { Link } from 'react-router-dom';
import { Check, Clock, FileCheck, Layers, Ruler, ShieldCheck, Wrench, Home, Hammer } from 'lucide-react';
import SiteLayout, { CtaBand, Eyebrow, PageHero, Section } from '@/components/SiteLayout';
import GetEstimateCTA from '@/components/GetEstimateCTA';
import { CitiesWeServe } from '@/pages/Pages';
import { company, brownstoneImage } from '@/data/site';

const META_TITLE = 'Home Additions & Extensions in Tampa Bay & Sarasota | Brothers Remodelers';
const META_DESC =
    'Licensed home addition contractor serving Hillsborough, Pinellas, Pasco, Sarasota and Manatee counties. Rear additions, second-story builds and room expansions — engineered foundations, wind-code framing, roof tie-ins and permits managed end to end. Free estimates.';

const scope = [
    'Footings, foundation walls and slab work engineered to Florida code',
    'Concrete block and engineered wood framing to wind-load requirements',
    'Roof tie-ins, step flashing and high-wind-rated assemblies',
    'Window and door openings with impact-rated glazing',
    'Insulation, air sealing and Florida energy code compliance',
    'Mechanical, plumbing and electrical rough-in coordinated under one permit set',
];

const processSteps = [
    {
        icon: Ruler,
        title: 'Consultation & feasibility',
        text: 'We walk the property, measure setbacks and confirm what the lot and zoning will allow. You leave the meeting knowing whether an addition is feasible, roughly what it costs, and what the building department will require before a drawing is started.',
    },
    {
        icon: Layers,
        title: 'Design & engineering',
        text: 'An addition is structural work first and finishes second. We coordinate architect and engineer partners to produce stamped drawings — foundation, framing, wind-load and energy calcs — so the estimate reflects what will actually be built and permitted.',
    },
    {
        icon: FileCheck,
        title: 'Permits & procurement',
        text: 'We file the building, electrical, plumbing and mechanical permits with the city or county, then order long-lead items — trusses, windows, impact doors, lumber packages — so they arrive on schedule and do not stall the build.',
    },
    {
        icon: Wrench,
        title: 'Foundation & framing',
        text: 'Footings and foundation walls are formed and poured to the engineer’s drawings, inspected, then block or engineered framing is raised to wind code. The new structure is tied into the existing roof and envelope with continuous flashing.',
    },
    {
        icon: Home,
        title: 'Mechanical & finish',
        text: 'Plumbing, electrical and HVAC rough-in is coordinated under one permit set. Insulation, drywall, windows, doors and finishes close the addition out, and the new space is blended into the existing house inside and out.',
    },
    {
        icon: Check,
        title: 'Inspection & closeout',
        text: 'Final building, electrical, plumbing and mechanical inspections are scheduled and passed. The punch list is walked with you, warranty documents are handed over, and the addition is move-in ready.',
    },
];

const costFactors = [
    ['Foundation and structure', 'An addition starts in the ground. Footings, foundation walls or pilings, and the slab or framed floor assembly are engineered to Florida code and inspected before anything rises above grade. Soil conditions, flood-zone elevation and the size of the footprint all set the baseline cost.'],
    ['Square footage and story', 'Cost scales with finished square footage. A single-story rear addition is the most economical per square foot; a second-story build carries structural reinforcement of the existing home, a new stair, and a second level of framing, mechanical and finish.'],
    ['Roof tie-in and envelope', 'Tying a new roof into an existing one is detail work — step flashing, valley flashing and a continuous weather barrier must keep water out for decades. High-wind-rated shingles or metal, impact-rated glazing and the building envelope all affect the line item.'],
    ['Mechanical, plumbing and electrical', 'New space needs heat, cooling, power, lighting and often plumbing. Extending the existing HVAC, upgrading an electrical panel, or adding a bathroom or wet bar all add trades and permit inspections, which we price up front from the engineered drawings.'],
    ['Permit and inspection fees', 'A permitted addition in Florida requires building, electrical, plumbing and mechanical inspections, and often a zoning or site-plan review. Fees vary by city and county and are part of the written estimate. We file and schedule every inspection.'],
    ['Finish selections', 'Owner-selected finishes — flooring, cabinetry, trim, windows, fixtures — carry allowances in the proposal. Upgrading an allowance raises that line item only, with no hidden markups buried elsewhere.'],
    ['Existing conditions', 'Termite damage, outdated wiring, rotted framing or an undersized electrical panel found during construction are common in older homes. We flag and price any repair before the work continues, never as a surprise change order.'],
];

const faqs = [
    [
        'How long does a home addition take?',
        'A typical single-story rear addition runs 12 to 20 weeks of active construction after permits are approved and materials are on hand. A second-story build or a larger footprint addition can run longer because of structural reinforcement and additional inspections. You receive a written schedule before construction begins, with long-lead items ordered during pre-construction.',
    ],
    [
        'Do I need a permit to build a home addition in Florida?',
        'Yes. An addition is structural work and always requires a building permit plus electrical, plumbing and mechanical permits, and often a zoning or site-plan review. The permit is filed with your city’s building department if you live inside city limits, or with the county in unincorporated areas. We handle the filings and schedule every required inspection.',
    ],
    [
        'How much does a home addition cost?',
        'Cost depends on foundation and structure, finished square footage, whether it is one or two stories, the roof tie-in, mechanical scope, permit fees, finish selections and existing conditions. After a site visit and feasibility conversation, we return a line-item proposal with allowances stated plainly — usually within five business days — so you can see where the money goes and compare bids on equal terms.',
    ],
    [
        'Do I need an architect or engineer for an addition?',
        'Almost always. A structural addition requires stamped engineering drawings for the foundation and framing, and most building departments require a site plan showing setbacks and height. We work from your existing drawings, or we can introduce you to architect and engineer partners if you do not have them yet, coordinated during pre-construction so the estimate reflects what will actually be built.',
    ],
    [
        'Can I live in the house during an addition?',
        'Often yes for a rear addition, since we isolate the work area with temporary partitions, dust barriers and separate access, and the existing kitchen and baths usually stay in service. For a second-story build or an addition that opens the existing roof, many families arrange temporary housing for the roughest phase. We help you plan the logistics either way.',
    ],
    [
        'What is the difference between an addition and an extension?',
        'In practice the terms are used interchangeably for new enclosed, conditioned space added to the home — a rear great room, a primary suite, a second story or a room over a garage. A screened lanai or patio cover is typically considered an exterior improvement rather than a full addition. We scope the work to match what the building department will actually permit and inspect.',
    ],
    [
        'Do additions need to meet Florida wind-load and energy code?',
        'Yes. Florida building code sets wind-load requirements that vary by wind zone and exposure, which drives the framing, tie-downs, roof assembly and impact-rated glazing. The energy code governs insulation, air sealing and window performance. We engineer and document all of it so the addition passes inspection and performs in a storm.',
    ],
    [
        'Do you work in HOA communities?',
        'Constantly. We carry the insurance certificates most associations require and work within HOA alteration agreements, approved vendor lists and work-hour restrictions. If your community needs architectural review, we help assemble the submission with the engineered drawings and site plan.',
    ],
    [
        'What warranty do you offer on additions?',
        'Two years on our workmanship, plus the manufacturer warranties on installed products like windows, doors, roofing and mechanical equipment. Everything is documented in your closeout package at handover, not promised verbally.',
    ],
];

const relatedServices = [
    { slug: 'general-contracting', label: 'General Contracting' },
    { slug: 'kitchen-remodeling', label: 'Kitchen Remodeling' },
    { slug: 'bathroom-remodeling', label: 'Bathroom Remodeling' },
    { slug: 'concrete-foundations', label: 'Concrete & Foundations' },
];

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    brand: brandSchemaFor('home-additions'),
    serviceType: 'Home Additions & Extensions',
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
        'Home additions and extensions including engineered foundations, wind-code framing, roof tie-ins, impact-rated glazing and full mechanical rough-in, managed end to end by a licensed Florida general contractor.',
};

const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: META_TITLE,
    description: META_DESC,
    url: 'https://brothersremodelers.com/services/home-additions',
    isPartOf: {
        '@type': 'WebSite',
        name: company.name,
        url: 'https://brothersremodelers.com/',
    },
    about: {
        '@type': 'Service',
        name: 'Home Additions & Extensions',
    },
    breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brothersremodelers.com/' },
            { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://brothersremodelers.com/services' },
            { '@type': 'ListItem', position: 3, name: 'Home Additions & Extensions', item: 'https://brothersremodelers.com/services/home-additions' },
        ],
    },
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brothersremodelers.com/' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://brothersremodelers.com/services' },
        { '@type': 'ListItem', position: 3, name: 'Home Additions & Extensions', item: 'https://brothersremodelers.com/services/home-additions' },
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

const HomeAdditionsPage = () => (
    <SiteLayout>
        <Helmet>
            <title>{META_TITLE}</title>
            <meta name="description" content={META_DESC} />
            <link rel="canonical" href="https://brothersremodelers.com/services/home-additions/" />
            <meta name="robots" content="index, follow" />
            <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
            <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
            <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
            <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        </Helmet>

        <PageHero
            title="Home Additions & Extensions"
            subtitle="Rear additions, second-story builds and room expansions — engineered foundations, wind-code framing and roof tie-ins managed from permit to final inspection by one licensed Florida contractor."
            image={brownstoneImage}
            crumbs={[{ label: 'Services', to: '/services' }, { label: 'Home Additions & Extensions' }]}
        />

        <Section width="wide">
            <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
                <div>
                    <Eyebrow>Overview</Eyebrow>
                    <h2 className="font-display mt-4 text-3xl font-bold uppercase md:text-4xl">
                        New space, engineered to belong to the house
                    </h2>
                    <div className="mt-4 space-y-4 leading-relaxed text-neutral-600">
                        <p>
                            A home addition is structural work first and finishes second. Every addition touches
                            foundations, framing, the roof, the building envelope, mechanical systems and the existing
                            house itself — and every one of them has to land in the right sequence or the new space
                            leaks, settles or fails inspection.
                        </p>
                        <p>
                            Brothers Remodelers runs the whole addition under one Florida Certified General Contractor
                            license. We coordinate the architect and engineer, form and frame to the stamped drawings
                            and Florida wind-load requirements, tie the new envelope into the existing roof, and keep a
                            dedicated superintendent on site so the addition lands on the drawings and on the schedule.
                            You get a line-item proposal before construction begins and priced change orders before
                            anything changes.
                        </p>
                    </div>

                    <div className="mt-8 border-l-2 border-[hsl(var(--brand))] bg-neutral-50 p-5">
                        <p className="text-sm font-bold uppercase tracking-widest text-neutral-500">At a glance</p>
                        <dl className="mt-3 grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2">
                            <div>
                                <dt className="font-semibold text-neutral-800">Typical timeline</dt>
                                <dd className="text-neutral-600">12–20 weeks of active construction after permits and materials are in place.</dd>
                            </div>
                            <div>
                                <dt className="font-semibold text-neutral-800">Permits required</dt>
                                <dd className="text-neutral-600">Building, electrical, plumbing and mechanical permits, plus zoning or site-plan review.</dd>
                            </div>
                            <div>
                                <dt className="font-semibold text-neutral-800">Main cost drivers</dt>
                                <dd className="text-neutral-600">Foundation, square footage, story, roof tie-in, mechanical scope, finishes, existing conditions.</dd>
                            </div>
                            <div>
                                <dt className="font-semibold text-neutral-800">Warranty</dt>
                                <dd className="text-neutral-600">Two-year workmanship warranty plus manufacturer coverage on installed products.</dd>
                            </div>
                        </dl>
                    </div>

                    <h3 className="font-display mt-10 text-2xl font-bold uppercase">What a home addition includes</h3>
                    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                        {scope.map((item) => (
                            <li key={item} className="flex gap-2 border border-neutral-200 p-3 text-sm text-neutral-700">
                                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand))]" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    <h3 className="font-display mt-12 text-2xl font-bold uppercase">Our home addition process</h3>
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

                    <h3 className="font-display mt-12 text-2xl font-bold uppercase">What affects the cost of a home addition</h3>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                        Every addition estimate is built from the same line items. Knowing what drives them helps you
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
                        After a walkthrough and feasibility conversation, we return a written line-item proposal —
                        usually within five business days. Allowances for owner-selected finishes are stated plainly, and
                        payments follow completed milestones. See how owners fund projects on our{' '}
                        <Link to="/financing" className="font-semibold underline decoration-[hsl(var(--brand))] underline-offset-2 hover:text-[hsl(var(--brand))]">
                           financing page
                        </Link>.
                    </p>

                    <h3 className="font-display mt-12 text-2xl font-bold uppercase">Permits and inspections</h3>
                    <div className="mt-3 space-y-4 leading-relaxed text-neutral-600">
                        <p>
                            A permitted addition in Florida requires building, electrical, plumbing and mechanical
                            inspections, and usually a zoning or site-plan review for setbacks, height and lot
                            coverage. If you live inside city limits — Tampa, St. Petersburg, Clearwater, Sarasota,
                            Bradenton — the permit runs through the city’s building department. In unincorporated areas
                            it goes through the county. Each department sets its own review times and inspection
                            windows, which is why we file early and order long-lead materials during pre-construction.
                        </p>
                        <p>
                            We schedule every required inspection and keep the records in your closeout package,
                            alongside sign-offs and warranty documents. Read more about our{' '}
                            <Link to="/safety" className="font-semibold underline decoration-[hsl(var(--brand))] underline-offset-2 hover:text-[hsl(var(--brand))]">
                                licensing, insurance and site safety standards
                            </Link>.
                        </p>
                    </div>

                    <h3 className="font-display mt-12 text-2xl font-bold uppercase">How to choose a home addition contractor</h3>
                    <div className="mt-4 space-y-4 leading-relaxed text-neutral-600">
                        <p>
                            An addition is structural work that your family will live inside for decades, so the
                            contractor you hire matters more than any single finish. Before signing, confirm the
                            following:
                        </p>
                        <ul className="space-y-2">
                            <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand))]" /><span><strong className="text-neutral-800">Verify the license.</strong> A Florida Certified General Contractor (CGC) number can be confirmed through the state DBPR online license check. Ours is {company.licenseNumber}.</span></li>
                            <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand))]" /><span><strong className="text-neutral-800">Require stamped engineering.</strong> A structural addition needs engineered foundation and framing drawings. A contractor who skips this is building without a permit path.</span></li>
                            <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand))]" /><span><strong className="text-neutral-800">Ask for certificates of insurance.</strong> General liability and workers' compensation should be sent directly to your HOA, lender or landlord — not handed over as a photocopy.</span></li>
                            <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand))]" /><span><strong className="text-neutral-800">Require a line-item proposal.</strong> Fixed pricing with stated allowances lets you compare bids on equal terms and exposes where money is hidden in a single lump sum.</span></li>
                            <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand))]" /><span><strong className="text-neutral-800">Confirm who supervises the site.</strong> A dedicated superintendent on site — not a project manager juggling ten jobs by phone — is what keeps an addition on schedule.</span></li>
                            <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand))]" /><span><strong className="text-neutral-800">Get the warranty in writing.</strong> Workmanship coverage and manufacturer warranties should be documented in a closeout package at handover, not promised verbally.</span></li>
                        </ul>
                        <p>
                            See completed additions and full-home renovations in our{' '}
                            <Link to="/projects" className="font-semibold underline decoration-[hsl(var(--brand))] underline-offset-2 hover:text-[hsl(var(--brand))]">project gallery</Link>, or read what other owners say on our{' '}
                            <Link to="/reviews" className="font-semibold underline decoration-[hsl(var(--brand))] underline-offset-2 hover:text-[hsl(var(--brand))]">reviews page</Link>.
                        </p>
                    </div>

                    <h3 className="font-display mt-12 text-2xl font-bold uppercase">Why homeowners hire Brothers Remodelers</h3>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                        {[
                            [ShieldCheck, 'Licensed & insured', `${company.license}. Certificates issued to your HOA or lender on request.`],
                            [Hammer, 'Engineered to code', 'Stamped foundation and framing drawings, wind-load framing and impact-rated glazing.'],
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

                    <BrandsSection slug="home-additions" title="Home addition" />

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

                    <h3 className="font-display mt-12 text-2xl font-bold uppercase">Plan your addition</h3>
                    <div className="mt-4 space-y-4 leading-relaxed text-neutral-600">
                        <p>
                            Ready to move forward? The fastest path is a free site walkthrough — we measure, confirm
                            setbacks and feasibility, and return a written line-item proposal within five business
                            days.{' '}
                            <Link to="/quote" className="font-semibold underline decoration-[hsl(var(--brand))] underline-offset-2 hover:text-[hsl(var(--brand))]">Request a free quote</Link> or{' '}
                            <Link to="/contact" className="font-semibold underline decoration-[hsl(var(--brand))] underline-offset-2 hover:text-[hsl(var(--brand))]">contact our office</Link> directly. If you are still weighing how to fund the work, our{' '}
                            <Link to="/financing" className="font-semibold underline decoration-[hsl(var(--brand))] underline-offset-2 hover:text-[hsl(var(--brand))]">financing page</Link> explains how owners typically phase scope to a budget.
                        </p>
                    </div>

                    <h3 className="font-display mt-12 text-2xl font-bold uppercase">Where we build additions</h3>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                        We build home additions across the Tampa Bay and Sarasota region, including{' '}
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
                    <GetEstimateCTA heading="Get an Estimate" text="Request a free, no-obligation line-item proposal for your addition within five business days." />
                </div>
            </div>
        </Section>

        <CtaBand heading="Get a home addition estimate" />
        <CitiesWeServe />
    </SiteLayout>
);

export default HomeAdditionsPage;
