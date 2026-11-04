import assert from 'node:assert/strict';
import {oxygenDeliveryValues,oxygenDeliveryStation} from './public/oxygen-delivery-station.js';
const baseline=oxygenDeliveryValues(15,98,100,5);
assert.ok(Math.abs(baseline.cao-19.998)<.001);
assert.ok(Math.abs(baseline.do2-999.9)<.01);
assert.ok(oxygenDeliveryValues(7,98,100,5).cao<baseline.cao);
for(const [L,lang] of ['RU','EN','KZ'].entries()){
 for(const section of ['theory','practice','interactive','media'])assert.ok(oxygenDeliveryStation(14,section,L,lang).includes('data-oxygen-station'));
 assert.equal(oxygenDeliveryStation(13,'theory',L,lang),'');
}
console.log('Oxygen delivery model calculation and trilingual section integration passed.');
