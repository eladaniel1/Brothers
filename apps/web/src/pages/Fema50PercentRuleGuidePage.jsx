import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import SiteLayout, { PageHero } from '@/components/SiteLayout';
import Seo from '@/components/Seo';
import { company } from '@/data/site';

const today = new Date().toISOString().slice(0, 10);

const ORG_URL = 'https://brothersremodelers.com/';
const GUIDE_URL = 'https://brothersremodelers.com/guides/fema-50-percent-rule/';

const toc = [
    { id: 'what-the-50-rule-is', label: 'What the 50% rule is' },
    { id: 'does-the-rule-apply-to-your-home', label: 'Does the rule apply to your home?' },
    { id: 'how-the-50-is-calculated', label: 'How the 50% is calculated' },
    { id: 'what-happens-if-your-project-is-a-substantial-improvement', label: 'What happens if your project is a substantial improvement' },
    { id: 'watch-for-cumulative-rules', label: 'Watch for cumulative rules' },
    { id: 'how-to-plan-a-remodel-around-the-rule', label: 'How to plan a remodel around the rule' },
    { id: 'how-brothers-remodelers-handles-the-50-rule', label: 'How Brothers Remodelers handles the 50% rule' },
    { id: 'faq', label: 'FAQ' },
];

const intro1 = 'If your home is in a FEMA Special Flood Hazard Area, a remodel or addition that costs 50% or more of the building\'s market value counts as a "substantial improvement." When that happens, the whole house, not just the new work, has to meet current flood requirements. That can mean elevating it. Only the structure\'s value counts, not the land.';
const intro2 = "This guide explains who the rule applies to, how the 50% is calculated, and how to plan a remodel in Hillsborough, Pinellas, Pasco, Sarasota or Manatee County so the rule doesn't surprise you halfway through a project.";

const terms = [
    ['Substantial improvement', "any remodel, addition or rehabilitation that costs 50% or more of the structure's market value before work starts."],
    ['Substantial damage', 'damage from any cause, such as a hurricane, flood or fire, where repairs would cost 50% or more of the structure\'s market value before the damage. Substantial damage repairs face the same requirements as a substantial improvement.'],
];

const checkHome = [
    'Look up your address on the FEMA Flood Map Service Center at msc.fema.gov.',
    "Check your county's or city's flood zone lookup, if it offers one.",
    'Find your Elevation Certificate if you have one. It shows how your lowest floor compares to the base flood elevation.',
];

const costCounts = [
    'Labor and materials for structural, interior and exterior work',
    'Built-in cabinets, fixtures and built-in appliances',
    'Electrical, plumbing and HVAC work',
    "The contractor's overhead and profit",
    'The market value of donated or volunteer labor and materials',
];

const costExcludes = [
    'Plans, surveys and permit fees',
    'The value of the land',
    'Work outside the building, such as driveways, fences, pools, landscaping and detached structures',
    'Freestanding appliances and furniture',
];

const substantialMeans = [
    'Raising the lowest floor to the elevation your community requires, which in Florida is above the base flood elevation',
    'Using the area below that elevation only for parking, access or storage, with flood openings in the walls',
    'Raising electrical panels, HVAC equipment and other utilities',
    'Using flood-resistant materials below the required elevation',
];

const planSteps = [
    'Check your flood zone before you set a budget.',
    "Get the structure's market value in a form your building department accepts.",
    'Ask whether your community counts improvements cumulatively.',
    'Price the full scope, then compare it with the 50% line.',
    "If you're close to the line, look at adjusting the scope. Don't split one project into several permits to stay under it. Building officials look for this, and many treat the permits as a single project.",
    "If you're over the line, price elevation or a rebuild alongside the remodel so you're comparing real options.",
];

const faqs = [
    {
        q: "Does the 50% rule apply if my home isn't in a flood zone?",
        a: 'Generally no. The rule applies to homes in a FEMA Special Flood Hazard Area, the A and V zones on the flood map. Your city or county can set stricter local rules, so confirm with your building department before you plan a large project.',
    },
    {
        q: 'Is the 50% based on what I paid for my house?',
        a: "No. It's based on the market value of the structure alone, before work starts. Land value and your purchase price don't count. Your building department decides which valuation sources it accepts, such as an appraisal or an adjusted property appraiser value.",
    },
    {
        q: 'Do permit fees and design costs count toward the 50%?',
        a: "Generally no. Plans, surveys and permit fees are usually left out. Labor, materials, built-in fixtures, and the contractor's overhead and profit count. Your building department makes the final call on which costs it includes.",
    },
    {
        q: 'What if a hurricane damaged my home?',
        a: "If repairs would cost 50% or more of the structure's market value before the damage, the home is considered substantially damaged. The same flood requirements apply as for a substantial improvement. After a major storm, building departments often run damage assessments to make this call.",
    },
    {
        q: 'Can I split my remodel into smaller permits to stay under 50%?',
        a: 'Building officials watch for this, and many treat closely timed permits as one project. Some communities also add up improvements over several years. The safer path is to plan the full scope honestly and adjust it if needed.',
    },
];

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The FEMA 50% Rule for Florida Home Remodels',
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
        { '@type': 'ListItem', position: 3, name: 'FEMA 50% Rule', item: GUIDE_URL },
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

const Fema50PercentRuleGuidePage = () => (
    <SiteLayout>
        <Helmet>
            <title>The FEMA 50% Rule for Florida Remodels | Brothers Remodelers</title>
            <meta name="description" content="If your home is in a Florida flood zone, a remodel costing 50% or more of its market value can require elevating the whole house. Here's how the rule works." />
            <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
            <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
            <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        </Helmet>
        <Seo
            title="The FEMA 50% Rule for Florida Remodels | Brothers Remodelers"
            description="If your home is in a Florida flood zone, a remodel costing 50% or more of its market value can require elevating the whole house. Here's how the rule works."
            url={GUIDE_URL}
            siteName={company.name}
        />

        <PageHero title="The FEMA 50% Rule for Florida Home Remodels" crumbs={[{ label: 'Guides' }, { label: 'FEMA 50% Rule' }]} />

        <article className="px-4 py-14 md:py-20">
            <div className="mx-auto max-w-[44rem]">
                <p className="text-lg leading-relaxed text-neutral-700">{intro1}</p>
                <p className="mt-5 text-lg leading-relaxed text-neutral-700">{intro2}</p>
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

                <section id="what-the-50-rule-is" className="mt-12 scroll-mt-28">
                    <h2 className="font-display text-2xl font-bold text-[hsl(var(--ink))] md:text-3xl">What the 50% rule is</h2>
                    <p className="mt-4 leading-relaxed text-neutral-600">The rule comes from the National Flood Insurance Program (NFIP). Florida cities and counties that take part in the NFIP enforce it through their floodplain ordinances and the Florida Building Code. Your local building department, through its floodplain administrator, decides whether your project is a substantial improvement.</p>
                    <p className="mt-4 leading-relaxed text-neutral-600">Two terms come up again and again:</p>
                    <ul className="mt-4 space-y-3">
                        {terms.map(([term, def]) => (
                            <Bullet key={term}>
                                <strong className="font-semibold text-[hsl(var(--ink))]">{term}:</strong> {def}
                            </Bullet>
                        ))}
                    </ul>
                </section>

                <section id="does-the-rule-apply-to-your-home" className="mt-12 scroll-mt-28">
                    <h2 className="font-display text-2xl font-bold text-[hsl(var(--ink))] md:text-3xl">Does the rule apply to your home?</h2>
                    <p className="mt-4 leading-relaxed text-neutral-600">The rule applies to homes in a Special Flood Hazard Area. These are the zones on the FEMA flood map that begin with A or V, such as AE or VE. Homes in X zones generally aren&apos;t subject to it, but your city or county can set stricter rules, so confirm with your building department.</p>
                    <p className="mt-4 leading-relaxed text-neutral-600">To check your home:</p>
                    <Numbered items={checkHome} />
                </section>

                <section id="how-the-50-is-calculated" className="mt-12 scroll-mt-28">
                    <h2 className="font-display text-2xl font-bold text-[hsl(var(--ink))] md:text-3xl">How the 50% is calculated</h2>
                    <p className="mt-4 leading-relaxed text-neutral-600">The calculation is simple: the cost of the improvement divided by the market value of the structure before work starts. If the result is 50% or more, the project is a substantial improvement.</p>

                    <h3 className="font-display mt-8 text-xl font-bold text-[hsl(var(--ink))]">What counts toward the cost</h3>
                    <ul className="mt-4 space-y-3">
                        {costCounts.map((item) => <Bullet key={item}>{item}</Bullet>)}
                    </ul>

                    <h3 className="font-display mt-8 text-xl font-bold text-[hsl(var(--ink))]">What usually doesn&apos;t count</h3>
                    <ul className="mt-4 space-y-3">
                        {costExcludes.map((item) => <Bullet key={item}>{item}</Bullet>)}
                    </ul>

                    <h3 className="font-display mt-8 text-xl font-bold text-[hsl(var(--ink))]">How market value is set</h3>
                    <p className="mt-4 leading-relaxed text-neutral-600">Market value means the structure only, not the land and not what you paid for the house. Communities accept different sources, often an independent appraisal or an adjusted value from the county property appraiser. Ask your building department which source it accepts before you pay for an appraisal.</p>

                    <h3 className="font-display mt-8 text-xl font-bold text-[hsl(var(--ink))]">A worked example</h3>
                    <p className="mt-4 leading-relaxed text-neutral-600">Say the house, not the lot, has a market value of $320,000. Half of that is $160,000. A kitchen remodel, two bathroom remodels and a small addition priced at $175,000 comes to about 55%, so it is a substantial improvement. If the scope is reduced to $150,000, it comes to about 47% and is not. These figures show how the math works. They are not pricing.</p>
                </section>

                <section id="what-happens-if-your-project-is-a-substantial-improvement" className="mt-12 scroll-mt-28">
                    <h2 className="font-display text-2xl font-bold text-[hsl(var(--ink))] md:text-3xl">What happens if your project is a substantial improvement</h2>
                    <p className="mt-4 leading-relaxed text-neutral-600">The entire building has to be brought up to current floodplain requirements. That usually means:</p>
                    <ul className="mt-4 space-y-3">
                        {substantialMeans.map((item) => <Bullet key={item}>{item}</Bullet>)}
                    </ul>
                    <p className="mt-4 leading-relaxed text-neutral-600">For many older Florida homes built of concrete block on a slab, elevating the house costs more than the remodel itself. In practice, the decision is often about scope.</p>
                </section>

                <section id="watch-for-cumulative-rules" className="mt-12 scroll-mt-28">
                    <h2 className="font-display text-2xl font-bold text-[hsl(var(--ink))] md:text-3xl">Watch for cumulative rules</h2>
                    <p className="mt-4 leading-relaxed text-neutral-600">Some Florida communities add up improvements over a set number of years instead of looking at one permit at a time. Where that applies, a kitchen remodel finished a few years ago can count toward today&apos;s 50%. Ask your building department whether it uses a cumulative period before you set your budget.</p>
                </section>

                <section id="how-to-plan-a-remodel-around-the-rule" className="mt-12 scroll-mt-28">
                    <h2 className="font-display text-2xl font-bold text-[hsl(var(--ink))] md:text-3xl">How to plan a remodel around the rule</h2>
                    <Numbered items={planSteps} />
                </section>

                <section id="how-brothers-remodelers-handles-the-50-rule" className="mt-12 scroll-mt-28">
                    <h2 className="font-display text-2xl font-bold text-[hsl(var(--ink))] md:text-3xl">How Brothers Remodelers handles the 50% rule</h2>
                    <p className="mt-4 leading-relaxed text-neutral-600">During pre-construction we check your flood zone, ask for your Elevation Certificate if you have one, and price the work line by line. You can see where your project falls against the 50% threshold before anything is permitted. If your project is a substantial improvement, we tell you before you commit and set out your options. The rule comes up most often in coastal Pinellas, Manatee and Sarasota counties.</p>
                    <div className="mt-5 flex flex-col gap-2 text-sm">
                        <Link to="/services/home-additions" className="font-semibold text-[hsl(var(--ink))] underline decoration-[hsl(var(--brand))] underline-offset-4 hover:text-[hsl(var(--brand))]">home additions</Link>
                        <Link to="/services/general-contracting" className="font-semibold text-[hsl(var(--ink))] underline decoration-[hsl(var(--brand))] underline-offset-4 hover:text-[hsl(var(--brand))]">whole-home remodeling and general contracting</Link>
                    </div>
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
                    <h2 className="font-display text-2xl font-bold uppercase text-[hsl(var(--brand-foreground))] md:text-3xl">Find out where your project stands</h2>
                    <p className="mt-3 max-w-xl leading-relaxed text-[hsl(var(--brand-foreground))]/85">Send us your address and what you&apos;re planning. We&apos;ll check your flood zone and tell you whether the 50% rule is likely to affect your remodel.</p>
                    <Link to="/quote" className="mt-6 inline-flex min-h-[44px] items-center bg-[hsl(var(--ink))] px-6 text-sm font-bold uppercase tracking-wide text-white transition-transform hover:-translate-y-px active:translate-y-0">
                        Request a Free Quote
                    </Link>
                </div>
            </div>
        </article>
    </SiteLayout>
);

export default Fema50PercentRuleGuidePage;
