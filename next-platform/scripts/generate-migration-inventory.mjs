import {mkdir,writeFile} from 'node:fs/promises';
import {modules,sections} from '../../public/content.js';

const langs=['RU','EN','KZ'];
const out=new URL('../generated/',import.meta.url);
await mkdir(out,{recursive:true});
const catalog={languages:langs,modules:modules.map(m=>({id:m.id,title:Object.fromEntries(langs.map((l,i)=>[l,m.title[i]])),sections:sections.map(s=>s[0])})),sections:sections.map(s=>({id:s[0],title:Object.fromEntries(langs.map((l,i)=>[l,s[i+1]]))}))};
const interactiveByModule={1:['ventilation'],2:['airway-anatomy'],3:['respiratory-muscles'],4:['breathing-cycle'],5:['react-rc-mechanics','legacy-pressure-volume'],6:['airway-resistance'],7:['lung-volumes'],8:['alveolar-ventilation'],9:['gas-diffusion'],10:['alveolar-gas'],11:['transfer-capacity'],12:['pulmonary-circulation'],13:['ventilation-perfusion'],14:['oxygen-transport'],15:['carbon-dioxide-transport'],16:['acid-base'],17:['central-control'],18:['respiratory-reflexes'],19:['chemoreception'],20:['exercise'],21:['altitude'],22:['sleep'],23:['diving'],24:['spirometry'],25:['integrative-case']};
const matrix=[];
for(const m of modules)for(const s of sections){const section=s[0],isPilot=m.id===5&&section==='interactive';matrix.push({module:m.id,section,oldRoute:`/modules/${m.id}/${section}?lang={RU|EN|KZ}`,newRoute:`/modules/${m.id}/${section}?lang={RU|EN|KZ}`,source:['public/content.js',`public/module-${m.id}.js`],languages:{RU:true,EN:true,KZ:true},interactive:section==='interactive'?(interactiveByModule[m.id]||[]):section==='voice'?['voice-tools']:[],laboratory:section==='interactive'?interactiveByModule[m.id]||[]:[],clinical:section==='clinical'||section==='cases'||section==='virtual-patient'?['legacy-module-case']:[],media:section==='media'?['legacy-media-atlas']:[],status:isPilot?'pilot-react':'pending-content-migration',verification:isPilot?'typed-model-and-build-pass':'not-yet-verified-in-next'})}
await writeFile(new URL('course-catalog.json',out),JSON.stringify(catalog,null,2)+'\n');
await writeFile(new URL('migration-matrix.json',out),JSON.stringify(matrix,null,2)+'\n');
console.log(`Generated ${catalog.modules.length} modules, ${catalog.sections.length} sections and ${matrix.length} migration records.`);
