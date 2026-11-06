import {mediaPreviewAssets,centralMediaLibrary} from './public/central-media-library.js';
import {modules} from './public/content.js';
import {writeFileSync,mkdirSync} from 'node:fs';
const groups=new Map();
for(const [id,asset] of Object.entries(mediaPreviewAssets)){
 const arr=groups.get(asset)||[];arr.push(Number(id));groups.set(asset,arr);
}
const duplicates=[...groups].filter(([,ids])=>ids.length>1).map(([asset,modules])=>({asset,modules}));
const languageChecks={};
for(const [L,lang] of ['RU','EN','KZ'].entries()){
 const html=centralMediaLibrary(L,lang);
 languageChecks[lang]={
  cards:(html.match(/class="lesson-card"/g)||[]).length,
  missingModuleMedia:modules.filter(m=>!html.includes('/modules/'+m.id+'/media?lang='+lang)).map(m=>m.id),
  missingModuleInteractive:modules.filter(m=>!html.includes('/modules/'+m.id+'/interactive?lang='+lang)).map(m=>m.id),
  reflexAtlasLink:html.includes('#respiratory-reflex-infographics'),
  uniqueVisiblePreviewImages:(html.match(/<img loading="lazy"/g)||[]).length,
  topicCovers:(html.match(/class="media-topic-cover"/g)||[]).length,
  spirometryLinks:[7,24].every(id=>html.includes('/modules/'+id+'/interactive?lang='+lang))
 };
}
const report={generatedAt:new Date().toISOString(),modules:modules.length,uniqueBasePhotos:groups.size,repeatedBasePhotoGroups:duplicates,languageChecks,publicationGate:duplicates.length===0&&Object.values(languageChecks).every(x=>x.cards===25&&x.missingModuleMedia.length===0&&x.missingModuleInteractive.length===0&&x.reflexAtlasLink&&x.spirometryLinks&&x.topicCovers===0)?'PASS':'BLOCKED_VISUAL_AUDIT'};
mkdirSync('audit-results',{recursive:true});
writeFileSync('audit-results/media-preview-audit.json',JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify(report,null,2));
if(report.publicationGate!=='PASS')console.warn('VISUAL AUDIT NOT CLOSED: repeated or incomplete module previews; do not describe the textbook as visually approved.');
