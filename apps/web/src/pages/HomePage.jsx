import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import SiteLayout, { CtaBand, Eyebrow } from '@/components/SiteLayout';
import GulfCoastMap from '@/components/maps/GulfCoastMap';
import { company, services } from '@/data/site';

const PhoneIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square" aria-hidden="true">
        <path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z" />
    </svg>
);

const featured = [
    { n: '01', title: 'Kitchen Remodeling', text: 'New layouts, cabinets, counters, plumbing and electrical, managed start to finish.', href: '/services/kitchen-remodeling', image: '/images/project-kitchen-island.webp', alt: 'Remodeled kitchen with island' },
    { n: '02', title: 'Bathroom Remodeling', text: 'Showers, tubs, tile and vanities, built on a waterproofed base.', href: '/services/bathroom-remodeling', image: '/images/project-bath.webp', alt: 'Remodeled bathroom' },
];

const rows = [
    { n: '03', title: 'Home Additions', text: 'Room additions and extensions, framed to engineered drawings and Florida wind code.', href: '/services/home-additions' },
    { n: '04', title: 'Whole-Home Remodeling', text: 'Several rooms or the whole house, planned and sequenced as one project.', href: '/services/general-contracting' },
    { n: '05', title: 'Concrete', text: 'Slabs, driveways, walkways, patios and pool decks.', href: '/services/concrete-foundations' },
    { n: '06', title: 'General Contracting', text: 'Permits, trades and scheduling run by a licensed general contractor.', href: '/services/general-contracting' },
];

const counties = [
    ['Hillsborough', 'Tampa, Brandon, Riverview, Westchase, Lutz, Temple Terrace, Plant City, Apollo Beach'],
    ['Pinellas', 'St. Petersburg, Clearwater, Largo, Palm Harbor, Dunedin, Tarpon Springs, Seminole'],
    ['Pasco', "Wesley Chapel, Land O' Lakes, Trinity, New Port Richey, Zephyrhills"],
    ['Manatee', 'Bradenton, Lakewood Ranch, Palmetto, Parrish, Ellenton, Anna Maria'],
    ['Sarasota', 'Sarasota, Venice, North Port, Osprey, Nokomis, Englewood, Siesta Key'],
];

const steps = [
    ['Site visit', 'We see the space, take measurements and go over what you want done.'],
    ['Written proposal', 'A line-item scope and price you can read and compare.'],
    ['Permits & ordering', 'We file the permits and order materials before work starts.'],
    ['Build', 'Licensed trades do the work. Inspections are booked as each stage is ready.'],
    ['Final walkthrough', 'Final inspection, punch list and a walkthrough with you.'],
];

const faqs = [
    ['Are you a licensed contractor?', 'Yes. Florida Certified General Contractor license CGC1542451 is held by Daniel Alejandro Cardenas Romero d/b/a Brothers Remodelers, the qualifier for Republic Renovations Inc d/b/a Brothers Remodelers. Verify it on the Florida DBPR license search at myfloridalicense.com.'],
    ['Which areas do you serve?', 'Hillsborough, Pinellas, Pasco, Manatee and Sarasota counties. Our office is at 13542 N Florida Ave, Tampa, FL 33613.'],
    ['Do you pull the permits?', 'Yes. We prepare and file the permit applications with your city or county and schedule the inspections the job needs.'],
    ['Will I get a written contract?', 'Yes. Every job has a written contract with the scope of work, the price and the payment schedule. If something changes, it goes on a signed change order before the work is done.'],
    ['Can I finance my project?', 'Financing is available through Upgrade and Ygrene, subject to credit approval. Terms vary.'],
    ['How do I get an estimate?', 'Call (855) 445-2551 or send the estimate form. We set up a visit to see the space, then send you a written proposal.'],
];

const HomePage = () => (
    <SiteLayout>
        <Helmet>
            <title>Tampa Bay Remodeling | Brothers Remodelers</title>
            <meta name="description" content="Remodeling in Tampa Bay and Sarasota by Brothers Remodelers. License CGC1542451. Kitchens, baths, and additions. Two-year workmanship warranty." />
            <link rel="canonical" href="https://brothersremodelers.com/" />
            <link rel="preload" as="image" href="/images/hero-great-room.webp" fetchpriority="high" />
            <meta property="og:title" content="Tampa Bay Remodeling | Brothers Remodelers" />
            <meta property="og:description" content="Remodeling in Tampa Bay and Sarasota by Brothers Remodelers. License CGC1542451. Kitchens, baths, and additions. Two-year workmanship warranty." />
            <meta property="og:url" content="https://brothersremodelers.com/" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Brothers Remodelers" />
            <meta property="og:image" content="https://brothersremodelers.com/images/hero-great-room.webp" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Tampa Bay Remodeling | Brothers Remodelers" />
            <meta name="twitter:description" content="Remodeling in Tampa Bay and Sarasota by Brothers Remodelers. License CGC1542451. Kitchens, baths, and additions. Two-year workmanship warranty." />
            <meta name="twitter:image" content="https://brothersremodelers.com/images/hero-great-room.webp" />
            <script type="application/ld+json">{JSON.stringify({
                '@context': 'https://schema.org',
                '@type': ['GeneralContractor', 'LocalBusiness'],
                '@id': 'https://brothersremodelers.com/#contractor',
                name: 'Brothers Remodelers',
                legalName: 'Republic Renovations Inc',
                url: 'https://brothersremodelers.com/',
                telephone: company.telephone,
                email: company.email,
                image: 'https://brothersremodelers.com/images/hero-great-room.webp',
                address: {
                    '@type': 'PostalAddress',
                    streetAddress: company.streetAddress,
                    addressLocality: company.addressLocality,
                    addressRegion: company.addressRegion,
                    postalCode: company.postalCode,
                    addressCountry: 'US',
                },
                identifier: {
                    '@type': 'PropertyValue',
                    propertyID: 'Florida DBPR CGC',
                    value: 'CGC1542451',
                    description: 'Held by Daniel Alejandro Cardenas Romero d/b/a Brothers Remodelers, qualifier for Republic Renovations Inc d/b/a Brothers Remodelers. The Tampa street address is the business office, not the license address.',
                },
                areaServed: ['Hillsborough County', 'Pinellas County', 'Pasco County', 'Sarasota County', 'Manatee County'].map((name) => ({ '@type': 'AdministrativeArea', name })),
            })}</script>
        </Helmet>

        <section className="hero">
            <img className="hero-img" src="/images/hero-great-room.webp" alt="Bright double-height great room with a white kitchen behind" fetchPriority="high" width="1440" height="810" />
            <div className="wrap">
                <div className="hero-body">
                    <Eyebrow>Luxury remodeling · Tampa Bay &amp; Sarasota</Eyebrow>
                    <h1 className="hero-h1">Where<br className="br-m" /> <span className="accent">elegance</span><br className="br-d" /> and<br className="br-m" /> precision meet.</h1>
                    <p className="lead">Custom kitchens, baths and additions across Tampa Bay and Sarasota, by one licensed contractor.</p>
                    <div className="btns">
                        <Link className="btn btn-primary" to="/contact/">Get a Free Estimate</Link>
                        <a className="btn btn-ghost hero-call" href={company.phoneHref}><PhoneIcon /> {company.phone}</a>
                    </div>
                </div>
            </div>
            <div className="hero-band">
                <div className="wrap">
                    <dl className="trust">
                        <div><dt>FL Lic. {company.licenseNumber}</dt><dd>Certified General Contractor, verifiable on DBPR</dd></div>
                        <div><dt>Permits handled</dt><dd>We file with your city or county and book inspections</dd></div>
                        <div><dt>Written contracts</dt><dd>Scope, price and payment schedule on paper</dd></div>
                        <div><dt>Financing</dt><dd>Through Upgrade and Ygrene, subject to approval</dd></div>
                    </dl>
                </div>
            </div>
        </section>

        <section className="sec"><div className="wrap">
            <div className="shead">
                <div><Eyebrow>What we build</Eyebrow><h2>Remodeling and general contracting under one license.</h2></div>
                <p className="lead">One contractor for the whole job: layout, permits, the trades and the finish work.</p>
            </div>
            <div className="svc-feature">
                {featured.map((item) => (
                    <Link className="tile" key={item.href + item.n} to={item.href}>
                        <img src={item.image} alt={item.alt} />
                        <div className="tile-body"><div className="tile-num">{item.n}</div><h3>{item.title}</h3><p>{item.text}</p></div>
                    </Link>
                ))}
            </div>
            <div className="svc-list">
                {rows.map((item) => (
                    <Link className="svc-row" key={item.n} to={item.href}>
                        <span className="n">{item.n}</span>
                        <div><h3>{item.title}</h3><p>{item.text}</p></div>
                        <span className="go">→</span>
                    </Link>
                ))}
            </div>
            <div className="also">
                <b>Also</b>
                {services.filter((service) => !['kitchen-remodeling', 'bathroom-remodeling', 'home-additions', 'general-contracting', 'concrete-foundations'].includes(service.slug)).slice(0, 12).map((service) => (
                    <Link key={service.slug} to={`/services/${service.slug}`}>{service.title}</Link>
                ))}
            </div>
        </div></section>

        <section className="sec bg-navy sec-join"><div className="wrap">
            <div className="shead">
                <div><Eyebrow>How it works</Eyebrow><h2>Five steps. No surprises.</h2></div>
                <p className="lead">You know what is being built, what it costs and what happens next before any demolition starts.</p>
            </div>
            <div className="steps">
                {steps.map(([title, text], index) => (
                    <div className="step" key={title}><div className="k">0{index + 1}</div><h3>{title}</h3><p>{text}</p></div>
                ))}
            </div>
        </div></section>

        <section className="sec bg-navy" style={{ paddingTop: 0 }}><div className="wrap">
            <div className="shead ruled">
                <div><Eyebrow>Service area</Eyebrow><h2>Five counties on the Gulf Coast.</h2></div>
                <p className="lead">From Wesley Chapel down to Venice, run out of our office in north Tampa.</p>
            </div>
            <div className="areas">
                <GulfCoastMap />
                <div>
                    <div className="county-list">
                        {counties.map(([name, cities]) => (
                            <div className="county" key={name}><h3>{name}<span>County</span></h3><p>{cities}</p></div>
                        ))}
                    </div>
                    <div className="areas-foot">
                        <span className="small">Not sure if you are in range? Call and ask.</span>
                        <Link className="btn btn-ghost" to="/areas-we-serve/">All Service Areas</Link>
                    </div>
                </div>
            </div>
        </div></section>

        <section className="sec"><div className="wrap fin">
            <div className="fin-copy">
                <Eyebrow>Pay over time</Eyebrow>
                <h2>Start now.<br />Pay monthly.</h2>
                <p className="lead" style={{ marginTop: 22 }}>Financing is available through Upgrade and Ygrene, subject to credit approval. Terms vary.</p>
                <div className="btns"><Link className="btn btn-primary" to="/financing/">See Financing Options</Link></div>
            </div>
            <div>
                <div className="lenders"><span>Through</span><b>Upgrade</b><b>Ygrene</b><span className="fine">Subject to credit approval. Terms vary.</span></div>
            </div>
        </div></section>

        <section className="sec bg-paper"><div className="wrap why">
            <div className="why-img"><img src="/images/about-plans.webp" alt="Contractor reviewing plans" /></div>
            <div>
                <Eyebrow>Why Brothers</Eyebrow>
                <h2 style={{ marginBottom: 48 }}>What you can check before you hire us.</h2>
                <div className="why-grid">
                    <div className="why-item"><h3>State-certified GC</h3><p>Florida Certified General Contractor {company.licenseNumber}. Look it up yourself on the <a href="https://www.myfloridalicense.com/portalsearches/VerifyLicensee/LicenseDetail?ID=1C3E502F9E8BF71B16D232BF63A31C8C">DBPR license search</a>.</p></div>
                    <div className="why-item"><h3>Permits handled</h3><p>We file the permits with your building department and schedule every inspection.</p></div>
                    <div className="why-item"><h3>Clear written contracts</h3><p>Scope, price and payment schedule in writing. Changes go on a signed change order first.</p></div>
                    <div className="why-item"><h3>Financing available</h3><p>Monthly payment options through Upgrade and Ygrene, subject to credit approval.</p></div>
                </div>
            </div>
        </div></section>

        <section className="sec bg-paper"><div className="wrap faq">
            <div className="faq-aside">
                <Eyebrow>FAQ</Eyebrow>
                <h2>Straight answers</h2>
                <p className="lead">The questions people ask us most before they sign.</p>
                <div className="btns">
                    <Link className="btn btn-primary" to="/contact/">Get a Free Estimate</Link>
                    <a className="btn btn-line" href={company.phoneHref}>Call {company.phone}</a>
                </div>
            </div>
            <div className="qa">
                {faqs.map(([question, answer], index) => (
                    <details key={question} open={index === 0}>
                        <summary>{question}</summary>
                        <p>{answer}</p>
                    </details>
                ))}
            </div>
        </div></section>
        <CtaBand />
    </SiteLayout>
);

export default HomePage;
