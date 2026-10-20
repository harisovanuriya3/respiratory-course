import type {Language} from '../lib/course';
const terms:[string,string,string,string,string,string][]=[
['Вентиляция','Ventilation','Вентиляция','Обновление воздуха в дыхательных путях и альвеолах.','Bulk movement of air into and out of lungs.','Өкпеге ауа кіріп-шығу үдерісі.'],
['Проводящая зона','Conducting zone','Өткізгіш аймақ','Пути до терминальных бронхиол; газообмен в них отсутствует.','Airways through terminal bronchioles; no alveolar gas exchange.','Терминалдық бронхиолаларға дейінгі газ алмасусыз жолдар.'],
['Респираторная зона','Respiratory zone','Респираторлық аймақ','Респираторные бронхиолы, альвеолярные ходы и альвеолы.','Respiratory bronchioles, alveolar ducts and alveoli.','Респираторлық бронхиолалар, альвеолалық өзектер және альвеолалар.'],
['Альвеола','Alveolus','Альвеола','Тонкостенная структура для газообмена с капиллярной кровью.','Thin-walled gas-exchange structure adjacent to capillaries.','Капилляр қанымен газ алмасатын жұқа қабырғалы құрылым.'],
['Аэрогематический барьер','Blood–gas barrier','Аэрогематикалық бөгет','Тонкая граница между альвеолярным газом и кровью.','Thin interface between alveolar gas and capillary blood.','Альвеолалық газ бен қан арасындағы жұқа шекара.'],
['Альвеолоциты I типа','Type I pneumocytes','I типті альвеолоциттер','Плоские клетки, покрывающие большую часть поверхности альвеол.','Thin epithelial cells covering most alveolar surface.','Альвеола бетінің көп бөлігін жабатын жалпақ жасушалар.'],
['Альвеолоциты II типа','Type II pneumocytes','II типті альвеолоциттер','Клетки, синтезирующие и выделяющие сурфактант.','Cells producing and secreting surfactant.','Сурфактант түзетін және бөлетін жасушалар.'],
['Сурфактант','Surfactant','Сурфактант','Снижает поверхностное натяжение и стабилизирует альвеолы.','Reduces surface tension and stabilizes alveoli.','Беттік керілуді азайтып, альвеолаларды тұрақтандырады.'],
['Плевра','Pleura','Плевра','Серозные листки между лёгкими и грудной стенкой.','Serous membranes coupling lung and thoracic wall.','Өкпе мен кеуде қабырғасын байланыстыратын сірлі қабықтар.'],
['Диафрагма','Diaphragm','Диафрагма','Главная мышца спокойного вдоха.','Main muscle of quiet inspiration.','Тыныш дем алудың негізгі бұлшықеті.'],
['Дыхательный объём VT','Tidal volume VT','Тыныстық көлем VT','Объём за один спокойный вдох, мл или л.','Air volume of one tidal breath, mL or L.','Бір тыныстағы ауа көлемі, мл немесе л.'],
['Частота дыхания f','Respiratory rate f','Тыныс жиілігі f','Число дыхательных циклов за минуту, мин⁻¹.','Breathing cycles per minute, min⁻¹.','Минуттағы тыныс циклдері, мин⁻¹.'],
['Минутная вентиляция V̇E','Minute ventilation V̇E','Минуттық вентиляция V̇E','VT × f; весь объём за минуту, л/мин.','VT × f; total air volume per minute, L/min.','VT × f; минуттық барлық ауа көлемі, л/мин.'],
['Мёртвое пространство VD','Dead space VD','Өлі кеңістік VD','Объём, не участвующий в эффективном газообмене, мл.','Gas volume not taking part in effective exchange, mL.','Тиімді газ алмасуға қатыспайтын көлем, мл.'],
['Анатомическое мёртвое пространство','Anatomical dead space','Анатомиялық өлі кеңістік','Проводящие дыхательные пути; ориентир ~150 мл у взрослого.','Conducting airways; approximately 150 mL in a typical adult.','Өткізгіш ауа жолдары; ересекте шамамен 150 мл.'],
['Альвеолярное мёртвое пространство','Alveolar dead space','Альвеолалық өлі кеңістік','Вентилируемые альвеолы без эффективной перфузии.','Ventilated alveoli lacking effective perfusion.','Тиімді перфузиясы жоқ желдетілетін альвеолалар.'],
['Физиологическое мёртвое пространство','Physiological dead space','Физиологиялық өлі кеңістік','Анатомическое и альвеолярное мёртвое пространство вместе.','Anatomical plus alveolar dead space.','Анатомиялық және альвеолалық өлі кеңістіктің қосындысы.'],
['Альвеолярная вентиляция V̇A','Alveolar ventilation V̇A','Альвеолалық вентиляция V̇A','(VT − VD) × f; свежий объём для газообмена, л/мин.','(VT − VD) × f; fresh gas available for exchange, L/min.','(VT − VD) × f; газ алмасуға жететін жаңа ауа, л/мин.'],
['Плевральное давление Ppl','Pleural pressure Ppl','Плевралық қысым Ppl','Давление в плевральной щели, см H₂O.','Pressure within the pleural space, cm H₂O.','Плевра саңылауындағы қысым, см H₂O.'],
['Альвеолярное давление Palv','Alveolar pressure Palv','Альвеолалық қысым Palv','Давление газа в альвеолах, см H₂O.','Gas pressure in alveoli, cm H₂O.','Альвеоладағы газ қысымы, см H₂O.'],
['Транспульмональное давление Ptp','Transpulmonary pressure Ptp','Транспульмоналдық қысым Ptp','Palv − Ppl; растягивающее давление лёгких, см H₂O.','Palv − Ppl; lung-distending pressure, cm H₂O.','Palv − Ppl; өкпені керетін қысым, см H₂O.'],
['Растяжимость C','Compliance C','Созылғыштық C','ΔV/ΔP; изменение объёма на единицу давления.','ΔV/ΔP; volume change per pressure change.','ΔV/ΔP; қысым өзгерісіне шаққандағы көлем.'],
['Сопротивление дыхательных путей','Airway resistance','Тыныс жолдарының кедергісі','Отношение перепада давления к объёмному потоку.','Pressure difference divided by airflow.','Қысым айырмасының ауа ағынына қатынасы.'],
['Эластическая отдача','Elastic recoil','Серпімді қайту','Стремление растянутых лёгких вернуться к меньшему объёму.','Tendency of stretched lungs to return toward resting volume.','Өкпенің бастапқы көлеміне қайта ұмтылысы.'],
['Диффузия','Diffusion','Диффузия','Перенос газов по градиенту парциального давления.','Gas movement down partial-pressure gradients.','Газдардың парциалдық қысым градиентімен қозғалуы.'],
['Перфузия','Perfusion','Перфузия','Кровоток через альвеолярные капилляры.','Blood flow through alveolar capillaries.','Альвеолалық капиллярлардағы қан ағымы.'],
['Отношение V̇A/Q̇','Ventilation–perfusion ratio','Вентиляция-перфузия қатынасы','Соотношение альвеолярной вентиляции и лёгочного кровотока.','Alveolar ventilation relative to pulmonary blood flow.','Альвеолалық вентиляция мен өкпелік қан ағымы қатынасы.'],
['PaCO₂','Arterial CO₂ pressure','Артериялық CO₂ қысымы','Парциальное давление CO₂ артериальной крови, мм рт. ст.','Arterial carbon dioxide pressure, mmHg.','Артериялық қандағы CO₂ қысымы, мм сын. бағ.'],
['PaO₂','Arterial O₂ pressure','Артериялық O₂ қысымы','Парциальное давление O₂ артериальной крови, мм рт. ст.','Arterial oxygen pressure, mmHg.','Артериялық қандағы O₂ қысымы, мм сын. бағ.'],
['SpO₂','Pulse oximetry saturation','Пульсоксиметриялық қанығу','Оценка насыщения гемоглобина кислородом, %.','Estimated hemoglobin O₂ saturation, %.','Гемоглобиннің O₂-мен қанығуының бағасы, %.'],
['CaO₂','Arterial oxygen content','Артериялық оттегі мөлшері','Количество O₂ в артериальной крови, мл O₂/дл.','Oxygen amount in arterial blood, mL O₂/dL.','Артериялық қандағы O₂ мөлшері, мл O₂/дл.'],
['ḊO₂','Oxygen delivery','Оттегіні жеткізу','Q̇ × CaO₂; кислород, доставляемый тканям за минуту.','Q̇ × CaO₂; oxygen delivered to tissues per minute.','Q̇ × CaO₂; тіндерге минутына жеткізілетін оттегі.'],
['Гиповентиляция','Hypoventilation','Гиповентиляция','Недостаточная V̇A относительно продукции CO₂.','V̇A inadequate relative to CO₂ production.','CO₂ түзілуіне қатысты V̇A жеткіліксіздігі.'],
['Гипервентиляция','Hyperventilation','Гипервентиляция','Избыточная V̇A относительно продукции CO₂.','Excess V̇A relative to CO₂ production.','CO₂ түзілуіне қатысты V̇A шамадан тыс болуы.']
];

// Chapter anchors refer to the numbered theory headings for module 1.
const chapterByTerm=[1,2,2,2,3,3,3,3,4,5,6,6,6,6,6,6,6,6,5,5,5,8,9,5,3,3,10,11,11,12,12,12,7,7] as const;
const related:Record<number,number[]>={0:[1,2,17],1:[2,14],2:[3,4],3:[5,6,7],4:[3,24],5:[6,4],6:[7,3],7:[6,21],8:[18,20],9:[19,20],10:[11,12,17],11:[10,12,17],12:[10,11,17],13:[14,15,16,17],14:[1,13],15:[16,26],16:[14,15],17:[10,11,13],18:[19,20],19:[18,20],20:[18,19,21],21:[7,20],22:[23,9],23:[22,9],24:[4,25],25:[24,26],26:[15,25],27:[17,32],28:[29,30],29:[28,30],30:[29,31],31:[30,25],32:[27,17],33:[27,17]};
export default function ModuleOneGlossary({language}:{language:Language}){
 const lang={RU:0,EN:1,KZ:2}[language];
 const title={RU:'Физиологический глоссарий RU / EN / KZ',EN:'Physiology glossary RU / EN / KZ',KZ:'Физиологиялық глоссарий RU / EN / KZ'}[language];
 const meaning={RU:'Значение и единицы',EN:'Meaning and units',KZ:'Мағынасы мен өлшемі'}[language];
 const linkLabel={RU:'Связанные термины',EN:'Related terms',KZ:'Байланысты терминдер'}[language];
 const theoryLabel={RU:'В теорию',EN:'Read theory',KZ:'Теорияға өту'}[language];
 return <section className="card moduleOneGlossary"><h2>{title}</h2>
  <p>{terms.length} {language==='RU'?'термина с определениями и сокращениями. Нажмите на связанный термин для перехода к его строке, или откройте соответствующий раздел теории.':language==='EN'?'terms with definitions and abbreviations. Follow a related term to its row or open the corresponding theory chapter.':'анықтамасы мен қысқартуы бар термин. Байланысты терминді басып, оның жолына немесе тиісті теория тарауына өтіңіз.'}</p>
  <div className="glossaryScroll"><table><thead><tr><th>RU</th><th>EN</th><th>KZ</th><th>{meaning}</th><th>{linkLabel}</th></tr></thead><tbody>
  {terms.map((item,i)=><tr key={item[1]} id={`glossary-term-${i}`}><th scope="row">{item[0]}</th><td>{item[1]}</td><td>{item[2]}</td><td>{item[3+lang]}</td><td><div className="glossaryCrossLinks"><a href={`/modules/1/theory?lang=${language}#theory-${chapterByTerm[i]}`}>{theoryLabel} →</a>{(related[i]||[]).map(j=><a key={j} href={`#glossary-term-${j}`}>{terms[j][lang]}</a>)}</div></td></tr>)}
  </tbody></table></div>
 </section>;
}
