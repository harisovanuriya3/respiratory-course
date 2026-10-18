'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import type { Language } from '../lib/course';
import { moduleThreeCycle, type ModuleThreePoint } from '../lib/module-three-mechanics';
import LabPlayback from './LabPlayback';
import BreathingThoraxScene from './BreathingThoraxScene';

const copy = {
  RU: { module: 'МОДУЛЬ 3 · ГРУДНАЯ КЛЕТКА И ПЛЕВРА', title: 'Опыт: плевральное давление и движение грудной клетки', ppl: 'Минимальное Ppl', compliance: 'Комплаенс', resistance: 'Сопротивление', rate: 'Частота', graph: 'Синхронные показатели дыхательного цикла', time: 'Время', limit: 'Учебная однокамерная RC-модель: R·V̇ + ΔV/C = −(Ppl − Ppl,выд); Palv = −R·V̇; Ptp = Palv − Ppl. Давление у рта принято равным 0 см H₂O; региональная механика не моделируется.' },
  EN: { module: 'MODULE 3 · THORAX AND PLEURA', title: 'Experiment: pleural pressure and thoracic movement', ppl: 'Minimum Ppl', compliance: 'Compliance', resistance: 'Resistance', rate: 'Rate', graph: 'Synchronized breathing-cycle signals', time: 'Time', limit: 'One-compartment RC teaching model: R·V̇ + ΔV/C = −(Ppl − Ppl,exp); Palv = −R·V̇; Ptp = Palv − Ppl. Airway-opening pressure is 0 cm H₂O; regional mechanics are not represented.' },
  KZ: { module: '3-МОДУЛЬ · КЕУДЕ ҚУЫСЫ ЖӘНЕ ПЛЕВРА', title: 'Тәжірибе: плевралық қысым және кеуде қозғалысы', ppl: 'Ең төмен Ppl', compliance: 'Комплаенс', resistance: 'Кедергі', rate: 'Жиілік', graph: 'Тыныс циклімен синхрондалған көрсеткіштер', time: 'Уақыт', limit: 'Бір камералы RC оқу моделі: R·V̇ + ΔV/C = −(Ppl − Ppl,дем шығ); Palv = −R·V̇; Ptp = Palv − Ppl. Ауыздағы қысым 0 см H₂O деп алынды; аймақтық механика модельденбейді.' },
} as const;
const signals = [
  { key: 'ppl', label: 'Ppl', unit: 'cm H₂O', color: 'ppl' },
  { key: 'ptp', label: 'Ptp', unit: 'cm H₂O', color: 'ptp' },
  { key: 'volume', label: 'ΔV', unit: 'L', color: 'volume' },
  { key: 'flow', label: 'V̇', unit: 'L/s', color: 'flow' },
] as const;

function SignalPanel({ points, signal, phase, timeLabel }: { points: ModuleThreePoint[]; signal: typeof signals[number]; phase: number; timeLabel: string }) {
  const values = points.map(point => point[signal.key]);
  const low = Math.min(...values), high = Math.max(...values), padding = Math.max((high - low) * .12, .05);
  const min = low - padding, max = high + padding;
  const y = (value: number) => 16 + (max - value) / (max - min) * 82;
  const path = points.map((point, index) => `${index ? 'L' : 'M'}${58 + index * 4.42} ${y(point[signal.key])}`).join(' ');
  return <figure className={`signalPanel ${signal.color}`}><figcaption><strong>{signal.label}</strong><span>{signal.unit}</span></figcaption><svg viewBox="0 0 620 125" role="img" aria-label={`${signal.label}, ${signal.unit}`}><path d="M58 12V100H596" className="chartAxis"/><line x1="58" x2="596" y1={y(0)} y2={y(0)} className="zeroLine"/><path d={path} className={`signal ${signal.color}`}/><line x1={58 + phase * 538} x2={58 + phase * 538} y1="12" y2="100" className="timeCursor"/><text x="4" y="22">{max.toFixed(1)}</text><text x="4" y="98">{min.toFixed(1)}</text><text x="58" y="119">0</text><text x="500" y="119">{timeLabel}</text></svg></figure>;
}

export default function ModuleThreeMedia({ language }: { language: Language }) {
  const c = copy[language];
  const [pleuralPressure, setPleural] = useState(-5), [compliance, setCompliance] = useState(.2), [resistance, setResistance] = useState(2), [rate, setRate] = useState(12), [running, setRunning] = useState(true), [phase, setPhase] = useState(0);
  const last = useRef<number | null>(null);
  const points = useMemo(() => moduleThreeCycle({ pleuralPressure, compliance, resistance, rate }), [pleuralPressure, compliance, resistance, rate]);
  useEffect(() => { if (matchMedia('(prefers-reduced-motion: reduce)').matches) { setRunning(false); return; } let frame = 0; const tick = (time: number) => { const previous = last.current; if (previous !== null && running) setPhase(value => (value + (time - previous) * rate / 60000) % 1); last.current = time; frame = requestAnimationFrame(tick); }; frame = requestAnimationFrame(tick); return () => cancelAnimationFrame(frame); }, [rate, running]);
  const now = points[Math.min(points.length - 1, Math.round(phase * (points.length - 1)))];
  const maxFlow = Math.max(...points.map(point => Math.abs(point.flow)));
  const volumes = points.map(point => point.volume), minVolume = Math.min(...volumes), maxVolume = Math.max(...volumes), volumeExcursion = maxVolume - minVolume;
  const relativeVolume = volumeExcursion > 0 ? (now.volume - minVolume) / volumeExcursion : 0;
  const inspirationPhase = points.findIndex(point => point.volume === maxVolume) / (points.length - 1), expirationPhase = points.findIndex(point => point.volume === minVolume) / (points.length - 1);
  const period = 60 / rate;
  return <section className="card physiologyLab moduleThreeLab"><header><p className="atlasEyebrow">{c.module}</p><h2>{c.title}</h2></header><div className="labWorkbench">
    <BreathingThoraxScene language={language} flow={now.flow} maxFlow={maxFlow} relativeVolume={relativeVolume} running={running} onInspiration={() => { setRunning(false); setPhase(inspirationPhase); }} onExpiration={() => { setRunning(false); setPhase(expirationPhase); }}/>
    <div className="labControlPanel"><LabPlayback language={language} running={running} onRunning={setRunning} onReplay={() => { setPhase(0); setRunning(true); }} onReset={() => { setPleural(-5); setCompliance(.2); setResistance(2); setRate(12); setPhase(0); setRunning(false); }}/>
    <div className="lab-controls"><label>{c.ppl} (cm H₂O)<input type="range" min="-10" max="-2" step=".5" value={pleuralPressure} onChange={event => setPleural(+event.target.value)}/><output>{pleuralPressure.toFixed(1)}</output></label><label>{c.compliance} (L/cm H₂O)<input type="range" min=".05" max=".3" step=".01" value={compliance} onChange={event => setCompliance(+event.target.value)}/><output>{compliance.toFixed(2)}</output></label><label>{c.resistance} (cm H₂O·s/L)<input type="range" min="1" max="10" step=".5" value={resistance} onChange={event => setResistance(+event.target.value)}/><output>{resistance.toFixed(1)}</output></label><label>{c.rate} (min⁻¹)<input type="range" min="6" max="30" step="1" value={rate} onChange={event => setRate(+event.target.value)}/><output>{rate}</output></label></div>
    <div className="metrics"><span><b>Ppl</b>{now.ppl.toFixed(1)} cm H₂O</span><span><b>Palv</b>{now.palv.toFixed(2)} cm H₂O</span><span><b>Ptp</b>{now.ptp.toFixed(1)} cm H₂O</span><span><b>ΔV</b>{now.volume.toFixed(2)} L</span><span><b>V̇</b>{now.flow.toFixed(2)} L/s</span></div></div></div>
    <section className="signalGraph" aria-label={c.graph}><h3>{c.graph}</h3><div className="signalPanels">{signals.map(signal => <SignalPanel key={signal.key} points={points} signal={signal} phase={phase} timeLabel={`${c.time}: ${period.toFixed(1)} s`}/>)}</div></section><p className="notice">{c.limit}</p>
  </section>;
}
