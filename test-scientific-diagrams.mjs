import assert from 'node:assert/strict';
import {mediaAtlas} from './public/media-atlas.js';
for (const lang of [0,1,2]) {
  const html=mediaAtlas(13,lang);
  assert.match(html,/Shunt-like/);
  assert.match(html,/Dead space/);
  assert.match(html,/V̇ = 0/);
  assert.match(html,/Q̇ = 0/);
  assert.match(html,/V̇\/Q̇ ≈ 0.8/);
  assert.match(html,/Original educational SVG|Авторские учебные SVG|Авторлық оқу SVG/);
}
console.log('PASS: V/Q diagram distinguishes absent ventilation from absent perfusion in RU/EN/KZ');
