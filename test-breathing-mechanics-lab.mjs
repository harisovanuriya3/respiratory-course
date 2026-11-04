import assert from 'node:assert/strict';
import {breathingValues,breathingMechanicsLab} from './public/breathing-mechanics-lab.js';
assert.equal(breathingValues(500,12,150).minute,6);
assert.equal(breathingValues(500,12,150).alveolar,4.2);
assert.equal(breathingValues(250,24,150).minute,6);
assert.equal(breathingValues(250,24,150).alveolar,2.4);
assert.throws(()=>breathingValues(150,12,150),RangeError);
for(const [L,lang] of ['RU','EN','KZ'].entries()){
 for(const section of ['practice','interactive','media']){
  const html=breathingMechanicsLab(1,section,L,lang);
  assert.ok(html.includes('data-breathing-lab'));
  assert.ok(html.includes('data-wave'));
  assert.ok(html.includes('data-preset="1"'));
 }
 assert.equal(breathingMechanicsLab(2,'interactive',L,lang),'');
}
console.log('Breathing mechanics laboratory values, scenarios and three-language placements passed.');
