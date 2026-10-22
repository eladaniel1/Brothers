import React from 'react';
import { Link } from 'react-router-dom';
import { AirVent, ArrowRight, Bath, BrickWall, Building2, Car, CloudRain, CookingPot, DoorOpen, Fence, Grid2x2, Hammer, HardHat, House, HousePlus, Layers, Paintbrush, PaintBucket, PaintRoller, Snowflake, SquareParking, Sun, Thermometer, TreePalm, Umbrella, Warehouse, Waves, Wrench, Zap } from 'lucide-react';
import Reveal from '@/components/Reveal';

// Hover tooltips for the six original services.
// Added services fall back to their own `summary` field.
const serviceSummaries = {
    'general-contracting': 'One licensed Florida contractor managing design, permits, inspections and every trade on whole-home remodels and renovations.',
    'kitchen-remodeling': 'Full kitchen rebuilds, including plumbing moves through the slab, custom cabinetry and countertops, managed from permit to final inspection.',
    'bathroom-remodeling': 'Bathrooms rebuilt with waterproofing behind the tile, exhaust vented outdoors and wet areas built to handle Florida humidity.',
    'home-additions': 'Room additions and expansions built to Florida Building Code wind requirements, from slab and block walls to the roof tie-in.',
    'commercial-construction': 'Office, retail and light commercial interiors scheduled around your lease dates and opening deadline.',
    'concrete-foundations': 'Footings, slabs, driveways and structural repair with tested mixes and documented pours.',
};

// One line icon per service, all from the same set so they match in size and weight.
const serviceIcons = {
    'general-contracting': HardHat,
    'kitchen-remodeling': CookingPot,
    'bathroom-remodeling': Bath,
    'home-additions': HousePlus,
    'commercial-construction': Building2,
    'concrete-foundations': BrickWall,
    roofing: House,
    windows: Grid2x2,
    doors: DoorOpen,
    hvac: AirVent,
    plumbing: Wrench,
    solar: Sun,
    'roof-insulation': Thermometer,
    pools: Waves,
    pergolas: TreePalm,
    driveways: Car,
    'accessory-dwelling-units': Warehouse,
    flooring: Layers,
    stucco: PaintRoller,
    drywall: Hammer,
    'roof-repair': Umbrella,
    'ac-repair': Snowflake,
    'garage-doors': SquareParking,
    electrical: Zap,
    'epoxy-flooring': PaintBucket,
    painting: Paintbrush,
    fencing: Fence,
    gutters: CloudRain,
};

/**
 * Shared service-card grid used by the homepage "What We Build" section and the
 * Services page. Renders every service in `items` as a compact icon-and-name tile,
 * four per row on desktop and two on phones.
 *
 * @param {Array} items   - service records (slug, title, summary)
 * @param {string} className - optional extra classes for the grid wrapper
 */
const ServiceCardGrid = ({ items, className = '' }) => (
    <div className={`mt-8 grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4 ${className}`}>
        {items.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.03}>
                <Link
                    to={`/services/${s.slug}`}
                    title={serviceSummaries[s.slug] || s.summary}
                    className="group flex h-full items-center gap-3 border border-neutral-200 bg-white px-3 py-3 transition-colors hover:border-[hsl(var(--brand))] sm:px-4"
                >
                    {React.createElement(serviceIcons[s.slug] || House, { className: 'h-6 w-6 shrink-0 text-[#0B2545]', strokeWidth: 1.5, 'aria-hidden': true })}
                    <h3 className="font-display flex-1 text-sm font-bold uppercase leading-tight transition-colors group-hover:text-[hsl(var(--brand))] sm:text-base">
                        {s.title}
                    </h3>
                    <ArrowRight className="hidden h-4 w-4 shrink-0 text-neutral-400 transition-transform group-hover:translate-x-0.5 group-hover:text-[hsl(var(--brand))] sm:block" aria-hidden="true" />
                </Link>
            </Reveal>
        ))}
    </div>
);

export default ServiceCardGrid;
