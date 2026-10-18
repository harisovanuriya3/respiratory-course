'use client';
import {useState,type ReactNode} from 'react';
import type {Language} from '../lib/course';
import ExperimentPrediction from './ExperimentPrediction';

const copy={
  RU:{ready:'Изменение физиологических параметров',readyHelp:'Прогноз зафиксирован. Измените хотя бы один параметр модели и наблюдайте вычисляемый результат, график или схему.',waiting:'Сначала зафиксируйте прогноз, чтобы открыть эксперимент.',reflection:'Наблюдение и физиологическое объяснение',observation:'Что изменилось в результате?',comparison:'Сравнение с прогнозом',options:['Выберите','Результат совпал с прогнозом','Совпал частично','Не совпал'],explanation:'Объясните причинно-следственную связь с опорой на формулу и физиологию.',complete:'Наблюдение, сравнение и объяснение заполнены.'},
  EN:{ready:'Change physiological parameters',readyHelp:'The prediction is locked. Change at least one model parameter and observe the calculated result, graph, or diagram.',waiting:'Lock a prediction first to open the experiment.',reflection:'Observation and physiological explanation',observation:'What changed in the result?',comparison:'Comparison with the prediction',options:['Select','The result matched the prediction','Partly matched','Did not match'],explanation:'Explain the causal relationship using the equation and physiology.',complete:'Observation, comparison, and explanation are complete.'},
  KZ:{ready:'Физиологиялық параметрлерді өзгерту',readyHelp:'Болжам бекітілді. Модельдің кемінде бір параметрін өзгертіп, есептелген нәтижені, графикті немесе сызбаны бақылаңыз.',waiting:'Тәжірибені ашу үшін алдымен болжамды бекітіңіз.',reflection:'Бақылау және физиологиялық түсіндіру',observation:'Нәтижеде не өзгерді?',comparison:'Болжаммен салыстыру',options:['Таңдаңыз','Нәтиже болжамға сәйкес келді','Ішінара сәйкес келді','Сәйкес келмеді'],explanation:'Формула мен физиологияға сүйеніп, себеп-салдар байланысын түсіндіріңіз.',complete:'Бақылау, салыстыру және түсіндіру толтырылды.'}
};

export default function InteractiveLabFlow({language,moduleId,children,visualFirst=false}:{language:Language;moduleId:number;children:ReactNode;visualFirst?:boolean}){
  const [predictionLocked,setPredictionLocked]=useState(false),[changed,setChanged]=useState(false),[observation,setObservation]=useState(''),[comparison,setComparison]=useState(''),[explanation,setExplanation]=useState(''),t=copy[language],showVisualFirst=visualFirst;
  const complete=changed&&observation.trim()&&comparison&&explanation.trim();
  const experiment=<section aria-labelledby={`experiment-${moduleId}`}><h2 id={`experiment-${moduleId}`} className="visuallyHidden">{t.ready}</h2>{predictionLocked&&<p className="experimentInstruction">{t.readyHelp}</p>}<div onChange={()=>setChanged(true)}>{children}</div></section>;
  return <>
    {showVisualFirst&&experiment}
    <ExperimentPrediction language={language} moduleId={moduleId} onLocked={()=>setPredictionLocked(true)}/>
    {!showVisualFirst&&(!predictionLocked?<p className="card experimentWaiting" role="status">{t.waiting}</p>:experiment)}
    {predictionLocked&&<section className="card experimentReflection" aria-labelledby={`reflection-${moduleId}`}><h2 id={`reflection-${moduleId}`}>{t.reflection}</h2><fieldset disabled={!changed}><label htmlFor={`observation-${moduleId}`}>{t.observation}</label><textarea id={`observation-${moduleId}`} rows={3} value={observation} onChange={e=>setObservation(e.target.value)}/><label htmlFor={`comparison-${moduleId}`}>{t.comparison}</label><select id={`comparison-${moduleId}`} value={comparison} onChange={e=>setComparison(e.target.value)}>{t.options.map((option,index)=><option key={option} value={index?option:''}>{option}</option>)}</select><label htmlFor={`explanation-${moduleId}`}>{t.explanation}</label><textarea id={`explanation-${moduleId}`} rows={4} value={explanation} onChange={e=>setExplanation(e.target.value)}/></fieldset>{complete&&<p role="status">{t.complete}</p>}</section>}
  </>;
}
