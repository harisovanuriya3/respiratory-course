import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {depthTopics} from './public/course-depth-data.js';
import {courseDepth} from './public/course-depth.js';
import {sections} from './public/content.js';
import {reasoningExamItems} from './public/exam-reasoning-bank.js';
import {allExamItems} from './public/exam-center.js';
import {moduleThree} from './public/module-three.js';
const sources=JSON.parse(readFileSync('public/course-image-sources.json'));
assert.equal(depthTopics.length,25);assert.equal(reasoningExamItems.length,25);
for(let id=1;id<=25;id++){
 const t=depthTopics.find(x=>x.id===id);assert.ok(t);assert.equal(sources[t.image].slide,t.slide);assert.ok(existsSync('public/assets/course/'+t.image+'.webp'));
 for(let L=0;L<3;L++){
  for(const field of ['heading','mechanism','interpretation','task'])assert.ok(t[field][L]?.trim());
  for(const [section] of sections){const html=courseDepth(id,section,L);assert.ok(html.includes('data-course-completion'));assert.ok(!html.includes('undefined'));}
  const item=reasoningExamItems.find(x=>x.module===id);assert.equal(item.options.length,4);assert.equal(new Set(item.options.map(x=>x[L])).size,4);assert.ok(allExamItems.includes(item));
 }
}
for(let L=0;L<3;L++){const s=moduleThree('theory',L);assert.ok(s.includes('m3-pressure-explainer'));assert.ok(!s.includes('Infographic: endpoint pressures'));}
assert.equal((.4-.1)*15,4.500000000000001);assert.ok(Math.abs((.25-.1)*24-3.6)<1e-10);assert.equal(.8*20+.2*10,18);assert.equal(900/3,300);
console.log('Course additions: all 1275 language/section combinations, 25 readings, source provenance, 25 independent exam scenarios and pressure explainer passed.');
