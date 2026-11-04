import assert from 'node:assert/strict';
import {courseBibliography} from './public/course-bibliography.js';
import {textbookSources,regionalTextbookSources} from './public/scientific-sources.js';
import {readFileSync} from 'node:fs';
const build=readFileSync('build.mjs','utf8');
const app=readFileSync('public/app.js','utf8');
assert.ok(build.includes("'bibliography'"));
assert.ok(app.includes("courseBibliography(L,lang)"));
for(const [L,lang] of ['RU','EN','KZ'].entries()){
 const html=courseBibliography(L,lang);
 for(const s of [...textbookSources,...regionalTextbookSources])assert.ok(html.includes(s.url.replaceAll('&','&amp;')), 'Missing safely escaped source URL: '+s.title);
 assert.equal((html.match(/<li\b[^>]*>/g)||[]).length,textbookSources.length+regionalTextbookSources.length);
}
console.log('Consolidated bibliography routes and all source links verified.');
