'use client';
import {useState} from 'react';
import type {Language} from '../lib/course';
import {calculateVentilation,spirogramPath} from '../lib/ventilation-model';

const copy={
  RU:{m7:'Интерактивная спирограмма и вентиляция',m8:'Лаборатория: эффективность вентиляции',intro:'Изменяйте дыхательный объём, частоту и мёртвое пространство. Сравните минутную и альвеолярную вентиляцию.',time:'Время →',dead:'Мёртвое пространство',alveolar:'Газообменная часть',limit:'Учебная модель: мёртвое пространство фиксировано на один вдох; утечки и неоднородность V/Q не учитываются.'},
  EN:{m7:'Interactive spirogram and ventilation',m8:'Lab: ventilation efficiency',intro:'Adjust tidal volume, frequency and dead space. Compare minute and alveolar ventilation.',time:'Time →',dead:'Dead space',alveolar:'Gas-exchange portion',limit:'Teaching model: dead space is fixed per breath; leaks and V/Q inequality are not represented.'},
  KZ:{m7:'Интерактивті спирограмма және вентиляция',m8:'Зертхана: вентиляция тиімділігі',intro:'Тыныстық көлемді, жиілікті және өлі кеңістікті өзгертіңіз. Минуттық және альвеолалық вентиляцияны салыстырыңыз.',time:'Уақыт →',dead:'Өлі кеңістік',alveolar:'Газ алмасу бөлігі',limit:'Оқу моделі: әр демде өлі кеңістік тұрақты; ауа ағуы мен V/Q әркелкілігі ескерілмейді.'}
};
export default function VentilationMedia({language,moduleId}:{language:Language;moduleId:7|8}){
  const limits=moduleId===7?{vt:[250,1000,50],f:[6,30,1],vd:[100,250,10]}:{vt:[200,1000,25],f:[6,35,1],vd:[75,250,5]};
  const [vt,setVt]=useState(500),[f,setF]=useState(12),[vd,setVd]=useState(150),t=copy[language],result=calculateVentilation(vt,f,vd);
  return <section className="card ventilationMedia"><h2>{moduleId===7?t.m7:t.m8}</h2><p>{t.intro}</p><div className="lab-controls">
    <label>VT (mL): <input type="range" min={limits.vt[0]} max={limits.vt[1]} step={limits.vt[2]} value={vt} onChange={e=>setVt(Number(e.target.value))}/><output>{vt}</output></label>
    <label>f (/min): <input type="range" min={limits.f[0]} max={limits.f[1]} step={limits.f[2]} value={f} onChange={e=>setF(Number(e.target.value))}/><output>{f}</output></label>
    <label>VD (mL): <input type="range" min={limits.vd[0]} max={limits.vd[1]} step={limits.vd[2]} value={vd} onChange={e=>setVd(Number(e.target.value))}/><output>{vd}</output></label>
  </div>{moduleId===7?<svg viewBox="0 0 640 220" role="img" aria-label={t.m7}><path d="M45 15V185H620" stroke="#4d7771" strokeWidth="2" fill="none"/><g stroke="#bfdcd5"><path d="M45 55H620M45 100H620M45 145H620"/></g><path d={spirogramPath(vt,f)} stroke="#087c91" strokeWidth="4" fill="none"/><text x="50" y="208">{t.time}</text><text x="50" y="28">VT (mL)</text></svg>:<svg viewBox="0 0 580 110" role="img" aria-label={t.m8}><rect x="15" y="28" width="550" height="42" rx="8" fill="#dceaf0"/><rect x="15" y="28" width={550*result.deadSpaceFraction} height="42" rx="8" fill="#e39b61"><title>{t.dead}</title></rect><rect x={15+550*result.deadSpaceFraction} y="28" width={550*(1-result.deadSpaceFraction)} height="42" rx="8" fill="#42b7a4"><title>{t.alveolar}</title></rect><text x="15" y="18">VD / VT</text></svg>}
  <p role="status"><strong>V̇E:</strong> {result.minuteVentilation.toFixed(2)} L/min · <strong>V̇A:</strong> {result.alveolarVentilation.toFixed(2)} L/min · <strong>VD/VT:</strong> {(result.deadSpaceFraction*100).toFixed(1)}%</p><p>{t.limit}</p></section>;
}
