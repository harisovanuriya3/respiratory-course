import assert from 'node:assert/strict';
import {allExamItems,examBankAudit} from './public/exam-center.js';
import {integratedExamItems} from './public/integrated-exam.js';
for(const item of allExamItems){
 for(const tuple of [item.q,item.explain,...item.options]){assert.equal(tuple.length,3,`Module ${item.module}: language tuple`);for(const text of tuple)assert.ok(typeof text==='string'&&text.trim(),`Module ${item.module}: empty translation`);}
 assert.ok(Number.isInteger(item.answer)&&item.answer>=0&&item.answer<item.options.length);
 for(let L=0;L<3;L++)assert.equal(new Set(item.options.map(x=>x[L])).size,item.options.length,`Module ${item.module}: duplicate options`);
}
for(let mid=1;mid<=25;mid++)assert.ok(allExamItems.some(x=>x.module===mid));
assert.ok(examBankAudit.duplicatesExcluded>0);
assert.equal(new Set(allExamItems.map(x=>x.module+'|'+x.q[1].replace(/\s+/g,' ').trim())).size,allExamItems.length);
for(const item of allExamItems)assert.equal(item.options.length,4,'Active exams require four options');
for(let mid=1;mid<=25;mid++)assert.ok(allExamItems.filter(item=>item.module===mid).length>=20,'Every module needs a complete twenty-question exam');
assert.equal(examBankAudit.retiredTwoOption,60);
assert.equal(integratedExamItems.length,4);
console.log(`PASS: all ${allExamItems.length} exam items, 25 module pools, answer indices and complete RU/EN/KZ tuples`);
