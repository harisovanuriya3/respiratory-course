import assert from 'node:assert/strict';
import {existsSync,readFileSync} from 'node:fs';
import {modules,sections} from './public/content.js';
assert.equal(modules.length,25);assert.equal(sections.length,17);
assert.equal(new Set(sections.map(s=>s[0])).size,17);
for(const m of modules){assert.equal(m.title.length,3);assert.equal(Object.keys(m).sort().join(','),'id,title');for(const title of m.title)assert.ok(title.trim());for(const s of sections){assert.equal(s.length,4);assert.ok(existsSync(`dist/modules/${m.id}/${s[0]}/index.html`));}}
for(const p of ['contents','labs','patients','exam'])assert.ok(existsSync(`dist/${p}/index.html`));
assert.ok(existsSync('dist/lungs-cover-original.svg'));
assert.ok(readFileSync('public/app.js','utf8').includes('aria-current'));
console.log('PASS: 25 × 17 routes, three languages, module 1 educational prototype, cover and all four hubs.');
