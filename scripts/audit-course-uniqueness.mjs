import {modules,sections} from './public/content.js';
import {centralMediaLibrary} from './public/central-media-library.js';
import {patientScenarioData} from './public/advanced-patients.js';
import {readFileSync,writeFileSync} from 'node:fs';
const normalize=s=>String(s||'').toLowerCase().replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim();
const groups=new Map();
const add=(type,id,lang,value)=>{const key=type+'|'+lang+'|'+normalize(value);if(!normalize(value)||normalize(value).length<35)return;const arr=groups.get(key)||[];arr.push(id);groups.set(key,arr);};
for(const m of modules)for(let L=0;L<3;L++)for(const [key,value] of Object.entries(m)){if(typeof value==='string')continue;if(Array.isArray(value)&&typeof value[L]==='string')add('module-'+key,m.id,['RU','EN','KZ'][L],value[L]);}
for(let i=0;i<patientScenarioData.length;i++){const c=patientScenarioData[i];for(let L=0;L<3;L++){add('patient-title',i+1,['RU','EN','KZ'][L],c.title?.[L]);for(let j=0;j<(c.stages||[]).length;j++){add('patient-question',i+1+' stage '+(j+1),['RU','EN','KZ'][L],c.stages[j].question?.[L]);}}}
const duplicates=[...groups].filter(([k,ids])=>new Set(ids).size>1).map(([key,ids])=>({type:key.split('|')[0],language:key.split('|')[1],locations:ids}));
const media=centralMediaLibrary(0,'RU');const previewCount=(media.match(/class="media-preview-link"/g)||[]).length;
const links=Array.from({length:25},(_,i)=>i+1).map(id=>({module:id,media:media.includes('/modules/'+id+'/media?lang=RU'),interactive:media.includes('/modules/'+id+'/interactive?lang=RU')}));
const report={generatedAt:new Date().toISOString(),modules:modules.length,sectionsPerModule:sections.length,advancedCases:patientScenarioData.length,mediaPreviewCount:previewCount,mediaLinks:links,duplicateTextGroups:duplicates,notes:['Automated exact-normalized duplicate scan only. Semantically similar tasks require human review.','Media link existence in HTML does not verify visual quality, asset loading or runtime behavior.','Academic references and correctness of clinical cases require manual evidence verification.']};
writeFileSync('course-audit.json',JSON.stringify(report,null,2)+'\n');
console.log('Audit:',report.modules,'modules,',report.sectionsPerModule,'sections,',report.advancedCases,'cases,',report.mediaPreviewCount,'media previews;',duplicates.length,'exact duplicate groups');
if(modules.length!==25||sections.length!==17||previewCount!==25||links.some(x=>!x.media||!x.interactive))process.exitCode=1;
