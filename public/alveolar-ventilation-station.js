const tr=(L,ru,en,kz)=>[ru,en,kz][L];
export function alveolarVentilationStation(mid,section,L,lang){
 if(mid!==8||!['theory','interactive','practice','media'].includes(section))return '';
 const id='alveolar-ventilation-station';
 return '<section class="lesson-card alveolar-ventilation-station" id="'+id+'" data-alveolar-station>'+
 '<h3>'+tr(L,'Интерактивная модель альвеолярной вентиляции','Interactive alveolar ventilation model','Альвеолалық желдетілудің интерактивті моделі')+'</h3>'+
 '<p>'+tr(L,'Изменяйте дыхательный объём, частоту и анатомическое мёртвое пространство. Сравните общую и эффективную альвеолярную вентиляцию.','Change tidal volume, respiratory frequency and anatomical dead space. Compare total and effective alveolar ventilation.','Тыныс көлемін, жиілігін және анатомиялық өлі кеңістікті өзгертіңіз. Жалпы және альвеолалық желдетілуді салыстырыңыз.')+'</p>'+
 '<div class="vent-controls">'+
 '<label>'+tr(L,'Дыхательный объём (мл)','Tidal volume (mL)','Тыныс көлемі (мл)')+' <output data-vt-value>500</output><input type="range" data-vt min="200" max="1000" step="25" value="500"></label>'+
 '<label>'+tr(L,'Частота (/мин)','Frequency (/min)','Жиілік (/мин)')+' <output data-f-value>12</output><input type="range" data-f min="6" max="35" step="1" value="12"></label>'+
 '<label>'+tr(L,'Мёртвое пространство (мл)','Dead space (mL)','Өлі кеңістік (мл)')+' <output data-vd-value>150</output><input type="range" data-vd min="50" max="250" step="25" value="150"></label></div>'+
 '<div class="vent-results" aria-live="polite"><p>VE = <strong data-ve>6.00</strong> L/min · VA = <strong data-va>4.20</strong> L/min</p><div class="vent-bar" role="img" aria-label="Alveolar and dead-space ventilation fractions"><span data-alveolar-bar style="width:70%"></span><span data-dead-bar style="width:30%"></span></div><p data-fraction></p></div>'+
 '<p>'+tr(L,'Формулы: VE=VT×f; VA=(VT−VD)×f при VT>VD. Модель предполагает постоянное анатомическое мёртвое пространство и не учитывает физиологическое мёртвое пространство или неоднородность V/Q.','Equations: VE=VT×f; VA=(VT−VD)×f for VT>VD. The model assumes fixed anatomical dead space and does not account for physiological dead space or V/Q heterogeneity.','Формулалар: VE=VT×f; VT>VD болса VA=(VT−VD)×f. Модель анатомиялық өлі кеңістік тұрақты деп алады және физиологиялық өлі кеңістікті не V/Q әркелкілігін есептемейді.')+'</p>'+
 '<p><a href="/media-library?lang='+lang+'">'+tr(L,'Каталог медиатеки','Media catalogue','Медиатека каталогы')+'</a> · <a href="/modules/8/theory?lang='+lang+'">'+tr(L,'Исходная теория: модуль 8','Source theory: module 8','Бастапқы теория: 8-модуль')+'</a></p></section>';
}
export function initAlveolarVentilationStations(){
 document.querySelectorAll('[data-alveolar-station]').forEach(root=>{
  if(root.dataset.initialized)return;root.dataset.initialized='yes';
  const vt=root.querySelector('[data-vt]'),f=root.querySelector('[data-f]'),vd=root.querySelector('[data-vd]');
  const update=()=>{
   const v=Number(vt.value),freq=Number(f.value),dead=Number(vd.value);
   const minute=v*freq/1000,alveolar=Math.max(0,v-dead)*freq/1000;
   root.querySelector('[data-vt-value]').textContent=String(v);
   root.querySelector('[data-f-value]').textContent=String(freq);
   root.querySelector('[data-vd-value]').textContent=String(dead);
   root.querySelector('[data-ve]').textContent=minute.toFixed(2);
   root.querySelector('[data-va]').textContent=alveolar.toFixed(2);
   const fraction=Math.max(0,Math.min(100,100*(v-dead)/v));
   root.querySelector('[data-alveolar-bar]').style.width=fraction.toFixed(1)+'%';
   root.querySelector('[data-dead-bar]').style.width=(100-fraction).toFixed(1)+'%';
   root.querySelector('[data-fraction]').textContent='VA / VE = '+fraction.toFixed(1)+'%';
  };
  for(const el of [vt,f,vd])el.addEventListener('input',update);
  update();
 });
}
