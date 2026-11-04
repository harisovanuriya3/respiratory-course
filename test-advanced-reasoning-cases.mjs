import assert from 'node:assert/strict';
import {advancedReasoningCases} from './public/advanced-reasoning-cases.js';
const ids=[11,15,16,17,18,19,20,21,22,23,25];
for(const [L,lang] of ['RU','EN','KZ'].entries())for(const id of ids)for(const section of ['cases','practice','clinical','virtual-patient','questions']){
 const html=advancedReasoningCases(id,section,L,lang);
 assert.ok(html.includes('<details>'),id+'/'+section+'/'+lang);
 assert.ok(html.includes('/modules/'+id+'/theory?lang='+lang));
}
console.log('165 clinical reasoning placements across eleven modules verified.');
