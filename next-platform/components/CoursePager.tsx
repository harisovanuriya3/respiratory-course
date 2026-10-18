import Link from 'next/link';
import type {Language,SectionId} from '../lib/course';
import {modules,sectionIds,sectionNames} from '../lib/course';

const copy={
  RU:{previous:'Предыдущий раздел',next:'Следующий раздел',previousModule:'Последний раздел предыдущего модуля',nextModule:'Первый раздел следующего модуля',modules:'Навигация по 25 модулям',module:'Модуль',contents:'Оглавление',modulesTitle:'Выбор модуля (01–25)'},
  EN:{previous:'Previous section',next:'Next section',previousModule:'Last section of previous module',nextModule:'First section of next module',modules:'Navigation across 25 modules',module:'Module',contents:'Contents',modulesTitle:'Choose a module (01–25)'},
  KZ:{previous:'Алдыңғы бөлімше',next:'Келесі бөлімше',previousModule:'Алдыңғы модульдің соңғы бөлімшесі',nextModule:'Келесі модульдің бірінші бөлімшесі',modules:'25 модуль бойынша навигация',module:'Модуль',contents:'Мазмұны',modulesTitle:'Модульді таңдау (01–25)'}
} as const;

export default function CoursePager({moduleId,section,language}:{moduleId:number;section:SectionId;language:Language}){
  const c=copy[language],sectionIndex=sectionIds.indexOf(section),absolute=(moduleId-1)*sectionIds.length+sectionIndex,total=modules.length*sectionIds.length;
  const route=(index:number)=>{const nextModule=Math.floor(index/sectionIds.length)+1,nextSection=sectionIds[index%sectionIds.length];return{href:`/modules/${nextModule}/${nextSection}?lang=${language}`,label:`${c.module} ${nextModule} · ${sectionNames[nextSection][language]}`,moduleId:nextModule}};
  const previous=absolute>0?route(absolute-1):null,next=absolute<total-1?route(absolute+1):null;
  return <>
    <div className="moduleRailBlock">
      <p className="moduleRailTitle">{c.modulesTitle}</p>
      <nav className="moduleRail" aria-label={c.modules}>{modules.map(item=><Link key={item.id} aria-current={item.id===moduleId?'location':undefined} title={item.title[language]} aria-label={`${c.module} ${item.id}: ${item.title[language]}`} href={`/modules/${item.id}/objectives?lang=${language}`}>{String(item.id).padStart(2,'0')}</Link>)}</nav>
    </div>
    <nav className="coursePager" aria-label={`${c.previous} / ${c.next}`}>
      <div>{previous&&<Link rel="prev" href={previous.href}><small>← {previous.moduleId!==moduleId?c.previousModule:c.previous}</small><strong>{previous.label}</strong></Link>}</div>
      <Link className="courseContentsLink" href={`/?lang=${language}`}>{c.contents}</Link>
      <div>{next&&<Link rel="next" href={next.href}><small>{next.moduleId!==moduleId?c.nextModule:c.next} →</small><strong>{next.label}</strong></Link>}</div>
    </nav>
  </>;
}
