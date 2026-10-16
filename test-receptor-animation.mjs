import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {receptorAnimationCases,receptorBreathingAnimation} from './public/receptor-breath-animation.js';
assert.equal(receptorAnimationCases.length,9);
for(const l of ['RU','EN','KZ']){
 const html=receptorBreathingAnimation(l);
 assert.match(html,/id="rba-kind"/);
 assert.match(html,/id="rba-strength"/);
 assert.match(html,/id="rba-toggle"/);
 assert.match(html,/id="rba-wave"/);
 for(const c of receptorAnimationCases)assert.ok(html.includes(`value="${c.id}"`));
}
const app=readFileSync('./public/app.js','utf8');
assert.match(app,/initReceptorBreathingAnimation\(lang\)/);
assert.match(app,/receptorBreathingAnimation\(lang\)/);
console.log('PASS: nine receptor activation cases, three languages, animation controls and app integration');
