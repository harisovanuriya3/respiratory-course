import assert from 'node:assert/strict';
import {studentTable,studentPeak} from './public/mechanics-student-table.js';
import {mechanicsImageLab,mechanicsState} from './public/mechanics-image-lab.js';
for(let L=0;L<3;L++){const html=studentTable(L);assert.ok(html.includes('<table'));assert.ok(html.includes('data-table-body'));assert.ok(html.includes('data-table-current'));assert.ok(mechanicsImageLab(L).includes('data-student-table'));}
assert.ok(Math.abs(studentPeak(500,12,2)-Math.PI/5)<1e-12);
for(const [vt,f,c,r]of[[250,8,.08,1],[500,12,.2,2],[800,24,.3,8]]){const peak=studentPeak(vt,f,r);assert.ok(Math.abs(peak-Math.abs(mechanicsState(vt/1000,f,c,r,.25).palv))<1e-12);}
console.log('Student table: trilingual fields and independently computed peak pressure passed.');
