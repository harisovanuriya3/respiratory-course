import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const manifest=JSON.parse(readFileSync('media-rights-review.json','utf8'));
assert.equal(manifest.version,1);
for(const id of ['uploaded-peak-flow-spirometry','msd-spirometry-video','kharissova-respiratory-lecture-2021','spiro-s100-guide-scan']){
 const item=manifest.assets.find(x=>x.id===id);
 assert.ok(item,'Missing media provenance record: '+id);
 assert.equal(item.publicEmbeddingAllowed,false,'Unverified media must not be marked safe to embed: '+id);
}
const files=['public/spirometry-video-lesson.js','public/recorded-spirogram.js'];
const contents=files.map(x=>readFileSync(x,'utf8')).join('\n');
assert.ok(contents.includes('spirometryVideoUrl'));
assert.ok(!contents.includes('<video src="https://www.msdmanuals.com'));
console.log('Media rights review: unverified files are not authorized for public redistribution.');
