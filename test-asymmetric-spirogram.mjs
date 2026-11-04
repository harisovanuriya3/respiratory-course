import assert from 'node:assert/strict';
import {tidalBreathFraction,moduleOneVisual} from './public/module-one-visual.js';
assert.ok(Math.abs(tidalBreathFraction(0))<1e-9);
assert.ok(Math.abs(tidalBreathFraction(.38)-1)<1e-9);
assert.ok(tidalBreathFraction(.2)>tidalBreathFraction(.1));
assert.ok(tidalBreathFraction(.7)<tidalBreathFraction(.5));
assert.ok(Math.abs(tidalBreathFraction(.99))<.06);
assert.notEqual(tidalBreathFraction(.19),.5,'Trace should not be a symmetric sinusoid');
for(let L=0;L<3;L++){const html=moduleOneVisual(L);assert.ok(html.includes('data-m1-diaphragm'));assert.ok(html.includes('data-m1-graphmode="capacities"'));assert.ok(html.includes('data-m1-forced-graph'));}
console.log('Asymmetric tidal spirogram and preserved anatomical controls verified.');
