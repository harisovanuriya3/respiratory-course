import assert from 'node:assert/strict';
import {respiratoryMechanics,externalBreathingLab,initExternalBreathingLab} from './public/external-breathing-lab.js';
for(const args of [{},{resistance:8},{compliance:.045},{rate:30}]){
 const m=respiratoryMechanics(args),R=args.resistance??2,C=args.compliance??.1;
 for(const p of m.samples){
  assert.ok(Math.abs(p.palv+R*p.flow)<1e-10,'Pressure gradient drives inward flow');
  assert.ok(Math.abs(p.palv-p.ppl-p.volume/C)<1e-10,'Transpulmonary pressure increment');
 }
 assert.ok(m.samples[30].palv<0,'Inspiratory pressure below atmosphere');
 assert.ok(m.samples[90].palv>0,'Expiratory pressure above atmosphere');
}
// Deterministic DOM harness: tests behaviour without claiming a browser audit.
for(const reduce of [false,true]){
 const nodes=new Map(),pending=new Map();let serial=0;
 const node=id=>{if(!nodes.has(id))nodes.set(id,{value:'',textContent:'',style:{},attrs:{},nextElementSibling:{},setAttribute(k,v){this.attrs[k]=v},removeAttribute(k){delete this.attrs[k]},focus(){this.focused=true}});return nodes.get(id)};
 for(const [k,v] of Object.entries({rate:12,drive:8,resistance:2,compliance:.1}))node('#mech-'+k).value=v;
 const root={querySelector:node,querySelectorAll:()=>[]};
 globalThis.document={getElementById:()=>root};
 globalThis.matchMedia=()=>({matches:reduce,addEventListener(){},removeEventListener(){}});
 globalThis.requestAnimationFrame=cb=>{pending.set(++serial,cb);return serial};
 globalThis.cancelAnimationFrame=id=>pending.delete(id);
 globalThis.addEventListener=()=>{};
 initExternalBreathingLab(0);
 assert.equal(pending.size,0,'No automatic motion');
 node('#mech-start').onclick();assert.equal(pending.size,0,'Prediction required');
 node('#mech-prediction').value='Higher resistance lowers tidal volume';
 node('#mech-start').onclick();assert.equal(pending.size,reduce?0:1);
 node('#mech-pause').onclick();assert.equal(pending.size,0,'Pause cancels frame');
 node('#mech-compare').onclick();
 assert.equal(node('#mech-spiro').attrs.d,node('#mech-spiro-saved').attrs.d,'Identical inputs overlap exactly');
 node('#mech-rate').value=24;node('#mech-rate').oninput();
 assert.notEqual(node('#mech-spiro').attrs.d,node('#mech-spiro-saved').attrs.d);
 node('#mech-reset').onclick();assert.equal(node('#mech-spiro-saved').attrs.d,undefined);
}
for(let L=0;L<3;L++){const html=externalBreathingLab(L);assert.ok(html.includes('ΔPpl'));assert.ok(html.includes('497–499'));assert.ok(html.includes('openstax.org'));}
console.log('PASS: pressure signs, pressure-volume identity, RU/EN/KZ, prediction gate, reduced motion, pause, comparison and reset');
