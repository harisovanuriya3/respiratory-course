export const ventilationPerfusion=(ventilation:number,perfusion:number)=>perfusion===0?null:ventilation/perfusion;
export function oxygenTransport(p50:number,po2:number,hb:number,cardiacOutput:number){const n=2.7,saturation=po2**n/(po2**n+p50**n),content=1.34*hb*saturation+0.0031*po2;return{saturation,content,delivery:10*cardiacOutput*content}}
export function carbonDioxide(vco2:number,alveolarVentilation:number,bicarbonate:number){if(alveolarVentilation<=0)throw Error('VA must be positive');const pco2=.863*vco2/alveolarVentilation,ph=6.1+Math.log10(bicarbonate/(.03*pco2));return{pco2,ph}}
