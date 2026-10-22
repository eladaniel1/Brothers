// City service pages for Hillsborough County communities.
// Each entry powers /areas-we-serve/hillsborough/<slug> via HillsboroughCityPage.

const kitchen = (text) => ({
    title: 'Kitchen Remodeling',
    to: '/services/kitchen-remodeling',
    text,
});
const bathroom = (text) => ({
    title: 'Bathroom Remodeling',
    to: '/services/bathroom-remodeling',
    text,
});
const additions = (text) => ({
    title: 'Home Additions',
    to: '/services/home-additions',
    text,
});
const wholeHome = (text) => ({
    title: 'Whole-Home Remodeling',
    to: '/services/general-contracting',
    text,
});
const generalContracting = (text) => ({
    title: 'General Contracting',
    to: '/services/general-contracting',
    text,
});
const concrete = (text) => ({
    title: 'Concrete Services',
    to: '/services/concrete-foundations',
    text,
});

// ---- Templated builders for additional Hillsborough city pages ----
const hWhyRemodelBase = [
    ['A kitchen that no longer fits how you cook', 'Closed-off layouts, worn finishes and limited counter space are the most common starting points we see. Opening a kitchen to the living area and adding storage changes how the whole house works.'],
    ['Bathrooms that need a full rebuild', 'Aging waterproofing, poor ventilation and dated fixtures are functional problems, not just cosmetic ones. A gut renovation fixes all three in one project.'],
    ['More space without a move', 'A growing household or a work-from-home routine often needs another room. An addition keeps the location, the schools and the equity already built into the house.'],
    ['A layout that fights the household', 'Removing a wall, widening a passage or reworking a hallway can make an existing floor plan feel like a different house — without adding a single square foot.'],
    ['Interior modernization', 'Replacing worn flooring, upgrading lighting and circuits, and updating trim and finishes bring an older interior current in one coordinated pass.'],
    ['Several projects at once', 'Combining a kitchen, baths and new floors into one renovation means one schedule, one superintendent and trades mobilized once — usually faster and cheaper than three separate jobs.'],
];

const hFaqsFor = (name, permitJurisdiction) => [
    [`What remodeling services does Brothers Remodelers provide in ${name}?`, `Brothers Remodelers provides kitchen remodeling, bathroom remodeling, home additions, whole-home remodeling, concrete services, and general contracting for homeowners in ${name} and the surrounding Hillsborough County area. Every project begins with a free site walkthrough and a written line-item proposal.`],
    [`How much does home remodeling cost in ${name}, Florida?`, `Remodeling cost depends on the scope, size, materials and condition of the home, so we do not quote numbers before seeing the space. After a walkthrough you receive a line-item fixed-price proposal with allowances stated for owner-selected finishes, which makes bids easy to compare on equal terms.`],
    ['How long does a remodeling project take?', `Duration varies with the scope: a single bathroom typically runs a few weeks, while a whole-home renovation runs several months once permits are approved. Your proposal includes an outline schedule that accounts for material lead times and ${permitJurisdiction} inspection windows.`],
    [`Do I need a permit for remodeling in ${name}?`, `Many structural, electrical, plumbing and window or door replacement projects require permits, filed with ${permitJurisdiction} for ${name} properties. Brothers Remodelers coordinates applications, plans and inspections, and keeps the permit board current on site.`],
    ['Does Brothers Remodelers handle the entire remodeling project?', 'Yes. As a Florida certified general contractor, we act as the single point of accountability — permits, trade procurement, daily supervision, inspections and closeout documentation. You are not left coordinating plumbers, electricians and carpenters yourself.'],
    [`Can Brothers Remodelers remodel multiple areas of my ${name} home?`, 'Yes. Whole-home renovations are a core part of our work. Running a kitchen, baths and flooring as one coordinated project means one schedule, one superintendent and trades sequenced once instead of mobilized separately.'],
    [`How do I request a remodeling estimate in ${name}?`, 'Call us or submit the quote form on this page. We schedule a free site walkthrough, then send a written line-item proposal with an outline schedule, usually within five business days.'],
];

const hHeroIntro = (name) =>
    `Brothers Remodelers provides residential remodeling and general contracting services for homeowners in ${name}, Florida, and throughout Hillsborough County — from kitchen and bathroom remodels to home additions, whole-home renovations and concrete work.`;

const hQuickAnswer = (name, locationDesc, permitJurisdiction, isCity) =>
    `Brothers Remodelers is a licensed residential remodeling and general contracting company serving homeowners in ${name}, ${locationDesc}. Services include kitchen remodeling, bathroom remodeling, home additions, whole-home remodeling, concrete work, and general contracting. ${name} homeowners get a dedicated superintendent on site, written line-item proposals, and full permit coordination${isCity ? ` with ${permitJurisdiction}` : ' with Hillsborough County'}.`;

const hServicesIntro = (name) =>
    `Six core disciplines, one licensed contractor. Every ${name} project runs under the same standard: a written scope, a live schedule and a superintendent on site.`;

const hServicesFor = (permitJurisdiction, kitchenText) => [
    kitchen(kitchenText),
    bathroom('Gut renovations that start behind the tile: rebuilt wet walls, waterproofing membranes, curbless showers and ventilation sized to code. Florida humidity makes the assembly under the tile matter as much as the tile itself.'),
    additions('Extra bedrooms, in-law suites and second stories for growing households — engineered, permitted and tied into the existing roof and mechanicals, with wind-rated assemblies where the structure requires them.'),
    wholeHome('One contract for a full interior renovation: floors, kitchens, baths, lighting and mechanical updates sequenced as a single project instead of a string of separate jobs.'),
    generalContracting(`Permit filings with ${permitJurisdiction}, trade procurement, daily supervision and closeout documentation — one accountable contractor from budgeting through final sign-off, so you are not coordinating subs yourself.`),
    concrete("Footings, slabs, driveways, walkways and lanai concrete with documented mix designs and tested pours — including the drainage details that keep slab work sound through Florida's wet season."),
];

const hAreaParasFor = (name, locationDesc, permitJurisdiction, isCity, coastal) => {
    const p1 = `${name} is ${locationDesc}. Our Hillsborough County service area is built around Tampa and the communities that surround it.`;
    let p2 = isCity
        ? `Because ${name} is an incorporated city, permitting for remodeling projects is handled by ${permitJurisdiction} rather than Hillsborough County.`
        : `Because ${name} sits outside Tampa city limits, permitting for remodeling projects is handled by ${permitJurisdiction} rather than the city of Tampa.`;
    p2 += coastal
        ? ' Coastal and flood-zone properties also carry elevation and wind-rated glazing requirements, and we file correctly the first time and coordinate every inspection along the way.'
        : ' We file with the correct jurisdiction the first time and coordinate every inspection along the way.';
    return [p1, p2];
};

const buildHillsboroughCity = ({ slug, name, locationDesc, permitJurisdiction, isCity, coastal, kitchenText, whyIntro }) => ({
    slug,
    name,
    metaTitle: `${name} Home Remodeling & General Contractor | Brothers Remodelers`,
    metaDescription: `Brothers Remodelers serves ${name}, FL homeowners with kitchen and bathroom remodeling, home additions, whole-home renovations and concrete work. Request a free quote.`,
    heroIntro: hHeroIntro(name),
    quickAnswer: hQuickAnswer(name, locationDesc, permitJurisdiction, isCity),
    servicesIntro: hServicesIntro(name),
    services: hServicesFor(permitJurisdiction, kitchenText),
    whyTitle: `Why ${name} Homeowners Remodel`,
    whyIntro,
    whyRemodel: hWhyRemodelBase,
    areaTitle: `Serving ${name} and Hillsborough County`,
    areaParas: hAreaParasFor(name, locationDesc, permitJurisdiction, isCity, coastal),
    faqs: hFaqsFor(name, permitJurisdiction),
});

export const hillsboroughCities = [
    {
        slug: 'riverview',
        name: 'Riverview',
        metaTitle: 'Riverview Home Remodeling & General Contractor | Brothers Remodelers',
        metaDescription:
            'Brothers Remodelers serves Riverview, FL homeowners with kitchen and bathroom remodeling, home additions, whole-home renovations and concrete work. Request a free quote.',
        heroIntro:
            'Brothers Remodelers provides residential remodeling and general contracting services for homeowners in Riverview, Florida, and throughout Hillsborough County — from kitchen and bathroom remodels to home additions, whole-home renovations and concrete work.',
        quickAnswer:
            'Brothers Remodelers is a licensed residential remodeling and general contracting company serving homeowners in Riverview, one of the fastest-growing communities in Hillsborough County, south of Tampa along the Alafia River. Services include kitchen remodeling, bathroom remodeling, home additions, whole-home remodeling, concrete work, and general contracting. Riverview homeowners get a dedicated superintendent on site, written line-item proposals, and full permit coordination with Hillsborough County.',
        servicesIntro:
            'Six core disciplines, one licensed contractor. Every Riverview project runs under the same standard: a written scope, a live schedule and a superintendent on site.',
        services: [
            kitchen('From cabinet and counter replacement in 1990s–2000s subdivision homes to full layout changes with relocated plumbing and new circuits, we sequence every trade so the busiest room in a Riverview house comes back online on schedule.'),
            bathroom('Gut renovations that start behind the tile: rebuilt wet walls, waterproofing membranes, curbless showers and ventilation sized to code. Florida humidity makes the assembly under the tile matter as much as the tile itself.'),
            additions('Extra bedrooms, in-law suites and second stories for growing households along the Symmes corridor — engineered, permitted and tied into the existing roof and mechanicals, with wind-rated assemblies where the structure requires them.'),
            wholeHome('One contract for a full interior renovation: floors, kitchens, baths, lighting and mechanical updates sequenced as a single project instead of a string of separate jobs.'),
            generalContracting('Permit filings with Hillsborough County, trade procurement, daily supervision and closeout documentation — one accountable contractor from budgeting through final sign-off, so you are not coordinating subs yourself.'),
            concrete('Footings, slabs, driveways, walkways and lanai or pool-deck concrete with documented mix designs and tested pours — including the drainage details that keep slab work sound through Florida’s wet season.'),
        ],
        whyTitle: 'Why Riverview Homeowners Remodel',
        whyIntro:
            'Riverview has grown from a river-crossing farming community into one of the busiest suburban corridors in the county. Most remodels we see trace back to a handful of practical needs — a house that no longer fits the household that lives in it.',
        whyRemodel: [
            ['Builder-grade kitchens that need an upgrade', 'Many Riverview homes were built quickly to meet demand, with stock cabinetry, minimal counter space and layouts closed off from the living area. Opening the kitchen and adding storage changes how the whole house works.'],
            ['Bathrooms that need a full rebuild', 'Aging waterproofing, poor ventilation and dated fixtures are functional problems, not just cosmetic ones. A gut renovation fixes all three in one project.'],
            ['More space without a move', 'A growing household or a work-from-home routine often needs another room. An addition keeps the schools, the commute and the equity already built into the house.'],
            ['A layout that fights the household', 'Removing a wall, widening a passage or reworking a hallway can make an existing floor plan feel like a different house — without adding a single square foot.'],
            ['Interior modernization', 'Replacing worn flooring, upgrading lighting and circuits, and updating trim and finishes bring an older interior current in one coordinated pass.'],
            ['Several projects at once', 'Combining a kitchen, baths and new floors into one renovation means one schedule, one superintendent and trades mobilized once — usually faster and cheaper than three separate jobs.'],
        ],
        areaTitle: 'Serving Riverview and Hillsborough County',
        areaParas: [
            'Riverview is an unincorporated community in central Hillsborough County, south of Tampa along the Alafia River, bordered by FishHawk and Lithia to the east, Bloomingdale to the west and Gibsonton to the south. Our Hillsborough County service area is built around Tampa and the communities that surround it.',
            'Because Riverview sits outside Tampa city limits, permitting for remodeling projects is handled by Hillsborough County rather than the city of Tampa. We file with the correct jurisdiction the first time and coordinate every inspection along the way.',
        ],
        faqs: [
            ['What remodeling services does Brothers Remodelers provide in Riverview?', 'Brothers Remodelers provides kitchen remodeling, bathroom remodeling, home additions, whole-home remodeling, concrete services, and general contracting for homeowners in Riverview and the surrounding Hillsborough County area. Every project begins with a free site walkthrough and a written line-item proposal.'],
            ['How much does home remodeling cost in Riverview, Florida?', 'Remodeling cost depends on the scope, size, materials and condition of the home, so we do not quote numbers before seeing the space. After a walkthrough you receive a line-item fixed-price proposal with allowances stated for owner-selected finishes, which makes bids easy to compare on equal terms.'],
            ['How long does a remodeling project take?', 'Duration varies with the scope: a single bathroom typically runs a few weeks, while a whole-home renovation runs several months once permits are approved. Your proposal includes an outline schedule that accounts for material lead times and Hillsborough County inspection windows.'],
            ['Do I need a permit for remodeling in Riverview?', 'Many structural, electrical, plumbing and window or door replacement projects require permits, filed with Hillsborough County for Riverview properties. Brothers Remodelers coordinates applications, plans and inspections, and keeps the permit board current on site.'],
            ['Does Brothers Remodelers handle the entire remodeling project?', 'Yes. As a Florida certified general contractor, we act as the single point of accountability — permits, trade procurement, daily supervision, inspections and closeout documentation. You are not left coordinating plumbers, electricians and carpenters yourself.'],
            ['Can Brothers Remodelers remodel multiple areas of my Riverview home?', 'Yes. Whole-home renovations are a core part of our work. Running a kitchen, baths and flooring as one coordinated project means one schedule, one superintendent and trades sequenced once instead of mobilized separately.'],
            ['How do I request a remodeling estimate in Riverview?', 'Call us or submit the quote form on this page. We schedule a free site walkthrough, then send a written line-item proposal with an outline schedule, usually within five business days.'],
        ],
    },
    {
        slug: 'westchase',
        name: 'Westchase',
        metaTitle: 'Westchase Home Remodeling & General Contractor | Brothers Remodelers',
        metaDescription:
            'Brothers Remodelers serves Westchase, FL homeowners with kitchen and bathroom remodeling, home additions, whole-home renovations and concrete work. Request a free quote.',
        heroIntro:
            'Brothers Remodelers provides residential remodeling and general contracting services for homeowners in Westchase, Florida, and throughout Hillsborough County — from kitchen and bathroom remodels to home additions, whole-home renovations and concrete work.',
        quickAnswer:
            'Brothers Remodelers is a licensed residential remodeling and general contracting company serving homeowners in Westchase, a master-planned community in northwest Hillsborough County, Florida. Services include kitchen remodeling, bathroom remodeling, home additions, whole-home remodeling, concrete work, and general contracting. Westchase homeowners get a dedicated superintendent on site, written line-item proposals, and full permit coordination — including HOA architectural review.',
        servicesIntro:
            'Six core disciplines, one licensed contractor. Every Westchase project runs under the same standard: a written scope, a live schedule and a superintendent on site.',
        services: [
            kitchen('Many Westchase homes carry original 1990s kitchens — oak cabinetry, closed layouts and laminate counters. We handle everything from cabinet and counter replacement to full layout changes with relocated plumbing and new circuits.'),
            bathroom('Gut renovations that start behind the tile: rebuilt wet walls, waterproofing membranes, curbless showers and ventilation sized to code. Florida humidity makes the assembly under the tile matter as much as the tile itself.'),
            additions('Extra bedrooms, sunrooms and second stories for homes that no longer fit the household — engineered, permitted and tied into the existing roof and mechanicals, and designed to clear HOA architectural review.'),
            wholeHome('One contract for a full interior renovation: floors, kitchens, baths, lighting and mechanical updates sequenced as a single project instead of a string of separate jobs.'),
            generalContracting('Permit filings with Hillsborough County, HOA architectural review submittals, trade procurement, daily supervision and closeout documentation — one accountable contractor from budgeting through final sign-off.'),
            concrete('Footings, slabs, driveways, walkways and lanai concrete with documented mix designs and tested pours — including the drainage details that keep slab work sound through Florida’s wet season.'),
        ],
        whyTitle: 'Why Westchase Homeowners Remodel',
        whyIntro:
            'Westchase was built out through the 1990s and 2000s as a master-planned community, and much of its housing stock is now at the age where kitchens, baths and systems need updating. Most remodels we see trace back to a handful of practical needs.',
        whyRemodel: [
            ['Original kitchens at the end of their life', 'Stock cabinetry, worn counters and closed-off layouts from the original build no longer work for how families cook and gather. Opening the kitchen to the living area is the single most requested change.'],
            ['Bathrooms that need a full rebuild', 'Aging waterproofing, poor ventilation and dated fixtures are functional problems, not just cosmetic ones. A gut renovation fixes all three in one project.'],
            ['More space without a move', 'A growing household or a work-from-home routine often needs another room. An addition keeps the neighbors, the schools and the equity already built into the house.'],
            ['A layout that fights the household', 'Removing a wall, widening a passage or reworking a hallway can make an existing floor plan feel like a different house — without adding a single square foot.'],
            ['Interior modernization', 'Replacing worn flooring, upgrading lighting and circuits, and updating trim and finishes bring a 1990s interior current in one coordinated pass.'],
            ['Several projects at once', 'Combining a kitchen, baths and new floors into one renovation means one schedule, one superintendent and trades mobilized once — usually faster and cheaper than three separate jobs.'],
        ],
        areaTitle: 'Serving Westchase and Hillsborough County',
        areaParas: [
            'Westchase is a master-planned community in northwest Hillsborough County, between Citrus Park and Tampa’s Westshore district, near the Veterans Expressway. Our Hillsborough County service area is built around Tampa and the communities that surround it.',
            'Because Westchase sits outside Tampa city limits, permitting is handled by Hillsborough County, and most exterior changes and additions also pass through the community’s architectural review process before a permit is filed. We prepare submittals that clear review the first time and coordinate every inspection along the way.',
        ],
        faqs: [
            ['What remodeling services does Brothers Remodelers provide in Westchase?', 'Brothers Remodelers provides kitchen remodeling, bathroom remodeling, home additions, whole-home remodeling, concrete services, and general contracting for homeowners in Westchase and the surrounding Hillsborough County area. Every project begins with a free site walkthrough and a written line-item proposal.'],
            ['How much does home remodeling cost in Westchase, Florida?', 'Remodeling cost depends on the scope, size, materials and condition of the home, so we do not quote numbers before seeing the space. After a walkthrough you receive a line-item fixed-price proposal with allowances stated for owner-selected finishes, which makes bids easy to compare on equal terms.'],
            ['How long does a remodeling project take?', 'Duration varies with the scope: a single bathroom typically runs a few weeks, while a whole-home renovation runs several months once permits are approved. Your proposal includes an outline schedule that accounts for material lead times and Hillsborough County inspection windows.'],
            ['Do I need a permit for remodeling in Westchase?', 'Many structural, electrical, plumbing and window or door replacement projects require permits, filed with Hillsborough County for Westchase properties. Exterior changes and additions typically also require HOA architectural approval first. Brothers Remodelers coordinates applications, plans and inspections, and keeps the permit board current on site.'],
            ['Does Brothers Remodelers handle the entire remodeling project?', 'Yes. As a Florida certified general contractor, we act as the single point of accountability — permits, trade procurement, daily supervision, inspections and closeout documentation. You are not left coordinating plumbers, electricians and carpenters yourself.'],
            ['Can Brothers Remodelers remodel multiple areas of my Westchase home?', 'Yes. Whole-home renovations are a core part of our work. Running a kitchen, baths and flooring as one coordinated project means one schedule, one superintendent and trades sequenced once instead of mobilized separately.'],
            ['How do I request a remodeling estimate in Westchase?', 'Call us or submit the quote form on this page. We schedule a free site walkthrough, then send a written line-item proposal with an outline schedule, usually within five business days.'],
        ],
    },
    {
        slug: 'lutz',
        name: 'Lutz',
        metaTitle: 'Lutz Home Remodeling & General Contractor | Brothers Remodelers',
        metaDescription:
            'Brothers Remodelers serves Lutz, FL homeowners with kitchen and bathroom remodeling, home additions, whole-home renovations and concrete work. Request a free quote.',
        heroIntro:
            'Brothers Remodelers provides residential remodeling and general contracting services for homeowners in Lutz, Florida, and throughout Hillsborough County — from kitchen and bathroom remodels to home additions, whole-home renovations and concrete work.',
        quickAnswer:
            'Brothers Remodelers is a licensed residential remodeling and general contracting company serving homeowners in Lutz, an unincorporated community in northwest Hillsborough County, Florida. Services include kitchen remodeling, bathroom remodeling, home additions, whole-home remodeling, concrete work, and general contracting. Lutz homeowners get a dedicated superintendent on site, written line-item proposals, and full permit coordination with Hillsborough County.',
        servicesIntro:
            'Six core disciplines, one licensed contractor. Every Lutz project runs under the same standard: a written scope, a live schedule and a superintendent on site.',
        services: [
            kitchen('From updating original kitchens in older Lutz homes to full layout changes with relocated plumbing and new circuits, we sequence every trade — demolition, rough-in, millwork, stone — so the busiest room in the house comes back online on schedule.'),
            bathroom('Gut renovations that start behind the tile: rebuilt wet walls, waterproofing membranes, curbless showers and ventilation sized to code. Florida humidity makes the assembly under the tile matter as much as the tile itself.'),
            additions('Extra bedrooms, in-law suites, garages and workshops — the larger lots common in Lutz make additions straightforward. Engineered, permitted and tied into the existing roof and mechanicals, with wind-rated assemblies where required.'),
            wholeHome('One contract for a full interior renovation: floors, kitchens, baths, lighting and mechanical updates sequenced as a single project instead of a string of separate jobs.'),
            generalContracting('Permit filings with Hillsborough County, trade procurement, daily supervision and closeout documentation — one accountable contractor from budgeting through final sign-off, so you are not coordinating subs yourself.'),
            concrete('Footings, slabs, long driveways, walkways and lanai concrete with documented mix designs and tested pours — including the drainage details that keep slab work sound through Florida’s wet season.'),
        ],
        whyTitle: 'Why Lutz Homeowners Remodel',
        whyIntro:
            'Lutz mixes older homes on large lots along the US 41 corridor with newer subdivision builds. Most remodels we see trace back to a handful of practical needs — a house that no longer fits the household that lives in it.',
        whyRemodel: [
            ['Older kitchens that need a full rebuild', 'Original kitchens in Lutz’s older homes often carry worn finishes, limited circuits and layouts closed off from the living area. A rebuild addresses the room and the systems behind it at once.'],
            ['Bathrooms that need a full rebuild', 'Aging waterproofing, poor ventilation and dated fixtures are functional problems, not just cosmetic ones. A gut renovation fixes all three in one project.'],
            ['Room to add on', 'Lutz’s larger lots make additions a practical alternative to moving — an in-law suite, a workshop or a second story keeps the location and the equity already built.'],
            ['A layout that fights the household', 'Removing a wall, widening a passage or reworking a hallway can make an existing floor plan feel like a different house — without adding a single square foot.'],
            ['Interior modernization', 'Replacing worn flooring, upgrading lighting and circuits, and updating trim and finishes bring an older interior current in one coordinated pass.'],
            ['Several projects at once', 'Combining a kitchen, baths and new floors into one renovation means one schedule, one superintendent and trades mobilized once — usually faster and cheaper than three separate jobs.'],
        ],
        areaTitle: 'Serving Lutz and Hillsborough County',
        areaParas: [
            'Lutz is an unincorporated community in northwest Hillsborough County along the US 41 corridor, bordering Land O’ Lakes in Pasco County to the north, with Cheval and Odessa nearby. Our Hillsborough County service area is built around Tampa and the communities that surround it.',
            'Because Lutz sits outside Tampa city limits, permitting for remodeling projects is handled by Hillsborough County — and for properties near the Pasco line, by the county the property sits in. We confirm the jurisdiction before filing and coordinate every inspection along the way.',
        ],
        faqs: [
            ['What remodeling services does Brothers Remodelers provide in Lutz?', 'Brothers Remodelers provides kitchen remodeling, bathroom remodeling, home additions, whole-home remodeling, concrete services, and general contracting for homeowners in Lutz and the surrounding Hillsborough County area. Every project begins with a free site walkthrough and a written line-item proposal.'],
            ['How much does home remodeling cost in Lutz, Florida?', 'Remodeling cost depends on the scope, size, materials and condition of the home, so we do not quote numbers before seeing the space. After a walkthrough you receive a line-item fixed-price proposal with allowances stated for owner-selected finishes, which makes bids easy to compare on equal terms.'],
            ['How long does a remodeling project take?', 'Duration varies with the scope: a single bathroom typically runs a few weeks, while a whole-home renovation runs several months once permits are approved. Your proposal includes an outline schedule that accounts for material lead times and county inspection windows.'],
            ['Do I need a permit for remodeling in Lutz?', 'Many structural, electrical, plumbing and window or door replacement projects require permits, filed with Hillsborough County for Lutz properties — or Pasco County for homes that sit across the county line. Brothers Remodelers coordinates applications, plans and inspections, and keeps the permit board current on site.'],
            ['Does Brothers Remodelers handle the entire remodeling project?', 'Yes. As a Florida certified general contractor, we act as the single point of accountability — permits, trade procurement, daily supervision, inspections and closeout documentation. You are not left coordinating plumbers, electricians and carpenters yourself.'],
            ['Can Brothers Remodelers remodel multiple areas of my Lutz home?', 'Yes. Whole-home renovations are a core part of our work. Running a kitchen, baths and flooring as one coordinated project means one schedule, one superintendent and trades sequenced once instead of mobilized separately.'],
            ['How do I request a remodeling estimate in Lutz?', 'Call us or submit the quote form on this page. We schedule a free site walkthrough, then send a written line-item proposal with an outline schedule, usually within five business days.'],
        ],
    },
    {
        slug: 'odessa',
        name: 'Odessa',
        metaTitle: 'Odessa Home Remodeling & General Contractor | Brothers Remodelers',
        metaDescription:
            'Brothers Remodelers serves Odessa, FL homeowners with kitchen and bathroom remodeling, home additions, whole-home renovations and concrete work. Request a free quote.',
        heroIntro:
            'Brothers Remodelers provides residential remodeling and general contracting services for homeowners in Odessa, Florida, and throughout Hillsborough County — from kitchen and bathroom remodels to home additions, whole-home renovations and concrete work.',
        quickAnswer:
            'Brothers Remodelers is a licensed residential remodeling and general contracting company serving homeowners in Odessa, a rural and equestrian community in northwest Hillsborough County, Florida. Services include kitchen remodeling, bathroom remodeling, home additions, whole-home remodeling, concrete work, and general contracting. Odessa homeowners get a dedicated superintendent on site, written line-item proposals, and full permit coordination with Hillsborough County.',
        servicesIntro:
            'Six core disciplines, one licensed contractor. Every Odessa project runs under the same standard: a written scope, a live schedule and a superintendent on site.',
        services: [
            kitchen('From refreshing kitchens in custom homes to full layout changes with relocated plumbing and new circuits, we sequence every trade so the busiest room in the house comes back online on schedule.'),
            bathroom('Gut renovations that start behind the tile: rebuilt wet walls, waterproofing membranes, curbless showers and ventilation sized to code. Florida humidity makes the assembly under the tile matter as much as the tile itself.'),
            additions('Guest suites, in-law casitas, garages and barn apartments — the acreage common in Odessa makes additions a natural fit. Engineered, permitted and tied into the existing septic, well and electrical systems.'),
            wholeHome('One contract for a full interior renovation: floors, kitchens, baths, lighting and mechanical updates sequenced as a single project instead of a string of separate jobs.'),
            generalContracting('Permit filings with Hillsborough County, trade procurement, daily supervision and closeout documentation — one accountable contractor from budgeting through final sign-off, so you are not coordinating subs yourself.'),
            concrete('Footings, slabs, long driveways, barn and arena pads, walkways and lanai concrete with documented mix designs and tested pours — including the drainage details that keep slab work sound through Florida’s wet season.'),
        ],
        whyTitle: 'Why Odessa Homeowners Remodel',
        whyIntro:
            'Odessa’s homes range from older houses on acreage around Lake Rogers and Lake Pretty to newer custom builds. Most remodels we see trace back to a handful of practical needs — a house that no longer fits the household that lives in it.',
        whyRemodel: [
            ['Customizing a recently purchased home', 'Many Odessa buyers purchase for the land and the location, then tailor the house — opening layouts, upgrading kitchens and reworking primary suites to match how they live.'],
            ['Bathrooms that need a full rebuild', 'Aging waterproofing, poor ventilation and dated fixtures are functional problems, not just cosmetic ones. A gut renovation fixes all three in one project.'],
            ['Adding guest and family space', 'Acreage makes additions practical: an in-law casita, a guest suite or a barn apartment keeps family close without sharing a kitchen.'],
            ['A layout that fights the household', 'Removing a wall, widening a passage or reworking a hallway can make an existing floor plan feel like a different house — without adding a single square foot.'],
            ['Interior modernization', 'Replacing worn flooring, upgrading lighting and circuits, and updating trim and finishes bring an older interior current in one coordinated pass.'],
            ['Several projects at once', 'Combining a kitchen, baths and new floors into one renovation means one schedule, one superintendent and trades mobilized once — usually faster and cheaper than three separate jobs.'],
        ],
        areaTitle: 'Serving Odessa and Hillsborough County',
        areaParas: [
            'Odessa is an unincorporated community in northwest Hillsborough County, around Lake Rogers and Lake Pretty, with portions extending toward the Pasco County line near Land O’ Lakes and Trinity. Our Hillsborough County service area is built around Tampa and the communities that surround it.',
            'Because Odessa sits outside Tampa city limits, permitting is handled by Hillsborough County — or Pasco County for properties across the line. Many Odessa homes also run on well and septic rather than municipal water and sewer, so we verify utility capacity before an addition or a whole-home remodel is scoped. We file with the correct jurisdiction the first time and coordinate every inspection along the way.',
        ],
        faqs: [
            ['What remodeling services does Brothers Remodelers provide in Odessa?', 'Brothers Remodelers provides kitchen remodeling, bathroom remodeling, home additions, whole-home remodeling, concrete services, and general contracting for homeowners in Odessa and the surrounding Hillsborough County area. Every project begins with a free site walkthrough and a written line-item proposal.'],
            ['How much does home remodeling cost in Odessa, Florida?', 'Remodeling cost depends on the scope, size, materials and condition of the home, so we do not quote numbers before seeing the space. After a walkthrough you receive a line-item fixed-price proposal with allowances stated for owner-selected finishes, which makes bids easy to compare on equal terms.'],
            ['How long does a remodeling project take?', 'Duration varies with the scope: a single bathroom typically runs a few weeks, while a whole-home renovation runs several months once permits are approved. Your proposal includes an outline schedule that accounts for material lead times and county inspection windows.'],
            ['Do I need a permit for remodeling in Odessa?', 'Many structural, electrical, plumbing and window or door replacement projects require permits, filed with Hillsborough County for Odessa properties — or Pasco County for homes across the county line. Brothers Remodelers coordinates applications, plans and inspections, and keeps the permit board current on site.'],
            ['Does Brothers Remodelers handle the entire remodeling project?', 'Yes. As a Florida certified general contractor, we act as the single point of accountability — permits, trade procurement, daily supervision, inspections and closeout documentation. You are not left coordinating plumbers, electricians and carpenters yourself.'],
            ['Can Brothers Remodelers remodel multiple areas of my Odessa home?', 'Yes. Whole-home renovations are a core part of our work. Running a kitchen, baths and flooring as one coordinated project means one schedule, one superintendent and trades sequenced once instead of mobilized separately.'],
            ['How do I request a remodeling estimate in Odessa?', 'Call us or submit the quote form on this page. We schedule a free site walkthrough, then send a written line-item proposal with an outline schedule, usually within five business days.'],
        ],
    },
    {
        slug: 'fishhawk',
        name: 'FishHawk',
        metaTitle: 'FishHawk Home Remodeling & General Contractor | Brothers Remodelers',
        metaDescription:
            'Brothers Remodelers serves FishHawk and Lithia, FL homeowners with kitchen and bathroom remodeling, home additions, whole-home renovations and concrete work. Request a free quote.',
        heroIntro:
            'Brothers Remodelers provides residential remodeling and general contracting services for homeowners in FishHawk (Lithia), Florida, and throughout Hillsborough County — from kitchen and bathroom remodels to home additions, whole-home renovations and concrete work.',
        quickAnswer:
            'Brothers Remodelers is a licensed residential remodeling and general contracting company serving homeowners in FishHawk, the master-planned community of FishHawk Ranch and FishHawk Trails in Lithia, southeast Hillsborough County, Florida. Services include kitchen remodeling, bathroom remodeling, home additions, whole-home remodeling, concrete work, and general contracting. FishHawk homeowners get a dedicated superintendent on site, written line-item proposals, and full permit coordination — including HOA and CDD architectural review.',
        servicesIntro:
            'Six core disciplines, one licensed contractor. Every FishHawk project runs under the same standard: a written scope, a live schedule and a superintendent on site.',
        services: [
            kitchen('Upgrading builder-grade kitchens in FishHawk Ranch and FishHawk Trails homes — from cabinet and counter replacement to full layout changes with relocated plumbing, an island and new circuits, sequenced so the room comes back online on schedule.'),
            bathroom('Gut renovations that start behind the tile: rebuilt wet walls, waterproofing membranes, curbless showers and ventilation sized to code. Florida humidity makes the assembly under the tile matter as much as the tile itself.'),
            additions('Extra bedrooms, in-law suites, sunrooms and second stories for growing households — engineered, permitted and tied into the existing roof and mechanicals, and designed to clear community architectural review.'),
            wholeHome('One contract for a full interior renovation: floors, kitchens, baths, lighting and mechanical updates sequenced as a single project instead of a string of separate jobs.'),
            generalContracting('Permit filings with Hillsborough County, HOA and CDD architectural review submittals, trade procurement, daily supervision and closeout documentation — one accountable contractor from budgeting through final sign-off.'),
            concrete('Footings, slabs, driveways, walkways and lanai or pool-deck concrete with documented mix designs and tested pours — including the drainage details that keep slab work sound through Florida’s wet season.'),
        ],
        whyTitle: 'Why FishHawk Homeowners Remodel',
        whyIntro:
            'FishHawk grew through the 2000s and 2010s as one of the region’s most popular master-planned communities, and its housing stock is now at the age where builder-grade finishes give way to custom ones. Most remodels we see trace back to a handful of practical needs.',
        whyRemodel: [
            ['Moving past builder-grade finishes', 'Stock cabinetry, basic counters and standard fixtures are the most common starting points we see. A kitchen or bath rebuilt to the owner’s standards changes how the whole house feels.'],
            ['Bathrooms that need a full rebuild', 'Aging waterproofing, poor ventilation and dated fixtures are functional problems, not just cosmetic ones. A gut renovation fixes all three in one project.'],
            ['More space for a growing family', 'FishHawk households grow fast. An extra bedroom, a in-law suite or a second story keeps the schools, the trails and the equity already built into the house.'],
            ['A layout that fights the household', 'Removing a wall, widening a passage or reworking a hallway can make an existing floor plan feel like a different house — without adding a single square foot.'],
            ['Work-from-home space', 'A dedicated office or a converted flex room is now a permanent need for many owners, and a remodel is the cleanest way to build one that works.'],
            ['Several projects at once', 'Combining a kitchen, baths and new floors into one renovation means one schedule, one superintendent and trades mobilized once — usually faster and cheaper than three separate jobs.'],
        ],
        areaTitle: 'Serving FishHawk and Hillsborough County',
        areaParas: [
            'FishHawk is a master-planned community in Lithia, in southeast Hillsborough County, east of Riverview, built around FishHawk Ranch and FishHawk Trails. Our Hillsborough County service area is built around Tampa and the communities that surround it.',
            'Because FishHawk sits outside Tampa city limits, permitting is handled by Hillsborough County, and most exterior changes and additions also pass through community architectural review before a permit is filed. We prepare submittals that clear review the first time and coordinate every inspection along the way.',
        ],
        faqs: [
            ['What remodeling services does Brothers Remodelers provide in FishHawk?', 'Brothers Remodelers provides kitchen remodeling, bathroom remodeling, home additions, whole-home remodeling, concrete services, and general contracting for homeowners in FishHawk, Lithia and the surrounding Hillsborough County area. Every project begins with a free site walkthrough and a written line-item proposal.'],
            ['How much does home remodeling cost in FishHawk, Florida?', 'Remodeling cost depends on the scope, size, materials and condition of the home, so we do not quote numbers before seeing the space. After a walkthrough you receive a line-item fixed-price proposal with allowances stated for owner-selected finishes, which makes bids easy to compare on equal terms.'],
            ['How long does a remodeling project take?', 'Duration varies with the scope: a single bathroom typically runs a few weeks, while a whole-home renovation runs several months once permits are approved. Your proposal includes an outline schedule that accounts for material lead times and Hillsborough County inspection windows.'],
            ['Do I need a permit for remodeling in FishHawk?', 'Many structural, electrical, plumbing and window or door replacement projects require permits, filed with Hillsborough County for FishHawk properties. Exterior changes and additions typically also require community architectural approval first. Brothers Remodelers coordinates applications, plans and inspections, and keeps the permit board current on site.'],
            ['Does Brothers Remodelers handle the entire remodeling project?', 'Yes. As a Florida certified general contractor, we act as the single point of accountability — permits, trade procurement, daily supervision, inspections and closeout documentation. You are not left coordinating plumbers, electricians and carpenters yourself.'],
            ['Can Brothers Remodelers remodel multiple areas of my FishHawk home?', 'Yes. Whole-home renovations are a core part of our work. Running a kitchen, baths and flooring as one coordinated project means one schedule, one superintendent and trades sequenced once instead of mobilized separately.'],
            ['How do I request a remodeling estimate in FishHawk?', 'Call us or submit the quote form on this page. We schedule a free site walkthrough, then send a written line-item proposal with an outline schedule, usually within five business days.'],
        ],
    },

    // ---------------- Additional Hillsborough County cities ----------------
    buildHillsboroughCity({ slug: 'mango', name: 'Mango', locationDesc: 'an unincorporated community in central Hillsborough County, Florida, east of Tampa', permitJurisdiction: 'Hillsborough County', isCity: false, coastal: false, kitchenText: "From updating kitchens in Mango's established ranch homes to full layout changes with relocated plumbing and new circuits, we sequence every trade so the busiest room comes back online on schedule.", whyIntro: 'Mango is a small residential community east of Tampa with mid-century homes, much of it now due for kitchen, bath and system updates.' }),
    buildHillsboroughCity({ slug: 'lake-magdalene', name: 'Lake Magdalene', locationDesc: 'an unincorporated community in central Hillsborough County, Florida, north of Tampa', permitJurisdiction: 'Hillsborough County', isCity: false, coastal: false, kitchenText: "From updating kitchens in Lake Magdalene's established homes to full layout changes with relocated plumbing and new circuits, we sequence every trade so the busiest room comes back online on schedule.", whyIntro: 'Lake Magdalene is a lakeside residential community north of Tampa with mid-century and newer homes, much of it now due for kitchen, bath and system updates.' }),
    buildHillsboroughCity({ slug: 'temple-terrace', name: 'Temple Terrace', locationDesc: 'a city in central Hillsborough County, Florida, northeast of Tampa', permitJurisdiction: 'the city of Temple Terrace', isCity: true, coastal: false, kitchenText: "From updating kitchens in Temple Terrace's established and historic homes to full layout changes with relocated plumbing and new circuits, we sequence every trade so the busiest room comes back online on schedule.", whyIntro: 'Temple Terrace blends a historic golf-course community with mid-century homes, and much of its housing stock is now due for kitchen, bath and system updates.' }),
    buildHillsboroughCity({ slug: 'carrollwood-northdale', name: 'Carrollwood / Northdale', locationDesc: 'an unincorporated area in northwest Hillsborough County, Florida, north of Tampa', permitJurisdiction: 'Hillsborough County', isCity: false, coastal: false, kitchenText: 'From updating original kitchens in Carrollwood and Northdale subdivision homes to full layout changes with relocated plumbing and new circuits, we sequence every trade so the busiest room comes back online on schedule.', whyIntro: 'Carrollwood and Northdale grew through the 1970s–1990s as established northwest Tampa communities, and much of their housing stock is now due for kitchen, bath and system updates.' }),
    buildHillsboroughCity({ slug: 'town-n-country', name: "Town 'n' Country", locationDesc: 'an unincorporated community in northwest Hillsborough County, Florida, west of Tampa', permitJurisdiction: 'Hillsborough County', isCity: false, coastal: false, kitchenText: "From updating kitchens in Town 'n' Country's established ranch homes to full layout changes with relocated plumbing and new circuits, we sequence every trade so the busiest room comes back online on schedule.", whyIntro: "Town 'n' Country is an established residential community west of Tampa with mid-century and newer homes, much of it now due for kitchen, bath and system updates." }),
    buildHillsboroughCity({ slug: 'seffner', name: 'Seffner', locationDesc: 'an unincorporated community in eastern Hillsborough County, Florida, east of Tampa', permitJurisdiction: 'Hillsborough County', isCity: false, coastal: false, kitchenText: "From updating kitchens in Seffner's established homes to full layout changes with relocated plumbing and new circuits, we sequence every trade so the busiest room comes back online on schedule.", whyIntro: 'Seffner is a rural-residential community east of Tampa with homes on larger lots, much of it now due for kitchen, bath and system updates.' }),
    buildHillsboroughCity({ slug: 'gibsonton', name: 'Gibsonton', locationDesc: 'an unincorporated community in southern Hillsborough County, Florida, south of Tampa along Tampa Bay', permitJurisdiction: 'Hillsborough County', isCity: false, coastal: true, kitchenText: "From updating kitchens in Gibsonton's established homes to full layout changes with relocated plumbing and new circuits, we sequence every trade so the busiest room comes back online on schedule.", whyIntro: 'Gibsonton is a bayfront community south of Tampa with a mix of older waterfront and inland homes, much of it now due for kitchen, bath and system updates.' }),
    buildHillsboroughCity({ slug: 'citrus-park', name: 'Citrus Park', locationDesc: 'an unincorporated community in northwest Hillsborough County, Florida, north of Tampa', permitJurisdiction: 'Hillsborough County', isCity: false, coastal: false, kitchenText: 'From updating original kitchens in Citrus Park subdivision homes to full layout changes with relocated plumbing and new circuits, we sequence every trade so the busiest room comes back online on schedule.', whyIntro: 'Citrus Park developed largely from the 1980s onward in northwest Hillsborough County, and much of its housing stock is now due for kitchen, bath and system updates.' }),
    buildHillsboroughCity({ slug: 'valrico-bloomingdale', name: 'Valrico / Bloomingdale', locationDesc: 'an unincorporated area in eastern Hillsborough County, Florida, east of Tampa', permitJurisdiction: 'Hillsborough County', isCity: false, coastal: false, kitchenText: 'From updating kitchens in Valrico and Bloomingdale subdivision homes to full layout changes with relocated plumbing and new circuits, we sequence every trade so the busiest room comes back online on schedule.', whyIntro: 'Valrico and Bloomingdale grew through the 1980s–2000s as eastern Hillsborough County communities, and much of their housing stock is now due for kitchen, bath and system updates.' }),
    buildHillsboroughCity({ slug: 'thonotosassa', name: 'Thonotosassa', locationDesc: 'an unincorporated community in northeastern Hillsborough County, Florida, east of Tampa', permitJurisdiction: 'Hillsborough County', isCity: false, coastal: false, kitchenText: "From updating kitchens in Thonotosassa's established homes to full layout changes with relocated plumbing and new circuits, we sequence every trade so the busiest room comes back online on schedule.", whyIntro: 'Thonotosassa is a rural-residential community around Lake Thonotosassa, with homes on larger lots now widely due for kitchen, bath and system updates.' }),
    buildHillsboroughCity({ slug: 'apollo-beach', name: 'Apollo Beach', locationDesc: 'an unincorporated community in southern Hillsborough County, Florida, on Tampa Bay south of Riverview', permitJurisdiction: 'Hillsborough County', isCity: false, coastal: true, kitchenText: "From updating kitchens in Apollo Beach's waterfront and subdivision homes to full layout changes with relocated plumbing and new circuits, we sequence every trade so the busiest room comes back online on schedule.", whyIntro: 'Apollo Beach is a growing bayfront community south of Riverview with a mix of waterfront and newer subdivision homes, much of it now due for kitchen, bath and system updates.' }),
    buildHillsboroughCity({ slug: 'keystone', name: 'Keystone', locationDesc: 'an unincorporated community in northwest Hillsborough County, Florida, near the Pasco County line', permitJurisdiction: 'Hillsborough County', isCity: false, coastal: false, kitchenText: "From updating kitchens in Keystone's lakeside homes to full layout changes with relocated plumbing and new circuits, we sequence every trade so the busiest room comes back online on schedule.", whyIntro: 'Keystone is a lakeside community in northwest Hillsborough County with homes on larger lots, much of it now due for kitchen, bath and system updates.' }),
    buildHillsboroughCity({ slug: 'dover', name: 'Dover', locationDesc: 'an unincorporated community in eastern Hillsborough County, Florida, east of Tampa', permitJurisdiction: 'Hillsborough County', isCity: false, coastal: false, kitchenText: "From updating kitchens in Dover's established homes to full layout changes with relocated plumbing and new circuits, we sequence every trade so the busiest room comes back online on schedule.", whyIntro: 'Dover is a small rural-residential community east of Tampa with homes on larger lots, much of it now due for kitchen, bath and system updates.' }),
    buildHillsboroughCity({ slug: 'ruskin', name: 'Ruskin', locationDesc: 'an unincorporated community in southern Hillsborough County, Florida, on Tampa Bay south of Apollo Beach', permitJurisdiction: 'Hillsborough County', isCity: false, coastal: true, kitchenText: "From updating kitchens in Ruskin's waterfront and rural homes to full layout changes with relocated plumbing and new circuits, we sequence every trade so the busiest room comes back online on schedule.", whyIntro: 'Ruskin is a southern Hillsborough County community on Tampa Bay with a mix of waterfront, agricultural and newer subdivision homes, much of it now due for kitchen, bath and system updates.' }),
    buildHillsboroughCity({ slug: 'plant-city', name: 'Plant City', locationDesc: 'a city in eastern Hillsborough County, Florida, east of Tampa', permitJurisdiction: 'the city of Plant City', isCity: true, coastal: false, kitchenText: "From updating kitchens in Plant City's historic and established homes to full layout changes with relocated plumbing and new circuits, we sequence every trade so the busiest room comes back online on schedule.", whyIntro: 'Plant City blends a historic downtown with mid-century ranches and newer builds, and much of its housing stock is now due for kitchen, bath and system updates.' }),
    buildHillsboroughCity({ slug: 'sun-city-center', name: 'Sun City Center', locationDesc: 'an unincorporated active-adult community in southern Hillsborough County, Florida', permitJurisdiction: 'Hillsborough County', isCity: false, coastal: false, kitchenText: 'From updating kitchens in Sun City Center homes to full layout changes with relocated plumbing and new circuits, we sequence every trade so the busiest room comes back online on schedule.', whyIntro: 'Sun City Center is a large active-adult community in southern Hillsborough County, with homes now widely due for kitchen, bath and system updates.' }),
    buildHillsboroughCity({ slug: 'wimauma', name: 'Wimauma', locationDesc: 'an unincorporated community in southern Hillsborough County, Florida, east of Ruskin', permitJurisdiction: 'Hillsborough County', isCity: false, coastal: false, kitchenText: "From updating kitchens in Wimauma's established homes to full layout changes with relocated plumbing and new circuits, we sequence every trade so the busiest room comes back online on schedule.", whyIntro: 'Wimauma is a rural-residential community in southern Hillsborough County with homes on larger lots, much of it now due for kitchen, bath and system updates.' }),
    buildHillsboroughCity({ slug: 'balm', name: 'Balm', locationDesc: 'an unincorporated community in southern Hillsborough County, Florida, east of Wimauma', permitJurisdiction: 'Hillsborough County', isCity: false, coastal: false, kitchenText: "From updating kitchens in Balm's rural homes to full layout changes with relocated plumbing and new circuits, we sequence every trade so the busiest room comes back online on schedule.", whyIntro: 'Balm is a small rural community in southern Hillsborough County with homes on acreage, much of it now due for kitchen, bath and system updates.' }),
];

export const cityPageByNeighborhood = {
    Tampa: 'tampa',
    Brandon: 'brandon',
    Riverview: 'riverview',
    Westchase: 'westchase',
    Lutz: 'lutz',
    Odessa: 'odessa',
    'FishHawk / Lithia': 'fishhawk',
    Mango: 'mango',
    'Lake Magdalene': 'lake-magdalene',
    'Temple Terrace': 'temple-terrace',
    'Carrollwood / Northdale': 'carrollwood-northdale',
    "Town 'n' Country": 'town-n-country',
    Seffner: 'seffner',
    Gibsonton: 'gibsonton',
    'Citrus Park': 'citrus-park',
    'Valrico / Bloomingdale': 'valrico-bloomingdale',
    Thonotosassa: 'thonotosassa',
    'Apollo Beach': 'apollo-beach',
    Keystone: 'keystone',
    Dover: 'dover',
    Ruskin: 'ruskin',
    'Plant City': 'plant-city',
    'Sun City Center': 'sun-city-center',
    Wimauma: 'wimauma',
    Balm: 'balm',
};

export const getHillsboroughCity = (slug) => hillsboroughCities.find((c) => c.slug === slug);
