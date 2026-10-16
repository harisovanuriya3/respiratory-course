import assert from 'node:assert/strict';
import {reviewCoverage,teachingReview} from './public/teaching-review.js';
assert.equal(reviewCoverage,25);
for(let mid=1;mid<=25;mid++){
 const localized=[];
 for(let lang=0;lang<3;lang++){
  const html=teachingReview(mid,'theory',lang);
  assert.match(html,/<aside class="learning-panel teaching-review"/);
  assert.ok(html.length>130,`Short teaching checkpoint: module ${mid}, language ${lang}`);
  localized.push(html);
  assert.equal(teachingReview(mid,'tests',lang),'');
 }
 assert.equal(new Set(localized).size,3,`Missing localization in module ${mid}`);
}
console.log('PASS: 25 topic-specific conceptual checkpoints, all three languages');
