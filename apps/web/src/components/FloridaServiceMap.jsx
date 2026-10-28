import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { areas } from '@/data/site';
import { floridaCounties, floridaMapViewBox } from '@/data/floridaCounties';

// Callouts sit in open water or east of the cluster so the five names never stack.
const CALLOUTS = {
    pinellas: { x: 214, y: 232, anchor: 'end' },
    pasco: { x: 392, y: 108, anchor: 'start' },
    hillsborough: { x: 392, y: 142, anchor: 'start' },
    manatee: { x: 404, y: 300, anchor: 'start' },
    sarasota: { x: 404, y: 336, anchor: 'start' },
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
        <div className="mx-auto mt-12 grid min-w-0 w-full max-w-[86rem] items-center gap-10 lg:grid-cols-[minmax(0,780px)_minmax(22rem,1fr)] lg:gap-14">
            <div className="min-w-0">
                <svg
                    viewBox={floridaMapViewBox}
                    className="mx-auto block h-auto w-full max-w-[780px] overflow-visible"
                    role="img"
                    aria-label="Map of Florida. Hillsborough, Pinellas, Pasco, Manatee, and Sarasota counties are highlighted."
                >
                    <rect width="100%" height="100%" fill="#ffffff" />
                    {floridaCounties.map((county) => {
                        const served = Boolean(county.slug);
                        const isFocus = served && county.slug === focus;
                        const fill = !served ? '#f3f4f6' : isFocus ? '#c8102e' : '#1b365d';
                        const stroke = served ? '#0f223d' : '#e7e5e4';
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
                    <g style={{ pointerEvents: 'none' }} aria-hidden="true">
                        <path
                            d="M292,178 C268,198 264,252 290,300 C314,332 352,318 354,258 C356,206 338,168 304,178"
                            fill="none"
                            stroke="#c8102e"
                            strokeWidth="3.4"
                            strokeLinecap="round"
                        />
                        <path
                            d="M228,142 C258,132 286,146 304,166"
                            fill="none"
                            stroke="#e8a818"
                            strokeWidth="3.2"
                            strokeLinecap="round"
                        />
                        <path
                            d="M292,158 L304,168 L290,166"
                            fill="none"
                            stroke="#e8a818"
                            strokeWidth="3.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </g>
                    {floridaCounties.filter((county) => county.slug).map((county) => {
                        const callout = CALLOUTS[county.slug];
                        const emphasized = county.slug === focus;
                        const textX = callout.anchor === 'end' ? callout.x : callout.x;
                        const lineEndX = callout.anchor === 'end' ? callout.x + 6 : callout.x - 6;
                        return (
                            <g key={`${county.id}-label`} style={{ pointerEvents: 'none' }}>
                                <line
                                    x1={county.cx}
                                    y1={county.cy}
                                    x2={lineEndX}
                                    y2={callout.y - 3}
                                    stroke={emphasized ? '#14324f' : '#64748b'}
                                    strokeWidth={emphasized ? 1.3 : 0.9}
                                />
                                <circle cx={county.cx} cy={county.cy} r={emphasized ? 3.2 : 2.4} fill={emphasized ? '#14324f' : '#3d6ea8'} stroke="#ffffff" strokeWidth="1" />
                                <text
                                    x={textX}
                                    y={callout.y}
                                    textAnchor={callout.anchor}
                                    fontSize={emphasized ? 18 : 15}
                                    fontWeight="700"
                                    fill="#14324f"
                                    stroke="#ffffff"
                                    strokeWidth="4"
                                    paintOrder="stroke"
                                    style={{ fontFamily: 'Inter, sans-serif' }}
                                >
                                    {county.name}
                                </text>
                            </g>
                        );
                    })}
                </svg>
                <p className="mt-3 text-center text-sm text-neutral-500">Click a highlighted county to see its cities.</p>
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
                                className={`min-h-[44px] border px-4 text-sm font-bold uppercase tracking-wide ${selected ? 'border-[#c8102e] bg-[#c8102e] text-white' : 'border-[#1b365d] bg-white text-[#1b365d] hover:border-[#c8102e] hover:text-[#c8102e]'}`}
                            >
                                {item.city.replace(' County', '')}
                            </button>
                        );
                    })}
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                    <span className="bg-[#1b365d] px-3 py-1.5 text-sm font-bold uppercase tracking-wide text-white">{area.neighborhoods.length} cities</span>
                    <span className="bg-[#c8102e] px-3 py-1.5 text-sm font-bold uppercase tracking-wide text-white">CGC1541183</span>
                    <span className="border border-[#e8a818] bg-amber-50 px-3 py-1.5 text-sm font-bold uppercase tracking-wide text-[#0f223d]">5 counties</span>
                </div>
                <h3 className="font-display mt-5 text-3xl font-bold uppercase text-[#0f223d]">{area.city}</h3>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-neutral-600">{area.blurb}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                    {cities.map((city) => (
                        <li key={city}>
                            <Link
                                to={cityHref(city)}
                                className="block border border-neutral-200 bg-white px-3.5 py-2 text-sm font-semibold uppercase tracking-wide text-[#1b365d] hover:border-[#c8102e] hover:bg-rose-50 hover:text-[#c8102e]"
                            >
                                {city}
                            </Link>
                        </li>
                    ))}
                </ul>
                <Link
                    to={`/areas-we-serve/${area.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#0f223d] hover:text-[#c8102e]"
                >
                    All {area.city} communities <ArrowRight className="h-3.5 w-3.5" />
                </Link>
            </div>
        </div>
    );
};

export default FloridaServiceMap;
