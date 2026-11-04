import assert from 'node:assert/strict';
import {lungCapacityValues,lungCapacityStation} from './public/lung-capacity-station.js';
const v=lungCapacityValues(500,2500,1100,1200);
assert.deepEqual(v,{vc:4100,tlc:5300,frc:2300,ic:3000});
for(const [L,lang] of ['RU','EN','KZ'].entries()){
 for(const section of ['theory','practice','interactive','media'])assert.ok(lungCapacityStation(7,section,L,lang).includes('data-capacity-station'));
 assert.equal(lungCapacityStation(6,'theory',L,lang),'');
}
console.log('Module 7 lung capacities and trilingual placement checks passed.');
