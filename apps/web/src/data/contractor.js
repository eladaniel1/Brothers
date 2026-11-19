export const CONTRACTOR_ID = 'https://brothersremodelers.com/#contractor';

const counties = ['Hillsborough County', 'Pinellas County', 'Pasco County', 'Sarasota County', 'Manatee County'];

export const contractorNode = {
    '@type': ['GeneralContractor', 'LocalBusiness'],
    '@id': CONTRACTOR_ID,
    name: 'Brothers Remodelers',
    legalName: 'Republic Renovations Inc',
    url: 'https://brothersremodelers.com/',
    telephone: '+1-855-445-2551',
    email: 'estimates@brothersremodelers.com',
    image: 'https://brothersremodelers.com/images/brothers-logo.webp',
    address: {
        '@type': 'PostalAddress',
        streetAddress: '13542 N Florida Ave',
        addressLocality: 'Tampa',
        addressRegion: 'FL',
        postalCode: '33613',
        addressCountry: 'US',
    },
    identifier: {
        '@type': 'PropertyValue',
        propertyID: 'Florida DBPR CGC',
        value: 'CGC1542451',
        description: 'Certified General Contractor license held by Daniel Alejandro Cardenas Romero d/b/a Brothers Remodelers, qualifier for Republic Renovations Inc d/b/a Brothers Remodelers. The Tampa office is not the license address.',
    },
    areaServed: counties.map((name) => ({ '@type': 'AdministrativeArea', name })),
};
