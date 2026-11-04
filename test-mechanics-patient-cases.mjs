import assert from 'node:assert/strict';
import {mechanicsPatientCases} from './public/mechanics-patient-cases.js';
for(const [L,lang] of ['RU','EN','KZ'].entries())for(const mid of [6,7,9]){
 const html=mechanicsPatientCases(mid,'tests',L,lang);
 assert.ok(html.includes('data-module="'+mid+'"'));
 assert.equal((html.match(/data-option=/g)||[]).length,3);
 assert.ok(html.includes('/modules/'+mid+'/interactive?lang='+lang));
}
assert.equal(mechanicsPatientCases(8,'tests',0,'RU'),'');
console.log('Mechanics interactive patients: three modules, three languages passed.');
