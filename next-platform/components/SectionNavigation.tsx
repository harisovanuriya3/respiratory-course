import Link from 'next/link';
import type {Language,ModuleRecord,SectionId} from '../lib/course';
import {sectionNames} from '../lib/course';

const icons:Record<SectionId,string>={
  objectives:'◎',pretest:'✓',theory:'▤','one-minute':'◷',clinical:'✚',interactive:'⚗',practice:'✎',cases:'◇',tests:'☑',questions:'?',
  'virtual-patient':'♙',media:'▶',glossary:'≡',voice:'◉',progress:'↗',notes:'▣',references:'§'
};
const colors:Record<SectionId,{background:string;foreground:string}>={
  objectives:{background:'#dbeafe',foreground:'#1d4ed8'},
  pretest:{background:'#fef3c7',foreground:'#92400e'},
  theory:{background:'#ede9fe',foreground:'#6d28d9'},
  'one-minute':{background:'#ccfbf1',foreground:'#115e59'},
  clinical:{background:'#fee2e2',foreground:'#b91c1c'},
  interactive:{background:'#cffafe',foreground:'#0e7490'},
  practice:{background:'#dcfce7',foreground:'#166534'},
  cases:{background:'#ffedd5',foreground:'#9a3412'},
  tests:{background:'#fce7f3',foreground:'#9d174d'},
  questions:{background:'#e0e7ff',foreground:'#3730a3'},
  'virtual-patient':{background:'#fce7f3',foreground:'#be185d'},
  media:{background:'#dbeafe',foreground:'#1e40af'},
  glossary:{background:'#fef9c3',foreground:'#854d0e'},
  voice:{background:'#e0f2fe',foreground:'#0369a1'},
  progress:{background:'#d1fae5',foreground:'#047857'},
  notes:{background:'#f3e8ff',foreground:'#7e22ce'},
  references:{background:'#e5e7eb',foreground:'#374151'}
};
const labels={
  RU:{back:'← Все 25 модулей',sections:'17 подразделов'},
  EN:{back:'← All 25 modules',sections:'17 sections'},
  KZ:{back:'← Барлық 25 модуль',sections:'17 бөлімше'}
} as const;

export default function SectionNavigation({module,active,language}:{module:ModuleRecord;active:SectionId;language:Language}){
  const c=labels[language];
  return <aside className="sectionSidebar">
    <Link className="moduleIndexLink" href={`/?lang=${language}`}>{c.back}</Link>
    <h2>{module.title[language]}</h2>
    <nav className="sectionNavigation" aria-label={`${module.title[language]} — ${c.sections}`}>
      {module.sections.map((item,index)=><Link key={item} className={item===active?'active':''} aria-current={item===active?'page':undefined} href={`/modules/${module.id}/${item}?lang=${language}`}>
        <span className="sectionIcon" style={{backgroundColor:colors[item].background,color:colors[item].foreground,border:`1px solid ${colors[item].foreground}33`}} aria-hidden="true">{icons[item]}</span>
        <span className="sectionNavText"><small>{String(index+1).padStart(2,'0')}</small>{sectionNames[item][language]}</span>
      </Link>)}
    </nav>
  </aside>;
}
