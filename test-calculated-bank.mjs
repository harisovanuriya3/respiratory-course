import assert from 'node:assert/strict';
import {expandedBank} from './public/exam-bank-v32.js';
const escape=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
const number=(text,label)=>{const match=text.match(new RegExp(escape(label)+'=(-?\\d+(?:\\.\\d+)?)'));assert.ok(match,`Missing ${label} in ${text}`);return Number(match[1]);};
// Independent recomputation from displayed input data, not stored answers.
const calculators={
 ve:n=>n('VT')*n('f')/1000,
 va:n=>(n('VT')-n('VD'))*n('f')/1000,
 io2:n=>n('FiO₂')*(n('PB')-n('PH₂O')),
 area:n=>n('A')/n('d'),diff:n=>n('A')*n('ΔP')/n('d'),
 compliance:n=>n('ΔV')/n('ΔP'),resist:n=>n('ΔP')/n('flow'),work:n=>n('ΔP')*n('ΔV'),
 laplace:n=>2*n('T')/n('r'),flow:n=>n('ΔP')/n('R'),
 poiseuille:(n,q)=>1/Number(q.match(/radius is ([\d.]+)/)[1])**4,
 capacity:n=>n('IRV')+n('VT')+n('ERV'),paco2:n=>0.863*n('V̇CO₂')/n('V̇A'),
 gradient:n=>n('P₁')-n('P₂'),ao2:n=>n('FiO₂')*(n('PB')-47)-n('PaCO₂')/n('R'),
 pvr:n=>(n('mPAP')-n('PAWP'))/n('CO'),vq:n=>n('V̇A')/n('Q̇'),
 dead:n=>(n('VT')-n('alveolar ventilated volume per breath'))/n('VT')*100,
 cao2:n=>1.34*n('Hb')*n('SaO₂')/100+0.0031*n('PaO₂'),do2:n=>n('CaO₂')*n('CO')*10,
 extract:n=>(n('CaO₂')-n('CvO₂'))/n('CaO₂')*100,
 ph:n=>6.1+Math.log10(n('HCO₃⁻')/(0.03*n('PaCO₂'))),
 anion:n=>n('Na⁺')-n('Cl⁻')-n('HCO₃⁻'),winter:n=>1.5*n('HCO₃⁻')+8,
 rer:n=>n('V̇CO₂')/n('V̇O₂'),pulse:n=>1000*n('V̇O₂')/n('HR'),
 fick:n=>n('CO')*n('(CaO₂−CvO₂)')*10,
 ahi:(n,q)=>{const m=q.match(/([\d.]+) apnea\/hypopnea events over ([\d.]+) hours/);return Number(m[1])/Number(m[2]);},
 boyle:n=>n('P₁')*n('V₁')/n('P₂'),depth:(n,q)=>1+Number(q.match(/depth ([\d.]+) m/)[1])/10,
 ratio:n=>n('FEV₁')/n('FVC')*100
};
for(const item of expandedBank){
 const q=item.q[1],compute=calculators[item.family];assert.ok(compute,`Untested family ${item.family}`);
 const expected=compute(label=>number(q,label),q);assert.ok(Number.isFinite(expected));
 const matching=item.options.map((o,i)=>({value:parseFloat(o[1]),index:i})).filter(o=>Math.abs(o.value-expected)<=0.00500001);
 assert.equal(matching.length,1,`Ambiguous/wrong rounded options: ${q}`);
 assert.equal(matching[0].index,item.answer,`Incorrect answer: ${q}; expected ${expected}`);
 for(const explanation of item.explain)assert.ok(explanation.includes(item.options[item.answer][item.explain.indexOf(explanation)].split(' ')[0]),'Explanation disagrees with keyed result');
}
assert.equal(new Set(expandedBank.map(x=>x.family)).size,31);
console.log(`PASS: all ${expandedBank.length} calculation items independently recomputed across 31 physiology families`);
