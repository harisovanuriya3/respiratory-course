import assert from 'node:assert/strict';
import {mechanicsState,mechanicsImageLab} from './public/mechanics-image-lab.js';
import {moduleFour} from './public/module-four.js';
const close=(a,b)=>assert.ok(Math.abs(a-b)<1e-8,`${a} != ${b}`);
for(const phase of [0,.1,.25,.5,.75,1]){
 const s=mechanicsState(.5,12,.2,2,phase);close(s.palv-s.ppl,s.ptp);
 const h=1e-5,derivative=(mechanicsState(.5,12,.2,2,phase+h).volume-mechanicsState(.5,12,.2,2,phase-h).volume)/(2*h*5);close(derivative,s.flow);
 close(mechanicsState(.5,12,.2,4,phase).palv,2*s.palv);
 close(mechanicsState(.5,12,.1,2,phase).ptp-5,2*(s.ptp-5));
}
let s=mechanicsState(.5,12,.2,2,0);close(s.volume,0);close(s.flow,0);close(s.ptp,5);close(s.ppl,-5);
s=mechanicsState(.5,12,.2,2,.5);close(s.volume,.5);close(s.flow,0);close(s.ptp,7.5);close(s.ppl,-7.5);
close(mechanicsState(.5,12,.2,2,.25).flow,Math.PI/10);
for(let L=0;L<3;L++){const html=mechanicsImageLab(L);assert.ok(html.includes('/assets/course/overview.webp'));assert.ok(!html.includes('<ellipse'));assert.equal((html.match(/data-mechanics-graph=/g)||[]).length,3);assert.ok(html.includes('name="prediction" required'));assert.ok(moduleFour('interactive',L).includes('data-mechanics-image-lab'));}
console.log('Image mechanics: pressure identities, independent volume derivative, boundaries, R/C effects, prediction and trilingual integration passed.');
