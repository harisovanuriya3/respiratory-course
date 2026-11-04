import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {modules,sections} from './public/content.js';
const app=readFileSync('public/app.js','utf8');
const media=readFileSync('public/central-media-library.js','utf8');
const labs=[
 [5,'complianceStation','initComplianceStations'],
 [6,'airwayResistanceStation','initAirwayResistanceStations'],
 [7,'lungCapacityStation','initLungCapacityStations'],
 [8,'alveolarVentilationStation','initAlveolarVentilationStations'],
 [9,'diffusionStation','initDiffusionStations'],
 [10,'alveolarGasStation','initAlveolarGasStations'],
 [12,'pulmonaryResistanceStation','initPulmonaryResistanceStations'],
 [13,'vqLearningModel','initVqLearningModels'],
 [14,'oxygenDeliveryStation','initOxygenDeliveryStations'],
 [16,'acidBaseStation','initAcidBaseStations'],
 [20,'exerciseGasStation','initExerciseGasStations'],
 [21,'altitudeOxygenStation','initAltitudeOxygenStations'],
 [22,'sleepBreathingStation','initSleepBreathingStations'],
 [24,'spirometryStation','initSpirometryStations']
];
const patientSets=[
 'interactivePatientDecision','clinicalDecisionExtension',
 'patientReasoningSet','mechanicsPatientCases',
 'regulationPatientCases'
];
assert.equal(modules.length,25,'Must retain 25 modules');
assert.equal(new Set(modules.map(x=>x.id)).size,25,'Module IDs must be unique');
assert.equal(sections.length,17,'Must retain 17 lesson sections');
assert.equal(new Set(sections.map(x=>x[0])).size,17,'Section keys must be unique');
for(const m of modules)assert.equal(m.title.length,3,'Missing translated module title: '+m.id);
for(const [mid,render,init] of labs){
 assert.ok(app.includes('${'+render+'(mid,section,L,lang)}'),'Laboratory not rendered: '+mid);
 assert.ok(app.includes(init+'();'),'Laboratory not initialized: '+mid);
 assert.ok(media.includes("id==="+mid+"?"),'Lab not indexed in central media library: '+mid);
 assert.ok(media.includes("'/modules/"+mid+"/interactive'"),'Media library lacks lab link: '+mid);
 assert.ok(media.includes("'/modules/"+mid+"/theory'"),'Media library lacks theory link: '+mid);
}
for(const render of patientSets)assert.ok(app.includes('${'+render+'(mid,section,L,lang)}'),'Patient integration missing: '+render);
console.log('Course integration checked: 25 modules, 17 sections, 14 specialized laboratories and 5 interactive patient sets.');
