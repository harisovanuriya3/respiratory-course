const tr=(L,ru,en,kz)=>[ru,en,kz][L];
const visuals=[
 {kind:'vent',image:'thorax-expiration',metric:'f = 8/min',label:['Гиповентиляция','Hypoventilation','Гиповентиляция']},
 {kind:'lung',image:'thorax-inspiration',metric:'SpO₂ ↓',label:['Ателектаз','Atelectasis','Ателектаз']},
 {kind:'oxygen',image:'alveolus-capillary-atlas',metric:'Hb ↓',label:['Содержание O₂','Oxygen content','O₂ мөлшері']},
 {kind:'lung',image:'thorax-expiration',metric:'Ppl',label:['Плевральное давление','Pleural pressure','Плевра қысымы']}
];
const kinds=['vent','lung','oxygen','lung','airway','airway','spiro','vent','diffusion','gas','diffusion','perfusion','oxygen','oxygen','gas','gas','neural','neural','gas','exercise','gas','sleep','pressure','spiro','oxygen','lung','vent'];
const imageFor={vent:'thorax-expiration',lung:'thorax-inspiration',oxygen:'alveolus-capillary-atlas',airway:'thorax-inspiration',spiro:'spirometry-workstation',diffusion:'alveolus-capillary-atlas',gas:'alveolus-capillary-atlas',perfusion:'alveolus-capillary-atlas',neural:'brain-spinal-cord',exercise:'thorax-inspiration',sleep:'thorax-expiration',pressure:'thorax-expiration'};
export function patientCaseVisual(index,L){
 const v=visuals[index]||{kind:kinds[index]||'vent',image:imageFor[kinds[index]]||'thorax-expiration',metric:'',label:['Клиническая физиология','Clinical physiology','Клиникалық физиология']};
 const kind=v.kind, image=v.image||imageFor[kind];
 const title=(v.label||['Физиологический механизм','Physiological mechanism','Физиологиялық механизм'])[L];
 const patterns={vent:[14,8,6,8,14,19,14,8],lung:[16,13,10,14,17,13,10,16],oxygen:[11,12,12,11,12,11,12,12],airway:[13,7,5,9,13,7,5,9],spiro:[11,14,17,13,11,14,17,13],diffusion:[12,11,12,13,12,11,12,13],gas:[13,12,11,12,13,12,11,12],perfusion:[12,13,12,11,12,13,12,11],neural:[10,14,8,16,10,14,8,16],exercise:[8,13,18,15,8,13,18,15],sleep:[15,15,6,15,15,15,6,15],pressure:[11,7,14,8,11,7,14,8]};
 const samples=patterns[kind]||patterns.vent;
 const poly=samples.map((n,i)=>(10+i*36)+','+(42-n*1.6)).join(' ');
 return '<figure class="patient-case-visual" aria-label="'+title+'"><img loading="lazy" src="/assets/clinical/'+image+'.webp" alt="'+title+'"><figcaption><strong>'+title+'</strong><span>'+tr(L,'Учебная анатомическая иллюстрация','Educational anatomical illustration','Оқу анатомиялық иллюстрациясы')+'</span></figcaption><svg viewBox="0 0 275 65" role="img" aria-label="'+tr(L,'Схематический сигнал для обсуждения, не запись пациента','Illustrative signal, not a patient recording','Сызбалық сигнал, пациент жазбасы емес')+'"><path d="M8 50H270" stroke="#a6c3c2"/><polyline points="'+poly+'" stroke="#087b83" stroke-width="3" fill="none"/></svg><small>'+tr(L,'Схема для объяснения механизма, не результат обследования.','Mechanism illustration, not examination data.','Механизм сызбасы, зерттеу нәтижесі емес.')+'</small></figure>';
}
