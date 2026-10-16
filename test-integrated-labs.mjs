import assert from 'node:assert/strict';
import {ventilation,alveolarGas,oxygenDelivery,acidBase,integratedLab} from './public/integrated-labs.js';
import {modulePatient,modulePatientIndices,patientScenarioData} from './public/advanced-patients.js';
const close=(a,b,tolerance=0.001)=>assert.ok(Math.abs(a-b)<tolerance,`${a} != ${b}`);
const baseline=ventilation({vt:500,dead:150,rate:12,vco2:200});
close(baseline.va,4.2);close(baseline.ve,6);close(baseline.paco2,41.095238);
const shallow=ventilation({vt:250,dead:150,rate:24,vco2:200});
close(shallow.ve,baseline.ve);close(shallow.va,2.4);close(shallow.paco2,71.916667);
close(ventilation({vt:500,dead:150,rate:24,vco2:200}).paco2,baseline.paco2/2);
close(alveolarGas({fio2:1,pb:760,paco2:40,r:0.8}).pao2,673);
close(alveolarGas({fio2:0.21,pb:760,paco2:40,r:0.8}).pao2,101.83);
const oxygen=oxygenDelivery({hb:15,sao2:98,pao2:100,co:5});
close(oxygen.cao2,19.998);close(oxygen.do2,999.9);
close(oxygenDelivery({hb:0,sao2:98,pao2:100,co:5}).cao2,0.3);
close(acidBase({hco3:24,paco2:40}).ph,7.40103);
close(acidBase({hco3:24,paco2:60}).ph,7.224939);
for(const args of [{vt:150,dead:150,rate:12,vco2:200},{vt:500,dead:150,rate:0,vco2:200},{vt:NaN,dead:150,rate:12,vco2:200}])assert.throws(()=>ventilation(args));
assert.throws(()=>alveolarGas({fio2:0.21,pb:250,paco2:100,r:0.8}));
assert.throws(()=>oxygenDelivery({hb:15,sao2:101,pao2:100,co:5}));
assert.throws(()=>acidBase({hco3:24,paco2:0}));
assert.equal(modulePatientIndices.length,25);
for(let mid=1;mid<=25;mid++)for(let L=0;L<3;L++){
 assert.ok(modulePatient(mid,L).includes('data-advanced='));
 const c=patientScenarioData[modulePatientIndices[mid-1]];
 assert.equal(c.stages.length,3);
 for(const stage of c.stages){assert.ok(stage.question[L].trim());assert.ok(stage.why[L].trim());assert.ok(stage.options[L][stage.correct]);}
}
for(const mid of [8,10,14,16])for(let L=0;L<3;L++)assert.ok(integratedLab(mid,L).includes('data-model='));
console.log('PASS: physiological reference calculations, limits, 25 patient mappings and RU/EN/KZ content');
