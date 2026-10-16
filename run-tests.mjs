import {readdir,writeFile} from 'node:fs/promises';
const results=[];
for(const file of (await readdir('.')).filter(x=>/^test-.*\.mjs$/.test(x)).sort()){
 let row;
 try{await import(new URL('./'+file,import.meta.url));row={file,passed:true};}catch(error){row={file,passed:false,error:error.stack};}
 results.push(row);
 console.log(`${row.passed?'PASS':'FAIL'} ${file}`);if(!row.passed)console.log(row.error);
}
await writeFile('docs/TEST_RESULTS.json',JSON.stringify(results,null,2));
console.log(`${results.filter(x=>x.passed).length}/${results.length} test suites passed`);
if(results.some(x=>!x.passed))process.exitCode=1;
