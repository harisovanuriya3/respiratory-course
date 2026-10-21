/* Shared presentation of already-computed feedback; never evaluates answer keys. */
const selector='[class*="feedback"],[id*="feedback"],[data-feedback],[data-fb],#exam-feedback ol>li,[data-patient-feedback],[data-m2-feedback],[data-m2-answer]';
function language(){return document.documentElement.lang.toLowerCase().startsWith('kk')?'kk':document.documentElement.lang.toLowerCase().startsWith('en')?'en':'ru';}
const labels={ru:{correct:'Правильно',incorrect:'Неправильно',unanswered:'Ответ не выбран'},en:{correct:'Correct',incorrect:'Incorrect',unanswered:'No answer selected'},kk:{correct:'Дұрыс',incorrect:'Қате',unanswered:'Жауап таңдалмады'}};
export function feedbackState(value,explicit){
 const text=String(value||'').trim().replace(/^\d+[.)]\s*/u,'');if(!text)return null;
 if(/^(?:ответ не выбран|нет ответа|выберите (?:ответ|вариант)|no answer selected|unanswered|choose an? (?:answer|option)|жауап таңдалмады|жауап жоқ|жауапты? таңда)/iu.test(text)||text==='—')return 'unanswered';
 if(explicit==='true')return 'correct';if(explicit==='false')return 'incorrect';
 if(/^[✓✔✅]/u.test(text)||/^(?:верно|правильно|correct|дұрыс)(?:[\s:,.!]|$)/iu.test(text))return 'correct';
 if(/^[✗✘❌×]/u.test(text)||/^(?:неверно|неправильно|incorrect|қате)(?:[\s:,.!]|$)/iu.test(text))return 'incorrect';
 return null;
}
function decorate(element){
 const state=feedbackState(element.textContent,element.dataset.correct);
 if(!state){delete element.dataset.answerStatus;delete element.dataset.answerLabel;delete element.dataset.answerIcon;delete element.dataset.answerStale;return;}
 element.dataset.answerStatus=state;element.dataset.answerLabel=labels[language()][state];element.dataset.answerIcon=state==='correct'?'✓':state==='incorrect'?'✕':'—';delete element.dataset.answerStale;
 if(!element.hasAttribute('role'))element.setAttribute('role','status');
 if(!element.hasAttribute('aria-live'))element.setAttribute('aria-live','polite');
 const question=element.closest('fieldset');if(!question)return;
 question.querySelectorAll('[data-answer-choice]').forEach(label=>delete label.dataset.answerChoice);
 const selected=question.querySelector('input[type="radio"]:checked');
 if(selected&&state!=='unanswered'){const label=selected.closest('label');if(label)label.dataset.answerChoice=state;}
}
export function initAnswerFeedback(root=document.querySelector('#main')||document.querySelector('#app')){
 if(!root)return null;
 const scan=node=>{if(node.nodeType!==1)return;if(node.matches(selector))decorate(node);node.querySelectorAll(selector).forEach(decorate);};scan(root);
 const observer=new MutationObserver(records=>{
  const affected=new Set();for(const record of records){const element=record.target.nodeType===1?record.target:record.target.parentElement;const feedback=element?.closest(selector);if(feedback)affected.add(feedback);for(const node of record.addedNodes||[])scan(node);}
  for(const element of affected)if(root.contains(element))decorate(element);
 });
 observer.observe(root,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['data-correct']});
 root.addEventListener('change',event=>{if(!event.target.matches('input[type="radio"]'))return;const question=event.target.closest('fieldset');if(!question)return;question.querySelectorAll('[data-answer-choice]').forEach(label=>delete label.dataset.answerChoice);question.querySelectorAll('[data-answer-status]').forEach(feedback=>feedback.dataset.answerStale='true');});
 return observer;
}
if(typeof document!=='undefined')initAnswerFeedback();
