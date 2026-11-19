import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { company, logoUrl } from '@/data/site';

const PhoneIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square" aria-hidden="true">
        <path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z" />
    </svg>
);

const nav = [
    { label: 'Services', to: '/services' },
    { label: 'Service Areas', to: '/areas-we-serve' },
    { label: 'Financing', to: '/financing' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
];

export const Logo = () => (
    <Link className="logo" to="/" aria-label="Brothers Home Remodeling home">
        <img src={logoUrl} alt="Brothers Home Remodeling" />
    </Link>
);

export const Eyebrow = ({ children, className = '' }) => (
    <div className={`eyebrow ${className}`}><span>{children}</span></div>
);

export const Section = ({ children, className = '', id }) => {
    const navy = /ink|bg-\[hsl\(var\(--ink\)\)\]|bg-navy/.test(className);
    const paper = /neutral-50|bg-paper|bg-\[#f7f4ee\]/.test(className);
    return (
        <section id={id} className={`sec ${navy ? 'bg-navy' : ''} ${paper ? 'bg-paper' : ''} legacy-page`}>
            <div className="wrap">{children}</div>
        </section>
    );
};

export const PageHero = ({ title, subtitle, image, crumbs = [] }) => (
    <section className={`phero ${image ? '' : 'plain'}`}>
        {image ? <img src={image} alt="" /> : null}
        <div className="wrap">
            <div className="crumbs">
                <Link to="/">Home</Link>
                {crumbs.map((crumb) => (
                    <React.Fragment key={crumb.label}>
                        <span>/</span>
                        {crumb.to ? <Link to={crumb.to}>{crumb.label}</Link> : crumb.label}
                    </React.Fragment>
                ))}
            </div>
            <h1>{title}</h1>
            {subtitle ? <p className="lead">{subtitle}</p> : null}
        </div>
    </section>
);

export const CtaBand = ({ heading = 'Tell us what you want built.' }) => (
    <section className="cta">
        <img src="/images/construction-site.jpg" alt="" />
        <div className="wrap">
            <div>
                <Eyebrow>Free estimate</Eyebrow>
                <h2>{heading}</h2>
            </div>
            <div className="cta-side">
                <a className="ph" href={company.phoneHref}>{company.phone}</a>
                <span className="small">{company.hours} · Tampa office, {company.streetAddress}</span>
                <div className="btns" style={{ width: '100%' }}>
                    <Link className="btn btn-primary" to="/contact">Get a Free Estimate</Link>
                </div>
            </div>
        </div>
    </section>
);

const Header = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    React.useEffect(() => setOpen(false), [location.pathname]);
    return (
        <>
            <div className="util">
                <div className="wrap">
                    <div>Florida Certified General Contractor <b>{company.licenseNumber}</b><span className="sep" />Serving Hillsborough, Pinellas, Pasco, Manatee &amp; Sarasota</div>
                    <div>{company.hours}<span className="sep" /><a href={`mailto:${company.email}`}>{company.email}</a></div>
                </div>
            </div>
            <header className="hdr">
                <div className="wrap">
                    <Logo />
                    <nav className="nav">
                        {nav.map((item) => (
                            <NavLink key={item.to} to={item.to} className={({ isActive }) => (isActive ? 'on' : undefined)}>
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>
                    <div className="hdr-cta">
                        <a className="hdr-phone" href={company.phoneHref}><small>Call us</small>{company.phone}</a>
                        <Link className="btn btn-primary btn-sm" to="/contact">Get Estimate</Link>
                        <button type="button" className="icon-btn burger" aria-label="Menu" onClick={() => setOpen((value) => !value)}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
                        </button>
                    </div>
                </div>
                {open ? (
                    <nav className="wrap" style={{ display: 'grid', gap: 8, paddingBottom: 16 }}>
                        {nav.map((item) => (
                            <Link key={item.to} to={item.to} style={{ fontWeight: 600, padding: '10px 0', borderBottom: '1px solid var(--line)' }}>{item.label}</Link>
                        ))}
                    </nav>
                ) : null}
            </header>
        </>
    );
};

const Footer = () => (
    <footer className="ftr">
        <div className="wrap ftr-top">
            <div>
                <Link className="ftr-logo" to="/"><img src={logoUrl} alt="Brothers Home Remodeling" /></Link>
                <p>Republic Renovations Inc d/b/a Brothers Remodelers.<br />Florida Certified General Contractor <a href="https://www.myfloridalicense.com/portalsearches/VerifyLicensee/LicenseDetail?ID=1C3E502F9E8BF71B16D232BF63A31C8C" style={{ color: '#fff', borderBottom: '1px solid rgba(255,255,255,.35)' }}>{company.licenseNumber}</a>.</p>
            </div>
            <div>
                <h4>Services</h4>
                <ul>
                    <li><Link to="/services/kitchen-remodeling">Kitchen Remodeling</Link></li>
                    <li><Link to="/services/bathroom-remodeling">Bathroom Remodeling</Link></li>
                    <li><Link to="/services/home-additions">Home Additions</Link></li>
                    <li><Link to="/services/general-contracting">Whole-Home Remodeling</Link></li>
                    <li><Link to="/services/concrete-foundations">Concrete</Link></li>
                    <li><Link to="/services/general-contracting">General Contracting</Link></li>
                </ul>
            </div>
            <div>
                <h4>Counties</h4>
                <ul>
                    <li><Link to="/areas-we-serve/hillsborough">Hillsborough</Link></li>
                    <li><Link to="/areas-we-serve/pinellas">Pinellas</Link></li>
                    <li><Link to="/areas-we-serve/pasco">Pasco</Link></li>
                    <li><Link to="/areas-we-serve/manatee">Manatee</Link></li>
                    <li><Link to="/areas-we-serve/sarasota">Sarasota</Link></li>
                </ul>
            </div>
            <div>
                <h4>Company</h4>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/financing">Financing</Link></li>
                    <li><Link to="/contact">Get an Estimate</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div>
                <h4>Tampa Office</h4>
                <address>13542 N Florida Ave<br />Tampa, FL 33613</address>
                <a className="ph" href={company.phoneHref}>{company.phone}</a>
                <a href={`mailto:${company.email}`}>{company.email}</a><br />Mon–Sat, 7:00am–6:00pm
            </div>
        </div>
        <div className="ftr-bot">
            <div className="wrap">
                <span>© {new Date().getFullYear()} Republic Renovations Inc d/b/a Brothers Remodelers. All rights reserved.</span>
                <span>FL License {company.licenseNumber} · Financing subject to credit approval</span>
            </div>
        </div>
    </footer>
);

const MobileBar = () => (
    <div className="mbar">
        <a className="btn btn-line" href={company.phoneHref}><PhoneIcon /> Call</a>
        <Link className="btn btn-primary" to="/contact">Get a Quote</Link>
    </div>
);

const SiteLayout = ({ children }) => (
    <>
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileBar />
    </>
);

export default SiteLayout;
