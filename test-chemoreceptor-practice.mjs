import assert from 'node:assert/strict';
import {chemoreceptorPractice,cases} from './public/chemoreceptor-practice.js';
import {regulationAtlas} from './public/regulation-atlas.js';
assert.equal(cases.length,3);
for(const [L,lang] of ['RU','EN','KZ'].entries()){
 const html=chemoreceptorPractice(L);
 assert.equal((html.match(/data-chem-case=/g)||[]).length,3);
 assert.equal((html.match(/data-chem-answer=/g)||[]).length,9);
 assert.ok(regulationAtlas(lang).includes('data-chemoreceptor-practice'));
 const first=[...html.matchAll(/data-chem-case="\d+"[\s\S]*?data-chem-answer="(\d+)"/g)].map(m=>Number(m[1]));
 assert.ok(new Set(first).size>1);
}
console.log('Three chemoreceptor clinical questions and varied answer order validated RU EN KZ.');
