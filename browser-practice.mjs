import {chromium} from '@playwright/test';
import {createServer} from 'node:http';
import {readFile,stat,writeFile} from 'node:fs/promises';
import {resolve,extname,sep} from 'node:path';
import {practiceWorkshops} from './public/practice-workshops.js';
const summaryOnly=process.argv.includes('--summary-only');
const root=resolve('dist'),report={routes:0,checks:0,mobile:0,errors:[]};
const server=createServer(async(req,res)=>{try{let p=resolve(root,'.'+new URL(req.url,'http://local').pathname);if(!p.startsWith(root+sep))throw Error();if((await stat(p)).isDirectory())p=resolve(p,'index.html');res.setHeader('Content-Type',extname(p)==='.js'?'text/javascript; charset=utf-8':extname(p)==='.css'?'text/css':'text/html; charset=utf-8');res.end(await readFile(p));}catch{res.writeHead(404).end();}});
await new Promise(r=>server.listen(0,'127.0.0.1',r));const base=`http://127.0.0.1:${server.address().port}`;
const browser=await chromium.launch({channel:'msedge',headless:true});
try{await Promise.all(['RU','EN','KZ'].map(async lang=>{
 const page=await browser.newPage({viewport:{width:390,height:844}});page.setDefaultTimeout(5000);let route='';page.on('pageerror',e=>report.errors.push({route,error:e.message}));
 await page.route('**/*',r=>r.request().url().startsWith(base)?r.continue():r.abort());
 for(const id of summaryOnly?[2]:Array.from({length:25},(_,i)=>i+1))for(const section of summaryOnly?['one-minute']:['practice','questions']){
  route=`/modules/${id}/${section}?lang=${lang}`;
  try{await page.goto(base+route);await page.locator('#main h1').waitFor();report.routes++;
   if(section==='practice'){
    const form=page.locator('form[data-practice]'),input=form.locator('input'),status=form.locator('[data-practice-feedback]');
    for(const [value,result] of [['','invalid'],['-99999','incorrect'],[String(practiceWorkshops[id].expected).replace('.',','),'correct']]){
     await input.fill(value);await form.locator('button').click();if(await status.getAttribute('data-result')!==result)throw Error(`Expected ${result}`);report.checks++;
    }
    await page.locator('.practice-workshop details summary').click();if(!await page.locator('.practice-workshop details p').isVisible())throw Error('Hidden solution');
   }else if(section==='questions'){await page.locator('.practice-discussion summary').click();if(!await page.locator('.practice-discussion details p').isVisible())throw Error('Hidden discussion answer');}
   else{const text=await page.locator('#main .lesson').innerText();if(lang!=='EN'&&text.includes('Conducting zone'))throw Error('Untranslated summary');if(lang==='EN'&&!text.includes('Conducting zone'))throw Error('Missing English summary');report.checks++;}
   if(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+2))throw Error('Mobile horizontal overflow');report.mobile++;
  }catch(e){report.errors.push({route,error:e.message});console.log(route+': '+e.message.slice(0,180));}
 }
 await page.close();console.log(`${lang} practice and discussions checked`);
}));}finally{await browser.close();server.close();await writeFile(summaryOnly?'docs/BROWSER_SUMMARY.json':'docs/BROWSER_PRACTICE.json',JSON.stringify(report,null,2));}
console.log(JSON.stringify(report));if(report.errors.length)process.exitCode=1;
