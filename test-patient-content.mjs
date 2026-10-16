import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {patientCases} from './public/patient-cases.js';
import {modulePatient,patientScenarioData,modulePatientIndices,patientEvidenceData} from './public/advanced-patients.js';
import {regulationAtlas} from './public/regulation-atlas.js';
assert.equal(new Set(modulePatientIndices).size,25,'Each module must have a distinct scenario');
for(const c of patientCases)for(let L=0;L<3;L++){
 assert.ok(c.scenario[L].trim()&&c.question[L].trim()&&c.explanation[L].trim());
 assert.ok(!/[А-Яа-яЁё]/.test(c.explanation[1]),'Untranslated English explanation');
}
for(const [i,c] of patientScenarioData.entries()){
 for(const s of c.stages){for(let L=0;L<3;L++){assert.ok(s.question[L].trim()&&s.why[L].trim());assert.ok(s.options[L][s.correct]);}assert.ok(!/[А-Яа-яЁё]/.test(s.why[1]),`Untranslated case ${i}`);}
 const {evidence,investigation}=patientEvidenceData[i];assert.ok(evidence&&investigation,`Missing case follow-up ${i}`);
 for(let L=0;L<3;L++){assert.ok(evidence.q[L]&&evidence.a[L][0]&&evidence.why[L]);assert.ok(investigation.options[L][investigation.correct]&&investigation.results[investigation.correct][L]);}
}
const followup=mid=>patientEvidenceData[modulePatientIndices[mid-1]].evidence;
assert.ok(followup(3).measure.some(row=>row[0]==='Ppl'),'Pleural case must use pressure data');
assert.ok(followup(5).q[1].includes('2T/r'),'Surfactant case must use surface mechanics');
assert.ok(followup(7).q[1].includes('vital capacity'),'Volume case must not use PVR');
assert.equal(followup(8).measure[0][1],'400 mL','Case ventilation data must remain consistent');
assert.equal(followup(10).measure[0][1],'560 mmHg','Altitude case pressure must remain consistent');
assert.ok(followup(12).q[1].includes('pulmonary vascular resistance'));
for(let mid=1;mid<=25;mid++)for(let L=0;L<3;L++)assert.ok(modulePatient(mid,L).includes('patient-context'));
for(const lang of ['RU','EN','KZ']){const html=regulationAtlas(lang);assert.ok(!html.includes('undefined'));if(lang==='EN')assert.ok(!/[А-Яа-яЁё]/.test(html));}
const app=readFileSync('public/app.js','utf8');assert.ok(app.includes('regulationAtlas(lang)')&&app.includes('initRegulationAtlas(lang)'));
console.log(`PASS: ${patientScenarioData.length} patient scenarios, 25 unique module assignments, topic-specific evidence and three languages`);
