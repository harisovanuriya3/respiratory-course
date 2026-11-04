const t=(L,ru,en,kz)=>[ru,en,kz][L];
export function exerciseGasExchange(vo2,vco2){
 if(vo2<=0||vco2<0)throw new RangeError('Invalid gas exchange');
 return {rer:vco2/vo2};
}
export function exerciseGasStation(mid,section,L,lang){
 if(mid!==20||!['theory','practice','interactive','media'].includes(section))return '';
 return '<section class="lesson-card alveolar-ventilation-station" data-exercise-gas data-language-index="'+L+'"><h3>'+t(L,'Виртуальная лаборатория: газообмен при нагрузке','Virtual laboratory: gas exchange during exercise','Виртуалды зертхана: жүктемедегі газ алмасу')+'</h3><p>'+t(L,'Изменяйте потребление кислорода и выделение CO₂. Рассчитайте дыхательный коэффициент газообмена RER.','Adjust oxygen uptake and CO₂ output. Calculate respiratory exchange ratio (RER).','Оттегінің тұтынылуы мен CO₂ бөлінуін өзгертіп, тыныстық газ алмасу коэффициентін (RER) есептеңіз.')+'</p><div class="vent-controls"><label>VO₂ (L/min) <output data-vo2-out>1.5</output><input data-vo2 type="range" min="0.2" max="4" step="0.1" value="1.5"></label><label>VCO₂ (L/min) <output data-vco2-out>1.2</output><input data-vco2 type="range" min="0.1" max="5" step="0.1" value="1.2"></label></div><div class="vent-results" aria-live="polite"><p>RER = <strong data-rer>0.80</strong></p><div class="vent-bar" role="img" aria-label="Respiratory exchange ratio"><span data-rer-bar style="width:40%"></span></div></div><p>RER = VCO₂ / VO₂.</p><p>'+t(L,'RER измеряется по газообмену у дыхательных путей и при нестационарной нагрузке может отличаться от клеточного RQ. Эта модель не измеряет анаэробный порог или диагноз.','RER is measured at the airways and may differ from cellular RQ during non-steady-state exercise. This model does not measure anaerobic threshold or establish a diagnosis.','RER тыныс жолдарындағы газ алмасумен өлшенеді және тұрақсыз жүктемеде жасушалық RQ-дан өзгеше болуы мүмкін. Модель анаэробтық шекті өлшемейді және диагноз қоймайды.')+'</p><p><a href="/modules/20/theory?lang='+lang+'">'+t(L,'Теория','Theory','Теория')+'</a> · <a href="/media-library?lang='+lang+'">'+t(L,'Медиатека','Media library','Медиатека')+'</a></p></section>';
}
export function initExerciseGasStations(){
 document.querySelectorAll('[data-exercise-gas]').forEach(root=>{
  if(root.dataset.initialized)return;root.dataset.initialized='yes';
  const vo2=root.querySelector('[data-vo2]'),vco2=root.querySelector('[data-vco2]');
  const update=()=>{
   const a=Number(vo2.value),b=Number(vco2.value),v=exerciseGasExchange(a,b);
   root.querySelector('[data-vo2-out]').textContent=a.toFixed(1);
   root.querySelector('[data-vco2-out]').textContent=b.toFixed(1);
   root.querySelector('[data-rer]').textContent=v.rer.toFixed(2);
   root.querySelector('[data-rer-bar]').style.width=Math.min(100,v.rer*50).toFixed(1)+'%';
  };
  vo2.addEventListener('input',update);vco2.addEventListener('input',update);update();
 });
}
