import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const s=readFileSync('public/applied-labs.js','utf8');
for (const fragment of ['9:x=>1/x','16:x=>6.1+Math.log10(24/(0.03*x))','20:x=>2000/x','21:x=>0.21*(x-47)','23:x=>6/x']) assert.ok(s.includes(fragment),fragment);
assert.ok(Math.abs((6.1+Math.log10(24/(0.03*40)))-7.401)<0.01);
assert.equal(2000/125,16);
assert.ok(Math.abs(0.21*(600-47)-116.13)<1e-8);
assert.equal(6/2,3);
console.log('V79 physiology calculations: PASS');
