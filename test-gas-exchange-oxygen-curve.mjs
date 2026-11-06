import assert from 'node:assert/strict';
import {hillSaturation,oxygenContent,gasExchangeChapter} from './public/gas-exchange-oxygen-curve.js';
assert.ok(Math.abs(hillSaturation(26.8)-50)<.0001);
assert.ok(hillSaturation(40,31)<hillSaturation(40,26.8));
assert.ok(hillSaturation(40,23)>hillSaturation(40,26.8));
assert.ok(oxygenContent(15,98,100)>19);
assert.throws(()=>hillSaturation(-1),RangeError);
for(const [L,lang] of ['RU','EN','KZ'].entries()){
 for(const mid of [9,11,13,14,15])assert.ok(gasExchangeChapter(mid,L,lang).includes('gas-exchange-flow'));
 assert.ok(gasExchangeChapter(14,L,lang).includes('data-oxygen-curve'));
}
console.log('Gas exchange theory and oxyhemoglobin saturation model verified in RU EN KZ.');
