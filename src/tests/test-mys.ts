import {
    abort,
    adv1,
    buy,
    cliExecute,
    craft,
    drink,
    equip,
    haveEffect,
    itemAmount,
    myBasestat,
    myBuffedstat,
    myHash,
    myLevel,
    runChoice,
    runCombat,
    setProperty,
    totalFreeRests,
    use,
    useFamiliar,
    visitUrl,
} from 'kolmafia'
import {
    $effect,
    $familiar,
    $item,
    $location,
    $monster,
    $skill,
    $slot,
    $stat,
    get,
    have,
    set,
} from 'libram'
import { mapMonster } from 'libram/dist/resources/2020/Cartography'

import { doTest, ensureHermitItems, freeKillsLeft, pizza, smartSkill } from '../util'

export function doTestMys() {
    cliExecute('garden pick')

    craft('smith', 1, $item`lump of brituminous coal`, $item`third-hand lantern`)
    cliExecute('make 1 meat stack')
    cliExecute('buy 2 cog')
    cliExecute('buy 2 sprocket')
    cliExecute('buy 2 spring')
    cliExecute('buy 1 empty meat tank')
    cliExecute('buy 1 gnollish plunger')
    craft('combine', 2, $item`sprocket`, $item`spring`)
    craft('combine', 2, $item`sprocket assembly`, $item`cog`)
    craft('combine', 1, $item`empty meat tank`, $item`meat stack`)
    craft('combine', 1, $item`full meat tank`, $item`cog and sprocket assembly`)
    craft('combine', 1, $item`meat engine`, $item`gnollish plunger`)

    ensureHermitItems(1, $item`hot buttered roll`)
    use($item`seal tooth`)
    use($item`volleyball`)

    useFamiliar($familiar`exotic parrot`)

    pizza(
        $item`hot buttered roll`,
        $item`gnollish autoplunger`,
        $item`blood-faced volleyball`,
        $item`cog and sprocket assembly`
    )

    cliExecute('shower warm')

    craft('cocktail', 1, $item`handful of smithereens`, $item`cup of lukewarm tea`)
    for (let i = 0; i < 3; i++) {
        visitUrl('place.php?whichplace=campaway&action=campaway_sky')
    }

    smartSkill($skill`inscrutable gaze`)
    use($item`a ten-percent bonus`)
    visitUrl('place.php?whichplace=town_right&action=townright_vote')
    visitUrl(`choice.php?pwd=${myHash()}&option=1&whichchoice=1331&g=2&local%5B%5D=2&local%5B%5D=2`)

    smartSkill($skill`carol of the thrills`)
    cliExecute('beach head You Learned Something Maybe!')
    use($item`flaskfull of hollow`)

    useFamiliar($familiar`Ghost of Crimbo Carols`)
    equip($item`Powerful Glove`, $slot`acc1`)
    equip($item`Kremlin's Greatest Briefcase`, $slot`acc3`)

    buy($item`Doc Galaktik's Invigorating Tonic`, 5)
    use($item`Doc Galaktik's Invigorating Tonic`, 5)
    adv1($location`The Velvet / Gold Mine`, -1, '')
    adv1($location`The Velvet / Gold Mine`, -1, '')

    smartSkill($skill`acquire rhinestones`)
    smartSkill($skill`Pirate Bellow`)
    smartSkill($skill`Pastamastery`)
    smartSkill($skill`Advanced Cocktailcrafting`)
    smartSkill($skill`Advanced Saucecrafting`)
    smartSkill($skill`Summon Crimbo Candy`)
    smartSkill($skill`Summon Alice's Army Cards`)
    smartSkill($skill`Fat Leon's Phat Loot Lyric`)
    smartSkill($skill`Singer's Faithful Ocelot`)
    smartSkill($skill`Empathy of the newt`)
    smartSkill($skill`Leash of Linguini`)
    smartSkill($skill`Blood Bond`)
    smartSkill($skill`Carol of the Hells`)
    smartSkill($skill`The Spirit of Taking`)
    smartSkill($skill`Get Big`)
    smartSkill($skill`Stevedave's Shanty of Superiority`)
    smartSkill($skill`Rage of the Reindeer`)
    smartSkill($skill`Sauce Contemplation`)
    smartSkill($skill`Seal Clubbing Frenzy`)

    cliExecute('cast triple size')
    cliExecute('cast feel excitement')
    cliExecute('fortune buff hagnk')

    if (get('_daycareGymScavenges') === 0) {
        visitUrl('place.php?whichplace=town_wrong&action=townwrong_boxingdaycare')
        runChoice(3)
        runChoice(2)
        runChoice(5)
        runChoice(4)

        // get the free item
        visitUrl('place.php?whichplace=town_wrong&action=townwrong_boxingdaycare')
        runChoice(1)

        // get the stat buff
        visitUrl('place.php?whichplace=town_wrong&action=townwrong_boxingdaycare')
        runChoice(2)
        runChoice(1)
    }

    cliExecute('pillkeeper stat')
    cliExecute('pillkeeper familiar')

    smartSkill($skill`The Ode to Booze`)
    cliExecute("drink 1 Bee's Knees")
    cliExecute('crossstreams')
    cliExecute('monorail buff')
    cliExecute('telescope look high')

    useFamiliar($familiar`Pocket Professor`)
    equip($item`astral pet sweater`)

    visitUrl('shop.php?whichshop=meatsmith&action=talk')
    runChoice(1)

    set('BC_wantGiantGrowth', true)
    set('BC_wantWolfishForm', true)

    if (
        itemAmount($item`cherry`) === 0 ||
        itemAmount($item`grapefruit`) === 0 ||
        itemAmount($item`lemon`) === 0
    ) {
        adv1($location`The Skeleton Store`, -1, '')
        mapMonster($location`The Skeleton Store`, $monster`novelty tropical skeleton`)
        runCombat()
    }

    if (itemAmount($item`tomato`) === 0) {
        mapMonster($location`The Haunted Pantry`, $monster`possessed can of tomatoes`)
        runCombat()
    }

    craft('cook', 1, $item`scrumptious reagent`, $item`lime`)
    craft('cook', 1, $item`scrumptious reagent`, $item`lemon`)
    craft('cook', 1, $item`scrumptious reagent`, $item`tomato`)

    use($item`oil of stability`)
    use($item`philter of phorce`)
    use($item`tomato juice of powerful power`)

    cliExecute('fold makeshift garbage shirt')
    equip($item`makeshift garbage shirt`)

    const restsLeft = totalFreeRests() - get('timesRested')
    for (let i = 0; i < restsLeft; i++) {
        visitUrl('place.php?whichplace=chateau&action=chateau_restlabelfree')
    }

    buy($item`glittery mascara`, 2)
    buy($item`ben gal balm`, 2)
    use($item`glittery mascara`, 2)
    use($item`ben gal balm`, 2)

    useFamiliar($familiar`Hovering Sombrero`)

    // L.O.V. choice adventures
    set('choiceAdventure1222', 1)
    set('choiceAdventure1223', 1)
    set('choiceAdventure1224', 3)
    set('choiceAdventure1225', 1)
    set('choiceAdventure1226', 2)
    set('choiceAdventure1227', 1)
    set('choiceAdventure1228', 3)

    visitUrl('place.php?whichplace=town_wrong&action=townwrong_tunnel')
    runChoice(-1)
    runChoice(-1)
    runChoice(-1)
    runChoice(-1)

    useFamiliar($familiar`God Lobster`)
    visitUrl('main.php?fightgodlobster=1')
    runCombat()
    runChoice(1)

    equip($item`God Lobster's Scepter`, $slot`familiar`)
    visitUrl('main.php?fightgodlobster=1')
    runCombat()
    runChoice(1)

    equip($item`God Lobster's Ring`, $slot`familiar`)

    useFamiliar($familiar`Pocket Professor`)

    equip($item`Kramco Sausage-o-Matic`)
    equip($item`Beach Comb`, $slot`acc1`)
    equip($item`Brutal brogues`, $slot`acc3`)

    smartSkill($skill`Blood Bubble`)
    buy($item`detuned radio`)
    cliExecute('mcd 10')

    // Neverending Party choice adventures
    set('choiceAdventure1324', 2)
    set('choiceAdventure1325', 2)
    set('choiceAdventure1326', 2)
    set('choiceAdventure1340', 3)

    set('BC_usePrides', true)
    set('BC_useBowlSideways', true)

    useFamiliar($familiar`shorter-order cook`)

    while (get('_neverendingPartyFreeTurns') < 10) {
        if (haveEffect($effect`Spiced Up`) > 0) {
            set('choiceAdventure1324', 5)
        }
        adv1($location`The Neverending Party`, -1, '')
    }

    set('BC_usingFreeKillsAtNEP', true)
    while (freeKillsLeft() > 0) {
        adv1($location`The Neverending Party`, -1, '')
    }
    set('BC_usingFreeKillsAtNEP', false)
    set('BC_usePrides', false)
    set('BC_useBowlSideways', false)

    useFamiliar($familiar`Trick-or-Treating Tot`)
    cliExecute('equip latte')
    mapMonster($location`The Haiku Dungeon`, $monster`amateur ninja`)
    runCombat()

    smartSkill($skill`The Ode to Booze`, 2)
    use($item`astral six-pack`)

    if (myLevel() < 15) {
        if (myLevel() < 11) {
            abort("This is really worrying. We're somehow not even level 11 for pilsners")
        }
        abort("We should probably be worried we didn't reach level 15 from our powerleveling")
    }

    drink($item`astral pilsner`, 6)

    if (myBuffedstat($stat`mysticality`) - myBasestat($stat`mysticality`) < 1770) {
        abort('Myst test not capped when we expected it to be')
    }

    doTest(3)
}
