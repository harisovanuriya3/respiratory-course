import assert from 'node:assert/strict';
import {regulationTheoryChapter} from './public/regulation-theory-chapters.js';
for(let L=0;L<3;L++){
 for(const mid of [17,18,19]){
  const html=regulationTheoryChapter(mid,L,['RU','EN','KZ'][L]);
  assert.ok(html.length>1500);
  assert.equal((html.match(/class="regulation-theory-node"/g)||[]).length,5);
  assert.ok(html.includes('PMC9995121'));
  assert.ok(html.includes('PMC4559867'));
  assert.ok(html.includes('PMC4422496'));
  assert.ok(html.includes('/modules/17/interactive?lang='));
 }
 assert.equal(regulationTheoryChapter(7,L,'RU'),'');
}
console.log('Expanded regulation theory, references and functional visual pathways validated in RU EN KZ.');
