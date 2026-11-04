import assert from 'node:assert/strict';
import {clinicalDecisionExtension} from './public/clinical-decision-extension.js';
for(const [L,lang] of ['RU','EN','KZ'].entries())for(const id of [8,10,16,21]){
 const html=clinicalDecisionExtension(id,'tests',L,lang);
 assert.ok(html.includes('data-case-id="'+id+'"'));
 assert.equal((html.match(/data-answer=/g)||[]).length,3);
 assert.ok(html.includes('/modules/'+id+'/interactive?lang='+lang));
}
assert.equal(clinicalDecisionExtension(9,'tests',0,'RU'),'');
console.log('Four interactive patient scenarios validated in RU EN KZ.');
