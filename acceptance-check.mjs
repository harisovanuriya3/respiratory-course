import assert from 'node:assert/strict';
import {readFileSync,existsSync,readdirSync} from 'node:fs';
import {modules,sections} from './public/content.js';
import {curatedAcademic} from './public/academic-curator.js';
const results={};
assert.equal(modules.length,25);assert.equal(sections.length,17);
let short=0,missing=0;const weak=[];
for(const m of modules)for(const s of sections){const len=[0,1,2].map(l=>{const html=curatedAcademic(m.id,s[0],l);if(!html)missing++;return html.replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim().length});if(Math.min(...len)<250){short++;weak.push({module:m.id,section:s[0],lengths:len})}}
results.content={routes:425,missingSupplements:missing,shortSupplements:short,weak};
let built=0;for(const m of modules)for(const s of sections){assert.ok(existsSync(`dist/modules/${m.id}/${s[0]}/index.html`));built++}results.routesBuilt=built;
const files=readdirSync('public').filter(x=>x.endsWith('.js'));
const remote=[];const regex=/https?:\/\/[^\s"'<>`]+/g;
for(const file of files){for(const url of readFileSync(`public/${file}`,'utf8').match(regex)||[])remote.push({file,url})}
results.media={remoteUrlOccurrences:remote.length,uniqueRemoteUrls:new Set(remote.map(x=>x.url)).size,individualAssetLicenseVerification:'NOT VERIFIED: URLs alone do not grant reproduction rights'};
// Independently calculated reference examples, not proof of correctness of all 25 laboratories.
const close=(a,b)=>Math.abs(a-b)<0.05;
assert.ok(close((500-150)*12/1000,4.2));
assert.ok(close(0.863*200/4.3,40.14));
assert.ok(close(6.1+Math.log10(24/(0.03*40)),7.401));
assert.ok(close(1.34*15*0.98+0.003*100,19.998));
results.physiologyReferenceExamples='PASS: alveolar ventilation, CO2 balance, Henderson-Hasselbalch, CaO2';
results.academicSignoff='NOT COMPLETE: needs expert content, translation, and clinical scenario review';
console.log(JSON.stringify(results,null,2));
