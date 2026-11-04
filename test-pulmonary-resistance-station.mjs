import assert from 'node:assert/strict';
import {pulmonaryResistanceValues,pulmonaryResistanceStation} from './public/pulmonary-resistance-station.js';
assert.equal(pulmonaryResistanceValues(20,8,5).pvr,2.4);
assert.equal(pulmonaryResistanceValues(30,10,4).pvr,5);
assert.throws(()=>pulmonaryResistanceValues(8,20,5),RangeError);
assert.throws(()=>pulmonaryResistanceValues(20,8,0),RangeError);
for(const [L,lang] of ['RU','EN','KZ'].entries()){
 for(const section of ['theory','practice','interactive','media'])assert.ok(pulmonaryResistanceStation(12,section,L,lang).includes('data-pvr-station'));
 assert.equal(pulmonaryResistanceStation(11,'theory',L,lang),'');
}
console.log('Pulmonary resistance numeric and multilingual tests passed.');
