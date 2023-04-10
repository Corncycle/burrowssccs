import { abort, cliExecute, itemAmount, print, use, visitUrl, waitq } from 'kolmafia'
import { $item, set } from 'libram'

import { doTestCoilWire } from './tests/test-coil-wire'
import { doTestFamiliar } from './tests/test-familiar'
import { doTestHotRes } from './tests/test-hot-res'
import { doTestHp } from './tests/test-hp'
import { doTestItem } from './tests/test-item'
import { doTestMox } from './tests/test-mox'
import { doTestMus } from './tests/test-mus'
import { doTestMys } from './tests/test-mys'
import { doTestNoncombat } from './tests/test-noncombat'
import { doTestSpell } from './tests/test-spell'
import { doTestWeapon } from './tests/test-weapon'
import { clearBCProperties, doTest, testDone } from './util'

const TEST_HP = 1
const TEST_MUS = 2
const TEST_MYS = 3
const TEST_MOX = 4
const TEST_FAMILIAR = 5
const TEST_WEAPON = 6
const TEST_SPELL = 7
const TEST_NONCOMBAT = 8
const TEST_ITEM = 9
const TEST_HOT_RES = 10
const TEST_COIL_WIRE = 11

export default function main(): void {
    clearBCProperties()
    set('customCombatScript', 'burrows_hccs')
    visitUrl('council.php')

    if (itemAmount($item`diabolic pizza cube`)) {
        use($item`diabolic pizza cube`)
    }

    if (!testDone(TEST_COIL_WIRE)) {
        doTestCoilWire()
    }

    if (!testDone(TEST_MYS)) {
        doTestMys()
    }

    if (!testDone(TEST_HP)) {
        doTestHp()
    }

    if (!testDone(TEST_MUS)) {
        doTestMus()
    }

    if (!testDone(TEST_MOX)) {
        doTestMox()
    }

    if (!testDone(TEST_ITEM)) {
        doTestItem()
    }

    if (!testDone(TEST_HOT_RES)) {
        doTestHotRes()
    }

    if (!testDone(TEST_NONCOMBAT)) {
        doTestNoncombat()
    }

    if (!testDone(TEST_FAMILIAR)) {
        doTestFamiliar()
    }

    if (!testDone(TEST_WEAPON)) {
        doTestWeapon()
    }

    if (!testDone(TEST_SPELL)) {
        doTestSpell()
    }

    doTest(30)

    cliExecute('ccs aftercore_combat')
    cliExecute('hagnk all')
}
