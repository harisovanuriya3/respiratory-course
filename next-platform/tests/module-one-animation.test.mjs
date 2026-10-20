import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {stripTypeScriptTypes} from 'node:module';
const source=readFileSync(new URL('../lib/module-one-breathing.ts',import.meta.url),'utf8');
const js=stripTypeScriptTypes(source);
const {quietBreathing}=await import('data:text/javascript;base64,'+Buffer.from(js).toString('base64'));
test('quiet breathing matches all five reference states',()=>{
 for(const [phase,palv,ppl,ptp] of [[0,0,-5,5],[.25,-1,-7,6],[.5,0,-8,8],[.75,1,-6,7],[1,0,-5,5]]){
  const point=quietBreathing(phase);for(const [key,value] of Object.entries({palv,ppl,ptp}))assert.ok(Math.abs(point[key]-value)<1e-10,`${phase} ${key}`);
 }
});
test('pressure identity, flow sign and volume derivative hold throughout the cycle',()=>{
 for(const rate of [6,12,30])for(let i=1;i<1000;i++){
  const phase=i/1000,p=quietBreathing(phase,rate),h=1e-6;
  assert.equal(p.ptp,p.palv-p.ppl);assert.ok(p.ppl<0&&p.ptp>0);
  assert.ok(p.volume>=0&&p.volume<=.5);
  const derivative=(quietBreathing(phase+h,rate).volume-quietBreathing(phase-h,rate).volume)/(2*h)*(rate/60);
  assert.ok(Math.abs(derivative-p.flow)<1e-8);
  if(Math.abs(p.flow)>1e-10)assert.ok(p.palv*p.flow<0);
 }
 for(const phase of [0,.5,1])assert.ok(Math.abs(quietBreathing(phase).flow)<1e-10);
});
test('model rejects invalid inputs and clamps out-of-cycle phases',()=>{
 assert.throws(()=>quietBreathing(NaN));assert.throws(()=>quietBreathing(.2,0));assert.throws(()=>quietBreathing(.2,Infinity));
 assert.equal(quietBreathing(-1).phase,0);assert.equal(quietBreathing(2).phase,1);
});
