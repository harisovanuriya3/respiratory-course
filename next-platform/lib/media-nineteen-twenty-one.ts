export const chemoreflex=(vco2:number,va:number)=>.863*vco2/va;
export function exercise(vt:number,f:number,vd:number,vo2:number,vco2:number,hr:number){return{ve:vt*f,va:Math.max(0,vt-vd)*f,rer:vco2/vo2,equivalent:vt*f/vco2,oxygenPulse:vo2*1000/hr}}
export function altitude(pb:number,paco2:number,fioPercent:number){const pio2=(pb-47)*fioPercent/100,pao2=pio2-paco2/.8,ph=6.1+Math.log10(24/(.03*paco2));return{pio2,pao2,ph}}
