import assert from 'node:assert/strict';
import {spirometryVideoLesson,spirometryVideoUrl} from './public/spirometry-video-lesson.js';
import {recordedSpirogramPanel} from './public/recorded-spirogram.js';
import {centralMediaLibrary} from './public/central-media-library.js';
assert.ok(spirometryVideoUrl.startsWith('https://'));
for(const [L,lang] of ['RU','EN','KZ'].entries()){
 const lesson=spirometryVideoLesson(L,lang);
 assert.ok(lesson.includes(spirometryVideoUrl));
 assert.ok(lesson.includes('rel="noopener noreferrer"'));
 assert.equal((lesson.match(/<li>/g)||[]).length,3);
 assert.ok(recordedSpirogramPanel(L).includes('id="spirograph-video"'));
 assert.ok(centralMediaLibrary(L,lang).includes('id="spirograph-video-library"'));
 assert.ok(centralMediaLibrary(L,lang).includes(spirometryVideoUrl));
}
console.log('Shared external spirography video, trilingual assignments and lab/media links verified.');
