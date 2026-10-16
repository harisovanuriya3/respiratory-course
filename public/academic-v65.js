// V65: independent academic exercises for modules 6–10; RU, EN, KZ.
const lessons = {
  "6": {
    "title": [
      "Сопротивление дыхательных путей: радиус и режим потока",
      "Airway resistance: radius and flow regime",
      "Тыныс жолдарының кедергісі: радиус және ағыс тәртібі"
    ],
    "theory": [
      "При ламинарном течении в жёсткой цилиндрической трубке сопротивление R=8ηL/(πr⁴). Поэтому уменьшение радиуса вдвое повышает расчётное сопротивление в 16 раз при неизменных остальных параметрах. В реальном бронхиальном дереве поток может быть переходным или турбулентным, бронхи деформируемы, а параллельное соединение периферических путей меняет суммарное сопротивление. При форсированном выдохе внутригрудное давление способствует динамическому сжатию бронхов.",
      "For laminar flow in a rigid cylindrical tube, R=8ηL/(πr⁴). Halving radius therefore raises theoretical resistance 16-fold if other variables remain constant. Real airways are compliant and branching, flow can become transitional or turbulent, and peripheral airways act in parallel. During forced expiration, intrathoracic pressure can dynamically compress airways.",
      "Қатты цилиндр түтіктегі ламинарлық ағыста R=8ηL/(πr⁴). Радиус екі есе азайса, басқа жағдайлар тұрақты кезде есептік кедергі 16 есе өседі. Нақты бронхтар серпімді әрі тармақталған, ағыс турбулентті болуы мүмкін; шеткі жолдар параллель қосылған. Күшті дем шығаруда кеудеішілік қысым бронхтарды динамикалық қысады."
    ],
    "task": [
      "При уменьшении радиуса идеальной трубки до 80% исходного вычислите Rнов/Rисх и укажите два ограничения переноса этого результата на лёгкие.",
      "If an ideal tube radius falls to 80% of baseline, calculate Rnew/Rbaseline and state two limits of applying this to lungs.",
      "Идеал түтік радиусы бастапқының 80%-ына дейін азайса, Rжаңа/Rбаст есептеңіз және бұл нәтижені өкпеге қолданудың екі шектеуін атаңыз."
    ],
    "answer": [
      "Rнов/Rисх=1/(0,8⁴)=2,44. Реальные бронхи не жёсткие цилиндры; режим потока и параллельное соединение ветвей нарушают простую зависимость.",
      "Rnew/Rbaseline=1/(0.8⁴)=2.44. Real airways are not rigid cylinders; flow regime and parallel branching alter the relationship.",
      "Rжаңа/Rбаст=1/(0,8⁴)=2,44. Нақты бронхтар қатты цилиндр емес; ағыс тәртібі мен тармақтардың параллель қосылуы тәуелділікті өзгертеді."
    ]
  },
  "7": {
    "title": [
      "Лёгочные объёмы: что не измеряет простая спирометрия",
      "Lung volumes: limits of simple spirometry",
      "Өкпе көлемдері: қарапайым спирометрияның шектеулері"
    ],
    "theory": [
      "Спирометрия регистрирует объём воздуха, проходящий через датчик, и позволяет измерять дыхательный объём, жизненную ёмкость и форсированные показатели. Остаточный объём RV не выдыхается даже при максимальном усилии; поэтому RV, функциональную остаточную ёмкость FRC и общую ёмкость TLC нельзя непосредственно измерить простой спирометрией. Для определения абсолютных объёмов используют, например, бодиплетизмографию или газоразведение, результаты которых могут различаться при выраженной обструкции.",
      "Spirometry records air moving through a sensor and measures tidal volume, vital capacity and forced indices. Residual volume (RV) cannot be exhaled even maximally; thus RV, functional residual capacity (FRC) and total lung capacity (TLC) cannot be directly measured by simple spirometry. Body plethysmography or gas dilution can assess absolute volumes, with method-dependent differences in severe obstruction.",
      "Спирометрия датчик арқылы өтетін ауа көлемін тіркеп, тыныстық көлемді, тіршілік сыйымдылығын және форсирленген көрсеткіштерді өлшейді. Қалдық көлем RV толық дем шығарғанда да сыртқа шықпайды; сондықтан RV, FRC және TLC қарапайым спирометриямен тікелей өлшенбейді. Абсолюттік көлемдер бодиплетизмографиямен немесе газды сұйылту әдісімен бағаланады."
    ],
    "task": [
      "VC=4,5 л, RV=1,5 л. Рассчитайте TLC. Почему RV нельзя определить по одной спирограмме?",
      "VC=4.5 L and RV=1.5 L. Calculate TLC. Why can RV not be obtained from a spirometry trace alone?",
      "VC=4,5 л, RV=1,5 л. TLC есептеңіз. Неліктен RV тек спирограмма арқылы анықталмайды?"
    ],
    "answer": [
      "TLC=VC+RV=6,0 л. Спирометрия не измеряет газ, остающийся в лёгких после максимального выдоха.",
      "TLC=VC+RV=6.0 L. Spirometry cannot measure gas remaining in the lungs after maximal expiration.",
      "TLC=VC+RV=6,0 л. Спирометрия максималды дем шығарудан кейін өкпеде қалған газды өлшемейді."
    ]
  },
  "8": {
    "title": [
      "Эффективность дыхания: мёртвое пространство и частота",
      "Breathing efficiency: dead space and rate",
      "Тыныс тиімділігі: өлі кеңістік пен жиілік"
    ],
    "theory": [
      "Минутная вентиляция V̇E=VT×f, тогда как альвеолярная вентиляция V̇A=(VT−VD)×f при условно постоянном объёме мёртвого пространства на вдох. При одинаковой V̇E быстрое поверхностное дыхание может обеспечивать меньшую V̇A, поскольку доля вентиляции мёртвого пространства возрастает. Уравнение PaCO₂≈863×V̇CO₂/V̇A применимо в стационарном состоянии при V̇CO₂ в мл/мин и V̇A в мл/мин; числовой коэффициент включает перевод единиц.",
      "Minute ventilation is V̇E=VT×f, while alveolar ventilation is V̇A=(VT−VD)×f when dead space per breath is treated as constant. At equal V̇E, rapid shallow breathing can reduce V̇A because dead-space ventilation occupies a larger fraction. The steady-state relation PaCO₂≈863×V̇CO₂/V̇A uses CO₂ output and alveolar ventilation in mL/min.",
      "Минуттық вентиляция V̇E=VT×f, ал альвеолалық вентиляция V̇A=(VT−VD)×f (әр тыныстағы өлі кеңістік тұрақты деп алынады). Бірдей V̇E кезінде жиі үстірт тыныс алу V̇A-ны төмендетуі мүмкін, себебі өлі кеңістік үлесі артады. Тұрақты күйде PaCO₂≈863×V̇CO₂/V̇A; екі ағын да мл/мин бірлігінде алынады."
    ],
    "task": [
      "Сравните VT=500 мл, f=12/мин и VT=250 мл, f=24/мин при VD=150 мл. V̇E одинакова? Как изменяется V̇A?",
      "Compare VT=500 mL, f=12/min with VT=250 mL, f=24/min, with VD=150 mL. Is V̇E equal? How does V̇A change?",
      "VD=150 мл кезінде VT=500 мл, f=12/мин және VT=250 мл, f=24/мин жағдайларын салыстырыңыз. V̇E бірдей ме? V̇A қалай өзгереді?"
    ],
    "answer": [
      "В обоих случаях V̇E=6,0 л/мин. V̇A: (500−150)×12=4,2 л/мин против (250−150)×24=2,4 л/мин. Поверхностное дыхание менее эффективно.",
      "Both have V̇E=6.0 L/min. V̇A is 4.2 L/min versus 2.4 L/min; shallow breathing is less efficient.",
      "Екі жағдайда V̇E=6,0 л/мин. V̇A тиісінше 4,2 және 2,4 л/мин; үстірт тыныс алу тиімділігі төмен."
    ]
  },
  "9": {
    "title": [
      "Диффузионная способность: площадь, толщина и кровоток",
      "Diffusing capacity: area, thickness and perfusion",
      "Диффузиялық қабілет: аудан, қалыңдық және перфузия"
    ],
    "theory": [
      "По закону Фика поток газа пропорционален площади поверхности и градиенту парциального давления, обратно пропорционален толщине барьера. DLCO оценивает перенос малого количества вдыхаемого CO и зависит не только от мембраны, но и от объёма капиллярной крови, концентрации гемоглобина и техники измерения. Уменьшение DLCO не доказывает само по себе интерстициальное заболевание: снижение возможно также при эмфиземе, анемии и сосудистой патологии.",
      "Fick’s law relates gas flux to surface area and partial-pressure gradient and inversely to barrier thickness. DLCO uses a small inhaled CO concentration to assess transfer, but also depends on pulmonary capillary blood volume, hemoglobin and measurement technique. Reduced DLCO alone does not establish interstitial disease: emphysema, anemia and vascular disorders can also reduce it.",
      "Фик заңы бойынша газ ағыны бет ауданына және парциалдық қысым градиентіне тура, тосқауыл қалыңдығына кері пропорционал. DLCO аз мөлшердегі CO тасымалын бағалайды, бірақ капилляр қанының көлеміне, гемоглобинге және өлшеу әдісіне де тәуелді. DLCO төмендеуі интерстициалдық ауруды өздігінен дәлелдемейді: эмфизема, анемия және тамыр патологиясы да әсер етеді."
    ],
    "task": [
      "При постоянных площади и градиенте толщина мембраны увеличилась вдвое. Как изменится поток в идеальной модели? Почему DLCO пациента не обязательно снизится ровно вдвое?",
      "At fixed area and gradient, membrane thickness doubles. How does idealized flux change? Why need measured DLCO not halve?",
      "Аудан мен градиент тұрақты кезде мембрана қалыңдығы екі есе артты. Идеал ағын қалай өзгереді? Неге науқастың DLCO көрсеткіші дәл екі есе төмендемеуі мүмкін?"
    ],
    "answer": [
      "В идеальной модели поток уменьшается вдвое. DLCO зависит также от капиллярного кровотока, гемоглобина, рекрутирования сосудов и неоднородности вентиляции.",
      "Ideal flux halves. DLCO also depends on capillary blood volume, hemoglobin, vascular recruitment and ventilation heterogeneity.",
      "Идеал модельде ағын екі есе азаяды. DLCO капилляр қанының көлеміне, гемоглобинге, тамырлардың ашылуына және вентиляция біркелкілігіне де тәуелді."
    ]
  },
  "10": {
    "title": [
      "Альвеолярное газовое уравнение: допущения и интерпретация",
      "Alveolar gas equation: assumptions and interpretation",
      "Альвеолалық газ теңдеуі: шарттар мен түсіндіру"
    ],
    "theory": [
      "При дыхании комнатным воздухом на уровне моря приближённое уравнение PAO₂=FiO₂(PB−PH₂O)−PaCO₂/R позволяет оценить альвеолярное PO₂. При PB=760 мм рт. ст., PH₂O=47 мм рт. ст., FiO₂=0,21 и R=0,8 ожидаемое PAO₂ при PaCO₂=40 составляет около 100 мм рт. ст. Альвеолярно-артериальная разница PAO₂−PaO₂ помогает различать чистую гиповентиляцию и нарушения газообмена, но зависит от возраста, FiO₂ и условий измерения.",
      "At sea level on room air, the simplified alveolar gas equation PAO₂=FiO₂(PB−PH₂O)−PaCO₂/R estimates alveolar oxygen tension. With PB=760 mmHg, PH₂O=47 mmHg, FiO₂=0.21, R=0.8 and PaCO₂=40 mmHg, PAO₂ is about 100 mmHg. The alveolar–arterial gradient helps distinguish pure hypoventilation from gas-exchange defects, but depends on age, FiO₂ and measurement conditions.",
      "Теңіз деңгейінде бөлме ауасымен тыныстағанда PAO₂=FiO₂(PB−PH₂O)−PaCO₂/R жуық теңдеуі альвеолалық оттегі қысымын бағалайды. PB=760 мм сын. бағ., PH₂O=47 мм сын. бағ., FiO₂=0,21, R=0,8 және PaCO₂=40 болса, PAO₂ шамамен 100 мм сын. бағ. A–a градиенті гиповентиляцияны газ алмасу бұзылысынан ажыратуға көмектеседі, бірақ жасқа және FiO₂-ге тәуелді."
    ],
    "task": [
      "При данных условиях PaCO₂=60 и PaO₂=60 мм рт. ст. Рассчитайте PAO₂ и A–a градиент.",
      "Under these conditions PaCO₂=60 and PaO₂=60 mmHg. Calculate PAO₂ and the A–a gradient.",
      "Осы жағдайда PaCO₂=60 және PaO₂=60 мм сын. бағ. PAO₂ мен A–a градиентін есептеңіз."
    ],
    "answer": [
      "PAO₂≈0,21×(760−47)−60/0,8=74,7 мм рт. ст.; A–a≈14,7 мм рт. ст. Интерпретация зависит от возраста и клинического контекста.",
      "PAO₂≈0.21×(760−47)−60/0.8=74.7 mmHg; A–a≈14.7 mmHg. Interpretation depends on age and clinical context.",
      "PAO₂≈0,21×(760−47)−60/0,8=74,7 мм сын. бағ.; A–a≈14,7 мм сын. бағ. Түсіндіру жас пен клиникалық жағдайға тәуелді."
    ]
  }
};
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
export function academicV65(mid,section,L){const x=lessons[mid];if(!x||!['theory','practice','cases'].includes(section))return '';const labels=[['Академический разбор','Academic analysis','Академиялық талдау'],['Задача','Exercise','Тапсырма'],['Решение','Solution','Шешімі']];return `<section class="lesson-card academic-v65"><h3>${esc(labels[0][L])}: ${esc(x.title[L])}</h3><p>${esc(x.theory[L])}</p>${section==='theory'?'':`<h4>${esc(labels[1][L])}</h4><p>${esc(x.task[L])}</p><details><summary>${esc(labels[2][L])}</summary><p>${esc(x.answer[L])}</p></details>`}</section>`;}
