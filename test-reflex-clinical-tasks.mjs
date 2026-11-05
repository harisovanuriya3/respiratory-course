import assert from 'node:assert/strict';
import {reflexClinicalTasks} from './public/reflex-clinical-tasks.js';
import {regulationAtlas} from './public/regulation-atlas.js';
for(const [L,lang] of ['RU','EN','KZ'].entries()){
 const html=reflexClinicalTasks(L);
 assert.equal((html.match(/class="reflex-task"/g)||[]).length,5);
 assert.equal((html.match(/data-reflex-choice=/g)||[]).length,20);
 assert.ok(regulationAtlas(lang).includes('data-reflex-tasks'));
}
console.log('Five distinct reflex clinical tasks and 20 answer options present on all languages.');
