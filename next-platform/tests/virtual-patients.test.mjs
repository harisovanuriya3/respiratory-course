import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

test('virtual patients 7 to 10 use localized persistent React decision workflows',()=>{
  const page=readFileSync(new URL('../app/modules/[id]/[section]/page.tsx',import.meta.url),'utf8'),generic=readFileSync(new URL('../components/VirtualPatientWorkspace.tsx',import.meta.url),'utf8'),ten=readFileSync(new URL('../components/ModuleTenPatient.tsx',import.meta.url),'utf8'),matrix=JSON.parse(readFileSync(new URL('../generated/migration-matrix.json',import.meta.url),'utf8'));
  assert.match(page,/migratedVirtualPatients=new Set\(\[7,8,9\]\)/);
  assert.match(page,/ModuleTenPatient/);
  assert.match(generic,/localStorage\.setItem/);
  assert.match(generic,/disabled=\{Boolean\(checked\[stage\.id\]&&isCorrect\)\}/);
  assert.match(generic,/RU:/);assert.match(generic,/EN:/);assert.match(generic,/KZ:/);
  assert.match(ten,/stages:/);assert.match(ten,/correct:/);assert.match(ten,/localStorage\.setItem/);
  assert.equal(matrix.filter(row=>row.section==='virtual-patient'&&[7,8,9,10].includes(row.module)&&row.status==='react-automated-browser-pending').length,4);
});

test('module 10 retains the source blood gases and correct alveolar-gas calculation',()=>{
  const source=readFileSync(new URL('../components/ModuleTenPatient.tsx',import.meta.url),'utf8');
  for(const value of ['7.27','65','58','760','0.21','0.8','69','11'])assert.ok(source.includes(value));
  assert.match(source,/Teaching simulation, not clinical treatment instructions/);
});
