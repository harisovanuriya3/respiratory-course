import assert from 'node:assert/strict';
import {reflexClinicalTasks} from './public/reflex-clinical-tasks.js';
import {regulationAtlas} from './public/regulation-atlas.js';
for(const [L,lang] of ['RU','EN','KZ'].entries()){
 const html=reflexClinicalTasks(L);
 assert.equal((html.match(/class="reflex-task"/g)||[]).length,5);
 assert.equal((html.match(/data-reflex-choice=/g)||[]).length,20);
 assert.ok(regulationAtlas(lang).includes('data-reflex-tasks'));
 const positions=[...html.matchAll(/data-reflex-task="(\d+)"[\s\S]*?data-reflex-choice="(\d+)"/g)].map(x=>Number(x[2]));
 assert.ok(new Set(positions).size>1,'Answer choices must not always start with the same option');
}
console.log('Five distinct reflex clinical tasks and 20 answer options present on all languages.');
