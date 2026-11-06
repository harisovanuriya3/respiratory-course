import assert from 'node:assert/strict';
import {inspiredOxygenPressure,altitudePressureLab} from './public/altitude-pressure-lab.js';
import {specialBreathingChapter} from './public/special-breathing-chapters.js';
assert.ok(Math.abs(inspiredOxygenPressure(760)-149.37)<.01);
assert.ok(Math.abs(inspiredOxygenPressure(500)-94.9035)<.01);
assert.ok(inspiredOxygenPressure(400)<inspiredOxygenPressure(760));
assert.throws(()=>inspiredOxygenPressure(40),RangeError);
assert.throws(()=>inspiredOxygenPressure(760,1.2),RangeError);
for(const [L,lang] of ['RU','EN','KZ'].entries()){
 assert.ok(altitudePressureLab(L).includes('data-altitude-slider'));
 assert.ok(specialBreathingChapter(21,L,lang).includes('data-altitude-pressure-lab'));
 for(const mid of [20,21,22,23,25])assert.ok(specialBreathingChapter(mid,L,lang).includes('special-breathing-anatomy'));
}
console.log('Altitude PIO2 calculator and thematic atlas figures verified in RU EN KZ.');
