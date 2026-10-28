import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { areas } from '@/data/site';
import { floridaCounties, floridaMapViewBox } from '@/data/floridaCounties';

const LABEL_NUDGE = {
    pinellas: [-46, 3],
    hillsborough: [28, -2],
    pasco: [8, -16],
    manatee: [22, 8],
    sarasota: [14, 18],
};

const FloridaServiceMap = ({ communities, cityLinks }) => {
    const [active, setActive] = useState('hillsborough');
    const [hover, setHover] = useState(null);
    const focus = hover || active;
    const area = areas.find((item) => item.slug === focus) || areas[0];
    const cities = communities[area.slug] || [];

    const cityHref = (city) => {
        const link = cityLinks[city];
        if (link && typeof link === 'object') return link[area.slug] || Object.values(link)[0];
        return link || `/areas-we-serve/${area.slug}`;
    };

    return (
        <div className="mt-8 grid min-w-0 items-start gap-8 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-12">
            <div className="min-w-0">
                <svg
                    viewBox={floridaMapViewBox}
                    className="mx-auto block h-auto w-full max-w-[22rem]"
                    role="img"
                    aria-label="Map of Florida. Hillsborough, Pinellas, Pasco, Manatee, and Sarasota counties are highlighted."
                >
                    <rect width="100%" height="100%" fill="#ffffff" />
                    {floridaCounties.map((county) => {
                        const served = Boolean(county.slug);
                        const isFocus = served && county.slug === focus;
                        const fill = !served ? '#f4f4f5' : isFocus ? '#14324f' : '#3d6ea8';
                        const stroke = served ? '#0f2744' : '#e4e4e7';
                        return (
                            <path
                                key={county.id}
                                d={county.d}
                                fill={fill}
                                stroke={stroke}
                                strokeWidth={served ? 1.1 : 0.6}
                                className={served ? 'cursor-pointer' : undefined}
                                tabIndex={served ? 0 : undefined}
                                role={served ? 'button' : undefined}
                                aria-label={served ? `${county.name} County, served` : `${county.name} County`}
                                aria-pressed={served ? county.slug === active : undefined}
                                onMouseEnter={() => served && setHover(county.slug)}
                                onMouseLeave={() => setHover(null)}
                                onFocus={() => served && setHover(county.slug)}
                                onBlur={() => setHover(null)}
                                onClick={() => served && setActive(county.slug)}
                                onKeyDown={(event) => {
                                    if (!served) return;
                                    if (event.key === 'Enter' || event.key === ' ') {
                                        event.preventDefault();
                                        setActive(county.slug);
                                    }
                                }}
                            >
                                <title>{served ? `${county.name} County — we serve this county` : `${county.name} County`}</title>
                            </path>
                        );
                    })}
                    {floridaCounties.filter((county) => county.slug).map((county) => {
                        const [dx, dy] = LABEL_NUDGE[county.slug] || [0, 0];
                        const emphasized = county.slug === focus;
                        return (
                            <text
                                key={`${county.id}-label`}
                                x={county.cx + dx}
                                y={county.cy + dy}
                                textAnchor="middle"
                                fontSize={emphasized ? 13 : 11}
                                fontWeight="700"
                                fill={emphasized ? '#14324f' : '#3f3f46'}
                                stroke="#ffffff"
                                strokeWidth="3.5"
                                paintOrder="stroke"
                                style={{ pointerEvents: 'none', fontFamily: 'Inter, sans-serif' }}
                            >
                                {county.name}
                            </text>
                        );
                    })}
                </svg>
                <p className="mt-2 text-center text-xs text-neutral-500">Click a highlighted county to see its cities.</p>
            </div>

            <div className="min-w-0">
                <div className="flex flex-wrap gap-2">
                    {areas.map((item) => {
                        const selected = item.slug === focus;
                        return (
                            <button
                                key={item.slug}
                                type="button"
                                onClick={() => setActive(item.slug)}
                                onMouseEnter={() => setHover(item.slug)}
                                onMouseLeave={() => setHover(null)}
                                aria-pressed={item.slug === active}
                                className={`min-h-[36px] border px-3 text-xs font-bold uppercase tracking-wide ${selected ? 'border-[hsl(var(--ink))] bg-[hsl(var(--ink))] text-white' : 'border-neutral-300 bg-white text-neutral-700 hover:border-[hsl(var(--brand))]'}`}
                            >
                                {item.city.replace(' County', '')}
                            </button>
                        );
                    })}
                </div>
                <h3 className="font-display mt-5 text-2xl font-bold uppercase">{area.city}</h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-neutral-600">{area.blurb}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                    {cities.map((city) => (
                        <li key={city}>
                            <Link
                                to={cityHref(city)}
                                className="block border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-neutral-700 hover:border-[hsl(var(--brand))] hover:text-[hsl(var(--ink))]"
                            >
                                {city}
                            </Link>
                        </li>
                    ))}
                </ul>
                <Link
                    to={`/areas-we-serve/${area.slug}`}
                    className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[hsl(var(--ink))] hover:text-[hsl(var(--brand))]"
                >
                    All {area.city} communities <ArrowRight className="h-3.5 w-3.5" />
                </Link>
            </div>
        </div>
    );
};

export default FloridaServiceMap;
