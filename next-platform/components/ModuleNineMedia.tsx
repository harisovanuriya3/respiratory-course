'use client';

import Image from 'next/image';
import {useState} from 'react';
import type {CSSProperties} from 'react';
import type {Language} from '../lib/course';
import {calculateRelativeDiffusion} from '../lib/fick-model';

const copy={
  RU:{title:'Лаборатория Фика: перенос O₂ через аэрогематический барьер',intro:'Исследуйте, как площадь поверхности, толщина барьера и градиент парциального давления определяют относительный поток O₂. Модель нормирована к исходным условиям и не рассчитывает клиническую DLCO.',figureTitle:'Альвеола и окружающая капиллярная сеть',figureAlt:'Реалистичная учебная иллюстрация альвеолы, оплетённой капиллярами, с увеличенным срезом аэрогематического барьера и эритроцитами.',illustration:'Авторская учебная иллюстрация, не гистологическая микрофотография.',alveolus:'Альвеолярный газ',barrier:'Аэрогематический барьер',capillary:'Капиллярная кровь',area:'Площадь поверхности',thick:'Толщина барьера',grad:'ΔPO₂',result:'Относительный поток O₂',areaHelp:'Уменьшается при утрате функционирующих альвеол.',thickHelp:'Увеличивается при интерстициальном отёке или фиброзе.',gradHelp:'Разность альвеолярного и капиллярного PO₂ в этой упрощённой модели.',law:'Закон Фика',lawText:'V̇O₂ ∝ (A / T) × ΔPO₂',explanation:'При неизменных свойствах газа поток прямо пропорционален площади A и градиенту ΔPO₂, но обратно пропорционален толщине T. Реальный перенос также зависит от связывания O₂ гемоглобином, времени капиллярного транзита и неоднородности V̇A/Q̇.'},
  EN:{title:'Fick laboratory: O₂ transfer across the blood–gas barrier',intro:'Explore how surface area, barrier thickness and partial-pressure gradient determine relative O₂ flux. The model is normalized to baseline and does not calculate clinical DLCO.',figureTitle:'Alveolus and surrounding capillary network',figureAlt:'Realistic teaching illustration of an alveolus wrapped in capillaries, with an enlarged blood–gas barrier cutaway and red blood cells.',illustration:'Original teaching illustration, not a histology micrograph.',alveolus:'Alveolar gas',barrier:'Blood–gas barrier',capillary:'Capillary blood',area:'Surface area',thick:'Barrier thickness',grad:'ΔPO₂',result:'Relative O₂ flux',areaHelp:'Falls when functioning alveolar surface is lost.',thickHelp:'Rises with interstitial oedema or fibrosis.',gradHelp:'Alveolar-to-capillary PO₂ difference in this simplified model.',law:"Fick's law",lawText:'V̇O₂ ∝ (A / T) × ΔPO₂',explanation:'With gas properties held constant, flux is proportional to area A and gradient ΔPO₂, and inversely proportional to thickness T. Actual transfer also depends on haemoglobin binding, capillary transit time and V̇A/Q̇ heterogeneity.'},
  KZ:{title:'Фик зертханасы: O₂-нің ауа–қан тосқауылы арқылы тасымалдануы',intro:'Бет ауданы, тосқауыл қалыңдығы және парциалдық қысым градиенті O₂ салыстырмалы ағынын қалай өзгертетінін зерттеңіз. Модель бастапқы жағдайға нормаланған және клиникалық DLCO-ны есептемейді.',figureTitle:'Альвеола және оны қоршаған капиллярлар торы',figureAlt:'Капиллярлармен қоршалған альвеоланың, ұлғайтылған ауа–қан тосқауылы кесіндісінің және эритроциттердің шынайы оқу иллюстрациясы.',illustration:'Авторлық оқу иллюстрациясы, гистологиялық микрофотография емес.',alveolus:'Альвеолалық газ',barrier:'Ауа–қан тосқауылы',capillary:'Капиллярлық қан',area:'Бет ауданы',thick:'Тосқауыл қалыңдығы',grad:'ΔPO₂',result:'O₂ салыстырмалы ағыны',areaHelp:'Қызмет ететін альвеолалық бет жоғалғанда азаяды.',thickHelp:'Интерстициялық ісіну немесе фиброз кезінде артады.',gradHelp:'Осы қарапайым модельдегі альвеола мен капилляр PO₂ айырмасы.',law:'Фик заңы',lawText:'V̇O₂ ∝ (A / T) × ΔPO₂',explanation:'Газ қасиеттері тұрақты болса, ағын A ауданы мен ΔPO₂ градиентіне тура, T қалыңдығына кері пропорционал. Нақты тасымал гемоглобиннің O₂-мен байланысуына, капиллярлық транзит уақытына және V̇A/Q̇ біркелкі еместігіне де тәуелді.'}
} as const;

export default function ModuleNineMedia({language}:{language:Language}){
  const [area,setArea]=useState(100),[thick,setThick]=useState(100),[grad,setGrad]=useState(60);
  const t=copy[language],result=calculateRelativeDiffusion(area,thick,grad);
  const particleCount=Math.max(2,Math.min(12,Math.round(result.relativeFlux*6)));
  const barrierScale=Math.max(.7,Math.min(2.1,result.barrierWidth/32));
  return <section className="card gasExchangeAtlas">
    <header><p className="atlasEyebrow">Media 09 · blood–gas barrier</p><h2>{t.title}</h2><p>{t.intro}</p></header>
    <figure className="alveolusFigure"><div className="alveolusImageFrame">
      <Image src="/visuals/alveolus-capillary-atlas.png" alt={t.figureAlt} width={1536} height={1024} sizes="(max-width: 760px) 100vw, 900px"/>
      <span className="anatomyLabel labelAlveolus">{t.alveolus}</span><span className="anatomyLabel labelBarrier">{t.barrier}</span><span className="barrierIndicator" style={{transform:`translateY(-50%) scaleX(${barrierScale})`}} aria-hidden="true"/><span className="anatomyLabel labelCapillary">{t.capillary}</span>
      <div className="gasFlux" aria-hidden="true">{Array.from({length:particleCount},(_,index)=><i key={index} style={{'--particle':index} as CSSProperties}/>)}</div>
    </div><figcaption><strong>{t.figureTitle}.</strong> {t.illustration}</figcaption></figure>
    <div className="lab-controls gasExchangeControls">
      <label>{t.area}: <output>{area}%</output><input aria-describedby="area-help" type="range" min="30" max="150" value={area} onChange={event=>setArea(+event.target.value)}/><small id="area-help">{t.areaHelp}</small></label>
      <label>{t.thick}: <output>{thick}%</output><input aria-describedby="thickness-help" type="range" min="50" max="300" value={thick} onChange={event=>setThick(+event.target.value)}/><small id="thickness-help">{t.thickHelp}</small></label>
      <label>{t.grad}: <output>{grad} mmHg</output><input aria-describedby="gradient-help" type="range" min="20" max="100" value={grad} onChange={event=>setGrad(+event.target.value)}/><small id="gradient-help">{t.gradHelp}</small></label>
    </div>
    <div className="fickResult" role="status" aria-live="polite"><span>{t.result}</span><strong>{result.relativeFlux.toFixed(2)} ×</strong><meter min="0" max="5" value={Math.min(5,result.relativeFlux)}>{result.relativeFlux.toFixed(2)}</meter></div>
    <aside className="fickExplanation"><h3>{t.law}</h3><p className="formula" aria-label={t.lawText}>{t.lawText}</p><p>{t.explanation}</p></aside>
    <svg className="visuallyHidden" viewBox="0 0 10 10" role="img" aria-label={t.figureAlt}><title>{t.figureTitle}</title><path className="oxygenFluxPath" d="M1 5H9"/></svg>
  </section>;
}
