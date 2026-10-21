import assert from 'node:assert/strict';
import {moduleThree} from './public/module-three.js';
import {theoryUnits,testBank,cases,patientSteps} from './public/module-three-data.js';
import {existsSync} from 'node:fs';
assert.equal(theoryUnits.length,8);assert.equal(testBank.length,12);assert.equal(cases.length,6);assert.equal(patientSteps.length,6);
const sections=['objectives','pretest','theory','one-minute','clinical','interactive','practice','cases','tests','questions','virtual-patient','media','glossary','voice','progress','notes','references'];
for(let L=0;L<3;L++){
 for(const section of sections){const html=moduleThree(section,L);assert.ok(html.length>100,section);assert.ok(!html.includes('undefined'));for(const m of html.matchAll(/src="(\/assets\/[^"?]+)"/g))assert.ok(existsSync('public'+m[1]),m[1]);}
 assert.equal(new Set(testBank.map(q=>q.q[L])).size,12);
 for(const q of [...testBank,...patientSteps]){assert.ok(q.key>=0&&q.key<q.a.length);assert.ok(q.why[L].length>25);}
}
for(let i=0;i<10;i++)assert.ok(existsSync(`public/assets/module3/breathing-${String(i).padStart(2,'0')}.webp`));
console.log('Module 3: 51 localized sections, source images, 12 distinct test items, 6 cases and 6 patient stages passed.');
