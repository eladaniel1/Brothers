import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import SiteLayout, { Eyebrow, PageHero, Section } from '@/components/SiteLayout';
import { areas, services } from '@/data/site';
import { hillsboroughCities } from '@/data/cities';
import { allCities, citiesByCounty } from '@/data/allCities';

const Group = ({ title, links }) => (
    <div>
        <h2 className="font-display text-xl font-bold uppercase tracking-wide text-[hsl(var(--ink))]">{title}</h2>
        <ul className="mt-4 space-y-2">
            {links.map(({ label, to }) => (
                <li key={to}>
                    <Link to={to} className="text-sm text-neutral-600 underline-offset-2 hover:text-[hsl(var(--brand))] hover:underline">
                        {label}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

const SitemapPage = () => {
    const mainLinks = [
        { label: 'Home', to: '/' },
        { label: 'About Us', to: '/about' },
        { label: 'Our Process', to: '/process' },
        { label: 'Project Gallery', to: '/projects' },
        { label: 'Client Reviews', to: '/reviews' },
        { label: 'Safety & Insurance', to: '/safety' },
        { label: 'Financing', to: '/financing' },
        { label: 'Careers', to: '/careers' },
        { label: 'FAQ', to: '/faq' },
        { label: 'Contact Us', to: '/contact' },
        { label: 'Request a Free Quote', to: '/quote' },
        { label: 'Privacy Policy', to: '/privacy' },
        { label: 'Terms of Service', to: '/terms' },
    ];

    const serviceLinks = [
        { label: 'All Services', to: '/services' },
        ...services.map((s) => ({ label: s.title, to: `/services/${s.slug}` })),
    ];

    const areaLinks = [
        { label: 'All Areas We Serve', to: '/areas-we-serve' },
        ...areas.map((a) => ({ label: a.city, to: a.path ?? `/areas-we-serve/${a.slug}` })),
    ];

    const hillsboroughCityLinks = [
        { label: 'Tampa', to: '/areas-we-serve/hillsborough/tampa' },
        { label: 'Brandon', to: '/areas-we-serve/hillsborough/brandon' },
        ...hillsboroughCities.map((c) => ({ label: c.name, to: `/areas-we-serve/hillsborough/${c.slug}` })),
    ];

    const pinellasLinks = citiesByCounty('pinellas').map((c) => ({ label: c.name, to: `/areas-we-serve/pinellas/${c.slug}` }));
    const pascoLinks = citiesByCounty('pasco').map((c) => ({ label: c.name, to: `/areas-we-serve/pasco/${c.slug}` }));
    const sarasotaLinks = citiesByCounty('sarasota')
        .filter((c) => !(c.slug === 'lakewood-ranch'))
        .map((c) => ({ label: c.name, to: `/areas-we-serve/sarasota/${c.slug}` }));
    const manateeLinks = citiesByCounty('manatee').map((c) => ({ label: c.name, to: `/areas-we-serve/manatee/${c.slug}` }));

    return (
        <SiteLayout>
            <Helmet>
                <title>Sitemap | Brothers Remodelers</title>
                <meta name="description" content="A complete index of every page on the Brothers Remodelers website, including services, service areas, and city pages across the Tampa Bay and Sarasota region." />
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>
            <PageHero title="Sitemap" subtitle="Every page on the Brothers Remodelers website, organized by section." crumbs={[{ label: 'Sitemap' }]} />
            <Section width="wide">
                <Eyebrow>Site index</Eyebrow>
                <div className="mt-8 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    <Group title="Main Pages" links={mainLinks} />
                    <Group title="Services" links={serviceLinks} />
                    <Group title="Areas We Serve" links={areaLinks} />
                    <Group title="Hillsborough County Cities" links={hillsboroughCityLinks} />
                    {pinellasLinks.length > 0 && <Group title="Pinellas County Cities" links={pinellasLinks} />}
                    {pascoLinks.length > 0 && <Group title="Pasco County Cities" links={pascoLinks} />}
                    {sarasotaLinks.length > 0 && <Group title="Sarasota County Cities" links={sarasotaLinks} />}
                    {manateeLinks.length > 0 && <Group title="Manatee County Cities" links={manateeLinks} />}
                </div>
            </Section>
        </SiteLayout>
    );
};

export default SitemapPage;
