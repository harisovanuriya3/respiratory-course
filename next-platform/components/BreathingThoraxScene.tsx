import Image from 'next/image';
import type { Language } from '../lib/course';
const atlas = '/visuals/thorax-lungs-pleura-diaphragm.png';
const copy = {
  RU: { alt: 'Анатомический атлас грудной клетки: асимметричные лёгкие, трахея, бронхи, плевра, рёбра, межрёберные мышцы и диафрагма', inspiration: 'Вдох: поток направлен в лёгкие, их объём увеличивается, диафрагма опускается', expiration: 'Выдох: поток направлен наружу, объём лёгких уменьшается, диафрагма поднимается', pleura: 'Плевральные листки', diaphragm: 'Купола диафрагмы', intercostals: 'Межрёберные мышцы' },
  EN: { alt: 'Thoracic anatomy atlas showing asymmetric lungs, trachea, bronchi, pleura, ribs, intercostal muscles and diaphragm', inspiration: 'Inspiration: flow enters the lungs, volume rises and the diaphragm descends', expiration: 'Expiration: flow leaves the lungs, volume falls and the diaphragm ascends', pleura: 'Pleural layers', diaphragm: 'Diaphragmatic domes', intercostals: 'Intercostal muscles' },
  KZ: { alt: 'Асимметриялы өкпе, кеңірдек, бронхтар, плевра, қабырғалар, қабырғааралық бұлшықеттер және диафрагма көрсетілген кеуде атласы', inspiration: 'Дем алу: ауа өкпеге кіреді, көлем ұлғайып, диафрагма төмендейді', expiration: 'Дем шығару: ауа сыртқа шығады, өкпе көлемі азайып, диафрагма көтеріледі', pleura: 'Плевра жапырақшалары', diaphragm: 'Диафрагма күмбездері', intercostals: 'Қабырғааралық бұлшықеттер' },
} as const;
export default function BreathingThoraxScene({ language, volume, maxVolume, flow, running }: { language: Language; volume: number; maxVolume: number; flow: number; running: boolean }) {
  const t = copy[language];
  const expansion = maxVolume > 0 ? Math.max(0, Math.min(1, volume / maxVolume)) : 0;
  const inspiration = flow >= 0;
  return <figure className={`breathingThorax ${running ? 'isRunning' : ''}`}><div className="thoraxStage">
    <Image className="thoraxBase" src={atlas} alt={t.alt} width={1536} height={1024} sizes="(max-width:760px) 100vw, 980px" priority />
    <div className="atlasMotionLayer lungAtlasLayer" style={{ transform: `scale(${1 + expansion * .018})` }} aria-hidden="true"><Image src={atlas} alt="" width={1536} height={1024} /></div>
    <div className="atlasMotionLayer diaphragmAtlasLayer" style={{ transform: `translateY(${expansion * 1.4}%)` }} aria-hidden="true"><Image src={atlas} alt="" width={1536} height={1024} /></div>
    <svg viewBox="0 0 900 600" aria-hidden="true" className="airflowOverlay"><path className={`airflowPath ${inspiration ? 'in' : 'out'}`} d="M450 8V150M450 150L360 225M450 150L540 225" /></svg>
    <span className="atlasLabel pleuraLabel">{t.pleura}</span><span className="atlasLabel muscleLabel">{t.intercostals}</span><span className="atlasLabel diaphragmLabel">{t.diaphragm}</span>
  </div><figcaption><strong>{inspiration ? t.inspiration : t.expiration}</strong></figcaption></figure>;
}
