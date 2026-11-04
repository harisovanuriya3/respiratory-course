import assert from 'node:assert/strict';
import {integratedLearningExtension} from './public/integrated-learning-extension.js';
import {modules} from './public/content.js';
const targets=['objectives','questions','virtual-patient','pretest','media'];
assert.equal(modules.length,25);
for(const [L,lang] of ['RU','EN','KZ'].entries())for(const m of modules)for(const section of targets){
 const html=integratedLearningExtension(m.id,section,L,lang);
 assert.ok(html.includes('lesson-card'),m.id+'/'+section+'/'+lang);
 assert.ok(html.includes('/modules/'+m.id+'/theory?lang='+lang));
 assert.ok(html.includes('/modules/'+m.id+'/media?lang='+lang));
}
console.log('Verified five supplemental section types in 25 modules x 3 languages: 375 rendered fragments.');
