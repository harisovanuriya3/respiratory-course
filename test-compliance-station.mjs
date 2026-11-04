import assert from 'node:assert/strict';
import {complianceValues,complianceStation} from './public/compliance-station.js';
assert.equal(complianceValues(.4,4).compliance,.1);
assert.equal(complianceValues(.25,5).compliance,.05);
assert.throws(()=>complianceValues(.4,0),RangeError);
for(const [L,lang] of ['RU','EN','KZ'].entries()){
 for(const section of ['theory','practice','interactive','media'])assert.ok(complianceStation(5,section,L,lang).includes('data-compliance-station'));
 assert.equal(complianceStation(4,'theory',L,lang),'');
}
console.log('Compliance calculation and trilingual placement checks passed.');
