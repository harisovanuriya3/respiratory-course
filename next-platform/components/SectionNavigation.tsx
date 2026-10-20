'use client';
import {useRef,useState} from 'react';
import Link from 'next/link';
import type {Language,ModuleRecord,SectionId} from '../lib/course';
import {modules,sectionNames} from '../lib/course';

const copy={
 RU:{title:'Навигация по курсу',open:'Открыть модули и подразделы',module:'Модуль',here:'Сейчас',home:'Все модули',start:'Начало модуля'},
 EN:{title:'Course navigation',open:'Open modules and sections',module:'Module',here:'You are here',home:'All modules',start:'Module start'},
 KZ:{title:'Курс навигациясы',open:'Модульдер мен бөлімшелерді ашу',module:'Модуль',here:'Қазір',home:'Барлық модульдер',start:'Модуль басы'}
} as const;
export default function SectionNavigation({module,active,language}:{module:ModuleRecord;active:SectionId;language:Language}){
 const c=copy[language], [expanded,setExpanded]=useState(module.id),mobile=useRef<HTMLDetailsElement>(null);
 const entries=<><div className="courseNavLocation"><strong>{c.title}</strong><span>{c.here}: {String(module.id).padStart(2,'0')} / 25 · {sectionNames[active][language]}</span></div>
 <nav className="courseModuleList" aria-label={c.title}>{modules.map(m=><section key={m.id} className={m.id===module.id?'courseModuleItem isCurrent':'courseModuleItem'}>
  <button type="button" className="courseModuleToggle" aria-expanded={expanded===m.id} onClick={()=>setExpanded(v=>v===m.id?0:m.id)}>
   <span className="courseModuleNumber">{String(m.id).padStart(2,'0')}</span><span className="courseModuleName">{m.title[language]}</span><span aria-hidden="true">{expanded===m.id?'−':'+'}</span>
  </button>
  {expanded===m.id&&<div className="courseModuleSections"><Link className="courseModuleStart" href={`/modules/${m.id}/objectives?lang=${language}`} onClick={()=>mobile.current?.removeAttribute('open')}>{c.start} →</Link>{m.sections.map((section,i)=><Link key={section} href={`/modules/${m.id}/${section}?lang=${language}`} onClick={()=>mobile.current?.removeAttribute('open')} className={m.id===module.id&&section===active?'isActive':''} aria-current={m.id===module.id&&section===active?'page':undefined}><span>{String(i+1).padStart(2,'0')}</span>{sectionNames[section][language]}</Link>)}</div>}
 </section>)}</nav><Link className="courseNavHome" href={`/?lang=${language}`}>{c.home} →</Link></>;
 return <aside className="sectionSidebar">
  <div className="courseNavDesktop">{entries}</div>
  <details className="courseNavMobileVisible" ref={mobile}>
   <summary className="mobileModuleNumberHeading">{c.title}: {String(module.id).padStart(2,'0')} / 25 · {sectionNames[active][language]} <span aria-hidden="true">▾</span></summary>
   <nav className="mobileCourseAccordion" aria-label={c.title}>
    {modules.map(m=><div key={m.id} className="mobileCourseAccordionItem">
      <div className="mobileModuleTitleRow">
       <Link href={`/modules/${m.id}/objectives?lang=${language}`} onClick={()=>mobile.current?.removeAttribute("open")} className="mobileModuleDirectLink" aria-current={m.id===module.id?'location':undefined}>
         <span className="mobileAccordionNumber">{String(m.id).padStart(2,'0')}</span><strong>{m.title[language]}</strong>
       </Link>
       <button type="button" className="mobileModuleExpandButton" aria-label={`${m.title[language]}: ${c.open}`} aria-expanded={expanded===m.id} onClick={()=>setExpanded(v=>v===m.id?0:m.id)}>{expanded===m.id?'−':'+'}</button>
      </div>
      {expanded===m.id&&<div className="mobileAccordionSections">{m.sections.map((section,i)=><Link key={section} href={`/modules/${m.id}/${section}?lang=${language}`} aria-current={m.id===module.id&&section===active?'page':undefined} onClick={()=>mobile.current?.removeAttribute("open")} className={m.id===module.id&&section===active?'isActive':''}><span>{String(i+1).padStart(2,'0')}</span>{sectionNames[section][language]}</Link>)}</div>}
    </div>)}
   </nav>
  </details>
 </aside>;
}
