const tr=(L,ru,en,kz)=>[ru,en,kz][L];
export function pulmonaryResistanceValues(mpap,pawp,co){
 if(co<=0||mpap<pawp||pawp<0)throw new RangeError('Invalid hemodynamic inputs');
 return {gradient:mpap-pawp,pvr:(mpap-pawp)/co};
}
export function pulmonaryResistanceStation(mid,section,L,lang){
 if(mid!==12||!['theory','practice','interactive','media'].includes(section))return '';
 return '<section class="lesson-card alveolar-ventilation-station" data-pvr-station data-language-index="'+L+'"><h3>'+tr(L,'Виртуальная лаборатория: лёгочное сосудистое сопротивление','Virtual laboratory: pulmonary vascular resistance','Виртуалды зертхана: өкпе тамырлық кедергісі')+'</h3>'+
 '<p>'+tr(L,'Изменяйте давление в лёгочной артерии, давление заклинивания и сердечный выброс. Рассчитайте PVR в единицах Вуда.','Adjust pulmonary arterial pressure, wedge pressure and cardiac output. Calculate PVR in Wood units.','Өкпе артериясы қысымын, сыналау қысымын және жүректің минуттық көлемін өзгертіңіз. PVR Вуд бірлігімен есептеңіз.')+'</p>'+
 '<div class="vent-controls"><label>mPAP (mmHg) <output data-mpap-out>20</output><input data-mpap type="range" min="10" max="60" step="1" value="20"></label>'+
 '<label>PAWP (mmHg) <output data-pawp-out>8</output><input data-pawp type="range" min="0" max="25" step="1" value="8"></label>'+
 '<label>CO (L/min) <output data-co-out>5</output><input data-co type="range" min="2" max="12" step="0.5" value="5"></label></div>'+
 '<div class="vent-results" aria-live="polite"><p>PVR = <strong data-pvr>2.40</strong> Wood units</p><p data-pvr-note></p></div>'+
 '<p>PVR = (mPAP − PAWP) / CO.</p>'+
 '<p>'+tr(L,'Это учебная модель гемодинамического расчёта, а не диагностика лёгочной гипертензии. Интерпретация требует клинических данных и достоверных измерений.','This is a teaching hemodynamic calculation, not a pulmonary hypertension diagnostic tool. Interpretation requires clinical context and reliable measurements.','Бұл гемодинамикалық оқу есебі, өкпе гипертензиясын диагностикалау құралы емес. Түсіндіру үшін клиникалық мәліметтер мен сенімді өлшемдер қажет.')+'</p>'+
 '<p><a href="/modules/12/theory?lang='+lang+'">'+tr(L,'Теория','Theory','Теория')+'</a> · <a href="/media-library?lang='+lang+'">'+tr(L,'Медиатека','Media library','Медиатека')+'</a></p></section>';
}
export function initPulmonaryResistanceStations(){
 document.querySelectorAll('[data-pvr-station]').forEach(root=>{
  if(root.dataset.initialized)return;root.dataset.initialized='yes';
  const L=Number(root.dataset.languageIndex||0),names=['mpap','pawp','co'],inputs=names.map(n=>root.querySelector('[data-'+n+']'));
  const update=()=>{
   const [mpap,pawp,co]=inputs.map(x=>Number(x.value));
   names.forEach((n,i)=>root.querySelector('[data-'+n+'-out]').textContent=String(inputs[i].value));
   if(mpap<pawp){
    root.querySelector('[data-pvr]').textContent='—';
    root.querySelector('[data-pvr-note]').textContent=['Проверьте исходные давления: mPAP меньше PAWP.','Check inputs: mPAP is below PAWP.','Бастапқы қысымдарды тексеріңіз: mPAP PAWP-тан төмен.'][L];return;
   }
   root.querySelector('[data-pvr]').textContent=pulmonaryResistanceValues(mpap,pawp,co).pvr.toFixed(2);
   root.querySelector('[data-pvr-note]').textContent='';
  };
  inputs.forEach(el=>el.addEventListener('input',update));update();
 });
}
