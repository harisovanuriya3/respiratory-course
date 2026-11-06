import assert from 'node:assert/strict';
import {specialBreathingChapter} from './public/special-breathing-chapters.js';
for(const [L,lang] of ['RU','EN','KZ'].entries()){
 for(const mid of [20,21,22,23,25]){
  const html=specialBreathingChapter(mid,L,lang);
  assert.ok(html.length>1000);
  assert.ok(html.includes('special-breathing-flow'));
  assert.ok(html.includes('target="_blank"'));
 }
 const altitude=specialBreathingChapter(21,L,lang);
 assert.ok(altitude.includes('PIO₂ = FiO₂ × (PB − PH₂O)'));
 assert.ok(altitude.includes('cdc.gov/yellow-book'));
}
assert.equal(specialBreathingChapter(17,0,'RU'),'');
console.log('Five expanded breathing chapters with trilingual mechanisms and visuals verified.');
