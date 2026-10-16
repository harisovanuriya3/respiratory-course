import assert from 'node:assert/strict';
import {expandedBank} from './public/exam-bank-v32.js';
const allowed = {"ve": [1, 3, 4, 7, 8, 20, 22], "va": [1, 8, 19, 22], "io2": [10, 21, 23], "area": [2, 9, 11], "diff": [9, 11], "compliance": [3, 4, 5], "resist": [3, 6], "work": [3, 4], "laplace": [5], "flow": [6], "poiseuille": [6], "capacity": [7, 24], "paco2": [8, 15, 17, 19, 22], "gradient": [9, 10, 11], "ao2": [10, 13, 21, 25], "pvr": [12], "vq": [13], "dead": [8, 13], "cao2": [14, 25], "do2": [14, 25], "extract": [14, 25], "ph": [15, 16], "anion": [16], "winter": [16], "rer": [20], "pulse": [20], "fick": [20], "ahi": [22], "boyle": [23], "depth": [23], "ratio": [24]};
assert.equal(expandedBank.length,440);
for(const [i,q] of expandedBank.entries()){
 assert.ok(allowed[q.family]?.includes(q.module),`Topic mismatch: ${i} ${q.family} module ${q.module}`);
 assert.equal(q.options.length,4);assert.ok(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<4);
 for(const [lang,prefix] of [[0,`Модуль ${q.module}.`],[1,`Module ${q.module}.`],[2,`${q.module}-модуль.`]]) assert.ok(q.q[lang].startsWith(prefix),`Label mismatch ${i}, ${lang}`);
}
console.log('440 questions: topical assignment, answer indices, translations of module labels passed');
