import assert from 'node:assert/strict';
import {centralMediaLibrary,mediaPreviewAssets} from './public/central-media-library.js';
for(const [L,lang] of ['RU','EN','KZ'].entries()){
 const html=centralMediaLibrary(L,lang);
 assert.equal((html.match(/class="media-preview-link"/g)||[]).length,25);
 assert.ok(html.includes('/modules/1/interactive?lang='+lang));
 for(const mid of [17,18,19])assert.ok(html.includes('/modules/'+mid+'/interactive?lang='+lang));
 assert.ok(html.includes('media-feature'));
 assert.ok(html.includes('/modules/17/interactive?lang='+lang+'#reg-atlas'));
 assert.ok(!html.includes('/modules/18/interactive?lang='+lang+'#reg-atlas'));
 assert.ok(!html.includes('/modules/19/interactive?lang='+lang+'#reg-atlas'));
 assert.equal((html.match(/class="media-preview-notice"/g)||[]).length,25);
}
assert.ok(new Set(Object.values(mediaPreviewAssets)).size>=9,'Use available topic-relevant photos instead of five repeated previews');
assert.ok(new Set(Object.values(mediaPreviewAssets)).size<25,'Shared preview assets should be reported, not described as unique');
console.log('Topic-specific media links verified in three languages.');
