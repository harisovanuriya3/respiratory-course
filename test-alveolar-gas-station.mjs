import assert from 'node:assert/strict';
import {alveolarGasValues,alveolarGasStation} from './public/alveolar-gas-station.js';
const v=alveolarGasValues(760,.21,40,.8);
assert.ok(Math.abs(v.pio2-149.73)<.001);
assert.ok(Math.abs(v.pao2-99.73)<.001);
assert.ok(alveolarGasValues(500,.21,40,.8).pao2<v.pao2);
for(const [L,lang] of ['RU','EN','KZ'].entries()){
 for(const section of ['theory','practice','interactive','media'])assert.ok(alveolarGasStation(10,section,L,lang).includes('data-alveolar-gas-station'));
 assert.equal(alveolarGasStation(9,'theory',L,lang),'');
}
console.log('Alveolar gas equation calculations and multilingual rendering passed.');
