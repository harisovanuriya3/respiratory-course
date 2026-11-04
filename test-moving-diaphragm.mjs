import assert from 'node:assert/strict';import {moduleOneVisual} from './public/module-one-visual.js';
for(let L=0;L<3;L++){const html=moduleOneVisual(L);assert.ok(html.includes('data-m1-diaphragm-highlight'));assert.ok(html.includes('data-m1-diaphragm-label'));assert.ok(html.includes('fill-opacity=".48"'));assert.ok(html.includes('/assets/module1/thorax.webp'));assert.ok(html.includes('data-m1-play'));assert.ok(html.includes('data-capacity-spirogram'));}
console.log('Moving diaphragm overlay and original anatomical image present in all languages.');
