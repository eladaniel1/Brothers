import React from 'react';
import { Helmet } from 'react-helmet';
import BrandsSection from '@/components/BrandsSection';
import { LocalCityLinks } from '@/pages/LocalServicePage';
import { brandSchemaFor } from '@/data/brands';
import { Link } from 'react-router-dom';
import { Check, Clock, FileCheck, Layers, Ruler, ShieldCheck, Wrench } from 'lucide-react';
import SiteLayout, { CtaBand, Eyebrow, PageHero, Section } from '@/components/SiteLayout';
import GetEstimateCTA from '@/components/GetEstimateCTA';
import { CitiesWeServe } from '@/pages/Pages';
import { company, kitchenImage } from '@/data/site';

const META_TITLE = 'Kitchen Remodeling in Tampa Bay & Sarasota | Brothers Remodelers';
const META_DESC =
    'Licensed kitchen remodeling contractor serving Hillsborough, Pinellas, Pasco, Sarasota and Manatee counties. Full kitchen rebuilds — plumbing moves, cabinetry, stone counters, lighting and permits managed end to end. Free estimates.';

const scope = [
    'Layout studies and appliance clearance verification',
    'Plumbing and gas line relocation by licensed trades',
    'Dedicated circuits, under-cabinet and ceiling lighting',
    'Custom or semi-custom cabinetry installation',
    'Templated stone counters and full-height backsplashes',
    'Tile, flooring and drywall finish and paint',
];

const processSteps = [
    {
        icon: Ruler,
        title: 'Consultation & layout',
        text: 'We measure the existing kitchen, confirm appliance clearances and traffic flow, and talk through how you cook, entertain and store. You leave the meeting knowing what the layout can and cannot do.',
    },
    {
        icon: Layers,
        title: 'Design & selections',
        text: 'Cabinetry style and finish, counter material, tile, plumbing and lighting fixtures are pinned down before pricing, so the estimate reflects the kitchen you actually want — not a placeholder.',
    },
    {
        icon: FileCheck,
        title: 'Permits & procurement',
        text: 'We file the plumbing, electrical and building permits with the city or county, then order long-lead items like cabinetry and stone so they arrive on schedule.',
    },
    {
        icon: Wrench,
        title: 'Demolition & rough-in',
        text: 'Cabinets and old finishes come out, then licensed plumbers and electricians reroute lines, add dedicated circuits and update the gas line if the layout calls for it.',
    },
    {
        icon: Check,
        title: 'Cabinetry, stone & finish',
        text: 'Cabinetry is installed and leveled, stone is templated after the cabinets are set, then counters, backsplash, fixtures and paint close the room out.',
    },
    {
        icon: ShieldCheck,
        title: 'Inspection & closeout',
        text: 'Final plumbing and electrical inspections are scheduled, the punch list is walked with you, and warranty documents are handed over with a clean kitchen ready to use.',
    },
];

const costFactors = [
    ['Cabinetry', 'The largest single line on most kitchen budgets. Stock cabinets cost the least; semi-custom and custom cabinetry with soft-close hardware, pull-outs and integrated organization raises the price but extends the kitchen’s useful life.'],
    ['Countertops', 'Stone counters are templated after cabinetry is installed. Quartz and granite are common in Florida kitchens; the edge profile, thickness and number of slab seams all affect cost.'],
    ['Plumbing and electrical moves', 'Relocating a sink or range means rerouting plumbing and gas lines, often through a concrete slab. The further the fixtures move, the more trenching and patching is required.'],
    ['Appliances', 'Most owners buy appliances directly for warranty reasons. Switching to a pro-style range or panel-ready refrigerator can require upgraded electrical circuits or gas lines, which we price up front.'],
    ['Permits and inspections', 'A permitted kitchen remodel in Florida requires plumbing, electrical and building inspections. Permit fees vary by city and county and are part of the written estimate.'],
    ['Existing conditions', 'Water damage, outdated wiring or floor patching found during demolition are common in older homes. We flag and price any repair before the work continues, never as a surprise change order.'],
];

const faqs = [
    [
        'How long does a kitchen remodel take?',
        'A full kitchen rebuild typically runs 6 to 10 weeks of active construction after permits are approved and materials are on hand. Cabinetry and stone lead times can shift the start date, which is why we order long-lead items during pre-construction. You receive a written schedule before demolition begins.',
    ],
    [
        'Do I need a permit to remodel a kitchen in Florida?',
        'Yes, when the work involves plumbing, electrical, gas or structural changes — which a full kitchen rebuild usually does. The permit is filed with your city’s building department if you live inside city limits, or with the county in unincorporated areas. We handle the filings and schedule every required inspection.',
    ],
    [
        'How much does a kitchen remodel cost?',
        'Cost depends on cabinetry, counter material, how far the plumbing and electrical move, appliance upgrades and the condition of the existing space. After a site visit and selections conversation, we return a line-item proposal with allowances stated plainly so you can see where the money goes and compare bids on equal terms.',
    ],
    [
        'Can I live in the house during a kitchen remodel?',
        'Often yes, but the kitchen itself will be out of service. We set up a temporary prep area with a sink substitute where the layout allows, isolate the work zone with dust barriers, and keep the demolition-to-rough-in phase tight. Many families plan simple meals and a separate cleanup station for the duration.',
    ],
    [
        'Do you supply the appliances?',
        'We coordinate delivery and installation, but most clients purchase appliances directly so the manufacturer warranty registers in their name. We provide the rough-in specifications — electrical circuits, gas line, water and drain locations — so the appliances you choose fit the layout.',
    ],
    [
        'Do you work in HOA communities?',
        'Constantly. We carry the insurance certificates most associations require and work within HOA alteration agreements, approved vendor lists and work-hour restrictions. If your community needs architectural review, we help assemble the submission.',
    ],
    [
        'What warranty do you offer on kitchen work?',
        'Two years on our workmanship, plus the manufacturer warranties on installed products like cabinetry, stone and fixtures. Everything is documented in your closeout package at handover.',
    ],
];

const relatedServices = [
    { slug: 'bathroom-remodeling', label: 'Bathroom Remodeling' },
    { slug: 'general-contracting', label: 'General Contracting' },
    { slug: 'home-additions', label: 'Home Additions' },
    { slug: 'concrete-foundations', label: 'Concrete & Foundations' },
];

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    brand: brandSchemaFor('kitchen-remodeling'),
    serviceType: 'Kitchen Remodeling',
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
        'Full kitchen rebuilds including relocated plumbing, custom and semi-custom cabinetry, stone countertops, lighting and permits, managed end to end by a licensed Florida general contractor.',
};

const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: META_TITLE,
    description: META_DESC,
    url: 'https://brothersremodelers.com/services/kitchen-remodeling',
    isPartOf: {
        '@type': 'WebSite',
        name: company.name,
        url: 'https://brothersremodelers.com/',
    },
    about: {
        '@type': 'Service',
        name: 'Kitchen Remodeling',
    },
    breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brothersremodelers.com/' },
            { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://brothersremodelers.com/services' },
            { '@type': 'ListItem', position: 3, name: 'Kitchen Remodeling', item: 'https://brothersremodelers.com/services/kitchen-remodeling' },
        ],
    },
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brothersremodelers.com/' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://brothersremodelers.com/services' },
        { '@type': 'ListItem', position: 3, name: 'Kitchen Remodeling', item: 'https://brothersremodelers.com/services/kitchen-remodeling' },
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

const KitchenRemodelingPage = () => (
    <SiteLayout>
        <Helmet>
            <title>{META_TITLE}</title>
            <meta name="description" content={META_DESC} />
            <link rel="canonical" href="https://brothersremodelers.com/services/kitchen-remodeling/" />
            <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
            <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
            <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
            <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        </Helmet>

        <PageHero
            title="Kitchen Remodeling"
            subtitle="Full kitchen rebuilds — relocated plumbing, custom cabinetry, stone counters and lighting — managed from permit to final inspection by one licensed Florida contractor."
            image={kitchenImage}
            crumbs={[{ label: 'Services', to: '/services' }, { label: 'Kitchen Remodeling' }]}
        />

        <Section width="wide">
            <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
                <div>
                    <Eyebrow>Overview</Eyebrow>
                    <h2 className="font-display mt-4 text-3xl font-bold uppercase md:text-4xl">
                        A kitchen built around how you actually cook
                    </h2>
                    <div className="mt-4 space-y-4 leading-relaxed text-neutral-600">
                        <p>
                            Kitchens carry more trades per square foot than any other room in the house. A full kitchen
                            remodel touches demolition, rough plumbing, gas, electrical loads, cabinetry, stone
                            fabrication, tile, drywall and paint — and every one of them has to land in the right
                            sequence or the room misses its finish date.
                        </p>
                        <p>
                            Brothers Remodelers runs the whole rebuild under one Florida Certified General Contractor
                            license. We sequence the trades, file the permits, and keep a dedicated superintendent on
                            site so the kitchen lands on the drawings and on the schedule. You get a line-item proposal
                            before demolition and priced change orders before anything changes.
                        </p>
                    </div>

                    <div className="mt-8 border-l-2 border-[hsl(var(--brand))] bg-neutral-50 p-5">
                        <p className="text-sm font-bold uppercase tracking-widest text-neutral-500">At a glance</p>
                        <dl className="mt-3 grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2">
                            <div>
                                <dt className="font-semibold text-neutral-800">Typical timeline</dt>
                                <dd className="text-neutral-600">6–10 weeks of active construction after permits and materials are in place.</dd>
                            </div>
                            <div>
                                <dt className="font-semibold text-neutral-800">Permits required</dt>
                                <dd className="text-neutral-600">Plumbing, electrical and building permits, filed by us with the city or county.</dd>
                            </div>
                            <div>
                                <dt className="font-semibold text-neutral-800">Main cost drivers</dt>
                                <dd className="text-neutral-600">Cabinetry, countertops, plumbing/electrical moves, appliances and existing conditions.</dd>
                            </div>
                            <div>
                                <dt className="font-semibold text-neutral-800">Warranty</dt>
                                <dd className="text-neutral-600">Two-year workmanship warranty plus manufacturer coverage on installed products.</dd>
                            </div>
                        </dl>
                    </div>

                    <h3 className="font-display mt-10 text-2xl font-bold uppercase">What a kitchen remodel includes</h3>
                    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                        {scope.map((item) => (
                            <li key={item} className="flex gap-2 border border-neutral-200 p-3 text-sm text-neutral-700">
                                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand))]" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    <h3 className="font-display mt-12 text-2xl font-bold uppercase">Our kitchen remodeling process</h3>
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

                    <h3 className="font-display mt-12 text-2xl font-bold uppercase">What affects the cost of a kitchen remodel</h3>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                        Every kitchen estimate is built from the same line items. Knowing what drives them helps you
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
                            A full kitchen rebuild in Florida requires plumbing, electrical and building permits. If
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

                    <h3 className="font-display mt-12 text-2xl font-bold uppercase">How to choose a kitchen remodeling contractor</h3>
                    <div className="mt-4 space-y-4 leading-relaxed text-neutral-600">
                        <p>
                            A kitchen remodel is a multi-trade project governed by Florida building code, so the contractor
                            you hire matters more than the finish you pick. Before signing, confirm the following:
                        </p>
                        <ul className="space-y-2">
                            <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand))]" /><span><strong className="text-neutral-800">Verify the license.</strong> A Florida Certified General Contractor (CGC) number can be confirmed through the state DBPR online license check. Ours is {company.licenseNumber}.</span></li>
                            <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand))]" /><span><strong className="text-neutral-800">Ask for certificates of insurance.</strong> General liability and workers' compensation should be sent directly to your HOA, lender or landlord — not handed over as a photocopy.</span></li>
                            <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand))]" /><span><strong className="text-neutral-800">Require a line-item proposal.</strong> Fixed pricing with stated allowances lets you compare bids on equal terms and exposes where money is hidden in a single lump sum.</span></li>
                            <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand))]" /><span><strong className="text-neutral-800">Confirm who supervises the site.</strong> A dedicated superintendent on site — not a project manager juggling ten jobs by phone — is what keeps a kitchen on schedule.</span></li>
                            <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand))]" /><span><strong className="text-neutral-800">Get the warranty in writing.</strong> Workmanship coverage and manufacturer warranties should be documented in a closeout package at handover, not promised verbally.</span></li>
                        </ul>
                        <p>
                            See completed kitchens and full-home renovations in our{' '}
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

                    <LocalCityLinks slug="kitchen-remodeling" />

                    <BrandsSection slug="kitchen-remodeling" title="Kitchen remodeling" />

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

                    <h3 className="font-display mt-12 text-2xl font-bold uppercase">Plan your kitchen project</h3>
                    <div className="mt-4 space-y-4 leading-relaxed text-neutral-600">
                        <p>
                            Ready to move forward? The fastest path is a free site walkthrough — we measure, confirm
                            scope and return a written line-item proposal within five business days.{' '}
                            <Link to="/quote" className="font-semibold underline decoration-[hsl(var(--brand))] underline-offset-2 hover:text-[hsl(var(--brand))]">Request a free quote</Link> or{' '}
                            <Link to="/contact" className="font-semibold underline decoration-[hsl(var(--brand))] underline-offset-2 hover:text-[hsl(var(--brand))]">contact our office</Link> directly. If you are still weighing how to fund the work, our{' '}
                            <Link to="/financing" className="font-semibold underline decoration-[hsl(var(--brand))] underline-offset-2 hover:text-[hsl(var(--brand))]">financing page</Link> explains how owners typically phase scope to a budget.
                        </p>
                    </div>

                    <h3 className="font-display mt-12 text-2xl font-bold uppercase">Where we build kitchens</h3>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                        We remodel kitchens across the Tampa Bay and Sarasota region, including{' '}
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
                    <GetEstimateCTA heading="Get an Estimate" text="Request a free, no-obligation line-item proposal for your kitchen remodel within five business days." />
                </div>
            </div>
        </Section>

        <CtaBand heading="Get a kitchen remodeling estimate" />
        <CitiesWeServe />
    </SiteLayout>
);

export default KitchenRemodelingPage;
