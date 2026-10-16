import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {moduleFour} from './public/module-four.js';
import {moduleThirteen} from './public/module-thirteen.js';
import {moduleTwentyOne} from './public/module-twenty-one.js';
import {moduleTwentyFour} from './public/module-twenty-four.js';
import {moduleSeventeen} from './public/module-seventeen.js';
import {moduleTwentyThree} from './public/module-twenty-three.js';
import {moduleTwentyFive} from './public/module-twenty-five.js';
import {moduleSixteen} from './public/module-sixteen.js';
import {lessonOption} from './public/lesson-localization.js';
for(let L=0;L<3;L++){
 assert.ok(moduleSixteen('tests',L).includes('class="m16exam"'),'Canonical tests route must render the exam');
 assert.ok(moduleSixteen('cases',L).includes('class="m16patient"'),'Canonical cases route must render a clinical case');
 assert.ok(!moduleSixteen('questions',L).includes('class="m16exam"'));
 const html=moduleFour('tests',L);assert.ok(html.includes('<fieldset'));assert.ok(!html.includes('${t('));assert.ok(!html.includes('function test('));
 for(const render of [moduleThirteen,moduleTwentyOne,moduleTwentyFour]){
  const labels=[...render('tests',L).matchAll(/<label[^>]*>([\s\S]*?)<\/label>/g)].map(x=>x[1].replace(/<[^>]*>/g,'').trim());assert.ok(labels.length>=24);
  if(L===1)assert.ok(labels.every(x=>!/[А-Яа-яЁё]/.test(x)),labels.join('; '));
 }
}
assert.equal(lessonOption('Перфузируемая, но невентилируемая альвеола',2),'Перфузиясы бар, бірақ вентиляциясыз альвеола');
for(const L of [0,2]){
 assert.ok(!moduleSeventeen('references',L).includes('Educational illustrations are original'));
 assert.ok(!moduleTwentyThree('interactive',L).includes('same trapped gas on ascent'));
 assert.ok(!moduleTwentyFour('practice',L).includes('the newer criterion is strictly'));
 assert.ok(!moduleTwentyFive('references',L).includes('Original educational explanations;'));
}
await import('./audit-lesson-data.mjs');assert.deepEqual(JSON.parse(readFileSync('docs/LESSON_DATA_AUDIT.json','utf8')),[]);
console.log('PASS: live self-assessment rendering, localized answer labels and explanation datasets');
