import { buy, cliExecute, equip, runChoice, runCombat, use, useFamiliar, visitUrl } from 'kolmafia'
import { $familiar, $item, $skill, $slot } from 'libram'

import { doTest, smartSkill } from '../util'

export function doTestNoncombat() {
    equip($item`Eight Days a Week Pill Keeper`, $slot`acc1`)
    equip($item`Iunion Crown`)
    equip($item`Cargo Cultist Shorts`)

    useFamiliar($familiar`God Lobster`)
    visitUrl('main.php?fightgodlobster=1')
    runCombat()
    runChoice(2)

    equip($item`powerful glove`, $slot`acc3`)
    cliExecute('cast invisible avatar')

    useFamiliar($familiar`Disgeist`)

    smartSkill($skill`Smooth Movement`)
    smartSkill($skill`The Sonata of Sneakiness`)

    equip($item`Brutal brogues`, $slot`acc1`)
    buy($item`porkpie-mounted popper`)
    equip($item`porkpie-mounted popper`)

    cliExecute('swim sprints')

    equip($item`protonic accelerator pack`)
    cliExecute('beach head Do I Know You From Somewhere?')

    smartSkill($skill`Empathy of the newt`)
    smartSkill($skill`Leash of linguini`)
    smartSkill($skill`Blood Bond`)

    smartSkill($skill`Feel Lonely`)
    cliExecute('genie effect disquiet riot')
    use($item`shady shades`)

    cliExecute('modtrace combat rate')

    doTest(8)
}
