const t=(L,ru,en,kz)=>[ru,en,kz][L];
export function alveolarGasValues(pb,fio2,paco2,rq){
 const pio2=(pb-47)*fio2;
 return {pio2,pao2:pio2-paco2/rq};
}
export function alveolarGasStation(mid,section,L,lang){
 if(mid!==10||!['theory','practice','interactive','media'].includes(section))return '';
 return '<section class="lesson-card alveolar-ventilation-station" data-alveolar-gas-station><h3>'+t(L,'Виртуальная лаборатория: альвеолярное уравнение кислорода','Virtual laboratory: alveolar oxygen equation','Виртуалды зертхана: альвеолалық оттегі теңдеуі')+'</h3><p>'+t(L,'Изменяйте барометрическое давление, FiO₂, PaCO₂ и дыхательный коэффициент. Исследуйте изменение PIO₂ и PAO₂.','Change barometric pressure, FiO₂, PaCO₂ and respiratory exchange ratio. Explore PIO₂ and PAO₂.','Барометрлік қысымды, FiO₂, PaCO₂ және тыныстық коэффициентті өзгертіңіз. PIO₂ мен PAO₂ өзгерісін зерттеңіз.')+'</p>'+
 '<div class="vent-controls">'+
 '<label>PB (mmHg) <output data-pb-value>760</output><input type="range" data-pb min="400" max="800" step="10" value="760"></label>'+
 '<label>FiO₂ (%) <output data-fi-value>21</output><input type="range" data-fi min="21" max="60" step="1" value="21"></label>'+
 '<label>PaCO₂ (mmHg) <output data-co2-value>40</output><input type="range" data-co2 min="20" max="80" step="2" value="40"></label>'+
 '<label>R <output data-r-value>0.8</output><input type="range" data-r min="0.7" max="1" step="0.05" value="0.8"></label></div>'+
 '<div class="vent-results" aria-live="polite"><p>PIO₂ = <strong data-pio>149.7</strong> mmHg · PAO₂ ≈ <strong data-pao>99.7</strong> mmHg</p><p data-gas-note></p></div>'+
 '<p>PIO₂ = FiO₂ × (PB − 47); PAO₂ ≈ PIO₂ − PaCO₂ / R.</p>'+
 '<p>'+t(L,'Учебное приближение для увлажнённого газа при температуре тела. PaCO₂ используется как приближение альвеолярного PCO₂; модель не рассчитывает PaO₂ и не предназначена для назначения кислорода.','Teaching approximation for humidified gas at body temperature. PaCO₂ approximates alveolar PCO₂; this model does not calculate arterial PaO₂ or guide oxygen therapy.','Дене температурасындағы ылғалданған газға арналған оқу жуықтауы. PaCO₂ альвеолалық PCO₂ орнына жуық түрде алынады; модель артериялық PaO₂ есептемейді және оттегі емін тағайындауға арналмаған.')+'</p>'+
 '<p><a href="/modules/10/theory?lang='+lang+'">'+t(L,'Теория модуля 10','Module 10 theory','10-модуль теориясы')+'</a> · <a href="/media-library?lang='+lang+'">'+t(L,'Медиатека','Media library','Медиатека')+'</a></p></section>';
}
export function initAlveolarGasStations(){
 document.querySelectorAll('[data-alveolar-gas-station]').forEach(root=>{
  if(root.dataset.initialized)return;root.dataset.initialized='yes';
  const names=['pb','fi','co2','r'],els=names.map(n=>root.querySelector('[data-'+n+']'));
  const update=()=>{
   const [pb,fi,co2,r]=els.map(e=>Number(e.value));
   names.forEach((name,i)=>root.querySelector('[data-'+name+'-value]').textContent=els[i].value);
   const values=alveolarGasValues(pb,fi/100,co2,r);
   root.querySelector('[data-pio]').textContent=values.pio2.toFixed(1);
   root.querySelector('[data-pao]').textContent=values.pao2.toFixed(1);
   root.querySelector('[data-gas-note]').textContent=values.pao2<=0?t(0,'Значение вне области применимости простой физиологической модели.','Value outside the useful range of this simplified physiological model.','Қарапайым физиологиялық модельдің қолданылу шегінен тыс мән.')[L]:'';
  };
  els.forEach(e=>e.addEventListener('input',update));update();
 });
}
