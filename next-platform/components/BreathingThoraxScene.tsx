import type { Language } from '../lib/course';
const atlas = '/visuals/thorax-lungs-pleura-diaphragm.png';
const copy = {
  RU: { alt: 'Анатомический атлас грудной клетки: асимметричные лёгкие, трахея, бронхи, плевра, рёбра, межрёберные мышцы и диафрагма', inspiration: 'Вдох: поток направлен в лёгкие, их объём увеличивается, диафрагма опускается', expiration: 'Выдох: поток направлен наружу, объём лёгких уменьшается, диафрагма поднимается', pleura: 'Плевральные листки', diaphragm: 'Купола диафрагмы', intercostals: 'Межрёберные мышцы' },
  EN: { alt: 'Thoracic anatomy atlas showing asymmetric lungs, trachea, bronchi, pleura, ribs, intercostal muscles and diaphragm', inspiration: 'Inspiration: flow enters the lungs, volume rises and the diaphragm descends', expiration: 'Expiration: flow leaves the lungs, volume falls and the diaphragm ascends', pleura: 'Pleural layers', diaphragm: 'Diaphragmatic domes', intercostals: 'Intercostal muscles' },
  KZ: { alt: 'Асимметриялы өкпе, кеңірдек, бронхтар, плевра, қабырғалар, қабырғааралық бұлшықеттер және диафрагма көрсетілген кеуде атласы', inspiration: 'Дем алу: ауа өкпеге кіреді, көлем ұлғайып, диафрагма төмендейді', expiration: 'Дем шығару: ауа сыртқа шығады, өкпе көлемі азайып, диафрагма көтеріледі', pleura: 'Плевра жапырақшалары', diaphragm: 'Диафрагма күмбездері', intercostals: 'Қабырғааралық бұлшықеттер' },
} as const;
export default function BreathingThoraxScene({ language, flow, maxFlow, running }: { language: Language; flow: number; maxFlow: number; running: boolean }) {
  const t = copy[language];
  const relativeFlow = maxFlow > 0 ? Math.max(0, Math.min(1, Math.abs(flow) / maxFlow)) : 0;
  const inspiration = flow >= 0;
  return <figure className={`breathingThorax ${running ? 'isRunning' : ''}`}><div className="thoraxStage">
    <img className="thoraxBase" src={atlas} alt={t.alt} width="1536" height="1024" />
    <svg viewBox="0 0 900 600" aria-hidden="true" className="airflowOverlay" style={{ opacity: .2 + relativeFlow * .7 }}><defs><marker id="air-arrow" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto"><path d="M0 0L6 3L0 6Z" /></marker></defs><path className={`airflowPath ${inspiration ? 'in' : 'out'}`} d="M450 5V145M450 145L360 220M450 145L540 220" /></svg>
  </div><ul className="anatomyKey" aria-label={t.alt}><li>{t.pleura}</li><li>{t.intercostals}</li><li>{t.diaphragm}</li></ul><figcaption><strong>{inspiration ? t.inspiration : t.expiration}</strong></figcaption></figure>;
}
