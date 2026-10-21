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
    if(section==='theory'){
      assert.match(html,/data-m2-atlas/);
      assert.match(html,/assets\/module2\/respiratory-system\.webp/);
      assert.doesNotMatch(html,/class="m2-oxygen"|class="resp-diagram"/);
    }
    if(section==='tests'){
      assert.equal((html.match(/<fieldset>/g)||[]).length,12);
      const pretest=moduleTwo('pretest',L);
      const prompts=[...html.matchAll(/<legend>(.*?)<\/legend>/g)].map(m=>m[1].replace(/^\d+\. /,''));
      assert.equal(new Set(prompts).size,12);
      for(const prompt of prompts)assert.ok(!pretest.includes(prompt),'Entry check must use different prompts');
    }
    if(section==='cases')assert.equal((html.match(/<details>/g)||[]).length,9);
    if(section==='virtual-patient'){
      assert.match(html,/data-m2-patient/);
      assert.match(html,/data-m2-physiology/);
      assert.match(html,/assets\/module2\/patient\.webp/);
      assert.match(html,/assets\/module2\/mentor\.webp/);
      assert.doesNotMatch(html,/data-m2-quiz/);
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
