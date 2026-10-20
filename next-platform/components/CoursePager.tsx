import Link from 'next/link';
import type {Language,SectionId} from '../lib/course';
import {modules,sectionIds,sectionNames} from '../lib/course';
const icons=['◎','✓','▤','◷','✚','⚗','✎','◇','☑','?','♙','▶','≡','◉','↗','▣','§'];
const copy={
 RU:{previous:'← Предыдущий подраздел',next:'Следующий подраздел →',contents:'Все модули',previousModule:'← Предыдущий модуль',nextModule:'Следующий модуль →',module:'Модуль',modules:'Модули 01–25',sections:'Подразделы 01–17'},
 EN:{previous:'← Previous section',next:'Next section →',contents:'All modules',previousModule:'← Previous module',nextModule:'Next module →',module:'Module',modules:'Modules 01–25',sections:'Sections 01–17'},
 KZ:{previous:'← Алдыңғы бөлімше',next:'Келесі бөлімше →',contents:'Барлық модульдер',previousModule:'← Алдыңғы модуль',nextModule:'Келесі модуль →',module:'Модуль',modules:'01–25 модульдер',sections:'01–17 бөлімшелер'}
} as const;
export default function CoursePager({moduleId,section,language,placement='bottom'}:{moduleId:number;section:SectionId;language:Language;placement?:'top'|'bottom'}){
 const c=copy[language],i=sectionIds.indexOf(section),current=modules.find(m=>m.id===moduleId);
 const sectionLink=(id:SectionId)=>`/modules/${moduleId}/${id}?lang=${language}`;
 const modLink=(id:number)=>`/modules/${id}/objectives?lang=${language}`;
 const prevModule=modules.find(m=>m.id===moduleId-1),nextModule=modules.find(m=>m.id===moduleId+1);
 if(placement==='top')return <div className="courseTopNavigation">
  <nav className="courseModuleSwitch" aria-label={c.modules}>
   {prevModule?<Link className="courseModulePrev" href={modLink(prevModule.id)}>← <span>{c.previousModule.replace('← ','')}</span></Link>:<span className="courseModuleEdge"/>}
   <strong>{c.module} {String(moduleId).padStart(2,'0')} / 25</strong>
   {nextModule?<Link className="courseModuleNext" href={modLink(nextModule.id)}><span>{c.nextModule.replace(' →','')}</span> →</Link>:<span className="courseModuleEdge"/>}
  </nav>
  <div className="courseRailLabel">{c.modules} · {current?.title[language]}</div>
  <nav className="moduleRail courseTopModuleRail" aria-label={c.modules}>{modules.map(item=><Link key={item.id} aria-current={item.id===moduleId?'location':undefined} title={item.title[language]} href={modLink(item.id)}>{String(item.id).padStart(2,'0')}</Link>)}</nav>
  <div className="courseRailLabel">{c.sections}</div>
  <nav className="courseSectionIconRail" aria-label={c.sections}>{sectionIds.map((s,n)=><Link key={s} href={sectionLink(s)} title={sectionNames[s][language]} aria-label={`${n+1}: ${sectionNames[s][language]}`} aria-current={s===section?'page':undefined}><span aria-hidden="true">{icons[n]}</span><small>{n+1}</small></Link>)}</nav>
  <div className="courseCurrentSection">{String(i+1).padStart(2,'0')} / 17 · <strong>{sectionNames[section][language]}</strong></div>
 </div>;
 return <nav className="coursePager" aria-label={c.sections}>
  <div>{i>0&&<Link rel="prev" href={sectionLink(sectionIds[i-1])}><small>{c.previous}</small><strong>{sectionNames[sectionIds[i-1]][language]}</strong></Link>}</div>
  <Link className="courseContentsLink" href={`/?lang=${language}`}>{c.contents}</Link>
  <div>{i<sectionIds.length-1?<Link rel="next" href={sectionLink(sectionIds[i+1])}><small>{c.next}</small><strong>{sectionNames[sectionIds[i+1]][language]}</strong></Link>:nextModule?<Link href={modLink(nextModule.id)}><small>{c.nextModule}</small><strong>{c.module} {nextModule.id}</strong></Link>:null}</div>
 </nav>;
}
