import { acRepairEssays } from './ac-repair.js';
import { bathroomEssays } from './bathroom-remodeling.js';
import { drivewayEssays } from './driveways.js';
import { electricalEssays } from './electrical.js';
import { epoxyEssays } from './epoxy-flooring.js';
import { fencingEssays } from './fencing.js';
import { garageDoorEssays } from './garage-doors.js';
import { hvacEssays } from './hvac.js';
import { kitchenEssays } from './kitchen-remodeling.js';
import { plumbingEssays } from './plumbing.js';
import { poolsEssays } from './pools.js';
import { solarEssays } from './solar.js';
import { windowsEssays } from './windows.js';

const byTrade = {
    'ac-repair': acRepairEssays,
    'bathroom-remodeling': bathroomEssays,
    driveways: drivewayEssays,
    electrical: electricalEssays,
    'epoxy-flooring': epoxyEssays,
    fencing: fencingEssays,
    'garage-doors': garageDoorEssays,
    hvac: hvacEssays,
    'kitchen-remodeling': kitchenEssays,
    plumbing: plumbingEssays,
    pools: poolsEssays,
    solar: solarEssays,
    windows: windowsEssays,
};

export const getCityEssay = (tradeSlug, citySlug) => byTrade[tradeSlug]?.[citySlug] || null;

export const LAST_UPDATED = 'November 19, 2026';
