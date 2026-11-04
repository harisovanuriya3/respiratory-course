const t=(L,ru,en,kz)=>[ru,en,kz][L];
export function sleepEventIndex(events,sleepMinutes){
 if(!Number.isFinite(events)||events<0||!Number.isFinite(sleepMinutes)||sleepMinutes<=0)throw new RangeError('Invalid sleep inputs');
 return events/(sleepMinutes/60);
}
export function sleepBreathingStation(mid,section,L,lang){
 if(mid!==22||!['theory','practice','interactive','media'].includes(section))return '';
 return '<section class="lesson-card alveolar-ventilation-station" data-sleep-lab data-language-index="'+L+'"><h3>'+t(L,'Лаборатория: индекс апноэ–гипопноэ во сне','Laboratory: sleep apnea–hypopnea index','Зертхана: ұйқыдағы апноэ–гипопноэ индексі')+'</h3>'+
 '<p>'+t(L,'Изменяйте число событий и фактическую длительность сна. Рассчитайте AHI и сравните с количеством событий за время пребывания в постели.','Adjust event count and actual sleep duration. Calculate AHI and distinguish sleep time from time in bed.','Оқиғалар саны мен нақты ұйқы ұзақтығын өзгертіңіз. AHI есептеп, ұйқы уақытын төсекте жатқан уақыттан ажыратыңыз.')+'</p>'+
 '<div class="vent-controls"><label>'+t(L,'Число апноэ и гипопноэ','Apneas and hypopneas','Апноэ және гипопноэ саны')+' <output data-events-out>40</output><input data-events type="range" min="0" max="150" step="5" value="40"></label>'+
 '<label>'+t(L,'Фактический сон (мин)','Actual sleep (min)','Нақты ұйқы (мин)')+' <output data-minutes-out>300</output><input data-minutes type="range" min="60" max="600" step="30" value="300"></label></div>'+
 '<div class="vent-results" aria-live="polite"><p>AHI = <strong data-ahi>8.0</strong> '+t(L,'событий/час','events/hour','оқиға/сағ')+'</p></div>'+
 '<p>AHI = '+t(L,'число апноэ и гипопноэ / длительность сна (ч)','apneas plus hypopneas / sleep time (hours)','апноэ және гипопноэ саны / ұйқы уақыты (сағ)')+'.</p>'+
 '<p>'+t(L,'Модель иллюстрирует только арифметику AHI. Реальная оценка требует валидной регистрации сна, правил подсчёта событий и клинической интерпретации. У детей и взрослых критерии различаются. Не является диагностическим инструментом.','This model illustrates AHI arithmetic only. Real assessment requires validated sleep recording, event-scoring rules and clinical interpretation. Pediatric and adult criteria differ. Not a diagnostic tool.','Бұл модель тек AHI арифметикасын көрсетеді. Нақты бағалау үшін ұйқыны тіркеу, оқиғаларды санау ережелері және клиникалық түсіндіру қажет. Балалар мен ересектер критерийлері әртүрлі. Диагностикалық құрал емес.')+'</p>'+
 '<p><a href="/modules/22/theory?lang='+lang+'">'+t(L,'Теория','Theory','Теория')+'</a> · <a href="/media-library?lang='+lang+'">'+t(L,'Медиатека','Media library','Медиатека')+'</a></p></section>';
}
export function initSleepBreathingStations(){
 document.querySelectorAll('[data-sleep-lab]').forEach(root=>{
  if(root.dataset.initialized)return;root.dataset.initialized='yes';
  const events=root.querySelector('[data-events]'),minutes=root.querySelector('[data-minutes]');
  const update=()=>{
   const n=Number(events.value),m=Number(minutes.value);
   root.querySelector('[data-events-out]').textContent=String(n);
   root.querySelector('[data-minutes-out]').textContent=String(m);
   root.querySelector('[data-ahi]').textContent=sleepEventIndex(n,m).toFixed(1);
  };
  events.addEventListener('input',update);minutes.addEventListener('input',update);update();
 });
}
