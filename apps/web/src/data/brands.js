// Product brands shown in the "Brands we install" section of each service page
// and listed as `brand` in that page's Service JSON-LD. Keyed by service slug,
// grouped by product category.
//
// Accuracy note: these are brands we install, not manufacturer certifications.
// Do not add "certified", "preferred" or "master" installer wording unless the
// company actually holds that credential.

export const serviceBrands = {
    roofing: [
        ['Architectural shingles', ['GAF', 'Owens Corning', 'CertainTeed', 'TAMKO']],
        ['Concrete & clay tile', ['Eagle Roofing', 'Westlake Royal Roofing']],
        ['Metal roofing', ['Englert', 'Drexel Metals']],
        ['Underlayment', ['Polyglass', 'GAF']],
    ],
    windows: [
        ['Impact windows', ['PGT', 'CGI', 'WinDoor', 'ES Windows']],
        ['Replacement windows', ['Andersen', 'Pella', 'Marvin']],
    ],
    doors: [
        ['Impact entry & patio doors', ['PGT', 'CGI', 'ES Windows']],
        ['Entry doors', ['Therma-Tru', 'Masonite', 'Pella']],
        ['Interior doors', ['Masonite', 'JELD-WEN']],
    ],
    hvac: [
        ['Air conditioning systems', ['Carrier', 'Trane', 'Lennox', 'Rheem', 'Goodman', 'Daikin']],
        ['Thermostats & controls', ['ecobee', 'Honeywell Home']],
    ],
    plumbing: [
        ['Faucets & fixtures', ['Moen', 'Delta', 'Kohler']],
        ['Tank water heaters', ['Rheem', 'A. O. Smith', 'Bradford White']],
        ['Tankless water heaters', ['Rinnai', 'Navien']],
        ['Piping', ['Uponor']],
    ],
    solar: [
        ['Solar panels', ['REC', 'Qcells', 'Panasonic']],
        ['Inverters', ['Enphase', 'SolarEdge']],
        ['Battery storage', ['Tesla Powerwall', 'Enphase IQ Battery']],
    ],
    'roof-insulation': [
        ['Insulation', ['Owens Corning', 'Johns Manville', 'CertainTeed', 'Knauf']],
    ],
    pools: [
        ['Pool equipment', ['Pentair', 'Hayward', 'Jandy']],
        ['Pool finishes', ['Pebble Tec']],
    ],
    pergolas: [
        ['Aluminum pergolas & louvered roofs', ['StruXure', 'Alumawood']],
        ['Composite pergolas', ['Trex']],
    ],
    driveways: [
        ['Pavers', ['Tremron', 'Belgard', 'Pavestone']],
        ['Ready-mix concrete', ['Cemex', 'Argos']],
    ],
    'accessory-dwelling-units': [
        ['Structural connectors', ['Simpson Strong-Tie']],
        ['Siding', ['James Hardie']],
        ['Impact windows & doors', ['PGT', 'CGI']],
        ['Roofing', ['GAF', 'Owens Corning']],
    ],
    flooring: [
        ['Luxury vinyl plank', ['COREtec', 'Shaw', 'Mohawk']],
        ['Porcelain & ceramic tile', ['Daltile', 'MSI']],
        ['Tile trim & membranes', ['Schluter-Systems']],
    ],
    stucco: [
        ['Stucco systems & finishes', ['Sto', 'Parex USA', 'Merlex']],
    ],
    drywall: [
        ['Drywall', ['USG Sheetrock', 'National Gypsum Gold Bond', 'CertainTeed', 'Georgia-Pacific']],
        ['Moisture-resistant board', ['Georgia-Pacific DensArmor', 'USG Mold Tough']],
    ],
    'kitchen-remodeling': [
        ['Cabinets', ['KraftMaid', 'Fabuwood', 'Wolf Home Products']],
        ['Countertops', ['Cambria', 'Silestone', 'Caesarstone', 'MSI']],
        ['Appliances', ['Sub-Zero', 'Wolf', 'Thermador', 'Bosch', 'KitchenAid', 'GE Café']],
        ['Faucets & sinks', ['Kohler', 'Moen', 'Delta']],
    ],
    'bathroom-remodeling': [
        ['Fixtures', ['Kohler', 'Moen', 'Delta', 'TOTO']],
        ['Shower waterproofing', ['Schluter-Systems', 'LATICRETE']],
        ['Tile', ['Daltile', 'MSI']],
    ],
    'general-contracting': [
        ['Structural connectors', ['Simpson Strong-Tie']],
        ['Impact windows & doors', ['PGT', 'CGI']],
        ['Roofing', ['GAF', 'Owens Corning', 'CertainTeed']],
        ['Siding', ['James Hardie']],
    ],
    'home-additions': [
        ['Framing & connectors', ['Weyerhaeuser', 'Simpson Strong-Tie']],
        ['Impact windows & doors', ['PGT', 'CGI']],
        ['Roofing', ['GAF', 'Owens Corning', 'CertainTeed']],
        ['Siding', ['James Hardie']],
    ],
    'commercial-construction': [
        ['Ceilings & wall systems', ['Armstrong', 'USG']],
        ['Commercial flooring', ['Mohawk Group', 'Daltile']],
        ['Storefront & impact glazing', ['PGT', 'CGI']],
    ],
    'concrete-foundations': [
        ['Ready-mix concrete', ['Cemex', 'Argos']],
        ['Repair & waterproofing', ['Sika']],
        ['Anchors & connectors', ['Simpson Strong-Tie']],
    ],
};

export const brandsFor = (slug) => serviceBrands[slug] || [];

// Unique brand names for a service, as schema.org Brand objects.
export const brandSchemaFor = (slug) => {
    const names = [...new Set(brandsFor(slug).flatMap(([, list]) => list))];
    return names.map((name) => ({ '@type': 'Brand', name }));
};
