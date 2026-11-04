import assert from 'node:assert/strict';import {moduleOneVisual} from './public/module-one-visual.js';
for(let L=0;L<3;L++){
 const html=moduleOneVisual(L);
 assert.ok(html.includes('/assets/clinical/thorax-expiration.webp'));
 assert.ok(html.includes('/assets/clinical/thorax-inspiration.webp'));
 assert.ok(html.includes('data-m1-phase-expiration'));
 assert.ok(html.includes('data-m1-phase-inspiration'));
 assert.ok(!html.includes('data-m1-diaphragm'),'Old drawn diaphragm overlay must not reappear');
 assert.ok(html.includes('data-m1-play'));
 assert.ok(html.includes('data-capacity-spirogram'));
}
console.log('Original inhale/exhale anatomy frames present; misleading line overlay absent.');
