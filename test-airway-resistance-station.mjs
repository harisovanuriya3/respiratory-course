import assert from 'node:assert/strict';
import {airwayResistanceValues,airwayResistanceStation} from './public/airway-resistance-station.js';
const baseline=airwayResistanceValues(1,2);
assert.equal(baseline.resistance,2);
assert.equal(baseline.flow,1);
assert.equal(airwayResistanceValues(.5,2).resistance,32);
assert.equal(airwayResistanceValues(.5,2).flow,.0625);
assert.equal(airwayResistanceValues(1,0).flow,0);
assert.throws(()=>airwayResistanceValues(0,2),RangeError);
for(const [L,lang] of ['RU','EN','KZ'].entries()){
 for(const section of ['theory','practice','interactive','media'])assert.ok(airwayResistanceStation(6,section,L,lang).includes('data-airway-station'));
 assert.equal(airwayResistanceStation(5,'theory',L,lang),'');
}
console.log('Airway resistance numeric and multilingual checks passed.');
