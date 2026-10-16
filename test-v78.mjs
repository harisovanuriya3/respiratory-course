import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const a=readFileSync('public/applied-labs.js','utf8');
const g=readFileSync('public/guided-workshops.js','utf8');
assert.ok(!a.includes('Function('));
assert.ok(a.includes('CALCULATORS'));
assert.ok(g.includes('resultUnits[id][l]'));
assert.ok(g.includes('hours of sleep'));
console.log('V78 regression checks passed');
