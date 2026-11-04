const tr=(L,ru,en,kz)=>[ru,en,kz][L];
export function forcedExpiration(fvc,ratio){
 if(!Number.isFinite(fvc)||!Number.isFinite(ratio)||fvc<=0||ratio<=0||ratio>=1)throw new RangeError('Invalid parameters');
 const tau=-1/Math.log(1-ratio);
 const volume=t=>fvc*(1-Math.exp(-t/tau));
 return {fvc,fev1:volume(1),ratio,volume,tau};
}
export function forcedExpirationPanel(L){
 return '<section class="forced-expiration-panel" data-forced-panel data-language="'+L+'"><h4>'+tr(L,'Спирометрия: форсированный выдох','Spirometry: forced expiration','Спирометрия: күшті дем шығару')+'</h4><p>'+tr(L,'После спокойного дыхания выполните отдельную учебную пробу форсированного выдоха. Выберите физиологический профиль и сравните FVC, FEV₁ и FEV₁/FVC.','After quiet breathing, run a separate educational forced-expiration maneuver. Compare FVC, FEV₁ and FEV₁/FVC across profiles.','Тыныш тыныстан кейін күшті дем шығару сынағын орындаңыз. FVC, FEV₁ және FEV₁/FVC көрсеткіштерін салыстырыңыз.')+'</p>'+
 '<div class="forced-profiles"><button type="button" data-forced-profile="normal">'+tr(L,'Условная норма','Illustrative normal','Шартты қалыпты')+'</button> <button type="button" data-forced-profile="obstructive">'+tr(L,'Обструктивный профиль','Obstructive pattern','Обструктивті үлгі')+'</button> <button type="button" data-forced-profile="restrictive">'+tr(L,'Сниженная FVC','Reduced FVC','FVC төмендеген')+'</button></div>'+
 '<div class="forced-controls"><label>FVC (L) <output data-fvc-output>4.0</output><input type="range" data-fvc min="1.5" max="6" step=".1" value="4"></label><label>FEV₁/FVC (%) <output data-ratio-output>80</output><input type="range" data-ratio min="35" max="90" step="1" value="80"></label></div>'+
 '<svg data-forced-graph viewBox="0 0 600 255" role="img" aria-label="'+tr(L,'Объём форсированного выдоха за шесть секунд','Forced expired volume over six seconds','Алты секундтағы күшті дем шығару көлемі')+'"><path d="M55 20V210H565" stroke="currentColor" stroke-width="2" fill="none"/><path d="M140 20V210" stroke="#c87a32" stroke-dasharray="5 5" fill="none"/><path data-forced-wave stroke="#146d79" stroke-width="4" fill="none"/><circle data-forced-one r="5" fill="#b45d20"/><text x="8" y="22" font-size="13">L</text><text x="125" y="235" font-size="12">1 s</text><text x="536" y="235" font-size="12">6 s</text><text x="15" y="210" font-size="12">0</text><text x="13" y="35" font-size="12" data-fvc-axis>4.0</text></svg>'+
 '<p role="status" aria-live="polite" data-forced-results></p><p>'+tr(L,'Модель использует экспоненциальную кривую для демонстрации. Обструкцию нельзя диагностировать по одному условному отношению: требуются качество манёвра, повторяемость, должные значения и нижняя граница нормы. Сниженная FVC не подтверждает рестрикцию без TLC.','This is an illustrative exponential curve. Obstruction cannot be diagnosed from an illustrative ratio alone: maneuver quality, repeatability, reference values and lower limit of normal are required. Low FVC alone does not confirm restriction without TLC.','Бұл экспоненциалдық оқу қисығы. Обструкцияны тек шартты қатынаспен анықтауға болмайды: сынақ сапасы, қайталануы, референстік мәндер және қалыптың төменгі шегі қажет. Төмен FVC TLC өлшемінсіз рестрикцияны дәлелдемейді.')+'</p></section>';
}
export function initForcedExpirationPanels(){
 document.querySelectorAll('[data-forced-panel]').forEach(root=>{
  if(root.dataset.ready)return;root.dataset.ready='yes';
  const q=s=>root.querySelector(s),fvc=q('[data-fvc]'),ratio=q('[data-ratio]');
  const update=()=>{
   const model=forcedExpiration(Number(fvc.value),Number(ratio.value)/100);
   q('[data-fvc-output]').textContent=model.fvc.toFixed(1);
   q('[data-ratio-output]').textContent=ratio.value;
   const d=Array.from({length:121},(_,i)=>{const t=i/20;return (i?'L':'M')+(55+85*t).toFixed(2)+' '+(210-180*model.volume(t)/6).toFixed(2)}).join(' ');
   q('[data-forced-wave]').setAttribute('d',d);
   q('[data-forced-one]').setAttribute('cx','140');
   q('[data-forced-one]').setAttribute('cy',(210-180*model.fev1/6).toFixed(2));
   q('[data-fvc-axis]').textContent=model.fvc.toFixed(1);
   q('[data-forced-results]').textContent='FVC = '+model.fvc.toFixed(2)+' L · FEV₁ = '+model.fev1.toFixed(2)+' L · FEV₁/FVC = '+(100*model.ratio).toFixed(0)+'%';
  };
  const profiles={normal:[4,.8],obstructive:[4,.48],restrictive:[2.5,.84]};
  root.querySelectorAll('[data-forced-profile]').forEach(btn=>btn.addEventListener('click',()=>{const values=profiles[btn.dataset.forcedProfile];fvc.value=values[0];ratio.value=Math.round(values[1]*100);update();}));
  fvc.addEventListener('input',update);ratio.addEventListener('input',update);update();
 });
}
