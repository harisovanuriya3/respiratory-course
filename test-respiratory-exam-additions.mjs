import assert from 'node:assert/strict';
import {respiratoryExamAdditions} from './public/respiratory-exam-additions.js';
import {allExamItems} from './public/exam-center.js';
assert.equal(respiratoryExamAdditions.length,6);
for(const q of respiratoryExamAdditions){
 assert.equal(q.q.length,3);
 assert.equal(q.options.length,3);
 assert.equal(q.explain.length,3);
 assert.equal(q.answer,0);
 for(const choice of q.options)assert.equal(choice.length,3);
 assert.ok(allExamItems.some(x=>x.module===q.module&&x.q[0]===q.q[0]),'New item missing in active exam: '+q.module);
}
console.log('Six new physiology questions integrated in active exam bank across three languages.');
