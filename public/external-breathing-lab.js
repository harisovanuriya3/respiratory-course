// Deterministic educational single-compartment respiratory-mechanics model.
const tx=(L,...v)=>v[L], clamp=(x,a,b)=>Math.min(b,Math.max(a,x));
export function respiratoryMechanics({rate=12,drive=8,resistance=2,compliance=.1,deadSpace=150}={}){
 if(![rate,drive,resistance,compliance,deadSpace].every(Number.isFinite)||Math.min(rate,drive,resistance,compliance)<=0||deadSpace<0)throw Error('domain');
 const cycle=60/rate,tau=resistance*compliance,w=2*Math.PI/cycle,attenuation=1/Math.sqrt(1+(w*tau)**2),tidal=clamp(drive*compliance*attenuation,.08,1.5);
 const samples=Array.from({length:121},(_,i)=>{const time=cycle*i/120,p=2*Math.PI*time/cycle,volume=tidal*(1-Math.cos(p))/2,flow=tidal*Math.PI/cycle*Math.sin(p),palv=-resistance*flow;return{time,volume,flow,palv,ppl:palv-volume/compliance}});
 return{cycle,tau,tidal,minute:tidal*rate,alveolar:Math.max(0,tidal-deadSpace/1000)*rate,samples};
}
const graph=(id,label,x,y)=>`<svg class="mechanics-chart" viewBox="0 0 520 210" role="img" aria-label="${label}"><line x1="48" y1="174" x2="500" y2="174"/><line x1="48" y1="18" x2="48" y2="174"/><text x="274" y="202">${x}</text><text x="15" y="105" transform="rotate(-90 15 105)">${y}</text><g id="${id}-ticks"></g><path id="${id}"/><path id="${id}-saved" class="saved"/></svg>`;
const points=(a,x,y)=>a.map((p,i)=>`${i?'L':'M'}${x(p).toFixed(1)} ${y(p).toFixed(1)}`).join(' ');
export function externalBreathingLab(L){const t=(...a)=>tx(L,...a);return `<section class="experiment mechanics-lab" id="mechanics-lab"><div class="eyebrow">${t('Динамическая лаборатория','Dynamic laboratory','Динамикалық зертхана')}</div><h2>${t('Механика внешнего дыхания','Mechanics of external breathing','Сыртқы тыныс механикасы')}</h2><p>${t('Сделайте прогноз и проследите цепь: мышечное давление → плевральное и альвеолярное давление → поток → объём.','Predict, then follow the chain: muscle pressure → pleural and alveolar pressure → flow → volume.','Болжам жасап, тізбекті бақылаңыз: бұлшықет қысымы → плевралық және альвеолалық қысым → ағын → көлем.')}</p><details open class="mechanics-protocol"><summary>${t('Один опыт: увеличьте только сопротивление','One experiment: increase resistance only','Бір тәжірибе: тек кедергіні арттырыңыз')}</summary><ol><li>${t('Нажмите «Норма». Запишите прогноз: что произойдёт с дыхательным объёмом при увеличении R с 2 до 8?','Select Normal. Predict what happens to tidal volume when R rises from 2 to 8.','«Қалыпты» таңдаңыз. R 2-ден 8-ге өскенде тыныстық көлем қалай өзгеретінін болжаңыз.')}</li><li>${t('Нажмите «Сравнить»: исходный опыт сохранится оранжевой пунктирной кривой.','Select Compare: the baseline is saved as an orange dashed trace.','«Салыстыру» басыңыз: бастапқы тәжірибе қызғылт сары үзік қисықпен сақталады.')}</li><li>${t('Установите только R = 8. Остальные параметры не меняйте. Нажмите «Старт», затем «Пауза».','Set only R = 8. Leave the other parameters unchanged. Select Start, then Pause.','Тек R = 8 орнатыңыз. Басқа параметрлерді өзгертпеңіз. «Бастау», содан кейін «Кідірту» басыңыз.')}</li><li>${t('Сравните VT и τ с исходными значениями. Объясните результат через сопротивление потоку; укажите, что это учебная модель, а не измерения пациента.','Compare VT and τ with baseline. Explain the result using resistance to flow; state that these are model outputs, not patient measurements.','VT және τ мәндерін бастапқымен салыстырыңыз. Нәтижені ағын кедергісі арқылы түсіндіріңіз; бұл пациент өлшемдері емес, оқу моделінің нәтижелері екенін көрсетіңіз.')}</li></ol></details><div class="lab-presets"><button data-preset="normal">${t('Норма','Normal','Қалыпты')}</button><button data-preset="obstructive">${t('Обструкция','Obstruction','Обструкция')}</button><button data-preset="restrictive">${t('Рестрикция','Restriction','Рестрикция')}</button></div><label class="prediction">${t('Прогноз','Prediction','Болжам')}<textarea id="mech-prediction" rows="2"></textarea></label><div class="lab-controls">${[['rate',t('Частота','Rate','Жиілік'),'6','30','1','12','min⁻¹'],['drive',t('Мышечное давление','Muscle pressure','Бұлшықет қысымы'),'3','15','.5','8','cmH₂O'],['resistance',t('Сопротивление','Resistance','Кедергі'),'1','10','.25','2','cmH₂O·s/L'],['compliance',t('Растяжимость','Compliance','Комплаенс'),'.03','.16','.005','.1','L/cmH₂O']].map(v=>`<label>${v[1]}, ${v[6]}<input id="mech-${v[0]}" type="range" min="${v[2]}" max="${v[3]}" step="${v[4]}" value="${v[5]}"><output></output></label>`).join('')}</div><div class="lab-actions"><button id="mech-start">${t('Старт','Start','Бастау')}</button><button id="mech-pause">${t('Пауза','Pause','Кідірту')}</button><button id="mech-repeat">${t('Повторить','Repeat','Қайталау')}</button><button id="mech-compare">${t('Сравнить','Compare','Салыстыру')}</button><button id="mech-reset">${t('Сбросить','Reset','Қалпына келтіру')}</button></div><div class="mechanics-dashboard"><svg class="thorax-model" viewBox="0 0 360 300" role="img" aria-label="${t('Лёгкие и диафрагма','Lungs and diaphragm','Өкпе мен көкет')}"><path class="thorax" d="M64 30Q20 145 68 254Q180 292 292 254Q340 145 296 30Q180 4 64 30Z"/><path class="airway" d="M180 8V86M180 62L127 112M180 62L233 112"/><g id="mech-lungs"><path d="M158 83Q85 54 71 171Q64 245 158 229Z"/><path d="M202 83Q275 54 289 171Q296 245 202 229Z"/></g><path id="mech-diaphragm" d="M65 238Q180 198 295 238"/></svg><div class="lab-results">${['vt','ve','va','tau','palv','ppl'].map(x=>`<div><strong id="mech-${x}">0.00</strong>${x==='vt'?'L VT':x==='ve'?'L/min V̇E':x==='va'?'L/min V̇A':x==='tau'?'s τ=R×C':(x==='ppl'?'cmH₂O ΔPpl':'cmH₂O Palv')}</div>`).join('')}</div></div><div class="mechanics-charts">${graph('mech-spiro',t('Спирограмма','Spirogram','Спирограмма'),t('Время, с','Time, s','Уақыт, с'),t('Объём, л','Volume, L','Көлем, л'))}${graph('mech-loop',t('Петля поток–объём','Flow–volume loop','Ағын–көлем ілмегі'),t('Объём, л','Volume, L','Көлем, л'),t('Поток, л/с','Flow, L/s','Ағын, л/с'))}</div><output id="mech-explanation" class="lab-formula" aria-live="polite"></output><details><summary>${t('Ограничения модели','Model limits','Модель шектері')}</summary><p>${t('Линейная однокамерная RC-модель показывает направление и время эффектов, но не моделирует региональную неоднородность, динамическое сдавление путей и качество манёвра. Это не клиническая спирометрия.','The linear one-compartment RC model shows direction and timing, but omits regional heterogeneity, dynamic airway compression and manoeuvre quality. This is not clinical spirometry.','Сызықтық бір камералы RC-модель әсер бағыты мен уақытын көрсетеді, бірақ аймақтық әркелкілікті, жолдардың динамикалық қысылуын және маневр сапасын қамтымайды. Бұл клиникалық спирометрия емес.')}</p></details><p>${t('Поток положителен на вдохе. Palv отсчитывается от атмосферного давления: Palv = −R × поток. ΔPpl — изменение плеврального давления относительно начала вдоха, не абсолютное плевральное давление. Объём — прирост над исходным уровнем.','Flow is positive during inspiration. Palv is relative to atmospheric pressure: Palv = −R × flow. ΔPpl is the change in pleural pressure from the start of inspiration, not absolute pleural pressure. Volume is the increase above baseline.','Дем алғанда ағын оң болады. Palv атмосфералық қысымға қатысты: Palv = −R × ағын. ΔPpl — дем алу басынан бергі плевралық қысым өзгерісі, абсолюттік плевралық қысым емес. Көлем — бастапқы деңгейден өсім.')}</p><p class="source-line">Hall JE. Guyton and Hall Textbook of Medical Physiology. 13th ed., 2016, ch. 38, pp. 497–499. Barrett KE et al. Ganong’s Review of Medical Physiology. 23rd ed., 2010, ch. 35, pp. 597–598.</p><p><a href="https://openstax.org/books/anatomy-and-physiology-2e/pages/22-3-the-process-of-breathing" target="_blank" rel="noopener noreferrer">OpenStax · Anatomy and Physiology 2e · 22.3 · Figures 22.16–22.17</a> — ${t('открытые схемы давления и дыхательных движений; просмотр у источника','open pressure and breathing diagrams; view at source','қысым мен тыныс қозғалыстарының ашық сызбалары; дереккөзде көру')}</p></section>`}

// Numeric ticks are generated from the SAME limits used to project both traces.
export function mechanicsTicks(maxX,maxY,flow=false){
 if(![maxX,maxY].every(v=>Number.isFinite(v)&&v>0))throw Error('axis domain');
 const fmt=v=>Number(v.toFixed(2)).toString();
 const xs=[0,.5,1].map(f=>`<text x="${48+452*f}" y="190">${fmt(maxX*f)}</text>`).join('');
 const ys=(flow?[-1,0,1]:[0,.5,1]).map(f=>`<text x="43" y="${(flow?96-72*f:174-150*f)+4}" style="text-anchor:end">${fmt(maxY*f)}</text>`).join('');
 return xs+ys+(flow?'<line x1="48" y1="96" x2="500" y2="96" stroke-dasharray="3 4"/>':'');
}

export function initExternalBreathingLab(L){
 const r=document.getElementById('mechanics-lab');if(!r)return;
 const q=s=>r.querySelector(s), ids=['rate','drive','resistance','compliance'];
 const el=Object.fromEntries(ids.map(x=>[x,q('#mech-'+x)]));
 const preset={normal:[12,8,2,.1],obstructive:[16,10,8,.1],restrictive:[20,11,2,.045]};
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 let run=false,start=0,elapsed=0,saved=null,raf=null,model;
 const read=()=>Object.fromEntries(ids.map(x=>[x,Number(el[x].value)]));
 const sample=p=>{
  const s=.88+.18*p.volume/model.tidal;
  q('#mech-lungs').style.transform=`scale(${s})`;
  q('#mech-diaphragm').style.transform=`translateY(${18*p.volume/model.tidal}px)`;
  q('#mech-palv').textContent=p.palv.toFixed(2);
  q('#mech-ppl').textContent=p.ppl.toFixed(2);
 };
 const pause=()=>{if(run)elapsed=performance.now()-start;run=false;if(raf!==null)cancelAnimationFrame(raf);raf=null;};
 const draw=()=>{
  // Both traces must use the same volume, flow AND time scales.
  const models=saved?[model,saved]:[model], maxV=Math.max(1.5,...models.map(m=>m.tidal))*1.15;
  const maxF=Math.max(1,...models.flatMap(m=>m.samples.map(p=>Math.abs(p.flow))))*1.2;
  const maxT=Math.max(...models.map(m=>m.cycle));
  q("#mech-spiro-ticks").innerHTML=mechanicsTicks(maxT,maxV);
  q("#mech-loop-ticks").innerHTML=mechanicsTicks(maxV,maxF,true);
  for(const [m,suffix] of [[model,''],[saved,'-saved']]){
   if(!m){q('#mech-spiro'+suffix).removeAttribute('d');q('#mech-loop'+suffix).removeAttribute('d');continue;}
   q('#mech-spiro'+suffix).setAttribute('d',points(m.samples,p=>48+452*p.time/maxT,p=>174-150*p.volume/maxV));
   q('#mech-loop'+suffix).setAttribute('d',points(m.samples,p=>48+452*p.volume/maxV,p=>96-72*p.flow/maxF));
  }
  for(const [x,v] of Object.entries({vt:model.tidal,ve:model.minute,va:model.alveolar,tau:model.tau}))q('#mech-'+x).textContent=v.toFixed(2);
  q('#mech-explanation').textContent=tx(L,
   `τ=${model.tau.toFixed(2)} с. Рост R замедляет наполнение; снижение C уменьшает объём при прочих равных. Синий: текущий опыт; оранжевый пунктир: сохранённый. Шкалы: время 0–${maxT.toFixed(2)} с; объём 0–${maxV.toFixed(2)} л; поток ±${maxF.toFixed(2)} л/с.`,
   `τ=${model.tau.toFixed(2)} s. Higher R slows filling; lower C reduces volume, other conditions unchanged. Blue: current; orange dashed: saved. Scales: time 0–${maxT.toFixed(2)} s; volume 0–${maxV.toFixed(2)} L; flow ±${maxF.toFixed(2)} L/s.`,
   `τ=${model.tau.toFixed(2)} с. Басқа жағдайлар тұрақты болса, R өсуі толуды баяулатады; C төмендеуі көлемді азайтады. Көк: ағымдағы; қызғылт сары үзік: сақталған. Шкалалар: уақыт 0–${maxT.toFixed(2)} с; көлем 0–${maxV.toFixed(2)} л; ағын ±${maxF.toFixed(2)} л/с.`);
 };
 const update=()=>{pause();elapsed=0;ids.forEach(x=>el[x].nextElementSibling.textContent=Number(el[x].value).toFixed(x==='compliance'?3:2));model=respiratoryMechanics(read());draw();sample(model.samples[30]);};
 const animate=now=>{if(!run)return;sample(model.samples[Math.floor(((now-start)/1000%model.cycle)/model.cycle*120)]);raf=requestAnimationFrame(animate);};
 const launch=restart=>{
  if(!q('#mech-prediction').value.trim()){q('#mech-explanation').textContent=tx(L,'Сначала запишите прогноз: как изменится объём и почему?','First predict: how will volume change, and why?','Алдымен болжаңыз: көлем қалай және неліктен өзгереді?');q('#mech-prediction').focus();return;}
  pause();if(restart)elapsed=0;
  if(reduced.matches){sample(model.samples[30]);q('#mech-explanation').textContent=tx(L,'Уменьшение движения включено: показан неподвижный кадр вдоха. Расчёты и сравнение работают.','Reduced motion is on: a static inspiratory frame is shown. Calculations and comparison remain available.','Қозғалысты азайту қосылған: дем алудың қозғалмайтын кадры көрсетілген. Есептеу мен салыстыру қолжетімді.');return;}
  run=true;start=performance.now()-elapsed;raf=requestAnimationFrame(animate);
 };
 ids.forEach(x=>el[x].oninput=update);
 r.querySelectorAll('[data-preset]').forEach(b=>b.onclick=()=>{ids.forEach((x,i)=>el[x].value=preset[b.dataset.preset][i]);update();});
 q('#mech-start').onclick=()=>launch(false);q('#mech-repeat').onclick=()=>launch(true);q('#mech-pause').onclick=pause;
 q('#mech-reset').onclick=()=>{ids.forEach((x,i)=>el[x].value=preset.normal[i]);saved=null;q('#mech-prediction').value='';update();};
 q('#mech-compare').onclick=()=>{if(!saved){saved=model;draw();q('#mech-explanation').textContent+=tx(L,' Исходный опыт сохранён. Измените один параметр; обе кривые обновятся на общих шкалах.',' Baseline saved. Change one parameter; both traces update on shared scales.',' Бастапқы тәжірибе сақталды. Бір параметрді өзгертіңіз; екі қисық ортақ шкаламен жаңарады.');}else draw();};
 const motionChange=()=>{pause();sample(model.samples[30]);};
 reduced.addEventListener('change',motionChange);
 update();
 addEventListener('pagehide',()=>{pause();reduced.removeEventListener('change',motionChange);},{once:true});
}
