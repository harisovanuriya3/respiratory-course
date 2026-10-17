export function sleepVentilation(va:number,vco2:number,events:number,hours:number){return{paco2:.863*vco2/va,ahi:events/hours}}
export function diving(depth:number,fio2:number,volume:number){const pressure=1+depth/10,ratio=1/pressure;return{pressure,ratio,po2:pressure*fio2,volumeAtDepth:volume/pressure,volumeAtSurface:volume*pressure}}
