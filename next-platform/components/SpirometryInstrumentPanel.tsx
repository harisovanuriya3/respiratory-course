import Image from 'next/image';
import type {Language} from '../lib/course';
import {ModuleTwentyFourMedia as SpirometrySimulation} from './MediaTwentyFourFive';

const copy={
  RU:{title:'Как работает измерительная система',alt:'Реалистичная учебная иллюстрация спирометрической системы: фильтрованный мундштук, пневмотахограф, соединительная трубка, измерительный блок и монитор с учебными кривыми.',caption:'Авторская визуализация типовой спирометрической установки; не фотография конкретного производителя.',items:['Мундштук и одноразовый фильтр уменьшают загрязнение системы.','Пневмотахограф оценивает поток по перепаду давления на известном сопротивлении; интегрирование потока даёт объём.','Программа строит петлю поток–объём и кривую объём–время. Калибровка, утечка, кашель и усилие пациента влияют на качество.'],trace:'Интерактивная кривая ниже — математическая учебная симуляция, а не запись пациента.',records:'Реальные спирограммы не включены: в проекте нет предоставленных или лицензированных исходных записей. Рестрикцию нельзя подтвердить только низкой FVC — требуется измерение TLC.'},
  EN:{title:'How the measuring system works',alt:'Realistic teaching illustration of a spirometry system: filtered mouthpiece, pneumotachograph, tubing, measuring unit and monitor with educational curves.',caption:'Original visualization of a generic spirometry setup; not a photograph of a particular manufacturer.',items:['The mouthpiece and disposable filter reduce system contamination.','A pneumotachograph estimates flow from the pressure drop across a known resistance; integrating flow gives volume.','Software plots flow–volume and volume–time curves. Calibration, leaks, cough and patient effort affect quality.'],trace:'The interactive curve below is a mathematical teaching simulation, not a patient record.',records:'Real spirograms are not included because the project contains no supplied or licensed source recordings. A low FVC alone cannot confirm restriction; TLC must be measured.'},
  KZ:{title:'Өлшеу жүйесі қалай жұмыс істейді',alt:'Спирометриялық жүйенің шынайы оқу иллюстрациясы: сүзгілі мундштук, пневмотахограф, түтік, өлшеу блогы және оқу қисықтары бар монитор.',caption:'Типтік спирометриялық қондырғының авторлық визуализациясы; нақты өндірушінің фотосуреті емес.',items:['Мундштук пен бір реттік сүзгі жүйенің ластануын азайтады.','Пневмотахограф белгілі кедергідегі қысым айырмасы арқылы ағынды бағалайды; ағынды интегралдау көлемді береді.','Бағдарлама ағын–көлем ілмегін және көлем–уақыт қисығын салады. Калибрлеу, ауа ағуы, жөтел және науқас күшінің сапаға әсері бар.'],trace:'Төмендегі интерактивті қисық — математикалық оқу симуляциясы, науқастың жазбасы емес.',records:'Нақты спирограммалар енгізілмеді: жобада ұсынылған немесе лицензияланған бастапқы жазбалар жоқ. Төмен FVC рестрикцияны жалғыз өзі растамайды; TLC өлшенуі керек.'}
} as const;

export default function SpirometryInstrumentPanel({language}:{language:Language}){
  const t=copy[language];
  return <><section className="card spirometryInstrument" aria-labelledby="spirometry-instrument-title">
    <h2 id="spirometry-instrument-title">{t.title}</h2>
    <figure><Image src="/visuals/spirometry-workstation.png" alt={t.alt} width={1536} height={1024} sizes="(max-width: 760px) 100vw, 900px"/><figcaption>{t.caption}</figcaption></figure>
    <ol>{t.items.map(item=><li key={item}>{item}</li>)}</ol>
    <p className="simulationNotice"><strong>{t.trace}</strong> {t.records}</p>
  </section><SpirometrySimulation language={language}/></>;
}
