import assert from 'node:assert/strict';
import {regulationVideoGallery} from './public/regulation-video-gallery.js';
import {regulationAtlas} from './public/regulation-atlas.js';
import {centralMediaLibrary} from './public/central-media-library.js';
for(const [L,lang] of ['RU','EN','KZ'].entries()){
 const html=regulationVideoGallery(L,lang);
 assert.equal((html.match(/<iframe/g)||[]).length,2);
 assert.ok(html.includes('youtube-nocookie.com/embed/KITa-HNpJgU'));
 assert.ok(html.includes('youtube-nocookie.com/embed/hgdTiqHC6Rg'));
 assert.ok(html.includes('allowfullscreen'));
 assert.ok(regulationAtlas(lang).includes('reg-video-gallery'));
 assert.ok(centralMediaLibrary(L,lang).includes('reg-video-gallery'));
}
console.log('Two verified external video embeds available in both atlas and central media library in three languages.');
