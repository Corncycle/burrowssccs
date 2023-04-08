import {
    abort,
    adv1,
    cliExecute,
    equip,
    itemAmount,
    numericModifier,
    toLocation,
    useFamiliar,
} from 'kolmafia'
import { $familiar, $item, $location, $slot, set } from 'libram'

import { doTest } from '../util'

export function doTestHotRes() {
    cliExecute('retrocape muscle')

    useFamiliar($familiar`Trick-or-Treating Tot`)
    equip($item`li'l candy corn costume`)
    equip($item`Kremlin's Greatest Briefcase`, $slot`acc1`)

    equip($item`vampyric cloake`)
    useFamiliar($familiar`Pair of Stomping Boots`)
    set('BC_leaveAfterEffect', true)
    set('BC_wantMistyForm', true)
    adv1($location`The Neverending Party`, -1, '')
    set('BC_leaveAfterEffect', false)

    while (itemAmount($item`high-temperature mining mask`) === 0) {
        adv1($location`The Velvet / Gold Mine`, -1, '')
    }

    equip($item`industrial fire extinguisher`, $slot`off-hand`)
    set('BC_wantFireproof', true)
    while (itemAmount($item`heat-resistant gloves`) === 0) {
        adv1(toLocation(450), -1, '') // LavaCo Lamp factory has an annoying character in the name
    }

    useFamiliar($familiar`Trick-or-Treating Tot`)
    cliExecute('equip superhero cape')

    equip($item`lava-proof pants`)
    equip($item`heat-resistant gloves`, $slot`acc1`)
    equip($item`high-temperature mining mask`)

    if (numericModifier('Hot Resistance') < 59) {
        abort('Hot res test not capped when we expected it to be')
    }

    doTest(10)
}
