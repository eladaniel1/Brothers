import bathroomRemodelingTampa, { bathroomRemodelingTampaToLlms } from './bespoke/bathroom-remodeling-tampa';

// One module per trade×city page. Lookup only. No sentence templates.
const pages = {
    [bathroomRemodelingTampa.key]: bathroomRemodelingTampa,
};

const toLlms = {
    [bathroomRemodelingTampa.key]: bathroomRemodelingTampaToLlms,
};

export const bespokeLocalPages = Object.values(pages);

export const getBespokeLocalPage = (slug, citySlug) => pages[`${slug}/${citySlug}`] || null;

export const bespokePageToLlms = (page, site) => toLlms[page.key](site);
