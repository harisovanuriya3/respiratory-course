import assert from 'node:assert/strict';
import {diffusionModelValues,diffusionStation} from './public/diffusion-station.js';
assert.equal(diffusionModelValues(1,1,1).relativeFlux,1);
assert.equal(diffusionModelValues(1,2,1).relativeFlux,.5);
assert.equal(diffusionModelValues(2,1,1).relativeFlux,2);
assert.equal(diffusionModelValues(1,1,0).relativeFlux,0);
assert.throws(()=>diffusionModelValues(1,0,1),RangeError);
for(const [L,lang] of ['RU','EN','KZ'].entries()){
 for(const section of ['theory','practice','interactive','media'])assert.ok(diffusionStation(9,section,L,lang).includes('data-diffusion-station'));
 assert.equal(diffusionStation(8,'theory',L,lang),'');
}
console.log('Fick diffusion numeric and multilingual model tests passed.');
