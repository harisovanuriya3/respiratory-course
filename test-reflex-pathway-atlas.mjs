import assert from 'node:assert/strict';
import {reflexPathwayAtlas} from './public/reflex-pathway-atlas.js';
import {regulationAtlas} from './public/regulation-atlas.js';
for(const [L,lang] of ['RU','EN','KZ'].entries()){
 const html=reflexPathwayAtlas(L);
 assert.equal((html.match(/data-reflex-select=/g)||[]).length,5);
 assert.equal((html.match(/data-reflex-stage="/g)||[]).length,6);
 assert.ok(html.includes('NTS'));
 assert.ok(html.includes('PMC9995121'));
 assert.ok(html.includes('PMC4559867'));
 assert.ok(html.includes('PMC4422496'));
 assert.ok(html.includes('pre-Bötzinger'));
 assert.ok(regulationAtlas(lang).includes('data-reflex-pathway'));
}
console.log('Five respiratory receptor arcs and pontomedullary centers available in three languages.');
