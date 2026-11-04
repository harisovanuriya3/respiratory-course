import assert from 'node:assert/strict';
import {vqRatio,vqLearningModel} from './public/vq-learning-model.js';
assert.deepEqual(vqRatio(0,0),{ratio:null,kind:'undefined'});
assert.deepEqual(vqRatio(0,2),{ratio:0,kind:'shunt'});
assert.deepEqual(vqRatio(2,0),{ratio:Infinity,kind:'dead-space'});
assert.deepEqual(vqRatio(2,2.5),{ratio:0.8,kind:'perfused'});
for(const [L,lang] of ['RU','EN','KZ'].entries()){
 for(const section of ['theory','practice','interactive','media'])assert.ok(vqLearningModel(13,section,L,lang).includes('data-vq-model'));
 assert.equal(vqLearningModel(12,'theory',L,lang),'');
}
console.log('V/Q model: boundary conditions, calculation and trilingual integration passed.');
