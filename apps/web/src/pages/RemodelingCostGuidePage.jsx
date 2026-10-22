import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import SiteLayout, { PageHero } from '@/components/SiteLayout';
import Seo from '@/components/Seo';
import { company } from '@/data/site';

const today = new Date().toISOString().slice(0, 10);

const ORG_URL = 'https://brothersremodelers.com/';
const GUIDE_URL = 'https://brothersremodelers.com/guides/remodeling-cost-tampa-bay/';

const toc = [
    { id: 'the-biggest-cost-drivers', label: 'The biggest cost drivers' },
    { id: 'how-to-read-a-remodeling-proposal', label: 'How to read a remodeling proposal' },
    { id: 'how-to-compare-bids-fairly', label: 'How to compare bids fairly' },
    { id: 'how-brothers-remodelers-prices-a-project', label: 'How Brothers Remodelers prices a project' },
    { id: 'faq', label: 'FAQ' },
];

const intro = "What a remodel costs depends on four things: how big the scope is, how much of the structure changes, the finishes you choose, and Florida-specific requirements such as wind code, flood zones and permits. Damage found during demolition can add to it. The most reliable way to know your number is a line-item proposal based on a visit to your home.";

const proposalItems = [
    ['Line items', 'each part of the work priced separately, so you can see where the money goes'],
    ['Allowances', "set amounts for finishes you'll choose later. Check that they're realistic for what you want"],
    ['Exclusions', "what isn't included, such as appliances, landscaping or permit fees"],
    ['Change orders', 'how changes are priced and approved. Ask for them in writing, before the work happens'],
    ['Payment schedule', 'payments tied to completed stages of work, not a large sum upfront'],
];

const compareSteps = [
    'Make sure every bid covers the same scope.',
    'Compare allowances line by line. A low bid with low allowances often ends up costing more.',
    'Check that each contractor holds an active Florida license at myfloridalicense.com and carries insurance.',
    'Ask who supervises the job day to day.',
    'Ask how hidden damage and change orders are handled and priced.',
];

const faqs = [
    {
        q: 'Why do remodeling quotes vary so much?',
        a: 'Quotes differ because the scope, allowances and exclusions differ. One bid may include engineering, permits and realistic finish allowances, while another leaves them out. Compare bids line by line, on the same scope, before comparing totals.',
    },
    {
        q: 'What is an allowance in a remodeling proposal?',
        a: "An allowance is a set budget for an item you'll choose later, such as tile, fixtures or cabinets. If you choose something that costs more, the difference is added; if it costs less, you're credited. Check that the allowances match the finishes you want.",
    },
    {
        q: 'Does moving plumbing add a lot to the cost?',
        a: 'In most Florida homes, yes. Plumbing runs through the concrete slab, so moving a sink, toilet or shower usually means cutting and trenching the slab, then patching it. Keeping fixtures in place is one of the most effective ways to control cost.',
    },
    {
        q: 'Can hidden damage change the price after work starts?',
        a: 'It can. Rot, mold or termite damage is often found only when walls are opened. A good contractor checks for it at demolition and prices any repair in writing before continuing, so you approve the cost before it is added.',
    },
    {
        q: 'Do you offer financing?',
        a: 'Yes. Financing is available for qualifying homeowners through Service Finance Company, LLC and Sunlight Financial. Visit our Financing page to see how each program works and how to apply, or ask about it during your free consultation.',
    },
];

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'What Affects Remodeling Costs in Tampa Bay & Sarasota',
    datePublished: today,
    dateModified: today,
    author: { '@type': 'Organization', name: 'Brothers Remodelers', url: ORG_URL },
    publisher: { '@type': 'Organization', name: 'Brothers Remodelers', url: ORG_URL },
    mainEntityOfPage: { '@type': 'WebPage', '@id': GUIDE_URL },
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: ORG_URL },
        { '@type': 'ListItem', position: 2, name: 'Guides' },
        { '@type': 'ListItem', position: 3, name: 'Remodeling Costs', item: GUIDE_URL },
    ],
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
};

const Bullet = ({ children }) => (
    <li className="flex gap-3 leading-relaxed text-neutral-600">
        <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-[hsl(var(--brand))]" />
        <span>{children}</span>
    </li>
);

const Numbered = ({ items }) => (
    <ol className="mt-4 space-y-3">
        {items.map((it, i) => (
            <li key={i} className="flex gap-3 leading-relaxed text-neutral-600">
                <span className="font-display font-bold text-[hsl(var(--brand))]">{i + 1}.</span>
                <span>{it}</span>
            </li>
        ))}
    </ol>
);

const RemodelingCostGuidePage = () => (
    <SiteLayout>
        <Helmet>
            <title>What Affects Remodeling Costs in Tampa Bay &amp; Sarasota | Brothers Remodelers</title>
            <meta name="description" content="Scope, block walls, slab plumbing, wind code, flood zones and hidden damage all shape what a Florida remodel costs. Here's what drives the price and how to compare bids." />
            <link rel="canonical" href={GUIDE_URL} />
            <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
            <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
            <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        </Helmet>
        <Seo
            title="What Affects Remodeling Costs in Tampa Bay & Sarasota | Brothers Remodelers"
            description="Scope, block walls, slab plumbing, wind code, flood zones and hidden damage all shape what a Florida remodel costs. Here's what drives the price and how to compare bids."
            url={GUIDE_URL}
            siteName={company.name}
        />

        <PageHero title="What Affects Remodeling Costs in Tampa Bay and Sarasota" crumbs={[{ label: 'Guides' }, { label: 'Remodeling Costs' }]} />

        <article className="px-4 py-14 md:py-20">
            <div className="mx-auto max-w-[44rem]">
                <p className="text-lg leading-relaxed text-neutral-700">{intro}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-neutral-500">Last reviewed October 2026</p>

                <nav className="mt-10 border border-neutral-200 bg-neutral-50 p-6" aria-label="Table of contents">
                    <p className="font-display text-sm font-bold uppercase tracking-widest text-[hsl(var(--ink))]">On this page</p>
                    <ol className="mt-3 space-y-2">
                        {toc.map((item, i) => (
                            <li key={item.id} className="flex gap-3 text-sm">
                                <span className="font-semibold text-[hsl(var(--brand))]">{String(i + 1).padStart(2, '0')}</span>
                                <a href={`#${item.id}`} className="text-neutral-700 underline decoration-neutral-300 underline-offset-2 hover:text-[hsl(var(--brand))] hover:decoration-[hsl(var(--brand))]">
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ol>
                </nav>

                <section id="the-biggest-cost-drivers" className="mt-12 scroll-mt-28">
                    <h2 className="font-display text-2xl font-bold text-[hsl(var(--ink))] md:text-3xl">The biggest cost drivers</h2>

                    <h3 className="font-display mt-8 text-xl font-bold text-[hsl(var(--ink))]">Scope of work</h3>
                    <p className="mt-4 leading-relaxed text-neutral-600">A cosmetic refresh, a full gut renovation and an addition are very different projects. The more rooms, trades and square footage involved, the higher the cost.</p>

                    <h3 className="font-display mt-8 text-xl font-bold text-[hsl(var(--ink))]">Structural changes in block homes</h3>
                    <p className="mt-4 leading-relaxed text-neutral-600">
                        Most Florida homes have concrete block walls on a concrete slab.{' '}
                        <Link to="/services/general-contracting/" className="font-semibold text-[hsl(var(--ink))] underline decoration-[hsl(var(--brand))] underline-offset-4 hover:text-[hsl(var(--brand))]">Opening or removing a block wall</Link>
                        {' '}usually needs an engineered beam or lintel, which adds engineering, materials and labor.
                    </p>

                    <h3 className="font-display mt-8 text-xl font-bold text-[hsl(var(--ink))]">Plumbing through the slab</h3>
                    <p className="mt-4 leading-relaxed text-neutral-600">
                        <Link to="/services/kitchen-remodeling/" className="font-semibold text-[hsl(var(--ink))] underline decoration-[hsl(var(--brand))] underline-offset-4 hover:text-[hsl(var(--brand))]">Moving a kitchen sink</Link>
                        , a toilet or a shower usually means cutting and trenching the slab to reroute pipes, then patching it. Keeping fixtures where they are is one of the biggest ways to control cost.
                    </p>

                    <h3 className="font-display mt-8 text-xl font-bold text-[hsl(var(--ink))]">Wind code and storm protection</h3>
                    <p className="mt-4 leading-relaxed text-neutral-600">Permitted work must meet the Florida Building Code&apos;s wind requirements. New windows and exterior doors in wind-borne debris regions need impact-rated products or approved storm protection, and additions need proper anchoring and roof tie-ins.</p>

                    <h3 className="font-display mt-8 text-xl font-bold text-[hsl(var(--ink))]">Flood zones</h3>
                    <p className="mt-4 leading-relaxed text-neutral-600">
                        If your home is in a FEMA flood zone, a large remodel can trigger the{' '}
                        <Link to="/guides/fema-50-percent-rule/" className="font-semibold text-[hsl(var(--ink))] underline decoration-[hsl(var(--brand))] underline-offset-4 hover:text-[hsl(var(--brand))]">50% rule</Link>
                        , which may require elevating the whole house. Check your flood zone before you set a budget.
                    </p>

                    <h3 className="font-display mt-8 text-xl font-bold text-[hsl(var(--ink))]">Permits, engineering and inspections</h3>
                    <p className="mt-4 leading-relaxed text-neutral-600">
                        Drawings, engineering,{' '}
                        <Link to="/guides/remodeling-permits-tampa-bay-sarasota/" className="font-semibold text-[hsl(var(--ink))] underline decoration-[hsl(var(--brand))] underline-offset-4 hover:text-[hsl(var(--brand))]">permit fees</Link>
                        {' '}and inspections are part of a properly permitted job. They vary with the scope and with the building department.
                    </p>

                    <h3 className="font-display mt-8 text-xl font-bold text-[hsl(var(--ink))]">Finishes and allowances</h3>
                    <p className="mt-4 leading-relaxed text-neutral-600">Cabinets, countertops, tile, fixtures and flooring range widely in price. Many proposals use allowances, a set amount for items you&apos;ll choose later. Your final cost depends on what you select.</p>

                    <h3 className="font-display mt-8 text-xl font-bold text-[hsl(var(--ink))]">Hidden damage</h3>
                    <p className="mt-4 leading-relaxed text-neutral-600">
                        Rot, mold, termite damage and outdated wiring are often found only once walls are opened, especially{' '}
                        <Link to="/services/bathroom-remodeling/" className="font-semibold text-[hsl(var(--ink))] underline decoration-[hsl(var(--brand))] underline-offset-4 hover:text-[hsl(var(--brand))]">behind older showers</Link>
                        . A good contractor checks at demolition and prices any repair before work continues.
                    </p>

                    <h3 className="font-display mt-8 text-xl font-bold text-[hsl(var(--ink))]">Lead times, access and approvals</h3>
                    <p className="mt-4 leading-relaxed text-neutral-600">Long-lead items such as windows and custom cabinetry affect the schedule. Condo and HOA rules, access to the site, and whether you live in the home during the work all affect cost too.</p>
                </section>

                <section id="how-to-read-a-remodeling-proposal" className="mt-12 scroll-mt-28">
                    <h2 className="font-display text-2xl font-bold text-[hsl(var(--ink))] md:text-3xl">How to read a remodeling proposal</h2>
                    <ul className="mt-4 space-y-3">
                        {proposalItems.map(([term, def]) => (
                            <Bullet key={term}>
                                <strong className="font-semibold text-[hsl(var(--ink))]">{term}:</strong> {def}
                            </Bullet>
                        ))}
                    </ul>
                </section>

                <section id="how-to-compare-bids-fairly" className="mt-12 scroll-mt-28">
                    <h2 className="font-display text-2xl font-bold text-[hsl(var(--ink))] md:text-3xl">How to compare bids fairly</h2>
                    <Numbered items={compareSteps} />
                </section>

                <section id="how-brothers-remodelers-prices-a-project" className="mt-12 scroll-mt-28">
                    <h2 className="font-display text-2xl font-bold text-[hsl(var(--ink))] md:text-3xl">How Brothers Remodelers prices a project</h2>
                    <p className="mt-4 leading-relaxed text-neutral-600">
                        We visit your home, measure, and review the scope with you. Then we send a{' '}
                        <Link to="/quote/" className="font-semibold text-[hsl(var(--ink))] underline decoration-[hsl(var(--brand))] underline-offset-4 hover:text-[hsl(var(--brand))]">line-item proposal</Link>
                        {' '}with allowances stated in plain language, so you can compare bids on equal terms. Change orders are priced in writing before the work happens.{' '}
                        <Link to="/financing/" className="font-semibold text-[hsl(var(--ink))] underline decoration-[hsl(var(--brand))] underline-offset-4 hover:text-[hsl(var(--brand))]">Financing</Link>
                        {' '}is available for qualifying homeowners through Service Finance Company, LLC and Sunlight Financial.
                    </p>
                </section>

                <section id="faq" className="mt-12 scroll-mt-28">
                    <h2 className="font-display text-2xl font-bold text-[hsl(var(--ink))] md:text-3xl">FAQ</h2>
                    <div className="mt-4 divide-y divide-neutral-200 border-y border-neutral-200">
                        {faqs.map((f) => (
                            <div key={f.q} className="py-5">
                                <h3 className="font-display text-lg font-bold text-[hsl(var(--ink))]">{f.q}</h3>
                                <p className="mt-2 leading-relaxed text-neutral-600">{f.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="mt-14 bg-[hsl(var(--brand))] p-8 md:p-10">
                    <h2 className="font-display text-2xl font-bold uppercase text-[hsl(var(--brand-foreground))] md:text-3xl">Get a price for your project</h2>
                    <p className="mt-3 max-w-xl leading-relaxed text-[hsl(var(--brand-foreground))]/85">Tell us what you&apos;re planning. We&apos;ll visit, measure, and send a line-item proposal so you can see exactly where the money goes.</p>
                    <Link to="/quote/" className="mt-6 inline-flex min-h-[44px] items-center bg-[hsl(var(--ink))] px-6 text-sm font-bold uppercase tracking-wide text-white transition-transform hover:-translate-y-px active:translate-y-0">
                        Request a Free Quote
                    </Link>
                </div>
            </div>
        </article>
    </SiteLayout>
);

export default RemodelingCostGuidePage;
