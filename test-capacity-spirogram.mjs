import assert from 'node:assert/strict';
import {lungCapacities,capacitySpirogram} from './public/capacity-spirogram.js';
import {moduleOneVisual} from './public/module-one-visual.js';
const a=lungCapacities({vt:500,irv:3000,erv:1100,rv:1200});
assert.deepEqual([a.vc,a.tlc,a.frc,a.ic],[4600,5800,2300,3500]);
assert.equal(a.tlc,a.vc+a.rv);
assert.throws(()=>lungCapacities({vt:0,irv:3000,erv:1100,rv:1200}),RangeError);
for(const [L,lang] of ['RU','EN','KZ'].entries()){
 const html=moduleOneVisual(L);
 assert.ok(html.includes('data-m1-phase-inspiration') && html.includes('data-m1-phase-expiration'),'Existing anatomical animation lost');
 assert.ok(html.includes('data-m1-graphmode="capacities"'));
 assert.ok(html.includes('data-m1-capacity-graph'));
 assert.ok(html.includes('data-capacity-wave'));
 assert.ok(html.includes('data-m1-forced-graph'));
 assert.ok(capacitySpirogram(L).includes('data-irv'));
}
console.log('Full lung capacity spirogram validated in three languages and existing anatomy preserved.');
