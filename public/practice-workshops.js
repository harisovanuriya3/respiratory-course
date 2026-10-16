import {foundationPractice} from './practice-foundations.js';
import {gasExchangePractice} from './practice-gas-exchange.js';
import {regulationPractice} from './practice-regulation.js';
export const practiceWorkshops={...foundationPractice,...gasExchangePractice,...regulationPractice};
const words={RU:['Расчёт и физиологическая интерпретация','Численный ответ','Проверить расчёт','Разбор решения','Смысл и ограничения модели','Обсуждение с объяснением','Показать объяснение','Введите конечное число; допускается десятичная запятая.','Верно. Сопоставьте результат с допущениями ниже.','Пока неверно. Проверьте единицы и ход решения; затем повторите попытку.','Перейти к лаборатории модуля','Это авторская учебная задача, а не клинический протокол. Научные ориентиры и проверенные источники приведены в разделе литературы.','Литература'],EN:['Calculation and physiological interpretation','Numerical answer','Check calculation','Worked solution','Meaning and model limitations','Discussion with explanation','Show explanation','Enter a finite number; a decimal comma is accepted.','Correct. Compare your result with the assumptions below.','Not yet correct. Check units and the worked solution, then try again.','Open this module’s laboratory','This is an original teaching exercise, not a clinical protocol. Scientific background and verified sources are listed in the references section.','References'],KZ:['Есептеу және физиологиялық түсіндіру','Сандық жауап','Есепті тексеру','Шешу жолы','Мағынасы және модель шектеулері','Түсіндірмесі бар талқылау','Түсіндірмені көрсету','Шекті сан енгізіңіз; ондық үтірді қолдануға болады.','Дұрыс. Нәтижені төмендегі шарттармен салыстырыңыз.','Әзірге қате. Өлшемдерді және шешу жолын тексеріп, қайталап көріңіз.','Модуль зертханасына өту','Бұл — авторлық оқу есебі, клиникалық хаттама емес. Ғылыми негіздер мен тексерілген дереккөздер әдебиет бөлімінде берілген.','Әдебиет']};
const escape=x=>String(x).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function checkPracticeAnswer(moduleId,value){
 const data=practiceWorkshops[moduleId];
 const normalized=String(value??'').trim().replace(',','.');
 if(!data||!normalized||!/^[-+]?(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?$/i.test(normalized))return 'invalid';
 const n=Number(normalized);if(!Number.isFinite(n))return 'invalid';
 return Math.abs(n-data.expected)<=Math.max(0.0005,Math.abs(data.expected)*0.005)?'correct':'incorrect';
}
export function workedPractice(moduleId,section,L='RU'){
 if(typeof L==='number')L=['RU','EN','KZ'][L]||'RU';
 const data=practiceWorkshops[moduleId];if(!data||!['practice','questions'].includes(section))return '';
 const i={RU:0,EN:1,KZ:2}[L]??0,w=words[L]||words.RU,t=key=>escape(data[key][i]);
 if(section==='questions')return `<section class="learning-panel practice-discussion"><h2>${w[5]}</h2><h3>${t('question')}</h3><details><summary>${w[6]}</summary><p>${t('answer')}</p></details></section>`;
 return `<section class="learning-panel practice-workshop"><h2>${w[0]}</h2><p>${t('problem')}</p><form data-practice="${moduleId}" novalidate><label for="practice-answer-${moduleId}">${w[1]} (${t('unit')})</label><input id="practice-answer-${moduleId}" name="answer" type="text" inputmode="decimal" autocomplete="off" required style="max-width:100%;box-sizing:border-box"><button type="submit">${w[2]}</button><p data-practice-feedback role="status" aria-live="polite"></p></form><details><summary>${w[3]}</summary><p>${t('solution')}</p></details><h3>${w[4]}</h3><p>${t('interpretation')}</p><p>${w[11]} <a href="/modules/${moduleId}/references?lang=${L}">${w[12]}</a>.</p><a href="/modules/${moduleId}/interactive?lang=${L}">${w[10]}</a></section>`;
}
export function initPracticeWorkshops(L='RU'){
 if(typeof L==='number')L=['RU','EN','KZ'][L]||'RU';
 const w=words[L]||words.RU;
 document.querySelectorAll('form[data-practice]').forEach(form=>{
  if(form.dataset.initialized)return;form.dataset.initialized='true';
  form.addEventListener('submit',event=>{event.preventDefault();const result=checkPracticeAnswer(Number(form.dataset.practice),form.elements.answer.value);form.querySelector('[data-practice-feedback]').textContent=w[result==='invalid'?7:result==='correct'?8:9];form.querySelector('[data-practice-feedback]').dataset.result=result;});
 });
}
