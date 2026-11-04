import assert from 'node:assert/strict';
import {sleepEventIndex,sleepBreathingStation} from './public/sleep-breathing-station.js';
assert.equal(sleepEventIndex(40,300),8);
assert.equal(sleepEventIndex(0,300),0);
assert.equal(sleepEventIndex(60,120),30);
assert.throws(()=>sleepEventIndex(5,0),RangeError);
for(const [L,lang] of ['RU','EN','KZ'].entries()){
 for(const section of ['theory','practice','interactive','media'])assert.ok(sleepBreathingStation(22,section,L,lang).includes('data-sleep-lab'));
 assert.equal(sleepBreathingStation(21,'theory',L,lang),'');
}
console.log('Sleep breathing AHI and trilingual integration passed.');
