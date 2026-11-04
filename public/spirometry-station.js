const tr=(L,ru,en,kz)=>[ru,en,kz][L];
export function spirometryValues(fev1,fvc){
 return {ratio:fev1/fvc,percentage:100*fev1/fvc};
}
export function spirometryStation(mid,section,L,lang){
 if(mid!==24||!['theory','practice','interactive','media'].includes(section))return '';
 return '<section class="lesson-card alveolar-ventilation-station" data-spirometry-station data-language-index="'+L+'"><h3>'+tr(L,'Интерактивная лаборатория: анализ спирометрии','Interactive laboratory: spirometry interpretation','Интерактивті зертхана: спирометрияны талдау')+'</h3>'+
 '<p>'+tr(L,'Изменяйте FEV₁ и FVC и наблюдайте их отношение. Для интерпретации обструкции необходимо сравнение с нижней границей нормы, а не только фиксированным порогом.','Adjust FEV₁ and FVC and observe their ratio. Interpreting obstruction requires comparison with the lower limit of normal, not merely a fixed threshold.','FEV₁ және FVC мәндерін өзгертіп, олардың қатынасын бақылаңыз. Обструкцияны түсіндіру үшін тек тұрақты шек емес, қалыптың төменгі шегі қажет.')+'</p>'+
 '<div class="vent-controls"><label>FVC (L) <output data-fvc-value>4.0</output><input data-fvc type="range" min="1" max="7" step="0.1" value="4"></label>'+
 '<label>FEV₁ / FVC (%) <output data-target-value>80</output><input data-target type="range" min="30" max="100" step="1" value="80"></label></div>'+
 '<div class="vent-results" aria-live="polite"><p>FEV₁ = <strong data-fev1>3.20</strong> L · FVC = <strong data-fvc-result>4.00</strong> L</p><p>FEV₁/FVC = <strong data-ratio>80.0</strong>%</p><div class="vent-bar" role="img" aria-label="Fraction of FVC expired in the first second"><span data-first-second style="width:80%"></span><span data-remainder style="width:20%"></span></div></div>'+
 '<p>'+tr(L,'Показатели учебные: реальные FEV₁ и FVC зависят от качества манёвра, возраста, роста, пола и референсных уравнений. Низкая FVC сама по себе не доказывает рестрикцию; для неё требуется оценка TLC.','Teaching values only: real FEV₁ and FVC depend on maneuver quality, age, height, sex and reference equations. Low FVC alone does not establish restriction; TLC assessment is required.','Оқу мәндері: нақты FEV₁ және FVC маневр сапасына, жасқа, бойға, жынысқа және референстік теңдеулерге тәуелді. FVC төмендеуі рестрикцияны жеке өзі дәлелдемейді; TLC бағалау қажет.')+'</p>'+
 '<p><a href="/modules/24/theory?lang='+lang+'">'+tr(L,'Теория','Theory','Теория')+'</a> · <a href="/media-library?lang='+lang+'">'+tr(L,'Медиатека','Media library','Медиатека')+'</a></p></section>';
}
export function initSpirometryStations(){
 document.querySelectorAll('[data-spirometry-station]').forEach(root=>{
  if(root.dataset.initialized)return;root.dataset.initialized='yes';
  const fvc=root.querySelector('[data-fvc]'),target=root.querySelector('[data-target]');
  const update=()=>{
   const capacity=Number(fvc.value),fraction=Number(target.value)/100,fev1=capacity*fraction;
   const v=spirometryValues(fev1,capacity);
   root.querySelector('[data-fvc-value]').textContent=capacity.toFixed(1);
   root.querySelector('[data-target-value]').textContent=String(target.value);
   root.querySelector('[data-fev1]').textContent=fev1.toFixed(2);
   root.querySelector('[data-fvc-result]').textContent=capacity.toFixed(2);
   root.querySelector('[data-ratio]').textContent=v.percentage.toFixed(1);
   root.querySelector('[data-first-second]').style.width=v.percentage.toFixed(1)+'%';
   root.querySelector('[data-remainder]').style.width=(100-v.percentage).toFixed(1)+'%';
  };
  fvc.addEventListener('input',update);target.addEventListener('input',update);update();
 });
}
