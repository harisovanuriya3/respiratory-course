import assert from 'node:assert/strict';
import {expandedPhysiologyCases} from './public/expanded-physiology-cases.js';
for(const [L,lang] of ['RU','EN','KZ'].entries())for(const id of [2,3,4,6,7,9,10,12])for(const section of ['cases','practice','clinical','virtual-patient','questions']){
 const html=expandedPhysiologyCases(id,section,L,lang);
 assert.ok(html.includes('<details>'),id+'/'+section+'/'+lang);
 assert.ok(html.includes('/modules/'+id+'/theory?lang='+lang));
}
assert.equal(expandedPhysiologyCases(1,'cases',0,'RU'),'');
console.log('120 case placements validated across 8 modules, 5 sections, 3 languages.');
