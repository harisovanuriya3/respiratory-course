export type VentilatoryPattern='normal'|'obstruction'|'suspected-restriction';
export const patternPresets:Record<VentilatoryPattern,{fev1:number;fvc:number;pef:number;tv:number;irv:number;erv:number;rv:number}>={
 normal:{fev1:3.9,fvc:4.8,pef:9.2,tv:.5,irv:3,erv:1.3,rv:1.2}, obstruction:{fev1:2.1,fvc:4.2,pef:5.1,tv:.6,irv:2.7,erv:.9,rv:2.8}, 'suspected-restriction':{fev1:2.55,fvc:3,pef:7.1,tv:.45,irv:1.85,erv:.7,rv:1}};
export function lungVolumes(tv:number,irv:number,erv:number,rv:number){const ic=tv+irv,vc=irv+tv+erv,frc=erv+rv,tlc=vc+rv;return{tv,irv,erv,rv,ic,vc,frc,tlc}}
export function expiratoryRateConstant(fev1:number,fvc:number){const fraction=Math.min(.995,Math.max(.01,fev1/fvc));return-Math.log(1-fraction)}
export function volumeAtTime(time:number,fev1:number,fvc:number){return fvc*(1-Math.exp(-expiratoryRateConstant(fev1,fvc)*Math.max(0,time)))}
export function flowAtExpiredFraction(fraction:number,pef:number,pattern:VentilatoryPattern){const x=Math.min(1,Math.max(0,fraction));if(x===0||x===1)return 0;const rise=Math.min(1,x/.12),decline=pattern==='obstruction'?Math.pow(1-x,1.75):pattern==='suspected-restriction'?Math.pow(1-x,.72):Math.pow(1-x,.92);return pef*rise*decline}
export function pneumotachograph(pressureDropPa:number,resistancePaSecondsPerLiter:number){return pressureDropPa/resistancePaSecondsPerLiter}
