import {coreAssessmentBank} from './course-assessment-core.js';
import {modelProblem} from './course-assessment-models.js';
import {neuralScenarios,anatomyScenarios,centralScenarios} from './course-assessment-scenarios.js';
import {moduleOneQuizBank,moduleOneCaseBank,moduleOneCaseOptions,moduleOnePracticeBank,moduleOneDiscussionBank} from './module-one-expanded-data.js';
const normal=s=>s.replace(/^\d+[.)]\s*/,'').replace(/\s+/g,' ').trim();
const fromRows=rows=>rows.map(row=>({q:row[0],options:row[1],answer:row[2],explain:row[3]}));
const transposeRows=(bank,key)=>bank.RU[key].map((q,i)=>({q:[q[0],bank.EN[key][i][0],bank.KZ[key][i][0]],options:q[1].map((_,j)=>[bank.RU[key][i][1][j],bank.EN[key][i][1][j],bank.KZ[key][i][1][j]]),answer:q[2],explain:[q[3],bank.EN[key][i][3],bank.KZ[key][i][3]],kind:'reasoning',source:'restored-module-one'}));
function contextual(item,scenario,index){return {...item,q:item.q.map((q,L)=>scenario[L]+' '+['Какой из четырёх вариантов соответствует описанному механизму или наблюдению?','Which of the four options matches the mechanism or observation?','Төрт нұсқаның қайсысы сипатталған механизмге немесе бақылауға сәйкес?'][L]),originalPrompt:item.q,kind:['localisation','mechanism','sequence','interpretation','limitation'][index%5],source:'applied-concept',scenario};}
const unique=items=>{const seen=new Set;return items.filter(q=>{const key=normal(q.q[0]);if(seen.has(key))return false;seen.add(key);return true;});};
function buildCourseQuestions(mid,mode='tests'){
 if(mid===1){
  if(mode==='cases')return moduleOneCaseBank.RU.map((row,i)=>({title:[row[0],moduleOneCaseBank.EN[i][0],moduleOneCaseBank.KZ[i][0]],q:[0,1,2].map(L=>{const r=moduleOneCaseBank[['RU','EN','KZ'][L]][i];return r[1]+' '+r[2];}),options:moduleOneCaseOptions[i][0].map((_,j)=>moduleOneCaseOptions[i].map(lang=>lang[j])),answer:0,explain:[row[3],moduleOneCaseBank.EN[i][3],moduleOneCaseBank.KZ[i][3]],kind:['calculation','mechanism','interpretation','prediction','comparison'][i%5],written:true,source:'restored-module-one'}));
  if(mode==='practice')return moduleOnePracticeBank.RU.map((row,i)=>({q:[row[0],moduleOnePracticeBank.EN[i][0],moduleOnePracticeBank.KZ[i][0]],options:row[1].map((_,j)=>[row[1][j],moduleOnePracticeBank.EN[i][1][j],moduleOnePracticeBank.KZ[i][1][j]]),answer:row[2],explain:[row[3],moduleOnePracticeBank.EN[i][3],moduleOnePracticeBank.KZ[i][3]],kind:'application',source:'restored-module-one'}));
  return transposeRows(moduleOneQuizBank,mode==='pretest'?'pre':'tests');
 }
 const core=unique(coreAssessmentBank[mid]||[]).map(q=>({...q,kind:'reasoning',source:'module-concepts'}));
 if(mode==='cases'){
  if(mid===18)return core.slice(0,20).map((q,i)=>contextual(q,neuralScenarios[i],i));
  // Keep anatomical problem solving in anatomy; the remaining items are
  // controlled experiments, not invented patient records.
  if(mid===2)return [...core.slice(0,12).map((q,i)=>contextual(q,anatomyScenarios[i],i)),...Array.from({length:8},(_,i)=>modelProblem(mid,i+12,'cases'))];
  if(mid===17){const selected=[1,2,3,5,6,7,8,9,10,11];return [...selected.map((id,i)=>({...contextual(core[id],centralScenarios[i],i),q:core[id].q.map((text,L)=>centralScenarios[i][L]+' '+text)})),...Array.from({length:10},(_,i)=>modelProblem(mid,i+10,'cases'))];}
  return Array.from({length:20},(_,i)=>modelProblem(mid,i,'cases'));
 }
 const items=[...core],seen=new Set(items.map(q=>normal(q.q[0])));
 for(let i=0;items.length<20&&i<300;i++){
  const candidate=modelProblem(mid,i,'tests'),key=normal(candidate.q[0]);
  if(seen.has(key))continue;
  seen.add(key);items.push(candidate);
 }
 if(items.length!==20)throw Error('Insufficient unique test questions in module '+mid);
 return items;
}
// One public assessment interface for all 25 modules. Module-specific source
// banks are retained unchanged; this adapter checks a common contract.
export function courseQuestions(mid,mode='tests'){
 if(!Number.isInteger(mid)||mid<1||mid>25)throw Error('Invalid respiratory module: '+mid);
 const items=buildCourseQuestions(mid,mode);
 if(!['tests','cases'].includes(mode))return items;
 if(items.length!==20)throw Error('Module '+mid+' '+mode+': expected 20, received '+items.length);
 const seenPrompts=[new Set(),new Set(),new Set()];
 for(const [i,item] of items.entries()){
  for(let L=0;L<3;L++){
   const prompt=String(item.q?.[L]||'').normalize('NFKC').replace(/\s+/g,' ').trim();
   if(seenPrompts[L].has(prompt))throw Error('Repeated question in module '+mid+' '+mode+' language '+L+' index '+i);
   seenPrompts[L].add(prompt);
  }
 }
 for(const [i,item] of items.entries()){
  if(item.q?.length!==3||item.explain?.length!==3||item.options?.length!==4||
     !Number.isInteger(item.answer)||item.answer<0||item.answer>3||
     item.options.some(o=>o?.length!==3)||
     item.q.some(v=>!String(v||'').trim())||
     item.explain.some(v=>!String(v||'').trim()))
   throw Error('Invalid trilingual assessment item '+mid+'/'+mode+'/'+(i+1));
 }
 return items;
}
export function discussionItems(L){const data=moduleOneDiscussionBank[['RU','EN','KZ'][L]];return data.questions.map((q,i)=>({id:i,prompt:q[0],hints:q[1],explanation:q[2]}));}
