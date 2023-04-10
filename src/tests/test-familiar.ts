import { cliExecute, equip, takeStorage, use, useFamiliar } from 'kolmafia'
import { $effect, $familiar, $item, $skill, $slot } from 'libram'

import { doTest, monkeyWish, smartHagnk, smartSkill } from '../util'

export function doTestFamiliar() {
    cliExecute('pool 1')
    cliExecute('cheat rope')
    equip($item`rope`, $slot`off-hand`)
    equip($item`hewn moon-rune spoon`, $slot`acc2`)
    equip($item`beach comb`, $slot`acc3`)

    useFamiliar($familiar`Mini-trainbot`)
    smartHagnk($item`overloaded yule battery`, -1)
    equip($item`overloaded yule battery`)

    equip($item`Daylight Shavings Helmet`)

    use($item`silver face paint`)

    monkeyWish($effect`Joy`)

    smartHagnk($item`recording of Chorale of Companionship`, 15000)
    use($item`recording of Chorale of Companionship`)
    use($item`short stack of pancakes`)

    smartHagnk($item`Stephen's lab coat`, -1)
    equip($item`Stephen's lab coat`)

    cliExecute('modtrace familiar weight')

    doTest(5)
}
