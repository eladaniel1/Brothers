import React from 'react';
import { Link } from 'react-router-dom';
import { AirVent, ArrowRight, Car, DoorOpen, Fence, Grid2x2, House, HousePlus, Layers, PaintRoller, Sun, Thermometer, Waves, Wrench } from 'lucide-react';
import Reveal from '@/components/Reveal';
import ServiceOutlineIcon, { serviceOutlineSlugs } from '@/components/ServiceOutlineIcons';

// Homepage "What We Build" service-card summaries for the six original services.
// Added services fall back to their own `summary` field.
const serviceSummaries = {
    'general-contracting': 'One licensed Florida contractor managing design, permits, inspections and every trade on whole-home remodels and renovations.',
    'kitchen-remodeling': 'Full kitchen rebuilds, including plumbing moves through the slab, custom cabinetry and countertops, managed from permit to final inspection.',
    'bathroom-remodeling': 'Bathrooms rebuilt with waterproofing behind the tile, exhaust vented outdoors and wet areas built to handle Florida humidity.',
    'home-additions': 'Room additions and expansions built to Florida Building Code wind requirements, from slab and block walls to the roof tie-in.',
    'commercial-construction': 'Office, retail and light commercial interiors scheduled around your lease dates and opening deadline.',
    'concrete-foundations': 'Footings, slabs, driveways and structural repair with tested mixes and documented pours.',
};

// Line icons for the added services; the six original services use ServiceOutlineIcon.
const serviceIcons = {
    roofing: House,
    windows: Grid2x2,
    doors: DoorOpen,
    hvac: AirVent,
    plumbing: Wrench,
    solar: Sun,
    'roof-insulation': Thermometer,
    pools: Waves,
    pergolas: Fence,
    driveways: Car,
    'accessory-dwelling-units': HousePlus,
    flooring: Layers,
    stucco: PaintRoller,
};

/**
 * Shared service-card grid used by the homepage "What We Build" section and the
 * Services page. Renders every service in `items` with the same card structure,
 * icon treatment, typography, spacing and responsive breakpoints.
 *
 * @param {Array} items   - service records (slug, title, summary)
 * @param {string} className - optional extra classes for the grid wrapper
 */
const ServiceCardGrid = ({ items, className = '' }) => (
    <div className={`mt-10 grid grid-cols-3 gap-2 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 ${className}`}>
        {items.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.05}>
                <div className="group block h-full border border-neutral-200 transition-shadow hover:shadow-[0_24px_60px_-40px_rgba(15,23,42,0.55)]">
                    <Link to={`/services/${s.slug}`} aria-label={`${s.title} service page`} className="flex h-24 items-center justify-center bg-white sm:h-44">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#e3eefc] bg-[#eef4fc] p-2 shadow-[0_10px_22px_-14px_rgba(59,130,246,0.55),inset_0_1px_0_rgba(255,255,255,0.95)] sm:h-[7.5rem] sm:w-[7.5rem] sm:p-5">
                            {serviceOutlineSlugs.has(s.slug) ? (
                                <ServiceOutlineIcon slug={s.slug} className="h-full w-full" />
                            ) : (
                                React.createElement(serviceIcons[s.slug] || House, { className: 'h-full w-full text-[#0B2545]', strokeWidth: 1.5, 'aria-hidden': true })
                            )}
                        </div>
                    </Link>
                    <div className="p-2 sm:p-6">
                        <h3 className="font-display text-xs font-bold uppercase leading-tight sm:text-xl">
                            <Link to={`/services/${s.slug}`} className="transition-colors hover:text-[hsl(var(--brand))]">{s.title}</Link>
                        </h3>
                        <p className="mt-2 hidden text-xs leading-relaxed text-neutral-600 sm:block sm:text-sm">{serviceSummaries[s.slug] || s.summary}</p>
                        <span className="mt-4 hidden items-center gap-2 text-xs font-bold uppercase tracking-widest text-[hsl(var(--ink))] sm:inline-flex">
                            Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                        </span>
                    </div>
                </div>
            </Reveal>
        ))}
    </div>
);

export default ServiceCardGrid;
