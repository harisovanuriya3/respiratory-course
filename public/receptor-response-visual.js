const tr=(L,ru,en,kz)=>[ru,en,kz][L];
export function receptorResponse(id,intensity){
 if(!Number.isFinite(intensity)||intensity<0||intensity>100)throw new RangeError('Intensity 0-100');
 const x=intensity/100;
 const profiles={
 stretch:{rate:12-2*x,depth:1-.22*x,description:['Выраженное растяжение усиливает вагусное торможение вдоха; в спокойном дыхании взрослого эффект ограничен.','Strong inflation enhances vagal inspiratory inhibition; effect is limited in quiet adult breathing.','Күшті керілу вагустық дем алу тежелуін арттырады; ересектің тыныш тынысында әсері шектеулі.']},
 co2:{rate:12+9*x,depth:1+.45*x,description:['Гиперкапния усиливает центральный хеморецепторный драйв.','Hypercapnia increases central chemoreceptor drive.','Гиперкапния орталық хеморецепторлық қозуды арттырады.']},
 o2:{rate:12+7*x,depth:1+.3*x,description:['Гипоксемия усиливает периферический хеморецепторный ответ.','Hypoxemia increases peripheral chemoreceptor output.','Гипоксемия шеткі хеморецепторлық жауапты арттырады.']},
 irritant:{rate:12+3*x,depth:1-.3*x,description:['Раздражение может вызывать кашель и защитные нерегулярные дыхательные ответы; гладкая кривая не моделирует кашель.','Irritation may provoke cough and irregular protective breathing; this smooth trace does not simulate cough.','Тітіркену жөтел және қорғаныш тыныс өзгерістерін тудыруы мүмкін; бұл қисық жөтелді модельдемейді.']},
 proprio:{rate:12+10*x,depth:1+.35*x,description:['При начале движения проприоцепция и центральная команда помогают быстро изменить вентиляцию.','At movement onset, proprioception and central command rapidly adjust breathing.','Қозғалыс басталғанда проприоцепция және орталық команда тынысты тез өзгертеді.']}
 };
 const p=profiles[id];if(!p)throw new RangeError('Unknown receptor');
 return {...p,kind:id};
}
export function receptorResponseView(L){
 return '<section class="receptor-response" data-receptor-response><h4>'+tr(L,'Как активация рецептора меняет дыхание','How receptor activation changes breathing','Рецептор белсенуі тынысты қалай өзгертеді')+'</h4><label>'+tr(L,'Условная сила раздражителя','Illustrative stimulus intensity','Тітіркендіргіштің шартты күші')+' <output data-receptor-intensity-output>50</output>%<input data-receptor-intensity type="range" min="0" max="100" value="50" step="10"></label><svg viewBox="0 0 620 230" data-receptor-wave role="img" aria-label="'+tr(L,'Учебная динамическая кривая дыхания','Educational dynamic breathing trace','Оқу тыныс қисығы')+'"><path d="M45 20V195H600" stroke="#587e80" fill="none" stroke-width="2"/><path data-receptor-path d="" fill="none" stroke="#137a82" stroke-width="3"/><text x="6" y="18" font-size="12">VT</text><text x="540" y="215" font-size="12">20 s</text></svg><p data-receptor-result role="status" aria-live="polite"></p><p>'+tr(L,'Динамическая иллюстрация направления ответа, не измеренная спирограмма и не клинический прогноз. Числа условные.','Dynamic illustration of response direction, not a measured spirogram or clinical prediction. Numeric values are illustrative.','Жауап бағытының динамикалық көрінісі, өлшенген спирограмма немесе клиникалық болжам емес. Сандар шартты.')+'</p></section>';
}
export function initReceptorResponse(root,L,getId){
 const input=root.querySelector('[data-receptor-intensity]'),path=root.querySelector('[data-receptor-path]'),output=root.querySelector('[data-receptor-result]');
 if(!input||!path)return ()=>{};
 const update=()=>{const p=receptorResponse(getId(),Number(input.value));root.querySelector('[data-receptor-intensity-output]').textContent=input.value;const points=[];for(let i=0;i<=300;i++){const t=20*i/300,phase=(t*p.rate/60)%1,u=phase<.38?(1-Math.exp(-4*phase/.38))/(1-Math.exp(-4)):(Math.exp(-3*(phase-.38)/.62)-Math.exp(-3))/(1-Math.exp(-3));points.push((i?'L':'M')+(45+555*i/300).toFixed(1)+' '+(185-110*p.depth*u).toFixed(1));}path.setAttribute('d',points.join(' '));output.textContent=p.description[L]+' · '+tr(L,'Условная частота','Illustrative frequency','Шартты жиілік')+': '+p.rate.toFixed(1)+'/min';};
 input.addEventListener('input',update);update();return update;
}
