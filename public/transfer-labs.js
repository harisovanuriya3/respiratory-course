// Original educational models. They do not estimate a patient's arterial PO2.
const positive=(...values)=>values.every(x=>Number.isFinite(x)&&x>0);
export function relativeDiffusion({area,thickness,coefficient,gradient}){
 if(!positive(area,thickness,coefficient)||!Number.isFinite(gradient)||gradient<0)throw Error('domain');
 const conductance=area*coefficient/thickness;
 return {conductance,flux:conductance*gradient/60};
}
export function transferResistance({dm,theta,vc,va}){
 if(!positive(dm,theta,vc,va))throw Error('domain');
 const blood=theta*vc,membraneResistance=1/dm,bloodResistance=1/blood;
 const dlco=1/(membraneResistance+bloodResistance);
 return {blood,dlco,kco:dlco/va,membranePercent:100*membraneResistance/(membraneResistance+bloodResistance)};
}
const experiments={
9:{calculate:relativeDiffusion,title:['Эксперимент: площадь, толщина и движущая сила диффузии','Experiment: diffusion area, thickness and driving force','Тәжірибе: диффузия ауданы, қалыңдығы және қозғаушы күші'],
 inputs:[['area',['Площадь относительно исходной','Area relative to baseline','Бастапқыға қатысты аудан'],'×',1,.1,2,.1],['thickness',['Толщина относительно исходной','Thickness relative to baseline','Бастапқыға қатысты қалыңдық'],'×',1,.1,4,.1],['coefficient',['Коэффициент диффузии относительно исходного','Diffusion coefficient relative to baseline','Бастапқыға қатысты диффузия коэффициенті'],'×',1,.1,3,.1],['gradient',['Градиент парциального давления','Partial-pressure gradient','Парциалдық қысым градиенті'],'mmHg',60,0,120,1]],
 outputs:[['conductance',['Относительная проводимость','Relative conductance','Салыстырмалы өткізгіштік'],'×'],['flux',['Относительный поток','Relative flux','Салыстырмалы ағын'],'×']],
 formula:'G/G₀=(A/A₀)·(D/D₀)/(T/T₀); J/J₀=(G/G₀)·(ΔP/60).',
 task:['Сначала удвойте толщину: проводимость и поток уменьшаются вдвое. Затем удвойте градиент: поток восстановится, но проводимость останется сниженной. При нулевом градиенте поток равен нулю даже через сохранную мембрану.','First double thickness: conductance and flux halve. Next double the gradient: flux recovers, but conductance remains reduced. At zero gradient, flux is zero even across an intact membrane.','Алдымен қалыңдықты екі еселеңіз: өткізгіштік пен ағын екі есе азаяды. Кейін градиентті екі еселеңіз: ағын қалпына келеді, бірақ өткізгіштік төмен қалады. Градиент нөл болса, бүтін мембрана арқылы да ағын нөл.'],
 limits:['Это локальный стационарный закон Фика при независимо заданных параметрах, а не модель всей лёгочной циркуляции. Градиент вдоль капилляра меняется; связывание Hb, время транзита и V/Q здесь не рассчитываются. Из отношения потоков нельзя вывести PaO₂ или диагноз.','This is a local steady-state Fick-law model with independent inputs, rather than the entire pulmonary circulation. The capillary gradient changes along its length; Hb binding, transit time and V/Q are omitted. Flux ratios do not determine PaO₂ or a diagnosis.','Бұл — тәуелсіз кірістері бар жергілікті тұрақталған Фик моделі, бүкіл өкпелік қанайналым емес. Градиент капилляр бойымен өзгереді; Hb байланысуы, транзит уақыты және V/Q есептелмейді. Ағын қатынасы PaO₂ не диагнозды анықтамайды.']},
11:{calculate:transferResistance,title:['Эксперимент: мембрана и кровь как последовательные сопротивления','Experiment: membrane and blood resistances in series','Тәжірибе: мембрана мен қанның тізбектей кедергілері'],
 inputs:[['dm',['Мембранная проводимость Dm','Membrane conductance Dm','Мембрана өткізгіштігі Dm'],'mL/min/mmHg',60,5,120,1],['theta',['Удельная скорость связывания CO, θ','Specific CO reaction rate, θ','CO байланысуының меншікті жылдамдығы, θ'],'mL CO/(mL blood·min·mmHg)',.8,.1,2,.1],['vc',['Капиллярный объём крови Vc','Capillary blood volume Vc','Капиллярлық қан көлемі Vc'],'mL',75,10,150,1],['va',['Доступный альвеолярный объём VA','Accessible alveolar volume VA','Қолжетімді альвеолалық көлем VA'],'L',6,1,8,.1]],
 outputs:[['blood','θ·Vc','mL/min/mmHg'],['dlco','DLCO','mL/min/mmHg'],['kco','KCO','mL/min/mmHg/L'],['membranePercent',['Доля мембранного сопротивления','Membrane resistance fraction','Мембрана кедергісінің үлесі'],'%']],
 formula:'1/DLCO=1/Dm+1/(θ·Vc); KCO=DLCO/VA.',
 task:['При Dm=60 и θ·Vc=60 DLCO=30, а не 120. Уменьшите Dm до 30: DLCO=20. Восстановите Dm и уменьшите Vc вдвое: DLCO также станет 20. Одинаковый DLCO может соответствовать разным механизмам.','At Dm=60 and θ·Vc=60, DLCO=30, not 120. Reduce Dm to 30: DLCO=20. Restore Dm and halve Vc: DLCO again becomes 20. The same DLCO can arise through different mechanisms.','Dm=60 және θ·Vc=60 болса, DLCO=30, 120 емес. Dm-ді 30-ға азайтсаңыз, DLCO=20. Dm-ді қалпына келтіріп, Vc-ні екі есе азайтсаңыз, DLCO қайтадан 20 болады. Бірдей DLCO әртүрлі механизмнен туындайды.'],
 limits:['Параметры синтетические и не являются нормативами. θ зависит, в частности, от условий оксигенации и реакции с Hb; один DLCO не позволяет независимо определить Dm и Vc. VA можно менять отдельно только для демонстрации отношения: нормальный KCO не «исправляет» низкий VA и не исключает патологию. Клинически учитывают качество, Hb и референсные значения.','Inputs are synthetic, not reference ranges. θ depends in part on oxygenation and Hb reaction; one DLCO cannot separately identify Dm and Vc. Changing VA independently only demonstrates the quotient: normal KCO does not “correct” low VA or exclude disease. Clinical interpretation considers quality, Hb and reference values.','Кірістер — норматив емес, синтетикалық мәндер. θ оксигенацияға және Hb реакциясына тәуелді; бір DLCO арқылы Dm мен Vc бөлек анықталмайды. VA-ны тәуелсіз өзгерту тек қатынасты көрсетеді: қалыпты KCO төмен VA-ны «түзетпейді» және ауруды жоққа шығармайды. Клиникада сапа, Hb және референстер ескеріледі.']}
};
const labels=[['Тәжірибе шарттары','Experiment conditions','Условия эксперимента']];
export function transferLab(mid,L){
 const d=experiments[mid];if(!d)return '';const t=v=>Array.isArray(v)?v[L]:v;
 return `<section class="learning-panel transfer-lab" data-transfer="${mid}"><h3>${t(d.title)}</h3><div class="lab-controls">${d.inputs.map(([key,label,unit,value,min,max,step])=>`<label for="transfer-${key}">${t(label)} (${unit})<input id="transfer-${key}" name="${key}" type="number" min="${min}" max="${max}" step="${step}" value="${value}" required></label>`).join('')}</div><p class="transfer-results" role="status" aria-live="polite"></p><p>${d.formula}</p><p>${t(d.task)}</p><p>${t(d.limits)}</p><a href="https://doi.org/10.1183/13993003.00016-2016" target="_blank" rel="noopener noreferrer">ERS/ATS 2017: DLCO</a>${mid===11?' · <a href="https://doi.org/10.1183/13993003.01499-2021" target="_blank" rel="noopener noreferrer">ERS/ATS 2022</a>':''}</section>`;
}
export function initTransferLabs(L){
 document.querySelectorAll('[data-transfer]').forEach(root=>{
  const d=experiments[root.dataset.transfer],output=root.querySelector('.transfer-results');
  const update=()=>{try{const inputs=[...root.querySelectorAll('input')];if(inputs.some(x=>!x.checkValidity()||!x.value.trim()))throw Error('domain');const result=d.calculate(Object.fromEntries(inputs.map(x=>[x.name,Number(x.value)])));output.dataset.valid='true';output.textContent=d.outputs.map(([key,label,unit])=>`${Array.isArray(label)?label[L]:label} = ${result[key].toFixed(2)} ${unit}`).join(' · ');}catch{output.dataset.valid='false';output.textContent=['Введите значения в указанных пределах.','Enter values within the specified limits.','Мәндерді көрсетілген шектерде енгізіңіз.'][L];}};
  root.querySelectorAll('input').forEach(input=>input.addEventListener('input',update));update();
 });
}
