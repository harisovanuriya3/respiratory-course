import {notFound} from 'next/navigation';
import Link from 'next/link';
import MechanicsLab from '../../../../components/MechanicsLab';
import FreeResponse from '../../../../components/FreeResponse';
import LegacyContent from '../../../../components/LegacyContent';
import NotesWorkspace from '../../../../components/NotesWorkspace';
import VoiceWorkspace from '../../../../components/VoiceWorkspace';
import ProgressWorkspace from '../../../../components/ProgressWorkspace';
import QuizWorkspace from '../../../../components/QuizWorkspace';
import ModuleQuizWorkspace from '../../../../components/ModuleQuizWorkspace';
import ModuleThreeMedia from '../../../../components/ModuleThreeMedia';
import ModuleFourMedia from '../../../../components/ModuleFourMedia';
import ModuleFiveMedia from '../../../../components/ModuleFiveMedia';
import ModuleTenPatient from '../../../../components/ModuleTenPatient';
import VirtualPatientWorkspace from '../../../../components/VirtualPatientWorkspace';
import {legacyContent} from '../../../../lib/legacy-content';
import {extractLegacyQuiz} from '../../../../lib/legacy-quiz';
import {isLanguage,isSection,moduleById,sectionNames} from '../../../../lib/course';

const staticSections=new Set(['objectives','theory','one-minute','clinical','questions','glossary','references']);
const migratedQuizModules=new Set(Array.from({length:25},(_,index)=>index+1));
const migratedVirtualPatients=new Set([7,8,9]);

export default async function Page({params,searchParams}:{params:Promise<{id:string;section:string}>;searchParams:Promise<{lang?:string}>}){
  const route=await params,{lang='RU'}=await searchParams,id=Number(route.id),section=route.section,module=moduleById(id);
  if(!module||!isSection(section)||!isLanguage(lang))notFound();
  const moduleTenPatient=id===10&&section==='virtual-patient',virtualPatient=section==='virtual-patient'&&migratedVirtualPatients.has(id),reactPilot=id===5&&section==='interactive',notesParity=section==='notes',voiceParity=section==='voice',progressQuiz=section==='progress'&&[3,4,5,24,25].includes(id),progressParity=section==='progress'&&!progressQuiz,moduleQuiz=(section==='pretest'||section==='tests')&&migratedQuizModules.has(id),moduleThreeMedia=id===3&&section==='media',moduleFourMedia=id===4&&section==='media',moduleFiveMedia=id===5&&section==='media',staticParity=staticSections.has(section),entry=(voiceParity||progressParity||progressQuiz||moduleQuiz||virtualPatient)?legacyContent(id,section,lang):null;
  const readingText=voiceParity?entry!.html.replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim():'',plain=(value:string)=>value.replace(/<[^>]+>/g,' ').replace(/&nbsp;/g,' ').replace(/&amp;/g,'&').replace(/\s+/g,' ').trim(),labels=progressParity?[...entry!.html.matchAll(/<label\b[^>]*>([\s\S]*?)<\/label>/gi)].map(match=>plain(match[1])):[],items=progressParity?[...entry!.html.matchAll(/<li\b[^>]*>([\s\S]*?)<\/li>/gi)].map(match=>plain(match[1])):[],fallback={RU:['Объяснить физиологический механизм','Выполнить расчёт с единицами','Назвать ограничение модели'],EN:['Explain the physiological mechanism','Complete a calculation with units','State a model limitation'],KZ:['Физиологиялық механизмді түсіндіру','Өлшем бірліктерімен есептеу','Модель шектеуін атау']}[lang],criteria=labels.length?labels:items.length?items.slice(0,6):fallback,quiz=progressQuiz||moduleQuiz?extractLegacyQuiz(entry!.html):[],patientQuiz=virtualPatient?extractLegacyQuiz(entry!.html):[];
  const legacyVisible=!moduleTenPatient&&!virtualPatient;
  return <div className="shell"><aside><Link href="/">← 25 modules</Link><h2>{module.title[lang]}</h2>{module.sections.map(item=><Link key={item} className={item===section?'active':''} href={`/modules/${id}/${item}?lang=${lang}`}>{sectionNames[item][lang]}</Link>)}</aside><main><nav className="languages">{(['RU','EN','KZ'] as const).map(item=><Link key={item} href={`/modules/${id}/${section}?lang=${item}`}>{item}</Link>)}</nav><p>Module {String(id).padStart(2,'0')} / 25 · {module.sections.indexOf(section)+1} / 17</p><h1>{sectionNames[section][lang]}</h1>{reactPilot&&<><MechanicsLab language={lang}/><FreeResponse language={lang}/></>}{notesParity&&<NotesWorkspace moduleId={id} language={lang}/>} {voiceParity&&<VoiceWorkspace language={lang} readingText={readingText}/>} {progressParity&&<ProgressWorkspace moduleId={id} language={lang} criteria={criteria}/>} {progressQuiz&&<QuizWorkspace moduleId={id} language={lang} questions={quiz}/>} {moduleQuiz&&<ModuleQuizWorkspace moduleId={id} language={lang} mode={section as 'pretest'|'tests'} questions={quiz}/>} {moduleThreeMedia&&<ModuleThreeMedia language={lang}/>} {moduleFourMedia&&<ModuleFourMedia language={lang}/>} {moduleFiveMedia&&<ModuleFiveMedia language={lang}/>} {moduleTenPatient&&<ModuleTenPatient language={lang}/>} {virtualPatient&&entry&&<VirtualPatientWorkspace moduleId={id} language={lang} html={entry.html} quizQuestions={patientQuiz}/>} {legacyVisible&&<LegacyContent moduleId={id} section={section} language={lang} interactivePending={!staticParity&&!reactPilot&&!notesParity&&!voiceParity&&!progressParity&&!progressQuiz&&!moduleQuiz&&!moduleThreeMedia&&!moduleFourMedia&&!moduleFiveMedia} omitTextareas={notesParity} omitCheckboxes={progressParity} omitQuiz={progressQuiz||moduleQuiz} omitModuleThreeLab={moduleThreeMedia} omitModuleFourLab={moduleFourMedia} omitModuleFiveLab={moduleFiveMedia}/>}</main></div>;
}
