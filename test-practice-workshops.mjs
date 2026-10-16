import assert from 'node:assert/strict';
import {practiceWorkshops,workedPractice,checkPracticeAnswer} from './public/practice-workshops.js';
// Independently recompute targets from the displayed problem inputs.
const expected=[(500-150)*12/1000,100/2/100,0-(-7),3*.2,.45/3,(2/1)**4,2.5+.5+1+2,.863*200/2.4,.75/2*(160/3)/40,.21*(560-47),70/(5600/60),(28-12)/4,(20+16)/2,1.34*10*.98+.003*100,40*6/4,140-104-12,40/60,60/(1.2+2.8),(6-4)/(45-40),15*10*(20-6),.21*(500-47)-25/.8,90/6,1*3/3,100*(2.15-1.8)/3,4.5*10*12];
assert.equal(Object.keys(practiceWorkshops).length,25);
for(let id=1;id<=25;id++){
 const data=practiceWorkshops[id];assert.ok(Math.abs(data.expected-expected[id-1])<1e-5,`Module ${id} target`);
 for(const key of ['unit','problem','solution','interpretation','question','answer']){
  assert.equal(data[key].length,3);data[key].forEach(text=>assert.ok(typeof text==='string'&&text.length>0,`${id}/${key}`));
 }
 for(const value of ['', ' ',null,undefined,'Infinity','NaN','1e999','0x10','4.2abc'])assert.equal(checkPracticeAnswer(id,value),'invalid');
 assert.equal(checkPracticeAnswer(id,String(expected[id-1])),'correct');
 assert.equal(checkPracticeAnswer(id,String(expected[id-1]).replace('.',',')),'correct');
 assert.equal(checkPracticeAnswer(id,expected[id-1]*2),'incorrect');
 for(const lang of ['RU','EN','KZ']){
  const practice=workedPractice(id,'practice',lang),discussion=workedPractice(id,'questions',lang);
  assert.ok(practice.includes(`data-practice="${id}"`));assert.ok(practice.includes(`/interactive?lang=${lang}`));
  assert.ok(discussion.includes('<details>'));assert.ok(!practice.includes('undefined'));
  assert.equal(workedPractice(id,'practice',['RU','EN','KZ'].indexOf(lang)),practice);
 }
}
assert.equal(new Set(Object.values(practiceWorkshops).map(d=>d.problem[1])).size,25);
assert.equal(new Set(Object.values(practiceWorkshops).map(d=>d.answer[1])).size,25);
console.log('25 independently calculated practice targets; 150 localized sections; input validation passed.');
