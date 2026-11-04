import {allExamItems} from './exam-center.js';
import {modules} from './content.js';
const t=(L,ru,en,kz)=>[ru,en,kz][L];
export function examModuleCoverage(L,lang){
 const counts=new Map(modules.map(m=>[m.id,0]));
 for(const item of allExamItems)if(counts.has(item.module))counts.set(item.module,counts.get(item.module)+1);
 return '<section class="lesson-card"><h2>'+t(L,'Покрытие экзаменационного банка по 25 модулям','Exam bank coverage across 25 modules','25 модуль бойынша емтихан қорының қамтылуы')+'</h2><p>'+t(L,'Количество заданий в действующем банке; не означает независимую экспертную проверку каждого вопроса.','Counts reflect the active item bank, not independent expert validation of each question.','Сандар қолданыстағы тапсырмалар қорын көрсетеді; әр сұрақтың тәуелсіз сараптамасын білдірмейді.')+'</p><div class="module-grid">'+modules.map(m=>'<article class="lesson-card"><h3>'+m.id+'. '+m.title[L]+'</h3><p>'+t(L,'Заданий: ','Items: ','Тапсырмалар: ')+counts.get(m.id)+'</p><a href="/modules/'+m.id+'/tests?lang='+lang+'">'+t(L,'Самопроверка модуля','Module self-assessment','Модульдің өзіндік тексеруі')+'</a></article>').join('')+'</div></section>';
}
