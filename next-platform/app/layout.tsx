import './styles.css';
import './migration.css';
import type {ReactNode} from 'react';
import Link from 'next/link';

export const metadata={title:'Физиология дыхательной системы | Respiratory Physiology',description:'Интерактивный учебник физиологии дыхательной системы — 25 модулей, RU/EN/KZ'};

export default function Layout({children}:{children:ReactNode}){
  return <html lang="ru"><body>
    <header className="courseGlobalHeader">
      <Link href="/?lang=RU" className="courseBrand">Физиология дыхательной системы <span>· Respiratory Physiology</span></Link>
      <span className="courseAuthor">Харисова Нурия Мансуровна</span>
    </header>
    {children}
  </body></html>;
}
