import {topicCore} from './topic-core-2-25.js';
const t=(L,ru,en,kz)=>[ru,en,kz][L];
const escape=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
export function topicLearningStations(mid,section,L,lang){
 const item=topicCore.find(x=>x.id===mid);
 if(!item)return '';
 const statement=escape(item.text[L]);
 const url=s=>'/modules/'+mid+'/'+s+'?lang='+lang;
 if(section==='tests')return '<section class="lesson-card"><h3>'+t(L,'Дополнительная проверка понимания','Additional reasoning check','Түсінуді қосымша тексеру')+'</h3><p>'+statement+'</p><details><summary>'+t(L,'Контрольный вопрос и критерии ответа','Review question and answer criteria','Бақылау сұрағы және жауап өлшемдері')+'</summary><p>'+t(L,'Какие физиологические переменные и допущения необходимы для проверки этого утверждения? Назовите измерение, которое подтвердит механизм, и одно ограничение интерпретации.','Which physiological variables and assumptions are required to test this statement? Identify a measurement supporting the mechanism and one interpretation limitation.','Бұл тұжырымды тексеру үшін қандай физиологиялық айнымалылар мен жорамалдар керек? Механизмді растайтын өлшемді және түсіндірудің бір шектеуін атаңыз.')+'</p></details></section>';
 if(section==='media')return '<section class="lesson-card"><h3>'+t(L,'Физиологический механизм и связанные материалы','Physiological mechanism and related resources','Физиологиялық механизм және байланысты материалдар')+'</h3><p>'+statement+'</p><p><a href="'+url('theory')+'">'+t(L,'Теоретическое объяснение','Theory explanation','Теориялық түсіндіру')+'</a> · <a href="'+url('interactive')+'">'+t(L,'Лаборатория','Laboratory','Зертхана')+'</a> · <a href="/media-library?lang='+lang+'">'+t(L,'Общая медиатека','Central media library','Ортақ медиатека')+'</a></p></section>';
 if(section==='glossary')return '<section class="lesson-card"><h3>'+t(L,'Терминологический разбор механизма','Mechanism terminology review','Механизм терминдерін талдау')+'</h3><p>'+statement+'</p><p>'+t(L,'Определите ключевые физиологические понятия из формулировки и сопоставьте их с трёхъязычным глоссарием в разделе источников.','Identify the key physiological terms and cross-check them against the trilingual glossary in References.','Негізгі физиологиялық терминдерді анықтап, оларды дереккөздердегі үштілді глоссариймен салыстырыңыз.')+'</p></section>';
 return '';
}
