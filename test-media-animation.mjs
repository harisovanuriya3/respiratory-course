import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {mediaAtlas} from './public/media-atlas.js';
const css=readFileSync('public/style.css','utf8');
assert.match(css,/prefers-reduced-motion:reduce/);
for(let moduleId=1;moduleId<=25;moduleId++)for(let lang=0;lang<3;lang++){
 const html=mediaAtlas(moduleId,lang);
 assert.match(html,/<section class="media-atlas/);
 assert.match(html,/<svg/);
 if([3,4,7,8].includes(moduleId)){
  assert.match(html,/ventilation-animation/);
  assert.match(html,/<figcaption>/);
  assert.match(html,/data-breath-toggle aria-pressed="false"/);
  assert.match(html,/<button type="button" class="breath-toggle"/);
  assert.match(html,/<desc id="breath-desc">/);
 }else assert.doesNotMatch(html,/ventilation-animation/);
}
assert.match(css,/breath-paused/);
console.log('Media animation: 75 localized module panels validated.');
