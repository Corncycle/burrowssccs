import {
    abort,
    buy,
    cliExecute,
    itemAmount,
    myBasestat,
    myBuffedstat,
    toSkill,
    use,
} from 'kolmafia'
import { $item, $skill, $stat } from 'libram'

import { doTest, smartSkill } from '../util'

export function doTestMox() {
    cliExecute('retrocape moxie')
    cliExecute('equip superhero cape')
    buy($item`hair spray`)
    use($item`hair spray`)

    use($item`Bird-a-Day calendar`)
    smartSkill(toSkill(7323)) // see daily bird

    cliExecute('beach head Pomp & Circumsands')

    if (itemAmount($item`runproof mascara`) > 0) {
        use($item`runproof mascara`)
    }

    smartSkill($skill`Disco Smirk`)

    if (myBuffedstat($stat`moxie`) - myBasestat($stat`moxie`) < 1770) {
        use($item`rhinestone`, itemAmount($item`rhinestone`))
    }

    if (myBuffedstat($stat`moxie`) - myBasestat($stat`moxie`) < 1770) {
        abort('Mox test not capped when we expected it to be')
    }

    doTest(4)
}
