'use client';
import Link from 'next/link';
import {usePathname,useSearchParams} from 'next/navigation';
const copy={
 RU:{title:'Физиология дыхательной системы',author:'Харисова Нурия Мансуровна',guest:'Гостевой доступ',account:'Личный кабинет',languages:'Язык обучения',exam:'Экзамен'},
 EN:{title:'Respiratory Physiology',author:'Nuriya Mansurovna Kharissova',guest:'Guest access',account:'Student account',languages:'Learning language',exam:'Exam'},
 KZ:{title:'Тыныс алу жүйесінің физиологиясы',author:'Харисова Нурия Мансуровна',guest:'Қонақ ретінде',account:'Жеке кабинет',languages:'Оқу тілі',exam:'Емтихан'}
} as const;
export default function CourseHeader(){
 const pathname=usePathname(),search=useSearchParams();
 const requested=search.get('lang'),lang=requested==='EN'||requested==='KZ'?requested:'RU';
 const c=copy[lang],other=new URLSearchParams(search.toString());
 const href=(next:'RU'|'EN'|'KZ')=>{const p=new URLSearchParams(other);p.set('lang',next);return `${pathname}?${p.toString()}`};
 return <header className="courseGlobalHeader">
  <Link href={`/?lang=${lang}`} className="courseBrand">{c.title}</Link>
  <nav className="courseHeaderActions" aria-label={c.languages}>
    <div className="courseHeaderLanguages">{(['RU','EN','KZ'] as const).map(item=><Link key={item} href={href(item)} aria-current={item===lang?'page':undefined}>{item}</Link>)}</div>
    <Link className="courseAccountLink" href={`/exam?lang=${lang}`}>{c.exam}</Link><Link className="courseGuestStatus courseGuestLink" href={`/modules/1/objectives?lang=${lang}`}>{c.guest} →</Link>
    <Link className="courseAccountLink" href={`/account?lang=${lang}`}>{c.account}</Link>
  </nav>
 </header>;
}
