import React from 'react';
import { lowerTitle } from '@/lib/format';
import { brandsFor } from '@/data/brands';

// "Brands we install" block for service pages. Renders nothing for a service
// without a brand list.
const BrandsSection = ({ slug, title }) => {
    const groups = brandsFor(slug);
    if (!groups.length) return null;

    return (
        <>
            <h3 className="font-display mt-12 text-2xl font-bold uppercase">Brands we install</h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                These are the {lowerTitle(title)} brands we install most often in the Tampa Bay and Sarasota region. The right product for your home depends on its wind zone, code requirements and budget, and we confirm options and availability at the estimate.
            </p>
            <dl className="mt-6 divide-y divide-neutral-200 border-y border-neutral-200">
                {groups.map(([category, names]) => (
                    <div key={category} className="grid gap-2 py-4 sm:grid-cols-[12rem_1fr] sm:gap-6">
                        <dt className="font-display text-sm font-bold uppercase tracking-wide text-neutral-500">{category}</dt>
                        <dd className="flex flex-wrap gap-2">
                            {names.map((name) => (
                                <span key={name} className="border border-neutral-300 px-3 py-1 text-sm font-semibold text-[hsl(var(--ink))]">
                                    {name}
                                </span>
                            ))}
                        </dd>
                    </div>
                ))}
            </dl>
        </>
    );
};

export default BrandsSection;
