import assert from 'node:assert/strict';
import {interpretSpirometry,clinicalSpirometryPanel} from './public/clinical-spirometry-interpretation.js';
const base={ratioLLN:.7,fvcLLN:3.1};
assert.equal(interpretSpirometry({...base,fev1:3.2,fvc:4}).pattern,'no-obstruction');
assert.equal(interpretSpirometry({...base,fev1:1.9,fvc:3.8}).pattern,'obstructive');
assert.equal(interpretSpirometry({...base,fev1:2.5,fvc:2.9}).pattern,'low-fvc');
assert.equal(interpretSpirometry({...base,fev1:1.6,fvc:2.8,tlc:3.7,tlcLLN:4.1}).pattern,'mixed');
assert.equal(interpretSpirometry({...base,fev1:2.7,fvc:3.5,tlc:3.6,tlcLLN:4.1}).pattern,'restrictive');
assert.throws(()=>interpretSpirometry({...base,fev1:4.5,fvc:3}),RangeError);
assert.throws(()=>interpretSpirometry({...base,fev1:2.5,fvc:2.9,tlc:4.2}),RangeError);
assert.throws(()=>interpretSpirometry({...base,fev1:2.5,fvc:2.9,tlc:null,tlcLLN:4}),RangeError);
assert.equal(interpretSpirometry({...base,fev1:2.5,fvc:2.9}).restrictionUnconfirmed,true);
assert.equal(interpretSpirometry({...base,fev1:2.5,fvc:2.9,tlc:4.8,tlcLLN:4.1}).pattern,'nonspecific');
assert.equal(interpretSpirometry({...base,fev1:2.5,fvc:2.9,tlc:3.8,tlcLLN:4.1}).pattern,'restrictive');
assert.equal(interpretSpirometry({...base,fev1:1.8,fvc:2.9}).restrictionUnconfirmed,true);
for(let L=0;L<3;L++){const html=clinicalSpirometryPanel(L);assert.ok(html.includes('data-clinical-interpret'));assert.ok(html.includes('gli-calculator.ersnet.org'));}
console.log('Clinical spirometry LLN patterns and trilingual exercise validated.');
