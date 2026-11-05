import assert from 'node:assert/strict';
import {lectureRespiratoryCase,lectureRespiratoryCasePanel} from './public/author-lecture-respiratory-case.js';
import {recordedSpirogramPanel} from './public/recorded-spirogram.js';
assert.equal(lectureRespiratoryCase.age,50);
assert.equal(lectureRespiratoryCase.fev1VcPercent,39);
for(let L=0;L<3;L++){
 const html=lectureRespiratoryCasePanel(L);
 assert.ok(html.includes('FEV₁/VC'));
 assert.ok(html.includes('39%'));
 assert.ok(html.includes('Kharissova'));
 assert.ok(recordedSpirogramPanel(L).includes('lecture-case-slot'));
}
console.log('Attributed 2021 respiratory lecture clinical case present in three language modes.');
