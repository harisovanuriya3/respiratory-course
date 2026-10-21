import assert from 'node:assert/strict';
import {courseQuestions,discussionItems} from './public/course-assessment-bank.js';
const calculators={ve:n=>n.VT*n.f/1000,va:n=>(n.VT-n.VD)*n.f/1000,io2:n=>n['FiO₂']*(n.PB-n['PH₂O']),area:n=>n.A/n.d,diff:n=>n.A*n['ΔP']/n.d,compliance:n=>n['ΔV']/n['ΔP'],resist:n=>n['ΔP']/n.flow,work:n=>n['ΔP']*n['ΔV'],laplace:n=>2*n.T/n.r,flow:n=>n['ΔP']/n.R,poiseuille:n=>Math.pow(n.radius,-4),capacity:n=>n.IRV+n.VT+n.ERV,paco2:n=>.863*n['V̇CO₂']/n['V̇A'],gradient:n=>n['P₁']-n['P₂'],ao2:n=>n['FiO₂']*(n.PB-47)-n['PaCO₂']/n.R,pvr:n=>(n.mPAP-n.PAWP)/n.CO,vq:n=>n['V̇A']/n['Q̇'],dead:n=>100*(1-n['alveolar ventilated volume per breath']/n.VT),cao2:n=>1.34*n.Hb*n['SaO₂']/100+.0031*n['PaO₂'],do2:n=>10*n['CaO₂']*n.CO,extract:n=>100*(1-n['CvO₂']/n['CaO₂']),ph:n=>6.1+Math.log10(n['HCO₃⁻']/(.03*n['PaCO₂'])),anion:n=>n['Na⁺']-n['Cl⁻']-n['HCO₃⁻'],winter:n=>8+1.5*n['HCO₃⁻'],rer:n=>n['V̇CO₂']/n['V̇O₂'],pulse:n=>1000*n['V̇O₂']/n.HR,fick:n=>10*n.CO*n['(CaO₂−CvO₂)'],ahi:n=>n.events/n.hours,boyle:n=>n['P₁']*n['V₁']/n['P₂'],depth:n=>1+n.depth/10,ratio:n=>100*n['FEV₁']/n.FVC};
const near=(a,b)=>assert.ok(Math.abs(a-b)<1e-7,`${a} != ${b}`),r=x=>Math.round(x*100)/100;let models=0,questions=0;
for(let mid=1;mid<=25;mid++)for(const mode of ['tests','cases']){
 const bank=courseQuestions(mid,mode);assert.equal(bank.length,20);const prompts=[new Set,new Set,new Set];
 for(const item of bank){questions++;assert.equal(item.options.length,4);assert.ok(Number.isInteger(item.answer)&&item.answer>=0&&item.answer<4);
  for(let L=0;L<3;L++){assert.ok(item.q[L]?.length>12);assert.ok(item.explain[L]?.length>20);assert.equal(new Set(item.options.map(o=>o[L])).size,4);for(const o of item.options)assert.ok(typeof o[L]==='string'&&o[L].trim());const p=item.q[L].replace(/^\d+[.)]\s*/,'').replace(/\s+/g,' ').trim();assert.ok(!prompts[L].has(p),`Duplicate ${mid} ${mode} ${L}: ${p}`);prompts[L].add(p);}
  if(item.meta){models++;const {family,params:p,paramsB:b,type,pivot}=item.meta,calculate=calculators[family];assert.ok(calculate);const A=calculate(p),B=calculate(b);near(A,item.meta.result);near(B,item.meta.resultB);
   assert.ok(Number.isFinite(A)&&Number.isFinite(B));
   for(const n of [p,b]){if(family==='va')assert.ok(n.VT>n.VD);if(family==='dead')assert.ok(n.VT>n['alveolar ventilated volume per breath']);if(family==='pvr')assert.ok(n.mPAP>n.PAWP);if(family==='ratio')assert.ok(n['FEV₁']<=n.FVC);if(family==='extract')assert.ok(n['CvO₂']<n['CaO₂']);if(family==='io2'||family==='ao2')assert.ok(n['FiO₂']>0&&n['FiO₂']<=1);}
   if(type==='comparison'){assert.equal(item.answer,Math.abs(B-A)<1e-9?2:B>A?0:1);}else{
    const expected=type==='experimental-design'?b[pivot]:type==='prediction'?B:A;
    const matches=item.options.map((o,i)=>({i,n:parseFloat(o[1])})).filter(o=>Math.abs(o.n-r(expected))<.00001);assert.equal(matches.length,1);assert.equal(matches[0].i,item.answer);
    if(type==='experimental-design'){const matchesTarget=item.options.map((o,i)=>({i,n:calculate({...p,[pivot]:parseFloat(o[1])})})).filter(o=>Number.isFinite(o.n)&&r(o.n)===r(B));assert.equal(matchesTarget.length,1,'Ambiguous inverse problem '+JSON.stringify(item));}
   }
  }
 }
}
for(let L=0;L<3;L++){assert.equal(discussionItems(L).length,20);assert.equal(new Set(discussionItems(L).map(q=>q.prompt)).size,20);}
assert.equal(questions,1000);console.log(`PASS ${questions} questions × RU/EN/KZ, exactly 4 distinct options and one key; ${models} numerical problems independently recomputed; 20 restored discussion tasks.`);

// The examination center uses a distinct bank and complete module pools.
const {allExamItems}=await import('./public/exam-center.js');
const learningPrompts=[new Set,new Set,new Set];
for(let mid=1;mid<=25;mid++)for(const mode of ['tests','cases'])for(const item of courseQuestions(mid,mode))for(let L=0;L<3;L++){
 const text=item.q[L].replace(/\s+/g,' ').trim();assert.ok(!learningPrompts[L].has(text),'Repeated prompt in the unified learning bank');learningPrompts[L].add(text);
 assert.ok(!/[А-Яа-яЁёӘәҒғҚқҢңӨөҰұҮүҺһІі]{3}/.test(item.q[1]+item.explain[1]+item.options.map(o=>o[1]).join(' ')),'Untranslated English item');
}
let examModels=0;
for(const item of allExamItems){assert.equal(item.options.length,4);for(let L=0;L<3;L++)assert.ok(!learningPrompts[L].has(item.q[L].replace(/\s+/g,' ').trim()),'Examination repeats a learning prompt');if(item.meta){examModels++;const {family,params,paramsB,type,pivot}=item.meta,A=calculators[family](params),B=calculators[family](paramsB);near(A,item.meta.result);near(B,item.meta.resultB);if(type==='comparison')assert.equal(item.answer,Math.abs(A-B)<1e-9?2:B>A?0:1);else{const expected=type==='experimental-design'?paramsB[pivot]:type==='prediction'?B:A;near(parseFloat(item.options[item.answer][1]),r(expected));}}}
for(let mid=1;mid<=25;mid++)assert.ok(allExamItems.filter(q=>q.module===mid).length>=20);
console.log(`PASS independent exam bank: ${allExamItems.length} four-option questions, at least 20 per module; ${examModels} additional calculations verified.`);
