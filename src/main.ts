import { print, myMp } from "kolmafia"
import { $item, get } from "libram"
import { smart_hermit_buy } from "./util";

const TEST_HP = 1;
const TEST_MUS = 2;
const TEST_MYS = 3;
const TEST_MOX = 4;
const TEST_FAMILIAR = 5;
const TEST_WEAPON = 6;
const TEST_SPELL = 7;
const TEST_NONCOMBAT = 8;
const TEST_ITEM = 9;
const TEST_HOT_RES = 10;
const TEST_COIL_WIRE = 11;

export default function main(): void {
  smart_hermit_buy(4, $item`blah`)
}
