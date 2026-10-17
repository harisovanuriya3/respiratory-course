import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

test('migrated virtual patients use localized persistent React decision workflows',()=>{
  const page=readFileSync(new URL('../app/modules/[id]/[section]/page.tsx',import.meta.url),'utf8'),generic=readFileSync(new URL('../components/VirtualPatientWorkspace.tsx',import.meta.url),'utf8'),ten=readFileSync(new URL('../components/ModuleTenPatient.tsx',import.meta.url),'utf8'),matrix=JSON.parse(readFileSync(new URL('../generated/migration-matrix.json',import.meta.url),'utf8'));
  assert.match(page,/ModuleTenPatient/);
  assert.match(generic,/localStorage\.setItem/);
  assert.match(generic,/disabled=\{Boolean\(checked\[stage\.id\]&&isCorrect\)\}/);
  assert.match(generic,/RU:/);assert.match(generic,/EN:/);assert.match(generic,/KZ:/);
  assert.match(ten,/stages:/);assert.match(ten,/correct:/);assert.match(ten,/localStorage\.setItem/);
  assert.match(page,/Array\.from\(\{length:25\}/);
  assert.match(page,/extractLegacyQuizOrEmpty\(entry\.html\)/);
  assert.match(generic,/sourceFeedback/);
  assert.match(generic,/PVR = \(32.+9\)\/4\.6 = 5 WU/);
  assert.match(generic,/Perfusion without ventilation means V\/Q = 0/);
  assert.match(generic,/oxygen carrying capacity/);
  assert.match(generic,/alveolar ventilation retains CO/);
  assert.match(generic,/\[data-step\]/);
  assert.match(generic,/outerDetails/);
  assert.match(generic,/moduleId===1/);
  assert.match(generic,/higher R increases/);
  assert.match(generic,/Reduced Ptp promotes lung collapse/);
  assert.equal(matrix.filter(row=>row.section==='virtual-patient'&&row.status==='react-automated-browser-pending').length,25);
});

test('all 75 localized patient routes contain source material and use crash-safe extraction',()=>{
  const pages=JSON.parse(readFileSync(new URL('../generated/legacy-content.json',import.meta.url),'utf8')).pages;
  const parser=readFileSync(new URL('../lib/legacy-quiz.ts',import.meta.url),'utf8');
  for(let module=1;module<=25;module++)for(const language of ['RU','EN','KZ']){
    const page=pages[`${module}/virtual-patient/${language}`];
    assert.ok(page&&page.characters>0,`missing patient ${module}/${language}`);
  }
  assert.match(parser,/extractLegacyQuizOrEmpty/);
  assert.match(parser,/catch\{return\[\]\}/);
});

test('module 10 retains the source blood gases and correct alveolar-gas calculation',()=>{
  const source=readFileSync(new URL('../components/ModuleTenPatient.tsx',import.meta.url),'utf8');
  for(const value of ['7.27','65','58','760','0.21','0.8','69','11'])assert.ok(source.includes(value));
  assert.match(source,/Teaching simulation, not clinical treatment instructions/);
});
