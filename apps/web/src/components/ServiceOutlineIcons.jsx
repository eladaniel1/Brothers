import React from 'react';

const stroke = {
    fill: 'none',
    stroke: '#0B2545',
    strokeWidth: 2.15,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
};

const House = () => (
    <svg viewBox="0 0 80 80" aria-hidden="true">
        <path {...stroke} d="M16 36.5 40 16l24 20.5" />
        <path {...stroke} d="M22 32.5 40 18.2 58 32.5" />
        <path {...stroke} d="M27 29.2 40 19.4 53 29.2" />
        <path {...stroke} d="M50 24.5V15.5h6.2v13.2" />
        <path {...stroke} d="M20 35.2V64h40V35.2" />
        <path {...stroke} d="M28 64V46h11v18" />
        <circle cx="36.2" cy="55" r="0.9" fill="#0B2545" stroke="none" />
        <path {...stroke} d="M45 46h13v11H45z" />
        <path {...stroke} d="M51.5 46v11M45 51.5h13" />
    </svg>
);

const Kitchen = () => (
    <svg viewBox="0 0 80 80" aria-hidden="true">
        <path {...stroke} d="M14 28h52v34H14z" />
        <path {...stroke} d="M14 40h52" />
        <path {...stroke} d="M28 28v12M42 28v12" />
        <path {...stroke} d="M21 34h3.2M35 34h3.2M49 34h3.2" />
        <path {...stroke} d="M22 40v22M38 40v22M54 40v22" />
        <path {...stroke} d="M30 51h4M46 51h4" />
        <path {...stroke} d="M46 22h10v6H46z" />
        <path {...stroke} d="M51 22v-4" />
    </svg>
);

const Bathroom = () => (
    <svg viewBox="0 0 80 80" aria-hidden="true">
        <path {...stroke} d="M18 38h36v8c0 8-6 14-14 14H32c-8 0-14-6-14-14v-8z" />
        <path {...stroke} d="M22 38V30a8 8 0 0 1 8-8h4" />
        <path {...stroke} d="M34 22v6" />
        <path {...stroke} d="M54 30h8v22" />
        <path {...stroke} d="M58 22v8" />
        <path {...stroke} d="M54 26h8" />
        <path {...stroke} d="M24 60v6M48 60v6" />
        <path {...stroke} d="M28 46h8" />
    </svg>
);

const Addition = () => (
    <svg viewBox="0 0 80 80" aria-hidden="true">
        <path {...stroke} d="M12 40 32 22l20 18" />
        <path {...stroke} d="M16 38.5V62h32V38.5" />
        <path {...stroke} d="M24 62V48h10v14" />
        <path {...stroke} d="M48 34h20v28H48" />
        <path {...stroke} d="M48 34 58 26l10 8" />
        <path {...stroke} d="M54 46h8v8h-8z" />
        <path {...stroke} d="M58 46v8M54 50h8" />
    </svg>
);

const Commercial = () => (
    <svg viewBox="0 0 80 80" aria-hidden="true">
        <path {...stroke} d="M18 18h44v46H18z" />
        <path {...stroke} d="M18 30h44M18 42h44M18 54h44" />
        <path {...stroke} d="M32 18v46M48 18v46" />
        <path {...stroke} d="M34 64h12v-10H34z" />
    </svg>
);

const Foundation = () => (
    <svg viewBox="0 0 80 80" aria-hidden="true">
        <path {...stroke} d="M14 28h52v10H14z" />
        <path {...stroke} d="M18 38v8h12v-8M32 38v8h16v-8M50 38v8h12v-8" />
        <path {...stroke} d="M14 46h52v8H14z" />
        <path {...stroke} d="M22 54v6h10v-6M36 54v6h8v-6M48 54v6h10v-6" />
        <path {...stroke} d="M14 60h52" />
        <path {...stroke} d="M20 24h8M36 24h8M52 24h8" />
    </svg>
);

const icons = {
    'general-contracting': House,
    'kitchen-remodeling': Kitchen,
    'bathroom-remodeling': Bathroom,
    'home-additions': Addition,
    'commercial-construction': Commercial,
    'concrete-foundations': Foundation,
};

export const serviceOutlineSlugs = new Set(Object.keys(icons));

const labels = {
    'general-contracting': 'Outline icon of a house with a roof, door and windows',
    'kitchen-remodeling': 'Outline icon of kitchen cabinets, a countertop and a sink',
    'bathroom-remodeling': 'Outline icon of a bathtub and shower',
    'home-additions': 'Outline icon of a house with an attached addition',
    'commercial-construction': 'Outline icon of a commercial building with a window grid',
    'concrete-foundations': 'Outline icon of a concrete foundation and slab',
};

const ServiceOutlineIcon = ({ slug, className = '' }) => {
    const Icon = icons[slug];
    if (!Icon) return null;
    return (
        <span role="img" aria-label={labels[slug]} className={`inline-flex text-[#0B2545] [&>svg]:h-full [&>svg]:w-full ${className}`}>
            <Icon />
        </span>
    );
};

export default ServiceOutlineIcon;
