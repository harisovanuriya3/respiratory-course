import assert from 'node:assert/strict';
import {forcedExpiration,forcedExpirationPanel} from './public/forced-expiration-extension.js';
import {moduleOneVisual} from './public/module-one-visual.js';
for(const [L,lang] of ['RU','EN','KZ'].entries()){
 const html=moduleOneVisual(L);
 assert.ok(html.includes('data-m1-visual'));
 assert.ok(html.includes('/assets/module1/thorax.webp'));
 assert.ok(html.includes('data-m1-phase-inspiration') && html.includes('data-m1-phase-expiration'));
 assert.ok(!html.includes('data-m1-diaphragm'),'Removed artificial diaphragm overlay must stay absent');
 assert.ok(html.includes('data-m1-curve'));
 assert.ok(html.includes('data-forced-panel'));
 assert.ok(html.includes('data-forced-wave'));
 assert.ok(forcedExpirationPanel(L).includes('data-fvc'));
}
const n=forcedExpiration(4,.8);
assert.ok(Math.abs(n.fev1-3.2)<1e-9);
assert.ok(Math.abs(n.volume(6)-4)<.01);
const o=forcedExpiration(4,.48);
assert.ok(o.fev1<n.fev1);
assert.throws(()=>forcedExpiration(0,.8),RangeError);
console.log('Anatomical lab preserved; forced-expiration spirometry integrated for three languages.');
