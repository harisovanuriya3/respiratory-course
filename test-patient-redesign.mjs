import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {patientScenarioData,modulePatient} from './public/advanced-patients.js';
import {interactivePatientDecision} from './public/interactive-patient-decisions.js';
import {clinicalDecisionExtension} from './public/clinical-decision-extension.js';
import {patientReasoningSet} from './public/patient-reasoning-set.js';
import {mechanicsPatientCases} from './public/mechanics-patient-cases.js';
import {regulationPatientCases} from './public/regulation-patient-cases.js';
const sets=[interactivePatientDecision,clinicalDecisionExtension,patientReasoningSet,mechanicsPatientCases,regulationPatientCases];
assert.equal(patientScenarioData.length,25);
for(let id=1;id<=25;id++){
 for(let L=0;L<3;L++){
  assert.ok(modulePatient(id,L).includes('advanced-stage'),'Missing multistage case '+id+'/'+L);
  for(const render of sets)assert.equal(render(id,'virtual-patient',L,['RU','EN','KZ'][L]),'','Short card is incorrectly displayed as virtual patient');
 }
}
for(const render of sets){
 let count=0;
 for(let id=1;id<=25;id++)if(render(id,'tests',0,'RU'))count++;
 assert.ok(count>=3,'Clinical self-checks lost');
}
const source=readFileSync('public/advanced-patients.js','utf8');
assert.ok(!source.includes('src="/assets/module2/patient.webp"'),'Repeated patient picture still used for all advanced cases');
console.log('25 multistage patients retained; five sets of short questions reclassified as self-checks; duplicate illustration removed.');
