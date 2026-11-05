import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, Phone, X, MapPin, Mail, Clock, ShieldCheck } from 'lucide-react';
import { company, logoUrl, nav, services, areas } from '@/data/site';

export const Logo = ({ dark = false, homepageImages = false }) => (
    <Link
        to="/"
        className={`inline-flex w-fit max-w-full items-center gap-2.5 group rounded-sm ${dark ? 'bg-white px-2 py-1' : ''}`}
        aria-label={`${company.name} home`}
    >
        <img
            src={logoUrl}
            alt={`${company.name} logo`}
            width={homepageImages ? 76 : undefined}
            height={homepageImages ? 48 : undefined}
            className={`h-11 w-auto object-contain object-left transition-transform duration-200 group-hover:-translate-y-0.5 sm:h-12 ${dark ? 'max-w-[11rem]' : 'max-w-[42vw] sm:max-w-[240px]'}`}
        />
    </Link>
);

const headingIsOrphan = (el) => {
    const range = document.createRange();
    const tops = [];
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
        const re = /\S+/g;
        let match;
        while ((match = re.exec(node.textContent))) {
            range.setStart(node, match.index);
            range.setEnd(node, match.index + match[0].length);
            const rect = range.getBoundingClientRect();
            if (rect.height < 1) continue;
            tops.push(rect.top);
        }
    }
    const rows = [];
    tops.forEach((top) => {
        const row = rows.find((item) => Math.abs(item.top - top) < 3);
        if (row) row.count += 1;
        else rows.push({ top, count: 1 });
    });
    return rows.length > 1 && rows.at(-1).count === 1;
};

const keepHeadingPairsTogether = () => {
    document.querySelectorAll('h1, h2, h3').forEach((el) => {
        el.querySelectorAll('[data-orphan-pair]').forEach((span) => {
            const prev = span.previousSibling;
            if (prev && prev.nodeType === Node.TEXT_NODE) prev.textContent += span.textContent;
            else span.replaceWith(document.createTextNode(span.textContent));
            span.remove();
        });
        if (!headingIsOrphan(el)) return;
        const nodes = [];
        const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
        let node;
        while ((node = walker.nextNode())) if (node.textContent.trim()) nodes.push(node);
        const last = nodes.at(-1);
        const match = last && last.textContent.match(/^(.*?\s)(\S+\s+\S+)\s*$/);
        if (!match) return;
        const probe = document.createElement('span');
        probe.style.whiteSpace = 'nowrap';
        probe.textContent = match[2];
        el.appendChild(probe);
        const fits = probe.getBoundingClientRect().width <= el.clientWidth + 1;
        probe.remove();
        if (!fits) return;
        last.textContent = match[1];
        const span = document.createElement('span');
        span.dataset.orphanPair = 'true';
        span.style.whiteSpace = 'nowrap';
        span.textContent = match[2];
        last.after(span);
    });
};

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
        <header className="sticky top-0 z-50 w-full min-w-0 max-w-full">
            <div className="hidden bg-[hsl(var(--ink))] py-2 text-xs text-white/70 md:block">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
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
            <div className={`w-full min-w-0 max-w-full border-b bg-white transition-shadow ${scrolled ? 'shadow-[0_10px_30px_-18px_rgba(15,23,42,0.45)]' : ''}`}>
                <div className="mx-auto flex w-full min-w-0 max-w-7xl items-center justify-between gap-2 px-4 py-3 sm:gap-4 sm:px-6 lg:px-8">
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
                    <div className="flex shrink-0 items-center gap-2">
                        <a
                            href={company.phoneHref}
                            className="hidden min-h-[44px] items-center gap-2 border border-neutral-300 px-4 text-sm font-semibold text-[hsl(var(--ink))] transition-colors hover:border-[hsl(var(--ink))] lg:flex"
                        >
                            <Phone className="h-4 w-4" strokeWidth={2.2} />
                            {company.phone}
                        </a>
                        <Link
                            to="/quote"
                            className="flex min-h-[44px] items-center bg-[hsl(var(--brand))] px-3 text-sm font-bold uppercase tracking-wide text-[hsl(var(--brand-foreground))] transition-transform hover:-translate-y-px active:translate-y-0 sm:px-5"
                        >
                            <span className="sm:hidden">Estimate</span>
                            <span className="hidden sm:inline">Get Estimate</span>
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
    <footer className="w-full min-w-0 max-w-full bg-[hsl(var(--ink))] text-white/70">
        <div className="hatch h-1.5 w-full" />
        <div className="mx-auto max-w-7xl px-4 pb-14 pt-[50px] sm:px-6 lg:px-8 lg:pb-16 lg:pt-[58px]">
            <div>
                <Logo dark homepageImages={homepageImages} />
                <p className="mt-4 text-base leading-relaxed">
                    {company.tagline}. Family-run general contractors serving homeowners across the Tampa Bay and Sarasota region since {company.founded}.
                </p>
                <p className="mt-4 text-xs uppercase tracking-widest text-white/80">{company.license}</p>
            </div>
            <div className="mt-10">
                <p className="font-display text-base font-bold uppercase tracking-widest text-white">Services</p>
                <ul data-audit="footer-links" className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2 text-sm sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((s) => (
                        <li key={s.slug} className="min-w-0">
                            <Link to={`/services/${s.slug}`} className="block whitespace-nowrap hover:text-[hsl(var(--brand))]">{s.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-10">
                <p className="font-display text-base font-bold uppercase tracking-widest text-white">Areas We Serve</p>
                <ul data-audit="footer-links" className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2 text-sm sm:grid-cols-2 lg:grid-cols-4">
                    {areas.map((a) => (
                        <li key={a.slug} className="min-w-0">
                            <Link to={a.path ?? `/areas-we-serve/${a.slug}`} className="block whitespace-nowrap hover:text-[hsl(var(--brand))]">{a.city} Contractors</Link>
                        </li>
                    ))}
                </ul>
                <ul data-audit="footer-links" className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2 text-sm sm:grid-cols-2 lg:grid-cols-4">
                    <li><Link to="/careers" className="block whitespace-nowrap hover:text-[hsl(var(--brand))]">Careers</Link></li>
                    <li><Link to="/financing" className="block whitespace-nowrap hover:text-[hsl(var(--brand))]">Financing</Link></li>
                    <li><Link to="/safety" className="block whitespace-nowrap hover:text-[hsl(var(--brand))]">Safety & Insurance</Link></li>
                </ul>
            </div>
            <div className="mt-10" data-audit="footer-contact">
                <p className="font-display text-base font-bold uppercase tracking-widest text-white">Contact</p>
                <ul className="mt-4 space-y-3 text-base">
                    {[
                        [Phone, <a key="phone" href={company.phoneHref} className="hover:text-white">{company.phone}</a>],
                        [Mail, <a key="mail" href={`mailto:${company.email}`} className="break-all hover:text-white">{company.email}</a>],
                        [MapPin, <span key="address">{company.address}</span>],
                        [null, <span key="serving" className="text-white/80">Serving Hillsborough, Pinellas, Pasco, Sarasota and Manatee counties.</span>],
                        [Clock, <span key="hours">{company.hours}</span>],
                    ].map(([Icon, text], index) => (
                        <li key={index} className="grid grid-cols-[1.25rem_minmax(0,1fr)] items-stretch gap-x-2">
                            <span className="block">{Icon ? <Icon className="h-4 w-4 text-[hsl(var(--brand))]" /> : null}</span>
                            {text}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <div className="border-t border-white/10 pb-24 pt-5 text-xs md:pb-5">
            <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
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
    const page = width === 'page';
    const rail = width === 'narrow' ? 'max-w-[56rem]' : page ? 'max-w-7xl px-4 sm:px-6 lg:px-8' : width === 'wide' ? 'max-w-[90rem]' : 'max-w-[72rem]';
    const pad = page ? 'py-14 lg:py-16' : 'px-4 py-16 md:py-24';
    return (
        <section id={id} className={`w-full min-w-0 max-w-full ${pad} ${className}`}>
            <div className={`mx-auto w-full min-w-0 ${rail}`}>{children}</div>
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
    <div className="relative isolate w-full min-w-0 max-w-full overflow-hidden bg-[hsl(var(--ink))] py-14 lg:py-16">
        {image && <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />}
        <div className="relative mx-auto w-full min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav className="mb-5 flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-white/50">
                <Link to="/" className="hover:text-[hsl(var(--brand))]">Home</Link>
                {crumbs.map((c) => (
                    <span key={c.label} className="flex items-center gap-2">
                        <span>/</span>
                        {c.to ? <Link to={c.to} className="hover:text-[hsl(var(--brand))]">{c.label}</Link> : <span className="text-white/80">{c.label}</span>}
                    </span>
                ))}
            </nav>
            <h1 className="font-display max-w-full break-words text-4xl font-bold uppercase leading-[1.05] text-white sm:text-5xl md:text-6xl">
                {title}
            </h1>
            {subtitle && <p className="mt-5 text-lg leading-relaxed text-white/70">{subtitle}</p>}
        </div>
        <div className="hatch absolute inset-x-0 bottom-0 h-1.5 w-full" />
    </div>
);

export const CtaBand = ({ heading = 'Ready to price your project?', text = 'Send us your scope and we will come out, measure, and return a line-item proposal within five business days.' }) => (
    <section className="w-full min-w-0 max-w-full bg-[hsl(var(--brand))] py-14 lg:py-16">
        <div className="mx-auto flex w-full min-w-0 max-w-7xl flex-col items-stretch justify-between gap-6 px-4 sm:px-6 md:flex-row lg:px-8">
            <div className="min-w-0 flex-1">
                <h2 className="font-display text-3xl font-bold uppercase text-[hsl(var(--brand-foreground))] md:text-4xl">{heading}</h2>
                <p className="mt-2 text-[hsl(var(--brand-foreground))]/80">{text}</p>
            </div>
            <div className="flex flex-wrap items-end gap-3 md:self-end">
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

const MobileQuoteBar = () => (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-white/10 md:hidden">
        <a
            href={company.phoneHref}
            className="flex min-h-[56px] items-center justify-center gap-2 bg-[hsl(var(--ink))] text-sm font-bold uppercase tracking-wide text-white"
        >
            <Phone className="h-4 w-4" strokeWidth={2.2} />
            Call
        </a>
        <Link
            to="/quote"
            className="flex min-h-[56px] items-center justify-center gap-2 bg-[hsl(var(--brand))] text-sm font-bold uppercase tracking-wide text-[hsl(var(--brand-foreground))]"
        >
            Get a Quote
        </Link>
    </div>
);

const SiteLayout = ({ children, homepageImages = false }) => {
    const location = useLocation();
    useLayoutEffect(() => {
        let cancel = false;
        const run = () => { if (!cancel) keepHeadingPairsTogether(); };
        run();
        document.fonts?.ready.then(run);
        window.addEventListener('resize', run);
        return () => {
            cancel = true;
            window.removeEventListener('resize', run);
        };
    }, [location.pathname]);
    return (
        <div className="flex min-h-screen w-full min-w-0 max-w-full flex-col overflow-x-clip bg-white text-[hsl(var(--ink))]">
            <Header homepageImages={homepageImages} />
            <main className="w-full min-w-0 max-w-full flex-1 pb-14 md:pb-0">{children}</main>
            <Footer homepageImages={homepageImages} />
            <MobileQuoteBar />
        </div>
    );
};

export default SiteLayout;
