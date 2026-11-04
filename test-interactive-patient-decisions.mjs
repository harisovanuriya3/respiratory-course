import assert from 'node:assert/strict';
import {interactivePatientDecision} from './public/interactive-patient-decisions.js';
for(const [L,lang] of ['RU','EN','KZ'].entries()){
 for(const id of [13,14,24]){
  const html=interactivePatientDecision(id,'tests',L,lang);
  assert.ok(html.includes('data-patient-decision'));
  assert.ok(html.includes('data-module-id="'+id+'"'));
  assert.equal((html.match(/data-choice=/g)||[]).length,3);
 }
 assert.equal(interactivePatientDecision(12,'tests',L,lang),'');
}
console.log('Interactive patient case structure and three-language coverage passed.');
