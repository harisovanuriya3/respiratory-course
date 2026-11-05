import assert from 'node:assert/strict';
import {progressBadge} from './public/study-progress.js';
import {centralMediaLibrary} from './public/central-media-library.js';
import {modules,sections} from './public/content.js';
assert.equal(modules.length,25);
assert.equal(sections.length,17);
for(let L=0;L<3;L++){
 const lang=['RU','EN','KZ'][L];
 const html=centralMediaLibrary(L,lang);
 assert.equal((html.match(/class="media-preview-link"/g)||[]).length,25);
 for(let mid=1;mid<=25;mid++){
  assert.ok(html.includes('/modules/'+mid+'/media?lang='+lang));
  assert.ok(progressBadge(mid,'theory',sections,L).includes('data-study-mark="theory"'));
 }
}
for(const [L,lang] of ['RU','EN','KZ'].entries()){
 const html=centralMediaLibrary(L,lang);
 assert.ok(html.includes('/modules/17/interactive?lang='+lang+'#reg-atlas'));
 assert.equal((html.match(/class="media-feature"/g)||[]).length,3);
}
console.log('Media previews and explicit progress controls verified for 25 modules in three languages.');
