import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import {modules,sections} from './public/content.js';
const html=readFileSync('public/index.html','utf8');
const app=readFileSync('public/app.js','utf8');
const css=readFileSync('public/neuro-navigation.css','utf8');
const build=readFileSync('build.mjs','utf8');
assert.equal(modules.length,25);
assert.equal(sections.length,17);
assert.ok(html.includes('/neuro-navigation.css'));
assert.ok(app.includes('centralMediaLibrary(L,lang)'));
assert.ok(app.includes('supplementalModuleContent(mid,section,L,lang)'));
assert.ok(app.includes('integratedModuleOne(mid,section,L)'));
assert.ok(build.includes("'media-library'"));
assert.ok(css.includes('@media(max-width:780px)'));
assert.ok(existsSync('public/images/respiratory-alveolus-exchange.svg'));
for(const m of modules)for(const section of sections){
 const route='dist/modules/'+m.id+'/'+section[0]+'/index.html';
 assert.ok(existsSync(route),'Missing route: '+route);
}
assert.ok(existsSync('dist/media-library/index.html'));
console.log('Verified 425 section routes, media index and navigation assets.');
