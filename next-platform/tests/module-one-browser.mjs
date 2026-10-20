import {chromium} from '@playwright/test';
import assert from 'node:assert/strict';
import {mkdir} from 'node:fs/promises';
const base=process.env.PREVIEW_URL||'http://localhost:3100';
const browser=await chromium.launch({channel:'msedge',headless:true});
const copy={RU:{in:'Вдох',out:'Выдох',auto:'Автоматически',pause:'Пауза',replay:'Повтор',end:'Конец вдоха: поток равен нулю',start:'Начать диалог',check:'Проверить решение',next:'Следующий этап',voice:'Включить голос',read:'Озвучить',dictate:'Ответить голосом'},EN:{in:'Inspiration',out:'Expiration',auto:'Auto',pause:'Pause',replay:'Replay',end:'End inspiration: zero flow',start:'Start dialogue',check:'Check decision',next:'Next stage',voice:'Enable voice',read:'Read aloud',dictate:'Answer by voice'},KZ:{in:'Дем алу',out:'Дем шығару',auto:'Автоматты',pause:'Кідірту',replay:'Қайталау',end:'Дем алу соңы: ауа ағыны нөл',start:'Диалогты бастау',check:'Шешімді тексеру',next:'Келесі кезең',voice:'Дауысты қосу',read:'Дауыстап оқу',dictate:'Дауыспен жауап беру'}};
const errors=[];
await mkdir('.audit-baseline/module-one-animation',{recursive:true});
try {
 for(const language of ['RU','EN','KZ']){
  const context=await browser.newContext({viewport:{width:1280,height:1000},reducedMotion:'reduce'});
  await context.addInitScript(()=>{
   window.__spoken=[];
   window.SpeechSynthesisUtterance=class{constructor(text){this.text=text}};
   Object.defineProperty(window,'speechSynthesis',{value:{getVoices:()=>['ru-RU','en-US','kk-KZ'].map(lang=>({name:lang,lang,voiceURI:lang})),addEventListener(){},removeEventListener(){},cancel(){},pause(){},resume(){},speak(u){window.__spoken.push({lang:u.lang,volume:u.volume,text:u.text});setTimeout(()=>u.onend?.(),10)}}});
   window.SpeechRecognition=class{start(){this.onresult?.({resultIndex:0,results:[{isFinal:true,0:{transcript:'voice test'}}]});this.onend?.()}abort(){}stop(){this.onend?.()}};
  });
  const page=await context.newPage();page.on('pageerror',e=>errors.push(`${page.url()}: ${e.message}`));
  const c=copy[language];await page.goto(`${base}/modules/1/interactive?lang=${language}`);
  const lab=page.getByTestId('breathing-lab');await lab.waitFor();
  await lab.locator('img').evaluate(img=>img.decode());
  assert.equal(await lab.locator('svg.m1AnatomyOverlay').evaluate(el=>getComputedStyle(el).backgroundColor),'rgba(0, 0, 0, 0)');
  assert.equal(await lab.getAttribute('data-running'),'false');
  const experiment={RU:['Зафиксировать прогноз','Сохранить опыт'],EN:['Lock prediction','Save trial'],KZ:['Болжамды бекіту','Нәтижені сақтау']}[language];
  await page.locator('input[name="prediction1"]').nth(1).check();await page.getByRole('button',{name:experiment[0],exact:true}).click();
  await page.getByRole('button',{name:experiment[1],exact:true}).click();assert.equal(await page.locator('.moduleOneLab tbody tr').count(),1);
  const pressure=async()=>Promise.all(['palv','ppl','ptp'].map(key=>lab.getByTestId(key).getAttribute('data-value').then(Number)));
  for(const [button,expected] of [[c.in,[-1,-7,6]],[c.out,[1,-6,7]],[c.end,[0,-8,8]]]){
   await lab.getByRole('button',{name:button,exact:true}).click();
   const values=await pressure();values.forEach((v,i)=>assert.ok(Math.abs(v-expected[i])<1e-8));
   const cursors=await lab.locator('[data-testid^="cursor-"]').evaluateAll(nodes=>nodes.map(n=>n.getAttribute('x1')));assert.equal(cursors.length,5);assert.equal(new Set(cursors).size,1);
  }
  await lab.getByRole('button',{name:c.auto,exact:true}).click();await page.waitForTimeout(180);
  const moving=await lab.getAttribute('data-phase');assert.notEqual(Number(moving),.5);
  await lab.getByRole('button',{name:c.pause,exact:true}).click();const frozen=await lab.getAttribute('data-phase');await page.waitForTimeout(100);assert.equal(await lab.getAttribute('data-phase'),frozen);
  await lab.getByRole('button',{name:c.replay,exact:true}).click();assert.equal(await lab.getAttribute('data-running'),'true');
  await lab.getByRole('button',{name:c.out,exact:true}).click();
  await page.locator('nav.languages').getByRole('link',{name:language==='RU'?'EN':'RU',exact:true}).click();await page.waitForTimeout(100);assert.equal(Number(await lab.getAttribute('data-phase')),.75);
  await page.locator('nav.languages').getByRole('link',{name:language,exact:true}).click();
  assert.equal(await page.locator('.moduleOneLab tbody tr').count(),1);assert.equal(await page.getByRole('button',{name:experiment[0],exact:true}).isDisabled(),true);
  await page.setViewportSize({width:390,height:844});assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
  await lab.screenshot({path:`.audit-baseline/module-one-animation/lab-${language}.png`});
  await page.goto(`${base}/modules/1/virtual-patient?lang=${language}`);const patient=page.getByTestId('patient-case');await patient.waitFor();await patient.getByRole('button',{name:c.start,exact:true}).click();
  await patient.locator('.m1ClinicalScene .m1Buttons').nth(1).getByRole('button').first().click();
  assert.ok((await patient.getByTestId('patient-dialogue').innerText()).length>30);
  await patient.getByRole('button',{name:c.voice,exact:true}).click();
  await patient.getByTestId('patient-dialogue').getByRole('button',{name:c.read,exact:true}).click();
  await page.waitForTimeout(40);assert.equal((await page.evaluate(()=>window.__spoken)).at(-1).lang,{RU:'ru-RU',EN:'en-US',KZ:'kk-KZ'}[language]);
  const speaker=patient.getByTestId('patient-dialogue');await speaker.locator('summary').click();
  const volume=speaker.getByRole('slider').first();await volume.focus();await volume.press('Home');for(let i=0;i<7;i++)await volume.press('ArrowRight');
  await speaker.getByRole('button',{name:c.read,exact:true}).click();await page.waitForTimeout(30);assert.equal((await page.evaluate(()=>window.__spoken)).at(-1).volume,.35);
  await patient.getByTestId('mentor-dialogue').getByRole('button',{name:c.read,exact:true}).click();await page.waitForTimeout(30);assert.ok((await page.evaluate(()=>window.__spoken)).at(-1).text.length>10);
  await patient.getByTestId('mentor-dialogue').getByRole('button',{name:c.dictate,exact:true}).click();assert.match(await patient.locator('textarea').inputValue(),/voice test/);
  for(let step=0;step<6;step++){
   await patient.locator('textarea').fill(`Written explanation ${step}`);
   if(step===1){await page.locator('nav.languages').getByRole('link',{name:language==='RU'?'EN':'RU',exact:true}).click();await page.locator('nav.languages').getByRole('link',{name:language,exact:true}).click();assert.equal(await patient.locator('textarea').inputValue(),'Written explanation 1')}
   const choices=patient.locator('fieldset input[type=radio]');
   if(step===0){await choices.nth(1).check();await patient.getByRole('button',{name:c.check,exact:true}).click();assert.equal(await patient.getByRole('button',{name:c.next,exact:true}).count(),0)}
   await choices.nth([0,1,2,0,1,2][step]).check();await patient.getByRole('button',{name:c.check,exact:true}).click();await patient.getByRole('button',{name:c.next,exact:true}).click();
   if(step===1){await page.reload();await patient.waitFor();assert.equal(await patient.locator('textarea').inputValue(),'')}
  }
  assert.equal(await patient.locator('.key-idea article').count(),6);assert.match(await patient.locator('.key-idea').innerText(),/Written explanation 5/);
  await patient.screenshot({path:`.audit-baseline/module-one-animation/patient-${language}.png`});
  await context.close();console.log(`${language}: phase controls, pressures, 5 cursors, playback, language retention, mobile, dialogue, speech locale, dictation and 6 stages passed`);
 }
 const migration=await browser.newContext();
 await migration.addInitScript(()=>{
  localStorage.setItem('resp-m1-virtual-patient-v2-RU',JSON.stringify({step:2,notes:{2:'existing RU answer'}}));
  localStorage.setItem('resp-m1-virtual-patient-v2-KZ',JSON.stringify({step:1,notes:{2:'existing KZ answer'}}));
  Object.defineProperty(window,'speechSynthesis',{value:{getVoices:()=>[],addEventListener(){},removeEventListener(){},cancel(){}}});
  window.SpeechRecognition=undefined;window.webkitSpeechRecognition=undefined;
 });
 const migrationPage=await migration.newPage();await migrationPage.goto(`${base}/modules/1/virtual-patient?lang=EN`);
 const migrated=migrationPage.getByTestId('patient-case');await migrated.waitFor();
 await migrationPage.waitForFunction(()=>document.querySelector('[data-testid="patient-case"] textarea')?.value.includes('existing RU answer'));
 assert.match(await migrated.locator('textarea').inputValue(),/existing KZ answer/);
 await migrated.getByRole('button',{name:'Start dialogue',exact:true}).click();await migrated.getByRole('button',{name:'Enable voice',exact:true}).click();
 await migrated.getByTestId('patient-dialogue').getByRole('button',{name:'Read aloud',exact:true}).click();
 assert.match(await migrated.getByTestId('patient-dialogue').innerText(),/unavailable/);
 await migrated.getByTestId('mentor-dialogue').getByRole('button',{name:'Answer by voice',exact:true}).click();
 assert.match(await migrated.getByTestId('mentor-dialogue').innerText(),/text input remains available/);
 await migrated.locator('textarea').fill('Manual answer still works');assert.equal(await migrated.locator('textarea').inputValue(),'Manual answer still works');
 await migration.close();console.log('Legacy RU/KZ answers migrated; missing voice/microphone APIs preserve manual input');
 assert.deepEqual(errors,[]);
} finally {await browser.close()}
