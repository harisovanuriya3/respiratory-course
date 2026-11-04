const t=(L,ru,en,kz)=>[ru,en,kz][L];
export function vqLearningModel(mid,section,L,lang){
 if(mid!==13||!['theory','practice','interactive','media'].includes(section))return '';
 return '<section class="lesson-card" data-vq-model data-language-index="'+L+'"><h3>'+t(L,'Интерактивная модель распределения V/Q','Interactive V/Q distribution model','V/Q таралуының интерактивті моделі')+'</h3><p>'+t(L,'Сравните две условные области лёгкого. Изменяйте альвеолярную вентиляцию и перфузию отдельно. Модель показывает локальное отношение V/Q, а не артериальное PaO₂.','Compare two illustrative lung regions. Adjust alveolar ventilation and perfusion separately. The model shows regional V/Q, not arterial PaO₂.','Өкпенің екі шартты аймағын салыстырыңыз. Альвеолалық желдетілу мен перфузияны бөлек өзгертіңіз. Модель аймақтық V/Q көрсетеді, артериялық PaO₂ емес.')+'</p>'+
 '<div class="vent-controls">'+[1,2].map(i=>'<fieldset><legend>'+t(L,'Область ','Region ','Аймақ ')+i+'</legend><label>VA (L/min) <output data-va-output="'+i+'">2</output><input type="range" data-va="'+i+'" min="0" max="5" step="0.25" value="2"></label><label>Q (L/min) <output data-q-output="'+i+'">2.5</output><input type="range" data-q="'+i+'" min="0" max="5" step="0.25" value="2.5"></label><p>V/Q = <strong data-vq-output="'+i+'">0.80</strong></p><p data-vq-state="'+i+'"></p></fieldset>').join('')+'</div>'+
 '<p>'+t(L,'При V=0 и Q>0 модель показывает шунтоподобное состояние; при Q=0 и V>0 — вентиляцию без перфузии. Два нулевых значения не дают определённого отношения. Это учебная схема: реальные газовые давления и смешение крови здесь не вычисляются.','At V=0 and Q>0 the model labels shunt-like behavior; at Q=0 and V>0 it labels ventilation without perfusion. Two zero values yield an undefined ratio. This is a teaching model: real gas tensions and blood mixing are not calculated.','V=0, Q>0 болса, модель шунтқа ұқсас жағдайды; Q=0, V>0 болса, перфузиясыз желдетілуді көрсетеді. Екі мән де нөл болса, қатынас анықталмайды. Бұл оқу моделі: нақты газ қысымдары мен қанның араласуы есептелмейді.')+'</p><p><a href="/modules/13/theory?lang='+lang+'">'+t(L,'Теория','Theory','Теория')+'</a> · <a href="/media-library?lang='+lang+'">'+t(L,'Медиатека','Media library','Медиатека')+'</a></p></section>';
}
export function vqRatio(va,q){
 if(va===0&&q===0)return {ratio:null,kind:'undefined'};
 if(q===0)return {ratio:Infinity,kind:'dead-space'};
 if(va===0)return {ratio:0,kind:'shunt'};
 return {ratio:va/q,kind:'perfused'};
}
export function initVqLearningModels(){
 document.querySelectorAll('[data-vq-model]').forEach(root=>{
  if(root.dataset.initialized)return;root.dataset.initialized='yes';
  const L=Number(root.dataset.languageIndex||0);
  const messages={shunt:['Шунтоподобное состояние','Shunt-like region','Шунтқа ұқсас аймақ'], 'dead-space':['Вентиляция без перфузии','Ventilation without perfusion','Перфузиясыз желдетілу'],undefined:['Отношение не определено','Ratio undefined','Қатынас анықталмаған'],perfused:['Вентиляция и перфузия присутствуют','Ventilation and perfusion present','Желдетілу мен перфузия бар']};
  const update=()=>{
   for(const i of [1,2]){
    const va=Number(root.querySelector('[data-va="'+i+'"]').value),q=Number(root.querySelector('[data-q="'+i+'"]').value);
    const result=vqRatio(va,q);
    root.querySelector('[data-va-output="'+i+'"]').textContent=String(va);
    root.querySelector('[data-q-output="'+i+'"]').textContent=String(q);
    root.querySelector('[data-vq-output="'+i+'"]').textContent=result.ratio===null?'—':Number.isFinite(result.ratio)?result.ratio.toFixed(2):'∞';
    root.querySelector('[data-vq-state="'+i+'"]').textContent=messages[result.kind][L];
   }
  };
  root.querySelectorAll('input').forEach(el=>el.addEventListener('input',update));update();
 });
}
