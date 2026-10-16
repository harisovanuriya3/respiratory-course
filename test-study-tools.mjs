import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const s=readFileSync('public/study-tools.js','utf8');
assert.ok(s.includes("terms.length?`<p>${tr(5)}</p>`:''"),'empty and no-result search states');
assert.ok(!s.includes(":q?`<p>"),'undefined search variable');
assert.ok(s.includes('function showTimer(){tick();open(tr(2));'),'timer catches up on reopening');
console.log('PASS: search state and timer source regressions');
