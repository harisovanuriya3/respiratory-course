export function acidBase(paco2:number,hco3:number,na:number,cl:number){return{ph:6.1+Math.log10(hco3/(.03*paco2)),anionGap:na-cl-hco3,winter:1.5*hco3+8}}
export function feedbackEquilibrium(production:number,baselineVentilation:number,gain:number){const A=gain,B=baselineVentilation-40*A,C=-.863*production,paco2=A>0?(-B+Math.sqrt(B*B-4*A*C))/(2*A):-C/B;return{paco2,ventilation:baselineVentilation+A*(paco2-40)}}
export function inflationReflex(tidalVolume:number,vagus:boolean){return{stretch:tidalVolume,signal:vagus?'ON':'OFF',strong:vagus&&tidalVolume>=900}}
