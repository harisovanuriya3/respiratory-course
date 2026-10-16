// V68: five independent trilingual academic modules (21–25).
const lessons={
  "21": {
    "title": [
      "Высотная гипоксия и временные масштабы акклиматизации",
      "High-altitude hypoxia and acclimatization timescales",
      "Биіктік гипоксия және бейімделу кезеңдері"
    ],
    "theory": [
      "При подъёме на высоту доля O₂ в сухом воздухе остаётся приблизительно 20,9%, однако падает барометрическое давление, а значит и PIO₂=(PB−47)×FiO₂ (37 °C). Гипоксемия активирует каротидные тельца и вызывает гипервентиляцию, снижение PaCO₂ и острый респираторный алкалоз. В течение нескольких суток почечная экскреция HCO₃⁻ уменьшает тормозящее влияние алкалоза. Позднее изменяются эритропоэз и кислородный транспорт; эти процессы не равнозначны немедленному восстановлению PaO₂.",
      "At altitude the dry-air O₂ fraction remains about 20.9%, but falling barometric pressure reduces PIO₂=(PB−47)×FiO₂ at 37 °C. Hypoxemia stimulates carotid bodies, increasing ventilation and lowering PaCO₂, causing acute respiratory alkalosis. Over days renal bicarbonate excretion reduces alkalotic inhibition of breathing. Erythropoiesis and oxygen transport adapt on longer timescales; these do not immediately normalize PaO₂.",
      "Биіктікте құрғақ ауадағы O₂ үлесі шамамен 20,9% күйінде қалады, бірақ барометрлік қысым азайып, PIO₂=(PB−47)×FiO₂ төмендейді (37 °C). Гипоксемия каротид денешіктерін қоздырып, гипервентиляцияға, PaCO₂ төмендеуіне және жедел респираторлық алкалозға әкеледі. Бірнеше күн ішінде бүйрек HCO₃⁻ шығарылуын арттырады. Эритропоэз бен оттек тасымалы кейінірек бейімделеді; бұл PaO₂ бірден қалпына келеді дегенді білдірмейді."
    ],
    "task": [
      "При PB=500 мм рт. ст. и FiO₂=0,209 вычислите PIO₂. Сравните с уровнем моря при PB=760.",
      "Calculate PIO₂ at PB=500 mmHg and FiO₂=0.209; compare with sea level at PB=760.",
      "PB=500 мм сын. бағ., FiO₂=0,209 кезінде PIO₂ есептеңіз; PB=760 жағдайымен салыстырыңыз."
    ],
    "answer": [
      "(500−47)×0,209=94,7 мм рт. ст.; на уровне моря (760−47)×0,209=149,0 мм рт. ст. Это давление увлажнённого вдыхаемого газа, а не PaO₂.",
      "(500−47)×0.209=94.7 mmHg versus (760−47)×0.209=149.0 mmHg. These are humidified inspired oxygen pressures, not arterial PaO₂.",
      "(500−47)×0,209=94,7 мм сын. бағ.; теңіз деңгейінде (760−47)×0,209=149,0 мм сын. бағ. Бұл артериялық PaO₂ емес, ылғалданған дем алатын ауадағы қысым."
    ]
  },
  "22": {
    "title": [
      "Регуляция дыхания во сне и различие типов апноэ",
      "Sleep-dependent respiratory control and apnea phenotypes",
      "Ұйқыдағы тыныс реттелуі және апноэ түрлері"
    ],
    "theory": [
      "При переходе ко сну ослабевает поведенческий компонент дыхательного драйва и меняется ответ на CO₂. В REM-сне снижается тонус большинства скелетных мышц, в том числе вспомогательных дыхательных; диафрагма относительно сохраняет активность. При обструктивном апноэ дыхательные усилия сохраняются на фоне перекрытия верхних дыхательных путей, при центральном отсутствуют или резко ослабевают и поток, и дыхательные усилия. AHI сам по себе не описывает глубину десатурации и гиповентиляцию.",
      "Sleep reduces wakefulness-related respiratory drive and alters CO₂ responsiveness. During REM, most skeletal muscles, including accessory respiratory muscles, become hypotonic while diaphragmatic activity is relatively preserved. Obstructive apnea features continued respiratory effort against an occluded upper airway; central apnea features absent or markedly reduced effort and airflow. AHI alone does not quantify desaturation burden or hypoventilation.",
      "Ұйқыда сергектікке байланысты тыныс стимулы азайып, CO₂-ге жауап өзгереді. REM кезінде көптеген қаңқа бұлшықеттерінің, соның ішінде қосымша тыныс бұлшықеттерінің тонусы төмендейді, ал диафрагма белсенділігі салыстырмалы сақталады. Обструкциялық апноэда ауа жолы бітелсе де тыныс әрекеті сақталады; орталық апноэда ауа ағыны да, тыныс әрекеті де болмайды не күрт төмендейді. AHI десатурация мен гиповентиляцияның барлық ауырлығын сипаттамайды."
    ],
    "task": [
      "За 6 часов сна зарегистрировано 90 апноэ и 60 гипопноэ. Рассчитайте AHI и объясните, можно ли по нему определить тип апноэ.",
      "During 6 hours of sleep, 90 apneas and 60 hypopneas occur. Calculate AHI and state whether it identifies apnea type.",
      "6 сағат ұйқыда 90 апноэ және 60 гипопноэ тіркелді. AHI есептеп, оның апноэ түрін анықтайтынын түсіндіріңіз."
    ],
    "answer": [
      "AHI=(90+60)/6=25 событий/ч. Для определения типа нужны данные о дыхательных усилиях и воздушном потоке; AHI отражает частоту событий, но не их механизм.",
      "AHI=(90+60)/6=25 events/hour. Airflow and respiratory-effort recordings are needed to classify apnea; AHI measures event frequency, not mechanism.",
      "AHI=(90+60)/6=25 оқиға/сағ. Түрін анықтау үшін ауа ағыны мен тыныс әрекеті жазбалары қажет; AHI механизмді емес, оқиғалар жиілігін көрсетеді."
    ]
  },
  "23": {
    "title": [
      "Газовые законы при погружении: границы простой модели",
      "Gas laws in diving: limits of simple models",
      "Сүңгу кезіндегі газ заңдары: қарапайым үлгінің шектеулері"
    ],
    "theory": [
      "При погружении абсолютное давление приблизительно увеличивается на 1 атмосферу на каждые 10 м морской воды. По закону Бойля объём замкнутого газа обратно пропорционален абсолютному давлению при постоянной температуре; газ в открытой системе с регулятором не ведёт себя как герметичный пузырь. Парциальные давления в дыхательной смеси возрастают пропорционально общему давлению. Растворение инертного газа в тканях зависит также от времени экспозиции, перфузии и кинетики, поэтому простой закон Генри не является моделью декомпрессионной безопасности.",
      "Absolute pressure rises by roughly 1 atmosphere per 10 m of seawater. Boyle’s law applies to a closed gas volume at constant temperature; breathing through a regulator is not equivalent to a sealed bubble. Inspired gas partial pressures increase with ambient pressure. Inert-gas tissue uptake also depends on time, perfusion and kinetics, so Henry’s law alone cannot determine decompression safety.",
      "Теңіз суында тереңдік әр 10 м артқанда абсолюттік қысым шамамен 1 атмосфераға өседі. Бойль заңы тұрақты температурадағы жабық газ көлеміне қолданылады; реттегіш арқылы тыныс алу жабық көпіршікпен бірдей емес. Газдардың парциалдық қысымы сыртқы қысыммен бірге өседі. Инертті газдың тіндерде жиналуы уақытқа, перфузияға және кинетикаға тәуелді, сондықтан Генри заңының өзі декомпрессия қауіпсіздігін анықтамайды."
    ],
    "task": [
      "При погружении на 20 м давление примерно 3 атм абсолютных. Каким станет объём герметичного гибкого пузыря 3 л на поверхности при неизменной температуре?",
      "At 20 m depth pressure is about 3 atm absolute. What is the volume of a sealed flexible 3 L bubble from the surface, assuming constant temperature?",
      "20 м тереңдікте қысым шамамен 3 атм. Беттегі 3 л жабық иілгіш көпіршіктің температура тұрақты болғандағы көлемі қандай?"
    ],
    "answer": [
      "По закону Бойля: 1 атм × 3 л = 3 атм × V; V=1 л. Это иллюстрация для замкнутого газа, не инструкция по реальному погружению.",
      "Boyle’s law gives 1 atm × 3 L = 3 atm × V, so V=1 L. This applies to a closed gas pocket and is not dive-planning guidance.",
      "Бойль заңы бойынша: 1 атм × 3 л = 3 атм × V; V=1 л. Бұл жабық газға арналған мысал, нақты сүңгуді жоспарлау нұсқауы емес."
    ]
  },
  "24": {
    "title": [
      "Интерпретация спирометрии с учётом нижней границы нормы",
      "Spirometry interpretation using the lower limit of normal",
      "Қалыптың төменгі шегін ескере отырып спирометрияны талдау"
    ],
    "theory": [
      "Обструктивное вентиляционное нарушение определяют по FEV₁/FVC ниже нижней границы нормы (LLN, обычно 5-й перцентиль соответствующей референсной популяции). Фиксированное отношение 0,70 может приводить к возрастной ошибке классификации. Низкая FVC при сохранённом отношении лишь предполагает рестрикцию; её подтверждают снижением TLC ниже LLN. Качество манёвров, воспроизводимость и подходящие референсные уравнения обязательны. DLCO оценивают отдельно с учётом гемоглобина и других факторов.",
      "Obstruction is identified by FEV₁/FVC below the lower limit of normal (LLN, typically the fifth percentile of an appropriate reference population). A fixed 0.70 cutoff may misclassify people by age. Low FVC with preserved ratio only suggests restriction; reduced TLC below LLN confirms it. Maneuver quality, repeatability and appropriate reference equations matter. DLCO requires separate interpretation, including hemoglobin adjustment where applicable.",
      "Обструкция FEV₁/FVC көрсеткішінің қалыптың төменгі шегінен (LLN, әдетте референстік топтың 5-перцентилі) төмен болуымен анықталады. Тұрақты 0,70 шегі жасқа байланысты қате жіктеуге әкелуі мүмкін. FVC төмен болып, қатынас сақталса, рестрикция тек болжанады; оны TLC көрсеткішінің LLN-нен төмен болуы растайды. Маневр сапасы, қайталанғыштық және тиісті референстік теңдеулер маңызды. DLCO бөлек талданады."
    ],
    "task": [
      "FEV₁=2,10 л; FVC=3,00 л; индивидуальный LLN для FEV₁/FVC=0,73. Рассчитайте отношение и сделайте вывод.",
      "FEV₁=2.10 L, FVC=3.00 L, and individual FEV₁/FVC LLN=0.73. Calculate the ratio and interpret it.",
      "FEV₁=2,10 л; FVC=3,00 л; FEV₁/FVC жеке LLN=0,73. Қатынасты есептеп, қорытынды жасаңыз."
    ],
    "answer": [
      "FEV₁/FVC=2,10/3,00=0,70, ниже LLN 0,73: присутствует обструктивный паттерн при условии качественной спирометрии. Степень тяжести требует дополнительных данных.",
      "FEV₁/FVC=2.10/3.00=0.70, below LLN 0.73: an obstructive pattern is present if spirometry quality is acceptable. Severity requires more data.",
      "FEV₁/FVC=2,10/3,00=0,70, LLN 0,73-тен төмен: сапалы спирометрия жағдайында обструкциялық үлгі бар. Ауырлық дәрежесіне қосымша деректер қажет."
    ]
  },
  "25": {
    "title": [
      "Кислородная доставка: почему нормальная SpO₂ недостаточна",
      "Oxygen delivery: why normal SpO₂ is not enough",
      "Оттек жеткізілуі: қалыпты SpO₂ неге жеткіліксіз"
    ],
    "theory": [
      "Содержание кислорода в артериальной крови CaO₂≈1,34×Hb×SaO₂+0,003×PaO₂ (Hb в г/дл, PaO₂ в мм рт. ст.; CaO₂ в мл O₂/дл). Доставка кислорода DO₂=сердечный выброс×CaO₂×10 (мл/мин при выбросе в л/мин). При анемии SaO₂ может оставаться нормальной, тогда как CaO₂ и DO₂ снижаются. Тканевое потребление кислорода зависит также от экстракции и микроциркуляции; DO₂ не тождественна VO₂.",
      "Arterial oxygen content is CaO₂≈1.34×Hb×SaO₂+0.003×PaO₂ (Hb g/dL, PaO₂ mmHg, CaO₂ mL O₂/dL). Oxygen delivery is DO₂=cardiac output×CaO₂×10 (mL/min when output is L/min). Anemia may preserve SaO₂ while lowering CaO₂ and DO₂. Tissue oxygen consumption also depends on extraction and microcirculation; DO₂ is not identical to VO₂.",
      "Артериялық қандағы оттек мөлшері CaO₂≈1,34×Hb×SaO₂+0,003×PaO₂ (Hb г/дл, PaO₂ мм сын. бағ.; CaO₂ мл O₂/дл). Оттек жеткізілуі DO₂=жүрек шығарымы×CaO₂×10 (мл/мин). Анемияда SaO₂ қалыпты болып, CaO₂ және DO₂ төмендеуі мүмкін. Тіндердің оттек тұтынуы экстракция мен микроциркуляцияға да тәуелді; DO₂ мен VO₂ бірдей емес."
    ],
    "task": [
      "Hb=8 г/дл, SaO₂=0,98, PaO₂=95 мм рт. ст., сердечный выброс 5 л/мин. Вычислите CaO₂ и DO₂.",
      "Hb=8 g/dL, SaO₂=0.98, PaO₂=95 mmHg and cardiac output 5 L/min. Calculate CaO₂ and DO₂.",
      "Hb=8 г/дл, SaO₂=0,98, PaO₂=95 мм сын. бағ., жүрек шығарымы 5 л/мин. CaO₂ және DO₂ есептеңіз."
    ],
    "answer": [
      "CaO₂≈1,34×8×0,98+0,003×95=10,79 мл/дл; DO₂≈5×10,79×10=539,5 мл/мин. Несмотря на нормальную сатурацию, доставка снижена из-за анемии.",
      "CaO₂≈1.34×8×0.98+0.003×95=10.79 mL/dL; DO₂≈5×10.79×10=539.5 mL/min. Despite normal saturation, anemia reduces oxygen delivery.",
      "CaO₂≈1,34×8×0,98+0,003×95=10,79 мл/дл; DO₂≈5×10,79×10=539,5 мл/мин. Сатурация қалыпты болса да, анемия оттек жеткізілуін төмендетеді."
    ]
  }
};
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]||c));
export function academicV68(mid,section,L){const x=lessons[mid];if(!x||!["theory","practice","cases"].includes(section))return "";const labels=[["Академический разбор","Academic analysis","Академиялық талдау"],["Задача","Exercise","Тапсырма"],["Решение","Solution","Шешімі"]];return `<section class="lesson-card academic-v68"><h3>${esc(labels[0][L])}: ${esc(x.title[L])}</h3><p>${esc(x.theory[L])}</p>${section==="theory"?"":`<h4>${esc(labels[1][L])}</h4><p>${esc(x.task[L])}</p><details><summary>${esc(labels[2][L])}</summary><p>${esc(x.answer[L])}</p></details>`}</section>`;}