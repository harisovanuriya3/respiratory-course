const tr=(L,ru,en,kz)=>[ru,en,kz][L];
const prompts=[
[1,['При VT=500 мл, VD=150 мл и f=12/мин чему равна VA?','With VT=500 mL, VD=150 mL and f=12/min, what is VA?','VT=500 мл, VD=150 мл және f=12/мин болса, VA қанша?'],['4,2 л/мин','4.2 L/min','4,2 л/мин'],['VA=(500−150)×12=4200 мл/мин.','VA=(500−150)×12=4200 mL/min.','VA=(500−150)×12=4200 мл/мин.']],
[5,['Если ΔV=0,25 л при ΔP=5 см H₂O, чему равна растяжимость?','If ΔV=0.25 L for ΔP=5 cm H₂O, what is compliance?','ΔV=0,25 л және ΔP=5 см H₂O болса, созылғыштық қанша?'],['0,05 л/см H₂O','0.05 L/cm H₂O','0,05 л/см H₂O'],['C=ΔV/ΔP=0,25/5=0,05.','C=ΔV/ΔP=0.25/5=0.05.','C=ΔV/ΔP=0,25/5=0,05.']],
[8,['При VT=250 мл, VD=150 мл и f=24/мин чему равна VA?','With VT=250 mL, VD=150 mL and f=24/min, what is VA?','VT=250 мл, VD=150 мл және f=24/мин болса, VA қанша?'],['2,4 л/мин','2.4 L/min','2,4 л/мин'],['VA=(250−150)×24=2400 мл/мин.','VA=(250−150)×24=2400 mL/min.','VA=(250−150)×24=2400 мл/мин.']],
[13,['Если VA=0,5 л/мин и Q=2,5 л/мин, чему равно V/Q?','If VA=0.5 L/min and Q=2.5 L/min, what is V/Q?','VA=0,5 л/мин және Q=2,5 л/мин болса, V/Q қанша?'],['0,2','0.2','0,2'],['V/Q=0,5/2,5=0,2.','V/Q=0.5/2.5=0.2.','V/Q=0,5/2,5=0,2.']],
[14,['Как влияет снижение Hb при постоянных SaO₂ и PaO₂ на CaO₂?','How does lower Hb affect CaO₂ if SaO₂ and PaO₂ are fixed?','SaO₂ мен PaO₂ тұрақты болса, Hb төмендеуі CaO₂ қалай өзгертеді?'],['Снижает CaO₂','Decreases CaO₂','CaO₂ төмендетеді'],['Связанный с гемоглобином кислород уменьшается.','Hemoglobin-bound oxygen content falls.','Гемоглобинмен байланысқан оттегі мөлшері азаяды.']],
[24,['При FEV₁=2,1 л и FVC=3,5 л чему равно FEV₁/FVC?','With FEV₁=2.1 L and FVC=3.5 L, what is FEV₁/FVC?','FEV₁=2,1 л және FVC=3,5 л болса, FEV₁/FVC қанша?'],['60%','60%','60%'],['2,1/3,5=0,60; для клинической оценки нужна LLN.','2.1/3.5=0.60; clinical interpretation requires LLN.','2,1/3,5=0,60; клиникалық бағалауға LLN қажет.']]
];
export function reasoningSelfChecks(mid,section,L,lang){
 if(section!=='tests')return '';
 const item=prompts.find(x=>x[0]===mid);if(!item)return '';
 return '<section class="lesson-card"><h3>'+tr(L,'Дополнительная самопроверка с объяснением','Additional self-check with explanation','Түсіндірмесі бар қосымша өзіндік тексеру')+'</h3><p>'+item[1][L]+'</p><details><summary>'+tr(L,'Показать правильный ответ','Reveal correct answer','Дұрыс жауапты көрсету')+'</summary><p><strong>'+item[2][L]+'</strong> — '+item[3][L]+'</p></details><p><a href="/modules/'+mid+'/practice?lang='+lang+'">'+tr(L,'Практика','Practice','Практика')+'</a></p></section>';
}
