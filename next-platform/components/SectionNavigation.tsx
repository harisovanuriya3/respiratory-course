import Link from 'next/link';
import type {Language,ModuleRecord,SectionId} from '../lib/course';
import {sectionNames} from '../lib/course';

const icons:Record<SectionId,string>={
  objectives:'◎',pretest:'✓',theory:'▤','one-minute':'◷',clinical:'✚',interactive:'⚗',practice:'✎',cases:'◇',tests:'☑',questions:'?',
  'virtual-patient':'♙',media:'▶',glossary:'≡',voice:'◉',progress:'↗',notes:'▣',references:'§'
};

export default function SectionNavigation({module,active,language}:{module:ModuleRecord;active:SectionId;language:Language}){
  return <aside className="sectionSidebar">
    <Link className="moduleIndexLink" href={`/?lang=${language}`}>← 25 modules</Link>
    <h2>{module.title[language]}</h2>
    <nav className="sectionNavigation" aria-label={`${module.title[language]} — 17 sections`}>
      {module.sections.map((item,index)=><Link key={item} className={item===active?'active':''} aria-current={item===active?'page':undefined} href={`/modules/${module.id}/${item}?lang=${language}`}>
        <span className="sectionIcon" aria-hidden="true">{icons[item]}</span><span className="sectionNavText"><small>{String(index+1).padStart(2,'0')}</small>{sectionNames[item][language]}</span>
      </Link>)}
    </nav>
  </aside>;
}
