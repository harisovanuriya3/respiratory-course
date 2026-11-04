import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {modules,sections} from './public/content.js';
import {centralMediaLibrary,mediaBacklink} from './public/central-media-library.js';
import {integratedModuleOne} from './public/integrated-module-one.js';
const app=readFileSync('public/app.js','utf8');
const build=readFileSync('build.mjs','utf8');
assert.equal(modules.length,25);
assert.equal(sections.length,17);
assert.ok(build.includes("'media-library'"));
assert.ok(app.includes("centralMediaLibrary(L,lang)"));
assert.ok(app.includes("mediaBacklink(mid,L,lang)"));
assert.ok(existsSync('public/images/respiratory-alveolus-exchange.svg'));
for(const L of [0,1,2]){
 const lang=['RU','EN','KZ'][L];
 const html=centralMediaLibrary(L,lang);
 for(const m of modules){
  assert.ok(html.includes('/modules/'+m.id+'/media?lang='+lang));
  assert.ok(html.includes('/modules/'+m.id+'/interactive?lang='+lang));
  assert.ok(html.includes('/modules/'+m.id+'/theory?lang='+lang));
  assert.ok(html.includes(m.title[L]));
  assert.ok(mediaBacklink(m.id,L,lang).includes('/media-library?lang='+lang));
 }
 for(const section of ['theory','practice','cases','references'])assert.ok(integratedModuleOne(1,section,L).length>80);
 assert.equal(integratedModuleOne(2,'theory',L),'');
}
console.log('Trilingual media links and additive module-one integration: passed');
