import assert from 'node:assert/strict';
import {reasoningSelfChecks} from './public/reasoning-self-checks.js';
import {detailedCasePackage} from './public/detailed-clinical-case-package.js';
const ids=[1,5,8,13,14,24];
for(const [L,lang] of ['RU','EN','KZ'].entries())for(const id of ids){
 const check=reasoningSelfChecks(id,'tests',L,lang);
 assert.ok(check.includes('<details>'));
 assert.ok(check.includes('/modules/'+id+'/practice?lang='+lang));
 for(const section of ['cases','clinical','questions','virtual-patient','practice'])assert.ok(detailedCasePackage(id,section,L,lang).includes('<details>'));
}
console.log('Six self-checks and 90 clinical case placements checked.');
