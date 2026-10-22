import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import SiteLayout, { PageHero } from '@/components/SiteLayout';
import Seo from '@/components/Seo';
import { company } from '@/data/site';

const today = new Date().toISOString().slice(0, 10);

const ORG_URL = 'https://brothersremodelers.com/';
const GUIDE_URL = 'https://brothersremodelers.com/guides/remodeling-permits-tampa-bay-sarasota/';

const toc = [
    { id: 'which-remodels-need-a-permit', label: 'Which remodels need a permit' },
    { id: 'how-to-tell-if-your-home-is-inside-city-limits', label: 'How to tell if your home is inside city limits' },
    { id: 'city-or-county-by-area', label: 'City or county, by area' },
    { id: 'the-notice-of-commencement', label: 'The Notice of Commencement' },
    { id: 'what-affects-how-long-a-permit-takes', label: 'What affects how long a permit takes' },
    { id: 'hoa-and-condo-approvals-are-separate', label: 'HOA and condo approvals are separate' },
    { id: 'how-brothers-remodelers-handles-permits', label: 'How Brothers Remodelers handles permits' },
    { id: 'faq', label: 'FAQ' },
];

const intro = "If your home is inside city limits, your remodeling permit comes from that city's building department. If it's in an unincorporated area, the county issues it. Your mailing address won't tell you which: many homes with a Tampa, Sarasota or Bradenton mailing address are actually in unincorporated county. Your county property appraiser's record is the surest check.";

const needPermit = [
    'Structural changes, such as removing or opening a wall, or adding a beam',
    'Electrical work, such as new circuits or a panel change',
    'Plumbing work, such as moving a sink, toilet or shower',
    'HVAC or other mechanical work',
    'Windows, exterior doors and roofing',
    'Additions and any new square footage',
];

const tellCity = [
    "Go to your county property appraiser's website and search for your address.",
    'Open the parcel record and look for the jurisdiction, municipality or taxing district.',
    "If it names a city, that city issues your permit. If it says unincorporated, the county does.",
    "If you're still not sure, call the city's building department with your address.",
];

const countyRows = [
    ['Hillsborough', 'Tampa, Temple Terrace, Plant City', 'Brandon, Riverview, Lutz, Odessa, Westchase, Carrollwood, Town \'n\' Country, Citrus Park, Seffner, Valrico, FishHawk, Apollo Beach, Ruskin, Sun City Center, Gibsonton, Wimauma'],
    ['Pinellas', 'St. Petersburg, Clearwater, Largo, Pinellas Park, Dunedin, Tarpon Springs, Safety Harbor, Seminole, Oldsmar, Gulfport and the beach cities', 'Palm Harbor, East Lake, Tierra Verde, Lealman'],
    ['Pasco', 'New Port Richey, Port Richey, Zephyrhills, Dade City', 'Wesley Chapel, Land O\' Lakes, Trinity, Holiday, Hudson'],
    ['Sarasota', 'Sarasota, Venice, North Port, Longboat Key', 'Siesta Key, Osprey, Nokomis, Fruitville, Bee Ridge, Laurel, the Sarasota County part of Englewood'],
    ['Manatee', 'Bradenton, Palmetto, Holmes Beach, Anna Maria, Bradenton Beach', 'Lakewood Ranch, Parrish, Ellenton, Myakka City, Cortez'],
];

const affectsTime = [
    'How complex the plans are, and whether engineering is needed',
    'Flood zone review, if your home is in a Special Flood Hazard Area',
    "Product approvals for windows and exterior doors under Florida's wind requirements",
    'How busy the building department is',
    'Corrections the reviewer asks for',
];

const faqs = [
    {
        q: 'Do I need a permit to remodel a kitchen or bathroom?',
        a: 'Usually, yes. A permit is generally required when the remodel moves plumbing, adds electrical circuits, changes walls or involves mechanical work. Replacing cabinets or countertops in place may not need one. Rules vary by city and county, so confirm with your building department.',
    },
    {
        q: 'My address says Tampa. Does the City of Tampa issue my permit?',
        a: "Not necessarily. Many homes with a Tampa mailing address are in unincorporated Hillsborough County, including much of Brandon, Riverview, Carrollwood and Town 'n' Country. Check your parcel on the Hillsborough County Property Appraiser's website to see which jurisdiction you're in.",
    },
    {
        q: 'Who pulls the permit, me or the contractor?',
        a: 'When you hire a licensed contractor, the contractor normally applies for the permit under their license and is responsible for the inspections. As the property owner, you sign documents such as the Notice of Commencement.',
    },
    {
        q: 'What happens if work is done without a permit?',
        a: 'Unpermitted work can cause problems when you sell or insure the home, and you may be required to open up finished work for inspection or remove it. Permitting at the start costs less than fixing it later.',
    },
    {
        q: 'How long does a remodeling permit take?',
        a: 'It depends on the department, the scope of work, and whether engineering or flood review is involved. Simple permits move faster than additions or structural work. Your contractor should give you an expected timeline once the plans are ready.',
    },
];

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Remodeling Permits in Tampa Bay & Sarasota: City or County?',
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
        { '@type': 'ListItem', position: 3, name: 'Remodeling Permits', item: GUIDE_URL },
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

const RemodelingPermitsGuidePage = () => (
    <SiteLayout>
        <Helmet>
            <title>Remodeling Permits in Tampa Bay & Sarasota: City or County? | Brothers Remodelers</title>
            <meta name="description" content="Who issues your remodeling permit depends on whether your home is inside city limits. How to check, county by county, across Tampa Bay and Sarasota." />
            <link rel="canonical" href={GUIDE_URL} />
            <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
            <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
            <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        </Helmet>
        <Seo
            title="Remodeling Permits in Tampa Bay & Sarasota: City or County? | Brothers Remodelers"
            description="Who issues your remodeling permit depends on whether your home is inside city limits. How to check, county by county, across Tampa Bay and Sarasota."
            url={GUIDE_URL}
            siteName={company.name}
        />

        <PageHero title="Remodeling Permits in Tampa Bay and Sarasota: City or County?" crumbs={[{ label: 'Guides' }, { label: 'Remodeling Permits' }]} />

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

                <section id="which-remodels-need-a-permit" className="mt-12 scroll-mt-28">
                    <h2 className="font-display text-2xl font-bold text-[hsl(var(--ink))] md:text-3xl">Which remodels need a permit</h2>
                    <p className="mt-4 leading-relaxed text-neutral-600">A permit is generally needed when the work involves:</p>
                    <ul className="mt-4 space-y-3">
                        {needPermit.map((item) => <Bullet key={item}>{item}</Bullet>)}
                    </ul>
                    <p className="mt-4 leading-relaxed text-neutral-600">Work that often doesn&apos;t need a permit includes painting, most flooring, and replacing cabinets or countertops without moving plumbing or electrical. Rules vary by city and county, so check before you start.</p>
                </section>

                <section id="how-to-tell-if-your-home-is-inside-city-limits" className="mt-12 scroll-mt-28">
                    <h2 className="font-display text-2xl font-bold text-[hsl(var(--ink))] md:text-3xl">How to tell if your home is inside city limits</h2>
                    <Numbered items={tellCity} />
                </section>

                <section id="city-or-county-by-area" className="mt-12 scroll-mt-28">
                    <h2 className="font-display text-2xl font-bold text-[hsl(var(--ink))] md:text-3xl">City or county, by area</h2>
                    <div className="mt-4 overflow-x-auto">
                        <table className="w-full border-collapse text-left text-sm">
                            <thead>
                                <tr className="border-b border-neutral-300 bg-neutral-50">
                                    <th scope="col" className="px-3 py-3 font-display font-bold uppercase tracking-widest text-[hsl(var(--ink))]">County</th>
                                    <th scope="col" className="px-3 py-3 font-display font-bold uppercase tracking-widest text-[hsl(var(--ink))]">Incorporated cities (start with the city)</th>
                                    <th scope="col" className="px-3 py-3 font-display font-bold uppercase tracking-widest text-[hsl(var(--ink))]">Common unincorporated communities (county permits)</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-neutral-200">
                                {countyRows.map(([county, cities, uninc]) => (
                                    <tr key={county} className="align-top">
                                        <th scope="row" className="px-3 py-3 font-semibold text-[hsl(var(--ink))]">{county}</th>
                                        <td className="px-3 py-3 leading-relaxed text-neutral-600">{cities}</td>
                                        <td className="px-3 py-3 leading-relaxed text-neutral-600">{uninc}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="mt-4 leading-relaxed text-neutral-600">Some smaller cities contract their building services to the county, so start with the city and it will point you to the right office. A few communities cross county lines: Lakewood Ranch spans Manatee and Sarasota counties, Longboat Key spans both and issues its own permits, and Englewood extends into Charlotte County.</p>
                </section>

                <section id="the-notice-of-commencement" className="mt-12 scroll-mt-28">
                    <h2 className="font-display text-2xl font-bold text-[hsl(var(--ink))] md:text-3xl">The Notice of Commencement</h2>
                    <p className="mt-4 leading-relaxed text-neutral-600">For many permitted jobs, Florida law requires a Notice of Commencement to be recorded with the county clerk and posted at the job site before work begins. It protects you by putting the job on public record. Your contractor should prepare it and tell you when to sign it, because the property owner signs it.</p>
                </section>

                <section id="what-affects-how-long-a-permit-takes" className="mt-12 scroll-mt-28">
                    <h2 className="font-display text-2xl font-bold text-[hsl(var(--ink))] md:text-3xl">What affects how long a permit takes</h2>
                    <ul className="mt-4 space-y-3">
                        {affectsTime.map((item) => <Bullet key={item}>{item}</Bullet>)}
                    </ul>
                    <p className="mt-4 leading-relaxed text-neutral-600">Every department sets its own review and inspection schedule. That affects your start date more than most homeowners expect.</p>
                </section>

                <section id="hoa-and-condo-approvals-are-separate" className="mt-12 scroll-mt-28">
                    <h2 className="font-display text-2xl font-bold text-[hsl(var(--ink))] md:text-3xl">HOA and condo approvals are separate</h2>
                    <p className="mt-4 leading-relaxed text-neutral-600">Many Tampa Bay and Sarasota neighborhoods and condo associations require their own approval before exterior work, additions or structural changes. That approval doesn&apos;t replace a building permit, and a permit doesn&apos;t replace it. Plan for both.</p>
                </section>

                <section id="how-brothers-remodelers-handles-permits" className="mt-12 scroll-mt-28">
                    <h2 className="font-display text-2xl font-bold text-[hsl(var(--ink))] md:text-3xl">How Brothers Remodelers handles permits</h2>
                    <p className="mt-4 leading-relaxed text-neutral-600">
                        We confirm which building department covers your address, prepare the{' '}
                        <Link to="/process/" className="font-semibold text-[hsl(var(--ink))] underline decoration-[hsl(var(--brand))] underline-offset-4 hover:text-[hsl(var(--brand))]">drawings and filings</Link>
                        , and handle the permit application under our Florida{' '}
                        <Link to="/services/general-contracting/" className="font-semibold text-[hsl(var(--ink))] underline decoration-[hsl(var(--brand))] underline-offset-4 hover:text-[hsl(var(--brand))]">general contractor</Link>
                        {' '}license, CGC1535875. We also schedule inspections and walk you through the Notice of Commencement. You&apos;ll know which department is involved before your estimate is final.
                    </p>
                    <p className="mt-4 leading-relaxed text-neutral-600">
                        If your home is in a flood zone, read our guide to the{' '}
                        <Link to="/guides/fema-50-percent-rule/" className="font-semibold text-[hsl(var(--ink))] underline decoration-[hsl(var(--brand))] underline-offset-4 hover:text-[hsl(var(--brand))]">FEMA 50% rule</Link>
                        .
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
                    <h2 className="font-display text-2xl font-bold uppercase text-[hsl(var(--brand-foreground))] md:text-3xl">Not sure which department covers your home?</h2>
                    <p className="mt-3 max-w-xl leading-relaxed text-[hsl(var(--brand-foreground))]/85">Send us your address and project scope. We&apos;ll confirm who issues your permit and what it will involve.</p>
                    <Link to="/quote/" className="mt-6 inline-flex min-h-[44px] items-center bg-[hsl(var(--ink))] px-6 text-sm font-bold uppercase tracking-wide text-white transition-transform hover:-translate-y-px active:translate-y-0">
                        Request a Free Quote
                    </Link>
                </div>
            </div>
        </article>
    </SiteLayout>
);

export default RemodelingPermitsGuidePage;
