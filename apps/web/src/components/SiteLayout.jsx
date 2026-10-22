import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, Phone, X, MapPin, Mail, Clock, ShieldCheck } from 'lucide-react';
import { company, logoUrl, nav, services, areas } from '@/data/site';

export const Logo = ({ dark = false, homepageImages = false }) => (
    <Link
        to="/"
        className={`flex items-center gap-2.5 group rounded-sm ${dark ? 'bg-white px-2 py-1.5' : ''}`}
        aria-label={`${company.name} home`}
    >
        <img
            src={logoUrl}
            alt={`${company.name} logo`}
            width={homepageImages ? 76 : undefined}
            height={homepageImages ? 48 : undefined}
            className="h-11 w-auto max-w-[200px] object-contain object-left transition-transform duration-200 group-hover:-translate-y-0.5 sm:h-12 sm:max-w-[240px]"
        />
    </Link>
);

const Header = ({ homepageImages = false }) => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => setOpen(false), [location.pathname]);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header className="sticky top-0 z-50">
            <div className="hidden bg-[hsl(var(--ink))] px-4 py-2 text-xs text-white/70 md:block">
                <div className="mx-auto flex max-w-[90rem] items-center justify-between">
                    <span className="flex items-center gap-2">
                        <ShieldCheck className="h-3.5 w-3.5 text-[hsl(var(--brand))]" strokeWidth={2} />
                        {company.license}
                    </span>
                    <span className="flex items-center gap-5">
                        <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" strokeWidth={2} />{company.hours}</span>
                        <a href={company.phoneHref} className="flex items-center gap-1.5 font-semibold text-white hover:text-[hsl(var(--brand))]">
                            <Phone className="h-3.5 w-3.5" strokeWidth={2} />{company.phone}
                        </a>
                    </span>
                </div>
            </div>
            <div className={`border-b bg-white transition-shadow ${scrolled ? 'shadow-[0_10px_30px_-18px_rgba(15,23,42,0.45)]' : ''}`}>
                <div className="mx-auto flex max-w-[90rem] items-center justify-between gap-6 px-4 py-3">
                    <Logo homepageImages={homepageImages} />
                    <nav className="hidden items-center gap-1 lg:flex">
                        {nav.map((item) => (
                            <div key={item.label} className="group relative">
                                <NavLink
                                    to={item.to}
                                    className={({ isActive }) =>
                                        `flex items-center gap-1 px-3 py-2 text-sm font-semibold uppercase tracking-wide transition-colors ${isActive ? 'text-[hsl(var(--ink))]' : 'text-neutral-600 hover:text-[hsl(var(--ink))]'}`
                                    }
                                >
                                    {item.label}
                                    {item.children && <ChevronDown className="h-3.5 w-3.5" strokeWidth={2.5} />}
                                </NavLink>
                                {item.children && (
                                    <div className="invisible absolute left-0 top-full w-64 translate-y-1 border border-neutral-200 bg-white py-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                                        {item.children.map((child) => (
                                            <Link
                                                key={child.to}
                                                to={child.to}
                                                className="block border-l-2 border-transparent px-4 py-2 text-sm text-neutral-600 transition-colors hover:border-[hsl(var(--brand))] hover:bg-neutral-50 hover:text-[hsl(var(--ink))]"
                                            >
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>
                    <div className="flex items-center gap-2">
                        <a
                            href={company.phoneHref}
                            className="hidden min-h-[44px] items-center gap-2 border border-neutral-300 px-4 text-sm font-semibold text-[hsl(var(--ink))] transition-colors hover:border-[hsl(var(--ink))] sm:flex"
                        >
                            <Phone className="h-4 w-4" strokeWidth={2.2} />
                            Call
                        </a>
                        <Link
                            to="/quote"
                            className="flex min-h-[44px] items-center bg-[hsl(var(--brand))] px-5 text-sm font-bold uppercase tracking-wide text-[hsl(var(--brand-foreground))] transition-transform hover:-translate-y-px active:translate-y-0"
                        >
                            Free Quote
                        </Link>
                        <button
                            type="button"
                            aria-label="Toggle menu"
                            onClick={() => setOpen((v) => !v)}
                            className="grid h-11 w-11 place-items-center border border-neutral-300 lg:hidden"
                        >
                            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>
                </div>
                {open && (
                    <div className="max-h-[70vh] overflow-y-auto border-t bg-white px-4 py-3 lg:hidden">
                        {nav.map((item) => (
                            <div key={item.label} className="border-b border-neutral-100 py-2">
                                <Link to={item.to} className="font-display block text-lg font-semibold uppercase text-[hsl(var(--ink))]">
                                    {item.label}
                                </Link>
                                {item.children && (
                                    <div className="mt-1 grid grid-cols-2 gap-1">
                                        {item.children.map((child) => (
                                            <Link key={child.to} to={child.to} className="py-1.5 text-sm text-neutral-600">
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </header>
    );
};

const Footer = ({ homepageImages = false }) => (
    <footer className="bg-[hsl(var(--ink))] text-white/70">
        <div className="hatch h-1.5 w-full" />
        <div className="mx-auto grid max-w-[90rem] gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4">
            <div>
                <Logo dark homepageImages={homepageImages} />
                <p className="mt-4 max-w-xs text-sm leading-relaxed">
                    {company.tagline}. Family-run general contractors serving homeowners across the Tampa Bay and Sarasota region since {company.founded}.
                </p>
                <p className="mt-4 text-xs uppercase tracking-widest text-white/80">{company.license}</p>
            </div>
            <div>
                <p className="font-display text-sm font-bold uppercase tracking-widest text-white">Services</p>
                <ul className="mt-4 space-y-2 text-sm">
                    {services.map((s) => (
                        <li key={s.slug}>
                            <Link to={`/services/${s.slug}`} className="hover:text-[hsl(var(--brand))]">{s.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <p className="font-display text-sm font-bold uppercase tracking-widest text-white">Areas We Serve</p>
                <ul className="mt-4 space-y-2 text-sm">
                    {areas.map((a) => (
                        <li key={a.slug}>
                            <Link to={a.path ?? `/areas-we-serve/${a.slug}`} className="hover:text-[hsl(var(--brand))]">{a.city} Contractors</Link>
                        </li>
                    ))}
                </ul>
                <ul className="mt-4 space-y-2 text-sm">
                    <li><Link to="/careers" className="hover:text-[hsl(var(--brand))]">Careers</Link></li>
                    <li><Link to="/financing" className="hover:text-[hsl(var(--brand))]">Financing</Link></li>
                    <li><Link to="/safety" className="hover:text-[hsl(var(--brand))]">Safety & Insurance</Link></li>
                </ul>
            </div>
            <div>
                <p className="font-display text-sm font-bold uppercase tracking-widest text-white">Contact</p>
                <ul className="mt-4 space-y-3 text-sm">
                    <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 text-[hsl(var(--brand))]" /><a href={company.phoneHref} className="hover:text-white">{company.phone}</a></li>
                    <li className="flex gap-2"><Mail className="mt-0.5 h-4 w-4 text-[hsl(var(--brand))]" /><a href={`mailto:${company.email}`} className="hover:text-white">{company.email}</a></li>
                    <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 text-[hsl(var(--brand))]" />{company.address}</li>
                    <li className="pl-6 text-white/80">Serving Hillsborough, Pinellas, Pasco, Sarasota and Manatee counties.</li>
                    <li className="flex gap-2"><Clock className="mt-0.5 h-4 w-4 text-[hsl(var(--brand))]" />{company.hours}</li>
                </ul>
            </div>
        </div>
        <div className="border-t border-white/10 px-4 py-5 text-xs">
            <div className="mx-auto flex max-w-[90rem] flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span>
                <span className="flex gap-4">
                    <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
                    <Link to="/terms" className="hover:text-white">Terms of Service</Link>
                    <Link to="/faq" className="hover:text-white">FAQ</Link>
                    <Link to="/sitemap" className="hover:text-white">Sitemap</Link>
                </span>
            </div>
        </div>
    </footer>
);

export const Section = ({ children, className = '', width = 'standard', id }) => {
    const rail = width === 'narrow' ? 'max-w-[56rem]' : width === 'wide' ? 'max-w-[90rem]' : 'max-w-[72rem]';
    return (
        <section id={id} className={`px-4 py-16 md:py-24 ${className}`}>
            <div className={`mx-auto ${rail}`}>{children}</div>
        </section>
    );
};

export const Eyebrow = ({ children, className = '' }) => (
    <p className={`flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-neutral-500 ${className}`}>
        <span className="h-3 w-1 bg-[hsl(var(--brand))]" />
        {children}
    </p>
);

export const PageHero = ({ title, subtitle, image, crumbs = [] }) => (
    <div className="relative isolate overflow-hidden bg-[hsl(var(--ink))]">
        {image && <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />}
        <div className="relative mx-auto max-w-[72rem] px-4 py-16 md:py-24">
            <nav className="mb-5 flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-white/50">
                <Link to="/" className="hover:text-[hsl(var(--brand))]">Home</Link>
                {crumbs.map((c) => (
                    <span key={c.label} className="flex items-center gap-2">
                        <span>/</span>
                        {c.to ? <Link to={c.to} className="hover:text-[hsl(var(--brand))]">{c.label}</Link> : <span className="text-white/80">{c.label}</span>}
                    </span>
                ))}
            </nav>
            <h1 className="font-display max-w-3xl text-4xl font-bold uppercase leading-[1.05] text-white sm:text-5xl md:text-6xl">
                {title}
            </h1>
            {subtitle && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">{subtitle}</p>}
        </div>
        <div className="hatch h-1.5 w-full" />
    </div>
);

export const CtaBand = ({ heading = 'Ready to price your project?', text = 'Send us your scope and we will come out, measure, and return a line-item proposal within five business days.' }) => (
    <section className="bg-[hsl(var(--brand))] px-4 py-14">
        <div className="mx-auto flex max-w-[72rem] flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
                <h2 className="font-display text-3xl font-bold uppercase text-[hsl(var(--brand-foreground))] md:text-4xl">{heading}</h2>
                <p className="mt-2 max-w-xl text-[hsl(var(--brand-foreground))]/80">{text}</p>
            </div>
            <div className="flex flex-wrap gap-3">
                <Link to="/quote" className="flex min-h-[44px] items-center bg-[hsl(var(--ink))] px-6 text-sm font-bold uppercase tracking-wide text-white transition-transform hover:-translate-y-px">
                    Request a Free Quote
                </Link>
                <a href={company.phoneHref} className="flex min-h-[44px] items-center border-2 border-[hsl(var(--brand-foreground))] px-6 text-sm font-bold uppercase tracking-wide text-[hsl(var(--brand-foreground))]">
                    {company.phone}
                </a>
            </div>
        </div>
    </section>
);

const SiteLayout = ({ children, homepageImages = false }) => (
    <div className="flex min-h-screen flex-col bg-white text-[hsl(var(--ink))]">
        <Header homepageImages={homepageImages} />
        <main className="flex-1">{children}</main>
        <Footer homepageImages={homepageImages} />
    </div>
);

export default SiteLayout;
