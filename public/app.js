import {initLearningWorkspace} from './learning-workspace.js';
import {expandedTheoryExample} from './expanded-theory-examples.js';
import {receptorBreathingAnimation,initReceptorBreathingAnimation} from './receptor-breath-animation.js';
import {teachingReview} from './teaching-review.js';
import {scientificReferences} from './scientific-sources.js';
import {shuffleSelfAssessments} from './quiz-order.js';
import {integratedLab,initIntegratedLabs} from './integrated-labs.js';
import {initPracticeWorkshops} from './practice-workshops.js';
import {academicMasterChapter} from './academic-master-chapters.js';
import {coreScientificUnit} from './academic-core-units.js';
import {curatedAcademic} from './academic-curator.js';
import {scientificReviewV100} from './scientific-review-v100.js';
import {academicV99} from './academic-v99.js';
import {academicV98} from './academic-v98.js';
import {focusedAcademicV97} from './focused-academic-v97.js';
import {substantiveLessonV95} from './substantive-v95.js';
import {scientificCorrectionsV81} from './scientific-corrections-v81.js';
import {sectionDepthV70} from './section-depth-v70.js';
import {sectionDepthV69} from './section-depth-v69.js';
import {academicV68} from './academic-v68.js';
import {academicV67} from './academic-v67.js';
import {academicV66} from './academic-v66.js';
import {academicV65} from './academic-v65.js';
import {academicV64} from './academic-v64.js';
import {academicV58} from './academic-v58.js';
import {academicV57} from './academic-v57.js';
import {academicV56} from './academic-v56.js';
import {academicDeepeningV55} from './academic-deepening-v55.js';
import {academicRegulationV54} from './academic-regulation-v54.js';
import {physiologyV53} from './physiology-v53.js';
import {physiologyV52} from './physiology-v52.js';
import {physiologyV51} from './physiology-v51.js';
import {advancedPhysiologyV50} from './advanced-physiology-v50.js';
import {extendedLesson} from './extended-lessons-v49.js';
import {deepClinicalLesson} from './deep-clinical-lessons.js';
import {patientCases} from './patient-cases.js';
import {advancedPatients,initAdvancedPatients,modulePatient} from './advanced-patients.js';
import {regulationAtlas,initRegulationAtlas} from './regulation-atlas.js';
import {mediaAtlas} from './media-atlas.js';
import {examCenter,initExamCenter} from './exam-center.js';
import {moduleTwentyFive,initModuleTwentyFive} from './module-twenty-five.js';
import {moduleTwentyFour,initModuleTwentyFour} from './module-twenty-four.js';
import {moduleTwentyThree,initModuleTwentyThree} from './module-twenty-three.js';
import {appliedLesson,initApplied} from './applied-labs.js';
import {laboratory,initLaboratory} from './experiments.js';
import {assessment,initAssessment} from './assessment.js';
import {modules, sections} from './content.js';
import {academicCasesV63} from './academic-cases-v63.js';
import {initLesson} from './lesson-one.js';
import {lessonOne} from './module-one-complete.js';
import {advancedLesson} from './advanced-lessons.js';
import {moduleTwo,initModuleTwo} from './module-two.js';
import {moduleThree,initModuleThree} from './module-three.js';
import {moduleFour,initModuleFour} from './module-four.js';
import {moduleFive,initModuleFive} from './module-five.js';
import {moduleSix,initModuleSix} from './module-six.js';
import {moduleSeven,initModuleSeven} from './module-seven.js';
import {moduleEight,initModuleEight} from './module-eight.js';
import {moduleNine,initModuleNine} from './module-nine.js';
import {moduleTen,initModuleTen} from './module-ten.js';
import {moduleEleven,initModuleEleven} from './module-eleven.js';
import {moduleTwelve,initModuleTwelve} from './module-twelve.js';
import {moduleThirteen,initModuleThirteen} from './module-thirteen.js';
import {moduleFourteen,initModuleFourteen} from './module-fourteen.js';
import {moduleFifteen,initModuleFifteen} from './module-fifteen.js';
import {moduleSixteen,initModuleSixteen} from './module-sixteen.js';
import {moduleSeventeen,initModuleSeventeen} from './module-seventeen.js';
import {moduleEighteen,initModuleEighteen} from './module-eighteen.js';
import {moduleNineteen,initModuleNineteen} from './module-nineteen.js';
import {moduleTwenty,initModuleTwenty} from './module-twenty.js';
import {moduleTwentyOne,initModuleTwentyOne} from './module-twenty-one.js';
import {moduleTwentyTwo,initModuleTwentyTwo} from './module-twenty-two.js';
const langs=['RU','EN','KZ'];
const params=new URLSearchParams(location.search);
const lang=langs.includes(params.get('lang'))?params.get('lang'):'RU';
const L=langs.indexOf(lang);const t=(...a)=>a[L];
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const href=(path)=>path+'?lang='+lang;
const path=location.pathname.replace(/\/$/,'')||'/';
const ui={title:t('Физиология дыхательной системы','Respiratory physiology','Тыныс алу жүйесінің физиологиясы'),short:t('Физиология дыхания','Respiratory physiology','Тыныс алу физиологиясы'),home:t('Титул','Cover','Титул'),toc:t('Оглавление','Contents','Мазмұны'),labs:t('Лаборатории','Laboratories','Зертханалар'),patients:t('Виртуальные пациенты','Virtual patients','Виртуалды пациенттер'),exam:t('Экзамен','Examination','Емтихан'),module:t('Модуль','Module','Модуль'),sections:t('17 подразделов','17 sections','17 бөлімше'),empty:t('Материал пока не добавлен','Content has not been added yet','Материал әлі қосылмаған'),draft:t('Структура учебника','Textbook structure','Оқулық құрылымы'),author:t('Харисова Нурия Мансуровна','Nuriya Mansurovna Kharissova','Харисова Нурия Мансуровна'),status:t('Учебный черновик','Teaching draft','Оқу жобасы')};
document.documentElement.lang=lang==='KZ'?'kk':lang.toLowerCase();
const icon=(type)=>({labs:'⌁',patients:'♧',exam:'≡'}[type]||'↗');
const navlinks=[['/contents',ui.toc],['/labs',ui.labs],['/patients',ui.patients],['/exam',ui.exam]];
document.querySelector('#header').innerHTML=`<div class="top"><a class="brand" href="${href('/')}" aria-label="${ui.home}"><span class="mark" aria-hidden="true">ϕ</span><span>${ui.short}<small>RESPIRATORY · PHYSIOLOGY</small></span></a><nav class="topnav" aria-label="${ui.toc}">${navlinks.map(([p,n])=>`<a href="${href(p)}" ${path===p?'aria-current="page"':''}>${n}</a>`).join('')}</nav><nav class="languages" aria-label="${t('Язык','Language','Тіл')}">${langs.map(l=>`<a href="${path}?lang=${l}" lang="${l==='KZ'?'kk':l.toLowerCase()}" ${l===lang?'aria-current="true"':''}>${l}</a>`).join('')}</nav></div>`;
document.querySelector('#footer').innerHTML=`<span>© 2026 · ${ui.author}</span><span>${ui.draft} · 25 × 17 · RU / EN / KZ</span>`;
const badge=`<span class="pill">${ui.status}</span>`;
function crumbs(extra=''){return `<nav class="crumbs" aria-label="${t('Путь','Breadcrumb','Жол')}"><a href="${href('/')}">${ui.home}</a><span>/</span><a href="${href('/contents')}">${ui.toc}</a>${extra}</nav>`;}
function search(){return `<label class="search"><span>${t('Поиск по 25 темам','Search 25 topics','25 тақырып бойынша іздеу')}</span><input id="search" type="search" placeholder="${t('Название или номер модуля…','Module name or number…','Модуль атауы немесе нөмірі…')}" autocomplete="off"></label>`;}
function cards(target='module'){return `<div class="module-grid">${modules.map(m=>{const dest=target==='labs'?`/modules/${m.id}/interactive`:target==='patients'?`/modules/${m.id}/virtual-patient`:`/modules/${m.id}`;return `<a class="module-card" href="${href(dest)}" data-search="${esc(m.id+' '+m.title.join(' '))}"><span class="num">${String(m.id).padStart(2,'0')}</span><h3>${esc(m.title[L])}</h3><div class="meta"><span>${target==='module'?ui.sections:ui.status}</span><span aria-hidden="true">↗</span></div></a>`;}).join('')}<p class="no-results" hidden id="no-results" role="status">${t('Таких тем не найдено','No matching topics','Тақырып табылмады')}</p></div>`;}
function empty(label,kind='page'){return `<div class="empty"><div class="empty-icon" aria-hidden="true">${kind==='lab'?'⌁':kind==='patient'?'♧':'＋'}</div><h2>${label}</h2><p>${ui.empty}. ${t('Страница подготовлена для следующего этапа работы над учебником.','This page is ready for the next stage of textbook development.','Бұл бет оқулықты әзірлеудің келесі кезеңіне дайын.')} ${kind==='lab'?t('Опыт ещё не запущен.','The experiment is not available yet.','Тәжірибе әлі іске қосылмаған.'):kind==='patient'?t('Сценарий пациента ещё не добавлен.','The patient scenario has not been added yet.','Пациент сценарийі әлі қосылмаған.'):''}</p></div>`;}
function sidebar(mid){return `<aside class="sidebar"><details ${innerWidth>740?'open':''}><summary>${ui.toc} · 25</summary><nav class="sidenav">${modules.map(m=>`<a href="${href('/modules/'+m.id)}" ${m.id===mid?'aria-current="page"':''}>${String(m.id).padStart(2,'0')} &nbsp; ${esc(m.title[L])}</a>`).join('')}</nav></details></aside>`;}
function modulePage(mid,section){const m=modules.find(m=>m.id===mid);const si=sections.findIndex(s=>s[0]===section);if(!m||(section&&si<0))return notFound();const s=sections[si];document.title=(s?s[L+1]+' · ':'')+m.title[L]+' | '+ui.short;
return `<div class="layout">${sidebar(mid)}<main id="main">${crumbs(`<span>/</span><a href="${href('/modules/'+mid)}">${ui.module} ${mid}</a>${s?'<span>/</span><span>'+s[L+1]+'</span>':''}`)}<div class="page-heading"><div class="eyebrow">${ui.module} ${String(mid).padStart(2,'0')} / 25</div><h1>${esc(m.title[L])}</h1><p>${ui.sections} · RU / EN / KZ</p></div>${section?`<nav class="sectionnav" aria-label="${ui.sections}">${sections.map((s,i)=>`<a href="${href('/modules/'+mid+'/'+s[0])}" title="${s[L+1]}" aria-label="${i+1}. ${s[L+1]}" ${i===si?'aria-current="page"':''}>${i+1}</a>`).join('')}</nav><div class="section-heading"><h2>${s[L+1]}</h2><span class="pill">${mid===1?t('Учебный материал','Learning material','Оқу материалы'):t('Учебный конспект','Teaching draft','Оқу конспектісі')}</span></div>${section==='media'?mediaAtlas(mid,L):''}${mid===17&&section==='interactive'?regulationAtlas(lang):''}${[17,18,19].includes(mid)&&section==='interactive'?receptorBreathingAnimation(lang):''}${mid===3?moduleThree(section,L):mid===4?moduleFour(section,L):mid===5?moduleFive(section,L):mid===6&&moduleSix(section,L)?moduleSix(section,L):mid===7&&moduleSeven(section,L)?moduleSeven(section,L):mid===8&&moduleEight(section,L)?moduleEight(section,L):mid===9&&moduleNine(section,L)?moduleNine(section,L):mid===10?moduleTen(section,L):mid===11?moduleEleven(section,L):mid===12?moduleTwelve(section,L):mid===13?moduleThirteen(section,L):mid===14?moduleFourteen(section,L):mid===15?moduleFifteen(section,L):mid===16?moduleSixteen(section,L):mid===17?moduleSeventeen(section,L):mid===18?moduleEighteen(section,L):mid===19?moduleNineteen(section,L):mid===20?moduleTwenty(section,L):mid===21?moduleTwentyOne(section,L):mid===22?moduleTwentyTwo(section,L):mid===23?moduleTwentyThree(section,L):mid===24?moduleTwentyFour(section,L):mid===25?moduleTwentyFive(section,L):mid>=6&&appliedLesson(mid,section,L)?appliedLesson(mid,section,L):section==='interactive'?laboratory(L):mid===1?lessonOne(section,L):mid===2&&section!=='interactive'?moduleTwo(section,L):advancedLesson(mid,section,L)}${section==='virtual-patient'?modulePatient(mid,L):''}${section==='interactive'?integratedLab(mid,L):''}${section==='references'?scientificReferences(mid,L):''}${section==='theory'?academicMasterChapter(mid,section,L):''}${curatedAcademic(mid,section,L)}${coreScientificUnit(mid,section,L)}${teachingReview(mid,section,L)}${expandedTheoryExample(mid,section,L)}<nav class="pagination">${si>0?`<a href="${href('/modules/'+mid+'/'+sections[si-1][0])}">← ${sections[si-1][L+1]}</a>`:`<a href="${href('/modules/'+mid)}">← ${ui.module} ${mid}</a>`}${si<16?`<a href="${href('/modules/'+mid+'/'+sections[si+1][0])}">${sections[si+1][L+1]} →</a>`:mid<25?`<a href="${href('/modules/'+(mid+1))}">${ui.module} ${mid+1} →</a>`:`<a href="${href('/contents')}">${ui.toc} →</a>`}</nav>`:`<div class="note">${t('Выберите подраздел. Некоторые занятия ещё проходят научную редакцию.','Choose a subsection. Some lessons are still undergoing scientific editing.','Бөлімшені таңдаңыз. Кейбір сабақтар ғылыми редакциядан өтуде.')}</div><div class="section-grid">${sections.map((s,i)=>`<a class="section-card" href="${href('/modules/'+mid+'/'+s[0])}"><span>${String(i+1).padStart(2,'0')} / 17</span><h2>${s[L+1]} <span aria-hidden="true">↗</span></h2></a>`).join('')}</div><nav class="pagination">${mid>1?`<a href="${href('/modules/'+(mid-1))}">← ${ui.module} ${mid-1}</a>`:'<span></span>'}${mid<25?`<a href="${href('/modules/'+(mid+1))}">${ui.module} ${mid+1} →</a>`:''}</nav>`}</main></div>`;}
function home(){return `<main id="main"><section class="hero"><div class="hero-copy"><div class="eyebrow">${t('Интерактивный учебник · Медицина','Interactive textbook · Medicine','Интерактивті оқулық · Медицина')}</div><h1>${ui.title}</h1><p>${t('От первого вдоха — к пониманию механизмов дыхания.','From the first breath to understanding how respiration works.','Алғашқы демнен — тыныс механизмдерін түсінуге.')}</p><div class="author"><small>${t('Автор учебника','Textbook author','Оқулық авторы')}</small>${ui.author}</div><div class="actions"><a class="button" href="${href('/contents')}">${t('Открыть оглавление','Explore contents','Мазмұнды ашу')} <span>↗</span></a><a class="button secondary" href="${href('/labs')}">${ui.labs} <span>→</span></a></div></div></section><div class="stats"><div class="stat"><strong>25</strong>${t('модулей','modules','модуль')}</div><div class="stat"><strong>17</strong>${t('подразделов в каждом','sections per module','әр модульде бөлімше')}</div><div class="stat"><strong>3</strong>${t('языка обучения','learning languages','оқу тілі')}</div><div class="stat"><strong>425</strong>${t('страниц разделов','section pages','бөлім беті')}</div></div><div class="wrap"><div class="section-heading"><div><div class="eyebrow">${t('Пространство обучения','Learning spaces','Оқу кеңістігі')}</div><h2>${t('Исследовать. Понимать. Применять.','Explore. Understand. Apply.','Зерттеу. Түсіну. Қолдану.')}</h2></div>${badge}</div><div class="tools-grid">${[['labs',ui.labs,t('Отдельная страница опыта для каждого модуля.','An experiment page for every module.','Әр модульге арналған тәжірибе беті.')],['patients',ui.patients,t('Страницы клинических сценариев по 25 темам.','Clinical scenario pages for all 25 topics.','25 тақырып бойынша клиникалық сценарий беттері.')],['exam',t('Экзаменационный центр','Examination center','Емтихан орталығы'),t('Тестовая и письменная части.','Test and written-response sections.','Тест және жазбаша бөлімдер.')]].map(([p,h,d])=>`<a class="tool" href="${href('/'+p)}"><span class="icon" aria-hidden="true">${icon(p)}</span><div><h3>${h}</h3><p>${d}</p><span class="arrow" aria-hidden="true">→</span></div></a>`).join('')}</div><section id="contents"><div class="section-heading"><div><div class="eyebrow">${ui.draft}</div><h2>${t('25 тем — единый курс','25 topics. One course.','25 тақырып — бір курс')}</h2><p>${t('Согласованная последовательность модулей','The agreed module sequence','Келісілген модульдер реті')}</p></div>${search()}</div>${cards()}</section></div></main>`;}
// Fisher-Yates shuffle; retain original answer identifiers for correct scoring.
function shuffleChoices(items){
  const copy=[...items];
  for(let i=copy.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [copy[i],copy[j]]=[copy[j],copy[i]];
  }
  return copy;
}
function patientCaseHub(){
const label=t('Клинический практикум: 25 случаев','Clinical physiology: 25 cases','Клиникалық физиология: 25 жағдай');
const cases=patientCases.map(c=>`<article class="patient-card"><h2>${c.id}. ${esc(modules[c.id-1].title[L])}</h2><p>${esc(c.scenario[L])}</p><p><strong>${esc(c.question[L])}</strong></p><div class="patient-options" data-case="${c.id}">${shuffleChoices(c.options[L].map((o,j)=>({label:o,original:j}))).map(o=>`<button type="button" data-choice="${o.original}">${esc(o.label)}</button>`).join('')}</div><p class="patient-feedback" role="status" aria-live="polite"></p></article>`).join('');
return `<main class="wrap" id="main"><h1>${label}</h1><p><a class="button" href="${href('/patients/advanced')}">${t('Многоэтапные виртуальные пациенты →','Advanced virtual patients →','Көпкезеңді виртуалды пациенттер →')}</a></p><p>${t('25 отдельных учебных случаев. Для каждого выберите ответ и получите разбор. Сценарии не заменяют клиническую диагностику.','25 separate educational cases. Choose an answer to see feedback. Not for clinical diagnosis.','25 бөлек оқу жағдайы. Жауапты таңдап, түсіндірмені көріңіз. Клиникалық диагнозға арналмаған.')}</p><div class="patient-grid">${cases}</div></main>`;
}
function initPatientHub(){document.querySelectorAll('[data-case]').forEach(group=>group.addEventListener('click',event=>{
const button=event.target.closest('button[data-choice]');if(!button)return;
const c=patientCases[Number(group.dataset.case)-1],correct=Number(button.dataset.choice)===0;
group.querySelectorAll('button').forEach(b=>{b.disabled=true;b.classList.toggle('correct',Number(b.dataset.choice)===0);b.classList.toggle('incorrect',b===button&&!correct)});
const status=group.nextElementSibling;
status.textContent=(correct?t('Верно. ','Correct. ','Дұрыс. '):t('Неверно. ','Not quite. ','Қате. '))+t('Разбор: ','Explanation: ','Түсіндірме: ')+(c.explanation[L]||c.explanation[0]);
}));}
function hub(kind){const title=kind==='labs'?ui.labs:kind==='patients'?ui.patients:ui.toc;document.title=title+' | '+ui.short;return `<main class="wrap" id="main">${crumbs()}<div class="section-heading"><div class="page-heading"><div class="eyebrow">${ui.draft}</div><h1>${title}</h1><p>${kind==='module'?t('25 согласованных тем. В каждом модуле — 17 подразделов.','25 agreed topics. Each module has 17 sections.','25 келісілген тақырып. Әр модульде 17 бөлімше.'):t('Выберите модуль и откройте тематический материал. Полнота сценариев различается.','Choose a module and open its learning material. Scenario completeness varies.','Модульді таңдап, тақырыптық материалды ашыңыз. Сценарийлердің толықтығы әртүрлі.')}</p></div>${search()}</div>${cards(kind)}</main>`;}
function exam(){document.title=ui.exam+' | '+ui.short;return `<main class="wrap" id="main">${crumbs()}<div class="page-heading"><h1>${t('Экзаменационный центр','Examination center','Емтихан орталығы')}</h1></div>${examCenter(L)}</main>`;}
function notFound(){document.title='404 | '+ui.short;return `<main class="wrap" id="main"><h1>404</h1><p>${t('Страница не найдена','Page not found','Бет табылмады')}</p><a class="button" href="${href('/contents')}">${ui.toc}</a></main>`;}
let html;const match=path.match(/^\/modules\/(\d+)(?:\/([a-z-]+))?$/);if(path==='/')html=home();else if(path==='/contents')html=hub('module');else if(path==='/labs')html=hub('labs');else if(path==='/patients')html=patientCaseHub();else if(path==='/patients/advanced')html=advancedPatients(L);else if(path==='/exam')html=exam();else if(match)html=modulePage(Number(match[1]),match[2]);else html=notFound();document.querySelector('#app').innerHTML=html;
document.querySelector('#search')?.addEventListener('input',e=>{const q=e.target.value.trim().toLocaleLowerCase();let count=0;document.querySelectorAll('[data-search]').forEach(el=>{const ok=el.dataset.search.toLocaleLowerCase().includes(q);el.hidden=!ok;if(ok)count++});document.querySelector('#no-results').hidden=count>0;});

if(match && Number(match[1])===1 && match[2] && match[2]!=='interactive')initLesson();

if(match && match[2]==='interactive' && Number(match[1])<=2)initLaboratory();
if(match && Number(match[1])>=6 && match[2])initApplied(Number(match[1]),L);
if(path==='/exam')initExamCenter(L);
if(match && Number(match[1])===2 && match[2])initModuleTwo();

if(match && Number(match[1])===3 && match[2])initModuleThree();

if(match && Number(match[1])===4 && match[2])initModuleFour(L);

if(match && Number(match[1])===5 && match[2])initModuleFive(L);

if(match && Number(match[1])===6 && match[2])initModuleSix();
if(match && Number(match[1])===7 && match[2])initModuleSeven();
if(match && Number(match[1])===8 && match[2])initModuleEight();

if(match && Number(match[1])===9 && match[2])initModuleNine();

if(match && Number(match[1])===10 && match[2])initModuleTen(L);

if(match && Number(match[1])===11 && match[2])initModuleEleven(L);
if(match && Number(match[1])===12 && match[2])initModuleTwelve(L);
if(match && Number(match[1])===13 && match[2])initModuleThirteen(L);

if(match && Number(match[1])===14 && match[2])initModuleFourteen(L);
if(match && Number(match[1])===15 && match[2])initModuleFifteen(L);
if(match && Number(match[1])===16 && match[2])initModuleSixteen(L);
if(match && Number(match[1])===17 && match[2])initModuleSeventeen(L);
if(match && Number(match[1])===18 && match[2])initModuleEighteen(L);
if(match && Number(match[1])===19 && match[2])initModuleNineteen(L);

if(match && Number(match[1])===20 && match[2])initModuleTwenty(L);
if(match && Number(match[1])===21 && match[2])initModuleTwentyOne(L);
if(match && Number(match[1])===22 && match[2])initModuleTwentyTwo(L);
if(match && Number(match[1])===23 && match[2])initModuleTwentyThree(L);

if(match && Number(match[1])===24 && match[2])initModuleTwentyFour(L);

if(match && Number(match[1])===25 && match[2])initModuleTwentyFive(L);

if(match && [17,18,19].includes(Number(match[1]))){initRegulationAtlas(lang);initReceptorBreathingAnimation(lang);}

if(path==='/patients')initPatientHub();

if(path==='/patients/advanced')initAdvancedPatients(L);

if(match && match[2]==='virtual-patient')initAdvancedPatients(L);

initIntegratedLabs(L);
initPracticeWorkshops(L);
shuffleSelfAssessments();
initLearningWorkspace();
