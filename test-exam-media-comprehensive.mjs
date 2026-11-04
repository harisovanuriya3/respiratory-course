import assert from 'node:assert/strict';
import {modules,sections} from './public/content.js';
import {allExamItems} from './public/exam-center.js';
import {centralMediaLibrary} from './public/central-media-library.js';
import {topicCore} from './public/topic-core-2-25.js';
import {readFileSync} from 'node:fs';
assert.equal(modules.length,25);
assert.equal(sections.length,17);
assert.equal(topicCore.length,24);
const counts=new Map(modules.map(m=>[m.id,0]));
for(const item of allExamItems){
 assert.ok(counts.has(item.module),'Exam question with unknown module '+item.module);
 assert.equal(item.q.length,3);
 assert.equal(item.explain.length,3);
 assert.ok(item.options.length>=2);
 for(let L=0;L<3;L++){
  assert.ok(String(item.q[L]).trim().length>0);
  assert.ok(String(item.explain[L]).trim().length>0);
 }
 assert.ok(Number.isInteger(item.answer)&&item.answer>=0&&item.answer<item.options.length);
 counts.set(item.module,counts.get(item.module)+1);
}
for(const [id,n] of counts)assert.ok(n>0,'No exam questions for module '+id);
for(const [L,lang] of ['RU','EN','KZ'].entries()){
 const html=centralMediaLibrary(L,lang);
 for(const m of modules)assert.ok(html.includes('/modules/'+m.id+'/media?lang='+lang));
}
const app=readFileSync('public/app.js','utf8');
assert.ok(app.includes('examModuleCoverage(L,lang)'));
assert.ok(app.includes('topicLearningStations(mid,section,L,lang)'));
assert.ok(app.includes('physiologicalReasoningExamples(mid,section,L)'));
console.log('Exam and media audit passed. Per-module counts:');
console.log(JSON.stringify(Object.fromEntries(counts)));
