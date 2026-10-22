// Enhancement data for the 14 additional service pages, used by ServiceDetailPage
// to match the content depth of the four dedicated optimized service pages
// (Kitchen, Bathroom, General Contracting, Home Additions).
//
// Each entry adds: costFactors (service-specific), timeline, permitTypes, and a
// service-specific "why hire us" trust card. These are looked up by slug; the
// original six core services have no entry here, so their rendering is unchanged.
//
// Business-accuracy note: Brothers Remodelers holds Florida Certified General
// Contractor license CGC1535875. Specialty trades (plumbing, electrical, HVAC,
// solar, pool shell) are coordinated through licensed subcontractors under that
// license. No prices, warranties beyond the documented two-year workmanship
// warranty, or unverified credentials are stated here.

import { Droplets, FileCheck, Grid, Hammer, Home, Layers, Ruler, Sun, Thermometer, Waves, Wrench } from 'lucide-react';

export const serviceEnhancements = {
    roofing: {
        timeline: 'Most residential roof replacements are completed in 1–3 days of active work after materials arrive.',
        permitTypes: 'Roofing permit and final inspection, filed with the city or county.',
        costDrivers: 'Roof size and pitch, material choice, deck condition, underlayment and wind-rated edge metal.',
        costFactors: [
            ['Roof size and pitch', 'A larger roof and a steeper pitch mean more material and slower, safety-constrained installation. We measure the actual square footage and pitch before pricing.'],
            ['Material choice', 'Architectural shingles are the most cost-effective; standing-seam metal and concrete or clay tile cost more and last longer. Tile also requires a structure rated for the added weight, which we evaluate before pricing.'],
            ['Deck condition', 'Rotting or damaged decking found during tear-off must be replaced before the underlayment goes down. We inspect the deck and flag any repair before the work continues.'],
            ['Underlayment and secondary water barrier', 'A self-adhered secondary water barrier over the deck adds storm protection and is required in the High-Velocity Hurricane Zone. It is a meaningful line item we recommend across the Gulf Coast.'],
            ['Wind-rated fasteners and edge metal', 'Florida Building Code requires the roofing system — fasteners, underlayment and edge metal — to be rated for your wind zone. The edge metal detail is a common storm failure point and is part of the assembly.'],
            ['Permits and inspections', 'A roof replacement requires a permit and a final inspection. Permit fees vary by city and county and are part of the written estimate.'],
        ],
        whyIcon: Layers,
        whyTitle: 'Wind-rated systems',
        whyText: 'Roofing assemblies engineered for your wind zone, with documented deck and flashing prep.',
    },
    windows: {
        timeline: 'Most residential window replacements are completed in 1–3 days of active work after windows are delivered.',
        permitTypes: 'Window/building permit and inspection, filed with the city or county.',
        costDrivers: 'Number of windows, impact-rated vs. standard glazing, frame prep and flashing, energy-code glass.',
        costFactors: [
            ['Number of windows', 'Cost scales directly with the number of openings replaced. Each window is custom-sized to its rough opening, so the count is the baseline for material and labor.'],
            ['Impact-rated vs. standard glazing', 'Impact-rated laminated glass costs more than standard glass but is required in wind-borne debris regions unless other approved storm protection is in place. Whether your address is in that region drives the glazing and the cost.'],
            ['Window style and material', 'Single-hung, double-hung, casement, sliding and fixed windows each carry different costs, as do vinyl, aluminum and composite frames. Style and frame are chosen against the look of the home and the budget.'],
            ['Frame prep and flashing', 'Removing the old window and prepping the rough opening — repairing rot, installing flashing and sealing the threshold — is the labor that prevents leaks. Skipping it is what causes most window failures.'],
            ['Energy-code glazing', 'Low-E coatings and insulated glass reduce heat gain and must meet Florida energy code. Higher-performance glass costs more but can lower cooling load.'],
            ['Permits and inspections', 'Window replacement generally requires a permit and inspection. Permit fees vary by city and county and are part of the written estimate.'],
        ],
        whyIcon: Droplets,
        whyTitle: 'Flashing first',
        whyText: 'Windows flashed to direct water out of the wall cavity, not just set in the opening.',
    },
    doors: {
        timeline: 'A single entry door is usually a one-day installation; multiple doors or patio doors take longer.',
        permitTypes: 'Building permit and inspection for exterior doors, filed with the city or county.',
        costDrivers: 'Impact-rated vs. standard, door material and style, frame prep, hardware, opening changes.',
        costFactors: [
            ['Impact-rated vs. standard', 'Impact-rated entry and patio doors resist wind-borne debris and forced entry, and are required in wind-borne debris regions unless other approved storm protection is in place. The glazing rating is a major cost driver.'],
            ['Door material and style', 'Fiberglass, steel and wood doors carry different price points, as do French doors, sliding patio doors and custom entry systems. Material is chosen against exposure, style and budget.'],
            ['Frame prep and threshold', 'A door that does not seal fails in a Florida storm. Frame repair, a properly flashed threshold and weatherstripping are the labor that keeps wind-driven rain outside.'],
            ['Hardware and smart locks', 'Hardware, locksets and smart-lock prep add to the line item. We prep for and install the hardware you choose as part of the door installation.'],
            ['Enlarging or moving an opening', 'Changing an opening in a concrete block wall typically needs an engineered lintel or beam. That structural work is priced up front from the drawings, never as a surprise.'],
            ['Permits and inspections', 'Exterior door replacement generally requires a permit and inspection; interior doors usually do not. Permit fees vary by city and county and are part of the written estimate.'],
        ],
        whyIcon: Wrench,
        whyTitle: 'Sealed & flashed',
        whyText: 'Thresholds and frames flashed so wind-driven rain stays outside.',
    },
    hvac: {
        timeline: 'A straightforward HVAC change-out is usually 1–2 days; ductwork modification adds time.',
        permitTypes: 'Mechanical permit and inspection, filed with the city or county.',
        costDrivers: 'System size and efficiency, ductwork modification, equipment features, zoning, coastal protection.',
        costFactors: [
            ['System size and efficiency', 'Equipment is sized to a Manual J cooling load calculation, not a rule of thumb. Higher-efficiency systems cost more up front but can reduce cooling run time. Proper sizing — not oversizing — is what controls Florida humidity.'],
            ['Ductwork modification and sealing', 'Leaky or undersized ducts waste cooled air. Sealing, re-routing or right-sizing ductwork is often the highest-value part of an HVAC project and is priced from the existing duct layout.'],
            ['Equipment brand and features', 'Air handler and condenser brand, capacity, variable-speed blowers and humidity control features all affect the equipment line item. We coordinate the equipment with the licensed mechanical subcontractor.'],
            ['Zoning and thermostats', 'Zoning systems and programmable or smart thermostats let you condition only the spaces in use. They add controls cost but can lower run time in a Florida climate.'],
            ['Coastal corrosion protection', 'Coastal homes in Pinellas, Manatee and Sarasota see salt exposure that shortens outdoor equipment life. Coated coils and placement are a cost consideration on the coast.'],
            ['Permits and inspections', 'HVAC replacement requires a mechanical permit and inspection. Permit fees vary by city and county and are part of the written estimate.'],
        ],
        whyIcon: Ruler,
        whyTitle: 'Right-sized systems',
        whyText: 'Cooling load calculations instead of rule-of-thumb sizing that short-cycles and leaves a home clammy.',
    },
    plumbing: {
        timeline: 'A whole-home repipe typically takes several days, depending on home size and wall and slab access.',
        permitTypes: 'Plumbing permit and inspection, filed with the city or county.',
        costDrivers: 'Scope (repipes vs. reroute vs. fixtures), slab trenching, pipe material, fixtures moved, water heater.',
        costFactors: [
            ['Scope of work', 'A whole-home repipe, a single fixture reroute or a fixture swap are very different scopes. The baseline is set by how much supply and drain line is replaced or rerouted.'],
            ['Slab trenching and patching', 'Most Florida homes sit on a concrete slab, so moving a fixture means cutting and trenching the slab, then patching it. The further the fixtures move, the more trenching is required — we plan and price this before demolition.'],
            ['Pipe material', 'PEX and copper are the standard replacement materials for aging galvanized or polybutylene lines. Material choice affects the line item and the long-term performance of the system.'],
            ['Number of fixtures moved', 'Each fixture that moves — sink, toilet, shower, tub — adds supply and drain reroutes. Keeping fixtures in place is the single biggest way to control a plumbing budget.'],
            ['Water heater replacement', 'A standard tank or tankless water heater replacement adds equipment, plumbing and sometimes electrical or gas work. We coordinate it with the rest of the scope.'],
            ['Permits and inspections', 'Plumbing work that moves or replaces supply or drain lines requires a permit and inspection. Permit fees vary by city and county and are part of the written estimate.'],
        ],
        whyIcon: FileCheck,
        whyTitle: 'Slab work priced up front',
        whyText: 'Trenching and patching planned and priced before demolition, never as a surprise change order.',
    },
    solar: {
        timeline: 'Active installation is usually a few days; permitting, utility interconnection and inspection extend the timeline.',
        permitTypes: 'Building and electrical permits, plus a utility interconnection agreement.',
        costDrivers: 'System size, roof condition, panel and inverter type, battery backup, panel upgrade, interconnection.',
        costFactors: [
            ['System size (kW)', 'Cost scales with the size of the array in kilowatts, which is driven by your usage, roof orientation and available surface area. We size the system to the load and the roof, not to a sales target.'],
            ['Roof condition and replacement', 'A solar array lasts decades, so it should sit on a roof with comparable remaining life. If the roof is near end of life, replacing it first avoids removing and reinstalling the array later.'],
            ['Panel and inverter type', 'Panel efficiency, brand and the inverter strategy — string inverters, microinverters or optimizers — all affect cost and output. The right choice depends on roof layout and shading.'],
            ['Battery backup', 'Battery storage keeps critical loads running during a Florida power outage. Batteries add meaningful cost and require coordinated electrical work, sized to the loads you want to back up.'],
            ['Electrical panel upgrade', 'If the existing electrical panel cannot accept the interconnection, an upgrade is required. We coordinate that work with licensed electrical subcontractors and price it up front.'],
            ['Permits and utility interconnection', 'Grid-tied solar requires building and electrical permits and a utility interconnection agreement. We handle the filings and coordinate the utility so the system can be energized.'],
        ],
        whyIcon: Sun,
        whyTitle: 'Roof-first approach',
        whyText: 'Roof structure inspected before the array goes up, so the system performs for its full life.',
    },
    'roof-insulation': {
        timeline: 'Most attic insulation and ventilation upgrades are completed in 1–2 days of active work.',
        permitTypes: 'Permit where required; some insulation and air-sealing work does not require one.',
        costDrivers: 'Existing R-value, insulation type, radiant barrier, air sealing, ventilation.',
        costFactors: [
            ['Existing R-value and attic access', 'An older attic with little insulation and poor access costs more to bring to code. We measure the existing R-value and confirm access before pricing.'],
            ['Insulation type', 'Blown-in fiberglass or cellulose is the most cost-effective way to reach the code R-value. Closed- or open-cell spray foam at the roof deck costs more but conditions the attic and seals air leaks.'],
            ['Radiant barrier', 'A radiant barrier under the roof deck reflects heat away from the attic and lowers cooling load. It is an add-on line item we recommend where the attic runs hot.'],
            ['Air sealing', 'Penetrations, top plates and gaps should be air-sealed before insulation is added. Skipping this step lets conditioned air escape into the attic and undermines the upgrade.'],
            ['Ventilation upgrades', 'Balanced intake and exhaust ventilation removes hot, humid air and extends roof and equipment life. Adding or balancing vents is a separate line item.'],
            ['Permits and inspections', 'Some insulation and air-sealing work requires a permit and inspection; other work does not. We confirm what applies to your project and file where required.'],
        ],
        whyIcon: Thermometer,
        whyTitle: 'Code R-value',
        whyText: 'Insulation brought to Florida energy code R-value, with air sealing done first.',
    },
    pools: {
        timeline: 'A new pool typically takes several weeks to a few months from excavation to fill.',
        permitTypes: 'Building, plumbing and electrical permits, plus a final barrier inspection before fill.',
        costDrivers: 'Pool size and shape, shell type, deck and coping, plumbing and electrical, safety barriers, enclosure.',
        costFactors: [
            ['Pool size and shape', 'Cost scales with the surface area and perimeter of the pool. A larger or freeform shape means more excavation, shotcrete, tile and finish material.'],
            ['Shell type', 'A concrete (gunite) pool is the most durable and customizable option and is built on site. The shell is the structural backbone of the project and a major line item.'],
            ['Deck and coping material', 'Concrete, paver and stone decks each carry different costs, as does the coping that edges the pool. The deck is often a large share of the budget and must drain properly.'],
            ['Plumbing and electrical', 'Pool plumbing, pumps, filtration and the required electrical bonding are installed by licensed subcontractors. Equipment selection and the number of returns and drains affect the line item.'],
            ['Safety barriers and enclosure', 'Florida Building Code requires a code-compliant barrier — fence, screen enclosure or approved cover — inspected before the pool can be filled. The barrier is part of the scope, not an afterthought.'],
            ['Permits and inspections', 'A residential pool requires a building permit plus plumbing and electrical permits, and a final barrier inspection. Fees vary by city and county and are part of the written estimate.'],
        ],
        whyIcon: Waves,
        whyTitle: 'Code-compliant barriers',
        whyText: 'Safety barriers included and inspected before the pool is filled, as Florida code requires.',
    },
    pergolas: {
        timeline: 'A typical residential pergola is built in 1–2 weeks after materials and permits are in place.',
        permitTypes: 'Permit where required; larger or attached pergolas often need one.',
        costDrivers: 'Size and attachment, material, footings and anchoring, shade accessories, finish.',
        costFactors: [
            ['Size and configuration', 'Cost scales with the footprint and whether the pergola is attached to the home or freestanding. An attached pergola ties into the home’s structure and needs flashing; a freestanding one needs independent footings.'],
            ['Material choice', 'Pressure-treated wood is cost-effective and traditional; cedar, composite and aluminum options resist rot and insects and need less upkeep in a humid climate but cost more.'],
            ['Footings and wind anchoring', 'A pergola is a sail in a Florida storm. Posts must be anchored to engineered footings sized for the wind zone, which we confirm for your address. Proper anchoring is the detail that matters most.'],
            ['Shade and accessories', 'Adjustable slats, screens, ceiling fans and lighting turn a pergola into a usable outdoor room. Each accessory adds to the line item and may require an electrical permit.'],
            ['Finish', 'Painting or staining a wood pergola is a separate step, as is sealing to protect against Florida humidity and UV. Composite and aluminum options reduce ongoing finish cost.'],
            ['Permits and inspections', 'Larger or attached pergolas often require a permit; small freestanding structures may not. We confirm what applies and file where required.'],
        ],
        whyIcon: Hammer,
        whyTitle: 'Wind-code anchoring',
        whyText: 'Posts anchored to engineered footings sized for your wind zone, so the structure stands up to storms.',
    },
    driveways: {
        timeline: 'A typical residential driveway is completed in a few days, plus curing time before it can be driven on.',
        permitTypes: 'Permit where required, especially where the driveway meets the right-of-way.',
        costDrivers: 'Size and square footage, surface material, sub-base and drainage, reinforcement, aprons.',
        costFactors: [
            ['Size and square footage', 'Cost scales with the area replaced or installed. A longer or wider driveway means more excavation, base material and surface — square footage is the baseline.'],
            ['Surface material', 'Concrete is durable and low-maintenance, pavers offer a decorative look, and asphalt is cost-effective. Each surface carries different material and labor costs and a different maintenance profile.'],
            ['Sub-base and drainage', 'Florida sandy soils and heavy rain make sub-base compaction and drainage the difference between a driveway that lasts and one that cracks. Grading and drainage are priced into the base work, not added later.'],
            ['Reinforcement and control joints', 'Concrete driveways need reinforcement and properly placed control joints to manage thermal movement and prevent cracking. Skipping these is what causes most driveway failure.'],
            ['Extensions and aprons', 'Widening a driveway or replacing the apron at the right-of-way often requires a permit and must meet municipal standards. We confirm what applies to your address.'],
            ['Permits and inspections', 'A full replacement or extension often requires a permit, especially at the right-of-way. Fees vary by city and county and are part of the written estimate.'],
        ],
        whyIcon: Grid,
        whyTitle: 'Sub-base & drainage',
        whyText: 'Sub-base compaction and drainage that prevent cracking, not just a surface pour.',
    },
    'accessory-dwelling-units': {
        timeline: 'A detached ADU typically takes several months from permit approval to closeout.',
        permitTypes: 'Building, plumbing, electrical and mechanical permits, often with zoning review.',
        costDrivers: 'Zoning and setbacks, foundation and structure, size and layout, rough-in, utility connections.',
        costFactors: [
            ['Zoning and setbacks', 'Whether an ADU is allowed, and how large it can be, depends on local zoning. We run a zoning analysis for your address before you commit to a scope, so you do not design something that cannot be permitted.'],
            ['Foundation and structure', 'A detached ADU is a new structure built to Florida wind-load requirements, with an engineered foundation, framing and tie-downs. Soil conditions and flood-zone elevation affect the foundation design and cost.'],
            ['Size and layout', 'A studio, one-bedroom or two-bedroom layout scales the cost. More finished square footage means more framing, insulation, drywall, flooring and finish.'],
            ['Mechanical, plumbing and electrical rough-in', 'An ADU needs its own HVAC, plumbing and electrical service. Each system is roughed in by licensed subcontractors and inspected, and the scope is priced from the engineered drawings.'],
            ['Utility connections', 'Water, sewer or septic, electrical and mechanical service must be extended or upgraded to serve the unit. Utility upgrades are part of the scope and the estimate, priced up front.'],
            ['Permits and inspections', 'An ADU requires a building permit plus plumbing, electrical and mechanical permits, and often a zoning review. Fees vary by city and county and are part of the written estimate.'],
        ],
        whyIcon: Home,
        whyTitle: 'Permitted & inspected',
        whyText: 'Full permit set and inspections, from zoning review through final sign-off.',
    },
    flooring: {
        timeline: 'A single room is usually 1–2 days; a whole home takes longer, plus acclimation time for wood products.',
        permitTypes: 'Flooring replacement rarely requires a permit on its own.',
        costDrivers: 'Square footage, material, moisture protection and subfloor prep, removal, transitions.',
        costFactors: [
            ['Square footage', 'Cost scales with the area installed. A whole-home floor costs a fraction per room of a single-room install, but the total is driven by finished square footage.'],
            ['Material choice', 'Tile and luxury vinyl plank are the most popular Florida floors. Natural stone and solid or engineered wood cost more; laminate is the lowest-cost wood look but is more sensitive to moisture.'],
            ['Moisture protection and subfloor prep', 'Florida slabs wick moisture, so a moisture test and barrier or crack-isolation membrane are standard on our installs. Subfloor leveling and prep are the labor that prevents buckling — not the flooring itself.'],
            ['Removal of old flooring', 'Tearing out old flooring, adhesive and underlayment is a separate line item. Asbestos-era flooring or stubborn adhesive can add removal cost, which we flag during the estimate.'],
            ['Transitions and trim', 'Baseboards, shoe mould and transitions between rooms and floor types finish the install. Matching new trim to existing trim and floor heights is part of the scope.'],
            ['Permits and inspections', 'Flooring replacement usually does not require a permit on its own. When it is part of a larger permitted remodel, it is included in that permit.'],
        ],
        whyIcon: Layers,
        whyTitle: 'Moisture protection',
        whyText: 'Moisture barriers and subfloor prep suited to Florida slab construction.',
    },
    stucco: {
        timeline: 'Small repairs take a day or two; a full stucco installation takes longer as each coat cures.',
        permitTypes: 'Permit typically required for full installation; small repairs usually do not need one.',
        costDrivers: 'Square footage and height, stucco system, repair vs. resurfacing, moisture barrier, finish.',
        costFactors: [
            ['Square footage and wall height', 'Cost scales with the area of wall covered and the height of the work. Taller walls require lifts or scaffolding, which adds labor and equipment.'],
            ['Stucco system', 'A traditional three-coat hardcoat stucco system over a moisture barrier and lath is durable and breathable. Synthetic EIFS systems behave differently with water, and the repair approach depends on which is on your home.'],
            ['Repair vs. full resurfacing', 'Targeted crack repair and color matching cost a fraction of a full resurface. We tell you honestly when a repair is enough and when the wall needs resurfacing.'],
            ['Moisture barrier and flashing', 'A proper moisture barrier behind the stucco, with weep screeds at the bottom and flashing at openings, lets water drain out. This detailing is what prevents most stucco failure and is part of the assembly.'],
            ['Color and texture matching', 'Matching a new finish or repair to an existing wall is labor-intensive and not always perfect on an older wall. We set expectations at the estimate.'],
            ['Permits and inspections', 'Full stucco installation typically requires a permit; small repairs usually do not. Fees vary by city and county and are part of the written estimate.'],
        ],
        whyIcon: Droplets,
        whyTitle: 'Moisture-managed',
        whyText: 'Water-resistive barrier and weep screeds behind the stucco, not just the finish coat.',
    },
    drywall: {
        timeline: 'Small repairs take a day or two while each coat dries; full rooms take longer.',
        permitTypes: 'Small repairs usually need no permit; larger replacement is often part of a building permit.',
        costDrivers: 'Square footage, board type, water-damage removal, finish level, texture matching.',
        costFactors: [
            ['Square footage and ceiling height', 'Cost scales with the wall and ceiling area. High or vaulted ceilings need scaffolding or lifts, which adds labor.'],
            ['Board type', 'Standard board costs least. Moisture- and mold-resistant and fire-rated board cost more and are required in some rooms.'],
            ['Water-damage removal', 'Cutting out wet board and insulation, drying the cavity and fixing the leak are separate line items that come before new drywall.'],
            ['Finish level', 'A smooth finish for rooms with strong side light takes more coats and sanding than a standard finish under texture.'],
            ['Texture matching', 'Matching an existing knockdown or orange-peel texture is labor-intensive, especially on patches in the middle of a wall.'],
            ['Permits and inspections', 'Small repairs usually do not need a permit. Larger replacement is often part of a remodel permit; fees vary by city and county and are part of the written estimate.'],
        ],
        whyIcon: Droplets,
        whyTitle: 'Moisture first',
        whyText: 'We find and fix the source of any water before new drywall goes up.',
    },
};

// Shared process-step icons cycled across the enhanced service pages, matching
// the icon treatment on the dedicated optimized service pages.
export const processStepIcons = [Ruler, Layers, FileCheck, Wrench, Hammer, Sun];
