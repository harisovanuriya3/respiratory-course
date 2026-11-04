const t=(L,ru,en,kz)=>[ru,en,kz][L];
export function oxygenDeliveryStation(mid,section,L,lang){
 if(mid!==14||!['theory','practice','interactive','media'].includes(section))return '';
 return '<section class="lesson-card oxygen-delivery-station" data-oxygen-station><h3>'+t(L,'Интерактивная лаборатория: содержание и доставка кислорода','Interactive laboratory: oxygen content and delivery','Интерактивті зертхана: оттегі мөлшері мен жеткізілуі')+'</h3>'+
 '<p>'+t(L,'Измените гемоглобин, сатурацию, PaO₂ и сердечный выброс. Рассчитайте содержание O₂ в артериальной крови и глобальную доставку O₂.','Adjust hemoglobin, saturation, PaO₂ and cardiac output. Calculate arterial oxygen content and global oxygen delivery.','Гемоглобинді, сатурацияны, PaO₂ және жүректің минуттық көлемін өзгертіңіз. Артериялық қандағы оттегі мөлшерін және жалпы жеткізілуін есептеңіз.')+'</p>'+
 '<div class="vent-controls">'+
 '<label>Hb (g/dL) <output data-hb-value>15</output><input data-hb type="range" min="5" max="20" step="0.5" value="15"></label>'+
 '<label>SaO₂ (%) <output data-sat-value>98</output><input data-sat type="range" min="60" max="100" step="1" value="98"></label>'+
 '<label>PaO₂ (mmHg) <output data-pao-value>100</output><input data-pao type="range" min="40" max="150" step="5" value="100"></label>'+
 '<label>CO (L/min) <output data-co-value>5</output><input data-co type="range" min="2" max="12" step="0.5" value="5"></label></div>'+
 '<div class="vent-results" aria-live="polite"><p>CaO₂ = <strong data-cao>20.00</strong> mL O₂/dL</p><p>DO₂ = <strong data-do>1000</strong> mL O₂/min</p><div class="vent-bar" role="img" aria-label="Hemoglobin-bound and dissolved oxygen fractions"><span data-bound-bar style="width:98%"></span><span data-dissolved-bar style="width:2%"></span></div><p data-bound-fraction></p></div>'+
 '<p>CaO₂ = 1.34 × Hb × (SaO₂ / 100) + 0.003 × PaO₂; DO₂ = CO × CaO₂ × 10.</p>'+
 '<p>'+t(L,'Модель предполагает независимые значения PaO₂ и SaO₂, хотя в организме они связаны кривой диссоциации гемоглобина. Результат не предназначен для клинических решений.','This teaching model allows PaO₂ and SaO₂ to vary independently, although physiological values are linked by the oxyhemoglobin dissociation curve. Do not use for clinical decisions.','Оқу моделі PaO₂ мен SaO₂ тәуелсіз өзгертуге мүмкіндік береді, бірақ ағзада олар гемоглобин диссоциациясы қисығымен байланысты. Нәтижені клиникалық шешім үшін қолданбаңыз.')+'</p>'+
 '<p><a href="/modules/14/theory?lang='+lang+'">'+t(L,'Теория модуля 14','Module 14 theory','14-модуль теориясы')+'</a> · <a href="/media-library?lang='+lang+'">'+t(L,'Медиатека','Media library','Медиатека')+'</a></p></section>';
}
export function oxygenDeliveryValues(hb,sat,pao,co){
 const bound=1.34*hb*sat/100,dissolved=.003*pao;
 return {cao:bound+dissolved,do2:co*(bound+dissolved)*10,boundFraction:100*bound/(bound+dissolved)};
}
export function initOxygenDeliveryStations(){
 document.querySelectorAll('[data-oxygen-station]').forEach(root=>{
  if(root.dataset.initialized)return;root.dataset.initialized='yes';
  const names=['hb','sat','pao','co'],els=names.map(n=>root.querySelector('[data-'+n+']'));
  const update=()=>{
   const [hb,sat,pao,co]=els.map(el=>Number(el.value));
   const out=oxygenDeliveryValues(hb,sat,pao,co);
   names.forEach((name,i)=>root.querySelector('[data-'+name+'-value]').textContent=String(els[i].value));
   root.querySelector('[data-cao]').textContent=out.cao.toFixed(2);
   root.querySelector('[data-do]').textContent=out.do2.toFixed(0);
   root.querySelector('[data-bound-bar]').style.width=out.boundFraction.toFixed(2)+'%';
   root.querySelector('[data-dissolved-bar]').style.width=(100-out.boundFraction).toFixed(2)+'%';
   root.querySelector('[data-bound-fraction]').textContent=out.boundFraction.toFixed(1)+'% '+ 'Hb-bound O₂';
  };
  els.forEach(el=>el.addEventListener('input',update));update();
 });
}
