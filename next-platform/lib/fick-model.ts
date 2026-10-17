export function calculateRelativeDiffusion(areaPercent:number,thicknessPercent:number,gradientMmHg:number){
  if(![areaPercent,thicknessPercent,gradientMmHg].every(Number.isFinite)||areaPercent<=0||thicknessPercent<=0||gradientMmHg<0)throw new Error('Values outside model domain');
  return{relativeFlux:(areaPercent/100)/(thicknessPercent/100)*(gradientMmHg/60),barrierWidth:32*thicknessPercent/100};
}
