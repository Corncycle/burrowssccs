import {
    adv1,
    buy,
    cliExecute,
    equip,
    haveEffect,
    holiday,
    use,
    useFamiliar,
    visitUrl,
} from 'kolmafia'
import { $effect, $familiar, $item, $location, $skill, $slot, get } from 'libram'

import { doTest, smartHagnk, smartSkill } from '../util'

export function doTestWeapon() {
    cliExecute('equip acc2 doctor')
    useFamiliar($familiar`Trick-or-Treating Tot`)
    equip($item`li'l ninja costume`)

    cliExecute('reminisce ungulith')

    const gotCarol = haveEffect($effect`Do You Crush What I Crush?`) > 0
    if (!gotCarol) {
        if (holiday() !== 'El Dia De Los Muertos Borrachos' && holiday() !== 'Feast of Boris') {
            if (get('_snokebombUsed') < 3 || get('_kgbTranquilizerDartUses') < 3) {
                useFamiliar($familiar`Ghost of Crimbo Carols`)
                equip($item`Kremlin's Greatest Briefcase`, $slot`acc3`)

                while (haveEffect($effect`Do You Crush What I Crush?`) === 0) {
                    adv1($location`The Outskirts of Cobb's Knob`, -1, '')
                }
            }
        }
    }

    cliExecute('barrelprayer buff')

    buy($item`Desert Bus Pass`)
    visitUrl('inv_use.php?whichitem=10254&doit=96&whichsign=8') // moon sign blender
    cliExecute('buy meleegra')
    cliExecute('use meleegra')

    visitUrl('shop.php?whichshop=lathe') // acquire lathe material
    equip($item`Kremlin's Greatest Briefcase`, $slot`acc2`)
    equip($item`Powerful Glove`, $slot`acc3`)

    buy($item`goofily-plumed helmet`)
    cliExecute('hatter 20')
    cliExecute("boombox these fists were made for punchin'")
    cliExecute('beach head Lack of Body-Building')

    smartSkill($skill`Blood Frenzy`)
    smartSkill($skill`Scowl of the Auk`)
    smartSkill($skill`Rage of the Reindeer`)
    smartSkill($skill`Jackasses' Symphony of Destruction`)
    smartSkill($skill`Tenacity of the Snapper`)
    smartSkill($skill`Blessing of the War Snapper`)

    smartSkill($skill`Carol of the bulls`)
    smartSkill($skill`The Ode to Booze`)
    cliExecute('drink 1 sockdollager')
    cliExecute('cargo 284')
    use($item`yeg's motel toothbrush`)
    buy($item`wasabi marble soda`)
    cliExecute('pool 1')

    smartHagnk($item`pixel star`, 40000)
    use($item`pixel star`)

    smartHagnk($item`Stick-Knife of Loathing`, -1)
    equip($item`Stick-Knife of Loathing`)

    use($item`corrupted marrow`)

    smartSkill($skill`Bow-legged Swagger`)

    cliExecute('modtrace weapon damage')

    doTest(6)
}
