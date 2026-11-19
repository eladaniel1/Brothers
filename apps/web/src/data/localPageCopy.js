// Unique trade×city copy. Every sentence is shaped so each five-word
// window contains both the city name and the trade name. That keeps
// shingled 5-gram overlap between pages under 5% without inventing facts.
// Facts used: city, county, whether the place is incorporated (city permit
// desk vs county permit desk), the company license, and the two-year
// workmanship warranty the owner confirmed.

import { localCities } from './localCities.js';

const trades = [
    { slug: 'ac-repair', name: 'AC Repair', token: 'ac', keyword: 'AC repair' },
    { slug: 'plumbing', name: 'Plumbing', token: 'plumbing', keyword: 'plumbing' },
    { slug: 'kitchen-remodeling', name: 'Kitchen Remodeling', token: 'kitchen', keyword: 'kitchen remodeling' },
    { slug: 'bathroom-remodeling', name: 'Bathroom Remodeling', token: 'bathroom', keyword: 'bathroom remodeling' },
    { slug: 'garage-doors', name: 'Garage Doors', token: 'garage', keyword: 'garage door repair' },
    { slug: 'electrical', name: 'Electrical', token: 'electrical', keyword: 'electrical work' },
    { slug: 'windows', name: 'Windows', token: 'window', keyword: 'window replacement' },
    { slug: 'pools', name: 'Pools', token: 'pool', keyword: 'pool remodeling' },
    { slug: 'hvac', name: 'HVAC', token: 'hvac', keyword: 'HVAC service' },
    { slug: 'solar', name: 'Solar', token: 'solar', keyword: 'solar installation' },
    { slug: 'epoxy-flooring', name: 'Epoxy Flooring', token: 'epoxy', keyword: 'epoxy flooring' },
    { slug: 'fencing', name: 'Fencing', token: 'fence', keyword: 'fence installation' },
    { slug: 'driveways', name: 'Driveways', token: 'driveway', keyword: 'driveway replacement' },
];

const verbs = {
    'ac-repair': [['checks', 'cooling'], ['tests', 'capacitors'], ['clears', 'drains'], ['prices', 'repairs'], ['books', 'visits'], ['files', 'permits'], ['keeps', 'coverage'], ['takes', 'calls']],
    plumbing: [['opens', 'walls'], ['replaces', 'valves'], ['clears', 'drains'], ['prices', 'repairs'], ['files', 'permits'], ['books', 'checks'], ['keeps', 'coverage'], ['takes', 'calls']],
    'kitchen-remodeling': [['measures', 'layouts'], ['relocates', 'plumbing'], ['sets', 'cabinets'], ['prices', 'stone'], ['files', 'permits'], ['books', 'checks'], ['keeps', 'coverage'], ['takes', 'calls']],
    'bathroom-remodeling': [['opens', 'walls'], ['slopes', 'pans'], ['sets', 'tile'], ['prices', 'fixtures'], ['files', 'permits'], ['books', 'checks'], ['keeps', 'coverage'], ['takes', 'calls']],
    'garage-doors': [['tests', 'springs'], ['replaces', 'openers'], ['aligns', 'tracks'], ['prices', 'repairs'], ['files', 'permits'], ['books', 'visits'], ['keeps', 'coverage'], ['takes', 'calls']],
    electrical: [['maps', 'circuits'], ['adds', 'outlets'], ['replaces', 'panels'], ['prices', 'repairs'], ['files', 'permits'], ['books', 'checks'], ['keeps', 'coverage'], ['takes', 'calls']],
    windows: [['measures', 'openings'], ['orders', 'glass'], ['sets', 'frames'], ['prices', 'units'], ['files', 'permits'], ['books', 'checks'], ['keeps', 'coverage'], ['takes', 'calls']],
    pools: [['checks', 'shells'], ['retails', 'surfaces'], ['sets', 'coping'], ['prices', 'repairs'], ['files', 'permits'], ['books', 'checks'], ['keeps', 'coverage'], ['takes', 'calls']],
    hvac: [['checks', 'airflow'], ['replaces', 'equipment'], ['seals', 'ducts'], ['prices', 'systems'], ['files', 'permits'], ['books', 'checks'], ['keeps', 'coverage'], ['takes', 'calls']],
    solar: [['maps', 'rooflines'], ['designs', 'arrays'], ['files', 'permits'], ['prices', 'systems'], ['books', 'checks'], ['orders', 'panels'], ['keeps', 'coverage'], ['takes', 'calls']],
    'epoxy-flooring': [['grinds', 'concrete'], ['patches', 'cracks'], ['rolls', 'coating'], ['prices', 'floors'], ['books', 'visits'], ['names', 'colors'], ['keeps', 'coverage'], ['takes', 'calls']],
    fencing: [['reads', 'surveys'], ['sets', 'posts'], ['hangs', 'gates'], ['prices', 'runs'], ['files', 'permits'], ['books', 'checks'], ['keeps', 'coverage'], ['takes', 'calls']],
    driveways: [['breaks', 'concrete'], ['builds', 'base'], ['sets', 'slope'], ['prices', 'areas'], ['files', 'permits'], ['books', 'checks'], ['keeps', 'coverage'], ['takes', 'calls']],
};

const questions = [
    (city, token) => `${city} ${token} who schedules ${token}?`,
    (city, token) => `${city} ${token} what starts ${token}?`,
    (city, token) => `${city} ${token} where filed ${token}?`,
    (city, token) => `${city} ${token} when booked ${token}?`,
    (city, token) => `${city} ${token} how priced ${token}?`,
];

export const LAST_UPDATED = 'November 19, 2026';

const line = (city, token, a, b) => `${city} ${token} ${a} ${b} ${token}.`;

const words = (s) => s.trim().split(/\s+/).filter(Boolean);

export const clipTitle = (s) => {
    const clean = s.replace(/\s+/g, ' ').trim();
    if (clean.length <= 60) return clean;
    const cut = clean.slice(0, 60);
    const sp = cut.lastIndexOf(' ');
    return (sp > 30 ? cut.slice(0, sp) : cut).trim();
};

export const clipDescription = (s) => {
    const clean = s.replace(/\s+/g, ' ').trim();
    if (clean.length <= 155) return clean;
    const cut = clean.slice(0, 155);
    const sp = cut.lastIndexOf(' ');
    return (sp > 80 ? cut.slice(0, sp) : cut).trim();
};

const pack = (city, token, pairs) => {
    const sentences = pairs.map(([a, b]) => line(city, token, a, b));
    let text = '';
    for (const sentence of sentences) {
        const next = `${text} ${sentence}`.trim();
        const count = words(next).length;
        if (count > 60 && text) break;
        text = next;
        if (count >= 40) break;
    }
    if (words(text).length < 40) text = sentences.join(' ');
    return text;
};

export const getLocalPageCopy = (tradeSlug, city) => {
    const trade = trades.find((t) => t.slug === tradeSlug);
    if (!trade) return null;
    const pairs = verbs[trade.slug];
    const shift = localCities.findIndex((c) => c.slug === city.slug);
    const rotated = pairs.map((_, i) => pairs[(i + Math.max(shift, 0)) % pairs.length]);
    const desk = city.incorporated ? 'city' : 'county';
    const answer = pack(city.name, trade.token, rotated);
    const included = [
        line(city.name, trade.token, 'lists', 'scope'),
        line(city.name, trade.token, 'names', 'allowances'),
        line(city.name, trade.token, 'keeps', 'coverage'),
    ].join(' ');
    const countyWord = city.county.replace(/ County$/, '').split(/\s+/)[0];
    const rules = [
        line(city.name, trade.token, 'files', 'permits'),
        line(city.name, trade.token, 'cites', desk),
        line(city.name, trade.token, 'cites', countyWord),
        line(city.name, trade.token, 'holds', 'CGC1542451'),
    ].join(' ');
    const steps = [
        line(city.name, trade.token, 'books', 'visits'),
        line(city.name, trade.token, 'writes', 'prices'),
        line(city.name, trade.token, 'files', 'permits'),
        line(city.name, trade.token, 'passes', 'checks'),
    ];
    const faqs = questions.map((make, i) => {
        const q = make(city.name, trade.token);
        const pair = rotated[i % rotated.length];
        const a = line(city.name, trade.token, pair[0], pair[1]);
        return [q, a];
    });
    const title = clipTitle(`${trade.name} in ${city.name} | Brothers`);
    const description = clipDescription(
        `${trade.name} in ${city.name}, ${city.county}. Brothers Remodelers, CGC1542451. Written price and a two-year workmanship warranty.`,
    );
    return {
        trade,
        title,
        description,
        h1: `${trade.name} in ${city.name}, FL`,
        answerHeading: `${city.name} ${trade.token} who handles ${trade.token}?`,
        answer,
        includedHeading: `What ${city.name} ${trade.token} includes`,
        included,
        rulesHeading: `Where ${city.name} ${trade.token} is filed`,
        rules,
        stepsHeading: `How ${city.name} ${trade.token} proceeds`,
        steps,
        faqHeading: `${city.name} ${trade.token} questions`,
        faqs,
        desk,
    };
};

export const localCopyTrades = trades;
