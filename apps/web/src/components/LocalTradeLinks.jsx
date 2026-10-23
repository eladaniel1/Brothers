import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Eyebrow, Section } from '@/components/SiteLayout';
import { localCities } from '@/data/localCities';
import { localTrades } from '@/data/localTrades';

// "Popular services in <city>" links from a city's area page to its
// trade-by-city pages. Renders nothing for cities without local trade pages.
const LocalTradeLinks = ({ areaUrl }) => {
    const city = localCities.find((c) => c.areaUrl === areaUrl);
    if (!city) return null;
    return (
        <Section width="wide" className="border-t border-neutral-200">
            <Eyebrow>{city.name} services</Eyebrow>
            <h2 className="font-display mt-4 text-3xl font-bold uppercase md:text-4xl">Popular services in {city.name}</h2>
            <ul className="mt-8 grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-5">
                {localTrades.map((t) => (
                    <li key={t.slug}>
                        <Link to={`/services/${t.slug}/${city.slug}`} className="group flex h-full items-center justify-between gap-2 border border-neutral-200 px-4 py-3 text-sm font-semibold hover:border-[hsl(var(--brand))]">
                            {t.name}
                            <ArrowRight className="h-4 w-4 shrink-0 text-neutral-400 group-hover:text-[hsl(var(--brand))]" />
                        </Link>
                    </li>
                ))}
            </ul>
        </Section>
    );
};

export default LocalTradeLinks;
