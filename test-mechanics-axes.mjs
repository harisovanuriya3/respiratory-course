import assert from 'node:assert/strict';
import {mechanicsTicks,externalBreathingLab} from './public/external-breathing-lab.js';
assert.ok(mechanicsTicks(5,1.725).includes('>2.5</text>'));
assert.ok(mechanicsTicks(5,1.725).includes('>1.73</text>'));
assert.ok(mechanicsTicks(1.725,1.2,true).includes('>-1.2</text>'));
assert.ok(mechanicsTicks(1.725,1.2,true).includes('y="100"'));
assert.throws(()=>mechanicsTicks(0,1));
assert.throws(()=>mechanicsTicks(1,NaN));
for(let L=0;L<3;L++){
 const html=externalBreathingLab(L);
 assert.ok(html.includes('mech-spiro-ticks'));
 assert.ok(html.includes('mech-loop-ticks'));
 assert.equal((html.match(/<li>/g)||[]).length,4);
 assert.ok(html.includes('R = 8'));
}
console.log('PASS: shared numerical scales, signed flow axis and four-step RU/EN/KZ protocol');
