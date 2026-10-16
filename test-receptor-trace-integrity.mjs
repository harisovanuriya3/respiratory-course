import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {receptorBreathingAnimation,receptorAnimationCases} from './public/receptor-breath-animation.js';
const source=readFileSync('public/receptor-breath-animation.js','utf8');
assert.match(source,/elapsed<2\?0:sample\*\.35/,'Apnea must produce a flat trace rather than continuing a normal sinusoid');
assert.match(source,/m\.pattern==='cough'&&elapsed<4/,'Cough trace must not show unrelated normal sinusoidal breathing');
assert.equal(receptorAnimationCases.filter(x=>x.id==='cortex'||x.id==='humoral').length,2);
for(const [lang,label] of [['RU','Рецепторы и другие механизмы'],['EN','Receptors and other controls'],['KZ','Рецепторлар және тыныс']]){
 const html=receptorBreathingAnimation(lang);
 assert.ok(html.includes(label),'Non-receptor controls must not be misclassified as receptors in '+lang);
 assert.ok(html.includes('rba-stimulus'),'Stimulus selector missing in '+lang);
}
console.log('PASS scientific trace and receptor classification safeguards');
