import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {modules,sections} from './public/content.js';
import {mediaAtlas} from './public/media-atlas.js';
import {curatedAcademic} from './public/academic-curator.js';
assert.equal(modules.length,25);assert.equal(sections.length,17);
let repeats=0, short=0, missing=0;
const matrix=[];
for(const m of modules){
 const entries=[];
 for(const section of sections){
  const parts=[0,1,2].map(L=>curatedAcademic(m.id,section[0],L));
  if(parts.some(x=>!x))missing++;
  const lengths=parts.map(x=>x.replace(/<[^>]+>/g,'').length);
  if(Math.min(...lengths)<250)short++;
  entries.push({section:section[0],lengths});
 }
 matrix.push({module:m.id,title:m.title[0],entries});
 for(let L=0;L<3;L++){
  const html=mediaAtlas(m.id,L);
  assert.ok(html.includes('media-atlas'));
  assert.equal((html.match(/target="_blank"/g)||[]).length,1,'Duplicate media links');
  assert.ok(!html.includes('Category:Spirometry') || m.id===7 || m.id===23,'Off-topic spirometry category');
 }
}
const atlas=readFileSync('public/media-atlas.js','utf8');
assert.ok(atlas.includes('diagramByModule'));
console.log(JSON.stringify({modules:25,subsections:425,missing,short_under_250_chars:short,coverage:'Curated academic supplements; length is not an academic completeness score'},null,2));
