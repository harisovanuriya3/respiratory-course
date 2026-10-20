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
  <details className="courseNavMobile" ref={mobile}><summary>☰ {c.open} <span>{String(module.id).padStart(2,'0')} / 25</span></summary><div>{/* mobile shares current module display, with independent open state */}<nav className="courseMobileModuleList" aria-label={c.title}>{modules.map(m=><details key={m.id} open={m.id===module.id?undefined:undefined} className="courseMobileModule" ><summary><span>{String(m.id).padStart(2,'0')}</span> {m.title[language]}</summary><div><Link href={`/modules/${m.id}/objectives?lang=${language}`} onClick={()=>mobile.current?.removeAttribute('open')}>{c.start} →</Link>{m.sections.map((s,i)=><Link key={s} className={m.id===module.id&&s===active?'isActive':''} aria-current={m.id===module.id&&s===active?'page':undefined} href={`/modules/${m.id}/${s}?lang=${language}`} onClick={()=>mobile.current?.removeAttribute('open')}>{String(i+1).padStart(2,'0')} · {sectionNames[s][language]}</Link>)}</div></details>)}</nav></div></details>
 </aside>;
}
