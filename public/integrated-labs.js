import {calculationSources} from './scientific-sources.js';
import {transferLab,initTransferLabs} from './transfer-labs.js';
// Independent calculation functions shared by the UI and numerical regression tests.
const finite=(...xs)=>xs.every(Number.isFinite);
export function ventilation({vt,dead,rate,vco2}){
 if(!finite(vt,dead,rate,vco2)||vt<=dead||dead<0||rate<=0||vco2<=0)throw Error('domain');
 const ve=vt*rate/1000,va=(vt-dead)*rate/1000;
 return {ve,va,paco2:0.863*vco2/va};
}
export function alveolarGas({fio2,pb,paco2,r}){
 if(!finite(fio2,pb,paco2,r)||fio2<=0||fio2>1||pb<=47||paco2<0||r<=0)throw Error('domain');
 const pio2=fio2*(pb-47);
 // General steady-state alveolar equation with negligible inspired CO2.
 const pao2=pio2-paco2*(fio2+(1-fio2)/r);
 if(pao2<0)throw Error('inconsistent');
 return {pio2,pao2};
}
export function oxygenDelivery({hb,sao2,pao2,co}){
 if(!finite(hb,sao2,pao2,co)||hb<0||sao2<0||sao2>100||pao2<0||co<=0)throw Error('domain');
 const bound=1.34*hb*sao2/100,dissolved=0.003*pao2,cao2=bound+dissolved;
 return {bound,dissolved,cao2,do2:cao2*co*10};
}
export function acidBase({hco3,paco2}){
 if(!finite(hco3,paco2)||hco3<=0||paco2<=0)throw Error('domain');
 return {ph:6.1+Math.log10(hco3/(0.03*paco2))};
}
const texts={
 ventilation:{title:['Вентиляция и удаление CO₂','Ventilation and CO₂ elimination','Вентиляция және CO₂ шығарылуы'],inputs:[['vt',['Дыхательный объём','Tidal volume','Тыныс көлемі'],'mL',500,100,1200],['dead',['Мёртвое пространство','Dead space','Өлі кеңістік'],'mL',150,0,600],['rate',['Частота дыхания','Respiratory rate','Тыныс жиілігі'],'min⁻¹',12,1,60],['vco2',['Продукция CO₂ (STPD)','CO₂ production (STPD)','CO₂ өндірілуі (STPD)'],'mL/min',200,50,1000]],outputs:[['ve','V̇E','L/min'],['va','V̇A (BTPS)','L/min'],['paco2','PACO₂ ≈ PaCO₂','mmHg']],calc:ventilation,note:['V̇A=(VT−VD)f; PACO₂=0,863·V̇CO₂/V̇A. Сравните 500 мл × 12/мин с 250 мл × 24/мин: V̇E одинакова, а V̇A — 4,2 и 2,4 л/мин. При постоянной продукции CO₂ PACO₂ повышается с 41,10 до 71,92 мм рт. ст. Модель установившегося состояния: VD физиологическое, V̇CO₂ в STPD, V̇A в BTPS. Равенство PaCO₂ и PACO₂ приблизительно; переходный процесс и неоднородность V/Q не моделируются.','V̇A=(VT−VD)f; PACO₂=0.863·V̇CO₂/V̇A. Compare 500 mL × 12/min with 250 mL × 24/min: V̇E is unchanged, but V̇A falls from 4.2 to 2.4 L/min. At fixed CO₂ production, PACO₂ rises from 41.10 to 71.92 mmHg. Steady state: physiological VD, V̇CO₂ in STPD and V̇A in BTPS. PaCO₂ approximates PACO₂; transients and V/Q heterogeneity are omitted.','V̇A=(VT−VD)f; PACO₂=0,863·V̇CO₂/V̇A. 500 мл × 12/мин және 250 мл × 24/мин салыстырыңыз: V̇E өзгермейді, V̇A 4,2-ден 2,4 л/мин-ге төмендейді. CO₂ өндірілуі тұрақты болса PACO₂ 41,10-нан 71,92 мм сын. бағ. дейін артады. Тұрақты күй моделі: VD физиологиялық, V̇CO₂ STPD, V̇A BTPS жағдайында. PaCO₂ шамамен PACO₂-ге тең; өтпелі үдерістер мен V/Q әркелкілігі ескерілмейді.']},
 gas:{title:['Альвеолярное газовое уравнение','Alveolar gas equation','Альвеолалық газ теңдеуі'],inputs:[['fio2',['Доля O₂','O₂ fraction','O₂ үлесі'],'',0.21,0.1,1,0.01],['pb',['Барометрическое давление','Barometric pressure','Барометрлік қысым'],'mmHg',760,250,800],['paco2',['Альвеолярное PCO₂','Alveolar PCO₂','Альвеолалық PCO₂'],'mmHg',40,10,100],['r',['Дыхательный коэффициент','Respiratory exchange ratio','Тыныстық коэффициент'],'',0.8,0.6,1.2,0.01]],outputs:[['pio2','PIO₂','mmHg'],['pao2','PAO₂','mmHg']],calc:alveolarGas,note:['PIO₂=FiO₂(PB−47); PAO₂=PIO₂−PACO₂[FiO₂+(1−FiO₂)/R]. Использовано полное уравнение при пренебрежимо малом вдыхаемом CO₂. На комнатном воздухе распространено приближение PAO₂≈PIO₂−PaCO₂/R. При FiO₂=1 полное уравнение даёт PAO₂=PIO₂−PACO₂. Давление водяного пара 47 мм рт. ст. предполагает 37 °C. Это альвеолярное, а не артериальное PO₂; отрицательный результат означает несовместимость заданных условий.','PIO₂=FiO₂(PB−47); PAO₂=PIO₂−PACO₂[FiO₂+(1−FiO₂)/R]. The full equation assumes negligible inspired CO₂. On room air PAO₂≈PIO₂−PaCO₂/R is commonly used. At FiO₂=1 the full equation gives PAO₂=PIO₂−PACO₂. Water-vapor pressure of 47 mmHg assumes 37°C. Alveolar PO₂ is not arterial PO₂; negative results indicate inconsistent inputs.','PIO₂=FiO₂(PB−47); PAO₂=PIO₂−PACO₂[FiO₂+(1−FiO₂)/R]. Толық теңдеуде дем алатын CO₂ елеусіз деп алынады. Бөлме ауасында PAO₂≈PIO₂−PaCO₂/R жуықтауы қолданылады. FiO₂=1 болса PAO₂=PIO₂−PACO₂. Су буының 47 мм сын. бағ. қысымы 37 °C-қа сәйкес. Альвеолалық PO₂ артериялық PO₂ емес; теріс нәтиже кіріс шарттарының үйлеспейтінін көрсетеді.']},
 oxygen:{title:['Содержание и доставка кислорода','Oxygen content and delivery','Оттегінің мөлшері және жеткізілуі'],inputs:[['hb',['Гемоглобин','Hemoglobin','Гемоглобин'],'g/dL',15,0,22,0.1],['sao2',['Сатурация','Saturation','Қанығу'],'%',98,0,100],['pao2',['Артериальное PO₂','Arterial PO₂','Артериялық PO₂'],'mmHg',100,0,600],['co',['Сердечный выброс','Cardiac output','Жүрек шығарылымы'],'L/min',5,1,20,0.1]],outputs:[['bound','Hb–O₂','mL/dL'],['dissolved',['Растворённый O₂','Dissolved O₂','Еріген O₂'],'mL/dL'],['cao2','CaO₂','mL/dL'],['do2','DO₂','mL/min']],calc:oxygenDelivery,note:['CaO₂=1,34·Hb·SaO₂+0,003·PaO₂; SaO₂ в формуле — доля. DO₂=CaO₂·CO·10, где 10 переводит л в дл. Уменьшите Hb с 15 до 8 г/дл при неизменных SaO₂ и PaO₂: нормальная сатурация не исключает низкой доставки O₂. Hb, SaO₂ и PaO₂ вводятся независимо: модель не рассчитывает кривую диссоциации и не учитывает дисгемоглобины.','CaO₂=1.34·Hb·SaO₂+0.003·PaO₂; use fractional SaO₂ in the formula. DO₂=CaO₂·CO·10 converts liters to deciliters. Reduce Hb from 15 to 8 g/dL at unchanged SaO₂ and PaO₂: normal saturation does not exclude low O₂ delivery. Inputs are independent; dissociation curves and dyshemoglobins are not modeled.','CaO₂=1,34·Hb·SaO₂+0,003·PaO₂; формулада SaO₂ үлес ретінде алынады. DO₂=CaO₂·CO·10 литрді децилитрге айналдырады. SaO₂ мен PaO₂ тұрақты кезде Hb 15-тен 8 г/дл-ге азайтыңыз: қалыпты қанығу O₂ жеткізілуінің азаюын жоққа шығармайды. Кірістер тәуелсіз; диссоциация қисығы мен дисгемоглобиндер есептелмейді.']},
 acid:{title:['Дыхательный и метаболический компоненты pH','Respiratory and metabolic components of pH','pH тыныстық және метаболизмдік құрамдары'],inputs:[['hco3',['Бикарбонат','Bicarbonate','Бикарбонат'],'mmol/L',24,4,48,0.1],['paco2',['Артериальное PCO₂','Arterial PCO₂','Артериялық PCO₂'],'mmHg',40,10,100]],outputs:[['ph','pH','']],calc:acidBase,note:['pH=6,1+log₁₀[HCO₃⁻/(0,03·PaCO₂)]. Увеличьте PaCO₂ с 40 до 60 при HCO₃⁻=24: pH снижается с 7,401 до 7,225. Затем увеличьте HCO₃⁻ и объясните направление компенсации. Формула описывает равновесие; почечную компенсацию во времени и смешанные нарушения нужно оценивать отдельно. Рассчитанный HCO₃⁻ газоанализатора не является независимым от измеренных pH и PaCO₂.','pH=6.1+log₁₀[HCO₃⁻/(0.03·PaCO₂)]. Increase PaCO₂ from 40 to 60 at HCO₃⁻=24: pH falls from 7.401 to 7.225. Then raise HCO₃⁻ and explain the direction of compensation. This equilibrium equation does not simulate renal compensation over time or identify mixed disturbances. Blood-gas calculated HCO₃⁻ is not independent of measured pH and PaCO₂.','pH=6,1+log₁₀[HCO₃⁻/(0,03·PaCO₂)]. HCO₃⁻=24 кезінде PaCO₂ 40-тан 60-қа артса pH 7,401-ден 7,225-ке төмендейді. Кейін HCO₃⁻ арттырып, компенсация бағытын түсіндіріңіз. Теңдеу тепе-теңдікті сипаттайды; бүйректік компенсацияның уақыт ағымы мен аралас бұзылыстар бөлек бағаланады. Газ талдағыш есептеген HCO₃⁻ өлшенген pH пен PaCO₂-ден тәуелсіз емес.']}
};
const byModule={8:'ventilation',10:'gas',14:'oxygen',16:'acid'};
const tr=(x,L)=>Array.isArray(x)?x[L]:x;
export function integratedLab(mid,L){
 if([9,11].includes(mid))return transferLab(mid,L);
 const key=byModule[mid],d=texts[key];if(!d)return '';
 const source=calculationSources[key];
 return `<section class="lesson-card integrated-lab" data-model="${key}"><h3>${d.title[L]}</h3><div class="lab-controls">${d.inputs.map(([name,label,unit,value,min,max,step=1])=>`<label>${label[L]} (${unit})<input name="${name}" type="number" value="${value}" min="${min}" max="${max}" step="${step}" required></label>`).join('')}</div><div class="lab-results" role="status" aria-live="polite"></div><p>${d.note[L]}</p><p class="source-line"><a href="${source[1]}" target="_blank" rel="noopener noreferrer">${source[0]}</a></p></section>`;
}
export function initIntegratedLabs(L){
 initTransferLabs(L);
 document.querySelectorAll('[data-model]').forEach(root=>{
  const d=texts[root.dataset.model],output=root.querySelector('.lab-results');
  const update=()=>{try{
   const inputs=[...root.querySelectorAll('input')];if(inputs.some(x=>!x.checkValidity()||x.value===''))throw Error('domain');
   const result=d.calc(Object.fromEntries(inputs.map(x=>[x.name,Number(x.value)])));
   output.textContent=d.outputs.map(([key,label,unit])=>`${tr(label,L)} = ${result[key].toFixed(key==='ph'?3:2)} ${unit}`).join(' · ');
  }catch{output.textContent=['Проверьте значения и совместимость условий. Для вентиляции требуется VT > VD.','Check input ranges and compatibility. Ventilation requires VT > VD.','Мәндер мен шарттардың үйлесімін тексеріңіз. Вентиляция үшін VT > VD қажет.'][L];}};
  root.querySelectorAll('input').forEach(x=>x.addEventListener('input',update));update();
 });
}
