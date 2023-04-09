import { adv1, cliExecute, equip, use, useFamiliar } from 'kolmafia'
import { $familiar, $item, $location, $skill, $slot, set } from 'libram'

import { doTest, smartSkill } from '../util'

export function doTestItem() {
    cliExecute('retrocape muscle')

    cliExecute('garden pick')
    use($item`peppermint sprout`)
    cliExecute('synth peppermint sprout, peppermint twist')

    equip($item`li'l ninja costume`)
    equip($item`A light that never goes out`)
    equip($item`vampyric cloake`)

    useFamiliar($familiar`Pair of Stomping Boots`)
    set('BC_leaveAfterEffect', true)
    set('BC_wantBatAdjacentForm', true)
    adv1($location`The Neverending Party`, -1, '')
    set('BC_leaveAfterEffect', false)

    equip($item`Guzzlr tablet`, $slot`acc1`)

    // I don't think we even actually have an item bird
    // smartSkill($skill`Visit your favorite bird`)

    use($item`cyclops eyedrops`)
    smartSkill($skill`Bind Spice Ghost`)
    smartSkill($skill`Steely-Eyed Squint`)
    use($item`bag of grain`)

    useFamiliar($familiar`Trick-or-Treating Tot`)
    smartSkill($skill`Fat Leon's Phat Loot Lyric`)

    cliExecute('genie effect Infernal Thirst')

    doTest(9)
}
