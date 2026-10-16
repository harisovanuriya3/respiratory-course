import assert from 'node:assert/strict';
import {existsSync,readFileSync,readdirSync} from 'node:fs';
import {spawnSync} from 'node:child_process';
import {dirname,resolve} from 'node:path';
import {modules,sections} from './public/content.js';
assert.equal(modules.length,25);assert.equal(sections.length,17);
assert.equal(new Set(sections.map(s=>s[0])).size,17);
for(const m of modules){assert.equal(m.title.length,3);assert.equal(Object.keys(m).sort().join(','),'id,title');for(const title of m.title)assert.ok(title.trim());for(const s of sections){assert.equal(s.length,4);assert.ok(existsSync(`dist/modules/${m.id}/${s[0]}/index.html`));}}
for(const p of ['contents','labs','patients','patients/advanced','exam',...modules.map(m=>'modules/'+m.id)])assert.ok(existsSync(`dist/${p}/index.html`));
assert.ok(existsSync('dist/lungs-cover-original.svg'));
assert.ok(readFileSync('public/app.js','utf8').includes('aria-current'));
let scripts=0;
for(const file of readdirSync('public').filter(x=>x.endsWith('.js'))){
 const source=readFileSync('public/'+file,'utf8');
 assert.equal(readFileSync('dist/'+file,'utf8'),source,`Stale build: ${file}`);
 const syntax=spawnSync(process.execPath,['--check','public/'+file],{encoding:'utf8'});assert.ifError(syntax.error);assert.equal(syntax.status,0,syntax.stderr);
 for(const [,dependency] of source.matchAll(/\bfrom\s*['"](\.[^'"]+)['"]/g))assert.ok(existsSync(resolve(dirname('public/'+file),dependency)),`Missing import ${dependency} in ${file}`);
 scripts++;
}
for(const [,src] of readFileSync('public/index.html','utf8').matchAll(/<script[^>]+src="\/([^"]+)"/g))assert.ok(existsSync('dist/'+src),`Missing entry script ${src}`);
assert.ok(existsSync('dist/404.html'));
console.log(`PASS: 425 section routes, 25 module routes, 5 hub routes, cover, 404, three languages; ${scripts} JavaScript files checked for syntax, imports and build consistency.`);
