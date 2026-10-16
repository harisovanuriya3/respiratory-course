import assert from 'node:assert/strict';
import {caseBasedItems} from './public/exam-cases-v91.js';
import {expandedBank} from './public/exam-bank-v32.js';
import {normalizeClinicalCase} from './public/exam-center.js';
const cases=caseBasedItems.map(normalizeClinicalCase);
assert.equal(cases.length,10);
for(const item of [...cases,...expandedBank]){
  assert.equal(item.q.length,3);
  assert.equal(item.explain.length,3);
  assert.equal(item.options.length,4);
  assert.ok(item.answer>=0 && item.answer<4);
  for(const o of item.options){assert.equal(o.length,3);for(const v of o)assert.ok(typeof v==='string'&&v.trim());}
  for(let lang=0;lang<3;lang++)assert.equal(new Set(item.options.map(o=>o[lang])).size,4);
}
assert.equal(cases[0].options[0][0],'3,6 л/мин');
assert.equal(cases[0].options[0][1],'3.6 L/min');
assert.equal(cases[0].options[1][0],'7,2 л/мин');
console.log(`PASS: ${cases.length} clinical cases normalized and ${expandedBank.length} calculated items structurally valid`);
