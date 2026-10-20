'use client';
import {useRouter} from 'next/navigation';
import type {Language,SectionId} from '../lib/course';
import {modules,sectionIds,sectionNames} from '../lib/course';
const text={
 RU:{module:'Выберите модуль',section:'Выберите подраздел',previous:'← Предыдущий подраздел',next:'Следующий подраздел →',go:'Переход к модулю и подразделу',position:'Подраздел'},
 EN:{module:'Choose module',section:'Choose section',previous:'← Previous section',next:'Next section →',go:'Module and section navigation',position:'Section'},
 KZ:{module:'Модульді таңдаңыз',section:'Бөлімшені таңдаңыз',previous:'← Алдыңғы бөлімше',next:'Келесі бөлімше →',go:'Модуль мен бөлімшеге өту',position:'Бөлімше'}
} as const;
export default function MobileCourseNavigation({moduleId,active,language}:{moduleId:number;active:SectionId;language:Language}){
 const router=useRouter(),c=text[language],i=sectionIds.indexOf(active);
 const to=(id:number,section:SectionId)=>router.push(`/modules/${id}/${section}?lang=${language}`);
 return <nav className="mobileCourseNav" aria-label={c.go}>
  <div className="mobileCourseSelectors">
   <label>{c.module}<select aria-label={c.module} value={moduleId} onChange={e=>to(Number(e.target.value),'objectives')}>
    {modules.map(m=><option key={m.id} value={m.id}>{String(m.id).padStart(2,'0')} · {m.title[language]}</option>)}
   </select></label>
   <label>{c.section}<select aria-label={c.section} value={active} onChange={e=>to(moduleId,e.target.value as SectionId)}>
    {sectionIds.map((s,n)=><option key={s} value={s}>{String(n+1).padStart(2,'0')} · {sectionNames[s][language]}</option>)}
   </select></label>
  </div>
  <div className="mobileCourseSteps"><button type="button" disabled={i===0} onClick={()=>to(moduleId,sectionIds[i-1])}>{c.previous}</button><span aria-live="polite">{c.position} {i+1}/{sectionIds.length}</span><button type="button" disabled={i===sectionIds.length-1} onClick={()=>to(moduleId,sectionIds[i+1])}>{c.next}</button></div>
 </nav>;
}
