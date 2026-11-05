import assert from 'node:assert/strict';
import {guideRanges,calculateStudyVolumes,capacityExercise} from './public/capacity-exercise.js';
import {capacitySpirogram} from './public/capacity-spirogram.js';
assert.deepEqual(calculateStudyVolumes({vt:500,irv:2000,erv:1100,rv:1200}),{ic:2500,frc:2300,vc:3600,tlc:4800});
assert.deepEqual(guideRanges.irv,[1500,2500]);
for(let L=0;L<3;L++){const html=capacitySpirogram(L);assert.ok(html.includes('data-capacity-exercise'));assert.ok(html.includes('data-capacity-wave'));assert.ok(html.includes('data-capacity-check'));assert.ok(html.includes('data-capacity-new'));assert.equal((capacityExercise(L).match(/data-answer=/g)||[]).length,4);}
console.log('Interactive volume and capacity exercise validated on RU EN KZ.');
