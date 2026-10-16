import assert from 'node:assert/strict';
import {mediaAtlas} from './public/media-atlas.js';
const checks=[
 [1,'Воздух','Air','Ауа'],
 [3,'Давление','Pressure','Қысым'],
 [17,'Ствол мозга','Brainstem','Ми бағаны'],
 [18,'Вагус','Vagus','Кезбе жүйке'],
 [25,'Сердечный выброс','Cardiac output','Жүрек лақтырысы']
];
for(const [id,...labels] of checks){
 for(let L=0;L<3;L++){
  const html=mediaAtlas(id,L);
  assert.ok(html.includes(labels[L]),`Module ${id}, language ${L}: missing ${labels[L]}`);
  assert.equal((html.match(/target="_blank"/g)||[]).length,1);
 }
}
for(let id=1;id<=25;id++)for(let L=0;L<3;L++){
 const html=mediaAtlas(id,L);
 assert.ok(html.includes('role="img"'));
 assert.ok(html.includes('rel="noopener noreferrer"'));
}
console.log('PASS: 75 localized module concept diagrams and safe external links');

// The diagram itself, not only the surrounding prose, must use the selected language.
for (const [L,expected,unexpected] of [
 [0,'Шунтоподобная','Shunt-like'],
 [1,'Shunt-like','Шунтоподобная'],
 [2,'Шунт тәрізді','Shunt-like']
]) {
 const html=mediaAtlas(13,L);
 assert.ok(html.includes(expected),`V/Q graphic must be localized for ${L}`);
 assert.ok(!html.includes(`>${unexpected}</text>`),`V/Q graphic contains untranslated label for ${L}`);
}
for(const L of [0,1,2]) {
 const html=mediaAtlas(3,L);
 assert.ok(html.includes(['Время →','Time →','Уақыт →'][L]));
}
console.log('PASS: V/Q and breathing-cycle SVG labels localized in all three languages');
