import React from 'react';
import LocalTradeLinks from '@/components/LocalTradeLinks';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { BadgeCheck, Calculator, CalendarClock, CalendarDays, Check, DraftingCompass, HardHat, Layers, MessagesSquare, Phone } from 'lucide-react';
import SiteLayout, { CtaBand, Eyebrow, Section } from '@/components/SiteLayout';
import GetEstimateCTA from '@/components/GetEstimateCTA';
import { company, kitchenImage, projects, stats } from '@/data/site';

const crumbs = [
    { label: 'Areas We Serve', to: '/areas-we-serve' },
    { label: 'Hillsborough County', to: '/areas-we-serve/hillsborough' },
    { label: 'Tampa' },
];

const tampaServices = [
    {
        title: 'Kitchen Remodeling',
        to: '/services/kitchen-remodeling',
        text: 'Full kitchen rebuilds with relocated plumbing, custom millwork and stone counters — sequenced so demolition, rough trades and cabinetry land on schedule. Popular in Tampa’s older block homes where layouts and electrical loads need updating.',
    },
    {
        title: 'Bathroom Remodeling',
        to: '/services/bathroom-remodeling',
        text: 'Waterproofed, code-compliant bathrooms with rebuilt wet walls, curbless showers and large-format tile. Humidity and water management matter in Tampa, so membranes and ventilation are inspected before a single tile is set.',
    },
    {
        title: 'Home Additions',
        to: '/services/home-additions',
        text: 'Rear additions, second-story builds and room expansions from footings to roof tie-in, engineered to Florida wind-load requirements and blended into the existing house.',
    },
    {
        title: 'Whole-Home Remodeling',
        to: '/services/general-contracting',
        text: 'Single-source management for full-home renovations — one contract, one superintendent, and coordinated trades from pre-construction budgeting through final sign-off.',
    },
    {
        title: 'General Contracting',
        to: '/services/general-contracting',
        text: 'Permit filings, trade procurement, daily supervision and closeout documentation for Tampa remodeling projects, managed as a single point of accountability.',
    },
    {
        title: 'Concrete Services',
        to: '/services/concrete-foundations',
        text: 'Footings, slabs, driveways, lanai and pool-deck concrete with documented mix designs and tested pours — including flood-zone foundation details common around Tampa Bay.',
    },
];

const whyRemodel = [
    ['Updating an outdated kitchen', 'Many Tampa homes built in the 1960s–1990s have closed-off kitchens, limited circuits and appliance layouts that no longer work for how families cook and gather today.'],
    ['Improving bathroom functionality', 'Older bathrooms often lack ventilation, have aging waterproofing behind tile, or no longer fit accessibility needs. A rebuild addresses all three at once.'],
    ['Creating additional living space', 'Growing households frequently need another bedroom, a home office or a second story rather than a move — additions keep the location and the equity already built.'],
    ['Modernizing an older home', 'Block homes in neighborhoods like Seminole Heights and Tampa Heights can carry original wiring, single-pane glazing and no insulation. A remodel is the practical time to upgrade all of it.'],
    ['Improving the layout', 'Removing walls, opening kitchens to living areas and reworking circulation can change how a house feels without adding a single square foot.'],
    ['Combining projects into one renovation', 'Owners planning several updates — kitchen, baths, floors, impact windows — usually save time and money running them as one coordinated project instead of separate jobs.'],
];

// Icons for the considerations list, in the same order.
const considerationIcons = [DraftingCompass, CalendarDays, Layers, BadgeCheck, MessagesSquare, CalendarClock, Calculator, HardHat];

const considerations = [
    ['Scope of work', 'Define what is included and, just as important, what is not. A written scope keeps bids comparable and prevents mid-project surprises.'],
    ['Project planning', 'Decide layouts, finishes and long-lead items — cabinetry, stone, glazing — before demolition starts. Late selections are the most common cause of schedule slip.'],
    ['Materials', 'Confirm what is allowance-priced and what is fixed. In Tampa’s climate, specify humidity-tolerant and wind-rated products where the assembly requires them.'],
    ['Permits', 'Most structural, electrical, plumbing and glazing work in Tampa requires permits through the city of Tampa or Hillsborough County, depending on the property’s jurisdiction. Your contractor should handle filings and inspections.'],
    ['Communication', 'Agree on how you will receive updates — a weekly schedule, photos, and a named person who answers the phone.'],
    ['Timeline expectations', 'Ask for an outline schedule with inspection windows built in, and ask what happens if a permit or a material lead time runs long.'],
    ['Budget', 'A line-item proposal with stated allowances is easier to evaluate than a single bottom line, and a written change-order policy keeps the budget honest.'],
    ['Quality of workmanship', 'Visit a current job site if you can. A clean, organized site during construction is the best predictor of the finish you get at closeout.'],
];

const process = [
    ['Initial Consultation', 'We walk the space, listen to the goal, and tell you honestly what it costs and what it does not.'],
    ['Project Assessment', 'A superintendent measures, photographs and flags existing conditions — structure, plumbing, electrical and moisture.'],
    ['Planning & Scope', 'Layouts, finish selections and long-lead items are locked into a written scope before anything is demolished.'],
    ['Estimate & Proposal', 'A line-item fixed-price proposal with allowances stated plainly, usually within five business days.'],
    ['Construction', 'A dedicated superintendent runs the site with a live schedule, weekly photo updates and protected work areas.'],
    ['Project Completion', 'Sign-offs, punch list, warranty documents and a clean handover you can move into.'],
];

const tampaRecentWork = [
    { ...projects[0], image: '/images/project-kitchen-sink.jpg' },
    { ...projects[1], image: '/images/project-bath.jpg' },
    { ...projects[4], image: '/images/project-kitchen-island.jpg' },
];

const faqItems = [    ['What remodeling services does Brothers Remodelers provide in Tampa?', 'Brothers Remodelers provides kitchen remodeling, bathroom remodeling, home additions, whole-home remodeling, concrete services, and general contracting for homeowners in Tampa and throughout Hillsborough County. Every project starts with a free site walkthrough and a written line-item proposal.'],
    ['How much does home remodeling cost in Tampa?', 'Cost varies with the scope, size, materials and condition of the home, so we do not quote numbers before seeing the space. After a walkthrough you receive a line-item fixed-price proposal with allowances stated for owner-selected finishes, which lets you compare bids on equal terms.'],
    ['How long does a home remodeling project take?', 'Timelines vary by project: a single bathroom typically runs a few weeks, while a whole-home renovation runs several months once permits are approved. Your proposal includes an outline schedule with inspection windows, and permit timing with the city of Tampa or Hillsborough County is built into it.'],
    ['Do I need a permit for remodeling in Tampa?', 'Most structural, electrical, plumbing and window or door replacement work requires a permit, filed with the city of Tampa or Hillsborough County depending on the property’s jurisdiction. Brothers Remodelers coordinates the applications, plans and inspections, and keeps the permit board current on site.'],
    ['Does Brothers Remodelers handle the entire remodeling project?', 'Yes. As a Florida certified general contractor, we act as the single point of accountability — permits, trade procurement, daily supervision, inspections and closeout documentation. You are not left coordinating plumbers, electricians and carpenters yourself.'],
    ['Can Brothers Remodelers remodel multiple areas of a Tampa home?', 'Yes. Whole-home renovations are a core part of our work. Running kitchen, baths and additions as one coordinated project means one schedule, one superintendent and trades sequenced once instead of mobilized separately.'],
    ['What should I consider before hiring a Tampa remodeling contractor?', 'Verify the Florida license and insurance certificates, ask for a written line-item scope rather than a single number, check references from recent projects, and confirm the change-order and warranty policies in writing. How a contractor communicates before the contract is a fair preview of the build.'],
];

const structuredData = [
    {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://brothersremodelers.com/' },
            { '@type': 'ListItem', position: 2, name: 'Areas We Serve', item: 'https://brothersremodelers.com/areas-we-serve' },
            { '@type': 'ListItem', position: 3, name: 'Hillsborough County', item: 'https://brothersremodelers.com/areas-we-serve/hillsborough' },
            { '@type': 'ListItem', position: 4, name: 'Tampa', item: 'https://brothersremodelers.com/areas-we-serve/hillsborough/tampa' },
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

const TampaPage = () => (
    <SiteLayout>
        <Helmet>
            <title>Tampa Home Remodeling &amp; General Contractor | Brothers Remodelers</title>
            <meta
                name="description"
                content="Brothers Remodelers provides Tampa homeowners kitchen and bathroom remodeling, home additions, whole-home remodels and concrete work. Request a free quote."
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
                    Tampa Home Remodeling &amp; General Contracting
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
                    Brothers Remodelers provides residential remodeling and general contracting services for homeowners
                    in Tampa, Florida, and throughout Hillsborough County — from kitchen and bathroom remodels to home
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
                Looking for a Remodeling Contractor in Tampa, FL?
            </h2>
            <p className="mt-5 leading-relaxed text-neutral-600">
                Brothers Remodelers is a licensed residential remodeling and general contracting company serving
                homeowners in Tampa, Florida — the county seat of Hillsborough County. Services include kitchen
                remodeling, bathroom remodeling, home additions, whole-home remodeling, concrete work, and general
                contracting. Tampa homeowners, from historic bungalows to newer subdivisions, get a dedicated
                superintendent on site, written line-item proposals, and full permit coordination.
            </p>
        </Section>

        {/* Services */}
        <Section width="wide" className="border-t border-neutral-200">
            <Eyebrow>What we build</Eyebrow>
            <h2 className="font-display mt-4 text-3xl font-bold uppercase md:text-4xl">Home Remodeling Services in Tampa</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-neutral-600">
                One licensed contractor, six core disciplines. Every Tampa project runs under the same standard:
                a written scope, a live schedule and a superintendent on site.
            </p>
            <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
                {tampaServices.map((s) => (
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

        {/* Why Tampa homeowners remodel */}
        <Section width="wide" className="bg-neutral-50">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                    <Eyebrow>Why remodel</Eyebrow>
                    <h2 className="font-display mt-4 text-3xl font-bold uppercase md:text-4xl">Why Tampa Homeowners Remodel</h2>
                    <p className="mt-4 leading-relaxed text-neutral-600">
                        Tampa’s housing stock spans 1920s bungalows in Seminole Heights, post-war block homes in
                        Town ’n’ Country and Temple Terrace, and newer builds in Westchase and Riverview. Most remodels
                        we see trace back to one of six reasons.
                    </p>
                </div>
                <ul className="space-y-5">
                    {whyRemodel.map(([title, text]) => (
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

        {/* Tampa & Hillsborough County */}
        <Section width="standard">
            <Eyebrow>Service area</Eyebrow>
            <h2 className="font-display mt-4 text-3xl font-bold uppercase md:text-4xl">Tampa &amp; Hillsborough County Service Area</h2>
            <div className="mt-5 space-y-4 leading-relaxed text-neutral-600">
                <p>
                    Tampa is the county seat and largest city of Hillsborough County, Florida. Our Hillsborough County
                    service area is built around Tampa and the communities that surround it — including Brandon,
                    Riverview, Temple Terrace, Town ’n’ Country, Valrico, Westchase, Lutz and Plant City.
                </p>
                <p>
                    Permitting depends on where a property sits: projects inside Tampa city limits go through the
                    city of Tampa building department, while surrounding unincorporated areas are handled by
                    Hillsborough County. We file with the correct jurisdiction the first time, and coastal and
                    flood-zone properties get the foundation and glazing details that come with Tampa Bay living.
                </p>
                <p>
                    See the full <Link to="/areas-we-serve/hillsborough" className="font-semibold underline hover:text-[hsl(var(--brand))]">Hillsborough County service area page</Link> or
                    browse all <Link to="/areas-we-serve" className="font-semibold underline hover:text-[hsl(var(--brand))]">areas we serve</Link> across the Tampa Bay and Sarasota region.
                </p>
            </div>
        </Section>

        {/* What to consider */}
        <Section width="wide" className="border-t border-neutral-200">
            <Eyebrow>Before you sign</Eyebrow>
            <h2 className="font-display mt-4 text-3xl font-bold uppercase md:text-4xl">What to Consider Before Starting a Remodeling Project</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-neutral-600">
                A successful remodel is decided before demolition starts. These are the eight things we tell every
                homeowner to work through — with us or with any contractor.
            </p>
            <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
                {considerations.map(([title, text], i) => (
                    <div key={title} className="border-t-2 border-neutral-200 pt-5">
                        <h3 className="font-display flex items-center text-lg font-bold uppercase">
                            {considerationIcons[i] ? (
                                React.createElement(considerationIcons[i], { className: 'mr-2 h-10 w-10 shrink-0 text-[hsl(var(--brand))]', strokeWidth: 1.5, 'aria-hidden': true })
                            ) : (
                                <span className="mr-2 text-[hsl(var(--brand))]">{String(i + 1).padStart(2, '0')}</span>
                            )}
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
            <h2 className="font-display mt-4 text-3xl font-bold uppercase md:text-4xl">Our Tampa Remodeling Process</h2>
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
            <h2 className="font-display mt-4 text-3xl font-bold uppercase md:text-4xl">Remodeling Projects</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-neutral-600">
                A sample of recently completed Brothers Remodelers projects. Tampa-area references are available on
                request during your estimate.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
                {tampaRecentWork.map((p) => (
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
            <h2 className="font-display mt-4 text-3xl font-bold uppercase md:text-4xl">Why Tampa Homeowners Choose Brothers Remodelers</h2>
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
                        Tell us about your Tampa remodeling project. We walk the site, then send a line-item proposal
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
                <GetEstimateCTA heading="Get an Estimate" text="Tell us about your Tampa remodeling project and get a free, no-obligation line-item proposal within five business days." />
            </div>
        </Section>

        <LocalTradeLinks areaUrl="/areas-we-serve/hillsborough/tampa" />
        <CtaBand heading="Planning a Tampa remodeling project?" text="Send us your scope and we will come out, measure, and return a line-item proposal within five business days." />
    </SiteLayout>
);

export default TampaPage;
