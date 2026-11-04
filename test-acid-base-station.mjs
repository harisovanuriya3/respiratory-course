import assert from 'node:assert/strict';
import {acidBaseValues,acidBaseStation} from './public/acid-base-station.js';
const baseline=acidBaseValues(40,24);
assert.ok(Math.abs(baseline.ph-7.40103)<0.002);
assert.ok(acidBaseValues(60,24).ph<baseline.ph);
assert.ok(acidBaseValues(40,12).ph<baseline.ph);
assert.throws(()=>acidBaseValues(0,24),RangeError);
for(const [L,lang] of ['RU','EN','KZ'].entries()){
 for(const section of ['theory','practice','interactive','media'])assert.ok(acidBaseStation(16,section,L,lang).includes('data-acid-base-station'));
 assert.equal(acidBaseStation(15,'theory',L,lang),'');
}
console.log('Acid-base physiology numeric and trilingual integration assertions passed.');
