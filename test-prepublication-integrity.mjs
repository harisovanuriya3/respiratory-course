import assert from 'node:assert/strict';
import {existsSync,readFileSync} from 'node:fs';
import {modules,sections} from './public/content.js';
import {mediaPreviewAssets,centralMediaLibrary} from './public/central-media-library.js';
import {courseQuestions} from './public/course-assessment-bank.js';
assert.equal(modules.length,25);
assert.equal(sections.length,17);
for(const m of modules){
 assert.equal(m.title.length,3);
 const asset=mediaPreviewAssets[m.id];
 assert.ok(asset,'Missing media preview for module '+m.id);
 assert.ok(existsSync('public/assets/clinical/'+asset+'.webp'),'Missing media preview asset for module '+m.id+': '+asset);
 for(const mode of ['tests','cases']){
  const items=courseQuestions(m.id,mode);
  assert.equal(items.length,20,'Module '+m.id+' '+mode+' expected 20');
  for(const [i,item] of items.entries()){
   assert.equal(item.q.length,3);
   assert.equal(item.options.length,4);
   assert.equal(item.explain.length,3);
   assert.ok(item.answer>=0&&item.answer<4);
   for(let l=0;l<3;l++){
    assert.ok(item.q[l]?.trim(),'Missing prompt: '+m.id+' '+mode+' '+i+' '+l);
    assert.ok(item.explain[l]?.trim(),'Missing explanation: '+m.id+' '+mode+' '+i+' '+l);
   }
  }
 }
}
const app=readFileSync('public/app.js','utf8');
for(const token of ['diagramSketchpad(mid,L)','initDiagramSketchpads()','moduleReadingReferences(mid,section,L,lang)','mediaAtlas(mid,L)'])assert.ok(app.includes(token),'Missing interface integration: '+token);
assert.ok(existsSync('public/assets/oxyhemoglobin-p50-curves.svg'));
for(const [l,lang] of ['RU','EN','KZ'].entries()){
 const page=centralMediaLibrary(l,lang);
 for(const m of modules)assert.ok(page.includes('/modules/'+m.id+'/media?lang='+lang));
}
console.log('Release integrity passed: 25 modules, 17 sections, 3 languages, 20 tests and 20 cases each, preview files and media links.');
