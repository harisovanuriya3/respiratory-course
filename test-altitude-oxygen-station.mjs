import assert from 'node:assert/strict';
import {altitudeOxygenValues,altitudeOxygenStation} from './public/altitude-oxygen-station.js';
const sea=altitudeOxygenValues(760,.21,40,.8);
const high=altitudeOxygenValues(500,.21,40,.8);
assert.ok(Math.abs(sea.pio2-149.73)<.001);
assert.ok(Math.abs(high.pio2-95.13)<.001);
assert.ok(high.pao2<sea.pao2);
assert.ok(altitudeOxygenValues(500,.21,30,.8).pao2>high.pao2);
assert.throws(()=>altitudeOxygenValues(40,.21,40,.8),RangeError);
for(const [L,lang] of ['RU','EN','KZ'].entries()){
 for(const section of ['theory','practice','interactive','media'])assert.ok(altitudeOxygenStation(21,section,L,lang).includes('data-altitude-oxygen'));
 assert.equal(altitudeOxygenStation(20,'theory',L,lang),'');
}
console.log('Altitude model numerical and trilingual tests passed.');
