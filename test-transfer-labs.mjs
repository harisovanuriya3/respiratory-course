import assert from 'node:assert/strict';
import {relativeDiffusion,transferResistance,transferLab} from './public/transfer-labs.js';
const close=(a,b)=>assert.ok(Math.abs(a-b)<1e-9,`${a} != ${b}`);
const baseline={area:1,thickness:1,coefficient:1,gradient:60};
close(relativeDiffusion(baseline).flux,1);
close(relativeDiffusion({...baseline,thickness:2}).flux,.5);
const compensated=relativeDiffusion({...baseline,thickness:2,gradient:120});
close(compensated.flux,1);close(compensated.conductance,.5);
close(relativeDiffusion({...baseline,gradient:0}).flux,0);
const reference={dm:60,theta:.8,vc:75,va:6};
const result=transferResistance(reference);close(result.dlco,30);close(result.kco,5);close(result.membranePercent,50);
close(transferResistance({...reference,dm:30}).dlco,20);
close(transferResistance({...reference,vc:37.5}).dlco,20);
const small=transferResistance({...reference,va:3});close(small.dlco,30);close(small.kco,10);
for(const key of ['dm','theta','vc','va'])for(const value of [0,-1,NaN,Infinity])assert.throws(()=>transferResistance({...reference,[key]:value}));
for(const key of ['area','thickness','coefficient'])assert.throws(()=>relativeDiffusion({...baseline,[key]:0}));
assert.throws(()=>relativeDiffusion({...baseline,gradient:-1}));
for(const mid of [9,11])for(let L=0;L<3;L++){
 const html=transferLab(mid,L);assert.ok(html.includes(`data-transfer="${mid}"`));assert.equal((html.match(/type="number"/g)||[]).length,4);assert.ok(!html.includes('undefined'));
}
console.log('PASS: diffusion driving force, series resistances, non-identifiability, KCO quotient and invalid domains');
