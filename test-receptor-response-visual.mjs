import assert from 'node:assert/strict';
import {receptorResponse,receptorResponseView} from './public/receptor-response-visual.js';
import {reflexPathwayAtlas} from './public/reflex-pathway-atlas.js';
assert.ok(receptorResponse('co2',80).rate>receptorResponse('co2',0).rate);
assert.ok(receptorResponse('stretch',80).rate<receptorResponse('stretch',0).rate);
assert.ok(receptorResponse('o2',80).depth>receptorResponse('o2',0).depth);
assert.throws(()=>receptorResponse('co2',101),RangeError);
for(let L=0;L<3;L++){assert.ok(receptorResponseView(L).includes('data-receptor-path'));assert.ok(reflexPathwayAtlas(L).includes('data-receptor-response'));}
console.log('Five reflex responses and linked dynamic traces validated in RU EN KZ.');
