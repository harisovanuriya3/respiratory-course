const tr=(L,ru,en,kz)=>[ru,en,kz][L];
export function breathingValues(vt,f,vd){
 if(!Number.isFinite(vt)||!Number.isFinite(f)||!Number.isFinite(vd)||vt<=0||f<=0||vd<0||vd>=vt)throw new RangeError('Invalid ventilation parameters');
 return {minute:vt*f/1000,alveolar:(vt-vd)*f/1000,dead:vd*f/1000,period:60/f};
}
const cases=[{vt:500,f:12,vd:150},{vt:250,f:24,vd:150},{vt:750,f:8,vd:150}];
export function breathingMechanicsLab(mid,section,L,lang){
 if(mid!==1||!['interactive','practice','media'].includes(section))return '';
 const title=tr(L,'Виртуальная лаборатория: дыхательные движения и вентиляция','Virtual laboratory: breathing mechanics and ventilation','Виртуалды зертхана: тыныс қозғалыстары және желдетілу');
 return '<section class="lesson-card breathing-mechanics-lab" data-breathing-lab data-l="'+L+'"><h3>'+title+'</h3><p>'+tr(L,'Сравните спокойное, частое поверхностное и глубокое медленное дыхание. Анимация схематическая, расчёты учебные.','Compare resting, rapid shallow and slow deep breathing. Animation is schematic; calculations are educational.','Тыныш, жиі үстірт және баяу терең тынысты салыстырыңыз. Анимация сызбалық, есептеулер оқу мақсатында.')+'</p>'+
 '<div class="breathing-presets"><button type="button" data-preset="0">'+tr(L,'Спокойное','Resting','Тыныш')+'</button><button type="button" data-preset="1">'+tr(L,'Частое поверхностное','Rapid shallow','Жиі үстірт')+'</button><button type="button" data-preset="2">'+tr(L,'Глубокое медленное','Slow deep','Баяу терең')+'</button></div>'+
 '<div class="breathing-controls"><label>VT (mL) <output data-vt-out>500</output><input data-vt type="range" min="200" max="1000" step="50" value="500"></label><label>f (/min) <output data-f-out>12</output><input data-f type="range" min="6" max="30" step="1" value="12"></label><label>VD (mL) <output data-vd-out>150</output><input data-vd type="range" min="50" max="200" step="10" value="150"></label></div>'+
 '<div class="breathing-visuals"><figure><svg viewBox="0 0 320 260" role="img" aria-label="'+tr(L,'Схематическое движение лёгких и диафрагмы','Schematic lung and diaphragm movement','Өкпе мен көкеттің сызбалық қозғалысы')+'"><path d="M160 18 V65 M160 65 L122 94 M160 65 L198 94" fill="none" stroke="#456f78" stroke-width="11" stroke-linecap="round"/><g class="breathing-lungs"><path d="M145 85 Q95 55 64 117 Q33 200 128 214 Q155 209 145 85Z" fill="#e7a6a0" stroke="#aa6966" stroke-width="3"/><path d="M175 85 Q225 55 256 117 Q287 200 192 214 Q165 209 175 85Z" fill="#e7a6a0" stroke="#aa6966" stroke-width="3"/><path d="M120 104 L90 148 M120 132 L126 177 M200 104 L230 148 M200 132 L194 177" stroke="#b56c6b" stroke-width="5" fill="none"/></g><path class="breathing-diaphragm" d="M42 220 Q160 172 278 220" fill="none" stroke="#347e7c" stroke-width="11" stroke-linecap="round"/></svg><figcaption>'+tr(L,'Учебная схема, не анатомическая фотография','Educational diagram, not an anatomical photograph','Оқу сызбасы, анатомиялық фото емес')+'</figcaption></figure><figure><svg data-spiro viewBox="0 0 500 260" role="img" aria-label="'+tr(L,'Спирограмма объём–время','Volume–time spirogram','Көлем–уақыт спирограммасы')+'"><path d="M42 20V220H480" stroke="currentColor" fill="none"/><path data-wave d="" stroke="#137b86" stroke-width="3" fill="none"/><text x="8" y="20" font-size="12">mL</text><text x="445" y="245" font-size="12">s</text><text x="44" y="238" font-size="11">0</text><text x="445" y="238" font-size="11">20</text></svg><figcaption>'+tr(L,'Спирограмма: 20 секунд моделируемого дыхания','Spirogram: 20 seconds of simulated breathing','Спирограмма: 20 секунд модельдік тыныс')+'</figcaption></figure></div>'+
 '<div class="breathing-results" aria-live="polite"><p>VE = <strong data-ve>6.00</strong> L/min · VA = <strong data-va>4.20</strong> L/min · VD×f = <strong data-vdead>1.80</strong> L/min</p><p data-note></p></div>'+
 '<p>VE = VT × f; VA = (VT − VD) × f.</p><p>'+tr(L,'Объём мёртвого пространства задан постоянным в каждом расчёте. Модель не учитывает изменения V/Q, сопротивления, комплаенса, газообмена и заболевания. Не используется для диагностики.','Dead space is fixed for each calculation. This model omits V/Q, resistance, compliance, gas exchange and disease effects. Not for diagnosis.','Әр есепте өлі кеңістік көлемі тұрақты. Модель V/Q, кедергі, созылғыштық, газ алмасу және ауру әсерін ескермейді. Диагнозға арналмаған.')+'</p>'+
 '<p><a href="/modules/1/theory?lang='+lang+'">'+tr(L,'Теория','Theory','Теория')+'</a> · <a href="/media-library?lang='+lang+'">'+tr(L,'Медиатека','Media library','Медиатека')+'</a></p></section>';
}
export function initBreathingMechanicsLabs(){
 document.querySelectorAll('[data-breathing-lab]').forEach(root=>{
  if(root.dataset.initialized)return;root.dataset.initialized='yes';
  const inputs=['vt','f','vd'].map(n=>root.querySelector('[data-'+n+']'));
  const L=Number(root.dataset.l||0);
  const update=()=>{
   let [vt,f,vd]=inputs.map(x=>Number(x.value));
   if(vd>=vt){vd=vt-50;inputs[2].value=String(vd);}
   const v=breathingValues(vt,f,vd);
   ['vt','f','vd'].forEach((n,i)=>root.querySelector('[data-'+n+'-out]').textContent=inputs[i].value);
   root.querySelector('[data-ve]').textContent=v.minute.toFixed(2);
   root.querySelector('[data-va]').textContent=v.alveolar.toFixed(2);
   root.querySelector('[data-vdead]').textContent=v.dead.toFixed(2);
   const points=[];for(let i=0;i<=200;i++){const time=i/10;const phase=(time/v.period)%1;const vol=(1-Math.cos(2*Math.PI*phase))/2;points.push((42+i*2.15).toFixed(1)+','+(210-vol*180*vt/1000).toFixed(1));}
   root.querySelector('[data-wave]').setAttribute('d','M'+points.join(' L'));
   root.style.setProperty('--breath-duration',v.period+'s');
   root.style.setProperty('--breath-scale',String(0.95+vt/500*0.09));
   root.querySelector('[data-note]').textContent=tr(L,'При уменьшении VT и увеличении f минутная вентиляция может не измениться, хотя альвеолярная вентиляция снизится.','Lower VT with higher f may preserve minute ventilation while reducing alveolar ventilation.','VT азайып, f артқанда минуттық желдетілу сақталып, альвеолалық желдетілу төмендеуі мүмкін.');
  };
  inputs.forEach(el=>el.addEventListener('input',update));
  root.querySelectorAll('[data-preset]').forEach(button=>button.addEventListener('click',()=>{const preset=cases[Number(button.dataset.preset)];inputs.forEach((el,i)=>el.value=String([preset.vt,preset.f,preset.vd][i]));update();}));
  update();
 });
}
