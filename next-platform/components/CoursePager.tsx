import Link from 'next/link';
import type {Language,SectionId} from '../lib/course';
import {modules,sectionIds,sectionNames} from '../lib/course';

const copy={
  RU:{previous:'Предыдущий',next:'Следующий',modules:'Навигация между 25 модулями',module:'Модуль',contents:'Оглавление'},
  EN:{previous:'Previous',next:'Next',modules:'Navigation across 25 modules',module:'Module',contents:'Contents'},
  KZ:{previous:'Алдыңғы',next:'Келесі',modules:'25 модуль бойынша навигация',module:'Модуль',contents:'Мазмұны'}
} as const;

export default function CoursePager({moduleId,section,language}:{moduleId:number;section:SectionId;language:Language}){
  const c=copy[language],sectionIndex=sectionIds.indexOf(section),absolute=(moduleId-1)*sectionIds.length+sectionIndex,total=modules.length*sectionIds.length;
  const route=(index:number)=>{const nextModule=Math.floor(index/sectionIds.length)+1,nextSection=sectionIds[index%sectionIds.length];return{href:`/modules/${nextModule}/${nextSection}?lang=${language}`,label:`${c.module} ${nextModule} · ${sectionNames[nextSection][language]}`}};
  const previous=absolute>0?route(absolute-1):null,next=absolute<total-1?route(absolute+1):null;
  return <>
    <nav className="moduleRail" aria-label={c.modules}>{modules.map(item=><Link key={item.id} aria-current={item.id===moduleId?'location':undefined} title={item.title[language]} href={`/modules/${item.id}/objectives?lang=${language}`}>{String(item.id).padStart(2,'0')}</Link>)}</nav>
    <nav className="coursePager" aria-label={`${c.previous} / ${c.next}`}>
      <div>{previous&&<Link rel="prev" href={previous.href}><small>← {c.previous}</small><strong>{previous.label}</strong></Link>}</div>
      <Link className="courseContentsLink" href={`/?lang=${language}`}>{c.contents}</Link>
      <div>{next&&<Link rel="next" href={next.href}><small>{c.next} →</small><strong>{next.label}</strong></Link>}</div>
    </nav>
  </>;
}
