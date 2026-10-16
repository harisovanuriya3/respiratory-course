import {modules} from './content.js';
// Publisher records verified 2026-10-16. No page numbers or full-text review are claimed.
export const textbookSources=[
 {title:'Guyton and Hall Textbook of Medical Physiology',edition:'15',url:'https://shop.elsevier.com/books/guyton-and-hall-textbook-of-medical-physiology/hall/978-0-443-11101-3'},
 {title:'West’s Respiratory Physiology: The Essentials',edition:'11',url:'https://www.lww.co.uk/9781975139261/wests-respiratory-physiology/'},
 {title:'Ganong’s Review of Medical Physiology',edition:'27',url:'https://www.mheducation.com/highered/mhp/product/ganong-s-review-medical-physiology-27th-edition.html?viewOption=student'},
 {title:'Boron & Boulpaep, Medical Physiology',edition:'3',url:'https://www.us.elsevierhealth.com/medical-physiology-9781455743773.html'}
];
export const calculationSources={
 ventilation:['CO₂ balance and O₂ content: University of Colorado teaching equations','https://medschool.cuanschutz.edu/docs/librariesprovider60/default-document-library/oxygenation-and-oxygen-therapy.pdf?sfvrsn=4ca831b9_2'],
 gas:['The alveolar gas equation — CEACCP (2004)','https://e-safe-anaesthesia.org/e_library/02/The_alveolar_gas_equation_CEACCP_2004.pdf'],
 oxygen:['O₂ content and delivery: University of Colorado teaching equations','https://medschool.cuanschutz.edu/docs/librariesprovider60/default-document-library/oxygenation-and-oxygen-therapy.pdf?sfvrsn=4ca831b9_2'],
 acid:['Acid–base interpretation — UCSF Hospital Handbook','https://hospitalhandbook.ucsf.edu/01-algorithm-acid-base-disorders/01-algorithm-acid-base-disorders']
};
export function scientificReferences(mid,L){
 const topic=modules.find(m=>m.id===mid)?.title[L];if(!topic)return '';
 return `<section class="lesson-card scientific-references"><h3>${['Библиография по теме','Topic bibliography','Тақырып библиографиясы'][L]}: ${topic}</h3><ul>${textbookSources.map(s=>`<li><a href="${s.url}" target="_blank" rel="noopener noreferrer">${s.title}</a> · ${['издание','edition','басылым'][L]} ${s.edition}</li>`).join('')}</ul><p>${['Проверены названия и издания по записям издателей. Ссылки на книги — библиографические ориентиры, а не подтверждение постраничной экспертизы каждого утверждения. Формулы лабораторий проверяются отдельно вместе с единицами и допущениями.','Titles and editions were checked against publisher records. These are bibliographic references, not a claim of page-by-page verification of every statement. Laboratory equations are checked separately with units and assumptions.','Атаулар мен басылымдар баспа жазбаларымен тексерілді. Кітап сілтемелері — библиографиялық бағдар; әр тұжырымның бет бойынша сарапталғанын білдірмейді. Зертхана формулалары өлшем бірліктері және жорамалдарымен бірге бөлек тексеріледі.'][L]}</p><p><a href="https://accessmedicine.mhmedical.com/Content.aspx?bookid=2525&sectionid=204297523" target="_blank" rel="noopener noreferrer">Ganong, 26e: Introduction to Pulmonary Structure & Mechanics — ${['доступный фрагмент','accessible excerpt','қолжетімді үзінді'][L]}</a></p></section>`;
}
