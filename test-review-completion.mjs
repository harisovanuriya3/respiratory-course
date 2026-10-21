import assert from 'node:assert/strict';
import {labNotebook} from './public/lab-notebook.js';
import {imageBreathing} from './public/image-breathing.js';
import {examBankSignature,validateExamAttempt} from './public/exam-attempt-state.js';
import {allExamItems} from './public/exam-center.js';
import {patientScenarioData,patientEvidenceData,modulePatientIndices} from './public/advanced-patients.js';
for(let mid=1;mid<=25;mid++)for(let L=0;L<3;L++){const html=labNotebook(mid,L);assert.equal(Boolean(html),mid!==4);if(html){assert.ok(html.includes('data-lab-notebook="'+mid+'"'));assert.ok(!html.includes('undefined'));}}
for(let L=0;L<3;L++){const html=imageBreathing(L);assert.ok(html.includes('/assets/course/overview.webp'));assert.ok(html.includes('data-image-position'));assert.ok(!html.includes('breath-lungs'));}
for(const i of modulePatientIndices){assert.equal(patientScenarioData[i].stages.length,3);assert.ok(patientEvidenceData[i].evidence);assert.ok(patientEvidenceData[i].investigation);const inv=patientEvidenceData[i].investigation;assert.equal(inv.results.length,3);for(let L=0;L<3;L++){assert.equal(inv.options[L].length,3);assert.equal(new Set(inv.results.map(result=>result[L])).size,3);}}
const selected=[0,1],value={version:1,bank:examBankSignature(allExamItems),mode:'formal',scope:'all',deadline:12345,selected,orders:selected.map(i=>allExamItems[i].options.map((_,j)=>j)),answers:[0,null]};
assert.ok(validateExamAttempt(value,allExamItems));
for(const mutation of [{bank:'stale'},{selected:[-1,1]},{selected:[0,0]},{answers:[999,null]},{orders:[[0],[0]]},{deadline:null},{scope:'26'},{version:0}])assert.equal(validateExamAttempt({...value,...mutation},allExamItems),null);
console.log('Review: 25 notebook assignments, 3 image languages, 25 six-stage patient mappings and invalid exam-state rejection passed.');
