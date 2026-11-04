const tr=(L,ru,en,kz)=>[ru,en,kz][L];
export function altitudeOxygenValues(pb,fio2,paco2,rq){
 if(pb<=47||fio2<=0||fio2>1||paco2<0||rq<=0)throw new RangeError('Invalid model parameters');
 const pio2=fio2*(pb-47);
 return {pio2,pao2:pio2-paco2/rq};
}
export function altitudeOxygenStation(mid,section,L,lang){
 if(mid!==21||!['theory','practice','interactive','media'].includes(section))return '';
 return '<section class="lesson-card alveolar-ventilation-station" data-altitude-oxygen data-language-index="'+L+'"><h3>'+tr(L,'Виртуальная лаборатория: кислород на высоте','Virtual laboratory: oxygen at altitude','Виртуалды зертхана: биіктіктегі оттегі')+'</h3><p>'+tr(L,'Сравните атмосферное давление и альвеолярный кислород на разных высотах. Измените PaCO₂, чтобы увидеть влияние вентиляционного ответа.','Compare atmospheric pressure and alveolar oxygen at different altitudes. Adjust PaCO₂ to explore the ventilatory response.','Әртүрлі биіктіктегі атмосфералық қысым мен альвеолалық оттегіні салыстырыңыз. Желдетілу жауабын зерттеу үшін PaCO₂ өзгертіңіз.')+'</p>'+
 '<div class="vent-controls"><label>'+tr(L,'Барометрическое давление','Barometric pressure','Барометрлік қысым')+' PB (mmHg) <output data-pb-out>760</output><input type="range" data-pb min="400" max="800" step="10" value="760"></label><label>PaCO₂ (mmHg) <output data-co2-out>40</output><input type="range" data-co2 min="20" max="60" step="2" value="40"></label></div>'+
 '<div class="vent-results" aria-live="polite"><p>PIO₂ = <strong data-pio>149.7</strong> mmHg · PAO₂ ≈ <strong data-pao>99.7</strong> mmHg</p><p data-note></p></div>'+
 '<p>PIO₂ = 0.21 × (PB − 47); PAO₂ ≈ PIO₂ − PaCO₂/0.8.</p><p>'+tr(L,'Это приближённая модель при FiO₂=0,21, температуре тела и R=0,8. Высота не определяется по PB однозначно, модель не рассчитывает артериальное PaO₂ и не предназначена для выбора лечения или планирования подъёма.','Simplified teaching model with FiO₂=0.21, body temperature and R=0.8. Altitude is not uniquely determined by PB; arterial PaO₂ is not calculated. Do not use for treatment or ascent planning.','FiO₂=0,21, дене температурасы және R=0,8 болатын қарапайым оқу моделі. Биіктік PB бойынша бірмәнді анықталмайды; артериялық PaO₂ есептелмейді. Ем немесе көтерілу жоспары үшін қолданбаңыз.')+'</p><p><a href="/modules/21/theory?lang='+lang+'">'+tr(L,'Теория','Theory','Теория')+'</a> · <a href="/media-library?lang='+lang+'">'+tr(L,'Медиатека','Media library','Медиатека')+'</a></p></section>';
}
export function initAltitudeOxygenStations(){
 document.querySelectorAll('[data-altitude-oxygen]').forEach(root=>{
  if(root.dataset.initialized)return;root.dataset.initialized='yes';
  const L=Number(root.dataset.languageIndex||0),pb=root.querySelector('[data-pb]'),co2=root.querySelector('[data-co2]');
  const update=()=>{
   const pressure=Number(pb.value),paco2=Number(co2.value),v=altitudeOxygenValues(pressure,.21,paco2,.8);
   root.querySelector('[data-pb-out]').textContent=String(pressure);
   root.querySelector('[data-co2-out]').textContent=String(paco2);
   root.querySelector('[data-pio]').textContent=v.pio2.toFixed(1);
   root.querySelector('[data-pao]').textContent=v.pao2.toFixed(1);
   root.querySelector('[data-note]').textContent=v.pao2<=0?['Вне области применимости модели','Outside model range','Модель шегінен тыс'][L]:'';
  };
  pb.addEventListener('input',update);co2.addEventListener('input',update);update();
 });
}
