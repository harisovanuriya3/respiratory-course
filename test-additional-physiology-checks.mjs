import assert from 'node:assert/strict';
import {additionalPhysiologyChecks} from './public/additional-physiology-checks.js';
for(const [L,lang] of ['RU','EN','KZ'].entries())for(const mid of [11,15,16,20,21,22]){
 const html=additionalPhysiologyChecks(mid,'tests',L,lang);
 assert.ok(html.includes('<details>'));
 assert.ok(html.includes('/modules/'+mid+'/theory?lang='+lang));
}
assert.equal(additionalPhysiologyChecks(10,'tests',0,'RU'),'');
console.log('Six additional physiology self-checks validated in RU EN KZ.');
