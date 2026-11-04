import {cp,mkdir,readFile,writeFile,rm} from 'node:fs/promises';
import {modules,sections} from './public/content.js';
import {execFileSync} from 'node:child_process';
const revision=process.env.VERCEL_GIT_COMMIT_SHA||process.env.GITHUB_SHA||(()=>{try{return execFileSync('git',['rev-parse','HEAD'],{encoding:'utf8'}).trim()}catch{return 'unknown'}})();
const buildMeta={revision,shortRevision:revision==='unknown'?'unknown':revision.slice(0,7),builtAt:new Date().toISOString(),source:'harisovanuriya3/respiratory-course'};
await rm('dist',{recursive:true,force:true});await cp('public','dist',{recursive:true});
const html=await readFile('public/index.html','utf8');
const paths=['bibliography','media-library','contents','labs','patients','patients/advanced','exam',...modules.flatMap(m=>['modules/'+m.id,...sections.map(s=>'modules/'+m.id+'/'+s[0])])];
for(const p of paths){await mkdir('dist/'+p,{recursive:true});await writeFile('dist/'+p+'/index.html',html)}
await writeFile('dist/404.html',html);
await writeFile('dist/build-info.json',JSON.stringify(buildMeta,null,2)+'\n');
console.log(`Built ${paths.length+1} pages: cover, 5 hubs, 25 module pages and 425 section pages, plus a 404 document.`);
