'use client';
import Link from 'next/link';
import {usePathname,useSearchParams} from 'next/navigation';
const copy={
  RU:{title:'Физиология дыхательной системы',author:'Харисова Нурия Мансуровна'},
  EN:{title:'Respiratory Physiology',author:'Nuriya Mansurovna Kharissova'},
  KZ:{title:'Тыныс алу жүйесінің физиологиясы',author:'Харисова Нурия Мансуровна'}
} as const;
export default function CourseHeader(){
  const pathname=usePathname(),search=useSearchParams();
  const requested=search.get('lang');
  const lang=requested==='EN'||requested==='KZ'?requested:'RU';
  const c=copy[lang];
  return <header className="courseGlobalHeader">
    <Link href={`/?lang=${lang}`} className="courseBrand">{c.title}</Link>
    <span className="courseAuthor">{c.author}</span>
  </header>;
}
