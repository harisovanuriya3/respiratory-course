import assert from 'node:assert/strict';
import {courseQuestions} from './public/course-assessment-bank.js';
import {modules} from './public/content.js';
const normalize=s=>String(s).toLocaleLowerCase('ru').replace(/\s+/g,' ').trim();
const report=[];
for(const {id} of modules){
 for(const mode of ['tests','cases']){
  const questions=courseQuestions(id,mode);
  assert.equal(questions.length,20,`Module ${id}: ${mode} count ${questions.length}, expected 20`);
  const seen=[new Set(),new Set(),new Set()];
  for(const [i,q] of questions.entries()){
   assert.equal(q.q.length,3,`Module ${id} ${mode} item ${i} language count`);
   assert.equal(q.options.length,4,`Module ${id} ${mode} item ${i} options`);
   assert.ok(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<4);
   for(let L=0;L<3;L++){
    const stem=normalize(q.q[L]);
    assert.ok(stem.length>12,`Module ${id} ${mode} item ${i} missing prompt`);
    assert.ok(!seen[L].has(stem),`Module ${id} ${mode} repeated prompt in language ${L}: ${stem.slice(0,80)}`);
    seen[L].add(stem);
    assert.ok(q.explain[L]?.trim(),`Module ${id} ${mode} item ${i} explanation`);
    const opts=q.options.map(o=>normalize(o[L]));
    assert.equal(new Set(opts).size,4,`Module ${id} ${mode} item ${i} repeated answer options language ${L}`);
   }
  }
  report.push({module:id,mode,count:questions.length,uniquePrompts:seen.map(x=>x.size)});
 }
}
console.log(JSON.stringify({modules:modules.length,checks:report.length,report},null,2));
