export const languages=['RU','EN','KZ'] as const;
export type Language=typeof languages[number];
export const sectionIds=['objectives','pretest','theory','one-minute','clinical','interactive','practice','cases','tests','questions','virtual-patient','media','glossary','voice','progress','notes','references'] as const;
export type SectionId=typeof sectionIds[number];
export type Localized={RU:string;EN:string;KZ:string};
export interface ModuleRecord{id:number;title:Localized;sections:readonly SectionId[]}
import catalog from '../generated/course-catalog.json';
export const modules=catalog.modules as unknown as readonly ModuleRecord[];
export const pilotModule=modules.find(module=>module.id===5)!;
export const moduleById=(id:number)=>modules.find(module=>module.id===id);
export const sectionNames:Record<SectionId,Localized>={objectives:{RU:'Цели обучения',EN:'Learning objectives',KZ:'Оқу мақсаттары'},pretest:{RU:'Входной блиц',EN:'Pretest',KZ:'Кіріспе тест'},theory:{RU:'Теория',EN:'Theory',KZ:'Теория'},'one-minute':{RU:'Ключевые выводы',EN:'Key takeaways',KZ:'Негізгі тұжырымдар'},clinical:{RU:'Связь с клиникой',EN:'Clinical bridge',KZ:'Клиникамен байланыс'},interactive:{RU:'Виртуальная лаборатория',EN:'Virtual laboratory',KZ:'Виртуалды зертхана'},practice:{RU:'Практика',EN:'Practice',KZ:'Практика'},cases:{RU:'Ситуационная задача',EN:'Case problem',KZ:'Ситуациялық есеп'},tests:{RU:'Самопроверка',EN:'Self-assessment',KZ:'Өзін-өзі тексеру'},questions:{RU:'Физиологическое мышление',EN:'Physiological reasoning',KZ:'Физиологиялық ойлау'},'virtual-patient':{RU:'Виртуальный пациент',EN:'Virtual patient',KZ:'Виртуалды пациент'},media:{RU:'Анимации и медиа',EN:'Animation and media',KZ:'Анимация және медиа'},glossary:{RU:'Глоссарий',EN:'Glossary',KZ:'Глоссарий'},voice:{RU:'Объясните своими словами',EN:'Explain in your own words',KZ:'Өз сөзіңізбен түсіндіріңіз'},progress:{RU:'Прогресс',EN:'Progress',KZ:'Прогресс'},notes:{RU:'Заметки',EN:'Notes',KZ:'Жазбалар'},references:{RU:'Источники',EN:'References',KZ:'Дереккөздер'}};
export const isLanguage=(x:string):x is Language=>languages.includes(x as Language);
export const isSection=(x:string):x is SectionId=>sectionIds.includes(x as SectionId);
