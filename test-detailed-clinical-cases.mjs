import assert from 'node:assert/strict';
import {detailedCasePackage} from './public/detailed-clinical-case-package.js';
for(const [L,lang] of ['RU','EN','KZ'].entries())for(const id of [1,5,8,13,14,24]){
 for(const section of ['cases','clinical','questions','virtual-patient','practice']){
  const html=detailedCasePackage(id,section,L,lang);
  assert.ok(html.includes('<details>'),id+'/'+section+'/'+lang);
  assert.ok(html.includes('/modules/'+id+'/interactive?lang='+lang));
 }
}
assert.equal(detailedCasePackage(2,'cases',0,'RU'),'');
console.log('90 case placements verified across six modules and three languages.');
