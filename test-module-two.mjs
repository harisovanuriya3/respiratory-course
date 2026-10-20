// Chapter 2 structural/translation smoke test. Run with: node test-module-two.mjs
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {sections,modules} from './public/content.js';
import {moduleTwo,moduleTwoDeadSpaceLab} from './public/module-two.js';
globalThis.window={};
assert.equal(modules.length,25);
assert.equal(sections.length,17);
assert.equal(modules[1].id,2);
const app=readFileSync(new URL('./public/app.js',import.meta.url),'utf8');
assert.match(app,/moduleTwoDeadSpaceLab\(L\)/);
assert.match(app,/initModuleTwoDeadSpaceLab\(\)/);
assert.match(app,/initModuleTwo\(\)/);
const routeCount=sections.length*3;
let count=0;
for(let L=0;L<3;L++){
  for(const [section] of sections){
    const html=section==='interactive'?moduleTwoDeadSpaceLab(L):moduleTwo(section,L);
    assert.equal(typeof html,'string');
    assert.ok(html.length>250, `Insufficient content: ${section} language=${L}`);
    assert.ok(!html.includes('undefined'),`Undefined value in ${section}/${L}`);
    if(section==='interactive')assert.match(html,/data-m2-deadspace/);
    if(section==='theory')assert.match(html,/m2-exchange/);
    if(section==='virtual-patient'){
      assert.match(html,/data-m2-patient/);
      assert.match(html,/data-m2-physiology/);
    }
    if(section==='practice')assert.match(html,/data-m2-reasoning/);
    count++;
  }
}
assert.equal(count,routeCount);
for(const [vt,vd,f,expected] of [[500,150,12,4200],[300,150,20,3000],[400,150,16,4000]]){
  assert.equal((vt-vd)*f,expected);
}
console.log(`Module 2: ${count} language-section combinations checked, plus routing and numerical examples.`);
