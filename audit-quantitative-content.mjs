// Quantitative audit of the last committed rendered-content snapshot.
// This is not a count of independently authored questions or visual assets.
import {readFileSync,writeFileSync} from 'node:fs';
import {modules,sections} from './public/content.js';
const source=JSON.parse(readFileSync('docs/RENDERED_AUDIT.json','utf8'));
const langs=['RU','EN','KZ'];
const groups={};const matrix=[];
for(const m of modules){
 const record={module:m.id,title:m.title[0],sections:{}};
 for(const section of sections){
  const rows=langs.map(language=>source.rows.find(r=>r.module===m.id&&r.section===section[0]&&r.language===language));
  record.sections[section[0]]=rows.every(Boolean)?Object.fromEntries(rows.map(r=>[r.language,{primaryCharacters:r.primaryCharacters,totalCharacters:r.characters,controls:r.controls,placeholder:r.placeholder,error:r.error}])):null;
 }
 matrix.push(record);
}
for(const section of sections){
 const rows=source.rows.filter(r=>r.section===section[0]&&r.language==='RU');
 const values=rows.map(r=>r.primaryCharacters);
 groups[section[0]]={pages:rows.length,averagePrimaryCharacters:Math.round(values.reduce((a,b)=>a+b,0)/Math.max(1,values.length)),minimumPrimaryCharacters:Math.min(...values),maximumPrimaryCharacters:Math.max(...values),pagesUnder500PrimaryCharacters:values.filter(n=>n<500).length,renderedControls:rows.reduce((n,r)=>n+r.controls,0)};
}
const result={source:'docs/RENDERED_AUDIT.json',sourceDate:'2026-10-16',caution:'Counts are rendered route and control measurements, not unique educational items, figures or verified external links. Re-run npm run audit:content after modifications.',modules:modules.length,sectionsPerModule:sections.length,expectedLanguageRoutes:modules.length*sections.length*langs.length,observedLanguageRoutes:source.rows.length,sections:groups,modulesDetail:matrix};
writeFileSync('docs/QUANTITATIVE_CONTENT_AUDIT.json',JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify({modules:result.modules,observedLanguageRoutes:result.observedLanguageRoutes,sections:groups},null,2));
