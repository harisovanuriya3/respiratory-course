import assert from 'node:assert/strict';
import {chemoreceptorComparison} from './public/chemoreceptor-comparison.js';
import {regulationAtlas} from './public/regulation-atlas.js';
for(const [L,lang] of ['RU','EN','KZ'].entries()){
 const html=chemoreceptorComparison(L);
 assert.equal((html.match(/<tr>/g)||[]).length,4);
 assert.ok(html.includes('NTS'));
 assert.ok(html.includes('RTN'));
 assert.ok(regulationAtlas(lang).includes('class="chemoreceptor-comparison"'));
}
console.log('Central carotid and aortic chemoreceptor comparison verified in RU EN KZ.');
