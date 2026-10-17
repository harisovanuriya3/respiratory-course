import data from '../generated/legacy-content.json' with {type:'json'};

const strip=html=>html.replace(/<[^>]+>/g,' ').replace(/&nbsp;/g,' ').replace(/\s+/g,' ').trim();
for(let moduleId=1;moduleId<=25;moduleId+=1){
  const html=data.pages[`${moduleId}/virtual-patient/EN`].html;
  const title=strip(/<h3\b[^>]*>([\s\S]*?)<\/h3>/i.exec(html)?.[1]||/<h2\b[^>]*>([\s\S]*?)<\/h2>/i.exec(html)?.[1]||'').slice(0,100);
  const count=pattern=>(html.match(pattern)||[]).length;
  console.log(String(moduleId).padStart(2,'0'),JSON.stringify({title,details:count(/<details\b/gi),steps:count(/data-step=/gi),buttons:count(/<button\b/gi),fieldsets:count(/<fieldset\b/gi),radio:count(/type=["']radio/gi),selects:count(/<select\b/gi),ranges:count(/type=["']range/gi),textareas:count(/<textarea\b/gi),chars:strip(html).length}));
}
