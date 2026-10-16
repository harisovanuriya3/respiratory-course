// V87: shunt mixing laboratory. Synthetic instructional assumptions only.
const m=location.pathname.match(/^\/modules\/13\/([a-z-]+)\/?$/);
if(m&&['theory','interactive','practice','cases'].includes(m[1])){
 const lang=new URLSearchParams(location.search).get('lang');const l=lang==='EN'?1:lang==='KZ'?2:0;
 const t=(ru,en,kz)=>[ru,en,kz][l];
 const container=document.getElementById('main');
 if(container){
 const section=document.createElement('section');section.className='guided-v38';
 section.innerHTML=`<h3>${t('Лаборатория: смешивание крови при внутрилёгочном шунте','Laboratory: oxygen-content mixing in pulmonary shunt','Зертхана: өкпелік шунт кезіндегі қандағы оттегінің араласуы')}</h3>
 <p>${t('В учебной модели кровь из вентилируемых капилляров смешивается с шунтированной венозной кровью. Смешиваются содержания O₂, а не парциальные давления.','In this educational model, oxygenated end-capillary blood mixes with shunted venous blood. Oxygen contents, not partial pressures, are mixed.','Бұл оқу үлгісінде оттегіленген капиллярлық қан шунтталған веналық қанмен араласады. Парциалдық қысым емес, O₂ мөлшері араласады.')}</p>
 <label>${t('Доля шунта','Shunt fraction','Шунт үлесі')}: <output id='shunt-percent'>10%</output><input id='shunt-range' type='range' min='0' max='50' step='5' value='10'></label>
 <label>${t('Гемоглобин','Hemoglobin','Гемоглобин')}: <output id='shunt-hb'>15</output> g/dL<input id='shunt-hb-range' type='range' min='7' max='18' step='1' value='15'></label>
 <p><strong>${t('Смешанное артериальное содержание кислорода','Mixed arterial oxygen content','Аралас артериялық қандағы оттегі мөлшері')}: <output id='shunt-cao2'></output> mL O₂/dL</strong></p>
 <div style='height:20px;background:#f1f5f9;border-radius:8px;overflow:hidden' role='img' aria-label='Oxygen content relative to fully oxygenated reference'><div id='shunt-bar' style='height:100%;background:#0d9488;width:100%'></div></div>
 <p id='shunt-interpret'></p>
 <details><summary>${t('Контрольная задача и решение','Worked challenge','Бақылау есебі және шешімі')}</summary><p>${t('При Hb=15 г/дл и шунте 20% найдите CaO₂, если сатурация крови из вентилируемых капилляров 98%, венозной — 75%, PaO₂ условно 100 и PvO₂ 40 мм рт. ст.','At Hb=15 g/dL and 20% shunt, find CaO₂ when end-capillary saturation is 98%, venous saturation 75%, and assumed PO₂ values are 100 and 40 mmHg.','Hb=15 г/дл және шунт 20% болса, капиллярлық сатурация 98%, веналық 75%, шартты PO₂ 100 және 40 мм сын.бағ. кезінде CaO₂ есептеңіз.')}</p><p>${t('Ответ: CcO₂≈19,998; CvO₂≈15,195; CaO₂=0,8×19,998+0,2×15,195≈19,04 мл/дл. PaO₂ нельзя получить простым усреднением 100 и 40.','Answer: CcO₂≈19.998; CvO₂≈15.195; CaO₂=0.8×19.998+0.2×15.195≈19.04 mL/dL. PaO₂ cannot be obtained by averaging 100 and 40.','Жауабы: CcO₂≈19,998; CvO₂≈15,195; CaO₂=0,8×19,998+0,2×15,195≈19,04 мл/дл. PaO₂ мәнін 100 мен 40-ты жай орташалау арқылы табуға болмайды.')}</p></details>
 <small>${t('Ограничения: фиксированные сатурации и PO₂; не учитываются распределение V/Q, кривая диссоциации, pH, температура и изменение смешанной венозной крови. Не использовать для диагностики.','Limits: fixed saturations and PO₂; ignores V/Q distribution, dissociation curve, pH, temperature and changing mixed-venous blood. Not for diagnosis.','Шектеулер: сатурация мен PO₂ тұрақты; V/Q таралуы, диссоциация қисығы, pH, температура және веналық қан өзгерістері ескерілмейді. Диагнозға қолданылмайды.')}</small>`;
 const p=container.querySelector('.pagination');if(p)container.insertBefore(section,p);else container.append(section);
 const s=section.querySelector('#shunt-range'),h=section.querySelector('#shunt-hb-range');
 function update(){const f=Number(s.value)/100,hb=Number(h.value),cc=1.34*hb*.98+.003*100,cv=1.34*hb*.75+.003*40,ca=(1-f)*cc+f*cv;
 section.querySelector('#shunt-percent').textContent=s.value+'%';section.querySelector('#shunt-hb').textContent=h.value;
 section.querySelector('#shunt-cao2').textContent=ca.toFixed(2);
 section.querySelector('#shunt-bar').style.width=(ca/cc*100).toFixed(1)+'%';
 section.querySelector('#shunt-interpret').textContent=t('При увеличении шунта содержание O₂ снижается: '+ca.toFixed(2)+' мл/дл. Это не расчёт PaO₂.','Increasing shunt reduces O₂ content to '+ca.toFixed(2)+' mL/dL; this is not PaO₂.','Шунт артқанда O₂ мөлшері '+ca.toFixed(2)+' мл/дл дейін төмендейді; бұл PaO₂ емес.');}
 s.addEventListener('input',update);h.addEventListener('input',update);update();
 }
}
