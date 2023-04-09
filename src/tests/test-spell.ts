import { buy, cliExecute, craft, equip, myHash, use, useFamiliar, visitUrl } from 'kolmafia'
import { $familiar, $item, $skill, $slot } from 'libram'

import { doTest, smartSkill } from '../util'

export function doTestSpell() {
    // collect batteries
    visitUrl('inv_use.php?pwd&whichitem=10738')
    for (let i = 1; i < 8; i++) {
        visitUrl(`choice.php?pwd=${myHash()}&whichchoice=1448&option=1&pp=${i}`)
    }
    cliExecute('make 10 meat paste')
    craft('combine', 2, $item`battery (AAA)`, $item`battery (AAA)`)
    craft('combine', 1, $item`battery (AA)`, $item`battery (AAA)`)

    use($item`battery (AAA)`)
    use($item`battery (AA)`)
    use($item`battery (D)`)

    use($item`LOV Elixir #6`)
    smartSkill($skill`Carol of the Hells`)
    cliExecute('pool 2')

    cliExecute("beach head We're All Made of Starfish")

    buy($item`weeping willow wand`)
    equip($item`weeping willow wand`, $slot`off-hand`)

    cliExecute('briefcase enchantment spell')
    smartSkill($skill`Arched eyebrow of the archmage`)
    smartSkill($skill`simmer`)
    cliExecute('genie effect Witch Breaded')

    useFamiliar($familiar`Trick-or-Treating Tot`)
    equip($item`li'l candy corn costume`)
    equip($item`hewn moon-rune spoon`, $slot`acc1`)

    smartSkill($skill`Astral Shell`)
    smartSkill($skill`Elemental Saucesphere`)
    visitUrl('clan_viplounge.php?action=hottub')
    smartSkill($skill`Deep Dark Visions`)

    useFamiliar($familiar`Left-Hand Man`)
    equip($item`Abracandalabra`, $slot`familiar`)

    cliExecute('modtrace spell damage')

    doTest(7)
}
