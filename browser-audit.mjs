import {chromium} from '@playwright/test';
import {createServer} from 'node:http';
import {readFile,stat,writeFile} from 'node:fs/promises';
import {resolve,extname,sep} from 'node:path';
import {modules,sections} from './public/content.js';
import {allExamItems} from './public/exam-center.js';
import {patientScenarioData,patientEvidenceData} from './public/advanced-patients.js';
const casesOnly=process.argv.includes('--case-routes');
const focused=process.argv.includes('--focused')||casesOnly;
const focusedRoutes=new Set(casesOnly?['16/cases','16/questions']:['17/references','23/interactive','23/media','24/practice','25/references',...modules.map(m=>m.id+'/tests'),...[5,9,16].map(m=>m+'/virtual-patient')]);
const root=resolve('dist');
const server=createServer(async(req,res)=>{try{let file=resolve(root,'.'+decodeURIComponent(new URL(req.url,'http://local').pathname));if(file!==root&&!file.startsWith(root+sep)){res.writeHead(403).end();return;}if((await stat(file)).isDirectory())file=resolve(file,'index.html');res.setHeader('Content-Type',({'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css','.svg':'image/svg+xml'})[extname(file)]||'application/octet-stream');res.end(await readFile(file));}catch{res.writeHead(404).end();}});
await new Promise(r=>server.listen(0,'127.0.0.1',r));
const base='http://127.0.0.1:'+server.address().port;
const browser=await chromium.launch({channel:'msedge',headless:true});
const report={routes:0,patients:[],labs:[],exams:[],selfAssessments:[],mobile:[],errors:[],brokenLinks:[],duplicateIds:[]};
const seenLinks=new Set();
try{
 await Promise.all(['RU','EN','KZ'].map(async lang=>{
  const page=await browser.newPage();let route='';
  page.setDefaultTimeout(15000);
  page.setDefaultNavigationTimeout(30000);
  await page.route('**/*',r=>r.request().url().startsWith(base)?r.continue():r.abort());
  page.on('pageerror',e=>report.errors.push({route,error:e.message}));
  for(const m of modules)for(const s of sections.filter(s=>focused?focusedRoutes.has(m.id+'/'+s[0]):!process.argv.includes('--interactive')||['virtual-patient','interactive'].includes(s[0]))){
   route=`/modules/${m.id}/${s[0]}?lang=${lang}`;
   try{
    await page.goto(base+route,{waitUntil:'load'});
    await page.locator('#main h1').waitFor();report.routes++;
    const integrity=await page.evaluate(()=>({language:document.documentElement.lang,ids:[...document.querySelectorAll('[id]')].map(x=>x.id),links:[...document.querySelectorAll('a[href]')].map(x=>x.href),bad:/\bNaN\b|\bInfinity\b|>\s*undefined\s*</.test(document.querySelector('#main').innerHTML)}));
    if(integrity.language!==(lang==='KZ'?'kk':lang.toLowerCase()))throw Error('Incorrect document language');
    if(integrity.bad)throw Error('Undefined or nonfinite value in displayed content');
    if(m.id===16&&s[0]==='cases'){
     for(let step=0;step<3;step++)await page.locator(`.m16patient [data-step="${step}"] button[data-answer="0"]`).click();
     if(!(await page.locator('.m16patient [data-finish]').innerText()).trim())throw Error('Acid–base case did not reach completion');
    }
    const duplicates=integrity.ids.filter((id,i,a)=>a.indexOf(id)!==i);if(duplicates.length)report.duplicateIds.push({route,ids:[...new Set(duplicates)]});
    for(const link of integrity.links){if(link.startsWith(base))seenLinks.add(new URL(link).pathname);}
    if(['pretest','tests'].includes(s[0])){
     const shufflePreserved=await page.evaluate(async()=>{const {shuffleSelfAssessments}=await import('/quiz-order.js');const before=[...document.querySelectorAll('#main fieldset input[type=radio]')];const identities=before.map(input=>[input,input.name,input.value]);shuffleSelfAssessments(document,()=>0);return identities.every(([input,name,value])=>input.isConnected&&input.name===name&&input.value===value);});
     if(!shufflePreserved)throw Error('Option shuffling lost answer identity');
     const results=await page.evaluate(()=>{
      document.querySelectorAll('#main form').forEach(f=>{if(f.querySelector('input[type=radio]'))f.dispatchEvent(new Event('submit',{bubbles:true,cancelable:true}));});
      document.querySelectorAll('#m3-grade,#m4-grade,[data-m2-check],#m5-grade').forEach(b=>b.click());
      return [...document.querySelectorAll('#main [class*="score"],#main [id$="score"],[data-m2-result],[data-score]')].map(x=>x.textContent.trim()).filter(Boolean);
     });
     if(m.id!==1&&results.length===0)throw Error('Self-assessment route did not produce a score');
     if(m.id===1){await page.locator('.quiz button[data-choice="1"]').click();if(await page.locator('.quiz-feedback').getAttribute('data-correct')!=='true')throw Error('Inline quiz lost its correct choice after shuffling');}
     if(results.some(x=>{const score=x.match(/(\d+)\s*\/\s*\d+/);return score&&Number(score[1])!==0;}))throw Error('Unanswered self-assessment awarded points: '+results.join('; '));
     report.selfAssessments.push({module:m.id,lang,section:s[0],results});
    }
    if(s[0]==='virtual-patient'){
     const panel=page.locator('[data-advanced] .advanced-stage');let steps=0;
     for(const policy of focused?['correct','wrong']:['first']){
     steps=0;const caseIndex=Number(await panel.locator('..').getAttribute('data-advanced'));
     while(await panel.locator('.patient-options button').count()){
      if(policy==='first')await panel.locator('.patient-options button').first().click();
      else {const attr=steps<3?'data-answer':steps===3?'data-investigation':steps===4?'data-branch':'data-evidence';const correct=steps<3?patientScenarioData[caseIndex].stages[steps].correct:steps===3?patientEvidenceData[caseIndex].investigation.correct:0;const index=policy==='correct'?correct:(correct+1)%await panel.locator('.patient-options button').count();await panel.locator(`[${attr}="${index}"]`).click();}
      if(!(await panel.locator('.patient-feedback').innerText()).trim())throw Error('Missing patient feedback');
      await panel.locator('.advanced-next button').click();
      if(++steps>8)throw Error('Patient did not finish');
     }
     const result=await panel.innerText();if(!result.includes('/6'))throw Error('Missing six-decision score: '+result);
     if(policy!=='first'&&!result.includes(policy==='correct'?'6/6':'0/6'))throw Error('Incorrect patient score for '+policy+': '+result);
     await panel.locator('.advanced-restart').click();
     if(!await panel.locator('[data-answer]').count())throw Error('Restart failed');
     report.patients.push({module:m.id,lang,steps,policy,result});
     }
    }
    if(s[0]==='interactive'){
     const sliders=page.locator('input[type=range], .integrated-lab input[type=number]');const results=[];
     const initialValues=await sliders.evaluateAll(elements=>elements.map(x=>x.value));
     const snapshot=()=>page.locator('#main').evaluate(root=>[...root.querySelectorAll('p,output,.lab-results,.result,[role=status],svg,.guided-v38-result,[id$="-result"],[id$="-results"],[data-result],[data-out],[data-ten-results]')].filter(x=>!x.closest('label')&&!x.closest('.lab-controls')).map(x=>x.tagName.toLowerCase()==='svg'?x.innerHTML:x.textContent).join('\n'));
     for(let i=0;i<await sliders.count();i++){
      await sliders.evaluateAll((elements,values)=>elements.forEach((el,i)=>{el.value=values[i];el.dispatchEvent(new Event('input',{bubbles:true}));}),initialValues);
      // At reference transpulmonary pressure ΔV=0 for every compliance.
      // Test compliance at a nonzero pressure change, as required by ΔV=C·ΔP.
      if(await sliders.nth(i).getAttribute('id')==='m3-compliance')await page.locator('#m3-pleural').evaluate(el=>{el.value='-8';el.dispatchEvent(new Event('input',{bubbles:true}));});
      const slider=sliders.nth(i);const before=await page.locator('#main').innerText();
      const beforeCalculation=await snapshot();
      let value=await slider.evaluate(el=>{el.value=Number(el.value)===Number(el.max)?el.min:el.max;el.dispatchEvent(new Event('input',{bubbles:true}));el.dispatchEvent(new Event('change',{bubbles:true}));return el.value;});
      let calculationChanged=beforeCalculation!==await snapshot();
      // A normal PO2 plateau is physiological: also probe the hypoxic endpoint.
      if(!calculationChanged){value=await slider.evaluate(el=>{el.value=el.min;el.dispatchEvent(new Event('input',{bubbles:true}));return el.value;});calculationChanged=beforeCalculation!==await snapshot();}
      const after=await page.locator('#main').innerText();results.push({id:await slider.getAttribute('id')||await slider.getAttribute('name')||await slider.getAttribute('data-k'),value,changed:before!==after,calculationChanged});
     }
     report.labs.push({module:m.id,lang,sliders:results});
    }
   }catch(e){report.errors.push({route,error:e.message});console.log('FAIL '+route+' '+e.message.slice(0,180));}
   if(s[0]==='references'||process.argv.includes('--interactive')&&s[0]==='virtual-patient')console.log(lang+' module '+m.id);
  }
  route='/exam?lang='+lang;await page.goto(base+route);
  for(const m of focused?[]:modules){
   try{await page.locator('#exam-scope').selectOption(String(m.id));await page.locator('#exam-start').click();
    const count=await page.locator('#exam-form fieldset').count();if(!count)throw Error('Empty exam');
    const groups=page.locator('#exam-form fieldset');for(let i=0;i<count;i++)await groups.nth(i).locator('input').first().check();
    await page.locator('#exam-form button[type=submit]').click();
    const feedback=await page.locator('#exam-feedback').innerText();if(!feedback.trim())throw Error('Missing exam feedback');
    report.exams.push({module:m.id,lang,questions:count});
   }catch(e){report.errors.push({route,module:m.id,error:e.message});}
  }
  // Independently choose each bank item's known correct identifier after shuffling.
  await page.locator('#exam-scope').selectOption('all');await page.locator('#exam-start').click();
  const langIndex=['RU','EN','KZ'].indexOf(lang);
  const answerMap=Object.fromEntries(allExamItems.map(item=>[item.q[langIndex],item.options[item.answer][langIndex]]));
  await page.locator('#exam-form').evaluate((form,answers)=>{for(const fieldset of form.querySelectorAll('fieldset')){const question=fieldset.querySelector('legend').textContent.replace(/^\d+\.\s*/,'').trim();const answer=answers[question];const label=[...fieldset.querySelectorAll('label')].find(x=>x.textContent.trim()===answer);if(!label)throw Error('Unknown rendered exam question/answer');label.querySelector('input').checked=true;}},answerMap);
  await page.locator('#exam-form button[type=submit]').click();
  if(!(await page.locator('#exam-feedback').innerText()).includes('50/50 (100%)'))throw Error('Perfect final exam incorrectly graded');
  report.exams.push({module:'all',lang,questions:50,mode:'perfect-score'});
  await page.clock.install();await page.locator('#exam-mode').selectOption('formal');await page.locator('#exam-start').click();await page.clock.fastForward(3601000);
  if(!(await page.locator('#exam-feedback').innerText()).includes('0/50 (0%)'))throw Error('Expired unanswered exam incorrectly graded');
  if(await page.locator('#exam-form input:enabled').count())throw Error('Expired exam still accepts answers');
  report.exams.push({module:'all',lang,questions:50,mode:'expired-unanswered'});
  await page.setViewportSize({width:390,height:844});
  for(const path of focused?[]:['/','/contents','/labs','/patients','/patients/advanced','/exam',...modules.flatMap(m=>['theory','interactive','virtual-patient'].map(s=>`/modules/${m.id}/${s}`))]){
   route=path+'?lang='+lang;await page.goto(base+route);
   const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+2);
   report.mobile.push({route,overflow});
   if(lang==='EN'&&path==='/modules/17/interactive')await page.screenshot({path:'docs/mobile-regulation-EN.png'});
  }
  await page.close();console.log('Completed '+lang+': '+report.routes+' routes; errors '+report.errors.length);
 }));
 for(const path of seenLinks){try{let file=resolve(root,'.'+path);if((await stat(file)).isDirectory())file=resolve(file,'index.html');await stat(file);}catch{report.brokenLinks.push(path);}}
}finally{await browser.close();server.close();await writeFile(casesOnly?'docs/BROWSER_CASE_ROUTES.json':focused?'docs/BROWSER_REGRESSIONS.json':'docs/BROWSER_AUDIT.json',JSON.stringify(report,null,2));}
console.log(JSON.stringify({routes:report.routes,patients:report.patients.length,labs:report.labs.length,exams:report.exams.length,unchangedSliders:report.labs.flatMap(x=>x.sliders.filter(s=>!s.changed).map(s=>({module:x.module,lang:x.lang,...s}))),errors:report.errors},null,2));
if(report.errors.length||report.brokenLinks.length||report.duplicateIds.length||report.mobile.some(x=>x.overflow)||report.labs.some(x=>x.sliders.some(s=>!s.changed||!s.calculationChanged)))process.exitCode=1;
