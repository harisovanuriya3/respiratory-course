import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {brainstemLesionTeaching} from './public/brainstem-lesion-teaching.js';
import {regulationAtlas} from './public/regulation-atlas.js';
const inventory=JSON.parse(readFileSync('lecture-image-rights-inventory.json','utf8'));
assert.ok(inventory.categories.length>=4);
for(const [L,lang] of ['RU','EN','KZ'].entries()){
 const html=brainstemLesionTeaching(L);
 assert.equal((html.match(/<details>/g)||[]).length,4);
 assert.ok(html.includes('Kharissova'));
 assert.ok(regulationAtlas(lang).includes('brainstem-lesion-teaching'));
}
console.log('Author lecture-based brainstem practicum and illustration rights inventory validated.');
