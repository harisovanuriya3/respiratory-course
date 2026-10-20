import ModuleOneFigureNotes from './ModuleOneFigureNotes';
import type { Language } from '../lib/course';
const atlas = '/visuals/thorax-lungs-pleura-diaphragm.png';
const inspirationAtlas = '/visuals/thorax-inspiration.png';
const expirationAtlas = '/visuals/thorax-expiration.png';
const copy = {
  RU: { alt: 'Анатомический атлас грудной клетки: асимметричные лёгкие, трахея, бронхи, плевра, рёбра, межрёберные мышцы и диафрагма', phaseIn: 'Вдох', phaseOut: 'Выдох', atlas: 'Анатомический атлас с динамическими показателями', pleura: 'Плевральные листки', diaphragm: 'Купола диафрагмы', intercostals: 'Межрёберные мышцы' },
  EN: { alt: 'Thoracic anatomy atlas showing asymmetric lungs, trachea, bronchi, pleura, ribs, intercostal muscles and diaphragm', phaseIn: 'Inspiration', phaseOut: 'Expiration', atlas: 'Anatomical atlas with dynamic measurements', pleura: 'Pleural layers', diaphragm: 'Diaphragmatic domes', intercostals: 'Intercostal muscles' },
  KZ: { alt: 'Асимметриялы өкпе, кеңірдек, бронхтар, плевра, қабырғалар, қабырғааралық бұлшықеттер және диафрагма көрсетілген кеуде атласы', phaseIn: 'Дем алу', phaseOut: 'Дем шығару', atlas: 'Динамикалық көрсеткіштері бар анатомиялық атлас', pleura: 'Плевра жапырақшалары', diaphragm: 'Диафрагма күмбездері', intercostals: 'Қабырғааралық бұлшықеттер' },
} as const;
export default function BreathingThoraxScene({ language, flow, maxFlow, relativeVolume, running, onInspiration, onExpiration, moduleOne = false }: { moduleOne?: boolean; language: Language; flow: number; maxFlow: number; relativeVolume: number; running: boolean; onInspiration: () => void; onExpiration: () => void }) {
  const t = copy[language];
  const relativeFlow = maxFlow > 0 ? Math.max(0, Math.min(1, Math.abs(flow) / maxFlow)) : 0;
  const airEntering = flow >= 0, displayedInspiration = relativeVolume >= .5;
  return <figure className={`breathingThorax ${running ? 'isRunning' : ''}`}><div className="thoraxStage" style={moduleOne ? {height:'auto',overflow:'visible'} : undefined}>
    <img className="thoraxBase" style={moduleOne ? {position:'relative',width:'100%',height:'auto',aspectRatio:'auto',objectFit:'contain'} : undefined} src={moduleOne ? '/visuals/module1-lab-anatomy.png' : atlas} alt={t.alt} width="1536" height="1024" />
    {!moduleOne && <><img className="thoraxPhase expirationPhase" src={expirationAtlas} alt="" width="1536" height="1024" aria-hidden="true" />
    <img className="thoraxPhase inspirationPhase" src={inspirationAtlas} alt="" width="1536" height="1024" aria-hidden="true" style={{ opacity: displayedInspiration ? 1 : 0 }} />
    <svg viewBox="0 0 900 600" aria-hidden="true" className="airflowOverlay" style={{ opacity: .2 + relativeFlow * .7 }}><defs><marker id="air-arrow" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto"><path d="M0 0L6 3L0 6Z" /></marker></defs><path className={`airflowPath ${airEntering ? 'in' : 'out'}`} d="M450 5V145M450 145L360 220M450 145L540 220" /></svg>
    </>}<strong className={`phaseBadge ${displayedInspiration ? 'in' : 'out'}`} role="status">{displayedInspiration ? t.phaseIn : t.phaseOut}</strong>
  </div><div className="phaseSelector" role="group" aria-label={t.atlas}><button type="button" aria-pressed={relativeVolume >= .5} onClick={onInspiration}>{t.phaseIn}</button><button type="button" aria-pressed={relativeVolume < .5} onClick={onExpiration}>{t.phaseOut}</button></div><ul className="anatomyKey" aria-label={t.alt}><li>{t.pleura}</li><li>{t.intercostals}</li><li>{t.diaphragm}</li></ul><figcaption>{t.atlas}</figcaption>{moduleOne && <ModuleOneFigureNotes language={language} anatomyOnly/>}</figure>;
}
