import assert from 'node:assert/strict';
import {regulationPatientCases} from './public/regulation-patient-cases.js';
for(const [L,lang] of ['RU','EN','KZ'].entries()){
 for(const mid of [15,17,19,22]){
  const html=regulationPatientCases(mid,'virtual-patient',L,lang);
  assert.ok(html.includes('data-mid="'+mid+'"'));
  assert.equal((html.match(/data-option=/g)||[]).length,3);
 }
}
console.log('Four clinical scenarios validated in three languages.');
