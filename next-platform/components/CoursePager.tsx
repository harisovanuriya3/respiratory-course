import Link from 'next/link';
import type {Language,SectionId} from '../lib/course';
import {modules,sectionIds,sectionNames} from '../lib/course';
const copy={
 RU:{previous:'← Предыдущий подраздел',next:'Следующий подраздел →',contents:'Все модули',nextModule:'Перейти к следующему модулю →',module:'Модуль'},
 EN:{previous:'← Previous section',next:'Next section →',contents:'All modules',nextModule:'Go to next module →',module:'Module'},
 KZ:{previous:'← Алдыңғы бөлімше',next:'Келесі бөлімше →',contents:'Барлық модульдер',nextModule:'Келесі модульге өту →',module:'Модуль'}
} as const;
export default function CoursePager({moduleId,section,language}:{moduleId:number;section:SectionId;language:Language}){
 const c=copy[language],i=sectionIds.indexOf(section);
 const sectionLink=(id:SectionId)=>`/modules/${moduleId}/${id}?lang=${language}`;
 const nextModule=modules.find(m=>m.id===moduleId+1);
 return <nav className="coursePager" aria-label={language==='RU'?'Навигация внутри модуля':language==='EN'?'Within-module navigation':'Модуль ішіндегі навигация'}>
  <div>{i>0&&<Link rel="prev" href={sectionLink(sectionIds[i-1])}><small>{c.previous}</small><strong>{sectionNames[sectionIds[i-1]][language]}</strong></Link>}</div>
  <Link className="courseContentsLink" href={`/?lang=${language}`}>{c.contents}</Link>
  <div>{i<sectionIds.length-1?<Link rel="next" href={sectionLink(sectionIds[i+1])}><small>{c.next}</small><strong>{sectionNames[sectionIds[i+1]][language]}</strong></Link>:nextModule?<Link href={`/modules/${nextModule.id}/objectives?lang=${language}`}><small>{c.nextModule}</small><strong>{c.module} {nextModule.id} · {nextModule.title[language]}</strong></Link>:null}</div>
 </nav>;
}
