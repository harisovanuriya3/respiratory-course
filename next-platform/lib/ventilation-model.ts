export function calculateVentilation(tidalVolumeMl:number,frequencyPerMin:number,deadSpaceMl:number){
  if(![tidalVolumeMl,frequencyPerMin,deadSpaceMl].every(Number.isFinite)||tidalVolumeMl<=0||frequencyPerMin<=0||deadSpaceMl<0)throw new Error('Values must be finite and physiologically non-negative');
  const minuteVentilation=tidalVolumeMl*frequencyPerMin/1000;
  const alveolarVentilation=Math.max(0,tidalVolumeMl-deadSpaceMl)*frequencyPerMin/1000;
  return{minuteVentilation,alveolarVentilation,deadSpaceFraction:Math.min(1,deadSpaceMl/tidalVolumeMl)};
}

export function spirogramPath(tidalVolumeMl:number,frequencyPerMin:number){
  let path='';
  for(let x=0;x<=560;x+=3){const cycles=x/560*(frequencyPerMin/6),y=160-(tidalVolumeMl/1000)*120*(1-Math.cos(2*Math.PI*cycles))/2;path+=(x?'L':'M')+(50+x)+' '+y.toFixed(2)+' '}
  return path.trim();
}
