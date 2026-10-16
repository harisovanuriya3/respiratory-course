// V89: academic teaching model of bicarbonate equilibrium and CO2 carriage.
const m=location.pathname.match(/^\/modules\/15\/([a-z-]+)\/?$/);
if(m && ['theory','interactive','practice','cases'].includes(m[1])){
  const q=new URLSearchParams(location.search);const lang=q.get('lang')==='EN'?'EN':q.get('lang')==='KZ'?'KZ':'RU';
  const tr=(ru,en,kz)=>({RU:ru,EN:en,KZ:kz})[lang];
  const main=document.getElementById('main');
  if(main){
    const section=document.createElement('section');section.className='guided-v38';
    section.innerHTML=`<h3>${tr('Лаборатория: перенос CO₂ и бикарбонатный буфер','Laboratory: CO₂ transport and bicarbonate buffer','Зертхана: CO₂ тасымалы және бикарбонат буфері')}</h3>
    <p>${tr('Сопоставьте PaCO₂, концентрацию HCO₃⁻ и расчётный pH. Изучите роль карбоангидразы, хлоридного сдвига и эффекта Холдейна.','Compare PaCO₂, bicarbonate concentration and calculated pH. Examine carbonic anhydrase, chloride shift and the Haldane effect.','PaCO₂, HCO₃⁻ концентрациясы және есептелген pH мәнін салыстырыңыз. Карбоангидраза, хлоридтік ығысу және Холдейн әсерін зерттеңіз.')}</p>
    <div class='v89-controls'>
      <label>PaCO₂: <output id='v89-paco2'>40</output> mmHg <input id='v89-co2' type='range' min='20' max='80' step='2' value='40'></label>
      <label>HCO₃⁻: <output id='v89-hco3'>24</output> mmol/L <input id='v89-h' type='range' min='10' max='40' step='1' value='24'></label>
    </div>
    <svg viewBox='0 0 360 145' width='100%' role='img' aria-label='Bicarbonate buffer equilibrium and erythrocyte CO2 transport' style='max-width:650px;background:#f8fafc;border-radius:12px'>
      <rect x='8' y='12' width='156' height='116' rx='15' fill='#fee2e2' stroke='#b91c1c'/>
      <rect x='198' y='12' width='154' height='116' rx='15' fill='#dbeafe' stroke='#2563eb'/>
      <text x='86' y='36' font-size='12' text-anchor='middle' fill='#7f1d1d'>CO₂ + H₂O</text>
      <text x='86' y='57' font-size='11' text-anchor='middle' fill='#7f1d1d'>CA ⇄ H⁺ + HCO₃⁻</text>
      <text x='86' y='79' font-size='11' text-anchor='middle' fill='#7f1d1d'>${tr('Эритроцит','Erythrocyte','Эритроцит')}</text>
      <text x='275' y='44' font-size='12' text-anchor='middle' fill='#1e40af'>HCO₃⁻ ⇄ Cl⁻</text>
      <text x='275' y='66' font-size='11' text-anchor='middle' fill='#1e40af'>${tr('Плазма','Plasma','Плазма')}</text>
      <path d='M164 72 H196' stroke='#0f766e' stroke-width='3'/><path d='M187 65 L197 72 L187 79' fill='none' stroke='#0f766e' stroke-width='2'/>
      <text x='180' y='111' font-size='10' text-anchor='middle' fill='#334155'>AE1</text>
    </svg>
    <p><strong>pH ≈ <output id='v89-ph'>7.40</output></strong> <span id='v89-status' aria-live='polite'></span></p>
    <details><summary>${tr('Физиологическое объяснение и ограничения','Physiological explanation and limitations','Физиологиялық түсіндіру және шектеулер')}</summary>
      <p>pH = 6.1 + log₁₀([HCO₃⁻]/(0.03 × PaCO₂))</p>
      <p>${tr('При постоянном HCO₃⁻ увеличение PaCO₂ уменьшает pH. При постоянном PaCO₂ увеличение HCO₃⁻ повышает pH. Это расчёт равновесного состояния при 37 °C, а не динамическая модель почечной компенсации.','At fixed HCO₃⁻, increasing PaCO₂ decreases pH; at fixed PaCO₂, increasing bicarbonate increases pH. This is an equilibrium estimate at 37 °C, not a dynamic model of renal compensation.','HCO₃⁻ тұрақты болса, PaCO₂ жоғарылауы pH төмендетеді; PaCO₂ тұрақты болса, бикарбонаттың артуы pH жоғарылатады. Бұл 37 °C жағдайындағы тепе-теңдік есебі, бүйректік компенсацияның динамикалық моделі емес.')}</p>
      <p>${tr('В тканях CO₂ поступает в эритроциты, карбоангидраза ускоряет его гидратацию, HCO₃⁻ обменивается на Cl⁻ через AE1. В лёгких реакции идут в обратном направлении. Дезоксигемоглобин связывает H⁺ и CO₂ эффективнее оксигемоглобина: эффект Холдейна облегчает захват CO₂ в тканях и его выделение в лёгких. Полное содержание CO₂ не вычисляется по одному PaCO₂.','In tissues, CO₂ enters red cells, carbonic anhydrase accelerates hydration and HCO₃⁻ exchanges with Cl⁻ through AE1. Reactions reverse in the lungs. Deoxygenated hemoglobin binds H⁺ and CO₂ more readily than oxygenated hemoglobin: the Haldane effect promotes CO₂ loading in tissues and unloading in lungs. Total CO₂ content cannot be inferred from PaCO₂ alone.','Тіндерде CO₂ эритроцитке өтеді, карбоангидраза гидратацияны жылдамдатады, HCO₃⁻ AE1 арқылы Cl⁻ ионымен алмасады. Өкпеде реакциялар кері жүреді. Дезоксигемоглобин H⁺ пен CO₂-ні оксигемоглобинге қарағанда жақсырақ байланыстырады: Холдейн әсері тінде CO₂ жиналуына, өкпеде бөлінуіне көмектеседі. CO₂-нің жалпы мөлшерін тек PaCO₂ арқылы есептеу мүмкін емес.')}</p>
    </details>
    <details><summary>${tr('Задание для студента','Student exercise','Студентке тапсырма')}</summary>
      <p>${tr('При PaCO₂ = 60 мм рт. ст. и HCO₃⁻ = 24 ммоль/л рассчитайте pH. Почему нельзя по этим двум значениям определить длительность нарушения?','At PaCO₂ = 60 mmHg and HCO₃⁻ = 24 mmol/L, calculate pH. Why can these values alone not establish the duration of the disturbance?','PaCO₂ = 60 мм сын. бағ. және HCO₃⁻ = 24 ммоль/л кезінде pH есептеңіз. Неліктен осы екі мән бойынша бұзылыстың ұзақтығын анықтау мүмкін емес?')}</p>
      <p>${tr('Ответ: pH ≈ 7,22. Для оценки хронического процесса нужны клинический контекст, динамика и компенсация; однократное измерение не определяет длительность.','Answer: pH ≈ 7.22. Chronicity requires clinical context, trends and compensation; a single measurement cannot establish duration.','Жауап: pH ≈ 7,22. Созылмалы үрдісті бағалау үшін клиникалық деректер, динамика және компенсация қажет; бір өлшем ұзақтығын анықтамайды.')}</p>
    </details>`;
    const pagination=main.querySelector('.pagination');if(pagination)main.insertBefore(section,pagination);else main.append(section);
    const co2=section.querySelector('#v89-co2'),h=section.querySelector('#v89-h');
    const update=()=>{const p=Number(co2.value),b=Number(h.value),ph=6.1+Math.log10(b/(0.03*p));section.querySelector('#v89-paco2').textContent=p;section.querySelector('#v89-hco3').textContent=b;section.querySelector('#v89-ph').textContent=ph.toFixed(2);section.querySelector('#v89-status').textContent=ph<7.35?tr('— ацидемия','— acidemia','— ацидемия'):ph>7.45?tr('— алкалемия','— alkalemia','— алкалемия'):tr('— диапазон нормального pH','— normal pH range','— қалыпты pH аралығы');};
    co2.addEventListener('input',update);h.addEventListener('input',update);update();
  }
}
