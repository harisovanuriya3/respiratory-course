const tr=(L,ru,en,kz)=>[ru,en,kz][L];
export function airwayResistanceValues(radius,gradient,baselineResistance=2){
 if(radius<=0||gradient<0||baselineResistance<=0)throw new RangeError('Invalid inputs');
 const resistance=baselineResistance/Math.pow(radius,4);
 return {resistance,flow:gradient/resistance,relativeResistance:1/Math.pow(radius,4)};
}
export function airwayResistanceStation(mid,section,L,lang){
 if(mid!==6||!['theory','practice','interactive','media'].includes(section))return '';
 return '<section class="lesson-card alveolar-ventilation-station" data-airway-station data-language-index="'+L+'"><h3>'+tr(L,'Лаборатория: радиус бронха и сопротивление потоку','Laboratory: airway radius and flow resistance','Зертхана: бронх радиусы және ауа ағынының кедергісі')+'</h3>'+
 '<p>'+tr(L,'Сравните поток при изменении радиуса идеальной трубки. Исследуйте четвёртую степень в законе Пуазейля.','Compare flow when the radius of an ideal tube changes. Explore the fourth-power dependence in Poiseuille’s law.','Идеал түтік радиусы өзгергенде ағынды салыстырыңыз. Пуазейль заңындағы төртінші дәрежелік тәуелділікті зерттеңіз.')+'</p>'+
 '<div class="vent-controls"><label>'+tr(L,'Относительный радиус','Relative radius','Салыстырмалы радиус')+' r/r₀ <output data-radius-out>1.00</output><input data-radius type="range" min="0.5" max="1.5" step="0.05" value="1"></label><label>ΔP (cm H₂O) <output data-pressure-out>2</output><input data-pressure type="range" min="0" max="6" step="0.5" value="2"></label></div>'+
 '<div class="vent-results" aria-live="polite"><p>R = <strong data-resistance>2.00</strong> cm H₂O/(L/s)</p><p>Q = <strong data-flow>1.00</strong> L/s</p><p>'+tr(L,'Сопротивление относительно исходного','Resistance relative to baseline','Бастапқы кедергіге қатынасы')+': <strong data-relative>1.00</strong> ×</p><div class="vent-bar" role="img" aria-label="Relative airway resistance"><span data-resistance-bar style="width:20%"></span></div></div>'+
 '<p>R/R₀ = (r₀/r)⁴; Q = ΔP/R.</p>'+
 '<p>'+tr(L,'Учебная модель применима к ламинарному потоку в идеальной цилиндрической трубке при постоянной вязкости и длине. Реальные бронхи ветвятся, деформируются, а поток может быть турбулентным. Не использовать для клинической диагностики.','This teaching model assumes laminar flow in an ideal cylindrical tube with constant viscosity and length. Real airways branch and deform, and flow may be turbulent. Not for clinical diagnosis.','Оқу моделі тұтқырлығы мен ұзындығы тұрақты идеал цилиндрдегі ламинарлық ағынға арналған. Нақты бронхтар тармақталады, деформацияланады, ал ағын турбулентті болуы мүмкін. Клиникалық диагностикаға арналмаған.')+'</p>'+
 '<p><a href="/modules/6/theory?lang='+lang+'">'+tr(L,'Теория','Theory','Теория')+'</a> · <a href="/media-library?lang='+lang+'">'+tr(L,'Медиатека','Media library','Медиатека')+'</a></p></section>';
}
export function initAirwayResistanceStations(){
 document.querySelectorAll('[data-airway-station]').forEach(root=>{
  if(root.dataset.initialized)return;root.dataset.initialized='yes';
  const radius=root.querySelector('[data-radius]'),pressure=root.querySelector('[data-pressure]');
  const update=()=>{
   const r=Number(radius.value),p=Number(pressure.value),v=airwayResistanceValues(r,p);
   root.querySelector('[data-radius-out]').textContent=r.toFixed(2);
   root.querySelector('[data-pressure-out]').textContent=String(p);
   root.querySelector('[data-resistance]').textContent=v.resistance.toFixed(2);
   root.querySelector('[data-flow]').textContent=v.flow.toFixed(2);
   root.querySelector('[data-relative]').textContent=v.relativeResistance.toFixed(2);
   root.querySelector('[data-resistance-bar]').style.width=Math.min(100,v.relativeResistance*20).toFixed(1)+'%';
  };
  radius.addEventListener('input',update);pressure.addEventListener('input',update);update();
 });
}
