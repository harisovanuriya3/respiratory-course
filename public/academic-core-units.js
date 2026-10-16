// Original, clinically oriented teaching units. Simplified models are explicitly labelled.
const units = {
  "8": [
    [
      "Альвеолярная вентиляция — это объём свежего газа, поступающий в газообменные отделы лёгких за минуту. При постоянном физиологическом мёртвом пространстве V̇A = (VT − VD) × f. При VT = 500 мл, VD = 150 мл и f = 12/мин V̇A = 4,2 л/мин. Если VT уменьшить до 250 мл и удвоить f до 24/мин, минутная вентиляция останется 6 л/мин, но альвеолярная снизится до 2,4 л/мин. Поэтому одинаковая минутная вентиляция не означает одинакового удаления CO₂.",
      "Alveolar ventilation is the volume of fresh gas reaching gas-exchanging lung units each minute. At constant physiological dead space, V̇A = (VT − VD) × f. With VT 500 mL, VD 150 mL and f 12/min, V̇A is 4.2 L/min. Reducing VT to 250 mL while doubling f to 24/min maintains minute ventilation at 6 L/min but lowers alveolar ventilation to 2.4 L/min. Equal minute ventilation does not imply equal CO₂ clearance.",
      "Альвеолалық вентиляция — бір минутта газ алмасатын өкпе бөлімдеріне жететін таза ауа көлемі. Физиологиялық өлі кеңістік тұрақты болса, V̇A = (VT − VD) × f. VT = 500 мл, VD = 150 мл және f = 12/мин кезінде V̇A = 4,2 л/мин. VT 250 мл-ге азайып, жиілік 24/мин-ге артса, минуттық вентиляция 6 л/мин күйінде қалады, ал альвеолалық вентиляция 2,4 л/мин-ге төмендейді. Демек минуттық вентиляцияның тең болуы CO₂ шығарылуының тең екенін білдірмейді."
    ],
    [
      "Задача: при VT = 300 мл, VD = 150 мл, f = 20/мин вычислите V̇E и V̇A. Объясните, почему частое поверхностное дыхание неэффективно.",
      "Exercise: at VT = 300 mL, VD = 150 mL and f = 20/min, calculate V̇E and V̇A. Explain why rapid shallow breathing is inefficient.",
      "Есеп: VT = 300 мл, VD = 150 мл, f = 20/мин болғанда V̇E және V̇A есептеңіз. Жиі әрі үстірт тыныс алудың тиімсіздігін түсіндіріңіз."
    ],
    [
      "Решение: V̇E = 300 × 20 / 1000 = 6 л/мин; V̇A = (300 − 150) × 20 / 1000 = 3 л/мин. Половина вентиляции приходится на мёртвое пространство. Это упрощённая модель: физиологическое VD меняется при патологии и неоднородности V/Q.",
      "Solution: V̇E = 300 × 20 / 1000 = 6 L/min; V̇A = (300 − 150) × 20 / 1000 = 3 L/min. Half of minute ventilation is dead-space ventilation. This is a simplified model; physiological VD varies with disease and V/Q heterogeneity.",
      "Шешімі: V̇E = 300 × 20 / 1000 = 6 л/мин; V̇A = (300 − 150) × 20 / 1000 = 3 л/мин. Минуттық вентиляцияның жартысы өлі кеңістікке жұмсалады. Бұл жеңілдетілген модель: физиологиялық VD ауруда және V/Q әркелкілігінде өзгереді."
    ]
  ],
  "13": [
    [
      "Отношение V̇A/Q̇ характеризует согласованность альвеолярной вентиляции и перфузии. При V/Q → 0 кровь проходит через плохо вентилируемые единицы, создавая шунтоподобный эффект; при V/Q → ∞ вентиляция расходуется на неперфузируемые единицы и увеличивает альвеолярное мёртвое пространство. Эти предельные состояния отличаются от истинного анатомического шунта. При смешивании потоков крови суммируют содержание O₂, а не значения PO₂.",
      "The V̇A/Q̇ ratio describes matching of alveolar ventilation to perfusion. As V/Q approaches zero, blood traverses poorly ventilated units, producing a shunt-like effect; as V/Q approaches infinity, ventilation reaches poorly perfused units and contributes to alveolar dead space. These limits are not identical to an anatomical shunt. When blood streams mix, oxygen contents—not PO₂ values—are averaged.",
      "V̇A/Q̇ қатынасы альвеолалық вентиляция мен перфузияның сәйкестігін көрсетеді. V/Q нөлге жақындағанда қан нашар желдетілетін бөлімдерден өтіп, шунтқа ұқсас әсер туғызады; V/Q шексіздікке ұмтылғанда желдетілу қанмен қамтамасыз етілмейтін бөлімдерге жұмсалып, альвеолалық өлі кеңістік ұлғаяды. Бұл шеткі жағдайлар анатомиялық шунтпен бірдей емес. Қан ағындары араласқанда PO₂ емес, O₂ мөлшері орташа есептеледі."
    ],
    [
      "Задача: 20% кровотока имеет содержание O₂ 15 мл/дл, остальные 80% — 20 мл/дл. Найдите содержание O₂ в смешанной крови.",
      "Exercise: 20% of blood flow carries 15 mL O₂/dL and the remaining 80% carries 20 mL/dL. Find mixed blood oxygen content.",
      "Есеп: қан ағысының 20%-ында O₂ мөлшері 15 мл/дл, қалған 80%-ында 20 мл/дл. Аралас қандағы O₂ мөлшерін табыңыз."
    ],
    [
      "Решение: CaO₂ = 0,2 × 15 + 0,8 × 20 = 19 мл/дл. Нельзя вычислять результирующее PaO₂ таким же усреднением: зависимость содержания O₂ от PO₂ нелинейна из-за гемоглобина.",
      "Solution: CaO₂ = 0.2 × 15 + 0.8 × 20 = 19 mL/dL. Resultant PaO₂ cannot be obtained by the same arithmetic averaging because oxygen content is a nonlinear function of PO₂ owing to haemoglobin binding.",
      "Шешімі: CaO₂ = 0,2 × 15 + 0,8 × 20 = 19 мл/дл. Нәтижелік PaO₂-ні осылай арифметикалық орташалауға болмайды: гемоглобиннің O₂-мен байланысуына байланысты O₂ мөлшері мен PO₂ арасындағы тәуелділік сызықтық емес."
    ]
  ],
  "14": [
    [
      "Содержание кислорода в артериальной крови определяется главным образом гемоглобином: CaO₂ ≈ 1,34 × Hb × SaO₂ + 0,003 × PaO₂, где Hb — г/дл, SaO₂ — доля единицы, PaO₂ — мм рт. ст., CaO₂ — мл O₂/дл. PaO₂ отражает давление растворённого газа, SaO₂ — долю занятых участков связывания, CaO₂ — суммарное количество кислорода. При анемии PaO₂ и SaO₂ могут оставаться нормальными при низком CaO₂.",
      "Arterial oxygen content depends mainly on haemoglobin: CaO₂ ≈ 1.34 × Hb × SaO₂ + 0.003 × PaO₂, with Hb in g/dL, SaO₂ as a fraction, PaO₂ in mmHg, and CaO₂ in mL O₂/dL. PaO₂ reflects dissolved-gas pressure, SaO₂ the fraction of occupied haemoglobin sites, and CaO₂ total oxygen content. Anaemia can reduce CaO₂ despite normal PaO₂ and SaO₂.",
      "Артериялық қандағы оттегі мөлшері негізінен гемоглобинге тәуелді: CaO₂ ≈ 1,34 × Hb × SaO₂ + 0,003 × PaO₂. Мұнда Hb — г/дл, SaO₂ — үлес, PaO₂ — мм сын. бағ., CaO₂ — мл O₂/дл. PaO₂ еріген газ қысымын, SaO₂ гемоглобиннің оттегімен қанығуын, CaO₂ жалпы оттегі мөлшерін көрсетеді. Анемияда PaO₂ мен SaO₂ қалыпты болса да, CaO₂ төмендеуі мүмкін."
    ],
    [
      "Задача: Hb = 8 г/дл, SaO₂ = 0,98, PaO₂ = 95 мм рт. ст. Рассчитайте CaO₂ и сравните с Hb = 15 г/дл при тех же газовых показателях.",
      "Exercise: Hb = 8 g/dL, SaO₂ = 0.98, PaO₂ = 95 mmHg. Calculate CaO₂ and compare with Hb = 15 g/dL at the same blood-gas values.",
      "Есеп: Hb = 8 г/дл, SaO₂ = 0,98, PaO₂ = 95 мм сын. бағ. CaO₂ есептеп, газ көрсеткіштері бірдей Hb = 15 г/дл жағдайымен салыстырыңыз."
    ],
    [
      "Решение: при Hb 8 CaO₂ ≈ 10,79 мл/дл; при Hb 15 CaO₂ ≈ 19,98 мл/дл. Нормальная сатурация не исключает снижения кислородной доставки; DO₂ = сердечный выброс × CaO₂ × 10 (при выбросе в л/мин).",
      "Solution: at Hb 8, CaO₂ ≈ 10.79 mL/dL; at Hb 15, CaO₂ ≈ 19.98 mL/dL. Normal saturation does not rule out impaired oxygen delivery; DO₂ = cardiac output × CaO₂ × 10 (with cardiac output in L/min).",
      "Шешімі: Hb 8 кезінде CaO₂ ≈ 10,79 мл/дл; Hb 15 кезінде CaO₂ ≈ 19,98 мл/дл. Қанығудың қалыпты болуы оттегі жеткізілуінің төмендеуін жоққа шығармайды; DO₂ = жүректің минуттық көлемі × CaO₂ × 10 (минуттық көлем л/мин болса)."
    ]
  ],
  "16": [
    [
      "Уравнение Хендерсона—Хассельбаха связывает pH с бикарбонатом и PaCO₂: pH = 6,1 + log₁₀([HCO₃⁻]/(0,03 × PaCO₂)). Анализ газов крови начинают с pH, затем определяют первичное изменение PaCO₂ или HCO₃⁻ и проверяют ожидаемую компенсацию. Компенсация не является полной нормализацией pH и не исключает смешанное нарушение.",
      "The Henderson–Hasselbalch equation relates pH to bicarbonate and PaCO₂: pH = 6.1 + log₁₀([HCO₃⁻]/(0.03 × PaCO₂)). Interpret blood gases by assessing pH first, identifying the primary PaCO₂ or HCO₃⁻ disturbance, and checking expected compensation. Compensation need not normalize pH and does not exclude a mixed disorder.",
      "Хендерсон—Хассельбалх теңдеуі pH, бикарбонат және PaCO₂ арасындағы байланысты көрсетеді: pH = 6,1 + log₁₀([HCO₃⁻]/(0,03 × PaCO₂)). Қан газдарын талдағанда алдымен pH бағаланады, кейін PaCO₂ немесе HCO₃⁻ бастапқы өзгерісі анықталып, күтілетін компенсация тексеріледі. Компенсация pH-ты толық қалыпқа келтірмеуі мүмкін және аралас бұзылысты жоққа шығармайды."
    ],
    [
      "Задача: pH = 7,25, HCO₃⁻ = 12 ммоль/л, PaCO₂ = 27 мм рт. ст. Определите первичное нарушение и оцените компенсацию по формуле Уинтера.",
      "Exercise: pH = 7.25, HCO₃⁻ = 12 mmol/L, PaCO₂ = 27 mmHg. Identify the primary disorder and evaluate compensation with Winter’s formula.",
      "Есеп: pH = 7,25, HCO₃⁻ = 12 ммоль/л, PaCO₂ = 27 мм сын. бағ. Бастапқы бұзылысты анықтап, Уинтер формуласы арқылы компенсацияны бағалаңыз."
    ],
    [
      "Решение: первичный метаболический ацидоз. Ожидаемое PaCO₂ = 1,5 × 12 + 8 ± 2 = 26 ± 2 мм рт. ст. Измеренное PaCO₂ = 27 соответствует ожидаемой дыхательной компенсации. Далее требуется оценить анионную разницу и клиническую причину.",
      "Solution: primary metabolic acidosis. Expected PaCO₂ = 1.5 × 12 + 8 ± 2 = 26 ± 2 mmHg. Measured PaCO₂ of 27 mmHg is consistent with expected respiratory compensation. The anion gap and underlying cause still require evaluation.",
      "Шешімі: бастапқы метаболикалық ацидоз. Күтілетін PaCO₂ = 1,5 × 12 + 8 ± 2 = 26 ± 2 мм сын. бағ. Өлшенген PaCO₂ = 27 мм сын. бағ. күтілетін тыныстық компенсацияға сәйкес келеді. Одан кейін аниондық айырманы және клиникалық себебін бағалау қажет."
    ]
  ],
  "24": [
    [
      "Спирометрия измеряет объёмы и потоки при форсированном выдохе. Снижение FEV₁/FVC ниже нижней границы нормы (LLN), определяемой по референсным уравнениям, свидетельствует об обструктивном вентиляционном нарушении при надлежащем качестве манёвра. Снижение FVC само по себе не доказывает рестрикцию: для её подтверждения необходимо снижение TLC ниже LLN. Остаточный объём RV обычной спирометрией не измеряют.",
      "Spirometry measures volumes and flows during forced expiration. An FEV₁/FVC ratio below the lower limit of normal (LLN), derived from reference equations, indicates an obstructive ventilatory impairment when manoeuvre quality is adequate. Low FVC alone does not establish restriction: a TLC below LLN is required. Ordinary spirometry cannot measure residual volume (RV).",
      "Спирометрия күштеп тыныс шығарғандағы көлемдер мен ағындарды өлшейді. Сапалы орындалған маневрде FEV₁/FVC қатынасының референстік теңдеулермен анықталған қалыпты төменгі шектен (LLN) төмен болуы обструкциялық вентиляциялық бұзылысты көрсетеді. FVC төмендеуі рестрикцияны жеке өзі дәлелдемейді: оны растау үшін TLC көрсеткішінің LLN-нен төмен болуы қажет. Қарапайым спирометрия қалдық көлемді (RV) өлшемейді."
    ],
    [
      "Задача: FEV₁ = 1,8 л, FVC = 3,0 л, индивидуальный LLN для FEV₁/FVC = 0,68. Оцените отношение и интерпретацию; можно ли по этим данным подтвердить рестрикцию?",
      "Exercise: FEV₁ = 1.8 L, FVC = 3.0 L, individual FEV₁/FVC LLN = 0.68. Calculate the ratio and interpret it. Can restriction be confirmed from these values?",
      "Есеп: FEV₁ = 1,8 л, FVC = 3,0 л, FEV₁/FVC үшін жеке LLN = 0,68. Қатынасты есептеп, түсіндіріңіз. Осы деректермен рестрикцияны растауға бола ма?"
    ],
    [
      "Решение: FEV₁/FVC = 1,8/3,0 = 0,60, что ниже LLN = 0,68 и соответствует обструкции при качественной спирометрии. Рестрикцию по FVC или этому отношению подтвердить нельзя: требуется TLC.",
      "Solution: FEV₁/FVC = 1.8/3.0 = 0.60, below LLN 0.68, consistent with obstruction if spirometry quality is adequate. Restriction cannot be confirmed from FVC or this ratio; TLC is required.",
      "Шешімі: FEV₁/FVC = 1,8/3,0 = 0,60; бұл LLN = 0,68-ден төмен және сапалы спирометрияда обструкцияға сәйкес келеді. FVC не осы қатынас бойынша рестрикцияны растауға болмайды; TLC өлшеу қажет."
    ]
  ]
};
const escapeHtml = s => String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));
export function coreScientificUnit(moduleId, section, language) {
 const d=units[moduleId]; if(!d || !['theory','practice','cases'].includes(section)) return '';
 const i=section==='theory'?0:section==='practice'?1:2;
 const headings={theory:['Физиологический механизм','Physiological mechanism','Физиологиялық механизм'],practice:['Расчётная задача','Calculation exercise','Есептеу тапсырмасы'],cases:['Решение и клиническая интерпретация','Solution and clinical interpretation','Шешімі және клиникалық түсіндірме']};
 return `<article class="card academic-core"><h3>${escapeHtml(headings[section][language])}</h3><p>${escapeHtml(d[i][language])}</p><p class="muted">${escapeHtml(['Источники для сверки: West, Respiratory Physiology; Guyton & Hall, Textbook of Medical Physiology; ERS/ATS (для спирометрии).','Reference reading: West, Respiratory Physiology; Guyton & Hall, Textbook of Medical Physiology; ERS/ATS (spirometry).','Салыстыруға арналған дереккөздер: West, Respiratory Physiology; Guyton & Hall, Textbook of Medical Physiology; ERS/ATS (спирометрия).'][language])}</p></article>`;
}