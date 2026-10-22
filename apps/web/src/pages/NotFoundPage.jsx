import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Home, Hammer, MapPin, FileText } from 'lucide-react';
import SiteLayout from '@/components/SiteLayout';
import { company } from '@/data/site';

const links = [
    { to: '/', label: 'Home', icon: Home, desc: 'Return to the homepage to see our services and recent work.' },
    { to: '/services', label: 'Services', icon: Hammer, desc: 'Browse kitchen, bathroom, addition and general contracting services.' },
    { to: '/areas-we-serve', label: 'Areas We Serve', icon: MapPin, desc: 'See the counties and communities we build across.' },
    { to: '/quote', label: 'Free Quote', icon: FileText, desc: 'Tell us about your project and request a free estimate.' },
];

const NotFoundPage = () => (
    <SiteLayout>
        <Helmet>
            <title>Page Not Found | Brothers Remodelers</title>
            <meta name="description" content="The page you were looking for could not be found. Browse our services, areas we serve, or request a free quote." />
            <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <section className="relative isolate overflow-hidden bg-[hsl(var(--ink))]">
            <div className="relative mx-auto flex max-w-[72rem] flex-col items-center px-4 py-24 text-center md:py-32">
                <p className="font-display text-[7rem] font-bold leading-none text-[hsl(var(--brand))] sm:text-[10rem]">404</p>
                <h1 className="font-display mt-2 text-3xl font-bold uppercase text-white sm:text-4xl md:text-5xl">
                    This page wasn&rsquo;t found
                </h1>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">
                    The page you were looking for may have moved, been renamed, or never existed.
                    Use one of the links below to get back on track, or call us at{' '}
                    <a href={company.phoneHref} className="font-semibold text-white underline hover:text-[hsl(var(--brand))]">
                        {company.phone}
                    </a>.
                </p>
            </div>
            <div className="hatch h-1.5 w-full" />
        </section>
        <section className="px-4 py-16 md:py-24">
            <div className="mx-auto max-w-[72rem]">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {links.map(({ to, label, icon: Icon, desc }) => (
                        <Link
                            key={to}
                            to={to}
                            className="group flex h-full flex-col border border-neutral-200 p-6 transition-colors hover:border-[hsl(var(--brand))]"
                        >
                            <Icon className="h-7 w-7 text-[hsl(var(--brand))]" strokeWidth={2} />
                            <h2 className="font-display mt-4 text-xl font-bold uppercase">{label}</h2>
                            <p className="mt-2 text-sm leading-relaxed text-neutral-600">{desc}</p>
                            <span className="mt-4 text-xs font-bold uppercase tracking-widest text-[hsl(var(--brand))] group-hover:underline">
                                Go to {label}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    </SiteLayout>
);

export default NotFoundPage;
