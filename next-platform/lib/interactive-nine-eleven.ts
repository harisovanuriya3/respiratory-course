export function relativeDiffusion(area:number,thickness:number,coefficient:number,gradient:number){
  if(![area,thickness,coefficient].every(x=>Number.isFinite(x)&&x>0)||!Number.isFinite(gradient)||gradient<0)throw Error('Values outside model domain');
  const conductance=area*coefficient/thickness;
  return{conductance,flux:conductance*gradient/60};
}
export function fullAlveolarGas(fio2:number,pb:number,paco2:number,r:number){
  if(![fio2,pb,paco2,r].every(Number.isFinite)||fio2<=0||fio2>1||pb<=47||paco2<0||r<=0)throw Error('Values outside model domain');
  const pio2=fio2*(pb-47),pao2=pio2-paco2*(fio2+(1-fio2)/r);
  return{pio2,pao2};
}
export function diffusionCapacity(dm:number,theta:number,vc:number,va:number){
  if(![dm,theta,vc,va].every(x=>Number.isFinite(x)&&x>0))throw Error('Values outside model domain');
  const blood=theta*vc,membraneResistance=1/dm,bloodResistance=1/blood,dlco=1/(membraneResistance+bloodResistance);
  return{blood,dlco,kco:dlco/va,membranePercent:100*membraneResistance/(membraneResistance+bloodResistance)};
}
