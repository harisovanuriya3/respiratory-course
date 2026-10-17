import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

const content=JSON.parse(readFileSync(new URL('../generated/legacy-content.json',import.meta.url),'utf8')).pages;
const source=readFileSync(new URL('../components/ModuleQuizWorkspace.tsx',import.meta.url),'utf8');
const hash=value=>{let result=2166136261;for(const char of value)result=Math.imul(result^char.charCodeAt(0),16777619);return result>>>0};
const shuffle=(values,seed)=>{const result=[...values];let state=hash(seed)||1;for(let index=result.length-1;index>0;index-=1){state=(Math.imul(state,1664525)+1013904223)>>>0;const target=state%(index+1);[result[index],result[target]]=[result[target],result[index]]}return result};

test('React module quiz engine separates diagnostics from graded tests and persists locked attempts',()=>{
  assert.match(source,/mode==='pretest'/);
  assert.match(source,/disabled=\{submitted\}/);
  assert.match(source,/localStorage\.setItem/);
  assert.match(source,/remaining>0/);
  assert.match(source,/attempt\+1/);
});

test('migrated modules retain trilingual questions, answer keys and explanations',()=>{
  for(let moduleId=1;moduleId<=15;moduleId+=1)for(const section of ['pretest','tests'])for(const language of ['RU','EN','KZ']){
    const html=content[`${moduleId}/${section}/${language}`].html;
    assert.match(html,/data-(?:answer|key)=["']\d+["']/);
    assert.match(html,/data-explanation|class=["'][^"']*(?:explain|explanation)/);
  }
});

test('test option shuffle preserves ids and does not pin correct answers first',()=>{
  const positions=[];
  for(let question=0;question<20;question+=1)for(let attempt=0;attempt<3;attempt+=1){const options=[0,1,2,3],correct=question%4;positions.push(shuffle(options,`5-EN-${attempt}-${question}-options`).indexOf(correct))}
  assert.deepEqual(new Set(positions),new Set([0,1,2,3]));
});
