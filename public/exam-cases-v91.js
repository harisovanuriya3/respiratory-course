export const caseBasedItems = [
  {
    "module": 8,
    "q": [
      "У пациента VT=300 мл, VD=150 мл, f=24/мин. Какова альвеолярная вентиляция?",
      "A patient has VT 300 mL, VD 150 mL, f 24/min. What is alveolar ventilation?",
      "Науқаста VT=300 мл, VD=150 мл, f=24/мин. Альвеолалық вентиляция қанша?"
    ],
    "options": [
      [
        "3,6 л/мин",
        "7,2 л/мин",
        "4,8 л/мин",
        "2,4 л/мин"
      ],
      [
        "3.6 L/min",
        "7.2 L/min",
        "4.8 L/min",
        "2.4 L/min"
      ],
      [
        "3,6 л/мин",
        "7,2 л/мин",
        "4,8 л/мин",
        "2,4 л/мин"
      ]
    ],
    "answer": 0,
    "explain": [
      "(300−150)×24/1000=3,6 л/мин; минутная вентиляция при этом 7,2 л/мин.",
      "(300−150)×24/1000=3.6 L/min; minute ventilation is 7.2 L/min.",
      "(300−150)×24/1000=3,6 л/мин; минуттық вентиляция 7,2 л/мин."
    ],
    "kind": "case-analysis",
    "family": "case-8"
  },
  {
    "module": 10,
    "q": [
      "На уровне моря PB=760 мм рт. ст., FiO₂=0,21, PaCO₂=40 мм рт. ст., R=0,8. Приблизительное PAO₂?",
      "At sea level PB=760 mmHg, FiO₂=0.21, PaCO₂=40 mmHg, R=0.8. Approximate PAO₂?",
      "Теңіз деңгейінде PB=760 мм сын.бағ., FiO₂=0,21, PaCO₂=40 мм сын.бағ., R=0,8. PAO₂ шамамен қанша?"
    ],
    "options": [
      [
        "100 мм рт. ст.",
        "150 мм рт. ст.",
        "50 мм рт. ст.",
        "125 мм рт. ст."
      ],
      [
        "100 mmHg",
        "150 mmHg",
        "50 mmHg",
        "125 mmHg"
      ],
      [
        "100 мм сын.бағ.",
        "150 мм сын.бағ.",
        "50 мм сын.бағ.",
        "125 мм сын.бағ."
      ]
    ],
    "answer": 0,
    "explain": [
      "PAO₂≈0,21×(760−47)−40/0,8≈100 мм рт. ст. (упрощённое альвеолярное газовое уравнение).",
      "PAO₂≈0.21×(760−47)−40/0.8≈100 mmHg (simplified alveolar gas equation).",
      "PAO₂≈0,21×(760−47)−40/0,8≈100 мм сын.бағ. (ықшамдалған альвеолалық газ теңдеуі)."
    ],
    "kind": "case-analysis",
    "family": "case-10"
  },
  {
    "module": 12,
    "q": [
      "mPAP=32 мм рт. ст., PAWP=12 мм рт. ст., сердечный выброс=4 л/мин. Чему равно PVR?",
      "mPAP=32 mmHg, PAWP=12 mmHg, cardiac output=4 L/min. What is PVR?",
      "mPAP=32 мм сын.бағ., PAWP=12 мм сын.бағ., жүрек лақтырысы=4 л/мин. PVR қанша?"
    ],
    "options": [
      [
        "5 единиц Вуда",
        "8 единиц Вуда",
        "3 единицы Вуда",
        "20 единиц Вуда"
      ],
      [
        "5 Wood units",
        "8 Wood units",
        "3 Wood units",
        "20 Wood units"
      ],
      [
        "5 Вуд бірлігі",
        "8 Вуд бірлігі",
        "3 Вуд бірлігі",
        "20 Вуд бірлігі"
      ]
    ],
    "answer": 0,
    "explain": [
      "PVR=(32−12)/4=5 единиц Вуда.",
      "PVR=(32−12)/4=5 Wood units.",
      "PVR=(32−12)/4=5 Вуд бірлігі."
    ],
    "kind": "case-analysis",
    "family": "case-12"
  },
  {
    "module": 13,
    "q": [
      "При истинном внутрилёгочном шунте часть крови не контактирует с вентилируемыми альвеолами. Что корректно смешивать для расчёта итоговой артериальной оксигенации?",
      "In true intrapulmonary shunt, some blood bypasses ventilated alveoli. What quantity should be mixed to calculate final arterial oxygenation?",
      "Нағыз өкпеішілік шунтта қанның бір бөлігі желдетілетін альвеолаларды айналып өтеді. Қорытынды артериялық оксигенацияны есептеу үшін нені араластыру керек?"
    ],
    "options": [
      [
        "Содержание O₂ в крови",
        "Парциальные давления O₂",
        "Частоты дыхания",
        "Альвеолярные объёмы"
      ],
      [
        "Blood oxygen content",
        "Oxygen partial pressures",
        "Respiratory rates",
        "Alveolar volumes"
      ],
      [
        "Қандағы O₂ мөлшері",
        "O₂ парциалдық қысымдары",
        "Тыныс жиіліктері",
        "Альвеолалық көлемдер"
      ]
    ],
    "answer": 0,
    "explain": [
      "При смешивании потоков суммируется количество переносимого кислорода, а не среднее PaO₂.",
      "Mixing blood streams conserves oxygen content, not the arithmetic mean of PaO₂.",
      "Қан ағындары араласқанда PaO₂ орташа мәні емес, тасымалданатын оттегі мөлшері ескеріледі."
    ],
    "kind": "case-analysis",
    "family": "case-13"
  },
  {
    "module": 14,
    "q": [
      "Hb=8 г/дл, SaO₂=98%, PaO₂=95 мм рт. ст. Чему приблизительно равно CaO₂?",
      "Hb=8 g/dL, SaO₂=98%, PaO₂=95 mmHg. Approximate CaO₂?",
      "Hb=8 г/дл, SaO₂=98%, PaO₂=95 мм сын.бағ. CaO₂ шамамен қанша?"
    ],
    "options": [
      [
        "10,8 мл/дл",
        "19,9 мл/дл",
        "8,0 мл/дл",
        "15,2 мл/дл"
      ],
      [
        "10.8 mL/dL",
        "19.9 mL/dL",
        "8.0 mL/dL",
        "15.2 mL/dL"
      ],
      [
        "10,8 мл/дл",
        "19,9 мл/дл",
        "8,0 мл/дл",
        "15,2 мл/дл"
      ]
    ],
    "answer": 0,
    "explain": [
      "CaO₂≈1,34×8×0,98+0,003×95≈10,8 мл/дл; нормальная сатурация не устраняет дефицит гемоглобина.",
      "CaO₂≈1.34×8×0.98+0.003×95≈10.8 mL/dL; normal saturation does not compensate for low hemoglobin.",
      "CaO₂≈1,34×8×0,98+0,003×95≈10,8 мл/дл; қалыпты сатурация гемоглобин тапшылығын өтемейді."
    ],
    "kind": "case-analysis",
    "family": "case-14"
  },
  {
    "module": 16,
    "q": [
      "pH=7,25, HCO₃⁻=12 ммоль/л, PaCO₂=26 мм рт. ст. Как оценить дыхательную компенсацию метаболического ацидоза по формуле Уинтера?",
      "pH=7.25, HCO₃⁻=12 mmol/L, PaCO₂=26 mmHg. Assess respiratory compensation of metabolic acidosis using Winter’s formula.",
      "pH=7,25, HCO₃⁻=12 ммоль/л, PaCO₂=26 мм сын.бағ. Уинтер формуласы бойынша метаболикалық ацидоздың тыныстық компенсациясын бағалаңыз."
    ],
    "options": [
      [
        "Ожидаемая компенсация",
        "Дополнительный респираторный ацидоз",
        "Дополнительный респираторный алкалоз",
        "Первичный респираторный алкалоз"
      ],
      [
        "Expected compensation",
        "Additional respiratory acidosis",
        "Additional respiratory alkalosis",
        "Primary respiratory alkalosis"
      ],
      [
        "Күтілетін компенсация",
        "Қосымша респираторлық ацидоз",
        "Қосымша респираторлық алкалоз",
        "Бастапқы респираторлық алкалоз"
      ]
    ],
    "answer": 0,
    "explain": [
      "Ожидаемый PaCO₂=1,5×12+8±2=26±2 мм рт. ст.; измерено 26.",
      "Expected PaCO₂=1.5×12+8±2=26±2 mmHg; measured 26.",
      "Күтілетін PaCO₂=1,5×12+8±2=26±2 мм сын.бағ.; өлшенгені 26."
    ],
    "kind": "case-analysis",
    "family": "case-16"
  },
  {
    "module": 19,
    "q": [
      "У пациента тяжёлая анемия, но PaO₂=95 мм рт. ст. Как изменится непосредственный гипоксический стимул каротидных телец при прочих равных?",
      "A patient has severe anemia but PaO₂=95 mmHg. How does direct hypoxic stimulation of carotid bodies change, all else equal?",
      "Науқаста ауыр анемия бар, бірақ PaO₂=95 мм сын.бағ. Басқа жағдайлар тұрақты болса, каротид денешіктерінің тікелей гипоксиялық стимулы қалай өзгереді?"
    ],
    "options": [
      [
        "Не увеличится только из-за снижения Hb",
        "Резко возрастёт из-за снижения Hb",
        "Исчезнет чувствительность к CO₂",
        "Прекратится вагусная афферентация"
      ],
      [
        "Does not rise from low Hb alone",
        "Rises sharply from low Hb",
        "CO₂ sensitivity disappears",
        "Vagal afferents stop"
      ],
      [
        "Тек Hb төмендеуінен күшеймейді",
        "Hb төмендеуінен күрт күшейеді",
        "CO₂ сезімталдығы жойылады",
        "Кезбе жүйке афферентациясы тоқтайды"
      ]
    ],
    "answer": 0,
    "explain": [
      "Каротидные тельца непосредственно реагируют прежде всего на PaO₂, а не на общее содержание кислорода при анемии.",
      "Carotid bodies primarily sense arterial PO₂, not total oxygen content reduced by anemia.",
      "Каротид денешіктері анемиядағы жалпы O₂ мөлшеріне емес, негізінен артериялық PO₂-ге жауап береді."
    ],
    "kind": "case-analysis",
    "family": "case-19"
  },
  {
    "module": 20,
    "q": [
      "VO₂=2,0 л/мин, частота сердца=160/мин. Каков кислородный пульс?",
      "VO₂=2.0 L/min, heart rate=160/min. What is oxygen pulse?",
      "VO₂=2,0 л/мин, жүрек жиілігі=160/мин. Оттегілік пульс қанша?"
    ],
    "options": [
      [
        "12,5 мл/удар",
        "8 мл/удар",
        "20 мл/удар",
        "32 мл/удар"
      ],
      [
        "12.5 mL/beat",
        "8 mL/beat",
        "20 mL/beat",
        "32 mL/beat"
      ],
      [
        "12,5 мл/соғу",
        "8 мл/соғу",
        "20 мл/соғу",
        "32 мл/соғу"
      ]
    ],
    "answer": 0,
    "explain": [
      "2000 мл/мин ÷160/мин=12,5 мл/удар; показатель зависит от ударного объёма и артериовенозной разницы O₂.",
      "2000 mL/min ÷160/min=12.5 mL/beat; it depends on stroke volume and arteriovenous O₂ difference.",
      "2000 мл/мин ÷160/мин=12,5 мл/соғу; көрсеткіш соққы көлемі мен артерия-вена O₂ айырмасына тәуелді."
    ],
    "kind": "case-analysis",
    "family": "case-20"
  },
  {
    "module": 22,
    "q": [
      "В полисомнографии зарегистрировано 90 апноэ и гипопноэ за 6 часов фактического сна. Чему равен AHI?",
      "Polysomnography records 90 apneas and hypopneas during 6 hours of actual sleep. What is AHI?",
      "Полисомнографияда нақты 6 сағат ұйқыда 90 апноэ мен гипопноэ тіркелді. AHI қанша?"
    ],
    "options": [
      [
        "15 событий/час",
        "10 событий/час",
        "30 событий/час",
        "90 событий/час"
      ],
      [
        "15 events/hour",
        "10 events/hour",
        "30 events/hour",
        "90 events/hour"
      ],
      [
        "15 оқиға/сағ",
        "10 оқиға/сағ",
        "30 оқиға/сағ",
        "90 оқиға/сағ"
      ]
    ],
    "answer": 0,
    "explain": [
      "AHI=90/6=15 событий в час сна; знаменатель — время сна, а не нахождения в постели.",
      "AHI=90/6=15 events per hour of sleep; denominator is sleep time, not time in bed.",
      "AHI=90/6=15 оқиға/сағ; бөлімінде төсектегі уақыт емес, нақты ұйқы уақыты алынады."
    ],
    "kind": "case-analysis",
    "family": "case-22"
  },
  {
    "module": 24,
    "q": [
      "У пациента FVC снижена, но TLC находится в пределах нормы. Какой вывод наиболее обоснован?",
      "A patient has reduced FVC but TLC is within normal limits. Which conclusion is most justified?",
      "Науқаста FVC төмен, бірақ TLC қалыпты шектерде. Ең негізді қорытынды қандай?"
    ],
    "options": [
      [
        "Рестрикция не подтверждена",
        "Рестрикция доказана по FVC",
        "Обструкция исключена",
        "DLCO обязательно снижена"
      ],
      [
        "Restriction is not confirmed",
        "Restriction is proven by FVC",
        "Obstruction is excluded",
        "DLCO must be reduced"
      ],
      [
        "Рестрикция расталмаған",
        "Рестрикция FVC бойынша дәлелденген",
        "Обструкция жоққа шығарылған",
        "DLCO міндетті түрде төмен"
      ]
    ],
    "answer": 0,
    "explain": [
      "Для подтверждения рестриктивного дефекта требуется TLC ниже нижней границы нормы; низкая FVC сама по себе недостаточна.",
      "Restriction requires TLC below the lower limit of normal; reduced FVC alone is insufficient.",
      "Рестрикцияны растау үшін TLC қалыптың төменгі шегінен төмен болуы тиіс; FVC төмендеуі жеткіліксіз."
    ],
    "kind": "case-analysis",
    "family": "case-24"
  }
];
