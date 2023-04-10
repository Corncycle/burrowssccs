import {
    abort,
    autosell,
    cliExecute,
    craft,
    drink,
    equip,
    itemAmount,
    myInebriety,
    myLevel,
    use,
    useFamiliar,
    visit,
    visitUrl,
} from 'kolmafia'
import { $familiar, $item, $skill, $slot, get } from 'libram'

import { doTest, smartSkill, upgradeSaber } from '../util'
import { ensureHermitItems } from '../util'
import { ensureGumItem } from '../util'

export function doTestCoilWire() {
    equip($item`Iunion Crown`)
    equip($item`vampyric cloake`)

    upgradeSaber(4)

    equip($slot`weapon`, $item`Fourth of May cosplay saber`)
    cliExecute('equip latte')
    equip($item`Cargo Cultist Shorts`)
    equip($slot`acc1`, $item`Eight Days a Week Pill Keeper`)
    cliExecute("equip acc2 Lil' Doctor bag")
    equip($slot`acc3`, $item`powerful glove`)

    visitUrl('clan_viplounge.php?action=lookingglass&whichfloor=2')
    visitUrl('place.php?whichplace=chateau&action=chateau_desk2')
    cliExecute('cheat 1952 Mickey Mantle')
    autosell($item`1952 Mickey Mantle card`, 1)

    cliExecute('cheat giant growth')

    visitUrl('tutorial.php?action=toot')
    use($item`letter from King Ralph XI`)
    use($item`pork elf goodies sack`)

    cliExecute('buy toy accordion')
    cliExecute('buy tenderizing hammer')
    cliExecute('buy crossbow string')
    cliExecute('buy 2 third-hand lantern')
    cliExecute('buy 2 cup of lukewarm tea')
    cliExecute('buy hermit permit')
    cliExecute('buy dramatic range')
    cliExecute("buy li'l candy corn costume")

    cliExecute('use dramatic range')

    ensureHermitItems(1, $item`seal tooth`)
    ensureHermitItems(1, $item`volleyball`)
    ensureHermitItems(2, $item`ketchup`)

    ensureGumItem($item`turtle totem`)

    smartSkill($skill`Inscrutable Gaze`)

    visitUrl('place.php?whichplace=campaway&action=campaway_sky')

    cliExecute('bastille muscle brutalist cannon')

    smartSkill($skill`Prevent Scurvy and Sobriety`)
    smartSkill($skill`Summon Smithsness`, 3)
    smartSkill($skill`Perfect Freeze`)

    const restsToUse = 3 - get('timesRested')
    for (let i = 0; i < restsToUse; i++) {
        visitUrl('place.php?whichplace=chateau&action=chateau_restlabelfree')
    }

    if (myLevel() < 5) {
        abort('Failed to hit level 5 for perfect drink')
    }

    if (myInebriety() < 3) {
        if (itemAmount($item`perfect ice cube`) === 0 || itemAmount($item`bottle of rum`) === 0) {
            abort('Failed to get perfect drink ingredients')
        }
        smartSkill($skill`The Ode to Booze`)
        craft('cocktail', 1, $item`perfect ice cube`, $item`bottle of rum`)
        drink(1, $item`perfect dark and stormy`)
    }

    equip($item`Jurassic parka`)
    cliExecute('parka acid')
    cliExecute('reminisce swarm of fudge wasps')

    useFamiliar($familiar`exotic parrot`)

    doTest(11)
}
