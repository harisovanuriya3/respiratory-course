// V88: oxygen dissociation curve, illustrative Hill approximation, not a clinical oximeter.
const match=location.pathname.match(/^\/modules\/14\/([a-z-]+)\/?$/);
if(match&&['theory','interactive','practice','cases'].includes(match[1])){
 const p=new URLSearchParams(location.search).get('lang');const l=p==='EN'?1:p==='KZ'?2:0;
 const t=(ru,en,kz)=>[ru,en,kz][l];
 const root=document.getElementById('main');
 if(root){
 const el=document.createElement('section');el.className='guided-v38';
 el.innerHTML=`<h3>${t('Лаборатория: кривая диссоциации оксигемоглобина','Laboratory: oxyhemoglobin dissociation curve','Зертхана: оксигемоглобин диссоциациясының қисығы')}</h3>
 <p>${t('Исследуйте влияние PO₂, P50 и гемоглобина на расчётную сатурацию и содержание кислорода. P50 — PO₂ при 50%-ном насыщении гемоглобина.','Explore how PO₂, P50 and hemoglobin affect estimated saturation and oxygen content. P50 is the PO₂ at 50% hemoglobin saturation.','PO₂, P50 және гемоглобиннің есептік қанығуға және оттегі мөлшеріне әсерін зерттеңіз. P50 — гемоглобин 50% қаныққан кездегі PO₂.')}</p>
 <label>${t('PO₂','PO₂','PO₂')}: <output id='o2-po-val'></output> mmHg <input id='o2-po' type='range' min='10' max='120' step='2' value='60'></label>
 <label>P50: <output id='o2-p50-val'></output> mmHg <input id='o2-p50' type='range' min='20' max='35' step='1' value='27'></label>
 <label>${t('Гемоглобин','Hemoglobin','Гемоглобин')}: <output id='o2-hb-val'></output> g/dL <input id='o2-hb' type='range' min='6' max='18' step='1' value='15'></label>
 <svg viewBox='0 0 350 205' width='100%' role='img' aria-label='Illustrative hemoglobin oxygen saturation curve' style='max-width:650px;background:#f8fafc;border-radius:12px'>
 <line x1='38' y1='170' x2='334' y2='170' stroke='#475569'/><line x1='38' y1='16' x2='38' y2='170' stroke='#475569'/>
 <text x='170' y='197' font-size='11' fill='#334155'>PO₂ (mmHg)</text><text x='4' y='12' font-size='11' fill='#334155'>SaO₂ (%)</text>
 <path id='o2-curve' fill='none' stroke='#dc2626' stroke-width='3'/><circle id='o2-dot' r='5' fill='#0f766e'/>
 </svg>
 <p><strong>SaO₂ ≈ <output id='o2-sat'></output>% · CaO₂ ≈ <output id='o2-content'></output> mL O₂/dL</strong></p>
 <p id='o2-comment'></p>
 <details><summary>${t('Расчёт и ограничения модели','Calculation and model limitations','Есептеу және модель шектеулері')}</summary>
 <p>SaO₂ ≈ PO₂ⁿ/(P50ⁿ+PO₂ⁿ), n=2.7; CaO₂ ≈ 1.34×Hb×SaO₂ + 0.003×PO₂.</p>
 <p>${t('Уравнение Хилла — учебная аппроксимация. В реальной крови форма кривой зависит от pH, температуры, 2,3-БФГ, CO₂, типа гемоглобина и дисгемоглобинов. Изменение P50 здесь иллюстрирует сдвиг кривой, но не моделирует все его причины. Не использовать для клинической оценки.','The Hill equation is an educational approximation. In blood, the curve also depends on pH, temperature, 2,3-BPG, CO₂, hemoglobin type and dyshemoglobins. P50 changes illustrate shifts but do not model their causes. Not for clinical use.','Хилл теңдеуі — оқу жуықтауы. Нақты қанда қисық pH, температура, 2,3-БФГ, CO₂, гемоглобин түрі және дисгемоглобиндерге тәуелді. P50 өзгерісі қисық ығысуын көрсетеді, себептерін толық модельдемейді. Клиникалық бағалауға қолданбаңыз.')}</p></details>`;
 const pagination=root.querySelector('.pagination');if(pagination)root.insertBefore(el,pagination);else root.append(el);
 const po=el.querySelector('#o2-po'),p50=el.querySelector('#o2-p50'),hb=el.querySelector('#o2-hb');
 function saturation(x,p){const n=2.7;return x**n/(p**n+x**n)}
 function update(){const x=Number(po.value),p=Number(p50.value),h=Number(hb.value),s=saturation(x,p),ca=1.34*h*s+0.003*x;
 el.querySelector('#o2-po-val').textContent=x;el.querySelector('#o2-p50-val').textContent=p;el.querySelector('#o2-hb-val').textContent=h;
 el.querySelector('#o2-sat').textContent=(s*100).toFixed(1);el.querySelector('#o2-content').textContent=ca.toFixed(2);
 const points=Array.from({length:121},(_,i)=>`${38+i*296/120},${170-saturation(i,p)*150}`).join(' ');
 el.querySelector('#o2-curve').setAttribute('d','M'+points.replaceAll(' ',' L'));
 el.querySelector('#o2-dot').setAttribute('cx',38+x*296/120);el.querySelector('#o2-dot').setAttribute('cy',170-s*150);
 el.querySelector('#o2-comment').textContent=t('При неизменном PO₂ повышение P50 уменьшает насыщение; при неизменной сатурации снижение Hb уменьшает содержание O₂.','At constant PO₂, higher P50 lowers saturation; at constant saturation, lower Hb reduces oxygen content.','PO₂ тұрақты болса, P50 артуы қанығуды төмендетеді; қанығу тұрақты болса, Hb азаюы оттегі мөлшерін төмендетеді.');}
 for(const input of [po,p50,hb])input.addEventListener('input',update);update();
 }
}
