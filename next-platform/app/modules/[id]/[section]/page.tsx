import {notFound} from 'next/navigation';
import Link from 'next/link';
import InteractiveLabFlow from '../../../../components/InteractiveLabFlow';
import LegacyContent from '../../../../components/LegacyContent';
import NotesWorkspace from '../../../../components/NotesWorkspace';
import ModuleOneNotes from '../../../../components/ModuleOneNotes';
import VoiceWorkspace from '../../../../components/VoiceWorkspace';
import ProgressWorkspace from '../../../../components/ProgressWorkspace';
import QuizWorkspace from '../../../../components/QuizWorkspace';
import ModuleQuizWorkspace from '../../../../components/ModuleQuizWorkspace';
import ModuleThreeMedia from '../../../../components/ModuleThreeMedia';
import ModuleFourMedia from '../../../../components/ModuleFourMedia';
import ModuleFiveMedia from '../../../../components/ModuleFiveMedia';
import ModuleTenPatient from '../../../../components/ModuleTenPatient';
import VirtualPatientWorkspace from '../../../../components/VirtualPatientWorkspace';
import PracticeCaseWorkspace from '../../../../components/PracticeCaseWorkspace';
import ModuleOneVisual from '../../../../components/ModuleOneVisual';
import ModuleOneDiscussion from '../../../../components/ModuleOneDiscussion';
import ModuleOneMedia from '../../../../components/ModuleOneMedia';
import ModuleOneVoice from '../../../../components/ModuleOneVoice';
import ModuleOneCases from '../../../../components/ModuleOneCases';
import ModuleOneGlossary from '../../../../components/ModuleOneGlossary';
import ModuleOnePatient from '../../../../components/ModuleOnePatient';
import ModuleOneProgress from '../../../../components/ModuleOneProgress';
import {ModuleOneObjectives,ModuleOneSummary,ModuleOneClinical,ModuleOneReferences} from '../../../../components/ModuleOneCore';
import SectionNavigation from '../../../../components/SectionNavigation';
import CoursePager from '../../../../components/CoursePager';
import VoiceTools from '../../../../components/VoiceTools';
import LearningTools from '../../../../components/LearningTools';
import {legacyContent} from '../../../../lib/legacy-content';
import {extractLegacyQuiz,extractLegacyQuizOrEmpty} from '../../../../lib/legacy-quiz';
import {moduleOneQuiz} from '../../../../lib/module-one-quiz';
import {isLanguage,isSection,moduleById,sectionNames} from '../../../../lib/course';

const staticSections=new Set(['objectives','theory','one-minute','clinical','questions','glossary','references']);
const migratedQuizModules=new Set(Array.from({length:25},(_,index)=>index+1));
const migratedVirtualPatients=new Set(Array.from({length:25},(_,index)=>index+1));
const migratedCases=new Set([1,4,7,8,11,12,13,14,15,16,17,18,21,22,23,24]);

export default async function Page({params,searchParams}:{params:Promise<{id:string;section:string}>;searchParams:Promise<{lang?:string}>}){
  const route=await params,{lang='RU'}=await searchParams,id=Number(route.id),section=route.section,module=moduleById(id);
  if(!module||!isSection(section)||!isLanguage(lang))notFound();
  const moduleTenPatient=id===10&&section==='virtual-patient',virtualPatient=section==='virtual-patient'&&migratedVirtualPatients.has(id),practice=section==='practice',caseWorkspace=section==='cases'&&migratedCases.has(id),reactPilot=id===5&&section==='interactive',priorityLab=id===3&&section==='interactive',notesParity=section==='notes',voiceParity=section==='voice',progressQuiz=section==='progress'&&[3,4,5,24,25].includes(id),progressParity=section==='progress'&&!progressQuiz,moduleQuiz=(section==='pretest'||section==='tests')&&migratedQuizModules.has(id),moduleThreeMedia=id===3&&section==='media',moduleFourMedia=id===4&&section==='media',moduleFiveMedia=id===5&&section==='media',staticParity=staticSections.has(section),entry=legacyContent(id,section,lang);
  const plain=(value:string)=>value.replace(/<[^>]+>/g,' ').replace(/&nbsp;/g,' ').replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/\s+/g,' ').trim(),readingText=plain(entry.html),labels=progressParity?[...entry.html.matchAll(/<label\b[^>]*>([\s\S]*?)<\/label>/gi)].map(match=>plain(match[1])):[],items=progressParity?[...entry.html.matchAll(/<li\b[^>]*>([\s\S]*?)<\/li>/gi)].map(match=>plain(match[1])):[],fallback={RU:['Объяснить физиологический механизм','Выполнить расчёт с единицами','Назвать ограничение модели'],EN:['Explain the physiological mechanism','Complete a calculation with units','State a model limitation'],KZ:['Физиологиялық механизмді түсіндіру','Өлшем бірліктерімен есептеу','Модель шектеуін атау']}[lang],criteria=labels.length?labels:items.length?items.slice(0,6):fallback,quiz=progressQuiz||moduleQuiz?(id===1&&moduleQuiz?moduleOneQuiz(lang,section as 'pretest'|'tests'):extractLegacyQuiz(entry.html)):[],patientQuiz=virtualPatient?extractLegacyQuizOrEmpty(entry.html):[];
  const legacyVisible=!moduleTenPatient&&!virtualPatient&&!(id===1&&(section==='practice'||section==='questions'||section==='media'||section==='voice'||section==='cases'||section==='progress'||section==='objectives'||section==='one-minute'||section==='clinical'||section==='references'||section==='glossary'));
  return <div className="shell"><SectionNavigation module={module} active={section} language={lang}/><main>
    <nav className="languages" aria-label="Language">{(['RU','EN','KZ'] as const).map(item=><Link key={item} aria-current={item===lang?'page':undefined} href={`/modules/${id}/${section}?lang=${item}`}>{item}</Link>)}</nav>
    <CoursePager moduleId={id} section={section} language={lang}/>{!priorityLab&&<LearningTools language={lang}/>}<p>Module {String(id).padStart(2,'0')} / 25 · {module.sections.indexOf(section)+1} / 17</p><h1>{sectionNames[section][lang]}</h1>
    {!voiceParity&&!priorityLab&&<VoiceTools language={lang} text={readingText}/>} {reactPilot&&<InteractiveLabFlow language={lang} moduleId={5}><ModuleFiveMedia language={lang}/></InteractiveLabFlow>}{notesParity&&(id===1?<ModuleOneNotes language={lang}/>:<NotesWorkspace moduleId={id} language={lang}/>)} {voiceParity&&(id===1?<ModuleOneVoice language={lang}/>:<VoiceWorkspace language={lang} readingText={readingText}/>)} {progressParity&&(id===1?<ModuleOneProgress language={lang}/>:<ProgressWorkspace moduleId={id} language={lang} criteria={criteria}/>)} {progressQuiz&&<QuizWorkspace moduleId={id} language={lang} questions={quiz}/>} {moduleQuiz&&<ModuleQuizWorkspace moduleId={id} language={lang} mode={section as 'pretest'|'tests'} questions={quiz}/>} {id===1&&section==='objectives'&&<ModuleOneObjectives language={lang}/>} {id===1&&section==='one-minute'&&<ModuleOneSummary language={lang}/>} {id===1&&section==='clinical'&&<ModuleOneClinical language={lang}/>} {id===1&&section==='references'&&<ModuleOneReferences language={lang}/>} {id===1&&section==='glossary'&&<ModuleOneGlossary language={lang}/>} {id===1&&section==='questions'&&<ModuleOneDiscussion language={lang}/>} {id===1&&section==='media'&&<ModuleOneMedia language={lang}/>} {practice&&<PracticeCaseWorkspace moduleId={id} language={lang} section="practice" html={entry.html}/>} {caseWorkspace&&(id===1?<ModuleOneCases language={lang}/>:<PracticeCaseWorkspace moduleId={id} language={lang} section="cases" html={entry.html}/>)} {moduleThreeMedia&&<ModuleThreeMedia language={lang}/>} {moduleFourMedia&&<ModuleFourMedia language={lang}/>} {moduleFiveMedia&&<ModuleFiveMedia language={lang}/>} {moduleTenPatient&&<ModuleTenPatient language={lang}/>} {virtualPatient&&(id===1?<ModuleOnePatient language={lang}/>:<VirtualPatientWorkspace moduleId={id} language={lang} html={entry.html} quizQuestions={patientQuiz}/>)} {legacyVisible&&<LegacyContent moduleId={id} section={section} language={lang} interactivePending={!staticParity&&!practice&&!caseWorkspace&&!reactPilot&&!notesParity&&!voiceParity&&!progressParity&&!progressQuiz&&!moduleQuiz&&!moduleThreeMedia&&!moduleFourMedia&&!moduleFiveMedia} omitTextareas={notesParity||caseWorkspace} omitCheckboxes={progressParity} omitQuiz={progressQuiz||moduleQuiz||caseWorkspace} omitExercises={practice||caseWorkspace} omitModuleThreeLab={moduleThreeMedia} omitModuleFourLab={moduleFourMedia} omitModuleFiveLab={moduleFiveMedia||reactPilot}/>} {priorityLab&&<details className="voiceDrawer"><summary>{lang==='EN'?'Voice and study tools':lang==='KZ'?'Дауыс және оқу құралдары':'Голосовые и учебные инструменты'}</summary><VoiceTools language={lang} text={readingText}/><LearningTools language={lang}/></details>}<CoursePager moduleId={id} section={section} language={lang}/>
  </main></div>;
}
