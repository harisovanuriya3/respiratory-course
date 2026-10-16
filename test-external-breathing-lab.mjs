import assert from 'node:assert/strict';
import {respiratoryMechanics,externalBreathingLab} from './public/external-breathing-lab.js';
const n=respiratoryMechanics(),o=respiratoryMechanics({resistance:8}),r=respiratoryMechanics({compliance:.045});
assert.equal(n.samples.length,121);assert.ok(n.tidal>o.tidal);assert.ok(n.tidal>r.tidal);assert.ok(o.tau>n.tau);assert.ok(n.minute>n.alveolar);assert.throws(()=>respiratoryMechanics({rate:0}));
for(let L=0;L<3;L++)for(const s of ['mech-start','mech-pause','mech-repeat','mech-reset','mech-spiro','mech-loop'])assert.ok(externalBreathingLab(L).includes(s));
console.log('PASS: deterministic RC mechanics, pressures, spirometry and flow-volume comparison in RU/EN/KZ');
