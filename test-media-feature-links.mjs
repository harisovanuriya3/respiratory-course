import assert from 'node:assert/strict';
import {centralMediaLibrary} from './public/central-media-library.js';
for(const [L,lang] of ['RU','EN','KZ'].entries()){
 const html=centralMediaLibrary(L,lang);
 assert.equal((html.match(/class="media-preview-link"/g)||[]).length,25);
 assert.ok(html.includes('/modules/1/interactive?lang='+lang));
 for(const mid of [17,18,19])assert.ok(html.includes('/modules/'+mid+'/interactive?lang='+lang));
 assert.ok(html.includes('media-feature'));
}
console.log('Topic-specific media links verified in three languages.');
