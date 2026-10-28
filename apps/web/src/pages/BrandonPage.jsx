import React from 'react';
import LocalTradeLinks from '@/components/LocalTradeLinks';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Check, Phone } from 'lucide-react';
import SiteLayout, { CtaBand, Eyebrow, Section } from '@/components/SiteLayout';
import GetEstimateCTA from '@/components/GetEstimateCTA';
import { company, kitchenImage, projects, stats } from '@/data/site';

const crumbs = [
    { label: 'Areas We Serve', to: '/areas-we-serve' },
    { label: 'Hillsborough County', to: '/areas-we-serve/hillsborough' },
    { label: 'Brandon' },
];

const brandonServices = [
    {
        title: 'Kitchen Remodeling',
        to: '/services/kitchen-remodeling',
        text: 'From cabinet and counter replacement to full layout changes with relocated plumbing and new circuits. We sequence every trade — demolition, rough-in, millwork, stone — so the busiest room in a Brandon house comes back online on schedule.',
    },
    {
        title: 'Bathroom Remodeling',
        to: '/services/bathroom-remodeling',
        text: 'Gut renovations that start behind the tile: rebuilt wet walls, waterproofing membranes, curbless showers and ventilation sized to code. Florida humidity makes the assembly under the tile matter as much as the tile itself.',
    },
    {
        title: 'Home Additions',
        to: '/services/home-additions',
        text: 'Extra bedrooms, in-law suites, sunrooms and second stories — engineered, permitted and tied into the existing roof and mechanicals, with wind-rated assemblies where the structure requires them.',
    },
    {
        title: 'Whole-Home Remodeling',
        to: '/services/general-contracting',
        text: 'One contract for a full interior renovation: floors, kitchens, baths, lighting and mechanical updates sequenced as a single project instead of a string of separate jobs.',
    },
    {
        title: 'General Contracting',
        to: '/services/general-contracting',
        text: 'Permit filings, trade procurement, daily supervision and closeout documentation — one accountable contractor from budgeting through final sign-off, so you are not coordinating subs yourself.',
    },
    {
        title: 'Concrete Services',
        to: '/services/concrete-foundations',
        text: 'Footings, slabs, driveways, walkways and lanai or pool-deck concrete with documented mix designs and tested pours — including the drainage details that keep slab work sound through Florida’s wet season.',
    },
];

const remodelReasons = [
    ['A kitchen that no longer fits how you cook', 'Closed-off layouts, worn finishes and limited counter space are the most common starting points we see. Opening a kitchen to the living area and adding storage changes how the whole house works.'],
    ['Bathrooms that need a full rebuild', 'Aging waterproofing, poor ventilation and dated fixtures are functional problems, not just cosmetic ones. A gut renovation fixes all three in one project.'],
    ['More space without a move', 'A growing household or a work-from-home routine often needs another room. An addition keeps the commute, the schools and the equity already built into the house.'],
    ['A layout that fights the household', 'Removing a wall, widening a passage or reworking a hallway can make an existing floor plan feel like a different house — without adding a single square foot.'],
    ['Interior modernization', 'Replacing worn flooring, upgrading lighting and circuits, and updating trim and finishes bring an older interior current in one coordinated pass.'],
    ['Several projects at once', 'Combining a kitchen, baths and new floors into one renovation means one schedule, one superintendent and trades mobilized once — usually faster and cheaper than three separate jobs.'],
];

const homeownerInfo = [
    ['Define the scope in writing', 'A written scope states what is included and what is not. It keeps bids comparable and prevents mid-project surprises.'],
    ['Compare estimates line by line', 'A line-item proposal with stated allowances is easier to evaluate than a single bottom line. Ask what is fixed price and what is allowance-based.'],
    ['Select finishes before demolition', 'Cabinetry, stone and glazing carry the longest lead times. Locking selections early is the single best way to protect a schedule.'],
    ['Confirm who pulls permits', 'Structural, electrical, plumbing and glazing work typically requires permits. Agree in writing on who files them and who is present for inspections.'],
    ['Ask how the site is protected', 'If you are staying in the house during work, confirm dust containment, floor protection and daily cleanup before the contract is signed.'],
    ['Set a communication rhythm', 'A weekly schedule, photo updates and a named person who answers the phone keep a renovation predictable.'],
    ['Understand the change-order policy', 'Ask what happens when something behind a wall changes the work. A written, priced change order before work proceeds is the honest answer.'],
    ['Plan the timeline around inspections', 'Municipal inspection windows and material lead times shape the calendar more than labor does. Ask for an outline schedule that accounts for both.'],
];

const process = [
    ['Initial Consultation', 'We walk the house, listen to what you want to change, and talk honestly about budget and sequence.'],
    ['Project Assessment', 'A superintendent measures, photographs and flags existing conditions — structure, plumbing, electrical and moisture.'],
    ['Planning & Scope', 'Layouts, finish selections and long-lead items are locked into a written scope before anything is demolished.'],
    ['Estimate & Proposal', 'A line-item fixed-price proposal with allowances stated plainly, usually within five business days.'],
    ['Construction', 'A dedicated superintendent runs the site with a live schedule, weekly photo updates and protected work areas.'],
    ['Project Completion', 'Sign-offs, punch list, warranty documents and a clean handover you can move into.'],
];

const brandonWork = [
    { ...projects[1], image: '/images/project-kitchen-sink.jpg' },
    { ...projects[3], image: '/images/project-bath.jpg' },
    { ...projects[5], image: '/images/project-kitchen-island.jpg' },
];

const faqItems = [
    ['What remodeling services does Brothers Remodelers provide in Brandon?', 'Brothers Remodelers provides kitchen remodeling, bathroom remodeling, home additions, whole-home remodeling, concrete services, and general contracting for homeowners in Brandon and the surrounding Hillsborough County area. Every project begins with a free site walkthrough and a written line-item proposal.'],
    ['How much does home remodeling cost in Brandon, Florida?', 'Remodeling cost depends on the scope, size, materials and condition of the home, so we do not quote numbers before seeing the space. After a walkthrough you receive a line-item fixed-price proposal with allowances stated for owner-selected finishes, which makes bids easy to compare on equal terms.'],
    ['How long does a remodeling project take?', 'Duration varies with the scope: a single bathroom typically runs a few weeks, while a whole-home renovation runs several months once permits are approved. Your proposal includes an outline schedule that accounts for material lead times and municipal inspection windows.'],
    ['Do I need a permit for remodeling in Brandon?', 'Many structural, electrical, plumbing and window or door replacement projects require permits, filed with Hillsborough County or the city of Tampa depending on the property’s jurisdiction. Brothers Remodelers coordinates applications, plans and inspections, and keeps the permit board current on site.'],
    ['Does Brothers Remodelers handle the entire remodeling project?', 'Yes. As a Florida certified general contractor, we act as the single point of accountability — permits, trade procurement, daily supervision, inspections and closeout documentation. You are not left coordinating plumbers, electricians and carpenters yourself.'],
    ['Can Brothers Remodelers remodel multiple areas of my home?', 'Yes. Whole-home renovations are a core part of our work. Running a kitchen, baths and flooring as one coordinated project means one schedule, one superintendent and trades sequenced once instead of mobilized separately.'],
    ['How do I request a remodeling estimate in Brandon?', 'Call us or submit the quote form on this page. We schedule a free site walkthrough, then send a written line-item proposal with an outline schedule, usually within five business days.'],
];

const structuredData = [
    {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brothersremodelers.com/' },
            { '@type': 'ListItem', position: 2, name: 'Areas We Serve', item: 'https://brothersremodelers.com/areas-we-serve' },
            { '@type': 'ListItem', position: 3, name: 'Hillsborough County', item: 'https://brothersremodelers.com/areas-we-serve/hillsborough' },
            { '@type': 'ListItem', position: 4, name: 'Brandon', item: 'https://brothersremodelers.com/areas-we-serve/hillsborough/brandon' },
        ],
    },
    {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map(([q, a]) => ({
            '@type': 'Question',
            name: q,
            acceptedAnswer: { '@type': 'Answer', text: a },
        })),
    },
];

const BrandonPage = () => (
    <SiteLayout>
        <Helmet>
            <title>Brandon Home Remodeling &amp; General Contractor | Brothers Remodelers</title>
            <meta
                name="description"
                content="Brothers Remodelers serves Brandon, FL homeowners with kitchen and bathroom remodeling, additions, whole-home renovations and concrete work. Request a free quote."
            />
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
                    {crumbs.map((c) => (
                        <span key={c.label} className="flex items-center gap-2">
                            <span>/</span>
                            {c.to ? (
                                <Link to={c.to} className="hover:text-[hsl(var(--brand))]">{c.label}</Link>
                            ) : (
                                <span className="text-white/80">{c.label}</span>
                            )}
                        </span>
                    ))}
                </nav>
                <h1 className="font-display max-w-3xl text-4xl font-bold uppercase leading-[1.05] text-white sm:text-5xl md:text-6xl">
                    Brandon Home Remodeling &amp; General Contracting
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
                    Brothers Remodelers provides residential remodeling and general contracting services for homeowners
                    in Brandon, Florida, and throughout Hillsborough County — from kitchen and bathroom remodels to home
                    additions, whole-home renovations and concrete work.
                </p>
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
                Looking for a Remodeling Contractor in Brandon, FL?
            </h2>
            <p className="mt-5 leading-relaxed text-neutral-600">
                Brothers Remodelers is a licensed residential remodeling and general contracting company serving
                homeowners in Brandon, an unincorporated community in Hillsborough County, Florida. Services include
                kitchen remodeling, bathroom remodeling, home additions, whole-home remodeling, concrete work, and
                general contracting. Brandon homeowners get a dedicated superintendent on site, written line-item
                proposals, and full permit coordination.
            </p>
        </Section>

        {/* Services */}
        <Section width="wide" className="border-t border-neutral-200">
            <Eyebrow>What we build</Eyebrow>
            <h2 className="font-display mt-4 text-3xl font-bold uppercase md:text-4xl">Home Remodeling Services in Brandon</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-neutral-600">
                Six core disciplines, one licensed contractor. Every Brandon project runs under the same standard:
                a written scope, a live schedule and a superintendent on site.
            </p>
            <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
                {brandonServices.map((s) => (
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

        {/* Why Brandon homeowners remodel */}
        <Section width="wide" className="bg-neutral-50">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                    <Eyebrow>Why remodel</Eyebrow>
                    <h2 className="font-display mt-4 text-3xl font-bold uppercase md:text-4xl">Home Remodeling Considerations for Brandon Homeowners</h2>
                    <p className="mt-4 leading-relaxed text-neutral-600">
                        Most remodels we see in the Brandon area trace back to a handful of practical needs — a house
                        that no longer fits the household that lives in it. These are the six we hear most often.
                    </p>
                </div>
                <ul className="space-y-5">
                    {remodelReasons.map(([title, text]) => (
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

        {/* Brandon & Hillsborough County */}
        <Section width="standard">
            <Eyebrow>Service area</Eyebrow>
            <h2 className="font-display mt-4 text-3xl font-bold uppercase md:text-4xl">Serving Brandon and Hillsborough County</h2>
            <div className="mt-5 space-y-4 leading-relaxed text-neutral-600">
                <p>
                    Brandon is an unincorporated community in central Hillsborough County, Florida, east of Tampa.
                    Our Hillsborough County service area is built around Tampa and the communities that surround it —
                    including Brandon and neighboring Riverview, Valrico and Bloomingdale.
                </p>
                <p>
                    Because Brandon sits outside Tampa city limits, most permitting for remodeling projects in the
                    area is handled by Hillsborough County rather than the city of Tampa. We file with the correct
                    jurisdiction the first time and coordinate every inspection along the way.
                </p>
                <p>
                    See the full <Link to="/areas-we-serve/hillsborough" className="font-semibold underline hover:text-[hsl(var(--brand))]">Hillsborough County service area page</Link> or
                    browse all <Link to="/areas-we-serve" className="font-semibold underline hover:text-[hsl(var(--brand))]">areas we serve</Link> across the Tampa Bay and Sarasota region.
                </p>
            </div>
        </Section>

        {/* Local homeowner information */}
        <Section width="wide" className="border-t border-neutral-200">
            <Eyebrow>Plan the project</Eyebrow>
            <h2 className="font-display mt-4 text-3xl font-bold uppercase md:text-4xl">What a Brandon Homeowner Should Know Before Starting</h2>
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
                {process.map(([title, text], i) => (
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
            <h2 className="font-display mt-4 text-3xl font-bold uppercase md:text-4xl">Brandon Remodeling Projects</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-neutral-600">
                A sample of recently completed Brothers Remodelers projects. References from the Hillsborough County
                area are available on request during your estimate.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
                {brandonWork.map((p) => (
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
            <h2 className="font-display mt-4 text-3xl font-bold uppercase md:text-4xl">Why Brandon Homeowners Choose Brothers Remodelers</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((s) => (
                    <div key={s.label} className="border-t-2 border-[hsl(var(--brand))] pt-4">
                        <p className="font-display text-4xl font-bold">{s.value}{s.suffix}</p>
                        <p className="mt-1 text-xs uppercase tracking-widest text-white/60">{s.label}</p>
                    </div>
                ))}
            </div>
            <ul className="mt-10 grid gap-3 text-sm leading-relaxed text-white/80 md:grid-cols-2">
                <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(var(--brand))]" />Florida certified general contractor — license #CGC1541183, fully licensed and insured.</li>
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
                {faqItems.map(([q, a]) => (
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
                        Tell us about your Brandon remodeling project. We walk the site, then send a line-item proposal
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
                <GetEstimateCTA heading="Get an Estimate" text="Tell us about your Brandon remodeling project and get a free, no-obligation line-item proposal within five business days." />
            </div>
        </Section>

        <LocalTradeLinks areaUrl="/areas-we-serve/hillsborough/brandon" />
        <CtaBand heading="Planning a Brandon remodeling project?" text="Send us your scope and we will come out, measure, and return a line-item proposal within five business days." />
    </SiteLayout>
);

export default BrandonPage;
