import assert from 'node:assert/strict';
import {courseQuestions} from './public/course-assessment-bank.js';
import {coreAssessmentBank} from './public/course-assessment-core.js';
for(const mid of [2,18]){
 const items=courseQuestions(mid,'cases');
 const original=mid===2?coreAssessmentBank[mid].filter((q,i,a)=>a.findIndex(x=>x.q[0].replace(/^\\d+[.)]\\s*/,'').replace(/\\s+/g,' ').trim()===q.q[0].replace(/^\\d+[.)]\\s*/,'').replace(/\\s+/g,' ').trim())===i):coreAssessmentBank[mid];
 const n=mid===2?12:20;
 for(let i=0;i<n;i++){
  for(let L=0;L<3;L++){
   assert.ok(items[i].q[L].includes(original[i].q[L]),'Original thematic question lost in module '+mid+' case '+i+' language '+L);
  }
 }
}
console.log('Scenario cases preserve original thematic prompts in RU, EN and KZ.');
