import {
    Item,
    itemAmount,
    buy,
    use,
    cliExecute,
    print,
    visitUrl,
    runChoice,
    Skill,
    mpCost,
    myMp,
    totalFreeRests,
    create,
    eat,
    useSkill,
    toInt,
    storageAmount,
    takeStorage,
    buyUsingStorage,
    abort,
} from 'kolmafia'
import { $item, MagicalSausages, get, set } from 'libram'

export function ensureHermitItems(quantity: number, it: Item) {
    while (itemAmount(it) < quantity) {
        if (itemAmount($item`hermit permit`) === 0) {
            buy(1, $item`hermit permit`)
        }
        ensureWorthlessItem()
        cliExecute(`hermit 1 ${it}`)
    }
}

export function ensureGumItem(it: Item) {
    while (itemAmount(it) === 0) {
        if (itemAmount($item`chewing gum on a string`) === 0) {
            buy(1, $item`chewing gum on a string`)
        }
        use(1, $item`chewing gum on a string`)
    }
}

export function ensureWorthlessItem() {
    while (
        itemAmount($item`worthless gewgaw`) === 0 &&
        itemAmount($item`worthless trinket`) === 0 &&
        itemAmount($item`worthless knick-knack`) === 0
    ) {
        if (itemAmount($item`chewing gum on a string`) === 0) {
            buy(1, $item`chewing gum on a string`)
        }
        use(1, $item`chewing gum on a string`)
    }
}

export function clearBCProperties() {
    set('BC_wantGiantGrowth', false)
    set('BC_wantMistyForm', false)
    set('BC_wantBatAdjacentForm', false)
    set('BC_wantWolfishForm', false)
    set('BC_wantFireproof', false)
}

export function testDone(testConstant: number) {
    print(`Checking test ${testConstant}...`)
    const text = visitUrl('council.php')
    return !text.includes(`<input type=hidden name=option value=${testConstant}>`)
}

export function upgradeSaber(upgrade: number) {
    if (get('_saberMod') === 0) {
        visitUrl('main.php?action=may4')
        runChoice(upgrade)
    } else {
        print('Saber already upgraded', 'red')
    }
}

export function recoverMp(desiredMp: number): boolean {
    while (myMp() < desiredMp) {
        if (totalFreeRests() - get('timesRested') > 0) {
            visitUrl('place.php?whichplace=chateau&action=chateau_restlabelfree')
            continue
        }

        if (create($item`magical sausage`)) {
            eat($item`magical sausage`)
            continue
        }

        return false
    }
    return true
}

export function smartSkill(skill: Skill, times = 1): boolean {
    let timesCast = 0
    const cost = mpCost(skill)
    while (timesCast < times) {
        let success = true
        if (myMp() < cost) {
            success = recoverMp(cost)
        }
        if (!success) {
            return false
        }
        useSkill(skill, 1)
        timesCast += 1
    }
    return true
}

export function doTest(testConstant: number) {
    if (!testDone(testConstant)) {
        visitUrl(`choice.php?whichchoice=1089&option=${testConstant}`)
        if (!testDone(testConstant)) {
            print(`Failed to do test ${testConstant}. Maybe we are out of turns`)
        }
    } else {
        print(`Test ${testConstant} already completed`)
    }
}

export function pizza(it1: Item, it2: Item, it3: Item, it4: Item) {
    if (itemAmount($item`diabolic pizza`) > 0) {
        print('Already have a pizza')
        return
    }
    if (
        itemAmount(it1) === 0 ||
        itemAmount(it2) === 0 ||
        itemAmount(it3) === 0 ||
        itemAmount(it4) === 0
    ) {
        print('Missing items for pizza', 'red')
        return
    }
    visitUrl(
        `campground.php?action=makepizza&pizza=${toInt(it1)},${toInt(it2)},${toInt(it3)},${toInt(
            it4
        )}`
    )
    eat($item`diabolic pizza`)
}

// we reserve 1 free kill for a haiku ninja
export function freeKillsLeft(): number {
    let out = 0
    out += 2 - get('_shatteringPunchUsed')
    out += 3 - get('_chestXRayUsed')
    return out
}

export function smartHagnk(it: Item, maxPrice: number) {
    if (storageAmount(it) > 0) {
        takeStorage(it, 1)
    } else if (buyUsingStorage(it, 1, maxPrice) > 0) {
        takeStorage(it, 1)
    } else {
        abort(`Couldn't buy ${it} for ${maxPrice} meat to pull`)
    }
}
