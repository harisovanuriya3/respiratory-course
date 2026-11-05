import {clinicalSpirometryPanel,initClinicalSpirometryPanels} from './clinical-spirometry-interpretation.js';
import {capacityExercise,initCapacityExercises} from './capacity-exercise.js';
const tr=(L,ru,en,kz)=>[ru,en,kz][L];
export function lungCapacities({vt=500,irv=3000,erv=1100,rv=1200}={}){
 if(![vt,irv,erv,rv].every(Number.isFinite)||[vt,irv,erv,rv].some(x=>x<=0))throw new RangeError('Invalid lung volumes');
 return {vt,irv,erv,rv,ic:vt+irv,frc:erv+rv,vc:irv+vt+erv,tlc:irv+vt+erv+rv};
}
export function capacitySpirogram(L){
 return '<section class="capacity-spirogram" data-capacity-spirogram data-l="'+L+'"><h4>'+tr(L,'Полная спирограмма: лёгочные объёмы и ёмкости','Complete educational spirogram: lung volumes and capacities','Толық оқу спирограммасы: өкпе көлемдері мен сыйымдылықтары')+'</h4><p>'+tr(L,'Спокойное дыхание → максимальный вдох → максимальный выдох → возвращение к спокойному дыханию.','Tidal breathing → maximal inspiration → maximal expiration → return to tidal breathing.','Тыныш тыныс → барынша дем алу → барынша дем шығару → тыныш тынысқа оралу.')+'</p><div class="capacity-inputs"><label>IRV (mL) <output data-irv-out>3000</output><input data-irv type="range" min="1000" max="4000" step="100" value="3000"></label><label>ERV (mL) <output data-erv-out>1100</output><input data-erv type="range" min="400" max="2000" step="100" value="1100"></label><label>RV (mL) <output data-rv-out>1200</output><input data-rv type="range" min="600" max="2000" step="100" value="1200"></label></div>'+
 '<svg data-capacity-chart viewBox="0 0 760 385" role="img" aria-label="'+tr(L,'Спирограмма с VT, IRV, ERV, RV, VC, TLC, FRC и IC','Spirogram showing VT, IRV, ERV, RV, VC, TLC, FRC and IC','VT, IRV, ERV, RV, VC, TLC, FRC және IC көрсетілген спирограмма')+'"><rect x="75" y="22" width="480" height="303" fill="#fff"/><g data-capacity-grid></g><path d="M75 20V326H555" stroke="#516c72" fill="none" stroke-width="2"/><path data-capacity-wave fill="none" stroke="#087c88" stroke-width="3.5" stroke-linejoin="round"/><g data-capacity-guides></g><g data-capacity-labels></g><text x="7" y="18" font-size="13">L</text><text x="500" y="348" font-size="13">s</text></svg>'+
 '<div data-capacity-values class="capacity-values" role="status" aria-live="polite"></div><p>'+tr(L,'VT — дыхательный объём; IRV — резервный объём вдоха; ERV — резервный объём выдоха; RV — остаточный объём; VC = IRV + VT + ERV; TLC = VC + RV; FRC = ERV + RV; IC = IRV + VT. RV, FRC и TLC нельзя измерить обычной спирометрией: здесь они заданы условно.','VT tidal volume; IRV inspiratory reserve; ERV expiratory reserve; RV residual volume; VC = IRV + VT + ERV; TLC = VC + RV; FRC = ERV + RV; IC = IRV + VT. Standard spirometry cannot measure RV, FRC or TLC; these are assumed values.','VT — тыныс көлемі; IRV — дем алудың резервтік көлемі; ERV — дем шығарудың резервтік көлемі; RV — қалдық көлем; VC = IRV + VT + ERV; TLC = VC + RV; FRC = ERV + RV; IC = IRV + VT. RV, FRC және TLC қарапайым спирометриямен өлшенбейді, мұнда шартты мәндер берілген.')+'</p>'+capacityExercise(L)+clinicalSpirometryPanel(L)+'</section>';
}
export function initCapacitySpirograms(){
 document.querySelectorAll('[data-capacity-spirogram]').forEach(root=>{
 if(root.dataset.ready)return;root.dataset.ready='1';
 const q=s=>root.querySelector(s),svgNS='http://www.w3.org/2000/svg';
 const add=(parent,tag,attrs,text)=>{const node=document.createElementNS(svgNS,tag);Object.entries(attrs).forEach(([k,v])=>node.setAttribute(k,String(v)));if(text!==undefined)node.textContent=text;parent.append(node);return node;};
 const parent=root.closest('[data-m1-visual]'),vtInput=parent?.querySelector('[data-m1-vt]'),rateInput=parent?.querySelector('[data-m1-rate]');
 const update=()=>{
  const vt=Number(vtInput?.value||500),irv=Number(q('[data-irv]').value),erv=Number(q('[data-erv]').value),rv=Number(q('[data-rv]').value);
  const v=lungCapacities({vt,irv,erv,rv}),y=level=>325-285*level/Math.max(6500,v.tlc+300);
  for(const key of ['irv','erv','rv'])q('[data-'+key+'-out]').textContent=q('[data-'+key+']').value;
  const grid=q('[data-capacity-grid]'),guides=q('[data-capacity-guides]'),labels=q('[data-capacity-labels]');grid.replaceChildren();guides.replaceChildren();labels.replaceChildren();
  for(let l=0;l<=Math.ceil(v.tlc/1000);l++){const yy=y(l*1000);add(grid,'path',{d:'M75 '+yy+' H555',stroke:'#e1ebeb','stroke-width':1});add(grid,'text',{x:35,y:yy+4,'font-size':12,fill:'#3c5356'},String(l));}
  const points=[];const rate=Number(rateInput?.value||12);
  const quiet=t=>v.frc+vt*(1-Math.cos(2*Math.PI*t*rate/60))/2;
  const interp=(a,b,u)=>a+(b-a)*(u*u*(3-2*u));
  for(let i=0;i<=500;i++){const t=i*20/500;let level;
   if(t<7)level=quiet(t);
   else if(t<10)level=interp(v.frc,v.tlc,(t-7)/3);
   else if(t<12)level=v.tlc;
   else if(t<15)level=interp(v.tlc,v.rv,(t-12)/3);
   else if(t<17)level=interp(v.rv,v.frc,(t-15)/2);
   else level=quiet(t-17);
   points.push((i?'L':'M')+(75+t*24).toFixed(2)+' '+y(level).toFixed(2));
  }
  q('[data-capacity-wave]').setAttribute('d',points.join(' '));
  const levels=[['TLC',v.tlc],['FRC',v.frc],['RV',v.rv]];
  for(const [name,level] of levels){const yy=y(level);add(guides,'path',{d:'M555 '+yy+' H605',stroke:'#9baeb0','stroke-dasharray':'4 3'});add(labels,'text',{x:610,y:yy+4,'font-size':13,fill:'#173e38'},name);}
  const spans=[['IRV',v.frc+vt,v.tlc,630],['VT',v.frc,v.frc+vt,665],['ERV',v.rv,v.frc,630],['VC',v.rv,v.tlc,715]];
  for(const [name,lo,hi,x] of spans){const a=y(lo),b=y(hi);add(guides,'path',{d:'M'+x+' '+a+' V'+b+' M'+(x-5)+' '+a+' H'+(x+5)+' M'+(x-5)+' '+b+' H'+(x+5),stroke:'#276d74','stroke-width':1.5,fill:'none'});add(labels,'text',{x:x+5,y:(a+b)/2+4,'font-size':12,fill:'#173e38'},name);}
  for(let t=0;t<=20;t+=5)add(labels,'text',{x:75+t*24-5,y:346,'font-size':12},String(t));
  q('[data-capacity-values]').textContent='VT '+(v.vt/1000).toFixed(2)+' L · IRV '+(v.irv/1000).toFixed(2)+' L · ERV '+(v.erv/1000).toFixed(2)+' L · RV '+(v.rv/1000).toFixed(2)+' L · VC '+(v.vc/1000).toFixed(2)+' L · TLC '+(v.tlc/1000).toFixed(2)+' L · FRC '+(v.frc/1000).toFixed(2)+' L · IC '+(v.ic/1000).toFixed(2)+' L';
 };
 ['irv','erv','rv'].forEach(k=>q('[data-'+k+']').addEventListener('input',update));
 vtInput?.addEventListener('input',update);rateInput?.addEventListener('input',update);
 root.addEventListener('click',e=>{if(e.target.closest('[data-capacity-reset]'))update();});
 update();
 });
 initCapacityExercises();
 initClinicalSpirometryPanels();
}
