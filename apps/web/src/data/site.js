export const company = {
    name: 'Brothers Remodelers',
    short: 'Brothers Remodelers',
    tagline: 'Home remodeling built on craft, schedule and trust',
    phone: '(855) 445-2551',
    phoneHref: 'tel:+18554452551',
    telephone: '+1-855-445-2551',
    email: 'estimates@brothersremodelers.com',
    address: '13542 N Florida Ave, Tampa, FL 33613',
    streetAddress: '13542 N Florida Ave',
    addressLocality: 'Tampa',
    addressRegion: 'FL',
    postalCode: '33613',
    latitude: 28.0697,
    longitude: -82.4594,
    hours: 'Mon – Sat, 7:00am – 6:00pm',
    license: 'FL CGC Lic. #CGC1541183 · Fully licensed & insured',
    licenseNumber: 'CGC1541183',
    founded: 2006,
};

export const logoUrl =
    'https://horizons-cdn.hostinger.com/b998a1e9-1695-434b-b566-d83745f5f0ba/975588e2c561c9a0ccdfa00f7b57dfc1.jpg';

export const heroImage = '/images/hero-carpenter.jpg';
export const kitchenImage = '/images/kitchen.jpg';
export const founderImage = '/images/about-plans.jpg';
export const concreteImage = '/images/construction-site.jpg';
export const brownstoneImage = '/images/whole-home.jpg';
export const officeImage = '/images/office.jpg';

import { additionalServices } from './additionalServices';
import { tradeServices } from './tradeServices';

const coreServices = [
    {
        slug: 'general-contracting',
        title: 'General Contracting',
        summary: 'Single-source management of design, permits, trades and closeout for full-home remodels and renovations.',
        image: '/images/service-general-contracting.jpg',
        intro: 'We act as the single point of accountability from pre-construction budgeting through final sign-off, coordinating designers, engineers, and every trade on your remodel.',
        scope: [
            'Pre-construction budgeting and constructability review',
            'Permit filings coordinated with local building departments',
            'Trade procurement, buyout and scheduling',
            'Daily supervision with a dedicated site superintendent',
            'Punch list, closeout documentation and warranty',
        ],
        faqs: [
            ['How long does a full home renovation take?', 'A typical 1,800–3,000 sq ft whole-home renovation runs 14 to 22 weeks once permits are approved, depending on the municipality and any HOA or historic review.'],
            ['Do you handle permits?', 'Yes. We coordinate permit applications, wind-load and energy calculations, and inspections with the local building department and keep the permit board current on site.'],
        ],
    },
    {
        slug: 'kitchen-remodeling',
        title: 'Kitchen Remodeling',
        summary: 'Full kitchen rebuilds with relocated plumbing, custom millwork and stone fabrication managed end to end.',
        image: '/images/service-kitchen.jpg',
        intro: 'Kitchens carry the most trades per square foot of any room. We sequence demolition, rough plumbing, electrical loads, cabinetry and stone so the room lands exactly on the drawings.',
        scope: [
            'Layout studies and appliance clearance verification',
            'Plumbing and gas line relocation by licensed trades',
            'Dedicated circuits, under-cabinet and ceiling lighting',
            'Custom or semi-custom cabinetry installation',
            'Templated stone counters and full-height backsplashes',
        ],
        faqs: [
            ['Can we keep using the kitchen during work?', 'No, but we build a temporary prep station where the layout allows and keep the demolition-to-rough phase tight, usually under three weeks.'],
            ['Do you supply appliances?', 'We coordinate delivery and installation. Most clients purchase appliances directly for warranty reasons and we handle the rough-in specs.'],
        ],
    },
    {
        slug: 'bathroom-remodeling',
        title: 'Bathroom Remodeling',
        summary: 'Waterproofed, code-compliant bathrooms with tile setting, niches and rebuilt wet walls.',
        image: '/images/service-bathroom.jpg',
        intro: 'Every bathroom we build starts with the waterproofing assembly. Membranes, sloped shower pans and pressure-tested valves are inspected before a single tile is set.',
        scope: [
            'Full demolition to studs and blocking',
            'Sheet or liquid waterproofing membrane assemblies',
            'Curbless and low-threshold shower pans',
            'Large-format tile, mosaic and stone setting',
            'Ventilation upgrades to code CFM',
        ],
        faqs: [
            ['How long is a bathroom gut?', 'Four to six weeks for a single bathroom, including inspection windows and stone or glass lead times.'],
            ['Do you work in HOA communities?', 'Constantly. We carry the insurance certificates most associations require and work within HOA alteration agreements, approved vendor lists and work-hour restrictions.'],
        ],
    },
    {
        slug: 'home-additions',
        title: 'Home Additions & Extensions',
        summary: 'Rear additions, second-story builds and room expansions from foundation to roof tie-in.',
        image: '/images/service-additions.jpg',
        intro: 'Additions are structural work first and finishes second. We form and frame to the engineer’s drawings and Florida wind-load requirements, then blend the new envelope into the existing house.',
        scope: [
            'Footings, foundation walls and slab work',
            'Concrete block and engineered framing to wind code',
            'Roof tie-ins, flashing and high-wind-rated assemblies',
            'Window and door openings with impact-rated glazing',
            'Insulation, air sealing and energy code compliance',
        ],
        faqs: [
            ['Do we need zoning approval?', 'Most additions require a zoning analysis for FAR, setbacks and height. Our architect partners run this before you commit to a scope.'],
            ['Can we stay in the house?', 'Often yes for rear additions, since we isolate the work area with temporary partitions and separate access.'],
        ],
    },
    {
        slug: 'commercial-construction',
        title: 'Commercial Build-Outs',
        summary: 'Office, retail and light commercial interiors delivered on landlord schedules and after-hours windows.',
        image: '/images/service-commercial.jpg',
        intro: 'Commercial tenants are paying rent from day one. We plan build-outs around landlord rules, long-lead equipment and inspection sequencing so you open on the date you advertised.',
        scope: [
            'Tenant improvement and white-box build-outs',
            'ADA-compliant restrooms and egress paths',
            'HVAC distribution and electrical service upgrades',
            'Storefronts, signage supports and ceiling systems',
            'Night and weekend work in occupied buildings',
        ],
        faqs: [
            ['Can you work after hours?', 'Yes. Roughly a third of our commercial volume is scheduled outside business hours to keep neighboring tenants operating.'],
            ['Do you handle Special Inspections?', 'We coordinate all required special and progress inspections and keep the records package for your sign-off.'],
        ],
    },
    {
        slug: 'concrete-foundations',
        title: 'Concrete & Foundations',
        summary: 'Footings, slabs, driveways and structural repair with tested mixes and documented pours.',
        image: '/images/service-concrete.jpg',
        intro: 'Concrete is unforgiving, so we document it: mix designs, slump and cylinder tests, rebar inspection photos and cure logs for every structural pour.',
        scope: [
            'Footings, foundation walls and grade beams',
            'Slabs on grade, driveways and walkways',
            'Waterproofing, drainage and sump systems',
            'Patio, pool deck and lanai concrete',
            'Crack injection and structural repair',
        ],
        faqs: [
            ['Do you fix water infiltration?', 'Yes. We diagnose the path first, then combine exterior waterproofing, interior drainage or crack injection as the condition requires.'],
            ['Can you replace a cracked driveway?', 'We replace driveways and walkways to local code, with proper sub-base and reinforcement, and coordinate any required inspections.'],
        ],
    },
];

export const services = [...coreServices, ...additionalServices, ...tradeServices];

export const areas = [
    {
        slug: 'hillsborough',
        city: 'Hillsborough County',
        region: 'Hillsborough County, FL',
        blurb: 'Residential remodeling and general contracting services throughout Hillsborough County, Florida. We help homeowners with kitchen remodeling, bathroom remodeling, home additions, whole-home remodeling, concrete services, and general contracting projects.',
        image: kitchenImage,
        neighborhoods: ['Tampa', 'Brandon', 'Riverview', 'Westchase', 'Lutz', 'Odessa', 'FishHawk / Lithia', 'Mango', 'Lake Magdalene', 'Temple Terrace', 'Carrollwood / Northdale', "Town 'n' Country", 'Seffner', 'Gibsonton', 'Citrus Park', 'Valrico / Bloomingdale', 'Thonotosassa', 'Apollo Beach', 'Keystone', 'Dover', 'Ruskin', 'Plant City', 'Sun City Center', 'Wimauma', 'Balm'],
        notes: 'From Tampa’s historic bungalows in Seminole Heights to the growing subdivisions of Riverview, Westchase and FishHawk, Hillsborough County housing ranges from 1920s block construction to brand-new builds. As a Hillsborough County remodeling contractor, we coordinate city of Tampa and unincorporated-county permitting, wind-rated glazing and the flood-zone foundation details that come with Tampa Bay living. Tampa home remodeling clients get the same superintendent-on-site standard we run across every county we serve.',
    },
    {
        slug: 'pinellas',
        city: 'Pinellas County',
        region: 'Pinellas County, FL',
        blurb: 'Home remodels, kitchen and bath renovations, additions and concrete work across St. Petersburg, Clearwater, Largo, Palm Harbor and the Pinellas beach communities.',
        image: officeImage,
        neighborhoods: ['St. Petersburg', 'Clearwater', 'Largo', 'Palm Harbor', 'Pinellas Park', 'Dunedin', 'Tarpon Springs', 'Safety Harbor', 'Seminole', 'Treasure Island', 'St. Pete Beach', 'Madeira Beach', 'Gulfport', 'South Pasadena', 'Indian Rocks Beach', 'Indian Shores', 'Clearwater Beach', 'Tierra Verde', 'Oldsmar', 'East Lake', 'Kenneth City', 'Belleair'],
        notes: 'Pinellas County spans dense older housing stock in St. Petersburg and Clearwater to barrier-island homes from Treasure Island to Clearwater Beach. We plan around flood-zone elevation requirements, wind-rated glazing and the access and parking rules that come with barrier-island work.',
    },
    {
        slug: 'pasco',
        city: 'Pasco County',
        region: 'Pasco County, FL',
        blurb: 'Residential remodeling and general contracting services throughout Pasco County, from Wesley Chapel and Land O\' Lakes to New Port Richey and Zephyrhills.',
        image: concreteImage,
        neighborhoods: ['Wesley Chapel', "Land O' Lakes", 'Trinity', 'New Port Richey', 'Zephyrhills', 'Holiday', 'San Antonio', 'Port Richey'],
        notes: 'Pasco County is one of the fastest-growing counties in the region. We coordinate Pasco County and municipal permitting, and tailor foundation and drainage details for both older Gulf-coast homes and new subdivision builds.',
    },
    {
        slug: 'sarasota',
        city: 'Sarasota County',
        region: 'Sarasota County, FL',
        blurb: 'Whole-home renovations, kitchen and bath remodels, additions and concrete work across Sarasota, Venice, North Port, Siesta Key and Lakewood Ranch.',
        image: brownstoneImage,
        neighborhoods: ['Sarasota', 'Venice', 'North Port', 'Siesta Key', 'Longboat Key', 'Lakewood Ranch', 'Osprey', 'Nokomis', 'Englewood', 'Fruitville', 'Bee Ridge', 'University Park', 'Laurel', 'South Venice', 'Lido Key', 'Warm Mineral Springs'],
        notes: 'Sarasota County projects often move through HOA architectural review and coastal construction rules, especially on the keys. We file correctly the first time and keep boards comfortable.',
    },
    {
        slug: 'manatee',
        city: 'Manatee County',
        region: 'Manatee County, FL',
        blurb: 'Home remodels, kitchen and bath renovations, additions and concrete work across Bradenton, Palmetto, Parrish, Ellenton and Anna Maria Island.',
        image: heroImage,
        neighborhoods: ['Bradenton', 'Lakewood Ranch', 'Palmetto', 'Parrish', 'Ellenton', 'Bradenton Beach', 'Holmes Beach', 'Anna Maria', 'Cortez', 'Myakka City'],
        notes: 'Manatee County mixes 1950s-era Bradenton housing with rapid growth in Parrish and Lakewood Ranch. We tailor assemblies for coastal exposure on Anna Maria Island and inland humidity alike.',
    },
];

export const projects = [
    { title: 'Tampa Whole-Home Renovation', place: 'Hillsborough, FL', scope: 'Full remodel, kitchen, three baths', value: '$742,000', image: brownstoneImage },
    { title: 'Sarasota Kitchen & Baths', place: 'Sarasota, FL', scope: 'Kitchen, two baths, millwork', value: '$268,000', image: kitchenImage },
    { title: 'Bradenton Office Build-Out', place: 'Manatee, FL', scope: '6,400 sq ft tenant improvement', value: '$1.1M', image: officeImage },
    { title: 'Wesley Chapel Foundation & Driveway', place: 'Pasco, FL', scope: 'Footings, drainage, slab, driveway', value: '$186,000', image: concreteImage },
    { title: 'St. Petersburg Second-Story Addition', place: 'Pinellas, FL', scope: 'Second-story addition, new mechanicals', value: '$524,000', image: heroImage },
    { title: 'Venice Kitchen & Lanai Conversion', place: 'Sarasota, FL', scope: 'Kitchen remodel, lanai enclosure', value: '$213,000', image: kitchenImage },
];

export const testimonials = [
    { quote: 'They gave us a schedule in week one and hit it within four days on a 19-week whole-home renovation. The site was swept every evening.', name: 'Dana R.', role: 'Homeowner, Tampa' },
    { quote: 'Our lease clock was running. Brothers Remodelers worked nights, cleared inspections, and we opened the showroom on the advertised date.', name: 'Marcus H.', role: 'Retail Operations Director, St. Petersburg' },
    { quote: 'The foundation work was documented better than anything my engineer had seen from a contractor this size.', name: 'Elena V.', role: 'Homeowner, Wesley Chapel' },
    { quote: 'Change orders were priced before the work happened, in writing. That alone made them worth it.', name: 'Priya S.', role: 'Homeowner, Bradenton' },
];

export const processSteps = [
    ['Consultation', 'We walk the space, listen to the goal, and tell you honestly what it costs and what it does not.'],
    ['Estimate & scope', 'A line-item proposal with allowances stated plainly, so you can compare bids on equal terms.'],
    ['Pre-construction', 'Drawings, engineering, filings and long-lead procurement handled before demolition starts.'],
    ['Build', 'A dedicated superintendent, a live schedule, weekly photo updates and protected work areas.'],
    ['Inspection & closeout', 'Sign-offs, punch list, warranty documents and a clean handover you can move into.'],
];

export const faqs = [
    ['Are you licensed and insured?', 'Yes. We hold a Florida Certified General Contractor license and carry general liability, workers’ compensation and disability coverage. Certificates are issued to your HOA, lender or landlord on request.'],
    ['How do you price work?', 'Line-item fixed price after a scope walkthrough, with allowances stated for owner-selected finishes. Cost-plus is available for open-ended scopes.'],
    ['What does a free estimate include?', 'A site visit, a scope conversation and a written line-item proposal with an outline schedule, usually within five business days.'],
    ['Do you offer a warranty?', 'Two years on our workmanship, plus manufacturer warranties on installed products, documented at closeout.'],
    ['How do you handle change orders?', 'Nothing changes without a written, priced change order signed before the work proceeds.'],
    ['Do you work with architects and engineers?', 'Constantly, and we can introduce you to design partners if you do not have drawings yet.'],
    ['How do you protect occupied spaces?', 'Temporary partitions, negative air where required, floor protection, and daily cleanup with debris removed on schedule.'],
    ['What areas do you serve?', 'Hillsborough, Pinellas, Pasco, Sarasota and Manatee counties — the greater Tampa Bay and Sarasota region.'],
];

export const stats = [
    { value: 19, suffix: '+', label: 'Years of remodeling experience' },
    { value: 640, suffix: '+', label: 'Projects delivered' },
    { value: 96, suffix: '%', label: 'On-schedule completion' },
    { value: 2, suffix: ' yr', label: 'Workmanship warranty' },
];

export const nav = [
    { label: 'Home', to: '/' },
    {
        label: 'Services',
        to: '/services',
        children: services.map((s) => ({ label: s.title, to: `/services/${s.slug}` })),
    },
    {
        label: 'Areas',
        to: '/areas-we-serve',
        children: areas.map((a) => ({ label: a.city, to: a.path ?? `/areas-we-serve/${a.slug}` })),
    },
    {
        label: 'Company',
        to: '/about',
        children: [
            { label: 'About Us', to: '/about' },
            { label: 'Our Process', to: '/process' },
            { label: 'Projects', to: '/projects' },
            { label: 'Reviews', to: '/reviews' },
            { label: 'Safety & Insurance', to: '/safety' },
            { label: 'Financing', to: '/financing' },
            { label: 'Careers', to: '/careers' },
            { label: 'FAQ', to: '/faq' },
        ],
    },
    { label: 'Contact', to: '/contact' },
];
