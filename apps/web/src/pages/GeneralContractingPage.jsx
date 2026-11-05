import React from 'react';
import { Helmet } from 'react-helmet';
import BrandsSection from '@/components/BrandsSection';
import { brandSchemaFor } from '@/data/brands';
import { Link } from 'react-router-dom';
import { Check, Clock, FileCheck, Layers, Ruler, ShieldCheck, Wrench, Users } from 'lucide-react';
import SiteLayout, { CtaBand, Eyebrow, PageHero, Section } from '@/components/SiteLayout';
import GetEstimateCTA from '@/components/GetEstimateCTA';
import { CitiesWeServe } from '@/pages/Pages';
import { company, heroImage } from '@/data/site';

const META_TITLE = 'General Contracting in Tampa Bay & Sarasota | Brothers Remodelers';
const META_DESC =
    'Licensed Florida general contractor managing whole-home renovations, additions and build-outs across Hillsborough, Pinellas, Pasco, Sarasota and Manatee counties. Single-source accountability from permits to closeout. Free estimates.';

const scope = [
    'Pre-construction budgeting and constructability review',
    'Permit filings coordinated with city and county building departments',
    'Trade procurement, buyout and construction scheduling',
    'Dedicated site superintendent on every project',
    'Priced change orders before any work changes',
    'Punch list, closeout documentation and warranty handover',
];

const processSteps = [
    {
        icon: Ruler,
        title: 'Consultation & scope',
        text: 'We walk the property, listen to the goal, and tell you honestly what the project requires, what it costs, and what it does not. You leave the meeting with a clear picture of scope, sequence and feasibility.',
    },
    {
        icon: Layers,
        title: 'Estimate & design',
        text: 'A line-item proposal with allowances stated plainly for owner-selected finishes. Where engineering or design is needed, we coordinate with architect and engineer partners so drawings are ready before pricing is locked.',
    },
    {
        icon: FileCheck,
        title: 'Permits & procurement',
        text: 'We file the building, mechanical, electrical and plumbing permits with the city or county, then order long-lead materials — cabinetry, stone, trusses, windows — so they arrive on schedule and do not stall the build.',
    },
    {
        icon: Wrench,
        title: 'Construction & supervision',
        text: 'A dedicated superintendent runs the site daily. Trades are sequenced, the schedule is live, and weekly photo updates keep you informed. Work areas are isolated in occupied homes with dust barriers and floor protection.',
    },
    {
        icon: Check,
        title: 'Inspections & closeout',
        text: 'Every required inspection is scheduled and passed. The punch list is walked with you, warranty documents are handed over, and the site is cleaned for a move-in-ready handover.',
    },
];

const costFactors = [
    ['Scope and square footage', 'The single largest driver. A single-room renovation costs a fraction of a whole-home remodel. Square footage, number of trades involved, and whether the work is structural or cosmetic all set the baseline.'],
    ['Structural and mechanical work', 'Moving load-bearing walls, adding footings, rerouting plumbing stacks or upgrading an electrical panel are structural and mechanical costs that dwarf finish work. We price these from engineered drawings before construction begins.'],
    ['Permit and inspection fees', 'Permitted work in Florida requires building, electrical, plumbing and mechanical inspections. Fees vary by city and county and are part of the written estimate. We file and schedule every inspection.'],
    ['Material selections', 'Owner-selected finishes — cabinetry, stone, tile, fixtures, windows — carry allowances in the proposal. Upgrading an allowance raises that line item only, with no hidden markups buried elsewhere.'],
    ['Existing conditions', 'Water damage, outdated wiring, termite repair or floor patching found during demolition are common in older homes. We flag and price any repair before the work continues, never as a surprise change order.'],
    ['Project duration and phasing', 'Longer schedules carry more supervision and overhead. When a budget cannot cover the full scope at once, we phase it: structural, mechanical and waterproofing first, cosmetic finishes second, so nothing built has to be reopened.'],
];

const faqs = [
    [
        'What does a general contractor do?',
        'A general contractor is the single point of accountability for a construction project. Brothers Remodelers manages pre-construction budgeting, permits, trade procurement, on-site supervision, inspections and closeout — so one licensed contractor owns the schedule, the quality and the budget from start to finish.',
    ],
    [
        'How long does a whole-home renovation take?',
        'A typical 1,800–3,000 sq ft whole-home renovation runs 14 to 22 weeks of active construction after permits are approved, depending on the municipality, scope and any HOA or historic review. You receive a written schedule before demolition begins, with long-lead materials ordered during pre-construction.',
    ],
    [
        'How much does a general contracting project cost?',
        'Cost depends on square footage, structural and mechanical scope, permit fees, material selections and existing conditions. After a site visit and scope conversation, we return a line-item proposal with allowances stated plainly — usually within five business days — so you can see where the money goes and compare bids on equal terms.',
    ],
    [
        'Do you handle permits and inspections?',
        'Yes. We coordinate permit applications, wind-load and energy calculations, and every required building, electrical, plumbing and mechanical inspection with the local building department. The permit board stays current on site and inspection records go into your closeout package.',
    ],
    [
        'Can I live in the house during a renovation?',
        'Often yes for partial renovations, since we isolate the work area with temporary partitions, dust barriers and separate access. For whole-home renovations that take the kitchen or primary bath out of service, many families arrange temporary housing for the roughest phase. We help you plan the logistics either way.',
    ],
    [
        'How do you handle change orders?',
        'Nothing changes without a written, priced change order signed before the work proceeds. If demolition reveals an existing condition that needs repair, we flag it, price it, and wait for your approval before continuing — never as a surprise after the fact.',
    ],
    [
        'Do you work with my architect or designer?',
        'Constantly. We work from your existing drawings, or we can introduce you to architect and engineer partners if you do not have them yet. Design and engineering are coordinated during pre-construction so the estimate reflects what will actually be built.',
    ],
    [
        'What warranty do you offer?',
        'Two years on our workmanship, plus the manufacturer warranties on installed products like cabinetry, stone, windows and fixtures. Everything is documented in your closeout package at handover, not promised verbally.',
    ],
];

const relatedServices = [
    { slug: 'kitchen-remodeling', label: 'Kitchen Remodeling' },
    { slug: 'bathroom-remodeling', label: 'Bathroom Remodeling' },
    { slug: 'home-additions', label: 'Home Additions' },
    { slug: 'concrete-foundations', label: 'Concrete & Foundations' },
];

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    brand: brandSchemaFor('general-contracting'),
    serviceType: 'General Contracting',
    provider: {
        '@type': 'GeneralContractor',
        name: company.name,
        telephone: '+1-855-445-2551',
        url: 'https://brothersremodelers.com/',
        license: 'CGC1541183',
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
        'Single-source general contracting for whole-home renovations, additions and commercial build-outs, including pre-construction budgeting, permits, trade procurement, on-site supervision and closeout, managed by a licensed Florida general contractor.',
};

const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: META_TITLE,
    description: META_DESC,
    url: 'https://brothersremodelers.com/services/general-contracting',
    isPartOf: {
        '@type': 'WebSite',
        name: company.name,
        url: 'https://brothersremodelers.com/',
    },
    about: {
        '@type': 'Service',
        name: 'General Contracting',
    },
    breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brothersremodelers.com/' },
            { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://brothersremodelers.com/services' },
            { '@type': 'ListItem', position: 3, name: 'General Contracting', item: 'https://brothersremodelers.com/services/general-contracting' },
        ],
    },
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brothersremodelers.com/' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://brothersremodelers.com/services' },
        { '@type': 'ListItem', position: 3, name: 'General Contracting', item: 'https://brothersremodelers.com/services/general-contracting' },
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

const GeneralContractingPage = () => (
    <SiteLayout>
        <Helmet>
            <title>{META_TITLE}</title>
            <meta name="description" content={META_DESC} />
            <link rel="canonical" href="https://brothersremodelers.com/services/general-contracting/" />
            <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
            <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
            <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
            <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        </Helmet>

        <PageHero
            title="General Contracting"
            subtitle="Single-source management of whole-home renovations, additions and build-outs — from pre-construction budgeting through final inspection, under one licensed Florida contractor."
            image={heroImage}
            crumbs={[{ label: 'Services', to: '/services' }, { label: 'General Contracting' }]}
        />

        <Section width="wide">
            <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
                <div>
                    <Eyebrow>Overview</Eyebrow>
                    <h2 className="font-display mt-4 text-3xl font-bold uppercase md:text-4xl">
                        One contractor accountable for the whole project
                    </h2>
                    <div className="mt-4 space-y-4 leading-relaxed text-neutral-600">
                        <p>
                            A remodeling project can touch a dozen trades — demolition, framing, plumbing, electrical,
                            HVAC, drywall, cabinetry, stone, tile, paint — and every one of them has to land in the
                            right sequence or the schedule slips and the budget follows it. General contracting is the
                            discipline of owning that sequence under one license and one point of contact.
                        </p>
                        <p>
                            Brothers Remodelers acts as that single point of accountability. We run pre-construction
                            budgeting, coordinate designers and engineers, file the permits, procure the trades, and keep
                            a dedicated superintendent on site so the project lands on the drawings and on the schedule.
                            You get a line-item proposal before construction begins and priced change orders before
                            anything changes.
                        </p>
                    </div>

                    <div className="mt-8 border-l-2 border-[hsl(var(--brand))] bg-neutral-50 p-5">
                        <p className="text-sm font-bold uppercase tracking-widest text-neutral-500">At a glance</p>
                        <dl className="mt-3 grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2">
                            <div>
                                <dt className="font-semibold text-neutral-800">Typical timeline</dt>
                                <dd className="text-neutral-600">14–22 weeks for a whole-home renovation after permits are approved.</dd>
                            </div>
                            <div>
                                <dt className="font-semibold text-neutral-800">Permits required</dt>
                                <dd className="text-neutral-600">Building, electrical, plumbing and mechanical permits, filed by us.</dd>
                            </div>
                            <div>
                                <dt className="font-semibold text-neutral-800">Main cost drivers</dt>
                                <dd className="text-neutral-600">Square footage, structural and mechanical scope, permits, finishes, existing conditions.</dd>
                            </div>
                            <div>
                                <dt className="font-semibold text-neutral-800">Warranty</dt>
                                <dd className="text-neutral-600">Two-year workmanship warranty plus manufacturer coverage on installed products.</dd>
                            </div>
                        </dl>
                    </div>

                    <h3 className="font-display mt-10 text-2xl font-bold uppercase">What general contracting includes</h3>
                    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                        {scope.map((item) => (
                            <li key={item} className="flex gap-2 border border-neutral-200 p-3 text-sm text-neutral-700">
                                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand))]" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    <h3 className="font-display mt-12 text-2xl font-bold uppercase">Our general contracting process</h3>
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

                    <h3 className="font-display mt-12 text-2xl font-bold uppercase">What affects the cost of a general contracting project</h3>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                        Every estimate is built from the same line items. Knowing what drives them helps you compare
                        bids fairly and decide where to invest.
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
                        After a walkthrough and scope conversation, we return a written line-item proposal — usually
                        within five business days. Allowances for owner-selected finishes are stated plainly, and
                        payments follow completed milestones. See how owners fund projects on our{' '}
                        <Link to="/financing" className="font-semibold underline decoration-[hsl(var(--brand))] underline-offset-2 hover:text-[hsl(var(--brand))]">
                            financing page
                        </Link>.
                    </p>

                    <h3 className="font-display mt-12 text-2xl font-bold uppercase">Permits and inspections</h3>
                    <div className="mt-3 space-y-4 leading-relaxed text-neutral-600">
                        <p>
                            A permitted renovation in Florida requires building, electrical, plumbing and mechanical
                            inspections. If you live inside city limits — Tampa, St. Petersburg, Clearwater, Sarasota,
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

                    <h3 className="font-display mt-12 text-2xl font-bold uppercase">How to choose a general contractor</h3>
                    <div className="mt-4 space-y-4 leading-relaxed text-neutral-600">
                        <p>
                            A general contractor owns your schedule, your budget and your home for months, so the
                            contractor you hire matters more than any single finish. Before signing, confirm the
                            following:
                        </p>
                        <ul className="space-y-2">
                            <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand))]" /><span><strong className="text-neutral-800">Verify the license.</strong> A Florida Certified General Contractor (CGC) number can be confirmed through the state DBPR online license check. Ours is {company.licenseNumber}.</span></li>
                            <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand))]" /><span><strong className="text-neutral-800">Ask for certificates of insurance.</strong> General liability and workers' compensation should be sent directly to your HOA, lender or landlord — not handed over as a photocopy.</span></li>
                            <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand))]" /><span><strong className="text-neutral-800">Require a line-item proposal.</strong> Fixed pricing with stated allowances lets you compare bids on equal terms and exposes where money is hidden in a single lump sum.</span></li>
                            <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand))]" /><span><strong className="text-neutral-800">Confirm who supervises the site.</strong> A dedicated superintendent on site — not a project manager juggling ten jobs by phone — is what keeps a project on schedule.</span></li>
                            <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand))]" /><span><strong className="text-neutral-800">Get the warranty in writing.</strong> Workmanship coverage and manufacturer warranties should be documented in a closeout package at handover, not promised verbally.</span></li>
                        </ul>
                        <p>
                            See completed renovations and build-outs in our{' '}
                            <Link to="/projects" className="font-semibold underline decoration-[hsl(var(--brand))] underline-offset-2 hover:text-[hsl(var(--brand))]">project gallery</Link>, or read what other owners say on our{' '}
                            <Link to="/reviews" className="font-semibold underline decoration-[hsl(var(--brand))] underline-offset-2 hover:text-[hsl(var(--brand))]">reviews page</Link>.
                        </p>
                    </div>

                    <h3 className="font-display mt-12 text-2xl font-bold uppercase">Why homeowners hire Brothers Remodelers</h3>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                        {[
                            [ShieldCheck, 'Licensed & insured', `${company.license}. Certificates issued to your HOA or lender on request.`],
                            [Ruler, 'Line-item pricing', 'Fixed pricing with allowances stated plainly, so you can compare bids on equal terms.'],
                            [Clock, 'On-schedule builds', 'A live schedule and weekly photo updates from a dedicated site superintendent.'],
                            [Users, 'Single point of contact', 'One licensed contractor owns permits, trades, supervision and closeout end to end.'],
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

                    <BrandsSection slug="general-contracting" title="General contracting" />

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

                    <h3 className="font-display mt-12 text-2xl font-bold uppercase">Plan your project</h3>
                    <div className="mt-4 space-y-4 leading-relaxed text-neutral-600">
                        <p>
                            Ready to move forward? The fastest path is a free site walkthrough — we measure, confirm
                            scope and return a written line-item proposal within five business days.{' '}
                            <Link to="/quote" className="font-semibold underline decoration-[hsl(var(--brand))] underline-offset-2 hover:text-[hsl(var(--brand))]">Request a free quote</Link> or{' '}
                            <Link to="/contact" className="font-semibold underline decoration-[hsl(var(--brand))] underline-offset-2 hover:text-[hsl(var(--brand))]">contact our office</Link> directly. If you are still weighing how to fund the work, our{' '}
                            <Link to="/financing" className="font-semibold underline decoration-[hsl(var(--brand))] underline-offset-2 hover:text-[hsl(var(--brand))]">financing page</Link> explains how owners typically phase scope to a budget.
                        </p>
                    </div>

                    <h3 className="font-display mt-12 text-2xl font-bold uppercase">Where we work</h3>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                        We manage general contracting projects across the Tampa Bay and Sarasota region, including{' '}
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
                    <GetEstimateCTA heading="Get an Estimate" text="Request a free, no-obligation line-item proposal for your project within five business days." />
                </div>
            </div>
        </Section>

        <CtaBand heading="Get a general contracting estimate" />
        <CitiesWeServe />
    </SiteLayout>
);

export default GeneralContractingPage;
