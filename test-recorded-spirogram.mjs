import assert from 'node:assert/strict';
import {parseSpirographCsv,recordedSpirogramPanel} from './public/recorded-spirogram.js';
import {moduleOneVisual} from './public/module-one-visual.js';
assert.deepEqual(parseSpirographCsv('time_s,volume_l\n0,0.1\n1,0.4\n2,0.2'),[[0,.1],[1,.4],[2,.2]]);
assert.throws(()=>parseSpirographCsv('time_s,volume_l\n0,1\n0,2'),RangeError);
assert.throws(()=>parseSpirographCsv('time_s,volume_l\n0,1\n1,NaN'),RangeError);
for(let L=0;L<3;L++){
 const html=moduleOneVisual(L);
 assert.ok(html.includes('data-m1-diaphragm'));
 assert.ok(html.includes('data-m1-graphmode="recorded"'));
 assert.ok(html.includes('data-spiro-file'));
 assert.ok(html.includes('m1-lab-instructions'));
 assert.ok(recordedSpirogramPanel(L).includes('data-spiro-record'));
}
console.log('Real CSV import, teaching instructions and original anatomy integration passed.');
