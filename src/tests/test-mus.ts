import { abort, buy, cliExecute, myBasestat, myBuffedstat, use } from 'kolmafia'
import { $item, $stat } from 'libram'

import { doTest } from '../util'

export function doTestMus() {
    buy($item`ben-gal balm`)
    use($item`ben-gal balm`)

    cliExecute('equip superhero cape')

    if (myBuffedstat($stat`muscle`) - myBasestat($stat`muscle`) < 1770) {
        abort('Mus test not capped when we expected it to be')
    }

    doTest(2)
}
