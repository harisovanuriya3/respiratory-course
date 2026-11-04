const tr=(L,ru,en,kz)=>[ru,en,kz][L];
export function complianceValues(deltaVolume,deltaPressure){
 if(deltaVolume<0||deltaPressure<=0)throw new RangeError('Invalid compliance inputs');
 return {compliance:deltaVolume/deltaPressure};
}
export function complianceStation(mid,section,L,lang){
 if(mid!==5||!['theory','practice','interactive','media'].includes(section))return '';
 return '<section class="lesson-card alveolar-ventilation-station" data-compliance-station data-language-index="'+L+'"><h3>'+tr(L,'Виртуальная лаборатория: растяжимость лёгких','Virtual laboratory: lung compliance','Виртуалды зертхана: өкпе созылғыштығы')+'</h3><p>'+tr(L,'Изменяйте прирост объёма и транспульмонального давления. Рассчитайте статическую растяжимость для выбранного участка кривой давление–объём.','Adjust volume and transpulmonary pressure changes. Calculate static compliance over the selected pressure–volume segment.','Көлем мен транспульмоналдық қысым өзгерістерін реттеңіз. Қысым–көлем қисығының таңдалған бөлігі үшін статикалық созылғыштықты есептеңіз.')+'</p>'+
 '<div class="vent-controls"><label>ΔV (mL) <output data-volume-out>400</output><input type="range" data-volume min="100" max="1000" step="50" value="400"></label><label>ΔP (cm H₂O) <output data-pressure-out>4</output><input type="range" data-pressure min="1" max="15" step="1" value="4"></label></div>'+
 '<div class="vent-results" aria-live="polite"><p>C = <strong data-compliance>0.100</strong> L/cm H₂O</p><div class="vent-bar" role="img" aria-label="Relative compliance"><span data-compliance-bar style="width:50%"></span></div></div>'+
 '<p>C = ΔV / ΔP.</p><p>'+tr(L,'Растяжимость не постоянна на всей кривой давление–объём; на неё влияют сурфактант, рекрутирование альвеол и свойства грудной стенки. Модель не рассчитывает клиническую механику дыхания.','Compliance varies along the pressure–volume curve and is affected by surfactant, alveolar recruitment and chest-wall mechanics. This model does not provide clinical respiratory mechanics.','Созылғыштық қысым–көлем қисығы бойында тұрақты емес; оған сурфактант, альвеолалардың ашылуы және кеуде қабырғасының қасиеттері әсер етеді. Модель клиникалық тыныс механикасын есептемейді.')+'</p>'+
 '<p><a href="/modules/5/theory?lang='+lang+'">'+tr(L,'Теория','Theory','Теория')+'</a> · <a href="/media-library?lang='+lang+'">'+tr(L,'Медиатека','Media library','Медиатека')+'</a></p></section>';
}
export function initComplianceStations(){
 document.querySelectorAll('[data-compliance-station]').forEach(root=>{
  if(root.dataset.initialized)return;root.dataset.initialized='yes';
  const volume=root.querySelector('[data-volume]'),pressure=root.querySelector('[data-pressure]');
  const update=()=>{
   const v=Number(volume.value),p=Number(pressure.value),result=complianceValues(v/1000,p);
   root.querySelector('[data-volume-out]').textContent=String(v);
   root.querySelector('[data-pressure-out]').textContent=String(p);
   root.querySelector('[data-compliance]').textContent=result.compliance.toFixed(3);
   root.querySelector('[data-compliance-bar]').style.width=Math.min(100,result.compliance*500).toFixed(1)+'%';
  };
  volume.addEventListener('input',update);pressure.addEventListener('input',update);update();
 });
}
