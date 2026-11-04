import assert from 'node:assert/strict';
import {moduleReadingReferences} from './public/module-reading-references.js';
import {courseBibliography} from './public/course-bibliography.js';
import {textbookSources,regionalTextbookSources} from './public/scientific-sources.js';
const total=textbookSources.length+regionalTextbookSources.length;
for(const [L,lang] of ['RU','EN','KZ'].entries()){
 const bib=courseBibliography(L,lang);
 for(let n=1;n<=total;n++)assert.ok(bib.includes('id="ref-'+n+'"'));
 for(let mid=1;mid<=25;mid++){
  const html=moduleReadingReferences(mid,'theory',L,lang);
  assert.ok(html.includes('/bibliography?lang='+lang+'#ref-'));
  assert.ok(html.includes('target="_blank"'));
  assert.ok(html.includes('Guyton and Hall Textbook of Medical Physiology'));
  assert.ok(html.includes('https://shop.elsevier.com/'));
  for(const match of html.matchAll(/#ref-(\d+)/g))assert.ok(Number(match[1])<=total);
 }
}
console.log('All 25 modules link to numbered bibliography entries in RU/EN/KZ.');
