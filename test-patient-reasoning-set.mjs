import assert from 'node:assert/strict';
import {patientReasoningSet} from './public/patient-reasoning-set.js';
for(const [L,lang] of ['RU','EN','KZ'].entries())for(const id of [5,12,20]){
 const html=patientReasoningSet(id,'tests',L,lang);
 assert.ok(html.includes('data-mid="'+id+'"'));
 assert.equal((html.match(/data-pick=/g)||[]).length,3);
 assert.ok(html.includes('/modules/'+id+'/theory?lang='+lang));
}
assert.equal(patientReasoningSet(4,'tests',0,'RU'),'');
console.log('New patient reasoning cases validated in three languages.');
