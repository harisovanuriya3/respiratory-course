import assert from 'node:assert/strict';
import {lectureChemoreceptorCases} from './public/lecture-chemoreceptor-cases.js';
import {regulationAtlas} from './public/regulation-atlas.js';
for(const [L,lang] of ['RU','EN','KZ'].entries()){
 const html=lectureChemoreceptorCases(L);
 assert.equal((html.match(/class="lecture-chemo-case"/g)||[]).length,4);
 assert.equal((html.match(/<details>/g)||[]).length,4);
 assert.ok(html.includes('Kharissova'));
 assert.ok(regulationAtlas(lang).includes('lecture-chemoreceptor-cases'));
}
console.log('Four lecture-based chemoreceptor and exercise cases integrated in RU EN KZ.');
