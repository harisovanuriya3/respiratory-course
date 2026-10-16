import {modules} from './content.js';
// Publisher records verified 2026-10-16. No page numbers or full-text review are claimed.
export const textbookSources=[
 {title:'Guyton and Hall Textbook of Medical Physiology',edition:'15',url:'https://shop.elsevier.com/books/guyton-and-hall-textbook-of-medical-physiology/hall/978-0-443-11101-3'},
 {title:'West’s Respiratory Physiology: The Essentials',edition:'11',url:'https://www.lww.co.uk/9781975139261/wests-respiratory-physiology/'},
 {title:'Ganong’s Review of Medical Physiology',edition:'27',url:'https://www.mheducation.com/highered/mhp/product/ganong-s-review-medical-physiology-27th-edition.html?viewOption=student'},
 {title:'Boron & Boulpaep, Medical Physiology',edition:'3',url:'https://www.us.elsevierhealth.com/medical-physiology-9781455743773.html'}
];
// Regional references checked against library catalogues, not full-text editions.
// A catalogue record confirms existence and bibliographic metadata, not agreement
// of every lesson with a specific page or edition.
export const regionalTextbookSources=[
 {title:'Покровский В. М., Коротько Г. Ф. (ред.). Физиология человека',edition:'3-е изд., Медицина, 2011',url:'https://search.rsl.ru/ru/record/01005108700',scope:'Российский учебник для медицинских вузов'},
 {title:'Қалыпты физиология / К. В. Судаков (ред.), Ф. А. Миндубаева (аударма ред.)',edition:'ГЭОТАР-Медиа, 2015, 864 б.',url:'https://webirbis.qmu.kz/kk/lib/page/7/?e_rub=%D1%84%D0%B8%D0%B7%D0%B8%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F+--+%D0%BE%D0%B1%D1%83%D1%87.&e_viewdb=BOOK',scope:'Қазақ тіліндегі қалыпты физиология оқулығы'},
 {title:'Тель Л. З., Хамчиев К. М. (ред.). Қалыпты физиология',edition:'2015, 800 б.',url:'https://webirbis.qmu.kz/kk/lib/page/4/?e_udc=612%28075.8%29&e_viewdb=BOOK',scope:'Қазақстандағы медициналық оқу әдебиеті'},
 {title:'Миндубаева Ф. А., Евневич А. М. Студент-стоматологтарға арналған қалыпты физиология бойынша мамандандырылған курс',edition:'Эверо, 2015, 92 б.',url:'https://webirbis.qmu.kz/kk/lib/page/3/?e_udc=612%28075.8%29&e_viewdb=BOOK',scope:'Тыныс алу физиологиясы тарауы бар оқу-әдістемелік құрал'}
];
export const respiratoryGlossary=[
 ['Альвеолярная вентиляция','Alveolar ventilation','Альвеолалық желдетілу'],
 ['Минутная вентиляция лёгких','Minute ventilation','Өкпенің минуттық желдетілуі'],
 ['Дыхательный объём','Tidal volume','Тыныс алу көлемі'],
 ['Функциональная остаточная ёмкость','Functional residual capacity','Функциялық қалдық сыйымдылық'],
 ['Жизненная ёмкость лёгких','Vital capacity','Өкпенің тіршілік сыйымдылығы'],
 ['Мёртвое пространство','Dead space','Өлі кеңістік'],
 ['Газообмен','Gas exchange','Газ алмасу'],
 ['Диффузионная способность лёгких','Diffusing capacity of the lung','Өкпенің диффузиялық қабілеті'],
 ['Вентиляционно-перфузионное отношение','Ventilation–perfusion ratio','Желдетілу-перфузия арақатынасы'],
 ['Парциальное давление кислорода','Partial pressure of oxygen','Оттегінің парциалдық қысымы'],
 ['Растяжимость лёгких','Lung compliance','Өкпенің созылғыштығы'],
 ['Сопротивление дыхательных путей','Airway resistance','Тыныс жолдарының кедергісі'],
 ['Периферические хеморецепторы','Peripheral chemoreceptors','Шеткі хеморецепторлар'],
 ['Центральные хеморецепторы','Central chemoreceptors','Орталық хеморецепторлар'],
 ['Регуляция дыхания','Control of breathing','Тыныс алудың реттелуі']
];
export const calculationSources={
 ventilation:['CO₂ balance and O₂ content: University of Colorado teaching equations','https://medschool.cuanschutz.edu/docs/librariesprovider60/default-document-library/oxygenation-and-oxygen-therapy.pdf?sfvrsn=4ca831b9_2'],
 gas:['The alveolar gas equation — CEACCP (2004)','https://e-safe-anaesthesia.org/e_library/02/The_alveolar_gas_equation_CEACCP_2004.pdf'],
 oxygen:['O₂ content and delivery: University of Colorado teaching equations','https://medschool.cuanschutz.edu/docs/librariesprovider60/default-document-library/oxygenation-and-oxygen-therapy.pdf?sfvrsn=4ca831b9_2'],
 acid:['Acid–base interpretation — UCSF Hospital Handbook','https://hospitalhandbook.ucsf.edu/01-algorithm-acid-base-disorders/01-algorithm-acid-base-disorders']
};
export function scientificReferences(mid,L){
 const topic=modules.find(m=>m.id===mid)?.title[L];if(!topic)return '';
 return `<section class="lesson-card scientific-references"><h3>${['Библиография по теме','Topic bibliography','Тақырып библиографиясы'][L]}: ${topic}</h3><ul>${textbookSources.map(s=>`<li><a href="${s.url}" target="_blank" rel="noopener noreferrer">${s.title}</a> · ${['издание','edition','басылым'][L]} ${s.edition}</li>`).join('')}</ul><h4>${['Российские и казахстанские учебные источники','Russian and Kazakhstan educational sources','Ресейлік және қазақстандық оқу дереккөздері'][L]}</h4><ul>${regionalTextbookSources.map(s=>`<li><a href="${s.url}" target="_blank" rel="noopener noreferrer">${s.title}</a> · ${s.edition}</li>`).join('')}</ul><h4>${['Терминологические соответствия RU / EN / KZ','Terminology crosswalk RU / EN / KZ','RU / EN / KZ терминологиялық сәйкестіктері'][L]}</h4><div class="regional-glossary" style="overflow-x:auto"><table><thead><tr><th>RU</th><th>EN</th><th>KZ</th></tr></thead><tbody>${respiratoryGlossary.map(row=>`<tr>${row.map(term=>`<td>${term}</td>`).join('')}</tr>`).join('')}</tbody></table></div><p>${['Проверены названия и издания по записям издателей. Ссылки на книги — библиографические ориентиры, а не подтверждение постраничной экспертизы каждого утверждения. Формулы лабораторий проверяются отдельно вместе с единицами и допущениями.','Titles and editions were checked against publisher records. These are bibliographic references, not a claim of page-by-page verification of every statement. Laboratory equations are checked separately with units and assumptions.','Атаулар мен басылымдар баспа жазбаларымен тексерілді. Кітап сілтемелері — библиографиялық бағдар; әр тұжырымның бет бойынша сарапталғанын білдірмейді. Зертхана формулалары өлшем бірліктері және жорамалдарымен бірге бөлек тексеріледі.'][L]}</p><p><a href="https://accessmedicine.mhmedical.com/Content.aspx?bookid=2525&sectionid=204297523" target="_blank" rel="noopener noreferrer">Ganong, 26e: Introduction to Pulmonary Structure & Mechanics — ${['доступный фрагмент','accessible excerpt','қолжетімді үзінді'][L]}</a></p></section>`;
}
