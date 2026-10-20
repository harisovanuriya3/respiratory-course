import ModuleOneFigureNotes from './ModuleOneFigureNotes';
import type {Language} from '../lib/course';

const copy={
 RU:{title:'От атмосферы к митохондрии',alt:'Интегральная схема дыхательной системы',legend:['Проводящая зона: переносит, согревает и увлажняет воздух','Респираторная зона: бронхиолы и альвеолы, где начинается газообмен','Аэрогематический барьер: тонкая граница альвеолы и капилляра','Плевра и диафрагма: механическая связь лёгких с грудной стенкой','Путь O₂: атмосфера → альвеола → кровь → ткань → митохондрия','Вентиляция: V̇E = VT × f; V̇A = (VT − VD) × f'],compare:'Одинаковая V̇E = 6 L/min',shallow:'250 mL × 24/min → V̇A 2,4 L/min',deep:'500 mL × 12/min → V̇A 4,2 L/min'},
 EN:{title:'From atmosphere to mitochondrion',alt:'Integrated respiratory-system diagram',legend:['Conducting zone: moves, warms and humidifies air','Respiratory zone: bronchioles and alveoli where gas exchange begins','Blood–gas barrier: thin alveolar–capillary interface','Pleura and diaphragm: mechanically couple lungs and chest wall','O₂ pathway: atmosphere → alveolus → blood → tissue → mitochondrion','Ventilation: V̇E = VT × f; V̇A = (VT − VD) × f'],compare:'Equal V̇E = 6 L/min',shallow:'250 mL × 24/min → V̇A 2.4 L/min',deep:'500 mL × 12/min → V̇A 4.2 L/min'},
 KZ:{title:'Атмосферадан митохондрияға дейін',alt:'Тыныс алу жүйесінің интегралдық сызбасы',legend:['Өткізгіш аймақ: ауаны өткізеді, жылытады және ылғалдандырады','Респираторлық аймақ: газ алмасу басталатын бронхиолалар мен альвеолалар','Аэрогематикалық бөгет: альвеола мен капиллярдың жұқа шекарасы','Плевра мен диафрагма: өкпені кеуде қабырғасымен механикалық байланыстырады','O₂ жолы: атмосфера → альвеола → қан → тін → митохондрия','Вентиляция: V̇E = VT × f; V̇A = (VT − VD) × f'],compare:'Бірдей V̇E = 6 L/min',shallow:'250 mL × 24/min → V̇A 2,4 L/min',deep:'500 mL × 12/min → V̇A 4,2 L/min'}
} as const;

export default function ModuleOneInfographic({language}:{language:Language}) {
 const t=copy[language];
 const src={RU:'/visuals/module1-respiratory-anatomy.png',EN:'/visuals/module1-respiratory-anatomy-en.png',KZ:'/visuals/module1-respiratory-anatomy-kz.png'}[language];
 return <figure className="moduleOneInfographic"><h2>{t.title}</h2><a href={src} target="_blank" rel="noopener noreferrer"><img src={src} alt={t.alt} width={1448} height={1086} style={{display:'block',width:'100%',height:'auto',objectFit:'contain'}}/></a><figcaption><ul>{t.legend.map(item=><li key={item}>{item}</li>)}</ul></figcaption><ModuleOneFigureNotes language={language}/></figure>;
}
