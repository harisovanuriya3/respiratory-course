import assert from 'node:assert/strict';
import {spirometryValues,spirometryStation} from './public/spirometry-station.js';
const v=spirometryValues(2.1,3.5);
assert.ok(Math.abs(v.ratio-.6)<1e-12);
assert.ok(Math.abs(v.percentage-60)<1e-10);
for(const [L,lang] of ['RU','EN','KZ'].entries()){
 for(const section of ['theory','practice','interactive','media'])assert.ok(spirometryStation(24,section,L,lang).includes('data-spirometry-station'));
 assert.equal(spirometryStation(23,'theory',L,lang),'');
}
console.log('Spirometry lab calculation and 12 trilingual placements validated.');
