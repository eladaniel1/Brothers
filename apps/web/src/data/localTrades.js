// The 10 trades that get a page in every city in localCities.js. Chosen from
// Ahrefs search volume and cost-per-click across Tampa, Sarasota, St.
// Petersburg, Clearwater, Bradenton and the surrounding cities (Oct 2026):
// AC repair, roofing, roof repair, plumbing, kitchen and bathroom remodeling,
// garage doors, electrical, windows and pools, then AC replacement, solar,
// epoxy garage floors, fencing and driveways.
//
// Each entry builds the city-specific copy for /services/<slug>/<city>/ from
// the city's real facts (permit office, coastal exposure, housing stock, HOAs),
// so no two pages read the same. `slug` must match a service in data/site.js.

const coastalExposure = (c) => (c.coastal ? `${c.name} homes near ${c.water}` : '');

export const localTrades = [
    {
        slug: 'ac-repair',
        name: 'AC Repair',
        phrase: 'AC repair',
        timeline: 'Most repairs are finished on the first visit once the part is on hand.',
        costDrivers: 'The failed part, refrigerant type, system age and access to the air handler.',
        permit: 'Most AC repairs do not need a permit; replacing the whole system does.',
        stormTie: 'Surge flooding and power surges can damage outdoor condensers and control boards. If your system was exposed to water or a lightning strike, have it checked before running it hard.',
        answer: (c) => `Brothers Remodelers provides air conditioning repair in ${c.name}, ${c.county}, through licensed HVAC technicians working under our Florida Certified General Contractor license. A technician diagnoses the system, explains what failed, and gives you a written repair price before any work starts, plus a replacement price when the system is old enough that the comparison matters.`,
        notes: (c) => [
            ['Power and surges', `${c.name} homes are served by ${c.power}. Lightning and storm-related surges are a common cause of failed AC control boards and capacitors, and a surge protector at the outdoor unit is inexpensive insurance.`],
            ['Humidity first', `In ${c.name} an AC runs most of the year and has to pull moisture as well as heat. A system that cools but does not dry the air leads to a clammy house and mold risk, so we check airflow and drainage, not just temperature.`],
            c.coastal
                ? ['Salt air on outdoor units', `${coastalExposure(c)} see faster corrosion on condenser coils and fan motors. We check coil condition on every call and recommend coatings or rinsing where salt exposure is high.`]
                : ['Drain lines and attic air handlers', `Many ${c.name} homes have air handlers in the attic or a garage closet, where a clogged condensate line can flood a ceiling. We clear the line and fit a float switch so a future clog shuts the system off first.`],
            ['Repair or replace', `${c.name} has ${c.housing.split(',')[0]}, and many AC systems in homes of that age are original or near the end of their life. If a repair costs a large share of a new system, we show you both prices side by side.`],
        ],
        faqs: (c) => [
            [`How fast can you repair an AC in ${c.name}?`, `We schedule a licensed technician as quickly as possible, and most repairs are finished on the first visit once the part is available.`],
            [`Why is my AC running but not cooling in ${c.name}?`, 'Common causes are a failed capacitor, a dirty coil or filter, a refrigerant leak or a frozen evaporator coil. The technician tests the system to find which one it is.'],
            [`Do I need a permit for AC work in ${c.name}?`, `Most repairs do not. A full system replacement needs a mechanical permit from ${c.permitOffice}, which we file.`],
            ['Should I repair or replace my AC?', 'If the system is newer and the repair is modest, repair it. If it is older, uses R-22 refrigerant or needs a compressor or coil, replacement is often the better value. We price both.'],
            [`Which AC brands do you service in ${c.name}?`, 'We service and replace Carrier, Trane, Lennox, Rheem, Goodman and Daikin systems, among others.'],
        ],
    },
    {
        slug: 'roofing',
        name: 'Roof Replacement',
        phrase: 'roof replacement',
        timeline: 'Most homes are re-roofed in 1–3 days of active work after materials arrive.',
        costDrivers: 'Roof size and pitch, material (shingle, tile or metal), deck repairs and wind-rated underlayment and edge metal.',
        permit: 'A roofing permit and inspections are required for every re-roof.',
        stormTie: 'Many roofs that came through those storms are now leaking or near the end of their life, and a replacement built to current wind code is the long-term fix.',
        answer: (c) => `Brothers Remodelers replaces shingle, tile and metal roofs in ${c.name}, ${c.county}, under one Florida Certified General Contractor license. We pull the re-roof permit from ${c.permitOffice}, inspect the deck after tear-off, install a sealed secondary water barrier and wind-rated edge metal, and pass the in-progress and final inspections.`,
        notes: (c) => [
            ['Wind rating for your address', `Florida Building Code sets wind-load requirements by location and exposure. We confirm the design wind speed for your ${c.name} address and specify the underlayment, fastening and edge metal to match.`],
            c.coastal
                ? ['Coastal exposure', `${coastalExposure(c)} face salt air and stronger wind exposure. Stainless or coated fasteners, sealed underlayment and corrosion-resistant flashing last longer here.`]
                : ['Shingle, tile or metal', `${c.name} has a mix of shingle and tile roofs. Tile lasts longer but weighs more; architectural shingles cost less upfront; metal handles wind and heat well. We price the options you are considering.`],
            c.hoaCommon
                ? ['HOA approval', `Many ${c.name} neighborhoods require architectural approval for roof color and material. We provide product data and samples for your HOA submission before ordering.`]
                : ['Insurance and roof age', 'Many Florida insurers ask about roof age and condition. A new roof with documented permits and inspections can make coverage easier to keep.'],
        ],
        faqs: (c) => [
            [`How long does a roof replacement take in ${c.name}?`, 'Most homes take 1–3 days of active work after materials arrive, plus time for permit approval and inspections.'],
            [`Do I need a permit to replace my roof in ${c.name}?`, `Yes. Re-roofing requires a permit from ${c.permitOffice}, with in-progress and final inspections. We file it and schedule the inspections.`],
            ['What roofing brands do you install?', 'GAF, Owens Corning, CertainTeed and TAMKO shingles, Eagle Roofing and Westlake Royal concrete tile, and standing-seam metal.'],
            ['Shingle or tile: which is better for a Florida home?', 'Tile lasts longer and handles heat well but costs more and weighs more; architectural shingles are the most economical. Both can meet Florida wind code when installed correctly.'],
            ['Can you tell me if I need a repair instead?', 'Yes. We inspect first and tell you in writing whether a repair or a full replacement makes more sense.'],
        ],
    },
    {
        slug: 'roof-repair',
        name: 'Roof Repair',
        phrase: 'roof repair',
        timeline: 'Most leak and storm repairs take one day once materials are on site.',
        costDrivers: 'Roof type and pitch, extent of damage, decking repair and matching materials.',
        permit: 'Small repairs often need no permit; larger repairs and re-roofing do.',
        stormTie: 'Lifted shingles, cracked tiles and loosened flashing from those storms often show up as leaks months later, during the next heavy rain.',
        answer: (c) => `Brothers Remodelers repairs roof leaks and storm damage on shingle, tile and metal roofs in ${c.name}, ${c.county}. We trace the leak to its source, photograph what we find, and give you a written repair estimate, or a replacement recommendation if a repair is not worth the money.`,
        notes: (c) => [
            ['Find the source, not the stain', `Most leaks in ${c.name} start at a flashing, pipe boot, valley or cracked tile, often feet away from the ceiling stain. We check the attic and roof together before quoting.`],
            ['Hurricane season', `Wind-driven rain from June through November finds every weak spot. Repairs made before the season cost far less than interior water damage after it.`],
            c.coastal
                ? ['Coastal wear', `${coastalExposure(c)} see faster corrosion of flashings and fasteners. We replace corroded metal with coated or stainless parts.`]
                : ['Repair vs. code upgrade', 'Florida Building Code limits how much of a roof can be repaired before that section must meet current code. We check your roof against the rule before recommending a repair.'],
        ],
        faqs: (c) => [
            [`How quickly can you fix a roof leak in ${c.name}?`, 'We inspect as soon as possible and can tarp an active leak to limit damage while the repair is scheduled.'],
            [`Do roof repairs need a permit in ${c.name}?`, `Small repairs often do not; larger repairs do. We confirm with ${c.permitOffice} and file where required.`],
            ['Can you repair a tile roof?', 'Yes. We reset or replace cracked and slipped tiles and check the underlayment beneath, which is what keeps a tile roof dry.'],
            ['Will the repair match my roof?', 'We match shingles and tile as closely as possible and tell you before the work if an exact match is not available.'],
            ['Do you work with insurance claims?', 'We provide photos, written findings and a line-item estimate you can share with your insurer. You file and manage your own claim.'],
        ],
    },
    {
        slug: 'plumbing',
        name: 'Plumbing',
        phrase: 'plumbing',
        timeline: 'Repairs are usually same-visit; repipes and water heater replacements take one to a few days.',
        costDrivers: 'Pipe material and access, slab work, fixture selection and permit requirements.',
        permit: 'Repipes, water heater replacements and new fixtures typically need a plumbing permit.',
        stormTie: 'Flooding can back up drains and damage water heaters and exposed piping, so homes that took on water should have the plumbing checked.',
        answer: (c) => `Brothers Remodelers handles plumbing repairs, repipes, water heater replacement and fixture installation in ${c.name}, ${c.county}, through licensed plumbers working under our Florida Certified General Contractor license. Permitted work is filed with ${c.permitOffice} and inspected.`,
        notes: (c) => [
            ['Water service', `Water in ${c.name} is supplied by ${c.waterUtility}. We coordinate shut-offs, meter-side work and any backflow requirements with the utility.`],
            ['Pipe materials by home age', `${c.name} has ${c.housing.split(',')[0]}. Depending on age, these homes may have galvanized steel, cast iron drains or polybutylene supply lines that are past their service life. We identify what you have before recommending a repair or repipe.`],
            ['Slab-on-grade homes', `Most ${c.name} homes are built on concrete slabs, so leaks and drain problems under the floor need careful locating before anyone cuts concrete.`],
            ['Water heaters and hard water', 'Florida well and municipal water can be hard on water heaters. Tankless units and water softeners are worth pricing when a heater fails.'],
        ],
        faqs: (c) => [
            [`Do you handle emergency plumbing in ${c.name}?`, 'We schedule licensed plumbers as quickly as possible for leaks and failures, and we can shut off and stabilize a leak while the repair is planned.'],
            [`Do I need a permit for plumbing work in ${c.name}?`, `Repipes, water heater replacements and new fixtures usually need a permit from ${c.permitOffice}. We file it.`],
            ['Should I repipe my house?', 'If you have polybutylene or corroded galvanized pipe, or repeat leaks, a repipe with PEX or copper is usually the long-term fix.'],
            ['Tank or tankless water heater?', 'Tankless saves space and provides continuous hot water; tank heaters cost less upfront. We price both.'],
            ['Which brands do you install?', 'Moen, Delta and Kohler fixtures; Rheem, A. O. Smith and Bradford White tank heaters; Rinnai and Navien tankless heaters.'],
        ],
    },
    {
        slug: 'kitchen-remodeling',
        name: 'Kitchen Remodeling',
        phrase: 'kitchen remodeling',
        timeline: 'Most full kitchen remodels take 6–12 weeks of construction after design and permits.',
        costDrivers: 'Layout changes, cabinetry, countertops, appliances and moving plumbing, gas or electrical.',
        permit: 'Kitchen remodels that change plumbing, electrical or walls need a building permit.',
        stormTie: 'Homes that took on water often need cabinets, drywall and flooring replaced, which is a chance to rebuild the kitchen properly, and above flood level where the rules require it.',
        answer: (c) => `Brothers Remodelers designs and builds kitchen remodels in ${c.name}, ${c.county}, under one Florida Certified General Contractor license. We handle layout, cabinetry, countertops, plumbing and electrical relocation, the permit from ${c.permitOffice}, and every inspection, with a line-item fixed-price proposal before work starts.`,
        notes: (c) => [
            ['What kitchens here need', `In ${c.housing}, the common projects are opening a closed kitchen to the living area, adding storage and an island, and updating dated wiring and plumbing behind the walls.`],
            c.coastal
                ? ['Flood zones and the 50% rule', `Some ${c.name} properties near ${c.water} sit in FEMA flood zones. A large remodel there can trigger the substantial improvement rule, so we check your flood zone before design.`]
                : ['Plumbing through the slab', `Moving a sink or island in a ${c.name} slab home means cutting and patching concrete. We plan relocations up front so they are priced, not discovered.`],
            c.hoaCommon
                ? ['HOA and condo rules', `Many ${c.name} communities set work hours, parking and dumpster rules. We schedule around them and handle the paperwork.`]
                : ['Living through the remodel', 'We set up a temporary kitchen area when needed and protect the rest of the house from dust.'],
        ],
        faqs: (c) => [
            [`How long does a kitchen remodel take in ${c.name}?`, 'Most full kitchen remodels take 6–12 weeks of construction after design, selections and permit approval.'],
            [`Do I need a permit to remodel my kitchen in ${c.name}?`, `If the work changes plumbing, electrical, gas or walls, yes. We file with ${c.permitOffice} and schedule inspections.`],
            ['How much does a kitchen remodel cost?', 'It depends on size, layout changes and finishes. After a walkthrough you get a line-item fixed-price proposal with allowances stated, so bids are easy to compare.'],
            ['Can you move the sink or add an island?', 'Yes. Relocating plumbing usually means cutting the slab, which we plan and price up front.'],
            ['Which cabinet and countertop brands do you use?', 'Cabinets from KraftMaid, Fabuwood and Wolf Home Products; countertops from Cambria, Silestone, Caesarstone and MSI.'],
        ],
    },
    {
        slug: 'bathroom-remodeling',
        name: 'Bathroom Remodeling',
        phrase: 'bathroom remodeling',
        timeline: 'Most full bathroom remodels take 3–6 weeks of construction after permits.',
        costDrivers: 'Shower or tub layout, waterproofing, tile, plumbing relocation and fixtures.',
        permit: 'Bathroom remodels that change plumbing, electrical or walls need a permit.',
        stormTie: 'Bathrooms in homes that took on water need wet walls, subfloors and fixtures checked, and rebuilding with bonded waterproofing keeps mold from coming back.',
        answer: (c) => `Brothers Remodelers rebuilds bathrooms in ${c.name}, ${c.county}, from the studs out: waterproofing behind the tile, ventilation vented outdoors, tub-to-shower conversions and curbless showers. Work is permitted with ${c.permitOffice} and built under one Florida Certified General Contractor license.`,
        notes: (c) => [
            ['Waterproofing behind the tile', `In ${c.name}'s humidity, what is behind the tile matters as much as the tile. We use bonded waterproofing systems in every shower, not just backer board.`],
            ['Tub-to-shower and aging in place', `Many ${c.name} homeowners replace tubs with walk-in or curbless showers, grab-bar blocking and wider doors so the bathroom works for the long term.`],
            ['Ventilation', 'An exhaust fan vented to the outside, sized to the room, keeps mold out of the ceiling and walls.'],
        ],
        faqs: (c) => [
            [`How long does a bathroom remodel take in ${c.name}?`, 'Most full bathroom remodels take 3–6 weeks of construction once the permit is approved and selections are made.'],
            [`Do I need a permit for a bathroom remodel in ${c.name}?`, `If plumbing, electrical or walls change, yes. We file with ${c.permitOffice}.`],
            ['Can you convert my tub to a walk-in shower?', 'Yes, including curbless showers with linear drains where the floor allows it.'],
            ['How do you prevent leaks and mold?', 'Bonded waterproofing membranes under the tile, a properly sloped shower pan and an exhaust fan vented outdoors.'],
            ['Which fixture brands do you install?', 'Kohler, Moen, Delta and TOTO fixtures, with Schluter-Systems and LATICRETE waterproofing.'],
        ],
    },
    {
        slug: 'garage-doors',
        name: 'Garage Doors',
        phrase: 'garage door',
        timeline: 'Most garage door replacements take one day once the door arrives.',
        costDrivers: 'Door size, wind and impact rating, insulation, opener and reinforcement.',
        permit: 'Garage door replacement generally needs a permit for wind-load compliance.',
        stormTie: 'Garage doors are one of the most common failure points in a hurricane, and a wind-rated replacement keeps wind pressure out of the house in the next storm.',
        answer: (c) => `Brothers Remodelers replaces and repairs garage doors and openers in ${c.name}, ${c.county}. Replacement doors are matched to the design wind pressure for your address, permitted with ${c.permitOffice}, and installed with the bracing and track the wind rating depends on.`,
        notes: (c) => [
            ['Wind load', `The garage door is the largest opening in most ${c.name} homes and a common failure point in hurricanes. A wind-rated door with proper reinforcement keeps wind pressure out of the house.`],
            c.coastal
                ? ['Impact rating near the coast', `${coastalExposure(c)} may be in wind-borne debris regions where openings must be impact-rated or protected. We confirm the requirement for your address.`]
                : ['Battery backup openers', 'Power often goes out after storms. A battery backup opener lets you get out without using the manual release.'],
            c.hoaCommon
                ? ['HOA style rules', `Many ${c.name} HOAs set garage door style and color. We provide specs for your approval request.`]
                : ['Springs and safety', 'Torsion springs are under high tension and should be replaced by a technician, in pairs, so the door stays balanced.'],
        ],
        faqs: (c) => [
            [`Do I need a permit to replace a garage door in ${c.name}?`, `Generally yes, because the door must meet the wind load for your location. We file with ${c.permitOffice}.`],
            ['Do I need an impact-rated garage door?', 'In wind-borne debris regions, openings must be impact-rated or protected. We confirm what applies to your address.'],
            ['Can you repair a broken spring?', 'Yes. We replace torsion springs in pairs and rebalance the door.'],
            ['How long does replacement take?', 'Most single garage door replacements are done in one day once the door arrives.'],
            ['Which brands do you install?', 'Clopay, Amarr, Wayne Dalton and C.H.I. doors, with LiftMaster, Chamberlain and Genie openers.'],
        ],
    },
    {
        slug: 'electrical',
        name: 'Electrical',
        phrase: 'electrical',
        timeline: 'Most single-scope jobs take one to two days; panel upgrades may need a utility appointment.',
        costDrivers: 'Panel and service size, wire runs and access, fixtures and utility coordination.',
        permit: 'Most electrical work beyond replacing a device needs a permit and inspection.',
        stormTie: 'Panels, outlets and wiring that were under water must be inspected or replaced before power is restored, and many homeowners added generator hookups after the long outages.',
        answer: (c) => `Brothers Remodelers provides panel upgrades, new circuits, lighting, EV chargers and generator hookups in ${c.name}, ${c.county}, through licensed electricians under our Florida Certified General Contractor license. Every permitted job is filed with ${c.permitOffice} and inspected.`,
        notes: (c) => [
            ['Utility coordination', `Power in ${c.name} is supplied by ${c.power}. Panel and service upgrades need a utility disconnect and reconnect, which we schedule with them as part of the job.`],
            ['Panels by home age', `${c.name} has ${c.housing.split(',')[0]}. Depending on age, these homes may have original or outdated panels that limit new circuits and can complicate insurance. We identify the panel type during the assessment.`],
            ['Lightning and surge', 'The Tampa Bay area has some of the highest lightning activity in the country. Whole-home surge protection at the panel protects appliances and electronics.'],
            ['Storm outages', `A generator inlet with an interlock, or a standby generator with a transfer switch, keeps a ${c.name} home running after a hurricane.`],
        ],
        faqs: (c) => [
            [`Do I need a permit for electrical work in ${c.name}?`, `Most work beyond replacing a device does. We file with ${c.permitOffice}.`],
            ['Who does the electrical work?', 'Licensed electricians, coordinated under our Florida Certified General Contractor license.'],
            ['Do I need a panel upgrade for an EV charger?', 'Not always. We run a load calculation on your panel first.'],
            ['Can you connect a generator?', 'Yes, with a code-required interlock or transfer switch so the generator cannot back-feed the utility.'],
            ['Which brands do you install?', 'Square D, Eaton and Siemens panels; Generac and Kohler standby generators; Tesla and ChargePoint EV chargers.'],
        ],
    },
    {
        slug: 'windows',
        name: 'Impact Windows',
        phrase: 'impact window',
        timeline: 'Most homes are installed in a few days once custom windows arrive; lead times vary by manufacturer.',
        costDrivers: 'Number and size of openings, impact rating, frame material, glass type and opening repairs.',
        permit: 'Window replacement requires a permit and inspection.',
        stormTie: 'Impact windows protect every opening from wind-borne debris without putting up shutters, which many homeowners decided they wanted after the 2024 season.',
        answer: (c) => `Brothers Remodelers replaces windows with impact-rated and energy-efficient units in ${c.name}, ${c.county}, installed to Florida wind code and energy requirements. We measure every opening, confirm the design pressure for your address, permit the job with ${c.permitOffice} and pass inspection.`,
        notes: (c) => [
            ['Design pressure for your address', `Each window must be rated for the wind pressure at its location on your ${c.name} home. Upper floors and corners need higher ratings.`],
            c.coastal
                ? ['Wind-borne debris regions', `${coastalExposure(c)} are often in wind-borne debris regions, where windows must be impact-rated or protected by approved shutters. Impact glass removes the need to put up shutters before every storm.`]
                : ['Energy savings', 'Low-E impact glass cuts solar heat gain, which lowers cooling costs in Florida summers.'],
            c.hoaCommon
                ? ['HOA approval', `Many ${c.name} communities review frame color and grid style. We provide product data for your submission.`]
                : ['Insurance discounts', 'Impact windows can qualify for wind-mitigation insurance credits. We provide the product approvals your inspector needs.'],
        ],
        faqs: (c) => [
            [`Do I need a permit to replace windows in ${c.name}?`, `Yes. We file with ${c.permitOffice} and schedule the inspection.`],
            ['Are impact windows required?', 'In wind-borne debris regions, openings must be impact-rated or protected by approved shutters. We confirm what applies to your address.'],
            ['Can impact windows lower my insurance?', 'They can qualify for wind-mitigation credits. Your insurer decides the discount based on an inspection.'],
            ['How long does window replacement take?', 'Installation usually takes a few days; manufacturing lead time is the longer part.'],
            ['Which window brands do you install?', 'PGT, CGI, WinDoor and ES Windows impact windows, plus Andersen, Pella and Marvin.'],
        ],
    },
    {
        slug: 'pools',
        name: 'Pools',
        phrase: 'pool',
        timeline: 'Most new pools take several months from permit to finish, depending on design and weather.',
        costDrivers: 'Pool size and shape, finish, decking, equipment, screen enclosure and site access.',
        permit: 'New pools need building, electrical and barrier inspections.',
        stormTie: 'Storms damaged many screen enclosures and pool equipment pads, and rebuilt enclosures must be engineered for current wind loads.',
        answer: (c) => `Brothers Remodelers builds and renovates pools and pool decks in ${c.name}, ${c.county}, coordinated under one Florida Certified General Contractor license. We handle design, the permit with ${c.permitOffice}, Florida pool barrier requirements, equipment, decking and screen enclosures.`,
        notes: (c) => [
            ['Pool barrier rules', 'Florida requires a barrier around residential pools, such as a fence, screen enclosure, alarms or a safety cover. We design the barrier into the project from the start.'],
            c.coastal
                ? ['High water tables', `Near ${c.water}, high groundwater affects excavation and the pool shell. We plan dewatering and hydrostatic relief where the site needs it.`]
                : ['Screen enclosures', `Most ${c.name} pools are screened to keep out leaves and insects. Enclosures must be engineered for wind load.`],
            c.hoaCommon
                ? ['HOA and setbacks', `${c.name} communities often set rules on pool location, fencing and equipment noise. We handle the approval package.`]
                : ['Equipment and energy', 'Variable-speed pumps and heat pumps cut operating costs and are worth pricing with the build.'],
        ],
        faqs: (c) => [
            [`How long does it take to build a pool in ${c.name}?`, 'Most new pools take several months from permit to finish, depending on design and weather.'],
            [`What permits does a pool need in ${c.name}?`, `New pools need building, electrical and barrier inspections through ${c.permitOffice}. We handle them.`],
            ['Do I need a screen enclosure?', 'Not always, but you need a code-compliant barrier. A screen enclosure is the most common choice in Florida.'],
            ['Can you renovate my existing pool?', 'Yes: resurfacing, new decking, equipment upgrades and enclosure replacement.'],
            ['Which equipment brands do you install?', 'Pentair, Hayward and Jandy equipment, with Pebble Tec finishes.'],
        ],
    },
    {
        slug: 'hvac',
        name: 'AC Replacement',
        phrase: 'AC replacement',
        timeline: 'Most system replacements take one to two days once equipment is on site.',
        costDrivers: 'System size from a load calculation, efficiency rating, ductwork condition, air handler location and electrical work.',
        permit: 'A full system replacement needs a mechanical permit and inspection.',
        stormTie: 'Systems that sat in floodwater or took a lightning surge often fail months later, and many owners replace them before the next cooling season rather than risk a summer breakdown.',
        answer: (c) => `Brothers Remodelers replaces central air conditioning and heat pump systems in ${c.name}, ${c.county}, through licensed HVAC contractors under our Florida Certified General Contractor license. We size the new system with a load calculation, check the ductwork, file the mechanical permit with ${c.permitOffice}, and pass the final inspection.`,
        notes: (c) => [
            ['Sized by load calculation', `Bigger is not better in ${c.name}'s humidity. An oversized system short-cycles and leaves the air damp, so we size every replacement from a load calculation for your home.`],
            ['Ductwork matters', `In ${c.housing.split(',')[0]}, original ducts are often leaky or undersized. Sealing or replacing them can matter as much as the new equipment.`],
            c.coastal
                ? ['Coastal corrosion', `${c.name} homes near ${c.water} wear out condenser coils faster. Coated coils and corrosion-resistant cabinets are worth pricing.`]
                : ['Efficiency and refrigerant', 'New systems use newer, lower-impact refrigerants and must meet current federal efficiency minimums for the Southeast. We explain the trade-off between upfront cost and operating cost.'],
            ['Utility service', `${c.name} homes are served by ${c.power}. Larger equipment may need a dedicated circuit or disconnect, which we include in the price.`],
        ],
        faqs: (c) => [
            [`How long does AC replacement take in ${c.name}?`, 'Most replacements take one to two days once the equipment is on site, plus the mechanical permit inspection.'],
            [`Do I need a permit to replace my AC in ${c.name}?`, `Yes. A system replacement needs a mechanical permit from ${c.permitOffice}. We file it and schedule the inspection.`],
            ['How do I know what size AC I need?', 'From a load calculation that accounts for your home’s size, insulation, windows and orientation, not from the size of the old unit.'],
            ['How long does an AC last in Florida?', 'Florida systems run most of the year, so many last 10 to 15 years with maintenance. Coastal exposure and poor drainage shorten that.'],
            ['Which AC brands do you install?', 'Carrier, Trane, Lennox, Rheem, Goodman and Daikin, with ecobee and Honeywell Home thermostats.'],
        ],
    },
    {
        slug: 'solar',
        name: 'Solar',
        phrase: 'solar',
        timeline: 'Installation usually takes one to three days; permitting and utility interconnection add several weeks.',
        costDrivers: 'System size, panel and inverter choice, battery storage, roof condition and electrical upgrades.',
        permit: 'Solar needs building and electrical permits plus utility interconnection approval.',
        stormTie: 'Many homeowners added battery storage after the long 2024 outages, so the house keeps essential circuits running when the grid is down.',
        answer: (c) => `Brothers Remodelers designs and installs rooftop solar and battery storage in ${c.name}, ${c.county}, coordinated under our Florida Certified General Contractor license with licensed electrical work. We check the roof first, size the system to your usage, file permits with ${c.permitOffice} and handle interconnection with ${c.power}.`,
        notes: (c) => [
            ['Roof first', `Panels last 25 years or more, so the roof under them should too. On older ${c.name} roofs we price a re-roof with the solar so the panels do not have to come off later.`],
            ['Utility interconnection', `${c.name} homes are served by ${c.power}. The utility must approve the interconnection before the system is turned on, and we handle the application.`],
            ['Wind-rated mounting', 'Racking and attachments must be engineered for Florida wind loads and installed with sealed roof penetrations.'],
        ],
        faqs: (c) => [
            [`Do I need a permit for solar in ${c.name}?`, `Yes: building and electrical permits from ${c.permitOffice}, plus interconnection approval from ${c.power}.`],
            ['Should I replace my roof before installing solar?', 'If the roof has less than about ten years left, usually yes. Removing and reinstalling panels later adds cost.'],
            ['Do I need a battery?', 'Not required, but a battery lets you keep essential circuits running during outages. Standard grid-tied systems shut off when the grid is down.'],
            ['How long does installation take?', 'One to three days on the roof; permits and utility approval take longer.'],
            ['Which solar brands do you install?', 'REC, Qcells and Panasonic panels, Enphase and SolarEdge inverters, and Tesla Powerwall and Enphase batteries.'],
        ],
    },
    {
        slug: 'epoxy-flooring',
        name: 'Epoxy Garage Floors',
        phrase: 'epoxy garage floor',
        timeline: 'Most two-car garages are coated in one to two days, plus cure time.',
        costDrivers: 'Floor area, concrete condition, crack repair, moisture mitigation and the coating system.',
        permit: 'Floor coatings usually do not need a permit.',
        stormTie: 'Garages that took on water need the slab cleaned, dried and moisture-tested before any coating goes down.',
        answer: (c) => `Brothers Remodelers installs epoxy and polyaspartic garage floor coatings in ${c.name}, ${c.county}. We diamond-grind and moisture-test the slab, repair cracks, and apply a flake or solid-color system built to resist hot-tire peeling in Florida heat.`,
        notes: (c) => [
            ['Slab moisture', `${c.name} slabs sit on grade and can push moisture up through the concrete, a common cause of peeling. We test before quoting and use a moisture-mitigating primer when needed.`],
            ['Hot tires and UV', 'Florida heat makes tires hot enough to lift weak coatings, and sun through an open garage door yellows plain epoxy. A UV-stable polyaspartic topcoat handles both.'],
            c.hoaCommon
                ? ['Garage as living space', `In ${c.name}'s newer communities many garages double as gyms and workshops. A coated floor is easier to clean and brighter.`]
                : ['Older slabs', `Older ${c.name} garages often have cracks, oil stains and old paint that must be ground off before coating.`],
        ],
        faqs: (c) => [
            [`How long does an epoxy garage floor take in ${c.name}?`, 'Most two-car garages take one to two days, then the floor cures before vehicles go back in.'],
            ['Why do some epoxy floors peel?', 'Poor surface prep, moisture coming through the slab or a thin coating. We diamond-grind and moisture-test to prevent all three.'],
            ['Epoxy or polyaspartic?', 'Many systems use both: an epoxy base for bond and build, and a polyaspartic topcoat for UV and abrasion resistance.'],
            ['Is a coated floor slippery?', 'A flake finish with the right topcoat has good grip, and slip-resistant additives are available.'],
            ['Do I need a permit?', 'Floor coatings usually do not need a permit.'],
        ],
    },
    {
        slug: 'fencing',
        name: 'Fencing',
        phrase: 'fence',
        timeline: 'Most residential fences are installed in one to three days after the permit is approved.',
        costDrivers: 'Linear footage, material, height, gates and removal of the old fence.',
        permit: 'Most fences need a permit, and pool fences must meet Florida barrier rules.',
        stormTie: 'Fences were among the most common storm losses in 2024, and replacements set in concrete with wind-rated panels hold up better next time.',
        answer: (c) => `Brothers Remodelers installs vinyl, aluminum, wood and composite fences, including pool barrier fencing, in ${c.name}, ${c.county}. We review your survey, file the fence permit with ${c.permitOffice}, set posts in concrete and handle HOA paperwork where needed.`,
        notes: (c) => [
            ['Permit and survey', `Fence permits in ${c.name} are filed with ${c.permitOffice}, and the fence must sit inside your property line and setbacks. We work from your survey.`],
            c.hoaCommon
                ? ['HOA rules', `Most ${c.name} HOAs set fence height, material and color, and many require approval before installation. We prepare the submission.`]
                : ['Material choice', 'Vinyl and aluminum hold up best to Florida sun and moisture with little maintenance; wood costs less upfront but needs sealing.'],
            ['Pool barriers', 'A fence that serves as a pool barrier must meet Florida height, gap and self-closing, self-latching gate rules.'],
        ],
        faqs: (c) => [
            [`Do I need a permit for a fence in ${c.name}?`, `Usually yes. We file with ${c.permitOffice}.`],
            [`How tall can a fence be in ${c.name}?`, 'Limits depend on local code, front or back yard, and your HOA. We check before you choose.'],
            ['What is the best fence for a pool?', 'Aluminum is the most common choice because it meets barrier rules and resists rust.'],
            ['How long does installation take?', 'One to three days once the permit is approved.'],
            ['Which brands do you install?', 'Bufftech and Lakeland vinyl, Jerith and Ameristar aluminum, and Trex composite fencing.'],
        ],
    },
    {
        slug: 'driveways',
        name: 'Driveways & Pavers',
        phrase: 'driveway and paver',
        timeline: 'Most residential driveways take a few days to a week, plus curing time for concrete.',
        costDrivers: 'Area, material (concrete, pavers or asphalt), removal of the old driveway, sub-base and drainage.',
        permit: 'Driveway replacement usually needs a permit, especially where it meets the street.',
        stormTie: 'Heavy storm rain exposes poor drainage and washed-out sub-bases, and a rebuilt driveway is the time to fix grading so water runs away from the house.',
        answer: (c) => `Brothers Remodelers installs and replaces concrete and paver driveways, walkways and pool decks in ${c.name}, ${c.county}. We remove the old surface, build a compacted sub-base, set the drainage, and pull the permit for any work where the driveway meets the street.`,
        notes: (c) => [
            ['Sub-base and drainage', `${c.name}'s sandy soil and summer downpours undermine driveways built on a thin base. A compacted sub-base and proper slope prevent settling and standing water.`],
            ['Pavers or concrete', 'Pavers flex with the ground and individual pieces can be replaced; concrete costs less per square foot. We price both.'],
            c.hoaCommon
                ? ['HOA approval', `Many ${c.name} communities set paver colors and patterns. We provide samples for approval.`]
                : ['Right-of-way work', `The apron where the driveway meets the street is often in the public right-of-way and needs a permit from ${c.permitOffice}.`],
        ],
        faqs: (c) => [
            [`Do I need a permit for a new driveway in ${c.name}?`, `Usually, especially for work at the street. We file with ${c.permitOffice}.`],
            ['Pavers or concrete: which is better?', 'Pavers cost more but look better longer and are easy to repair; concrete costs less upfront. Both work well with a proper sub-base.'],
            ['How long does a driveway take?', 'A few days to a week, plus curing time before parking on new concrete.'],
            ['Can you add a paver pool deck or walkway?', 'Yes, matched to the driveway.'],
            ['Which paver brands do you install?', 'Tremron, Belgard and Pavestone.'],
        ],
    },
];

export const getLocalTrade = (slug) => localTrades.find((t) => t.slug === slug);
