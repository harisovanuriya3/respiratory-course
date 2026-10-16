import {readFile,writeFile} from 'node:fs/promises';
import {modules,sections} from './public/content.js';
import {createHash} from 'node:crypto';
// Execute the actual page renderer with its real imported lesson functions.
// This deliberately excludes event initializers: interaction is tested separately.
const source=await readFile('public/app.js','utf8');
const imports=[...source.matchAll(/^import\s*\{([^}]+)\}\s*from\s*'([^']+)'\s*;/gm)];
const bindings={};
for(const [,names,path] of imports){const mod=await import(new URL('./public/'+path.replace('./',''),import.meta.url));for(const name of names.split(',').map(x=>x.trim()))bindings[name]=mod[name];}
const prefix=source.slice(0,source.indexOf('let html;')).replace(/^import[^\n]+\n/gm,'');
const document={documentElement:{},querySelector:()=>({innerHTML:''})};
globalThis.window={};
const rows=[];
const paragraphOccurrences=new Map();
const mixedEnglish=[];
const untranslatedProse=[];
const renderedHashes={};
for(let L=0;L<3;L++){
 const render=new Function(...Object.keys(bindings),'document','location','innerWidth',prefix+';return modulePage;')(...Object.values(bindings),document,{search:'?lang='+['RU','EN','KZ'][L],pathname:'/'},1000);
 const primaryBindings={...bindings};
 for(const name of ['academicMasterChapter','curatedAcademic','coreScientificUnit','scientificReferences','integratedLab','modulePatient','regulationAtlas','mediaAtlas'])primaryBindings[name]=()=>'';
 const primaryRender=new Function(...Object.keys(primaryBindings),'document','location','innerWidth',prefix+';return modulePage;')(...Object.values(primaryBindings),document,{search:'?lang='+['RU','EN','KZ'][L],pathname:'/'},1000);
 for(const m of modules)for(const s of sections){
  try{const html=render(m.id,s[0]);const body=html.split('<div class="section-heading">')[1]?.split('<nav class="pagination">')[0]||html;
   const primaryHtml=primaryRender(m.id,s[0]);const primaryBody=primaryHtml.split('<div class="section-heading">')[1]?.split('<nav class="pagination">')[0]||primaryHtml;
   const primaryCharacters=primaryBody.replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim().length;
   renderedHashes[m.id+'/'+s[0]+'/'+['RU','EN','KZ'][L]]=createHash('sha256').update(body).digest('hex');
   if(/\$\{(?:t|tr|T)\(/.test(body))throw Error('Unexecuted template/function in page content');
   if(L===1)for(const match of body.matchAll(/<(p|h3|h4|legend|button|label|li|dt|dd|summary)(?:\s[^>]*)?>([\s\S]*?)<\/\1>/g)){const text=match[2].replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();const originalBibliography=/^(?:West,|Pokrovsky VM,|Покровский В\. М\.,|Судаков К\. В\.)/.test(text);if(!originalBibliography&&(text.match(/[А-Яа-яЁёӘәҒғҚқҢңӨөҰұҮүҺһІі]/g)||[]).length>5)mixedEnglish.push({module:m.id,section:s[0],text});}
   if(L!==1)for(const match of body.matchAll(/<(p|li|dt|dd|summary)(?:\s[^>]*)?>([\s\S]*?)<\/\1>/g)){const text=match[2].replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();if((text.match(/\b[a-z]{3,}\b/g)||[]).length>9&&(text.match(/[А-Яа-яӘәҒғҚқҢңӨөҰұҮүІі]/g)||[]).length<5&&!/West|Hall|Ganong|Boron|Graham|Stanojevic|Pokrovsky|https?:|OpenStax|Wikimedia|Elsevier/.test(text))untranslatedProse.push({module:m.id,section:s[0],language:['RU','EN','KZ'][L],text});}
   for(const match of body.matchAll(/<(p|li|dt|dd|summary)(?:\s[^>]*)?>([\s\S]*?)<\/\1>/g)){const text=match[2].replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();if(text.length<160)continue;const key=L+'|'+text;const paths=paragraphOccurrences.get(key)||new Set();paths.add(m.id+'/'+s[0]);paragraphOccurrences.set(key,paths);}
   rows.push({module:m.id,section:s[0],language:['RU','EN','KZ'][L],primaryCharacters,characters:body.replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim().length,placeholder:/Content has not been added|Материал пока не добавлен|Материал әлі қосылмаған/.test(body),controls:(body.match(/<(?:input|button|textarea|select)\b/g)||[]).length,patient:body.includes('data-advanced='),error:null});
  }catch(e){rows.push({module:m.id,section:s[0],language:['RU','EN','KZ'][L],error:e.message});}
 }
}
const summary={pages:rows.length,errors:rows.filter(r=>r.error),placeholders:rows.filter(r=>r.placeholder),short:rows.filter(r=>r.characters<250),patientsWithoutScenario:rows.filter(r=>r.section==='virtual-patient'&&!r.patient),labsWithoutControls:rows.filter(r=>r.section==='interactive'&&!r.controls),selfAssessmentsWithoutControls:rows.filter(r=>['tests','pretest'].includes(r.section)&&r.controls<2)};
const repeatedParagraphs=[...paragraphOccurrences].filter(([,paths])=>paths.size>1).map(([text,paths])=>({language:['RU','EN','KZ'][Number(text[0])],text:text.slice(2),paths:[...paths]}));
const output=process.argv[2]||'docs/RENDERED_AUDIT.json';
await writeFile(output,JSON.stringify({summary,rows,repeatedParagraphs,mixedEnglish,untranslatedProse,renderedHashes},null,2));
console.log(JSON.stringify(Object.fromEntries(Object.entries(summary).map(([k,v])=>[k,Array.isArray(v)?v.length:v])),null,2));
if(summary.errors.length||summary.placeholders.length||summary.short.length||summary.patientsWithoutScenario.length||summary.labsWithoutControls.length||summary.selfAssessmentsWithoutControls.length||mixedEnglish.length||untranslatedProse.length)process.exitCode=1;
