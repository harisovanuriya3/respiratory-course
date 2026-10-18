import Link from 'next/link';
import {isLanguage} from '../../lib/course';
import type {Language} from '../../lib/course';
const copy={
 RU:{heading:'Личный кабинет',state:'Авторизация пока не подключена',note:'Учебник открыт без входа. Для защищённого кабинета с сохранением результатов и паролем требуется подключить систему учётных записей. Сейчас мы не собираем пароли и не выдаём гостевой режим за авторизованный.',back:'Продолжить обучение без входа'},
 EN:{heading:'Student account',state:'Sign-in is not configured yet',note:'The textbook is open without signing in. A secure student account with saved results and passwords requires an authentication service. This page does not collect passwords or present guest mode as a signed-in account.',back:'Continue learning as guest'},
 KZ:{heading:'Жеке кабинет',state:'Кіру жүйесі әзірге қосылмаған',note:'Оқулықты тіркеусіз пайдалануға болады. Нәтижелерді сақтайтын қауіпсіз кабинет үшін тіркелгі жүйесін қосу қажет. Бұл бет пароль жинамайды және қонақ режимін жүйеге кірген пайдаланушы ретінде көрсетпейді.',back:'Тіркелмей оқуды жалғастыру'}
} as const;
export default async function AccountPage({searchParams}:{searchParams:Promise<{lang?:string}>}){
 const {lang}=await searchParams;const language:Language=lang&&isLanguage(lang)?lang:'RU',c=copy[language];
 return <main className="accountInformation"><h1>{c.heading}</h1><h2>{c.state}</h2><p>{c.note}</p><Link href={`/?lang=${language}`}>{c.back} →</Link></main>;
}
