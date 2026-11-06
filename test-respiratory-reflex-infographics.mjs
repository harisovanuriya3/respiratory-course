import assert from 'node:assert/strict';
import {respiratoryReflexInfographics} from './public/respiratory-reflex-infographics.js';
import {regulationAtlas} from './public/regulation-atlas.js';
import {centralMediaLibrary} from './public/central-media-library.js';
for(const [L,lang] of ['RU','EN','KZ'].entries()){
 const html=respiratoryReflexInfographics(L,lang);
 assert.equal((html.match(/class="reflex-infographic-card"/g)||[]).length,5);
 assert.equal((html.match(/class="reflex-illustration"/g)||[]).length,5);
 assert.ok(html.includes('reflex-hering'));
 assert.ok(html.includes('reflex-sneeze'));
 assert.ok(html.includes('reflex-cough'));
 assert.ok(html.includes('reflex-diving'));
 assert.ok(html.includes('reflex-chemo'));
 assert.ok(regulationAtlas(lang).includes('respiratory-reflex-infographics'));
 assert.ok(centralMediaLibrary(L,lang).includes('respiratory-reflex-infographics'));
}
console.log('Five multilingual illustrated reflex cards included in module and media library.');
