import { abort, myBuffedstat, myMaxhp, use } from 'kolmafia'
import { $item, $skill, $stat } from 'libram'

import { doTest, smartSkill } from '../util'

export function doTestHp() {
    if (myMaxhp() - myBuffedstat($stat`muscle`) - 3 < 1770) {
        smartSkill($skill`Chubby and Plump`)
        use($item`Chubby and Plump bar`)
    }

    if (myMaxhp() - myBuffedstat($stat`muscle`) - 3 < 1770) {
        abort('HP test not capped when we expected it to be')
    }

    doTest(1)
}
