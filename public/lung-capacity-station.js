const tr=(L,ru,en,kz)=>[ru,en,kz][L];
export function lungCapacityValues(vt,irv,erv,rv){
 return {vc:vt+irv+erv,tlc:vt+irv+erv+rv,frc:erv+rv,ic:vt+irv};
}
export function lungCapacityStation(mid,section,L,lang){
 if(mid!==7||!['theory','practice','interactive','media'].includes(section))return '';
 return '<section class="lesson-card alveolar-ventilation-station" data-capacity-station data-language-index="'+L+'"><h3>'+tr(L,'Виртуальная лаборатория: лёгочные объёмы и ёмкости','Virtual laboratory: lung volumes and capacities','Виртуалды зертхана: өкпе көлемдері мен сыйымдылықтары')+'</h3><p>'+tr(L,'Изменяйте четыре базовых объёма и рассчитывайте жизненную, общую и функциональную остаточную ёмкости.','Adjust four component volumes to calculate vital, total and functional residual capacities.','Төрт негізгі көлемді өзгертіп, тіршілік, жалпы және функциялық қалдық сыйымдылықтарды есептеңіз.')+'</p><div class="vent-controls">'+
 [['vt','VT',250,1000,500,25],['irv','IRV',500,4000,2500,100],['erv','ERV',200,2000,1100,50],['rv','RV',300,2500,1200,50]].map(([key,label,min,max,value,step])=>'<label>'+label+' (mL) <output data-'+key+'-value>'+value+'</output><input data-'+key+' type="range" min="'+min+'" max="'+max+'" step="'+step+'" value="'+value+'"></label>').join('')+'</div>'+
 '<div class="vent-results" aria-live="polite"><p>VC = <strong data-vc>4.10</strong> L · TLC = <strong data-tlc>5.30</strong> L</p><p>FRC = <strong data-frc>2.30</strong> L · IC = <strong data-ic>3.00</strong> L</p><div class="vent-bar" role="img" aria-label="Lung volume composition"><span data-vc-bar style="width:77%"></span><span data-rv-bar style="width:23%"></span></div></div>'+
 '<p>VC = IRV + VT + ERV; TLC = VC + RV; FRC = ERV + RV; IC = VT + IRV.</p><p>'+tr(L,'Обычная спирометрия не измеряет RV, FRC и TLC напрямую. Это учебная модель составных объёмов, не диагностический инструмент.','Conventional spirometry cannot directly measure RV, FRC or TLC. This component-volume model is educational, not diagnostic.','Кәдімгі спирометрия RV, FRC және TLC тікелей өлшей алмайды. Бұл көлемдердің оқу моделі, диагностикалық құрал емес.')+'</p><p><a href="/modules/7/theory?lang='+lang+'">'+tr(L,'Теория','Theory','Теория')+'</a> · <a href="/media-library?lang='+lang+'">'+tr(L,'Медиатека','Media library','Медиатека')+'</a></p></section>';
}
export function initLungCapacityStations(){
 document.querySelectorAll('[data-capacity-station]').forEach(root=>{
  if(root.dataset.initialized)return;root.dataset.initialized='yes';
  const keys=['vt','irv','erv','rv'];
  const inputs=keys.map(k=>root.querySelector('[data-'+k+']'));
  const update=()=>{
   const values=inputs.map(e=>Number(e.value));
   const v=lungCapacityValues(...values);
   keys.forEach((k,i)=>root.querySelector('[data-'+k+'-value]').textContent=String(values[i]));
   for(const k of ['vc','tlc','frc','ic'])root.querySelector('[data-'+k+']').textContent=(v[k]/1000).toFixed(2);
   root.querySelector('[data-vc-bar]').style.width=(100*v.vc/v.tlc).toFixed(2)+'%';
   root.querySelector('[data-rv-bar]').style.width=(100*values[3]/v.tlc).toFixed(2)+'%';
  };
  inputs.forEach(e=>e.addEventListener('input',update));update();
 });
}
