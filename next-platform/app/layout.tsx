import './styles.css';
import './migration.css';
import type {ReactNode} from 'react';
import {Suspense} from 'react';
import CourseHeader from '../components/CourseHeader';

export const metadata={title:'Физиология дыхательной системы | Respiratory Physiology',description:'Интерактивный учебник физиологии дыхательной системы — 25 модулей, RU/EN/KZ'};

export default function Layout({children}:{children:ReactNode}){
  return <html lang="ru"><body>
    <Suspense fallback={<header className="courseGlobalHeader"><strong>Физиология дыхательной системы</strong></header>}>
      <CourseHeader/>
    </Suspense>
    {children}
  </body></html>;
}
