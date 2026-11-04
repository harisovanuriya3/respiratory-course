import assert from 'node:assert/strict';
import {patientCaseVisual} from './public/patient-case-visuals.js';
import {advancedPatients,modulePatient} from './public/advanced-patients.js';
for(let L=0;L<3;L++){
 const page=advancedPatients(L);
 assert.equal((page.match(/class="patient-case-visual"/g)||[]).length,27);
 assert.ok(page.includes('thorax-expiration.webp'));
 assert.ok(page.includes('alveolus-capillary-atlas.webp'));
 assert.ok(page.includes('spirometry-workstation.webp'));
 assert.ok(modulePatient(1,L).includes('patient-case-visual'));
 for(let i=0;i<27;i++)assert.ok(patientCaseVisual(i,L).includes('<img'));
}
console.log('27 clinical patient cards contain anatomical visuals on RU EN KZ.');
