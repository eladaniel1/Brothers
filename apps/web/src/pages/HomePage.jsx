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
    { n: '01', title: 'Kitchen Remodeling', text: 'New layouts, cabinets, counters, plumbing and electrical, managed start to finish.', href: '/services/kitchen-remodeling', image: '/images/project-kitchen-island.jpg', alt: 'Remodeled kitchen with island' },
    { n: '02', title: 'Bathroom Remodeling', text: 'Showers, tubs, tile and vanities, built on a waterproofed base.', href: '/services/bathroom-remodeling', image: '/images/project-bath.jpg', alt: 'Remodeled bathroom' },
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
    ['Are you a licensed contractor?', 'Yes. Republic Renovations Inc d/b/a Brothers Remodelers is a Florida Certified General Contractor, license CGC1542451. You can verify it on the Florida DBPR license search at myfloridalicense.com.'],
    ['Which areas do you serve?', 'Hillsborough, Pinellas, Pasco, Manatee and Sarasota counties. Our office is at 13542 N Florida Ave, Tampa, FL 33613.'],
    ['Do you pull the permits?', 'Yes. We prepare and file the permit applications with your city or county and schedule the inspections the job needs.'],
    ['Will I get a written contract?', 'Yes. Every job has a written contract with the scope of work, the price and the payment schedule. If something changes, it goes on a signed change order before the work is done.'],
    ['Can I finance my project?', 'Yes, through Upgrade and Ygrene. Plans include 10 years at 6.99%, 20 years at 8.99%, and 12 months with no payments. Subject to credit approval. Terms, rates and eligibility are set by the lender.'],
    ['How do I get an estimate?', 'Call (855) 445-2551 or send the estimate form. We set up a visit to see the space, then send you a written proposal.'],
];

const HomePage = () => (
    <SiteLayout>
        <Helmet>
            <title>Brothers Home Remodeling | Licensed Remodeling Contractor, Tampa Bay & Sarasota</title>
            <meta name="description" content="Kitchen, bathroom, additions and whole-home remodeling in Hillsborough, Pinellas, Pasco, Manatee and Sarasota counties. FL CGC1542451." />
            <link rel="canonical" href="https://brothersremodelers.com/" />
            <script type="application/ld+json">{JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'HomeAndConstructionBusiness',
                name: 'Brothers Remodelers',
                legalName: 'Republic Renovations Inc',
                url: 'https://brothersremodelers.com/',
                telephone: company.telephone,
                email: company.email,
                image: 'https://brothersremodelers.com/images/hero-great-room.jpg',
                address: {
                    '@type': 'PostalAddress',
                    streetAddress: company.streetAddress,
                    addressLocality: company.addressLocality,
                    addressRegion: company.addressRegion,
                    postalCode: company.postalCode,
                    addressCountry: 'US',
                },
                identifier: 'Florida Certified General Contractor License #CGC1542451',
            })}</script>
        </Helmet>

        <section className="hero">
            <img className="hero-img" src="/images/hero-great-room.jpg" alt="Bright double-height great room with a white kitchen behind" />
            <div className="wrap">
                <div className="hero-body">
                    <Eyebrow>Luxury remodeling · Tampa Bay &amp; Sarasota</Eyebrow>
                    <h1 className="hero-h1">Where<br className="br-m" /> <span className="accent">elegance</span><br className="br-d" /> and<br className="br-m" /> precision meet.</h1>
                    <p className="lead">Custom kitchens, baths and additions across Tampa Bay and Sarasota, by one licensed contractor.</p>
                    <div className="btns">
                        <Link className="btn btn-primary" to="/contact">Get a Free Estimate</Link>
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
                        <Link className="btn btn-ghost" to="/areas-we-serve">All Service Areas</Link>
                    </div>
                </div>
            </div>
        </div></section>

        <section className="sec"><div className="wrap fin">
            <div className="fin-copy">
                <Eyebrow>Pay over time</Eyebrow>
                <h2>Start now.<br />Pay monthly.</h2>
                <p className="lead" style={{ marginTop: 22 }}>Financing is available through our lending partners Upgrade and Ygrene. Ask about it at your estimate and we will walk you through the options.</p>
                <div className="btns"><Link className="btn btn-primary" to="/financing">See Financing Options</Link></div>
            </div>
            <div>
                <div className="rates">
                    <div className="rate"><div className="big">6.99<sup>%</sup></div><div className="term">10-year term</div><p>Fixed monthly payments spread over ten years.</p></div>
                    <div className="rate"><div className="big">8.99<sup>%</sup></div><div className="term">20-year term</div><p>Lower monthly payments over a longer term.</p></div>
                    <div className="rate"><div className="big">12<sup>mo</sup></div><div className="term">No payments</div><p>No payments for the first 12 months.</p></div>
                </div>
                <div className="lenders"><span>Through</span><b>Upgrade</b><b>Ygrene</b><span className="fine">Subject to credit approval. Terms, rates and eligibility are set by the lender.</span></div>
            </div>
        </div></section>

        <section className="sec bg-paper"><div className="wrap why">
            <div className="why-img"><img src="/images/about-plans.jpg" alt="Contractor reviewing plans" /></div>
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

        <section className="sec"><div className="wrap">
            <div className="shead">
                <div><Eyebrow>Project gallery</Eyebrow><h2>Kitchens, baths and full remodels.</h2></div>
                <p className="lead">Photos from finished Brothers jobs will go here, sorted by project type.</p>
            </div>
            <div className="gal">
                <figure className="g1"><img src="/images/kitchen.jpg" alt="" /><figcaption>Kitchen</figcaption></figure>
                <figure className="g2"><img src="/images/bathroom.jpg" alt="" /><figcaption>Bathroom</figcaption></figure>
                <figure className="g3"><img src="/images/project-kitchen-sink.jpg" alt="" /><figcaption>Kitchen</figcaption></figure>
                <figure className="g4"><img src="/images/whole-home.jpg" alt="" /><figcaption>Whole home</figcaption></figure>
                <figure className="g5"><img src="/images/service-bathroom.jpg" alt="" /><figcaption>Bathroom</figcaption></figure>
                <figure className="g6"><img src="/images/service-additions.jpg" alt="" /><figcaption>Addition</figcaption></figure>
            </div>
            <div className="note"><b>Placeholder</b><span>These are licensed stock photos. Real Brothers project photos will replace them. They are not photos of our work.</span></div>
            <div className="rev" style={{ marginTop: 48 }}>
                <div><Eyebrow>Customer reviews</Eyebrow><h2>Reviews coming soon.</h2></div>
                <p>Verified Google reviews will be shown here once they are connected. We do not post reviews we cannot link to a source.</p>
            </div>
        </div></section>

        <section className="sec bg-paper"><div className="wrap faq">
            <div className="faq-aside">
                <Eyebrow>FAQ</Eyebrow>
                <h2>Straight answers</h2>
                <p className="lead">The questions people ask us most before they sign.</p>
                <div className="btns">
                    <Link className="btn btn-primary" to="/contact">Get a Free Estimate</Link>
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
