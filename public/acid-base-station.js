const tr=(L,ru,en,kz)=>[ru,en,kz][L];
export function acidBaseValues(paco2,hco3){
 if(paco2<=0||hco3<=0)throw new RangeError('Positive physiological inputs required');
 return {ph:6.1+Math.log10(hco3/(0.03*paco2)),ratio:hco3/(0.03*paco2)};
}
export function acidBaseStation(mid,section,L,lang){
 if(mid!==16||!['theory','practice','interactive','media'].includes(section))return '';
 return '<section class="lesson-card alveolar-ventilation-station" data-acid-base-station data-language-index="'+L+'"><h3>'+tr(L,'Виртуальная лаборатория: дыхание и кислотно-основное равновесие','Virtual laboratory: breathing and acid–base balance','Виртуалды зертхана: тыныс алу және қышқыл-негіздік тепе-теңдік')+'</h3>'+
 '<p>'+tr(L,'Изменяйте PaCO₂ и бикарбонат. Наблюдайте расчётный pH по уравнению Хендерсона–Хассельбаха.','Adjust PaCO₂ and bicarbonate. Observe calculated pH using the Henderson–Hasselbalch equation.','PaCO₂ және бикарбонатты өзгертіңіз. Хендерсон–Хассельбалх теңдеуі бойынша есептелген pH бақылаңыз.')+'</p>'+
 '<div class="vent-controls"><label>PaCO₂ (mmHg) <output data-co2-value>40</output><input data-co2 type="range" min="20" max="80" step="2" value="40"></label><label>HCO₃⁻ (mmol/L) <output data-bic-value>24</output><input data-bic type="range" min="8" max="45" step="1" value="24"></label></div>'+
 '<div class="vent-results" aria-live="polite"><p>pH ≈ <strong data-ph>7.40</strong></p><p data-acid-interpretation></p></div>'+
 '<p>pH = 6.1 + log₁₀(HCO₃⁻ / (0.03 × PaCO₂)).</p>'+
 '<p>'+tr(L,'Показатели независимы только в учебной модели. По одному pH нельзя определить первичное нарушение, компенсацию или смешанные расстройства. Не использовать для клинического решения.','Inputs vary independently only in this teaching model. pH alone cannot establish the primary disturbance, compensation or mixed disorders. Not for clinical decisions.','Көрсеткіштер тек оқу моделінде тәуелсіз өзгереді. Бір pH бойынша бастапқы бұзылысты, компенсацияны немесе аралас бұзылыстарды анықтау мүмкін емес. Клиникалық шешім үшін қолданбаңыз.')+'</p>'+
 '<p><a href="/modules/16/theory?lang='+lang+'">'+tr(L,'Теория','Theory','Теория')+'</a> · <a href="/media-library?lang='+lang+'">'+tr(L,'Медиатека','Media library','Медиатека')+'</a> · <a href="/bibliography?lang='+lang+'">'+tr(L,'Литература','References','Әдебиеттер')+'</a></p></section>';
}
export function initAcidBaseStations(){
 document.querySelectorAll('[data-acid-base-station]').forEach(root=>{
  if(root.dataset.initialized)return;root.dataset.initialized='yes';
  const L=Number(root.dataset.languageIndex||0),co2=root.querySelector('[data-co2]'),bic=root.querySelector('[data-bic]');
  const update=()=>{
   const p=Number(co2.value),h=Number(bic.value),v=acidBaseValues(p,h);
   root.querySelector('[data-co2-value]').textContent=String(p);
   root.querySelector('[data-bic-value]').textContent=String(h);
   root.querySelector('[data-ph]').textContent=v.ph.toFixed(2);
   root.querySelector('[data-acid-interpretation]').textContent=v.ph<7.35?['Расчётная ацидемия','Calculated acidemia','Есептелген ацидемия'][L]:v.ph>7.45?['Расчётная алкалемия','Calculated alkalemia','Есептелген алкалемия'][L]:['Расчётный pH в обычном референсном интервале','Calculated pH in usual reference interval','Есептелген pH қалыпты референстік аралықта'][L];
  };
  co2.addEventListener('input',update);bic.addEventListener('input',update);update();
 });
}
