const tr=(L,ru,en,kz)=>[ru,en,kz][L];
export const guideRanges={vt:[500,700],irv:[1500,2500],erv:[1000,1500],rv:[1000,1500],ic:[2000,3000],frc:[2000,3000],vcMale:[3500,4500],vcFemale:[3000,4000],tlc:[4000,6000]};
export const definitions={
 vt:['Дыхательный объём','Tidal volume','Тыныс көлемі'],
 irv:['Резервный объём вдоха','Inspiratory reserve volume','Дем алудың резервтік көлемі'],
 erv:['Резервный объём выдоха','Expiratory reserve volume','Дем шығарудың резервтік көлемі'],
 rv:['Остаточный объём','Residual volume','Қалдық көлем'],
 ic:['Ёмкость вдоха = VT + IRV','Inspiratory capacity = VT + IRV','Дем алу сыйымдылығы = VT + IRV'],
 frc:['Функциональная остаточная ёмкость = ERV + RV','Functional residual capacity = ERV + RV','Функционалдық қалдық сыйымдылық = ERV + RV'],
 vc:['Жизненная ёмкость = VT + IRV + ERV','Vital capacity = VT + IRV + ERV','Өкпенің тіршілік сыйымдылығы = VT + IRV + ERV'],
 tlc:['Общая ёмкость = VC + RV','Total lung capacity = VC + RV','Өкпенің жалпы сыйымдылығы = VC + RV']
};
export function calculateStudyVolumes(v){return {ic:v.vt+v.irv,frc:v.erv+v.rv,vc:v.vt+v.irv+v.erv,tlc:v.vt+v.irv+v.erv+v.rv};}
export function capacityExercise(L){
 const headers=['Объём / ёмкость','Volume / capacity','Көлем / сыйымдылық'];
 const orient=['Учебный ориентир, мл','Teaching reference, mL','Оқу бағдары, мл'];
 const rows=['vt','irv','erv','rv','ic','frc','vc','tlc'].map(k=>{
 const range=guideRanges[k];const label=k==='vc'?tr(L,'3500–4500 (муж.); 3000–4000 (жен.)','3500–4500 (male); 3000–4000 (female)','3500–4500 (ер); 3000–4000 (әйел)'):range.join('–');
 return '<tr><th scope="row"><strong>'+k.toUpperCase()+'</strong> — '+definitions[k][L]+'</th><td>'+label+'</td><td>'+(['ic','frc','vc','tlc'].includes(k)?'<input data-answer="'+k+'" type="number" min="0" step="50" placeholder="mL" aria-label="'+k+'">':'<output data-given="'+k+'"></output>')+'</td></tr>';
 }).join('');
 return '<section class="capacity-exercise" data-capacity-exercise data-l="'+L+'"><h4>'+tr(L,'Практическое задание: определение объёмов и ёмкостей лёгких','Practical exercise: determining lung volumes and capacities','Тәжірибелік тапсырма: өкпе көлемдері мен сыйымдылықтарын анықтау')+'</h4><p>'+tr(L,'Цель: определить VT, IRV, ERV, RV и рассчитать IC, FRC, VC, TLC. Измените ползунки лаборатории, затем заполните четыре расчётных поля самостоятельно.','Objective: identify VT, IRV, ERV, RV and calculate IC, FRC, VC, TLC. Adjust laboratory sliders and fill in four calculated fields.','Мақсат: VT, IRV, ERV, RV анықтап, IC, FRC, VC, TLC есептеу. Жүгірткілерді өзгертіп, төрт есеп өрісін толтырыңыз.')+'</p><div class="capacity-table-scroll"><table><thead><tr><th>'+headers[L]+'</th><th>'+orient[L]+'</th><th>'+tr(L,'Ваш результат, мл','Your result, mL','Сіздің нәтижеңіз, мл')+'</th></tr></thead><tbody>'+rows+'</tbody></table></div><button type="button" data-capacity-check>'+tr(L,'Проверить расчёты','Check calculations','Есептерді тексеру')+'</button><button type="button" data-capacity-new>'+tr(L,'Новое задание','New exercise','Жаңа тапсырма')+'</button><p data-capacity-feedback role="status" aria-live="polite"></p><p>'+tr(L,'Ориентиры приведены по учебному пособию Spiro S-100 (Караганда, 2021), а не как индивидуальные клинические нормы. RV, FRC и TLC не измеряются обычной спирометрией.','Reference ranges are from the 2021 Karaganda Spiro S-100 teaching guide, not individual clinical reference values. Standard spirometry does not measure RV, FRC or TLC.','Аралықтар 2021 жылғы Қарағанды Spiro S-100 оқу құралынан алынған; жеке клиникалық нормалар емес. RV, FRC, TLC кәдімгі спирометриямен өлшенбейді.')+'</p></section>';
}
export function initCapacityExercises(){
 document.querySelectorAll('[data-capacity-exercise]').forEach(root=>{
  if(root.dataset.ready)return;root.dataset.ready='1';
  const parent=root.closest('[data-m1-visual]'),q=s=>root.querySelector(s),L=Number(root.dataset.l);
  const values=()=>Object.fromEntries(['vt','irv','erv','rv'].map(k=>[k,Number((k==='vt'?parent?.querySelector('[data-m1-vt]'):parent?.querySelector('[data-'+k+']'))?.value||({vt:500,irv:3000,erv:1100,rv:1200}[k]))]));
  const refresh=()=>{const v=values();for(const k of ['vt','irv','erv','rv'])q('[data-given="'+k+'"]').textContent=v[k];};
  root.addEventListener('click',e=>{
   if(e.target.closest('[data-capacity-new]')){const inputs=['vt','irv','erv','rv'].map(k=>k==='vt'?parent?.querySelector('[data-m1-vt]'):parent?.querySelector('[data-'+k+']'));inputs.forEach((el,i)=>{if(el){const choices=[[350,500,650,800],[1500,2000,2500,3000],[700,1000,1300,1600],[900,1100,1300,1500]][i];el.value=choices[Math.floor(Math.random()*choices.length)];el.dispatchEvent(new Event('input',{bubbles:true}));}});root.querySelectorAll('[data-answer]').forEach(el=>{el.value='';el.removeAttribute('aria-invalid');el.style.borderColor='';});refresh();q('[data-capacity-feedback]').textContent='';}
   if(e.target.closest('[data-capacity-check]')){const expected=calculateStudyVolumes(values());let correct=0;for(const k of ['ic','frc','vc','tlc']){const input=q('[data-answer="'+k+'"]');const ok=input.value!==''&&Number(input.value)===expected[k];input.style.borderColor=ok?'#177451':'#ad473e';input.setAttribute('aria-invalid',String(!ok));if(ok)correct++;}q('[data-capacity-feedback]').textContent=tr(L,'Верно: ','Correct: ','Дұрыс: ')+correct+'/4. '+(correct===4?tr(L,'Все расчёты правильные.','All calculations are correct.','Барлық есеп дұрыс.'):tr(L,'Проверьте формулы и повторите.','Review the formulas and try again.','Формулаларды тексеріп, қайталаңыз.'));}
  });
  parent?.querySelectorAll('[data-m1-vt],[data-irv],[data-erv],[data-rv]').forEach(el=>el.addEventListener('input',refresh));refresh();
 });
}
