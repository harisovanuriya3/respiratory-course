import assert from 'node:assert/strict';
import {scientificallyReviewedReflexFigures} from './public/scientifically-reviewed-reflex-figures.js';
import {regulationAtlas} from './public/regulation-atlas.js';
import {centralMediaLibrary} from './public/central-media-library.js';
for(const [L,lang] of ['RU','EN','KZ'].entries()){
 const html=scientificallyReviewedReflexFigures(L);
 assert.equal((html.match(/class="reviewed-reflex-figure"/g)||[]).length,2);
 assert.ok(html.includes('CN V'));
 assert.ok(html.includes('CN X (vagus)'));
 assert.ok(html.includes('1500'));
 assert.ok(regulationAtlas(lang).includes('scientifically-reviewed-reflex-figures'));
 assert.ok(centralMediaLibrary(L,lang).includes('scientifically-reviewed-reflex-figures'));
}
console.log('Scientifically qualified sneeze and Hering-Breuer diagrams linked on RU EN KZ.');
