import ModuleSixMedia from './ModuleSixMedia';
import VentilationMedia from './VentilationMedia';
import ModuleNineMedia from './ModuleNineMedia';
import ModuleElevenMedia from './ModuleElevenMedia';
import {ModuleTenMedia,ModuleTwelveMedia} from './MediaTenTwelve';
import {ModuleThirteenMedia,ModuleFourteenMedia,ModuleFifteenMedia} from './MediaThirteenFifteen';
import {ModuleSixteenMedia,ModuleSeventeenMedia,ModuleEighteenMedia} from './MediaSixteenEighteen';
import {ModuleNineteenMedia,ModuleTwentyMedia,ModuleTwentyOneMedia} from './MediaNineteenTwentyOne';
import {legacyContent} from '../lib/legacy-content';
import type {Language,SectionId} from '../lib/course';

export default function LegacyContent({moduleId,section,language,interactivePending=false,omitTextareas=false,omitCheckboxes=false,omitQuiz=false,omitModuleThreeLab=false,omitModuleFourLab=false,omitModuleFiveLab=false,omitModuleSixLab=false}:{moduleId:number;section:SectionId;language:Language;interactivePending?:boolean;omitTextareas?:boolean;omitCheckboxes?:boolean;omitQuiz?:boolean;omitModuleThreeLab?:boolean;omitModuleFourLab?:boolean;omitModuleFiveLab?:boolean;omitModuleSixLab?:boolean}){
  const entry=legacyContent(moduleId,section,language),moduleSixMedia=moduleId===6&&section==='media',ventilationMedia=(moduleId===7||moduleId===8)&&section==='media',moduleNineMedia=moduleId===9&&section==='media',moduleTenMedia=moduleId===10&&section==='media',moduleElevenMedia=moduleId===11&&section==='media',moduleTwelveMedia=moduleId===12&&section==='media',moduleThirteenMedia=moduleId===13&&section==='media',moduleFourteenMedia=moduleId===14&&section==='media',moduleFifteenMedia=moduleId===15&&section==='media',moduleSixteenMedia=moduleId===16&&section==='media',moduleSeventeenMedia=moduleId===17&&section==='media',moduleEighteenMedia=moduleId===18&&section==='media',moduleNineteenMedia=moduleId===19&&section==='media',moduleTwentyMedia=moduleId===20&&section==='media',moduleTwentyOneMedia=moduleId===21&&section==='media';
  let html=omitTextareas?entry.html.replace(/<textarea\b[^>]*>[\s\S]*?<\/textarea>/gi,''):entry.html;
  if(omitCheckboxes)html=html.replace(/<input\b(?=[^>]*type=["']checkbox["'])[^>]*>/gi,'');
  if(omitQuiz)html=html.replace(/<form\b[^>]*class=["'][^"']*m(?:24|25)quiz[^"']*["'][^>]*>[\s\S]*?<\/form>/gi,'').replace(/<div\b[^>]*class=["'][^"']*m[345]-quiz[^"']*["'][^>]*>[\s\S]*?<\/div>/gi,'');
  if(omitModuleThreeLab)html=html.replace(/<div\b[^>]*class=["'][^"']*m3-lab[^"']*["'][^>]*>[\s\S]*?<\/div>/gi,'').replace(/<button\b[^>]*data-breath-toggle[^>]*>[\s\S]*?<\/button>/gi,'');
  if(omitModuleFourLab)html=html.replace(/<div\b[^>]*class=["'][^"']*m4-lab[^"']*["'][^>]*>[\s\S]*?<\/div>/gi,'').replace(/<button\b[^>]*data-breath-toggle[^>]*>[\s\S]*?<\/button>/gi,'');
  if(omitModuleFiveLab)html=html.replace(/<div\b[^>]*class=["'][^"']*m5-lab[^"']*["'][^>]*>[\s\S]*?<\/div>/gi,'');
  if(omitModuleSixLab||moduleSixMedia)html=html.replace(/<section\b[^>]*id=["']six-lab["'][^>]*>[\s\S]*?<\/section>/gi,'');
  if(ventilationMedia)html=html.replace(new RegExp("<section\\b[^>]*>[\\s\\S]*?id=[\"']"+(moduleId===7?'seven-vt':'eight-vt')+"[\"'][\\s\\S]*?<\\/section>",'i'),'');
  if(moduleNineMedia)html=html.replace(/<section\b[^>]*>[\s\S]*?id=["']nine-area["'][\s\S]*?<\/section>/i,'');
  if(moduleTenMedia)html=html.replace(/<section\b[^>]*class=["'][^"']*ten-lab[^"']*["'][^>]*>[\s\S]*?<\/section>/i,'');
  if(moduleElevenMedia)html=html.replace(/<div\b[^>]*class=["']eleven-lab["'][^>]*>[\s\S]*?<\/div>/i,'');
  if(moduleTwelveMedia)html=html.replace(/<div\b[^>]*class=["']m12lab["'][^>]*>[\s\S]*?<\/div>/i,'');
  if(moduleThirteenMedia)html=html.replace(/<section\b[^>]*class=["']m13lab["'][^>]*>[\s\S]*?<\/section>/i,'');
  if(moduleFourteenMedia)html=html.replace(/<section\b[^>]*class=["']m14lab["'][^>]*>[\s\S]*?<\/section>/i,'');
  if(moduleFifteenMedia)html=html.replace(/<section\b[^>]*class=["']m15lab["'][^>]*>[\s\S]*?<\/section>/i,'');
  if(moduleSixteenMedia)html=html.replace(/<section\b[^>]*class=["']m16lab["'][^>]*>[\s\S]*?<\/section>/i,'');
  if(moduleSeventeenMedia)html=html.replace(/<section\b[^>]*class=["'][^"']*m17lab[^"']*["'][^>]*>[\s\S]*?<\/section>/i,'');
  if(moduleEighteenMedia)html=html.replace(/<section\b[^>]*class=["'][^"']*m18lab[^"']*["'][^>]*>[\s\S]*?<\/section>/i,'');
  for(const [active,name] of [[moduleNineteenMedia,'m19lab'],[moduleTwentyMedia,'m20lab'],[moduleTwentyOneMedia,'m21lab']] as const)if(active)html=html.replace(new RegExp("<section\\b[^>]*class=[\"'][^\"']*"+name+"[^\"']*[\"'][^>]*>[\\s\\S]*?<\\/section>",'i'),'');
  const migratedMedia=moduleSixMedia||ventilationMedia||moduleNineMedia||moduleTenMedia||moduleElevenMedia||moduleTwelveMedia||moduleThirteenMedia||moduleFourteenMedia||moduleFifteenMedia||moduleSixteenMedia||moduleSeventeenMedia||moduleEighteenMedia||moduleNineteenMedia||moduleTwentyMedia||moduleTwentyOneMedia;
  return <>{moduleSixMedia&&<ModuleSixMedia language={language}/>} {ventilationMedia&&<VentilationMedia language={language} moduleId={moduleId as 7|8}/>} {moduleNineMedia&&<ModuleNineMedia language={language}/>} {moduleTenMedia&&<ModuleTenMedia language={language}/>} {moduleElevenMedia&&<ModuleElevenMedia language={language}/>} {moduleTwelveMedia&&<ModuleTwelveMedia language={language}/>} {moduleThirteenMedia&&<ModuleThirteenMedia language={language}/>} {moduleFourteenMedia&&<ModuleFourteenMedia language={language}/>} {moduleFifteenMedia&&<ModuleFifteenMedia language={language}/>} {moduleSixteenMedia&&<ModuleSixteenMedia language={language}/>} {moduleSeventeenMedia&&<ModuleSeventeenMedia language={language}/>} {moduleEighteenMedia&&<ModuleEighteenMedia language={language}/>} {moduleNineteenMedia&&<ModuleNineteenMedia language={language}/>} {moduleTwentyMedia&&<ModuleTwentyMedia language={language}/>} {moduleTwentyOneMedia&&<ModuleTwentyOneMedia language={language}/>}<section className="legacyContent card" data-source-sha256={entry.sha256}>{interactivePending&&!migratedMedia&&<p className="migrationWarning" role="status">{language==='EN'?'The validated learning content is present. Legacy controls shown below are reference-only until their React behavior passes parity tests.':language==='KZ'?'Тексерілген оқу материалы бар. Төмендегі ескі басқару элементтері React мінез-құлқы сәйкестік сынағынан өткенше тек анықтамалық.':'Проверенный учебный материал перенесён. Старые элементы управления ниже показаны только для сверки, пока их поведение не прошло перенос и React-тесты.'}</p>}<div dangerouslySetInnerHTML={{__html:html}}/></section></>;
}
