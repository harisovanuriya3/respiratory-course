import type {Language} from './course';
export type RubricCriterion={id:string;label:Record<Language,string>;concepts:Record<Language,string[]>;weight:number};
export type AssessmentRequest={questionId:string;language:Language;answer:string;rubricId:string};
export type AssessmentResponse={score:number;correct:string[];missing:string[];errors:string[];why:string;nextStep:string;provisional:true;reviewRequired:boolean};
export const airwayRubric:RubricCriterion[]=[
 {id:'resistance',weight:25,label:{RU:'Повышение сопротивления потоку',EN:'Increased airflow resistance',KZ:'Ауа ағыны кедергісінің артуы'},concepts:{RU:['сопротивлен','поток'],EN:['resistance','flow'],KZ:['кедергі','ағын']}},
 {id:'gradient',weight:25,label:{RU:'Больший перепад давления',EN:'Greater pressure gradient',KZ:'Қысым айырмасының артуы'},concepts:{RU:['давлен'],EN:['pressure'],KZ:['қысым']}},
 {id:'muscles',weight:25,label:{RU:'Большая нагрузка на мышцы',EN:'Greater respiratory-muscle load',KZ:'Тыныс бұлшықеттері жүктемесінің артуы'},concepts:{RU:['мышц'],EN:['muscle'],KZ:['бұлшықет']}},
 {id:'work',weight:25,label:{RU:'Рост работы дыхания',EN:'Increased work of breathing',KZ:'Тыныс жұмысының артуы'},concepts:{RU:['работ'],EN:['work'],KZ:['жұмыс']}}
];
export function rubricPreview(answer:string,language:Language){const text=answer.toLocaleLowerCase(language==='EN'?'en':'ru');const met=airwayRubric.filter(c=>c.concepts[language].some(k=>text.includes(k)));return{score:met.reduce((s,c)=>s+c.weight,0),met:met.map(c=>c.label[language]),missing:airwayRubric.filter(c=>!met.includes(c)).map(c=>c.label[language])}}
