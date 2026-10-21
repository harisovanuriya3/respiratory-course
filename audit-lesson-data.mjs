import {readFile,readdir,writeFile} from 'node:fs/promises';
import {lessonOption,acidBaseExplanations} from './public/lesson-localization.js';
const report=[];
for(const file of (await readdir('public')).filter(x=>/^module-.*\.js$/.test(x))){
 const original=await readFile('public/'+file,'utf8');
 const bindings={lessonOption,acidBaseExplanations};
 for(const match of original.matchAll(/^import\s*\{([^}]+)\}\s*from\s*['"]([^'"]+)['"]/gm)){
  const imported=await import(new URL(match[2],new URL('./public/'+file,import.meta.url)));
  for(const item of match[1].split(',')){const [name,alias]=item.trim().split(/\s+as\s+/);bindings[alias||name]=imported[name];}
 }
 const source=original.replace(/^import[^\n]*\n/gm,'').replaceAll('export ','');
 try{
 const data=new Function(...Object.keys(bindings),source+';return {qs:typeof qs!=="undefined"?qs:null,Q:typeof Q!=="undefined"?Q:null,questions:typeof questions!=="undefined"?questions:null,quiz:typeof quiz!=="undefined"?quiz:null,items:typeof items!=="undefined"?items:null,QQ:typeof QQ!=="undefined"?QQ:null};')(...Object.values(bindings));
 for(const [name,rows] of Object.entries(data))if(Array.isArray(rows))for(const [index,row] of rows.entries()){
  const flatLanguageLayout=Array.isArray(row)&&typeof row[0]==='string'&&typeof row[1]==='string';
  const options=Array.isArray(row)?row[1]:row.opts;
  const explanation=Array.isArray(row)?row[flatLanguageLayout?7:3]:row.why;
  if(!flatLanguageLayout&&Array.isArray(options)&&options.every(x=>typeof x==='string')&&options.some(x=>/[А-Яа-я]/.test(lessonOption(x,1))))report.push({file,name,index,kind:'untranslated-options',options});
  if(Array.isArray(explanation)&&typeof explanation[1]==='string'&&/[А-Яа-яЁё]/.test(explanation[1]))report.push({file,name,index,kind:'untranslated-explanation',explanation});
 }
 }catch(error){report.push({file,error:error.message});}
}
await writeFile('docs/LESSON_DATA_AUDIT.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));
