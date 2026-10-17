import ModuleSixMedia from './ModuleSixMedia';
import VentilationMedia from './VentilationMedia';
import {legacyContent} from '../lib/legacy-content';
import type {Language,SectionId} from '../lib/course';

export default function LegacyContent({moduleId,section,language,interactivePending=false,omitTextareas=false,omitCheckboxes=false,omitQuiz=false,omitModuleThreeLab=false,omitModuleFourLab=false,omitModuleFiveLab=false,omitModuleSixLab=false}:{moduleId:number;section:SectionId;language:Language;interactivePending?:boolean;omitTextareas?:boolean;omitCheckboxes?:boolean;omitQuiz?:boolean;omitModuleThreeLab?:boolean;omitModuleFourLab?:boolean;omitModuleFiveLab?:boolean;omitModuleSixLab?:boolean}){
  const entry=legacyContent(moduleId,section,language),moduleSixMedia=moduleId===6&&section==='media',ventilationMedia=(moduleId===7||moduleId===8)&&section==='media';
  let html=omitTextareas?entry.html.replace(/<textarea\b[^>]*>[\s\S]*?<\/textarea>/gi,''):entry.html;
  if(omitCheckboxes)html=html.replace(/<input\b(?=[^>]*type=["']checkbox["'])[^>]*>/gi,'');
  if(omitQuiz)html=html.replace(/<form\b[^>]*class=["'][^"']*m(?:24|25)quiz[^"']*["'][^>]*>[\s\S]*?<\/form>/gi,'').replace(/<div\b[^>]*class=["'][^"']*m[345]-quiz[^"']*["'][^>]*>[\s\S]*?<\/div>/gi,'');
  if(omitModuleThreeLab)html=html.replace(/<div\b[^>]*class=["'][^"']*m3-lab[^"']*["'][^>]*>[\s\S]*?<\/div>/gi,'').replace(/<button\b[^>]*data-breath-toggle[^>]*>[\s\S]*?<\/button>/gi,'');
  if(omitModuleFourLab)html=html.replace(/<div\b[^>]*class=["'][^"']*m4-lab[^"']*["'][^>]*>[\s\S]*?<\/div>/gi,'').replace(/<button\b[^>]*data-breath-toggle[^>]*>[\s\S]*?<\/button>/gi,'');
  if(omitModuleFiveLab)html=html.replace(/<div\b[^>]*class=["'][^"']*m5-lab[^"']*["'][^>]*>[\s\S]*?<\/div>/gi,'');
  if(omitModuleSixLab||moduleSixMedia)html=html.replace(/<section\b[^>]*id=["']six-lab["'][^>]*>[\s\S]*?<\/section>/gi,'');
  if(ventilationMedia)html=html.replace(new RegExp("<section\\b[^>]*>[\\s\\S]*?id=[\"']"+(moduleId===7?'seven-vt':'eight-vt')+"[\"'][\\s\\S]*?<\\/section>",'i'),'');
  const migratedMedia=moduleSixMedia||ventilationMedia;
  return <>{moduleSixMedia&&<ModuleSixMedia language={language}/>} {ventilationMedia&&<VentilationMedia language={language} moduleId={moduleId as 7|8}/>}<section className="legacyContent card" data-source-sha256={entry.sha256}>{interactivePending&&!migratedMedia&&<p className="migrationWarning" role="status">{language==='EN'?'The validated learning content is present. Legacy controls shown below are reference-only until their React behavior passes parity tests.':language==='KZ'?'Тексерілген оқу материалы бар. Төмендегі ескі басқару элементтері React мінез-құлқы сәйкестік сынағынан өткенше тек анықтамалық.':'Проверенный учебный материал перенесён. Старые элементы управления ниже показаны только для сверки, пока их поведение не прошло перенос и React-тесты.'}</p>}<div dangerouslySetInnerHTML={{__html:html}}/></section></>;
}
