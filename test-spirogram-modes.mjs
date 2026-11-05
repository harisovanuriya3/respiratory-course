import assert from 'node:assert/strict';
import {recordedSpirogramPanel,parseSpirographCsv} from './public/recorded-spirogram.js';
import {moduleOneVisual} from './public/module-one-visual.js';
for(let L=0;L<3;L++){
 const html=recordedSpirogramPanel(L);
 assert.ok(html.includes('data-spiro-image'));
 assert.ok(html.includes('class="real-spirogram-example"'));
 assert.ok(html.includes('data:image/jpeg;base64,'));
 assert.ok(html.includes('data-spiro-image-preview'));
 assert.ok(html.includes('data-spiro-file'));
 assert.ok(html.includes('recorded-study-steps'));
 assert.ok(moduleOneVisual(L).includes('data-m1-graphmode="recorded"'));
}
assert.equal(parseSpirographCsv('time_s,volume_l\n0,0.1\n1,0.3').length,2);
console.log('Separate simulated and real spirogram modes and image import markup verified.');
