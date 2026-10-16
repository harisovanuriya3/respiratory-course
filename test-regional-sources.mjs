import assert from 'node:assert/strict';
import {regionalTextbookSources,respiratoryGlossary,scientificReferences} from './public/scientific-sources.js';
assert.equal(regionalTextbookSources.length,4);
assert.ok(respiratoryGlossary.length>=15);
for(const source of regionalTextbookSources){assert.ok(source.url.startsWith('https://'));assert.ok(source.title.length>15);}
for(const row of respiratoryGlossary){assert.equal(row.length,3);assert.ok(row.every(x=>x.length>4));}
for(let L=0;L<3;L++){const html=scientificReferences(1,L);assert.ok(html.includes('regional-glossary'));assert.ok(html.includes('Қалыпты физиология'));}
console.log('Regional bibliography and trilingual glossary: passed');
