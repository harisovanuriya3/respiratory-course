import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {scientificallyReviewedReflexFigures} from './public/scientifically-reviewed-reflex-figures.js';
const app=readFileSync('./public/app.js','utf8');
assert.ok(app.includes("section==='theory'&&mid===18?scientificallyReviewedReflexFigures(L)"));
assert.ok(app.includes("section==='media'&&mid===18?scientificallyReviewedReflexFigures(L)"));
for(let L=0;L<3;L++){
 const html=scientificallyReviewedReflexFigures(L);
 assert.equal((html.match(/class="reviewed-reflex-svg"/g)||[]).length,2);
 assert.ok(html.includes('CN V')&&html.includes('CN X (vagus)'));
 assert.ok(html.includes('1500'));
}
console.log('Corrected figures are embedded in module 18 theory and media for RU EN KZ.');
