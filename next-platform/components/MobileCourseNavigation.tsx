'use client';
import {useRouter} from 'next/navigation';
import type {Language,SectionId} from '../lib/course';
import {modules,sectionIds,sectionNames} from '../lib/course';

const text={
 RU:{module:'Модуль',section:'Подраздел',previous:'← Назад',next:'Далее →',go:'Быстрый переход'},
 EN:{module:'Module',section:'Section',previous:'← Previous',next:'Next →',go:'Quick navigation'},
 KZ:{module:'Модуль',section:'Бөлімше',previous:'← Артқа',next:'Алға →',go:'Жылдам ауысу'}
} as const;
export default function MobileCourseNavigation({moduleId,active,language}:{moduleId:number;active:SectionId;language:Language}){
 const router=useRouter(),c=text[language],i=sectionIds.indexOf(active);
 const to=(id:number,section:SectionId)=>router.push(`/modules/${id}/${section}?lang=${language}`);
 const index=(moduleId-1)*sectionIds.length+i;
 const jump=(next:number)=>{if(next<0||next>=modules.length*sectionIds.length)return;to(Math.floor(next/sectionIds.length)+1,sectionIds[next%sectionIds.length])};
 return <nav className="mobileCourseNav" aria-label={c.go}>
  <div className="mobileCourseSelectors">
   <label>{c.module}<select aria-label={c.module} value={moduleId} onChange={e=>to(Number(e.target.value),active)}>
    {modules.map(m=><option key={m.id} value={m.id}>{String(m.id).padStart(2,'0')} · {m.title[language]}</option>)}
   </select></label>
   <label>{c.section}<select aria-label={c.section} value={active} onChange={e=>to(moduleId,e.target.value as SectionId)}>
    {sectionIds.map((s,n)=><option key={s} value={s}>{String(n+1).padStart(2,'0')} · {sectionNames[s][language]}</option>)}
   </select></label>
  </div>
  <div className="mobileCourseSteps"><button type="button" disabled={index===0} onClick={()=>jump(index-1)}>{c.previous}</button><span aria-live="polite">{i+1} / {sectionIds.length}</span><button type="button" disabled={index===modules.length*sectionIds.length-1} onClick={()=>jump(index+1)}>{c.next}</button></div>
 </nav>;
}
