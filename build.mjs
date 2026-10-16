import {cp,mkdir,readFile,writeFile,rm} from 'node:fs/promises';
import {modules,sections} from './public/content.js';
await rm('dist',{recursive:true,force:true});await cp('public','dist',{recursive:true});
const html=await readFile('public/index.html','utf8');
const paths=['contents','labs','patients','patients/advanced','exam',...modules.flatMap(m=>['modules/'+m.id,...sections.map(s=>'modules/'+m.id+'/'+s[0])])];
for(const p of paths){await mkdir('dist/'+p,{recursive:true});await writeFile('dist/'+p+'/index.html',html)}
await writeFile('dist/404.html',html);
console.log(`Built ${paths.length+1} pages: cover, 5 hubs, 25 module pages and 425 section pages, plus a 404 document.`);
