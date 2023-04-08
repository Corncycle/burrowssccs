import { cliExecute, equip, takeStorage, use, useFamiliar } from 'kolmafia'
import { $familiar, $item, $skill, $slot } from 'libram'

import { doTest, smartHagnk, smartSkill } from '../util'

export function doTestFamiliar() {
    cliExecute('pool 1')
    cliExecute('cheat rope')
    equip($item`rope`, $slot`off-hand`)
    equip($item`hewn moon-rune spoon`, $slot`acc2`)
    equip($item`beach comb`, $slot`acc3`)

    useFamiliar($familiar`Exotic Parrot`)
    equip($item`cracker`, $slot`familiar`)

    equip($item`Daylight Shavings Helmet`)

    use($item`silver face paint`)

    smartHagnk($item`recording of Chorale of Companionship`, 15000)
    use($item`recording of Chorale of Companionship`)
    use($item`short stack of pancakes`)

    smartHagnk($item`Stephen's lab coat`, -1)
    equip($item`Stephen's lab coat`)

    smartHagnk($item`Greaves of the Murk Lord`, -1)
    equip($item`Greaves of the Murk Lord`)

    cliExecute('modtrace familiar weight')

    doTest(5)
}
