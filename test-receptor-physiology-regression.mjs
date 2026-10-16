import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {receptorAnimationCases,receptorBreathingAnimation} from './public/receptor-breath-animation.js';
const source=readFileSync('./public/receptor-breath-animation.js','utf8');
assert.equal(receptorAnimationCases.length,9);
for(const lang of ['RU','EN','KZ']){
 const html=receptorBreathingAnimation(lang);
 assert.match(html,/rba-stimulus/);
 assert.match(html,/rba-strength/);
 assert.match(html,/rba-phase/);
 assert.match(html,/rba-note/);
 assert.match(html,/rba-toggle/);
}
assert.match(source,/baseline=f===0/,'Zero stimulus must render baseline response');
assert.match(source,/elapsed<2/,'C-fiber initial pause must be a transient event');
assert.doesNotMatch(source,/elapsed%8/,'C-fiber apnea must not loop periodically');
assert.match(source,/elapsed<4/,'Cough must be a transient reflex event');
assert.doesNotMatch(source,/elapsed%5/,'Cough must not repeat automatically');
assert.match(source,/rate not predicted/,'Stretch reflex must not predict respiratory rate');
assert.match(source,/Response direction not predicted/,'Context-dependent inputs must not claim fixed response');
assert.match(source,/Stimulus is off/,'No activation must be distinguished from a response');
console.log('PASS receptor scientific safeguards: baseline, nonperiodic reflexes, qualitative limitations, three languages');
