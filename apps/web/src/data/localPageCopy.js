// Trade-by-city copy. Each beat is chosen with (city + prime * trade) mod 31
// so any two pages share at most one beat. Facts are limited to the city,
// county, recorded building department, the Florida Building Code edition in
// force on November 19, 2026, and the confirmed two-year workmanship warranty.

import { localCities } from './localCities.js';
import { say, tradeFacts } from './localPageVoice.js';

const permitHints = {
    'ac-repair': 'System changes need a permit.',
    plumbing: 'Moved plumbing needs a permit.',
    'kitchen-remodeling': 'Moved pipes or new circuits need a permit.',
    'bathroom-remodeling': 'Moved fixtures need a permit.',
    'garage-doors': 'A new door may need a permit.',
    electrical: 'New circuits need a permit.',
    windows: 'Window replacement is typically permitted.',
    pools: 'Structural pool work needs a permit.',
    hvac: 'System replacement needs a permit.',
    solar: 'Arrays need a permit and utility approval.',
    'epoxy-flooring': 'A slab coating usually needs no permit.',
    fencing: 'A new fence usually needs a permit.',
    driveways: 'A street apron often needs a permit.',
};

export const LAST_UPDATED = 'November 19, 2026';

const words = (s) => s.trim().split(/\s+/).filter(Boolean);

export const clipTitle = (s) => {
    const clean = s.replace(/\s+/g, ' ').trim();
    if (clean.length <= 60) return clean;
    const cut = clean.slice(0, 60);
    const space = cut.lastIndexOf(' ');
    return (space > 30 ? cut.slice(0, space) : cut).trim();
};

export const clipDescription = (s) => {
    const clean = s.replace(/\s+/g, ' ').trim();
    if (clean.length <= 155) return clean;
    const cut = clean.slice(0, 155);
    const space = cut.lastIndexOf(' ');
    return (space > 80 ? cut.slice(0, space) : cut).trim();
};

const mod = (cityIndex, tradeIndex, prime) => (cityIndex + prime * tradeIndex) % 31;

const fitAnswer = (parts) => {
    let text = parts.join(' ').replace(/\s+/g, ' ').trim();
    const extra = [
        'The proposal is the page to compare.',
        'Demolition waits for your approval.',
        'We do not price the job from a photograph.',
    ];
    let i = 0;
    while (words(text).length < 40 && i < extra.length) {
        text = `${text} ${extra[i]}`;
        i += 1;
    }
    while (words(text).length > 60) {
        const sentences = text.split(/(?<=\.)\s+/);
        if (sentences.length < 2) break;
        const shorter = sentences.slice(0, -1).join(' ');
        if (words(shorter).length < 40) break;
        text = shorter;
    }
    return text;
};

export const permitShort = (city) => {
    const head = city.permitOffice.split(/,| for /)[0];
    const cityDesk = /City of /i.test(head);
    const countyToo = /County/i.test(city.permitOffice);
    if (cityDesk && countyToo) return 'City or county';
    if (cityDesk) return `City of ${city.name}`;
    return city.county.replace(/ County$/, '');
};

export const getLocalPageCopy = (tradeSlug, city) => {
    const trade = tradeFacts.find((item) => item.slug === tradeSlug);
    if (!trade || !city) return null;
    const cityIndex = Math.max(0, localCities.findIndex((item) => item.slug === city.slug));
    const tradeIndex = tradeFacts.findIndex((item) => item.slug === trade.slug);
    const c = city.name;
    const t = trade.noun;
    const bitA = trade.bits[(cityIndex + tradeIndex) % trade.bits.length];
    const bitB = trade.bits[(cityIndex + 2 + tradeIndex) % trade.bits.length];
    const extra = { a: bitA, b: bitB, office: city.permitOffice };

    const open = say('open', mod(cityIndex, tradeIndex, 1), c, t);
    const price = say('price', mod(cityIndex, tradeIndex, 2), c, t);
    const file = say('file', mod(cityIndex, tradeIndex, 3), c, t, extra);
    const warranty = say('warranty', mod(cityIndex, tradeIndex, 4), c, t);
    const included = say('include', mod(cityIndex, tradeIndex, 5), c, t, extra);
    const steps = [1, 2, 3, 4].map((prime, index) => say(`step${index + 1}`, mod(cityIndex, tradeIndex, prime + 5), c, t));
    const code = `${t.charAt(0).toUpperCase()}${t.slice(1)} in ${c} filed through December 30, 2026 is reviewed under the Florida Building Code, 8th Edition (2023). The 9th Edition takes effect December 31, 2026.`;
    const portal = city.permitPortalName ? `Plan review for ${t} in ${c} uses ${city.permitPortalName}.` : '';
    const why = [...trade.why.slice(cityIndex % trade.why.length), ...trade.why.slice(0, cityIndex % trade.why.length)].join(', ');
    const cost = `In ${c}, ${t} cost follows ${why}.`;
    const permitFact = permitHints[trade.slug];
    const countyLine = `${t.charAt(0).toUpperCase()}${t.slice(1)} in ${c} is in ${city.county}.`;
    const rules = `${file} ${permitFact} ${code}${portal ? ` ${portal}` : ''} ${countyLine}`
        .replace(/\s+/g, ' ')
        .trim();

    const answer = fitAnswer([open, price, warranty]);
    const faqs = [
        [`Who files ${t} permits in ${c}?`, file],
        [`When does ${t} in ${c} need a permit?`, permitFact],
        [`What changes ${t} prices in ${c}?`, cost],
        [`How does ${t} in ${c} start?`, steps[0]],
        [`What warranty covers ${t} in ${c}?`, warranty],
    ];

    return {
        trade,
        title: clipTitle(`${trade.name} in ${c} | Brothers`),
        description: clipDescription(`${trade.name} in ${c}, ${city.county}. Brothers Remodelers files with ${city.permitOffice}. Written price. Two-year workmanship warranty.`),
        h1: `${trade.name} in ${c}, FL`,
        answerHeading: `Who handles ${t} in ${c}?`,
        answer,
        includedHeading: `What does ${t} in ${c} include?`,
        included,
        stepsHeading: `How does ${t} in ${c} run?`,
        steps,
        stepTitles: ['Visit', 'Proposal', 'Permit', 'Closeout'],
        rulesHeading: `Who permits ${t} in ${c}?`,
        rules,
        costHeading: `What affects ${t} cost in ${c}?`,
        cost,
        faqHeading: `Questions about ${t} in ${c}`,
        faqs,
        permitLabel: city.permitOffice.replace(/^the /i, '').replace(/\.$/, ''),
        permitShort: permitShort(city),
    };
};

export const localCopyTrades = tradeFacts.map(({ slug, name, noun }) => ({ slug, name, token: noun, keyword: noun }));
