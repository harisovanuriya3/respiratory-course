const t=(L,ru,en,kz)=>[ru,en,kz][L];
export function diffusionModelValues(area,thickness,gradient){
 if(area<=0||thickness<=0||gradient<0)throw new RangeError('Invalid inputs');
 return {relativeFlux:area*gradient/thickness};
}
export function diffusionStation(mid,section,L,lang){
 if(mid!==9||!['theory','practice','interactive','media'].includes(section))return '';
 return '<section class="lesson-card alveolar-ventilation-station" data-diffusion-station data-language-index="'+L+'"><h3>'+t(L,'Виртуальная лаборатория: закон Фика','Virtual laboratory: Fick diffusion law','Виртуалды зертхана: Фик диффузия заңы')+'</h3><p>'+t(L,'Изменяйте площадь поверхности, толщину барьера и градиент давления. Сравнивайте относительную скорость диффузии.','Adjust surface area, barrier thickness and pressure gradient. Compare relative diffusion rates.','Бет ауданын, тосқауыл қалыңдығын және қысым градиентін өзгертіп, салыстырмалы диффузия жылдамдығын салыстырыңыз.')+'</p><div class="vent-controls">'+
 '<label>'+t(L,'Относительная площадь','Relative area','Салыстырмалы аудан')+' A <output data-a-out>1.0</output><input type="range" data-a min="0.2" max="2" step="0.1" value="1"></label>'+
 '<label>'+t(L,'Относительная толщина','Relative thickness','Салыстырмалы қалыңдық')+' T <output data-th-out>1.0</output><input type="range" data-th min="0.5" max="3" step="0.1" value="1"></label>'+
 '<label>'+t(L,'Относительный градиент','Relative gradient','Салыстырмалы градиент')+' ΔP <output data-g-out>1.0</output><input type="range" data-g min="0" max="2" step="0.1" value="1"></label></div>'+
 '<div class="vent-results" aria-live="polite"><p>'+t(L,'Относительный поток','Relative flux','Салыстырмалы ағын')+' = <strong data-flux>1.00</strong> × '+t(L,'исходного','baseline','бастапқы')+'</p><div class="vent-bar" role="img" aria-label="Relative diffusion flux"><span data-flux-bar style="width:50%"></span></div></div>'+
 '<p>J/J₀ = (A/A₀) × (ΔP/ΔP₀) ÷ (T/T₀).</p><p>'+t(L,'Упрощённая модель при постоянном коэффициенте диффузии; реальная DLCO зависит также от капиллярной крови, гемоглобина и методики измерения. Это не клинический тест.','Simplified model with constant diffusion coefficient; actual DLCO also depends on capillary blood, hemoglobin and measurement method. Not a clinical test.','Диффузия коэффициенті тұрақты болатын қарапайым модель; нақты DLCO қылтамыр қанына, гемоглобинге және өлшеу әдісіне де тәуелді. Клиникалық тест емес.')+'</p><p><a href="/modules/9/theory?lang='+lang+'">'+t(L,'Теория','Theory','Теория')+'</a> · <a href="/media-library?lang='+lang+'">'+t(L,'Медиатека','Media library','Медиатека')+'</a></p></section>';
}
export function initDiffusionStations(){
 document.querySelectorAll('[data-diffusion-station]').forEach(root=>{
  if(root.dataset.initialized)return;root.dataset.initialized='yes';
  const keys=['a','th','g'],inputs=keys.map(k=>root.querySelector('[data-'+k+']'));
  const update=()=>{
   const [area,thickness,gradient]=inputs.map(el=>Number(el.value));
   keys.forEach((k,i)=>root.querySelector('[data-'+k+'-out]').textContent=inputs[i].value);
   const v=diffusionModelValues(area,thickness,gradient).relativeFlux;
   root.querySelector('[data-flux]').textContent=v.toFixed(2);
   root.querySelector('[data-flux-bar]').style.width=Math.min(100,v*50).toFixed(1)+'%';
  };
  inputs.forEach(el=>el.addEventListener('input',update));update();
 });
}
