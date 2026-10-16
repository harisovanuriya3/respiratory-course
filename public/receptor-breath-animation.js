/* Qualitative teaching visualization; not a physiological prediction or medical device. */
const languages=['RU','EN','KZ'];
const tr=(L,ru,en,kz)=>[ru,en,kz][Math.max(0,languages.indexOf(L))];
const modes=[
{id:'central',name:['Центральные хеморецепторы (CO₂/H⁺)','Central chemoreceptors (CO₂/H⁺)','Орталық хеморецепторлар (CO₂/H⁺)'],pattern:'enhanced',note:['Повышение CO₂ обычно усиливает вентиляцию через центральную хемочувствительность.','Elevated CO₂ generally increases ventilation via central chemosensitivity.','CO₂ жоғарылауы орталық хемосезімталдық арқылы вентиляцияны көбіне арттырады.']},
{id:'carotid',name:['Каротидные тельца (O₂/CO₂/pH)','Carotid bodies (O₂/CO₂/pH)','Ұйқы артериясы денешіктері (O₂/CO₂/pH)'],pattern:'enhanced',note:['При выраженном снижении PaO₂ периферический хеморефлекс усиливает вентиляцию.','Markedly reduced PaO₂ activates a peripheral chemoreflex that increases ventilation.','PaO₂ айқын төмендегенде шеткі хеморефлекс вентиляцияны күшейтеді.']},
{id:'aortic',name:['Аортальные тельца','Aortic bodies','Қолқа денешіктері'],pattern:'enhanced',note:['Дополнительный гипоксический сигнал; у человека вклад обычно меньше, чем у каротидных телец.','Supplementary hypoxic input; typically smaller than carotid-body contribution in humans.','Қосымша гипоксиялық сигнал; адамда үлесі каротид денешіктерінен әдетте төмен.']},
{id:'stretch',name:['Рецепторы растяжения лёгких','Pulmonary stretch receptors','Өкпенің созылу рецепторлары'],pattern:'inspiratory-off',note:['Сильное растяжение может завершать вдох (рефлекс Геринга—Брейера); эффект зависит от возраста и объёма.','Large inflation can terminate inspiration (Hering–Breuer reflex); age and volume matter.','Күшті созылу дем алуды тоқтатуы мүмкін (Геринг–Брейер рефлексі); жас пен көлем маңызды.']},
{id:'irritant',name:['Рецепторы раздражения дыхательных путей','Airway irritant receptors','Тыныс жолының тітіркену рецепторлары'],pattern:'cough',note:['Возможны кашель, бронхоконстрикция и изменение ритма; показанная форма сигнала — условная.','Cough, bronchoconstriction and variable breathing can occur; the displayed trace is illustrative.','Жөтел, бронх тарылуы және ырғақ өзгеруі мүмкін; көрсетілген қисық шартты.']},
{id:'c-fiber',name:['Лёгочные C-волокна','Pulmonary C-fibers','Өкпенің C-талшықтары'],pattern:'apnea-shallow',note:['При активации лёгочных C-волокон возможны краткое апноэ, затем частое поверхностное дыхание; последовательность вариабельна.','Pulmonary C-fiber stimulation may produce brief apnea followed by rapid shallow breathing; the sequence is variable.','Өкпенің C-талшықтары белсенгенде қысқа апноэ, кейін жиі таяз тыныс болуы мүмкін; жауап өзгермелі.']},
{id:'proprio',name:['Проприорецепторы при движении','Proprioceptors during movement','Қозғалыс кезіндегі проприорецепторлар'],pattern:'enhanced',note:['В начале нагрузки соматосенсорные сигналы помогают быстро увеличить вентиляцию.','Somatosensory input contributes to the rapid ventilatory rise at exercise onset.','Жүктеме басында соматосенсорлық сигналдар вентиляцияның тез өсуіне ықпал етеді.']},
{id:'cortex',name:['Кора и эмоции','Cortex and emotion','Ми қыртысы мен эмоциялар'],pattern:'variable',note:['Произвольное и эмоциональное управление может учащать, замедлять или временно задерживать дыхание.','Voluntary and emotional control may speed, slow or briefly suspend breathing.','Ерікті және эмоциялық реттелу тынысты жиілетіп, баяулатып немесе уақытша тоқтата алады.']},
{id:'humoral',name:['Гуморальные влияния','Humoral influences','Гуморальдық әсерлер'],pattern:'variable',note:['Направление ответа зависит от конкретного гормона, метаболического стимула и состояния организма.','The direction depends on the specific hormone, metabolic stimulus and physiological state.','Жауап бағыты нақты гормонға, метаболизмдік әсерге және ағза күйіне тәуелді.']}
];
export const receptorAnimationCases=modes;
export function receptorBreathingAnimation(L='RU'){
return `<section class="receptor-animation learning-panel" id="receptor-breath-animation"><h3>${tr(L,'Рецепторы и другие механизмы регуляции дыхания','Receptors and other controls of breathing','Рецепторлар және тыныс алуды реттеудің басқа тетіктері')}</h3>
<p>${tr(L,'Выберите рецептор или регуляторное влияние и условную силу стимула. Сравните качественный ответ с исходным состоянием.','Choose a receptor or regulatory influence and illustrative stimulus intensity. Compare the qualitative response with baseline.','Рецепторды немесе реттеуші әсерді және шартты тітіркендіргіш күшін таңдаңыз. Жауапты бастапқы күймен салыстырыңыз.')}</p>
<div class="receptor-controls"><label>${tr(L,'Механизм','Mechanism','Тетік')}<select id="rba-kind">${modes.map(m=>`<option value="${m.id}">${m.name[Math.max(0,languages.indexOf(L))]}</option>`).join('')}</select></label><label>${tr(L,'Условная активация','Illustrative activation','Шартты белсенділік')} <output id="rba-strength-out">100%</output><input id="rba-strength" type="range" min="0" max="100" value="100" step="5"></label><button type="button" id="rba-toggle">${tr(L,'Пауза','Pause','Кідірту')}</button><button type="button" id="rba-reset">${tr(L,'Сброс','Reset','Қалпына келтіру')}</button></div>
<label id="rba-stimulus-label">${tr(L,'Стимул','Stimulus','Тітіркендіргіш')} <select id="rba-stimulus"><option value="hypoxemia">${tr(L,'Снижение PaO₂','Reduced PaO₂','PaO₂ төмендеуі')}</option><option value="hypercapnia">${tr(L,'Повышение PaCO₂','Elevated PaCO₂','PaCO₂ жоғарылауы')}</option><option value="acidosis">${tr(L,'Метаболический ацидоз','Metabolic acidosis','Метаболизмдік ацидоз')}</option></select></label><div class="receptor-visual"><svg viewBox="0 0 600 260" role="img" aria-label="${tr(L,'Схематическая анимация дыхательного объёма и движения диафрагмы','Schematic breathing volume and diaphragm motion','Тыныс көлемі мен диафрагма қозғалысының сызбалық анимациясы')}"><g fill="none" stroke="currentColor" stroke-width="3"><path d="M300 22 V70 M300 70 C280 75 260 90 250 110 M300 70 C320 75 340 90 350 110"/><path d="M290 50 C270 40 245 52 225 90 C204 125 200 182 226 210 Q255 230 290 210 Z" fill="#d9eef0"/><path d="M310 50 C330 40 355 52 375 90 C396 125 400 182 374 210 Q345 230 310 210 Z" fill="#d9eef0"/></g><g id="rba-lungs" fill="#79c9c4" opacity=".65"><ellipse cx="254" cy="142" rx="29" ry="66"/><ellipse cx="346" cy="142" rx="29" ry="66"/></g><path id="rba-diaphragm" d="M210 218 Q300 170 390 218" fill="none" stroke="#0c8078" stroke-width="6" stroke-linecap="round"/><path id="rba-wave" d="M15 242 H585" fill="none" stroke="#0c8078" stroke-width="3"/></svg></div>
<div class="receptor-readouts" aria-live="polite"><span>${tr(L,'Тип ответа','Response pattern','Жауап түрі')}: <strong id="rba-pattern"></strong></span><span>${tr(L,'Стадия','Phase','Кезең')}: <strong id="rba-phase"></strong></span></div>
<p id="rba-note" aria-live="polite"></p><p class="small-note">${tr(L,'Качественная схема без прогнозируемых числовых значений. Ползунок обозначает только условную выраженность стимула. Рефлексы зависят от контекста; кашель и апноэ показаны упрощённо.','Qualitative diagram without predicted numerical values. The slider represents illustrative stimulus intensity only. Reflexes depend on context; cough and apnea are simplified.','Сандық болжам жасамайтын сапалық сызба. Жүгірткі тек шартты тітіркендіргіш күшін білдіреді. Рефлекстер жағдайға тәуелді; жөтел мен апноэ жеңілдетіліп көрсетілген.')}</p></section>`;
}
export function initReceptorBreathingAnimation(L='RU'){
 const root=document.getElementById('receptor-breath-animation');if(!root)return;
 const $=id=>root.querySelector('#'+id);
 const select=$('rba-kind'),strength=$('rba-strength'),toggle=$('rba-toggle'),reset=$('rba-reset');
 const lungs=$('rba-lungs'),diaphragm=$('rba-diaphragm'),wave=$('rba-wave'),stimulus=$('rba-stimulus');
 let paused=matchMedia('(prefers-reduced-motion: reduce)').matches,elapsed=0,previous=0;
 const active=()=>modes.find(m=>m.id===select.value)||modes[0];
 const labels={enhanced:['Усиление вентиляционного драйва','Increased ventilatory drive','Вентиляциялық қозудың күшеюі'],
 'inspiratory-off':['Завершение вдоха','Inspiratory termination','Дем алудың аяқталуы'],
 cough:['Защитный кашлевой рефлекс','Protective cough reflex','Қорғаныш жөтел рефлексі'],
 'apnea-shallow':['Возможная пауза → поверхностное дыхание','Possible pause → shallow breathing','Ықтимал үзіліс → таяз тыныс'],
 variable:['Зависит от стимула и состояния','Depends on stimulus and context','Тітіркендіргіш пен жағдайға тәуелді']};
 function update(){const m=active();$('rba-strength-out').textContent=strength.value+'%';
  $('rba-stimulus-label').hidden=m.id!=='carotid';
  $('rba-pattern').textContent=Number(strength.value)===0?tr(L,'Исходное состояние: стимул отсутствует','Baseline: no applied stimulus','Бастапқы күй: тітіркендіргіш жоқ'):labels[m.pattern][Math.max(0,languages.indexOf(L))];
  const additional=m.id==='carotid'?tr(L,
    {hypoxemia:'Снижение PaO₂ стимулирует периферические хеморецепторы, особенно при выраженной гипоксемии.',hypercapnia:'Повышение PaCO₂ стимулирует периферические и центральные механизмы; эта схема показывает периферический компонент.',acidosis:'Снижение артериального pH активирует каротидные тельца, включая метаболический ацидоз.'}[stimulus.value],
    {hypoxemia:'Reduced PaO₂ activates peripheral chemoreceptors, particularly in marked hypoxemia.',hypercapnia:'Elevated PaCO₂ engages peripheral and central mechanisms; this panel shows the peripheral component.',acidosis:'Reduced arterial pH activates carotid bodies, including during metabolic acidosis.'}[stimulus.value],
    {hypoxemia:'PaO₂ төмендеуі, әсіресе айқын гипоксемияда, шеткі хеморецепторларды белсендіреді.',hypercapnia:'PaCO₂ жоғарылауы орталық және шеткі механизмдерді қоздырады; мұнда шеткі бөлігі көрсетілген.',acidosis:'Артериялық pH төмендеуі, соның ішінде метаболизмдік ацидоз кезінде, каротид денешіктерін белсендіреді.'}[stimulus.value]):m.note[Math.max(0,languages.indexOf(L))];
  $('rba-note').textContent=Number(strength.value)===0?tr(L,'Стимул выключен. Показано условное спокойное дыхание; это не измерение пациента.','Stimulus is off. Illustrative quiet breathing is shown, not a patient measurement.','Тітіркендіргіш өшірілген. Науқастың өлшемі емес, шартты тыныш тыныс көрсетілген.'):additional;draw();}
 function draw(){const m=active(),f=Number(strength.value)/100;
  // All frequencies and displacements are illustrative. No breaths/min or tidal volume is inferred.
  const baseline=f===0,cycle=elapsed*.23,phase=cycle%1;
  let amplitude=.5,inhale=(1-Math.cos(2*Math.PI*phase))/2;
  let stage=tr(L,'Условный дыхательный цикл','Illustrative breathing cycle','Шартты тыныс циклі');
  if(!baseline){
   if(m.pattern==='enhanced'){
    // Qualitative increased drive, not a calibrated frequency or tidal-volume response.
    amplitude=.5+.25*f;
    stage=tr(L,'Усиление дыхательного драйва (схема)','Increased respiratory drive (schematic)','Тыныс қозуының күшеюі (сызба)');
   }
   if(m.pattern==='inspiratory-off'){
    inhale=Math.min(inhale,Math.max(.25,.85-.5*f));
    stage=tr(L,'Ограничение вдоха; частота не прогнозируется','Inspiration limited; rate not predicted','Дем алу шектеледі; жиілік болжанбайды');
   }
   if(m.pattern==='cough'){
    // One illustrative cough event followed by ordinary breathing, not repeated rhythmic coughing.
    if(elapsed<4){const t=elapsed;inhale=t<1.5?Math.sin(Math.PI*t/3)*.8:t<2.1?.9:Math.max(0,1-(t-2.1)*1.4);
     stage=t<1.5?tr(L,'Подготовительный вдох','Preparatory inspiration','Дайындық дем алуы'):t<2.1?tr(L,'Компрессионная фаза (условно)','Compression phase (schematic)','Қысылу кезеңі (шартты)'):tr(L,'Экспульсивная фаза (условно)','Expulsive phase (schematic)','Шығару кезеңі (шартты)');}
    else stage=tr(L,'После рефлекса: условное дыхание','After reflex: illustrative breathing','Рефлекстен кейін: шартты тыныс');
   }
   if(m.pattern==='apnea-shallow'){
    // One initial pause, followed by shallow cycles; no periodic apnea is implied.
    if(elapsed<2){inhale=0;stage=tr(L,'Возможная начальная пауза','Possible initial pause','Ықтимал бастапқы үзіліс');}
    else {inhale=(1-Math.cos(2*Math.PI*(elapsed-2)*.65))/2*.35;
     stage=tr(L,'Возможное частое поверхностное дыхание','Possible rapid shallow breathing','Ықтимал жиі таяз тыныс');}
   }
   if(m.pattern==='variable'){
    stage=tr(L,'Направление ответа не предсказано','Response direction not predicted','Жауап бағыты болжанбаған');
   }
  }
  const displacement=inhale*amplitude;
  lungs.setAttribute('transform',`translate(300 142) scale(${(1+.1*displacement).toFixed(3)} ${(1+.14*displacement).toFixed(3)}) translate(-300 -142)`);
  diaphragm.setAttribute('d',`M210 218 Q300 ${(195+21*displacement).toFixed(1)} 390 218`);
  // The trace reflects the currently illustrated phase. A flat line during
  // the initial pause is essential: a sinusoidal trace would contradict apnea.
  let d='';for(let x=15;x<=585;x+=4){
   const samplePhase=((x-15)/140-cycle)%1;
   let sample=(1-Math.cos(2*Math.PI*samplePhase))/2;
   if(!baseline&&m.pattern==='inspiratory-off')sample=Math.min(sample,Math.max(.25,.85-.5*f));
   if(!baseline&&m.pattern==='apnea-shallow')sample=elapsed<2?0:sample*.35;
   if(!baseline&&m.pattern==='cough'&&elapsed<4)sample=inhale;
   const y=244-18*amplitude*sample;
   d+=(x===15?'M':'L')+x+' '+y.toFixed(2)+' ';
  }wave.setAttribute('d',d);
  $('rba-phase').textContent=stage;
 }
 function setPaused(value){paused=value;toggle.textContent=paused?tr(L,'Продолжить','Resume','Жалғастыру'):tr(L,'Пауза','Pause','Кідірту');}
 function loop(now){if(!root.isConnected)return;const dt=previous?Math.min((now-previous)/1000,.08):0;previous=now;if(!paused)elapsed+=dt;draw();requestAnimationFrame(loop);}
 select.addEventListener('change',()=>{elapsed=0;update();});stimulus.addEventListener('change',update);strength.addEventListener('input',()=>{elapsed=0;update();});
 toggle.addEventListener('click',()=>setPaused(!paused));reset.addEventListener('click',()=>{select.value='central';stimulus.value='hypoxemia';strength.value='100';elapsed=0;update();});
 setPaused(paused);update();requestAnimationFrame(loop);
 document.addEventListener('visibilitychange',()=>{previous=0;});
}
