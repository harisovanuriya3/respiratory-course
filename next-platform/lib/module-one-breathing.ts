export type BreathingPoint = {phase:number;palv:number;ppl:number;ptp:number;volume:number;flow:number};
/** Approximate quiet-breathing teaching cycle, relative to atmospheric pressure (0).
 * Volume is sinusoidal; flow is its time derivative. Ppl interpolates reference
 * states; Ptp is always computed, never independently prescribed.
 */
export function quietBreathing(phase:number, rate=12):BreathingPoint {
  if(!Number.isFinite(phase)||!Number.isFinite(rate)||rate<=0) throw new Error('domain');
  const p=Math.max(0,Math.min(1,phase)),theta=2*Math.PI*p;
  const anchors=[-5,-7,-8,-6,-5];
  const segment=Math.min(3,Math.floor(p*4)),fraction=p*4-segment;
  const smooth=fraction*fraction*(3-2*fraction);
  const ppl=anchors[segment]+(anchors[segment+1]-anchors[segment])*smooth;
  const palv=-Math.sin(theta),volume=.25*(1-Math.cos(theta));
  const flow=.5*Math.PI/(60/rate)*Math.sin(theta);
  return {phase:p,palv,ppl,ptp:palv-ppl,volume,flow};
}
