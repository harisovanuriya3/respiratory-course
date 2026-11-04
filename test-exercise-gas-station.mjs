import assert from 'node:assert/strict';
import {exerciseGasExchange,exerciseGasStation} from './public/exercise-gas-station.js';
assert.ok(Math.abs(exerciseGasExchange(1.5,1.2).rer-.8)<1e-12);
assert.equal(exerciseGasExchange(1,1).rer,1);
assert.throws(()=>exerciseGasExchange(0,1),RangeError);
for(const [L,lang] of ['RU','EN','KZ'].entries()){
 for(const section of ['theory','practice','interactive','media'])assert.ok(exerciseGasStation(20,section,L,lang).includes('data-exercise-gas'));
 assert.equal(exerciseGasStation(19,'theory',L,lang),'');
}
console.log('Exercise gas exchange numeric and multilingual checks passed.');
