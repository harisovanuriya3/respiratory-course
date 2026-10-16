import assert from 'node:assert/strict';
import {topicSpecificAtlas} from './public/topic-specific-atlas.js';
import {mediaAtlas} from './public/media-atlas.js';
for(let id=17;id<=25;id++)for(let lang=0;lang<3;lang++){
 const graphic=topicSpecificAtlas(id,lang);
 assert.ok(graphic.includes('<svg')&&graphic.includes('<figcaption>'),`${id}/${lang}: no diagram`);
 assert.ok(mediaAtlas(id,lang).includes('topic-specific'),`${id}/${lang}: not integrated`);
 assert.ok(!graphic.includes('undefined'),`${id}/${lang}: missing localization`);
}
assert.equal(topicSpecificAtlas(16,0),'');
console.log('PASS: 27 specialized topic diagrams in RU/EN/KZ');
