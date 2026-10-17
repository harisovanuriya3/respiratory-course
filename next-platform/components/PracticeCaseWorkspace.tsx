'use client';
import {useEffect,useMemo,useState} from 'react';
import type {Language} from '../lib/course';

type Choice={id:number;text:string};
type Exercise={id:number;prompt:string;explanation:string;kind:'numeric'|'choice'|'narrative';options?:Choice[];correctId?:number;expected?:number;label?:string};
const practiceAnswers=[0,4.2,.5,7,.6,.15,16,6,71.92,.5,70.23,.75,4,18,13.432,60,24,.667,15,.4,2100,63.88,15,1,11.67,540];
const copy={
  RU:{practice:'Интерактивная практика',cases:'Разбор ситуационной задачи',answer:'Ваш ответ',check:'Проверить',compare:'Сравнить с разбором',correct:'Расчёт выполнен верно.',incorrect:'Проверьте формулу, единицы и округление.',saved:'Ответ и прогресс сохраняются на этом устройстве.',next:'Следующее задание',finish:'Задания завершены',retry:'Начать заново',source:'Научное объяснение',choose:'Выберите один вариант.',write:'Сначала запишите своё физиологическое обоснование.'},
  EN:{practice:'Interactive practice',cases:'Case-problem workspace',answer:'Your answer',check:'Check answer',compare:'Compare with explanation',correct:'The calculation or decision is correct.',incorrect:'Recheck the equation, units and rounding.',saved:'Your answer and progress are saved on this device.',next:'Next task',finish:'Tasks completed',retry:'Start again',source:'Physiological explanation',choose:'Choose one option.',write:'Write your physiological reasoning before revealing the explanation.'},
  KZ:{practice:'Интерактивті практика',cases:'Ситуациялық есепті талдау',answer:'Жауабыңыз',check:'Жауапты тексеру',compare:'Талдаумен салыстыру',correct:'Есеп немесе шешім дұрыс.',incorrect:'Формуланы, өлшем бірліктерін және дөңгелектеуді тексеріңіз.',saved:'Жауап пен ілгерілеу осы құрылғыда сақталады.',next:'Келесі тапсырма',finish:'Тапсырмалар аяқталды',retry:'Қайта бастау',source:'Физиологиялық түсіндірме',choose:'Бір нұсқаны таңдаңыз.',write:'Түсіндірмені ашпас бұрын физиологиялық негіздемеңізді жазыңыз.'}
} as const;
const plain=(value:string)=>value.replace(/<[^>]+>/g,' ').replace(/&nbsp;/gi,' ').replace(/&amp;/gi,'&').replace(/&lt;/gi,'<').replace(/&gt;/gi,'>').replace(/&quot;/gi,'"').replace(/&#39;/gi,"'").replace(/\s+/g,' ').trim();
const numberValue=(value:string)=>Number(value.trim().replace(',','.').replace(/[^0-9+\-.]/g,''));

function practiceExercise(document:Document,moduleId:number):Exercise[]{
  const workshop=document.querySelector('.practice-workshop');
  if(!workshop)return[];
  const prompt=plain(workshop.querySelector(':scope > p')?.innerHTML||'');
  const label=plain(workshop.querySelector('form label')?.innerHTML||'');
  const details=workshop.querySelector('details');
  const explanation=plain(details?.querySelector('p')?.innerHTML||'');
  return prompt&&explanation?[{id:0,prompt,explanation,kind:'numeric',expected:practiceAnswers[moduleId],label}]:[];
}

function caseExercises(document:Document):Exercise[]{
  const exercises:Exercise[]=[];
  for(const field of document.querySelectorAll<HTMLElement>('fieldset')){
    const prompt=plain(field.querySelector('legend')?.innerHTML||''),raw=[...field.querySelectorAll<HTMLInputElement>('input[type=radio]')].map(input=>({id:Number(input.value),text:plain(input.closest('label')?.innerHTML||'')}));
    const buttons=[...field.querySelectorAll<HTMLButtonElement>('button[data-answer]')].map(button=>({id:Number(button.dataset.answer),text:plain(button.innerHTML)}));
    const options=raw.length?raw:buttons,correct=Number(field.dataset.answer??field.dataset.key),explanation=plain(field.querySelector('[data-explanation]')?.innerHTML||'');
    if(prompt&&options.length)exercises.push({id:exercises.length,prompt,explanation,kind:'choice',options,correctId:Number.isFinite(correct)?correct:0});
  }
  if(!exercises.length){
    const buttons=[...document.querySelectorAll<HTMLButtonElement>('button[data-choice],button[data-e11-choice],button[data-answer]')];
    if(buttons.length){const container=buttons[0].parentElement?.parentElement||buttons[0].parentElement!,prompt=plain(container.querySelector('strong,h4')?.innerHTML||[...container.querySelectorAll('p')].find(p=>p.textContent?.includes('?'))?.innerHTML||''),options=buttons.map((button,id)=>({id:Number(button.dataset.choice??button.dataset.e11Choice??button.dataset.answer??id),text:plain(button.innerHTML)})),context=plain([...container.querySelectorAll('p')].filter(p=>!p.matches('[role=status]')).at(-1)?.innerHTML||''),explanation=[options.find(option=>option.id===0)?.text,context].filter(Boolean).join(' ');exercises.push({id:0,prompt,explanation,kind:'choice',options,correctId:0})}
  }
  if(!exercises.length){
    const steps=[...document.querySelectorAll<HTMLElement>('[data-step]')];
    for(const step of steps){const prompt=plain(step.querySelector('h4,legend')?.innerHTML||''),clone=step.cloneNode(true) as HTMLElement;clone.querySelectorAll('h4,legend,button,[role=status],[data-feedback]').forEach(node=>node.remove());const explanation=plain(clone.innerHTML);if(prompt&&explanation)exercises.push({id:exercises.length,prompt,explanation,kind:'narrative'})}
  }
  if(!exercises.length){
    for(const detail of document.querySelectorAll<HTMLDetailsElement>('details')){const textarea=detail.querySelector('textarea');if(!textarea)continue;const paragraphs=[...detail.querySelectorAll('p')],prompt=plain(paragraphs[0]?.innerHTML||detail.querySelector('summary')?.innerHTML||''),explanation=plain(paragraphs.at(-1)?.innerHTML||'');if(prompt&&explanation)exercises.push({id:exercises.length,prompt,explanation,kind:'narrative'})}
  }
  return exercises;
}

export default function PracticeCaseWorkspace({moduleId,language,section,html}:{moduleId:number;language:Language;section:'practice'|'cases';html:string}){
  const c=copy[language],key=`resp-course-${section}-${moduleId}-${language}`,[index,setIndex]=useState(0),[responses,setResponses]=useState<Record<number,string|number>>({}),[checked,setChecked]=useState<Record<number,boolean>>({}),[ready,setReady]=useState(false),exercises=useMemo(()=>{if(typeof DOMParser==='undefined')return[];const document=new DOMParser().parseFromString(html,'text/html');return section==='practice'?practiceExercise(document,moduleId):caseExercises(document)},[html,moduleId,section]),exercise=exercises[index],finished=exercises.length>0&&index>=exercises.length;
  useEffect(()=>{try{const saved=JSON.parse(localStorage.getItem(key)||'null');if(saved){setIndex(Math.min(Number(saved.index)||0,exercises.length));setResponses(saved.responses||{});setChecked(saved.checked||{})}}catch{}setReady(true)},[key,exercises.length]);
  const save=(nextIndex=index,nextResponses=responses,nextChecked=checked)=>{setIndex(nextIndex);setResponses(nextResponses);setChecked(nextChecked);try{localStorage.setItem(key,JSON.stringify({index:nextIndex,responses:nextResponses,checked:nextChecked}))}catch{}};
  if(!ready||!exercise&&!finished)return <section className="card exerciseWorkspace" aria-busy="true"/>;
  const response=exercise?responses[exercise.id]:undefined,hasResponse=typeof response==='number'||Boolean(String(response??'').trim()),isCorrect=exercise?.kind==='numeric'?Math.abs(numberValue(String(response))-Number(exercise.expected))<=Math.max(.01,Math.abs(Number(exercise.expected))*.005):exercise?.kind==='choice'?response===exercise.correctId:true;
  return <section className="card exerciseWorkspace" data-exercise-section={section}><h2>{section==='practice'?c.practice:c.cases}</h2><p className="exerciseSaved">{c.saved}</p>{!finished&&exercise&&<fieldset><legend>{index+1}. {exercise.prompt}</legend>{exercise.kind==='numeric'&&<label>{exercise.label||c.answer}<input inputMode="decimal" value={String(response??'')} disabled={Boolean(checked[exercise.id]&&isCorrect)} onChange={event=>save(index,{...responses,[exercise.id]:event.target.value},{...checked,[exercise.id]:false})}/></label>}{exercise.kind==='choice'&&<>{exercise.options?.map(option=><label className="exerciseChoice" key={option.id}><input type="radio" name={`${section}-${moduleId}-${exercise.id}`} checked={response===option.id} disabled={Boolean(checked[exercise.id]&&isCorrect)} onChange={()=>save(index,{...responses,[exercise.id]:option.id},{...checked,[exercise.id]:false})}/><span>{option.text}</span></label>)}<small>{c.choose}</small></>}{exercise.kind==='narrative'&&<label>{c.answer}<textarea rows={6} value={String(response??'')} disabled={Boolean(checked[exercise.id])} onChange={event=>save(index,{...responses,[exercise.id]:event.target.value},{...checked,[exercise.id]:false})}/><small>{c.write}</small></label>}<button type="button" disabled={!hasResponse} onClick={()=>save(index,responses,{...checked,[exercise.id]:true})}>{exercise.kind==='narrative'?c.compare:c.check}</button>{checked[exercise.id]&&<div className={isCorrect?'quizCorrect':'quizIncorrect'} role="status"><strong>{isCorrect?c.correct:c.incorrect}</strong>{exercise.explanation&&<><h3>{c.source}</h3><p>{exercise.explanation}</p></>}{isCorrect&&<button type="button" onClick={()=>save(index+1)}>{index+1===exercises.length?c.finish:c.next}</button>}</div>}</fieldset>}{finished&&<><p role="status"><strong>{c.finish}</strong></p><button type="button" onClick={()=>save(0,{}, {})}>{c.retry}</button></>}</section>;
}
