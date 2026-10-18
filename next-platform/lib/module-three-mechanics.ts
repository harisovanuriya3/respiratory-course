export type ModuleThreeInput = { pleuralPressure: number; compliance: number; resistance: number; rate: number };
export type ModuleThreePoint = { phase: number; time: number; ppl: number; palv: number; ptp: number; volume: number; flow: number };
const EXPIRATORY_PLEURAL_PRESSURE = -2;

/** Periodic solution of R·dV/dt + V/C = -(Ppl - Ppl,exp), with airway-opening pressure = 0. */
export function moduleThreeCycle(input: ModuleThreeInput): ModuleThreePoint[] {
  if (!Object.values(input).every(Number.isFinite) || input.compliance <= 0 || input.resistance <= 0 || input.rate <= 0) throw new Error('domain');
  const period = 60 / input.rate;
  const omega = 2 * Math.PI / period;
  const amplitude = Math.max(0, EXPIRATORY_PLEURAL_PRESSURE - input.pleuralPressure);
  const attenuation = Math.sqrt(1 + (omega * input.resistance * input.compliance) ** 2);
  const lag = Math.atan(omega * input.resistance * input.compliance);
  return Array.from({ length: 121 }, (_, index) => {
    const phase = index / 120, theta = phase * 2 * Math.PI;
    const ppl = EXPIRATORY_PLEURAL_PRESSURE - amplitude * (1 - Math.cos(theta)) / 2;
    const volume = input.compliance * amplitude / 2 - input.compliance * amplitude / (2 * attenuation) * Math.cos(theta - lag);
    const flow = input.compliance * amplitude * omega / (2 * attenuation) * Math.sin(theta - lag);
    const palv = -input.resistance * flow;
    const ptp = palv - ppl;
    return { phase, time: phase * period, ppl, palv, ptp, volume, flow };
  });
}

export function moduleThreeMechanics(input: Omit<ModuleThreeInput, 'rate'>) {
  const points = moduleThreeCycle({ ...input, rate: 12 });
  const peak = points.reduce((best, point) => point.volume > best.volume ? point : best, points[0]);
  return { transpulmonaryPressure: peak.ptp, volumeChange: peak.volume, resistivePressure: Math.abs(peak.palv), lungRadiusY: Math.max(32, Math.min(82, 64 + peak.volume * 24)) };
}
