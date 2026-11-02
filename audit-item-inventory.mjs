// Reproducible per-module inventory of the last rendered snapshot and current media sources.
// Run npm run audit:content first to refresh docs/RENDERED_AUDIT.json.
import {readFileSync,readdirSync,writeFileSync} from 'node:fs';
import {modules,sections} from './public/content.js';
const snapshot=JSON.parse(readFileSync('docs/RENDERED_AUDIT.json','utf8'));
const rows=snapshot.rows||[];
const files=readdirSync('public').filter(n=>n.endsWith('.js'));
const mediaFiles=files.filter(n=>/(media|image|animation|video|atlas|diagram|visual|scene)/i.test(n));
const urls=new Set();const urlByFile={};
for(const name of files){const source=readFileSync('public/'+name,'utf8');const links=[...source.matchAll(/https?:\/\/[^\s"'<>\\`]+/g)].map(m=>m[0].replace(/[),;]+$/,''));urlByFile[name]=links.length;links.forEach(x=>urls.add(x))}
const headers=['module','title','theory_primary_chars_ru','practice_primary_chars_ru','case_primary_chars_ru','test_primary_chars_ru','lab_primary_chars_ru','media_primary_chars_ru','theory_total_chars_ru','practice_total_chars_ru','case_total_chars_ru','test_total_chars_ru','lab_controls_ru','test_controls_ru','media_controls_ru','missing_language_routes'];
const data=[];
for(const module of modules){
 const get=(section,language='RU')=>rows.find(r=>r.module===module.id&&r.section===section&&r.language===language);
 const missing=sections.flatMap(s=>['RU','EN','KZ'].filter(l=>!get(s[0],l)||get(s[0],l).error)).length;
 data.push([module.id,module.title[0],...['theory','practice','cases','tests','interactive','media'].map(s=>get(s)?.primaryCharacters??''),...['theory','practice','cases','tests'].map(s=>get(s)?.characters??''),...['interactive','tests','media'].map(s=>get(s)?.controls??''),missing]);
}
const csvEscape=v=>'"'+String(v).replaceAll('"','""')+'"';
writeFileSync('docs/RESPIRATORY_MODULE_INVENTORY.csv',[headers.join(','),...data.map(row=>row.map(csvEscape).join(','))].join('\n')+'\n');
const summary={source:'docs/RENDERED_AUDIT.json',snapshotDate:'2026-10-16',generatedBy:'audit-item-inventory.mjs',moduleCount:modules.length,sectionCount:sections.length,renderedLanguageRoutes:rows.length,distinctExternalUrlStringsInJs:urls.size,mediaRelatedSourceFiles:mediaFiles,mediaRelatedSourceFileCount:mediaFiles.length,externalUrlOccurrencesByFile:Object.fromEntries(Object.entries(urlByFile).filter(([,n])=>n>0)),limitations:['Character counts are not independent lessons, tasks or test items.','Control counts are HTML controls, not distinct laboratory experiments.','Media source-file count is not an image or animation count.','External URL strings are not checked for reachability, licensing or topical relevance.','This snapshot predates new navigation and practicum; rerun content audit and browser tests after merging.']};
writeFileSync('docs/RESPIRATORY_INVENTORY_SUMMARY.json',JSON.stringify(summary,null,2)+'\n');
console.log(JSON.stringify({moduleCount:summary.moduleCount,renderedLanguageRoutes:summary.renderedLanguageRoutes,distinctExternalUrlStringsInJs:summary.distinctExternalUrlStringsInJs,mediaRelatedSourceFileCount:summary.mediaRelatedSourceFileCount},null,2));
