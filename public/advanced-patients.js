import {patientContext} from './patient-context.js';
import {patientCases} from './patient-cases.js';
import {repairPatientEvidence} from './patient-evidence.js';
import {patientLabel} from './patient-localization.js';
const cases = [
  {
    "title": [
      "Послеоперационная гиповентиляция",
      "Postoperative hypoventilation",
      "Операциядан кейінгі гиповентиляция"
    ],
    "stages": [
      {
        "title": [
          "Первичные данные",
          "Initial findings",
          "Бастапқы деректер"
        ],
        "question": [
          "После операции: сонливость, частота дыхания 8/мин, PaCO₂ 60 мм рт. ст., pH 7,27, HCO₃⁻ 26 ммоль/л. Какое первичное нарушение?",
          "After surgery: drowsiness, respiratory rate 8/min, PaCO₂ 60 mmHg, pH 7.27, HCO₃⁻ 26 mmol/L. What is the primary disturbance?",
          "Операциядан кейін: ұйқышылдық, тыныс жиілігі 8/мин, PaCO₂ 60 мм сын. бағ., pH 7,27, HCO₃⁻ 26 ммоль/л. Негізгі бұзылыс қандай?"
        ],
        "options": [
          [
            "Острый респираторный ацидоз",
            "Метаболический ацидоз",
            "Хронический респираторный алкалоз"
          ],
          [
            "Acute respiratory acidosis",
            "Metabolic acidosis",
            "Chronic respiratory alkalosis"
          ],
          [
            "Жедел респираторлық ацидоз",
            "Метаболизмдік ацидоз",
            "Созылмалы респираторлық алкалоз"
          ]
        ],
        "correct": 0,
        "why": [
          "Повышенный PaCO₂ при ацидемии и почти нормальном HCO₃⁻ указывает на острый респираторный ацидоз.",
          "Elevated PaCO₂ with acidemia and near-normal HCO₃⁻ indicates acute respiratory acidosis.",
          "PaCO₂ жоғарылауы, ацидемия және HCO₃⁻ шамамен қалыпты болуы жедел респираторлық ацидозды көрсетеді."
        ],
        "id": "patient-01-stage-1"
      },
      {
        "title": [
          "Физиологический расчёт",
          "Physiology calculation",
          "Физиологиялық есеп"
        ],
        "question": [
          "Если продукция CO₂ неизменна, как должна измениться альвеолярная вентиляция, чтобы PaCO₂ снизилось с 60 до 40 мм рт. ст.?",
          "With constant CO₂ production, how must alveolar ventilation change to lower PaCO₂ from 60 to 40 mmHg?",
          "CO₂ түзілуі өзгермесе, PaCO₂ 60-тан 40 мм сын. бағ.-ға төмендеуі үшін альвеолалық вентиляция қалай өзгеруі керек?"
        ],
        "options": [
          [
            "Увеличиться в 1,5 раза",
            "Уменьшиться в 1,5 раза",
            "Не измениться"
          ],
          [
            "Increase 1.5-fold",
            "Decrease 1.5-fold",
            "Remain unchanged"
          ],
          [
            "1,5 есе артуы",
            "1,5 есе азаюы",
            "Өзгермеуі"
          ]
        ],
        "correct": 0,
        "why": [
          "При постоянной продукции CO₂ PaCO₂ обратно пропорционально альвеолярной вентиляции: 60/40 = 1,5.",
          "At constant CO₂ production, PaCO₂ is inversely proportional to alveolar ventilation: 60/40 = 1.5.",
          "CO₂ түзілуі тұрақты болса, PaCO₂ альвеолалық вентиляцияға кері пропорционал: 60/40 = 1,5."
        ],
        "id": "patient-01-stage-2"
      },
      {
        "title": [
          "Механизм",
          "Mechanism",
          "Механизм"
        ],
        "question": [
          "Почему при острой гиповентиляции pH снижается?",
          "Why does acute hypoventilation lower pH?",
          "Жедел гиповентиляция кезінде pH неліктен төмендейді?"
        ],
        "options": [
          [
            "Накопление CO₂ сдвигает равновесие к образованию H⁺",
            "Накопление CO₂ немедленно снижает HCO₃⁻ до нуля",
            "Снижается растворимость кислорода"
          ],
          [
            "CO₂ retention shifts equilibrium toward H⁺ formation",
            "CO₂ retention immediately lowers HCO₃⁻ to zero",
            "Oxygen solubility decreases"
          ],
          [
            "CO₂ жиналуы тепе-теңдікті H⁺ түзілуіне ығыстырады",
            "CO₂ жиналуы HCO₃⁻ деңгейін бірден нөлге түсіреді",
            "Оттегінің ерігіштігі төмендейді"
          ]
        ],
        "correct": 0,
        "why": [
          "Реакция CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻ смещается вправо; компенсация почками требует времени.",
          "The CO₂ hydration equilibrium shifts toward H⁺; renal compensation takes time.",
          "CO₂ гидратациясының тепе-теңдігі H⁺ түзілуіне ығысады; бүйректік компенсацияға уақыт керек."
        ],
        "id": "patient-01-stage-3"
      }
    ]
  },
  {
    "title": [
      "Гипоксемия при ателектазе",
      "Hypoxemia with atelectasis",
      "Ателектаз кезіндегі гипоксемия"
    ],
    "stages": [
      {
        "title": [
          "Газообмен",
          "Gas exchange",
          "Газ алмасу"
        ],
        "question": [
          "При ателектазе часть альвеол не вентилируется, но перфузируется. Каков V/Q в этой области?",
          "In atelectasis, some alveoli receive blood but no ventilation. What is regional V/Q?",
          "Ателектазда кей альвеолалар желдетілмейді, бірақ қанмен қамтамасыз етіледі. Бұл аймақта V/Q қандай?"
        ],
        "options": [
          [
            "Близко к нулю",
            "Стремится к бесконечности",
            "Равно единице"
          ],
          [
            "Approaches zero",
            "Approaches infinity",
            "Equals one"
          ],
          [
            "Нөлге жуық",
            "Шексіздікке ұмтылады",
            "Бірге тең"
          ]
        ],
        "correct": 0,
        "why": [
          "При отсутствии вентиляции и сохранённом кровотоке V/Q → 0: это шунтоподобный механизм.",
          "With absent ventilation and preserved perfusion, V/Q approaches zero: a shunt-like mechanism.",
          "Вентиляция болмағанымен перфузия сақталса, V/Q нөлге ұмтылады: шунтқа ұқсас механизм."
        ],
        "id": "patient-02-stage-1"
      },
      {
        "title": [
          "Оксигенация",
          "Oxygenation",
          "Оксигенация"
        ],
        "question": [
          "Почему кислородотерапия может не полностью устранить гипоксемию при большом истинном шунте?",
          "Why might supplemental oxygen incompletely correct hypoxemia with a large true shunt?",
          "Айқын шынайы шунт кезінде оттегі беру гипоксемияны неге толық түзетпеуі мүмкін?"
        ],
        "options": [
          [
            "Часть крови не контактирует с вентилируемыми альвеолами",
            "Весь гемоглобин перестаёт связывать O₂",
            "Растворённый O₂ полностью исчезает"
          ],
          [
            "Some blood bypasses ventilated alveoli",
            "All hemoglobin stops binding O₂",
            "Dissolved O₂ disappears entirely"
          ],
          [
            "Қанның бір бөлігі желдетілетін альвеолалармен жанаспайды",
            "Барлық гемоглобин O₂ байланыстыруын тоқтатады",
            "Еріген O₂ толық жоғалады"
          ]
        ],
        "correct": 0,
        "why": [
          "Шунтируемая кровь не подвергается альвеолярной оксигенации; повышение FiO₂ воздействует главным образом на вентилируемые единицы.",
          "Shunted blood is not exposed to alveolar oxygenation; higher FiO₂ acts primarily on ventilated units.",
          "Шунтталған қан альвеолалық оттектенуге қатыспайды; FiO₂ арттыру негізінен желдетілетін аймақтарға әсер етеді."
        ],
        "id": "patient-02-stage-2"
      },
      {
        "title": [
          "Регуляция",
          "Regulation",
          "Реттелу"
        ],
        "question": [
          "Как локальная альвеолярная гипоксия влияет на мелкие лёгочные артерии?",
          "How does local alveolar hypoxia affect small pulmonary arteries?",
          "Жергілікті альвеолалық гипоксия өкпенің ұсақ артерияларына қалай әсер етеді?"
        ],
        "options": [
          [
            "Вызывает вазоконстрикцию",
            "Вызывает обязательную вазодилатацию",
            "Не влияет на сосудистый тонус"
          ],
          [
            "Causes vasoconstriction",
            "Always causes vasodilation",
            "Has no effect on vascular tone"
          ],
          [
            "Вазоконстрикция туғызады",
            "Міндетті түрде вазодилатация туғызады",
            "Тамыр тонусына әсер етпейді"
          ]
        ],
        "correct": 0,
        "why": [
          "Гипоксическая лёгочная вазоконстрикция перераспределяет кровоток к лучше вентилируемым зонам, но при обширной гипоксии может повышать сосудистое сопротивление.",
          "Hypoxic pulmonary vasoconstriction redirects flow to better-ventilated regions but can raise resistance when widespread.",
          "Гипоксиялық өкпелік вазоконстрикция қанды жақсы желдетілетін аймақтарға бағыттайды, ал кең таралғанда кедергіні арттыруы мүмкін."
        ],
        "id": "patient-02-stage-3"
      }
    ]
  },
  {
    "title": [
      "Анемия при нормальной сатурации",
      "Anemia with normal saturation",
      "Сатурациясы қалыпты анемия"
    ],
    "stages": [
      {
        "title": [
          "Показатели",
          "Measurements",
          "Көрсеткіштер"
        ],
        "question": [
          "Hb 8 г/дл, SaO₂ 98%, PaO₂ 95 мм рт. ст. Какой показатель прежде всего снижен?",
          "Hb 8 g/dL, SaO₂ 98%, PaO₂ 95 mmHg. Which variable is primarily reduced?",
          "Hb 8 г/дл, SaO₂ 98%, PaO₂ 95 мм сын. бағ. Ең алдымен қай көрсеткіш төмендейді?"
        ],
        "options": [
          [
            "Содержание кислорода в артериальной крови (CaO₂)",
            "Парциальное давление кислорода (PaO₂)",
            "Процент насыщения Hb (SaO₂)"
          ],
          [
            "Arterial oxygen content (CaO₂)",
            "Oxygen partial pressure (PaO₂)",
            "Hemoglobin saturation (SaO₂)"
          ],
          [
            "Артериялық қандағы оттегі мөлшері (CaO₂)",
            "Оттегінің парциалдық қысымы (PaO₂)",
            "Гемоглобин қанығуы (SaO₂)"
          ]
        ],
        "correct": 0,
        "why": [
          "Большая часть O₂ связана с Hb; низкая концентрация Hb уменьшает CaO₂ даже при нормальных SaO₂ и PaO₂.",
          "Most O₂ is hemoglobin-bound; low Hb reduces CaO₂ despite normal SaO₂ and PaO₂.",
          "O₂-нің көп бөлігі Hb-мен байланысады; Hb азайса, SaO₂ және PaO₂ қалыпты болса да CaO₂ төмендейді."
        ],
        "id": "patient-03-stage-1"
      },
      {
        "title": [
          "Расчёт CaO₂",
          "CaO₂ calculation",
          "CaO₂ есебі"
        ],
        "question": [
          "Оцените CaO₂ при Hb 8 г/дл, SaO₂ 0,98 и PaO₂ 95 мм рт. ст. Формула: 1,34 × Hb × SaO₂ + 0,003 × PaO₂.",
          "Estimate CaO₂ for Hb 8 g/dL, SaO₂ 0.98, PaO₂ 95 mmHg. Formula: 1.34 × Hb × SaO₂ + 0.003 × PaO₂.",
          "Hb 8 г/дл, SaO₂ 0,98, PaO₂ 95 мм сын. бағ. болғанда CaO₂ есептеңіз: 1,34 × Hb × SaO₂ + 0,003 × PaO₂."
        ],
        "options": [
          [
            "Около 10,8 мл O₂/дл",
            "Около 19,9 мл O₂/дл",
            "Около 3,0 мл O₂/дл"
          ],
          [
            "About 10.8 mL O₂/dL",
            "About 19.9 mL O₂/dL",
            "About 3.0 mL O₂/dL"
          ],
          [
            "Шамамен 10,8 мл O₂/дл",
            "Шамамен 19,9 мл O₂/дл",
            "Шамамен 3,0 мл O₂/дл"
          ]
        ],
        "correct": 0,
        "why": [
          "1,34 × 8 × 0,98 + 0,003 × 95 = 10,79 мл O₂/дл.",
          "1.34 × 8 × 0.98 + 0.003 × 95 = 10.79 mL O₂/dL.",
          "1,34 × 8 × 0,98 + 0,003 × 95 = 10,79 мл O₂/дл."
        ],
        "id": "patient-03-stage-2"
      },
      {
        "title": [
          "Доставка",
          "Delivery",
          "Жеткізілу"
        ],
        "question": [
          "При неизменном сердечном выбросе снижение CaO₂ приводит к какому изменению DO₂?",
          "At unchanged cardiac output, how does lower CaO₂ affect DO₂?",
          "Жүрек шығарылымы өзгермесе, CaO₂ төмендеуі DO₂-ге қалай әсер етеді?"
        ],
        "options": [
          [
            "DO₂ снижается",
            "DO₂ повышается",
            "DO₂ не меняется"
          ],
          [
            "DO₂ decreases",
            "DO₂ increases",
            "DO₂ remains unchanged"
          ],
          [
            "DO₂ төмендейді",
            "DO₂ жоғарылайды",
            "DO₂ өзгермейді"
          ]
        ],
        "correct": 0,
        "why": [
          "DO₂ = сердечный выброс × CaO₂ × 10 (для соответствующих единиц).",
          "DO₂ = cardiac output × CaO₂ × 10 (for the specified units).",
          "DO₂ = жүрек шығарылымы × CaO₂ × 10 (сәйкес өлшем бірліктерінде)."
        ],
        "id": "patient-03-stage-3"
      }
    ]
  },
  {
    "title": [
      "Бронхиальная обструкция",
      "Bronchial obstruction",
      "Бронх обструкциясы"
    ],
    "stages": [
      {
        "title": [
          "Спирометрия",
          "Spirometry",
          "Спирометрия"
        ],
        "question": [
          "После качественной спирометрии FEV₁ = 1,5 л, FVC = 3,0 л. Каково FEV₁/FVC?",
          "After acceptable spirometry FEV₁ = 1.5 L, FVC = 3.0 L. What is FEV₁/FVC?",
          "Сапалы спирометрияда FEV₁ = 1,5 л, FVC = 3,0 л. FEV₁/FVC қанша?"
        ],
        "options": [
          [
            "0,50",
            "0,75",
            "0,90"
          ],
          [
            "0.50",
            "0.75",
            "0.90"
          ],
          [
            "0,50",
            "0,75",
            "0,90"
          ]
        ],
        "correct": 0,
        "why": [
          "FEV₁/FVC = 1,5/3,0 = 0,50. Для заключения об обструкции сравнивают с LLN, а не только с фиксированным порогом.",
          "FEV₁/FVC = 1.5/3.0 = 0.50. Obstruction should be assessed against the lower limit of normal (LLN).",
          "FEV₁/FVC = 1,5/3,0 = 0,50. Обструкцияны бағалау үшін төменгі қалыпты шекпен (LLN) салыстыру керек."
        ],
        "id": "patient-04-stage-1"
      },
      {
        "title": [
          "Механизм",
          "Mechanism",
          "Механизм"
        ],
        "question": [
          "При ламинарном течении радиус бронха уменьшился вдвое. Как меняется сопротивление одного цилиндрического участка по Пуазейлю?",
          "Under laminar flow, airway radius halves. How does resistance of a cylindrical segment change by Poiseuille’s model?",
          "Ламинар ағыста бронх радиусы екі есе азайды. Пуазейль моделінде цилиндрлік сегмент кедергісі қалай өзгереді?"
        ],
        "options": [
          [
            "Увеличивается в 16 раз",
            "Увеличивается в 2 раза",
            "Уменьшается в 4 раза"
          ],
          [
            "Increases 16-fold",
            "Increases 2-fold",
            "Decreases 4-fold"
          ],
          [
            "16 есе артады",
            "2 есе артады",
            "4 есе азаяды"
          ]
        ],
        "correct": 0,
        "why": [
          "R ∝ 1/r⁴, поэтому (2)⁴ = 16; реальные дыхательные пути ветвятся, а поток может быть турбулентным.",
          "R ∝ 1/r⁴, giving 2⁴ = 16; real airways branch and flow may be turbulent.",
          "R ∝ 1/r⁴, сондықтан 2⁴ = 16; шынайы тыныс жолдары тармақталған және ағыс турбулентті болуы мүмкін."
        ],
        "id": "patient-04-stage-2"
      },
      {
        "title": [
          "Петля поток–объём",
          "Flow–volume loop",
          "Ағын–көлем ілмегі"
        ],
        "question": [
          "Что типично для экспираторной части петли поток–объём при обструкции?",
          "Which change is typical in the expiratory flow–volume limb with obstruction?",
          "Обструкцияда ағын–көлем ілмегінің экспираторлық бөлігінде қандай өзгеріс тән?"
        ],
        "options": [
          [
            "Вогнутая форма экспираторной ветви",
            "Обязательное повышение пиковой скорости",
            "Полное отсутствие выдоха"
          ],
          [
            "Concave expiratory limb",
            "Mandatory increase in peak flow",
            "Complete absence of expiration"
          ],
          [
            "Экспираторлық тармақтың ойыс пішіні",
            "Шыңдық ағынның міндетті артуы",
            "Дем шығарудың толық болмауы"
          ]
        ],
        "correct": 0,
        "why": [
          "Обструкция часто вызывает вогнутость нисходящей части экспираторной кривой вследствие ограничения потока.",
          "Obstruction commonly produces a concave descending expiratory limb due to flow limitation.",
          "Обструкция ағын шектелуіне байланысты экспираторлық қисықтың төмендейтін бөлігін жиі ойыстандырады."
        ],
        "id": "patient-04-stage-3"
      }
    ]
  },
  {
    "title": [
      "Высотная гипоксия",
      "High-altitude hypoxia",
      "Биіктік гипоксиясы"
    ],
    "stages": [
      {
        "title": [
          "Барометрия",
          "Barometric pressure",
          "Барометрлік қысым"
        ],
        "question": [
          "На высоте PB = 560 мм рт. ст., FiO₂ = 0,21, PH₂O = 47 мм рт. ст. Рассчитайте PIO₂.",
          "At altitude PB = 560 mmHg, FiO₂ = 0.21, PH₂O = 47 mmHg. Calculate PIO₂.",
          "Биіктікте PB = 560 мм сын. бағ., FiO₂ = 0,21, PH₂O = 47 мм сын. бағ. PIO₂ есептеңіз."
        ],
        "options": [
          [
            "Около 108 мм рт. ст.",
            "Около 150 мм рт. ст.",
            "Около 75 мм рт. ст."
          ],
          [
            "About 108 mmHg",
            "About 150 mmHg",
            "About 75 mmHg"
          ],
          [
            "Шамамен 108 мм сын. бағ.",
            "Шамамен 150 мм сын. бағ.",
            "Шамамен 75 мм сын. бағ."
          ]
        ],
        "correct": 0,
        "why": [
          "PIO₂ = FiO₂(PB − PH₂O) = 0,21 × 513 = 107,7 мм рт. ст.",
          "PIO₂ = FiO₂(PB − PH₂O) = 0.21 × 513 = 107.7 mmHg.",
          "PIO₂ = FiO₂(PB − PH₂O) = 0,21 × 513 = 107,7 мм сын. бағ."
        ],
        "id": "patient-05-stage-1"
      },
      {
        "title": [
          "Хеморефлекс",
          "Chemoreflex",
          "Хеморефлекс"
        ],
        "question": [
          "Какой рецепторный путь особенно важен для быстрого ответа на снижение PaO₂?",
          "Which receptor pathway is especially important for the rapid response to reduced PaO₂?",
          "PaO₂ төмендеуіне жылдам жауапта қай рецепторлық жол ерекше маңызды?"
        ],
        "options": [
          [
            "Каротидные тельца → IX нерв → продолговатый мозг",
            "Центральные рецепторы → зрительный нерв",
            "Рецепторы растяжения → обонятельный нерв"
          ],
          [
            "Carotid bodies → CN IX → medulla",
            "Central receptors → optic nerve",
            "Stretch receptors → olfactory nerve"
          ],
          [
            "Каротид денешіктері → IX жүйке → сопақша ми",
            "Орталық рецепторлар → көру жүйкесі",
            "Созылу рецепторлары → иіс сезу жүйкесі"
          ]
        ],
        "correct": 0,
        "why": [
          "Каротидные тельца воспринимают снижение PaO₂ и передают сигнал по языкоглоточному нерву.",
          "Carotid bodies sense falling PaO₂ and send afferents through the glossopharyngeal nerve.",
          "Каротид денешіктері PaO₂ төмендеуін сезіп, сигналды тіл-жұтқыншақ жүйкесі арқылы өткізеді."
        ],
        "id": "patient-05-stage-2"
      },
      {
        "title": [
          "Кислотно-основной ответ",
          "Acid–base response",
          "Қышқыл-негіздік жауап"
        ],
        "question": [
          "Какое изменение pH характерно для ранней гипервентиляции при подъёме на высоту?",
          "What pH change is typical of early altitude-induced hyperventilation?",
          "Биіктікте бастапқы гипервентиляция кезінде pH қалай өзгереді?"
        ],
        "options": [
          [
            "Повышается из-за снижения PaCO₂",
            "Снижается из-за повышения PaCO₂",
            "Всегда остаётся неизменным"
          ],
          [
            "Rises as PaCO₂ falls",
            "Falls as PaCO₂ rises",
            "Always remains unchanged"
          ],
          [
            "PaCO₂ төмендегендіктен жоғарылайды",
            "PaCO₂ жоғарылағандықтан төмендейді",
            "Әрдайым өзгеріссіз қалады"
          ]
        ],
        "correct": 0,
        "why": [
          "Гипервентиляция уменьшает PaCO₂ и вызывает острый респираторный алкалоз; позднее почки выводят HCO₃⁻.",
          "Hyperventilation lowers PaCO₂ and causes acute respiratory alkalosis; renal bicarbonate excretion follows.",
          "Гипервентиляция PaCO₂ азайтып, жедел респираторлық алкалоз туғызады; кейін бүйрек HCO₃⁻ шығарады."
        ],
        "id": "patient-05-stage-3"
      }
    ]
  },
  {
    "title": [
      "Раздел 1: Спокойное дыхание: 500 мл, 12/мин",
      "Module 1: Resting breathing: 500 mL, 12/min",
      "1-бөлім: Тыныш тыныс: 500 мл, 12/мин"
    ],
    "stages": [
      {
        "title": [
          "Исходные данные",
          "Initial findings",
          "Бастапқы деректер"
        ],
        "question": [
          "Спокойное дыхание: 500 мл, 12/мин. Определите минутную вентиляцию",
          "Resting breathing: 500 mL, 12/min. Calculate minute ventilation",
          "Тыныш тыныс: 500 мл, 12/мин. Минуттық вентиляцияны есептеңіз"
        ],
        "options": [
          [
            "6 л/мин",
            "4,2 л/мин",
            "12 л/мин"
          ],
          [
            "6 L/min",
            "4.2 L/min",
            "12 L/min"
          ],
          [
            "6 л/мин",
            "4,2 л/мин",
            "12 л/мин"
          ]
        ],
        "correct": 0,
        "why": [
          "VT × f = 0,5 × 12 = 6 л/мин.",
          "VT × f = 0,5 × 12 = 6 л/мин.",
          "VT × f = 0,5 × 12 = 6 л/мин."
        ],
        "id": "patient-06-stage-1"
      },
      {
        "title": [
          "Механизм",
          "Mechanism",
          "Механизм"
        ],
        "question": [
          "Какой показатель не учитывается в минутной вентиляции?",
          "Which factor is not subtracted from minute ventilation?",
          "Минуттық вентиляциядан қандай шама шегерілмейді?"
        ],
        "options": [
          [
            "Анатомическое мёртвое пространство",
            "Частота дыхания",
            "Дыхательный объём"
          ],
          [
            "Anatomical dead space",
            "Breathing frequency",
            "Tidal volume"
          ],
          [
            "Анатомиялық өлі кеңістік",
            "Тыныс жиілігі",
            "Тыныс көлемі"
          ]
        ],
        "correct": 0,
        "why": [
          "Минутная вентиляция равна VT×f; мёртвое пространство вычитают при расчёте альвеолярной вентиляции.",
          "Minute ventilation equals VT×f; dead space is subtracted for alveolar ventilation.",
          "Минуттық вентиляция VT×f; өлі кеңістік альвеолалық вентиляцияны есептегенде шегеріледі."
        ],
        "id": "patient-06-stage-2"
      },
      {
        "title": [
          "Интерпретация физиологического механизма",
          "Mechanistic interpretation",
          "Физиологиялық механизмді түсіндіру"
        ],
        "question": [
          "При VT 500 мл, f 12/мин и VD 150 мл какова альвеолярная вентиляция?",
          "For VT 500 mL, rate 12/min and dead space 150 mL, what is alveolar ventilation?",
          "VT 500 мл, жиілік 12/мин және өлі кеңістік 150 мл болса, альвеолалық вентиляция қанша?"
        ],
        "options": [
          [
            "4,2 л/мин",
            "6,0 л/мин",
            "1,8 л/мин"
          ],
          [
            "4.2 L/min",
            "6.0 L/min",
            "1.8 L/min"
          ],
          [
            "4,2 л/мин",
            "6,0 л/мин",
            "1,8 л/мин"
          ]
        ],
        "correct": 0,
        "why": [
          "(500−150)×12=4200 мл/мин; минутная вентиляция 6 л/мин не равна альвеолярной.",
          "(500−150)×12=4200 mL/min; minute ventilation is 6 L/min, not alveolar ventilation.",
          "(500−150)×12=4200 мл/мин; минуттық вентиляция 6 л/мин, ол альвеолалық вентиляция емес."
        ],
        "id": "patient-06-stage-3"
      }
    ]
  },
  {
    "title": [
      "Раздел 2: После резекции доли уменьшилась площадь газообмена",
      "Module 2: Gas-exchange area decreases after lobectomy",
      "2-бөлім: Лобэктомиядан кейін газ алмасу ауданы азайды"
    ],
    "stages": [
      {
        "title": [
          "Исходные данные",
          "Initial findings",
          "Бастапқы деректер"
        ],
        "question": [
          "После резекции доли уменьшилась площадь газообмена. Что происходит с диффузионной способностью при прочих равных?",
          "Gas-exchange area decreases after lobectomy. What happens to diffusion capacity, all else equal?",
          "Лобэктомиядан кейін газ алмасу ауданы азайды. Басқа жағдайлар бірдей болса диффузия қабілеті қалай өзгереді?"
        ],
        "options": [
          [
            "Снижается",
            "Повышается",
            "Не меняется"
          ],
          [
            "Decreases",
            "Increases",
            "Unchanged"
          ],
          [
            "Төмендейді",
            "Жоғарылайды",
            "Өзгермейді"
          ]
        ],
        "correct": 0,
        "why": [
          "По закону Фика поток пропорционален площади мембраны.",
          "По закону Фика поток пропорционален площади мембраны.",
          "По закону Фика поток пропорционален площади мембраны."
        ],
        "id": "patient-07-stage-1"
      },
      {
        "title": [
          "Механизм",
          "Mechanism",
          "Механизм"
        ],
        "question": [
          "Что ещё может снижать DLCO после операции?",
          "What else can reduce DLCO after surgery?",
          "Операциядан кейін DLCO тағы неге төмендеуі мүмкін?"
        ],
        "options": [
          [
            "Снижение объёма лёгочных капилляров",
            "Рост альвеолярной площади",
            "Рост гемоглобина без других изменений"
          ],
          [
            "Reduced pulmonary capillary blood volume",
            "Increased alveolar area",
            "Higher haemoglobin alone"
          ],
          [
            "Өкпе капиллярларындағы қан көлемінің азаюы",
            "Альвеолалық ауданның ұлғаюы",
            "Тек гемоглобиннің жоғарылауы"
          ]
        ],
        "correct": 0,
        "why": [
          "DLCO зависит от мембранной проводимости и капиллярного объёма крови.",
          "DLCO depends on membrane conductance and pulmonary capillary blood volume.",
          "DLCO мембрана өткізгіштігі мен өкпе капиллярларындағы қан көлеміне тәуелді."
        ],
        "id": "patient-07-stage-2"
      },
      {
        "title": [
          "Интерпретация физиологического механизма",
          "Mechanistic interpretation",
          "Физиологиялық механизмді түсіндіру"
        ],
        "question": [
          "Почему после резекции доли лёгкого DLCO может уменьшиться?",
          "Why may DLCO decrease after lobectomy?",
          "Өкпе бөлігін алып тастағаннан кейін DLCO неге төмендеуі мүмкін?"
        ],
        "options": [
          [
            "Уменьшается доступная площадь альвеолярно-капиллярного обмена",
            "Увеличивается число функционирующих альвеол",
            "Исчезает связывание CO с гемоглобином"
          ],
          [
            "Available alveolar-capillary exchange surface decreases",
            "The number of functioning alveoli increases",
            "CO binding to hemoglobin disappears"
          ],
          [
            "Альвеола-капиллярлық алмасу беті азаяды",
            "Қызмет ететін альвеолалар саны артады",
            "CO-ның гемоглобинмен байланысуы жойылады"
          ]
        ],
        "correct": 0,
        "why": [
          "DLCO зависит от площади мембраны, её свойств и капиллярного объёма крови.",
          "DLCO depends on membrane surface and properties as well as pulmonary capillary blood volume.",
          "DLCO мембрана бетіне, оның қасиеттеріне және өкпе капиллярларындағы қан көлеміне тәуелді."
        ],
        "id": "patient-07-stage-3"
      }
    ]
  },
  {
    "title": [
      "Раздел 3: При вдохе давление в плевральной полости стало более отрицательным",
      "Module 3: Pleural pressure becomes more negative during inspiration",
      "3-бөлім: Дем алғанда плевра қысымы терісірек болды"
    ],
    "stages": [
      {
        "title": [
          "Исходные данные",
          "Initial findings",
          "Бастапқы деректер"
        ],
        "question": [
          "При вдохе давление в плевральной полости стало более отрицательным. Что происходит с транспульмональным давлением?",
          "Pleural pressure becomes more negative during inspiration. What happens to transpulmonary pressure?",
          "Дем алғанда плевра қысымы терісірек болды. Транспульмоналдық қысым қалай өзгереді?"
        ],
        "options": [
          [
            "Возрастает",
            "Снижается",
            "Остаётся нулевым"
          ],
          [
            "Increases",
            "Decreases",
            "Remains zero"
          ],
          [
            "Артады",
            "Азаяды",
            "Нөлге тең"
          ]
        ],
        "correct": 0,
        "why": [
          "Ptp = Palv − Ppl; снижение Ppl увеличивает растягивающее давление.",
          "Ptp = Palv − Ppl; снижение Ppl увеличивает растягивающее давление.",
          "Ptp = Palv − Ppl; снижение Ppl увеличивает растягивающее давление."
        ],
        "id": "patient-08-stage-1"
      },
      {
        "title": [
          "Механизм",
          "Mechanism",
          "Механизм"
        ],
        "question": [
          "Как определяется транспульмональное давление?",
          "How is transpulmonary pressure defined?",
          "Транспульмоналдық қысым қалай анықталады?"
        ],
        "options": [
          [
            "Pальв − Pплевр",
            "Pплевр − Pальв",
            "Pатм − Pальв"
          ],
          [
            "Palveolar − Ppleural",
            "Ppleural − Palveolar",
            "Patmospheric − Palveolar"
          ],
          [
            "Pальв − Pплевра",
            "Pплевра − Pальв",
            "Pатм − Pальв"
          ]
        ],
        "correct": 0,
        "why": [
          "Транспульмональное давление — разность альвеолярного и плеврального давлений.",
          "Transpulmonary pressure is alveolar minus pleural pressure.",
          "Транспульмоналдық қысым — альвеолалық және плевралық қысым айырмасы."
        ],
        "id": "patient-08-stage-2"
      },
      {
        "title": [
          "Интерпретация физиологического механизма",
          "Mechanistic interpretation",
          "Физиологиялық механизмді түсіндіру"
        ],
        "question": [
          "Как изменится транспульмональное давление при вдохе, если альвеолярное давление −1, а плевральное −7 см H₂O?",
          "During inspiration, what is transpulmonary pressure if alveolar pressure is −1 and pleural pressure −7 cm H₂O?",
          "Дем алғанда альвеолалық қысым −1, плевралық қысым −7 см су бағ. болса, транспульмоналдық қысым қанша?"
        ],
        "options": [
          [
            "6 см H₂O",
            "−8 см H₂O",
            "−6 см H₂O"
          ],
          [
            "6 cm H₂O",
            "−8 cm H₂O",
            "−6 cm H₂O"
          ],
          [
            "6 см су бағ.",
            "−8 см су бағ.",
            "−6 см су бағ."
          ]
        ],
        "correct": 0,
        "why": [
          "Ptp=Palv−Ppl=−1−(−7)=6 см H₂O; положительное растягивающее давление поддерживает раскрытие лёгких.",
          "Ptp=Palv−Ppl=−1−(−7)=6 cm H₂O; the positive distending pressure helps keep lungs expanded.",
          "Ptp=Palv−Ppl=−1−(−7)=6 см су бағ.; оң керу қысымы өкпенің ашық қалуына ықпал етеді."
        ],
        "id": "patient-08-stage-3"
      }
    ]
  },
  {
    "title": [
      "Раздел 4: Повреждение диафрагмального нерва",
      "Module 4: Phrenic nerve injury",
      "4-бөлім: Көкет жүйкесінің зақымдануы"
    ],
    "stages": [
      {
        "title": [
          "Исходные данные",
          "Initial findings",
          "Бастапқы деректер"
        ],
        "question": [
          "Повреждение диафрагмального нерва. Какая функция нарушается прежде всего?",
          "Phrenic nerve injury. Which function is primarily impaired?",
          "Көкет жүйкесінің зақымдануы. Ең алдымен қандай қызмет бұзылады?"
        ],
        "options": [
          [
            "Активный вдох",
            "Пассивный выдох",
            "Диффузия через мембрану"
          ],
          [
            "Active inspiration",
            "Passive expiration",
            "Membrane diffusion"
          ],
          [
            "Белсенді дем алу",
            "Пассивті дем шығару",
            "Мембраналық диффузия"
          ]
        ],
        "correct": 0,
        "why": [
          "Диафрагма — основная мышца спокойного вдоха.",
          "Диафрагма — основная мышца спокойного вдоха.",
          "Диафрагма — основная мышца спокойного вдоха."
        ],
        "id": "patient-09-stage-1"
      },
      {
        "title": [
          "Механизм",
          "Mechanism",
          "Механизм"
        ],
        "question": [
          "Какой нерв обеспечивает основную двигательную иннервацию диафрагмы?",
          "Which nerve provides primary motor supply to the diaphragm?",
          "Диафрагманы негізінен қай жүйке қимылдатады?"
        ],
        "options": [
          [
            "Диафрагмальный нерв C3–C5",
            "Блуждающий нерв",
            "Лицевой нерв"
          ],
          [
            "Phrenic nerve C3–C5",
            "Vagus nerve",
            "Facial nerve"
          ],
          [
            "Көкет жүйкесі C3–C5",
            "Кезбе жүйке",
            "Бет жүйкесі"
          ]
        ],
        "correct": 0,
        "why": [
          "Мотонейроны диафрагмы происходят преимущественно из сегментов C3–C5.",
          "Diaphragmatic motor neurons arise chiefly from C3–C5.",
          "Көкет мотонейрондары негізінен C3–C5 сегменттерінен шығады."
        ],
        "id": "patient-09-stage-2"
      },
      {
        "title": [
          "Интерпретация физиологического механизма",
          "Mechanistic interpretation",
          "Физиологиялық механизмді түсіндіру"
        ],
        "question": [
          "Какой результат наиболее вероятен при двустороннем параличе диафрагмы?",
          "What is most likely with bilateral diaphragmatic paralysis?",
          "Көкеттің екі жақты салдануында не ықтимал?"
        ],
        "options": [
          [
            "Снижение инспираторной силы и ухудшение вентиляции лёжа",
            "Увеличение инспираторной силы",
            "Полное отсутствие работы вспомогательных мышц"
          ],
          [
            "Reduced inspiratory strength and worse supine ventilation",
            "Increased inspiratory strength",
            "Complete loss of accessory muscle function"
          ],
          [
            "Дем алу күшінің азаюы және жатқанда вентиляцияның нашарлауы",
            "Дем алу күшінің артуы",
            "Қосымша бұлшықеттер қызметінің толық жойылуы"
          ]
        ],
        "correct": 0,
        "why": [
          "Диафрагма — основная мышца спокойного вдоха; в положении лёжа её слабость особенно заметна.",
          "The diaphragm is the main quiet-inspiration muscle; weakness is particularly evident when supine.",
          "Көкет тыныш дем алудың негізгі бұлшықеті; әлсіздігі жатқанда айқын көрінеді."
        ],
        "id": "patient-09-stage-3"
      }
    ]
  },
  {
    "title": [
      "Раздел 5: Пневмоторакс и исчезновение отрицательного плеврального давления",
      "Module 5: Pneumothorax and loss of negative pleural pressure",
      "5-бөлім: Пневмоторакс және теріс плевра қысымының жоғалуы"
    ],
    "stages": [
      {
        "title": [
          "Исходные данные",
          "Initial findings",
          "Бастапқы деректер"
        ],
        "question": [
          "Пневмоторакс и исчезновение отрицательного плеврального давления. Почему лёгкое стремится спадаться?",
          "Pneumothorax and loss of negative pleural pressure. Why does the lung tend to collapse?",
          "Пневмоторакс және теріс плевра қысымының жоғалуы. Өкпе неге семіп қалады?"
        ],
        "options": [
          [
            "Эластическая отдача",
            "Рост сурфактанта",
            "Усиление кровотока"
          ],
          [
            "Elastic recoil",
            "More surfactant",
            "More blood flow"
          ],
          [
            "Серпімді кері тартылу",
            "Сурфактант артуы",
            "Қан ағысының артуы"
          ]
        ],
        "correct": 0,
        "why": [
          "При утрате транспульмонального градиента преобладает эластическая отдача.",
          "При утрате транспульмонального градиента преобладает эластическая отдача.",
          "При утрате транспульмонального градиента преобладает эластическая отдача."
        ],
        "id": "patient-10-stage-1"
      },
      {
        "title": [
          "Механизм",
          "Mechanism",
          "Механизм"
        ],
        "question": [
          "Почему при открытом пневмотораксе уменьшается транспульмональное давление?",
          "Why does transpulmonary pressure fall in an open pneumothorax?",
          "Ашық пневмоторакста транспульмоналдық қысым неге азаяды?"
        ],
        "options": [
          [
            "Плевральное давление приближается к атмосферному",
            "Увеличивается синтез сурфактанта",
            "Растёт внутрилёгочный объём крови"
          ],
          [
            "Pleural pressure approaches atmospheric pressure",
            "Surfactant synthesis increases",
            "Pulmonary blood volume rises"
          ],
          [
            "Плевра қысымы атмосфералық қысымға жақындайды",
            "Сурфактант синтезі артады",
            "Өкпедегі қан көлемі артады"
          ]
        ],
        "correct": 0,
        "why": [
          "При сообщении с атмосферой исчезает обычное отрицательное плевральное давление.",
          "Communication with the atmosphere abolishes normal negative pleural pressure.",
          "Атмосферамен байланысқанда плевраның қалыпты теріс қысымы жоғалады."
        ],
        "id": "patient-10-stage-2"
      },
      {
        "title": [
          "Интерпретация физиологического механизма",
          "Mechanistic interpretation",
          "Физиологиялық механизмді түсіндіру"
        ],
        "question": [
          "Почему при открытом пневмотораксе поражённое лёгкое спадается?",
          "Why does the affected lung collapse in an open pneumothorax?",
          "Ашық пневмоторакста зақымдалған өкпе неге солады?"
        ],
        "options": [
          [
            "Утрата нормального транспульмонального растягивающего давления",
            "Повышение количества сурфактанта",
            "Рост отрицательного плеврального давления"
          ],
          [
            "Loss of normal transpulmonary distending pressure",
            "Increased surfactant amount",
            "More negative pleural pressure"
          ],
          [
            "Қалыпты транспульмоналдық керу қысымының жойылуы",
            "Сурфактант мөлшерінің артуы",
            "Плевралық қысымның терістене түсуі"
          ]
        ],
        "correct": 0,
        "why": [
          "При сообщении плевры с атмосферой плевральное давление приближается к атмосферному и эластическая отдача уменьшает объём лёгкого.",
          "When the pleural space communicates with air, pleural pressure approaches atmospheric and elastic recoil reduces lung volume.",
          "Плевра қуысы атмосферамен қатынасқанда қысым атмосфералыққа жақындап, серпімді кері тартылу өкпе көлемін азайтады."
        ],
        "id": "patient-10-stage-3"
      }
    ]
  },
  {
    "title": [
      "Раздел 6: Бронх сузился вдвое при ламинарном потоке",
      "Module 6: Airway radius halves under laminar flow",
      "6-бөлім: Ламинар ағын кезінде бронх радиусы екі есе азайды"
    ],
    "stages": [
      {
        "title": [
          "Исходные данные",
          "Initial findings",
          "Бастапқы деректер"
        ],
        "question": [
          "Бронх сузился вдвое при ламинарном потоке. Во сколько раз возрастает сопротивление в модели Пуазейля?",
          "Airway radius halves under laminar flow. By what factor does Poiseuille resistance rise?",
          "Ламинар ағын кезінде бронх радиусы екі есе азайды. Пуазейль үлгісінде кедергі неше есе артады?"
        ],
        "options": [
          [
            "В 16 раз",
            "В 4 раза",
            "В 2 раза"
          ],
          [
            "16-fold",
            "4-fold",
            "2-fold"
          ],
          [
            "16 есе",
            "4 есе",
            "2 есе"
          ]
        ],
        "correct": 0,
        "why": [
          "R ∝ 1/r⁴, поэтому (2)⁴ = 16.",
          "R ∝ 1/r⁴, поэтому (2)⁴ = 16.",
          "R ∝ 1/r⁴, поэтому (2)⁴ = 16."
        ],
        "id": "patient-11-stage-1"
      },
      {
        "title": [
          "Механизм",
          "Mechanism",
          "Механизм"
        ],
        "question": [
          "Какое допущение требуется для закона Пуазейля?",
          "What assumption is required for Poiseuille's law?",
          "Пуазейль заңы үшін қандай шарт қажет?"
        ],
        "options": [
          [
            "Ламинарный поток в жёсткой цилиндрической трубке",
            "Турбулентный поток в ветвящемся бронхе",
            "Сжимаемый газ при изменяющемся радиусе"
          ],
          [
            "Laminar flow in a rigid cylindrical tube",
            "Turbulent flow in branching airways",
            "Compressible gas with changing radius"
          ],
          [
            "Қатты цилиндр түтіктегі ламинар ағыс",
            "Тармақталған бронхтағы турбулентті ағыс",
            "Радиусы өзгеретін сығылатын газ"
          ]
        ],
        "correct": 0,
        "why": [
          "Зависимость R∝r⁻⁴ справедлива для идеализированного ламинарного течения.",
          "The R∝r⁻⁴ relation assumes idealised laminar flow.",
          "R∝r⁻⁴ қатынасы идеалданған ламинар ағысқа қатысты."
        ],
        "id": "patient-11-stage-2"
      },
      {
        "title": [
          "Интерпретация физиологического механизма",
          "Mechanistic interpretation",
          "Физиологиялық механизмді түсіндіру"
        ],
        "question": [
          "При прочих равных радиус бронха уменьшился вдвое. Во сколько раз возрастёт сопротивление при ламинарном течении?",
          "All else equal, bronchial radius halves. By what factor does resistance rise for laminar flow?",
          "Басқа жағдайлар тұрақты, бронх радиусы екі есе азайды. Ламинарлық ағымда кедергі қанша есе өседі?"
        ],
        "options": [
          [
            "В 16 раз",
            "В 4 раза",
            "В 2 раза"
          ],
          [
            "16-fold",
            "4-fold",
            "2-fold"
          ],
          [
            "16 есе",
            "4 есе",
            "2 есе"
          ]
        ],
        "correct": 0,
        "why": [
          "По идеализированному закону Пуазейля R∝1/r⁴, поэтому (2)⁴=16; реальный бронхиальный поток часто не строго ламинарен.",
          "Idealized Poiseuille relation R∝1/r⁴ yields 2⁴=16; actual airway flow is not always laminar.",
          "Идеал Пуазейль заңы бойынша R∝1/r⁴, сондықтан 2⁴=16; нақты бронх ағымы әрқашан ламинарлық емес."
        ],
        "id": "patient-11-stage-3"
      }
    ]
  },
  {
    "title": [
      "Раздел 7: Спирометрия: VT 0,5 л, IRV 3 л, ERV 1 л",
      "Module 7: Spirometry: VT 0.5 L, IRV 3 L, ERV 1 L",
      "7-бөлім: Спирометрия: VT 0,5 л, IRV 3 л, ERV 1 л"
    ],
    "stages": [
      {
        "title": [
          "Исходные данные",
          "Initial findings",
          "Бастапқы деректер"
        ],
        "question": [
          "Спирометрия: VT 0,5 л, IRV 3 л, ERV 1 л. Рассчитайте жизненную ёмкость",
          "Spirometry: VT 0.5 L, IRV 3 L, ERV 1 L. Calculate vital capacity",
          "Спирометрия: VT 0,5 л, IRV 3 л, ERV 1 л. Өкпенің тіршілік сыйымдылығын есептеңіз"
        ],
        "options": [
          [
            "4,5 л",
            "3,5 л",
            "5,5 л"
          ],
          [
            "4.5 L",
            "3.5 L",
            "5.5 L"
          ],
          [
            "4,5 л",
            "3,5 л",
            "5,5 л"
          ]
        ],
        "correct": 0,
        "why": [
          "VC = IRV + VT + ERV = 3 + 0,5 + 1 = 4,5 л.",
          "VC = IRV + VT + ERV = 3 + 0,5 + 1 = 4,5 л.",
          "VC = IRV + VT + ERV = 3 + 0,5 + 1 = 4,5 л."
        ],
        "id": "patient-12-stage-1"
      },
      {
        "title": [
          "Механизм",
          "Mechanism",
          "Механизм"
        ],
        "question": [
          "Какой объём нельзя измерить простой спирометрией?",
          "Which volume cannot be measured by simple spirometry?",
          "Қарапайым спирометриямен қай көлем өлшенбейді?"
        ],
        "options": [
          [
            "Остаточный объём",
            "Резервный объём вдоха",
            "Дыхательный объём"
          ],
          [
            "Residual volume",
            "Inspiratory reserve volume",
            "Tidal volume"
          ],
          [
            "Қалдық көлем",
            "Дем алудың резервтік көлемі",
            "Тыныс көлемі"
          ]
        ],
        "correct": 0,
        "why": [
          "Остаточный объём остаётся после максимального выдоха и не регистрируется простой спирометрией.",
          "Residual volume remains after maximal expiration and is not measured by simple spirometry.",
          "Қалдық көлем ең терең дем шығарудан кейін қалады, қарапайым спирометриямен өлшенбейді."
        ],
        "id": "patient-12-stage-2"
      },
      {
        "title": [
          "Интерпретация физиологического механизма",
          "Mechanistic interpretation",
          "Физиологиялық механизмді түсіндіру"
        ],
        "question": [
          "Если VT=0,5 л, IRV=3 л и ERV=1 л, чему равна жизненная ёмкость лёгких?",
          "If VT=0.5 L, IRV=3 L and ERV=1 L, what is vital capacity?",
          "VT=0,5 л, IRV=3 л, ERV=1 л болса, өкпенің тіршілік сыйымдылығы қанша?"
        ],
        "options": [
          [
            "4,5 л",
            "3,5 л",
            "5,5 л"
          ],
          [
            "4.5 L",
            "3.5 L",
            "5.5 L"
          ],
          [
            "4,5 л",
            "3,5 л",
            "5,5 л"
          ]
        ],
        "correct": 0,
        "why": [
          "VC=IRV+VT+ERV=3+0,5+1=4,5 л; остаточный объём в VC не входит.",
          "VC=IRV+VT+ERV=3+0.5+1=4.5 L; residual volume is excluded.",
          "VC=IRV+VT+ERV=3+0,5+1=4,5 л; қалдық көлем VC құрамына кірмейді."
        ],
        "id": "patient-12-stage-3"
      }
    ]
  },
  {
    "title": [
      "Раздел 8: VT 400 мл, VD 150 мл, f 16/мин",
      "Module 8: VT 400 mL, VD 150 mL, f 16/min",
      "8-бөлім: VT 400 мл, VD 150 мл, f 16/мин"
    ],
    "stages": [
      {
        "title": [
          "Исходные данные",
          "Initial findings",
          "Бастапқы деректер"
        ],
        "question": [
          "VT 400 мл, VD 150 мл, f 16/мин. Найдите альвеолярную вентиляцию",
          "VT 400 mL, VD 150 mL, f 16/min. Calculate alveolar ventilation",
          "VT 400 мл, VD 150 мл, f 16/мин. Альвеолалық вентиляцияны есептеңіз"
        ],
        "options": [
          [
            "4 л/мин",
            "6,4 л/мин",
            "2,4 л/мин"
          ],
          [
            "4 L/min",
            "6.4 L/min",
            "2.4 L/min"
          ],
          [
            "4 л/мин",
            "6,4 л/мин",
            "2,4 л/мин"
          ]
        ],
        "correct": 0,
        "why": [
          "VA = (400 − 150) × 16 / 1000 = 4 л/мин.",
          "VA = (400 − 150) × 16 / 1000 = 4 л/мин.",
          "VA = (400 − 150) × 16 / 1000 = 4 л/мин."
        ],
        "id": "patient-13-stage-1"
      },
      {
        "title": [
          "Механизм",
          "Mechanism",
          "Механизм"
        ],
        "question": [
          "Что произойдёт с VA при увеличении мёртвого пространства и неизменных VT и f?",
          "What happens to VA if dead space rises at unchanged VT and f?",
          "VT және f тұрақты болып, өлі кеңістік артса VA қалай өзгереді?"
        ],
        "options": [
          [
            "Снизится",
            "Возрастёт",
            "Не изменится"
          ],
          [
            "Falls",
            "Rises",
            "Unchanged"
          ],
          [
            "Төмендейді",
            "Артады",
            "Өзгермейді"
          ]
        ],
        "correct": 0,
        "why": [
          "VA=(VT−VD)×f, поэтому увеличение VD снижает эффективную вентиляцию.",
          "VA=(VT−VD)×f, so greater VD reduces effective ventilation.",
          "VA=(VT−VD)×f, сондықтан VD артса тиімді вентиляция төмендейді."
        ],
        "id": "patient-13-stage-2"
      },
      {
        "title": [
          "Интерпретация физиологического механизма",
          "Mechanistic interpretation",
          "Физиологиялық механизмді түсіндіру"
        ],
        "question": [
          "При VT 400 мл, VD 150 мл, f 16/мин чему равна альвеолярная вентиляция?",
          "At VT 400 mL, VD 150 mL, rate 16/min, what is alveolar ventilation?",
          "VT 400 мл, VD 150 мл, жиілік 16/мин болса, альвеолалық вентиляция қанша?"
        ],
        "options": [
          [
            "4,0 л/мин",
            "6,4 л/мин",
            "2,4 л/мин"
          ],
          [
            "4.0 L/min",
            "6.4 L/min",
            "2.4 L/min"
          ],
          [
            "4,0 л/мин",
            "6,4 л/мин",
            "2,4 л/мин"
          ]
        ],
        "correct": 0,
        "why": [
          "(400−150)×16=4000 мл/мин. Увеличение доли мёртвого пространства снижает эффективность дыхания.",
          "(400−150)×16=4000 mL/min. Higher dead-space fraction reduces ventilatory efficiency.",
          "(400−150)×16=4000 мл/мин. Өлі кеңістік үлесінің өсуі вентиляция тиімділігін төмендетеді."
        ],
        "id": "patient-13-stage-3"
      }
    ]
  },
  {
    "title": [
      "Раздел 10: На высоте PB 560 мм рт. ст., FiO2 0,21",
      "Module 10: At altitude PB 560 mmHg, FiO2 0.21",
      "10-бөлім: Биіктікте PB 560 мм сын. бағ., FiO2 0,21"
    ],
    "stages": [
      {
        "title": [
          "Исходные данные",
          "Initial findings",
          "Бастапқы деректер"
        ],
        "question": [
          "На высоте PB 560 мм рт. ст., FiO2 0,21. Найдите PIO2 при PH2O 47 мм рт. ст.",
          "At altitude PB 560 mmHg, FiO2 0.21. Calculate PIO2 with PH2O 47 mmHg",
          "Биіктікте PB 560 мм сын. бағ., FiO2 0,21. PH2O 47 болса PIO2 есептеңіз"
        ],
        "options": [
          [
            "107,7 мм рт. ст.",
            "117,6 мм рт. ст.",
            "159,6 мм рт. ст."
          ],
          [
            "107.7 mmHg",
            "117.6 mmHg",
            "159.6 mmHg"
          ],
          [
            "107,7 мм сын. бағ.",
            "117,6 мм сын. бағ.",
            "159,6 мм сын. бағ."
          ]
        ],
        "correct": 0,
        "why": [
          "PIO2 = (560 − 47) × 0,21 = 107,73 мм рт. ст.",
          "PIO2 = (560 − 47) × 0,21 = 107,73 мм рт. ст.",
          "PIO2 = (560 − 47) × 0,21 = 107,73 мм рт. ст."
        ],
        "id": "patient-14-stage-1"
      },
      {
        "title": [
          "Механизм",
          "Mechanism",
          "Механизм"
        ],
        "question": [
          "Почему при подъёме на высоту падает PIO₂?",
          "Why does inspired oxygen pressure fall at altitude?",
          "Биіктікте деммен кіретін O₂ қысымы неге төмендейді?"
        ],
        "options": [
          [
            "Падает барометрическое давление",
            "Доля O₂ всегда падает до 10%",
            "Вода перестаёт испаряться"
          ],
          [
            "Barometric pressure decreases",
            "Oxygen fraction always falls to 10%",
            "Water stops evaporating"
          ],
          [
            "Барометрлік қысым төмендейді",
            "O₂ үлесі міндетті түрде 10%-ға түседі",
            "Су булануы тоқтайды"
          ]
        ],
        "correct": 0,
        "why": [
          "При почти постоянной FiO₂ снижение PB уменьшает FiO₂×(PB−47).",
          "At near-constant FiO₂, lower PB reduces FiO₂×(PB−47).",
          "FiO₂ шамамен тұрақты болғанда PB төмендеуі FiO₂×(PB−47) азайтады."
        ],
        "id": "patient-14-stage-2"
      },
      {
        "title": [
          "Интерпретация физиологического механизма",
          "Mechanistic interpretation",
          "Физиологиялық механизмді түсіндіру"
        ],
        "question": [
          "При PB=560 мм рт. ст., FiO₂=0,21 и PH₂O=47 мм рт. ст. чему приблизительно равно PIO₂?",
          "At PB=560 mmHg, FiO₂=0.21 and PH₂O=47 mmHg, approximately what is PIO₂?",
          "PB=560, FiO₂=0,21 және PH₂O=47 мм сын. бағ. болса, PIO₂ шамамен қанша?"
        ],
        "options": [
          [
            "108 мм рт. ст.",
            "118 мм рт. ст.",
            "150 мм рт. ст."
          ],
          [
            "108 mmHg",
            "118 mmHg",
            "150 mmHg"
          ],
          [
            "108 мм сын. бағ.",
            "118 мм сын. бағ.",
            "150 мм сын. бағ."
          ]
        ],
        "correct": 0,
        "why": [
          "PIO₂=(PB−47)×FiO₂=(560−47)×0,21≈108 мм рт. ст.",
          "PIO₂=(PB−47)×FiO₂=(560−47)×0.21≈108 mmHg.",
          "PIO₂=(PB−47)×FiO₂=(560−47)×0,21≈108 мм сын. бағ."
        ],
        "id": "patient-14-stage-3"
      }
    ]
  },
  {
    "title": [
      "Раздел 11: При интерстициальном фиброзе утолщён диффузионный барьер",
      "Module 11: Interstitial fibrosis thickens the diffusion barrier",
      "11-бөлім: Интерстициалдық фиброзда диффузиялық тосқауыл қалыңдайды"
    ],
    "stages": [
      {
        "title": [
          "Исходные данные",
          "Initial findings",
          "Бастапқы деректер"
        ],
        "question": [
          "При интерстициальном фиброзе утолщён диффузионный барьер. Как меняется поток O2 по закону Фика?",
          "Interstitial fibrosis thickens the diffusion barrier. How does O2 flux change under Fick law?",
          "Интерстициалдық фиброзда диффузиялық тосқауыл қалыңдайды. Фик заңы бойынша O2 ағыны қалай өзгереді?"
        ],
        "options": [
          [
            "Уменьшается",
            "Увеличивается",
            "Не зависит от толщины"
          ],
          [
            "Decreases",
            "Increases",
            "Independent of thickness"
          ],
          [
            "Төмендейді",
            "Артады",
            "Қалыңдыққа тәуелсіз"
          ]
        ],
        "correct": 0,
        "why": [
          "Поток обратно пропорционален толщине мембраны.",
          "Поток обратно пропорционален толщине мембраны.",
          "Поток обратно пропорционален толщине мембраны."
        ],
        "id": "patient-15-stage-1"
      },
      {
        "title": [
          "Механизм",
          "Mechanism",
          "Механизм"
        ],
        "question": [
          "Какое изменение ускоряет диффузию по закону Фика?",
          "Which change increases diffusion by Fick's law?",
          "Фик заңы бойынша диффузияны не күшейтеді?"
        ],
        "options": [
          [
            "Увеличение площади мембраны",
            "Утолщение мембраны",
            "Снижение градиента давления"
          ],
          [
            "Increasing membrane area",
            "Thickening the membrane",
            "Reducing the pressure gradient"
          ],
          [
            "Мембрана ауданын арттыру",
            "Мембрананы қалыңдату",
            "Қысым градиентін азайту"
          ]
        ],
        "correct": 0,
        "why": [
          "Поток пропорционален площади и градиенту, обратно пропорционален толщине.",
          "Flux is proportional to area and gradient, and inversely proportional to thickness.",
          "Ағын аудан мен градиентке тура, қалыңдыққа кері пропорционал."
        ],
        "id": "patient-15-stage-2"
      },
      {
        "title": [
          "Интерпретация физиологического механизма",
          "Mechanistic interpretation",
          "Физиологиялық механизмді түсіндіру"
        ],
        "question": [
          "Какое изменение чаще всего сопровождает утолщение аэрогематического барьера при фиброзе?",
          "Which change commonly accompanies thickening of the alveolar-capillary barrier in fibrosis?",
          "Фиброзда альвеола-капиллярлық тосқауыл қалыңдағанда қандай өзгеріс жиі байқалады?"
        ],
        "options": [
          [
            "Снижение DLCO",
            "Повышение DLCO",
            "Полное прекращение лёгочного кровотока"
          ],
          [
            "Reduced DLCO",
            "Increased DLCO",
            "Complete cessation of pulmonary blood flow"
          ],
          [
            "DLCO төмендеуі",
            "DLCO артуы",
            "Өкпелік қан ағымының толық тоқтауы"
          ]
        ],
        "correct": 0,
        "why": [
          "Увеличение толщины барьера затрудняет диффузию; DLCO может снижаться и по другим причинам.",
          "Greater barrier thickness impedes diffusion; DLCO can also fall for other reasons.",
          "Тосқауыл қалыңдауы диффузияны қиындатады; DLCO басқа себептерден де төмендеуі мүмкін."
        ],
        "id": "patient-15-stage-3"
      }
    ]
  },
  {
    "title": [
      "Раздел 12: mPAP 25, PAWP 10 мм рт. ст., CO 5 л/мин",
      "Module 12: mPAP 25, PAWP 10 mmHg, CO 5 L/min",
      "12-бөлім: mPAP 25, PAWP 10, CO 5 л/мин"
    ],
    "stages": [
      {
        "title": [
          "Исходные данные",
          "Initial findings",
          "Бастапқы деректер"
        ],
        "question": [
          "mPAP 25, PAWP 10 мм рт. ст., CO 5 л/мин. Рассчитайте PVR",
          "mPAP 25, PAWP 10 mmHg, CO 5 L/min. Calculate PVR",
          "mPAP 25, PAWP 10, CO 5 л/мин. PVR есептеңіз"
        ],
        "options": [
          [
            "3 WU",
            "5 WU",
            "1 WU"
          ],
          [
            "3 WU",
            "5 WU",
            "1 WU"
          ],
          [
            "3 WU",
            "5 WU",
            "1 WU"
          ]
        ],
        "correct": 0,
        "why": [
          "PVR = (25 − 10)/5 = 3 единицы Вуда.",
          "PVR = (25 − 10)/5 = 3 единицы Вуда.",
          "PVR = (25 − 10)/5 = 3 единицы Вуда."
        ],
        "id": "patient-16-stage-1"
      },
      {
        "title": [
          "Механизм",
          "Mechanism",
          "Механизм"
        ],
        "question": [
          "В каких единицах обычно выражают PVR в формуле (mPAP−PAWP)/CO?",
          "What units result from (mPAP−PAWP)/CO for PVR?",
          "PVR=(mPAP−PAWP)/CO өлшем бірлігі қандай?"
        ],
        "options": [
          [
            "Единицы Вуда",
            "Литры в минуту",
            "Миллиметры ртутного столба"
          ],
          [
            "Wood units",
            "Litres per minute",
            "Millimetres of mercury"
          ],
          [
            "Вуд бірліктері",
            "Литр/мин",
            "Мм сын. бағ."
          ]
        ],
        "correct": 0,
        "why": [
          "мм рт. ст. делят на л/мин, получая единицы Вуда.",
          "mmHg divided by L/min yields Wood units.",
          "Мм сын. бағ.-ты л/мин-қа бөлгенде Вуд бірліктері шығады."
        ],
        "id": "patient-16-stage-2"
      },
      {
        "title": [
          "Интерпретация физиологического механизма",
          "Mechanistic interpretation",
          "Физиологиялық механизмді түсіндіру"
        ],
        "question": [
          "При mPAP=25, PAWP=10 мм рт. ст. и CO=5 л/мин каково PVR?",
          "For mPAP=25, PAWP=10 mmHg and CO=5 L/min, what is PVR?",
          "mPAP=25, PAWP=10 мм сын. бағ. және CO=5 л/мин болса, PVR қанша?"
        ],
        "options": [
          [
            "3 единицы Вуда",
            "5 единиц Вуда",
            "0,33 единицы Вуда"
          ],
          [
            "3 Wood units",
            "5 Wood units",
            "0.33 Wood units"
          ],
          [
            "3 Вуд бірлігі",
            "5 Вуд бірлігі",
            "0,33 Вуд бірлігі"
          ]
        ],
        "correct": 0,
        "why": [
          "PVR=(mPAP−PAWP)/CO=(25−10)/5=3 единицы Вуда.",
          "PVR=(mPAP−PAWP)/CO=(25−10)/5=3 Wood units.",
          "PVR=(mPAP−PAWP)/CO=(25−10)/5=3 Вуд бірлігі."
        ],
        "id": "patient-16-stage-3"
      }
    ]
  },
  {
    "title": [
      "Раздел 15: PaCO2 60 мм рт. ст., HCO3− 24 ммоль/л",
      "Module 15: PaCO2 60 mmHg, HCO3− 24 mmol/L",
      "15-бөлім: PaCO2 60, HCO3− 24"
    ],
    "stages": [
      {
        "title": [
          "Исходные данные",
          "Initial findings",
          "Бастапқы деректер"
        ],
        "question": [
          "PaCO2 60 мм рт. ст., HCO3− 24 ммоль/л. Как изменится pH при неизменном бикарбонате?",
          "PaCO2 60 mmHg, HCO3− 24 mmol/L. How will pH change if bicarbonate stays constant?",
          "PaCO2 60, HCO3− 24. Бикарбонат өзгермесе pH қалай өзгереді?"
        ],
        "options": [
          [
            "Снизится",
            "Повысится",
            "Не изменится"
          ],
          [
            "Falls",
            "Rises",
            "Unchanged"
          ],
          [
            "Төмендейді",
            "Жоғарылайды",
            "Өзгермейді"
          ]
        ],
        "correct": 0,
        "why": [
          "Рост PaCO2 уменьшает отношение HCO3−/(0,03×PaCO2).",
          "Рост PaCO2 уменьшает отношение HCO3−/(0,03×PaCO2).",
          "Рост PaCO2 уменьшает отношение HCO3−/(0,03×PaCO2)."
        ],
        "id": "patient-17-stage-1"
      },
      {
        "title": [
          "Механизм",
          "Mechanism",
          "Механизм"
        ],
        "question": [
          "Какая система быстрее всего изменяет PaCO₂?",
          "Which system can change PaCO₂ most rapidly?",
          "PaCO₂-ні ең жылдам қай жүйе өзгертеді?"
        ],
        "options": [
          [
            "Альвеолярная вентиляция",
            "Почечная экскреция бикарбоната",
            "Эритропоэз"
          ],
          [
            "Alveolar ventilation",
            "Renal bicarbonate excretion",
            "Erythropoiesis"
          ],
          [
            "Альвеолалық вентиляция",
            "Бүйрек арқылы бикарбонат шығару",
            "Эритропоэз"
          ]
        ],
        "correct": 0,
        "why": [
          "При постоянной продукции CO₂ PaCO₂ обратно пропорционально альвеолярной вентиляции.",
          "At constant CO₂ production PaCO₂ is inversely proportional to alveolar ventilation.",
          "CO₂ түзілуі тұрақты болса PaCO₂ альвеолалық вентиляцияға кері пропорционал."
        ],
        "id": "patient-17-stage-2"
      },
      {
        "title": [
          "Интерпретация физиологического механизма",
          "Mechanistic interpretation",
          "Физиологиялық механизмді түсіндіру"
        ],
        "question": [
          "При PaCO₂=60 мм рт. ст. и HCO₃⁻=24 ммоль/л какой pH получается по Хендерсону–Хассельбальху (pKa=6,1; коэффициент 0,03)?",
          "At PaCO₂=60 mmHg and HCO₃⁻=24 mmol/L, what pH follows Henderson–Hasselbalch (pKa=6.1, coefficient 0.03)?",
          "PaCO₂=60 мм сын. бағ., HCO₃⁻=24 ммоль/л болса, Хендерсон–Хассельбальх бойынша pH қанша (pKa=6,1; коэффициент 0,03)?"
        ],
        "options": [
          [
            "Около 7,22",
            "Около 7,40",
            "Около 7,60"
          ],
          [
            "About 7.22",
            "About 7.40",
            "About 7.60"
          ],
          [
            "Шамамен 7,22",
            "Шамамен 7,40",
            "Шамамен 7,60"
          ]
        ],
        "correct": 0,
        "why": [
          "pH=6,1+log₁₀(24/(0,03×60))≈7,22: ацидемия вследствие гиперкапнии.",
          "pH=6.1+log₁₀(24/(0.03×60))≈7.22: acidemia due to hypercapnia.",
          "pH=6,1+log₁₀(24/(0,03×60))≈7,22: гиперкапнияға байланысты ацидемия."
        ],
        "id": "patient-17-stage-3"
      }
    ]
  },
  {
    "title": [
      "Раздел 17: Седация угнетает дыхательные нейронные сети",
      "Module 17: Sedation depresses respiratory neural networks",
      "17-бөлім: Седация тыныс нейрондық желілерін тежейді"
    ],
    "stages": [
      {
        "title": [
          "Исходные данные",
          "Initial findings",
          "Бастапқы деректер"
        ],
        "question": [
          "Седация угнетает дыхательные нейронные сети. Какое первичное следствие гиповентиляции?",
          "Sedation depresses respiratory neural networks. What is the primary consequence of hypoventilation?",
          "Седация тыныс нейрондық желілерін тежейді. Гиповентиляцияның алғашқы салдары қандай?"
        ],
        "options": [
          [
            "Рост PaCO2",
            "Снижение PaCO2",
            "Рост альвеолярного PO2"
          ],
          [
            "Higher PaCO2",
            "Lower PaCO2",
            "Higher alveolar PO2"
          ],
          [
            "PaCO2 артады",
            "PaCO2 азаяды",
            "Альвеолалық PO2 артады"
          ]
        ],
        "correct": 0,
        "why": [
          "При неизменной продукции CO2 PaCO2 обратно пропорционален VA.",
          "При неизменной продукции CO2 PaCO2 обратно пропорционален VA.",
          "При неизменной продукции CO2 PaCO2 обратно пропорционален VA."
        ],
        "id": "patient-18-stage-1"
      },
      {
        "title": [
          "Механизм",
          "Mechanism",
          "Механизм"
        ],
        "question": [
          "Какая реакция наиболее непосредственно следует за угнетением дыхательного драйва?",
          "What follows most directly from suppressed respiratory drive?",
          "Тыныс драйвы бәсеңдегенде тікелей не болады?"
        ],
        "options": [
          [
            "Снижается альвеолярная вентиляция",
            "Увеличивается диффузионная площадь",
            "Уменьшается образование CO₂ во всех тканях"
          ],
          [
            "Alveolar ventilation decreases",
            "Diffusion area increases",
            "CO₂ production stops in all tissues"
          ],
          [
            "Альвеолалық вентиляция азаяды",
            "Диффузия ауданы артады",
            "Барлық тінде CO₂ түзілуі тоқтайды"
          ]
        ],
        "correct": 0,
        "why": [
          "Угнетение центрального драйва снижает вентиляцию и может повышать PaCO₂.",
          "Suppressed central drive lowers ventilation and can raise PaCO₂.",
          "Орталық драйв бәсеңдесе вентиляция азайып, PaCO₂ артуы мүмкін."
        ],
        "id": "patient-18-stage-2"
      },
      {
        "title": [
          "Интерпретация физиологического механизма",
          "Mechanistic interpretation",
          "Физиологиялық механизмді түсіндіру"
        ],
        "question": [
          "Как седация может повышать PaCO₂ при неизменной продукции CO₂?",
          "How can sedation raise PaCO₂ when CO₂ production stays constant?",
          "CO₂ түзілуі тұрақты болса, седация PaCO₂-ні қалай арттыруы мүмкін?"
        ],
        "options": [
          [
            "Снижая альвеолярную вентиляцию",
            "Повышая альвеолярную вентиляцию",
            "Увеличивая кислородную ёмкость гемоглобина"
          ],
          [
            "By reducing alveolar ventilation",
            "By increasing alveolar ventilation",
            "By increasing hemoglobin oxygen capacity"
          ],
          [
            "Альвеолалық вентиляцияны азайту арқылы",
            "Альвеолалық вентиляцияны арттыру арқылы",
            "Гемоглобиннің оттегі сыйымдылығын арттыру арқылы"
          ]
        ],
        "correct": 0,
        "why": [
          "PaCO₂ обратно пропорционально альвеолярной вентиляции при постоянной продукции CO₂.",
          "At constant CO₂ production, PaCO₂ is inversely related to alveolar ventilation.",
          "CO₂ түзілуі тұрақты болса, PaCO₂ альвеолалық вентиляцияға кері пропорционал."
        ],
        "id": "patient-18-stage-3"
      }
    ]
  },
  {
    "title": [
      "Раздел 18: При большом вдохе активируются рецепторы растяжения",
      "Module 18: Stretch receptors activate during a large inspiration",
      "18-бөлім: Терең дем алғанда созылу рецепторлары белсендіріледі"
    ],
    "stages": [
      {
        "title": [
          "Исходные данные",
          "Initial findings",
          "Бастапқы деректер"
        ],
        "question": [
          "При большом вдохе активируются рецепторы растяжения. Какой рефлекс ограничивает вдох?",
          "Stretch receptors activate during a large inspiration. Which reflex limits inspiration?",
          "Терең дем алғанда созылу рецепторлары белсендіріледі. Қай рефлекс дем алуды шектейді?"
        ],
        "options": [
          [
            "Геринга—Брейера",
            "Барорецепторный",
            "Зрачковый"
          ],
          [
            "Hering–Breuer",
            "Baroreceptor",
            "Pupillary"
          ],
          [
            "Геринг—Брейер",
            "Барорецепторлық",
            "Қарашықтық"
          ]
        ],
        "correct": 0,
        "why": [
          "Вагусная афферентация от медленно адаптирующихся рецепторов ограничивает вдох.",
          "Вагусная афферентация от медленно адаптирующихся рецепторов ограничивает вдох.",
          "Вагусная афферентация от медленно адаптирующихся рецепторов ограничивает вдох."
        ],
        "id": "patient-19-stage-1"
      },
      {
        "title": [
          "Механизм",
          "Mechanism",
          "Механизм"
        ],
        "question": [
          "По какому нерву идут афференты рецепторов растяжения лёгких?",
          "Which nerve carries lung stretch receptor afferents?",
          "Өкпенің созылу рецепторларының афференттері қай жүйкемен өтеді?"
        ],
        "options": [
          [
            "Блуждающий нерв",
            "Зрительный нерв",
            "Подъязычный нерв"
          ],
          [
            "Vagus nerve",
            "Optic nerve",
            "Hypoglossal nerve"
          ],
          [
            "Кезбе жүйке",
            "Көру жүйкесі",
            "Тіласты жүйкесі"
          ]
        ],
        "correct": 0,
        "why": [
          "Медленно адаптирующиеся рецепторы растяжения передают сигналы через вагус.",
          "Slowly adapting stretch receptors send afferents through the vagus.",
          "Баяу бейімделетін созылу рецепторлары сигналды кезбе жүйке арқылы береді."
        ],
        "id": "patient-19-stage-2"
      },
      {
        "title": [
          "Интерпретация физиологического механизма",
          "Mechanistic interpretation",
          "Физиологиялық механизмді түсіндіру"
        ],
        "question": [
          "Каков основной эффект выраженной активации медленно адаптирующихся рецепторов растяжения лёгких?",
          "What is the main effect of marked activation of slowly adapting pulmonary stretch receptors?",
          "Өкпенің баяу бейімделетін созылу рецепторлары қатты қозғанда негізгі әсер қандай?"
        ],
        "options": [
          [
            "Торможение дальнейшего вдоха через вагусные афференты",
            "Усиление вдоха через зрительный нерв",
            "Остановка перфузии лёгких"
          ],
          [
            "Inhibition of further inspiration via vagal afferents",
            "Increased inspiration via optic nerve",
            "Cessation of pulmonary perfusion"
          ],
          [
            "Кезбе жүйке афференттері арқылы дем алуды тежеу",
            "Көру жүйкесі арқылы дем алуды күшейту",
            "Өкпелік перфузияны тоқтату"
          ]
        ],
        "correct": 0,
        "why": [
          "Рефлекс Геринга—Брейера ограничивает перерастяжение; при спокойном дыхании взрослого его вклад обычно невелик.",
          "Hering–Breuer inflation reflex limits overdistension; its role in quiet adult breathing is usually small.",
          "Геринг–Брейер рефлексі шамадан тыс созылуды шектейді; ересектің тыныш тынысында үлесі әдетте аз."
        ],
        "id": "patient-19-stage-3"
      }
    ]
  },
  {
    "title": [
      "Раздел 19: PaO2 резко падает до 45 мм рт. ст.",
      "Module 19: PaO2 drops sharply to 45 mmHg",
      "19-бөлім: PaO2 45 мм сын. бағ. дейін төмендеді"
    ],
    "stages": [
      {
        "title": [
          "Исходные данные",
          "Initial findings",
          "Бастапқы деректер"
        ],
        "question": [
          "PaO2 резко падает до 45 мм рт. ст.. Какие рецепторы наиболее прямо реагируют?",
          "PaO2 drops sharply to 45 mmHg. Which receptors respond most directly?",
          "PaO2 45 мм сын. бағ. дейін төмендеді. Қай рецепторлар тікелей жауап береді?"
        ],
        "options": [
          [
            "Каротидные тельца",
            "Центральные хеморецепторы на PO2",
            "Мышечные веретёна"
          ],
          [
            "Carotid bodies",
            "Central PO2 chemoreceptors",
            "Muscle spindles"
          ],
          [
            "Каротид денешіктері",
            "Орталық PO2 хеморецепторлары",
            "Бұлшықет ұршықтары"
          ]
        ],
        "correct": 0,
        "why": [
          "Каротидные тельца чувствительны к снижению артериального PO2.",
          "Каротидные тельца чувствительны к снижению артериального PO2.",
          "Каротидные тельца чувствительны к снижению артериального PO2."
        ],
        "id": "patient-20-stage-1"
      },
      {
        "title": [
          "Механизм",
          "Mechanism",
          "Механизм"
        ],
        "question": [
          "Какие рецепторы непосредственно чувствительны к снижению PaO₂?",
          "Which receptors directly sense reduced PaO₂?",
          "PaO₂ төмендеуін тікелей қандай рецепторлар сезеді?"
        ],
        "options": [
          [
            "Периферические артериальные хеморецепторы",
            "Центральные рецепторы только к O₂",
            "Рецепторы растяжения диафрагмы"
          ],
          [
            "Peripheral arterial chemoreceptors",
            "Central receptors sensing only O₂",
            "Diaphragm stretch receptors"
          ],
          [
            "Шеткі артериялық хеморецепторлар",
            "Тек O₂ сезетін орталық рецепторлар",
            "Көкеттің созылу рецепторлары"
          ]
        ],
        "correct": 0,
        "why": [
          "Каротидные тельца особенно важны для быстрого ответа на гипоксемию.",
          "Carotid bodies are particularly important for rapid hypoxaemic responses.",
          "Каротид денешіктері гипоксемияға жылдам жауапта маңызды."
        ],
        "id": "patient-20-stage-2"
      },
      {
        "title": [
          "Интерпретация физиологического механизма",
          "Mechanistic interpretation",
          "Физиологиялық механизмді түсіндіру"
        ],
        "question": [
          "Какой периферический сенсор особенно активируется при PaO₂ 45 мм рт. ст.?",
          "Which peripheral sensor is strongly activated at PaO₂ 45 mmHg?",
          "PaO₂ 45 мм сын. бағ. кезінде қай шеткі сенсор айқын белсендіріледі?"
        ],
        "options": [
          [
            "Каротидное тельце",
            "Рецепторы растяжения лёгких",
            "Мышечные веретёна диафрагмы"
          ],
          [
            "Carotid body",
            "Pulmonary stretch receptors",
            "Diaphragm muscle spindles"
          ],
          [
            "Каротидтік денешік",
            "Өкпенің созылу рецепторлары",
            "Көкеттің бұлшықет ұршықтары"
          ]
        ],
        "correct": 0,
        "why": [
          "Каротидные тельца чувствительны к выраженному снижению артериального PO₂ и передают сигнал преимущественно по IX нерву.",
          "Carotid bodies respond to marked arterial PO₂ reduction and signal mainly via cranial nerve IX.",
          "Каротидтік денешіктер артериялық PO₂ айқын төмендеуіне жауап беріп, сигналды көбіне IX жүйке арқылы өткізеді."
        ],
        "id": "patient-20-stage-3"
      }
    ]
  },
  {
    "title": [
      "Раздел 20: Во время умеренной нагрузки VO2 1,5 л/мин, VE 45 л/мин",
      "Module 20: During exercise VO2 1.5 L/min, VE 45 L/min",
      "20-бөлім: Жүктемеде VO2 1,5 л/мин, VE 45 л/мин"
    ],
    "stages": [
      {
        "title": [
          "Исходные данные",
          "Initial findings",
          "Бастапқы деректер"
        ],
        "question": [
          "Во время умеренной нагрузки VO2 1,5 л/мин, VE 45 л/мин. Рассчитайте VE/VO2",
          "During exercise VO2 1.5 L/min, VE 45 L/min. Calculate VE/VO2",
          "Жүктемеде VO2 1,5 л/мин, VE 45 л/мин. VE/VO2 есептеңіз"
        ],
        "options": [
          [
            "30",
            "15",
            "45"
          ],
          [
            "30",
            "15",
            "45"
          ],
          [
            "30",
            "15",
            "45"
          ]
        ],
        "correct": 0,
        "why": [
          "45 / 1,5 = 30 л воздуха на литр потреблённого O2.",
          "45 / 1,5 = 30 л воздуха на литр потреблённого O2.",
          "45 / 1,5 = 30 л воздуха на литр потреблённого O2."
        ],
        "id": "patient-21-stage-1"
      },
      {
        "title": [
          "Механизм",
          "Mechanism",
          "Механизм"
        ],
        "question": [
          "Как вычисляют вентиляционный эквивалент кислорода?",
          "How is the ventilatory equivalent for oxygen calculated?",
          "Оттегінің вентиляциялық эквиваленті қалай есептеледі?"
        ],
        "options": [
          [
            "VE/VO₂",
            "VO₂/VE",
            "VE×VO₂"
          ],
          [
            "VE/VO₂",
            "VO₂/VE",
            "VE×VO₂"
          ],
          [
            "VE/VO₂",
            "VO₂/VE",
            "VE×VO₂"
          ]
        ],
        "correct": 0,
        "why": [
          "Вентиляционный эквивалент — отношение минутной вентиляции к потреблению O₂.",
          "The ventilatory equivalent is minute ventilation divided by O₂ uptake.",
          "Вентиляциялық эквивалент — минуттық вентиляцияның O₂ тұтынуға қатынасы."
        ],
        "id": "patient-21-stage-2"
      },
      {
        "title": [
          "Интерпретация физиологического механизма",
          "Mechanistic interpretation",
          "Физиологиялық механизмді түсіндіру"
        ],
        "question": [
          "При V̇O₂=1,5 л/мин и V̇E=45 л/мин чему равен вентиляционный эквивалент кислорода V̇E/V̇O₂?",
          "At V̇O₂=1.5 L/min and V̇E=45 L/min, what is V̇E/V̇O₂?",
          "V̇O₂=1,5 л/мин және V̇E=45 л/мин болса, V̇E/V̇O₂ қанша?"
        ],
        "options": [
          [
            "30",
            "45",
            "0,033"
          ],
          [
            "30",
            "45",
            "0.033"
          ],
          [
            "30",
            "45",
            "0,033"
          ]
        ],
        "correct": 0,
        "why": [
          "45/1,5=30; вентиляционный эквивалент отражает объём вентиляции на единицу потребления кислорода.",
          "45/1.5=30; the ventilatory equivalent expresses ventilation per unit oxygen uptake.",
          "45/1,5=30; вентиляциялық эквивалент оттегі тұтынудың бірлігіне келетін вентиляцияны көрсетеді."
        ],
        "id": "patient-21-stage-3"
      }
    ]
  },
  {
    "title": [
      "Раздел 22: Во время REM-сна уменьшается тонус мышц верхних дыхательных путей",
      "Module 22: Upper-airway muscle tone falls during REM sleep",
      "22-бөлім: REM ұйқыда жоғарғы тыныс жолы бұлшықет тонусы азаяды"
    ],
    "stages": [
      {
        "title": [
          "Исходные данные",
          "Initial findings",
          "Бастапқы деректер"
        ],
        "question": [
          "Во время REM-сна уменьшается тонус мышц верхних дыхательных путей. Какое последствие возможно у предрасположенного человека?",
          "Upper-airway muscle tone falls during REM sleep. What may happen in a predisposed person?",
          "REM ұйқыда жоғарғы тыныс жолы бұлшықет тонусы азаяды. Бейім адамда не болуы мүмкін?"
        ],
        "options": [
          [
            "Обструкция верхних дыхательных путей",
            "Увеличение DLCO",
            "Рост сурфактанта"
          ],
          [
            "Upper-airway obstruction",
            "Higher DLCO",
            "More surfactant"
          ],
          [
            "Жоғарғы тыныс жолының обструкциясы",
            "DLCO артады",
            "Сурфактант артады"
          ]
        ],
        "correct": 0,
        "why": [
          "Падение тонуса дилататоров глотки повышает её склонность к коллапсу.",
          "Падение тонуса дилататоров глотки повышает её склонность к коллапсу.",
          "Падение тонуса дилататоров глотки повышает её склонность к коллапсу."
        ],
        "id": "patient-22-stage-1"
      },
      {
        "title": [
          "Механизм",
          "Mechanism",
          "Механизм"
        ],
        "question": [
          "Почему REM-сон может способствовать обструкции верхних дыхательных путей?",
          "Why can REM sleep favour upper-airway obstruction?",
          "REM ұйқыда жоғарғы тыныс жолы неге бітелуі мүмкін?"
        ],
        "options": [
          [
            "Снижается активность мышц-дилататоров глотки",
            "Увеличивается жёсткость трахеи",
            "Исчезает потребность в кислороде"
          ],
          [
            "Pharyngeal dilator muscle activity falls",
            "Tracheal rigidity increases",
            "Oxygen demand disappears"
          ],
          [
            "Жұтқыншақ кеңейткіш бұлшықеттерінің белсенділігі азаяды",
            "Кеңірдек қатаяды",
            "Оттегі қажеттілігі жойылады"
          ]
        ],
        "correct": 0,
        "why": [
          "В REM снижается тонус многих скелетных мышц, включая стабилизаторы глотки.",
          "REM reduces tone in many skeletal muscles, including pharyngeal stabilisers.",
          "REM кезінде көптеген қаңқа бұлшықеттерінің, соның ішінде жұтқыншақ тұрақтандырғыштарының тонусы азаяды."
        ],
        "id": "patient-22-stage-2"
      },
      {
        "title": [
          "Интерпретация физиологического механизма",
          "Mechanistic interpretation",
          "Физиологиялық механизмді түсіндіру"
        ],
        "question": [
          "Почему во время REM-сна повышается риск обструкции верхних дыхательных путей у предрасположенных людей?",
          "Why does REM sleep increase upper-airway obstruction risk in susceptible people?",
          "REM ұйқысында бейім адамдарда жоғарғы тыныс жолы бітелуінің қаупі неге артады?"
        ],
        "options": [
          [
            "Снижается тонус мышц-дилататоров глотки",
            "Увеличивается тонус мышц-дилататоров глотки",
            "Полностью прекращается химическая регуляция"
          ],
          [
            "Pharyngeal dilator muscle tone decreases",
            "Pharyngeal dilator muscle tone increases",
            "Chemical regulation ceases completely"
          ],
          [
            "Жұтқыншақ кеңейткіш бұлшықеттерінің тонусы төмендейді",
            "Жұтқыншақ кеңейткіштерінің тонусы артады",
            "Химиялық реттелу толық тоқтайды"
          ]
        ],
        "correct": 0,
        "why": [
          "REM-ассоциированная мышечная атония способствует спадению склонных к обструкции дыхательных путей.",
          "REM-related muscle atonia promotes collapse in vulnerable upper airways.",
          "REM кезіндегі бұлшықет атониясы бітелуге бейім жоғарғы тыныс жолының жабылуын күшейтеді."
        ],
        "id": "patient-22-stage-3"
      }
    ]
  },
  {
    "title": [
      "Раздел 23: При погружении абсолютное давление выросло вдвое",
      "Module 23: Absolute pressure doubles during descent",
      "23-бөлім: Сүңгу кезінде абсолют қысым екі есе өсті"
    ],
    "stages": [
      {
        "title": [
          "Исходные данные",
          "Initial findings",
          "Бастапқы деректер"
        ],
        "question": [
          "При погружении абсолютное давление выросло вдвое. Как изменится объём газа при постоянной температуре?",
          "Absolute pressure doubles during descent. How does gas volume change at constant temperature?",
          "Сүңгу кезінде абсолют қысым екі есе өсті. Температура тұрақты болса газ көлемі қалай өзгереді?"
        ],
        "options": [
          [
            "Уменьшится вдвое",
            "Увеличится вдвое",
            "Не изменится"
          ],
          [
            "Halves",
            "Doubles",
            "Unchanged"
          ],
          [
            "Екі есе азаяды",
            "Екі есе артады",
            "Өзгермейді"
          ]
        ],
        "correct": 0,
        "why": [
          "Закон Бойля: P×V = const при постоянной температуре.",
          "Закон Бойля: P×V = const при постоянной температуре.",
          "Закон Бойля: P×V = const при постоянной температуре."
        ],
        "id": "patient-23-stage-1"
      },
      {
        "title": [
          "Механизм",
          "Mechanism",
          "Механизм"
        ],
        "question": [
          "Какое условие требуется для закона Бойля P×V=const?",
          "Which condition is required for Boyle's law P×V=constant?",
          "Бойль заңында P×V тұрақты болуы үшін қандай шарт керек?"
        ],
        "options": [
          [
            "Постоянная температура и количество газа",
            "Постоянное давление",
            "Постоянный объём"
          ],
          [
            "Constant temperature and amount of gas",
            "Constant pressure",
            "Constant volume"
          ],
          [
            "Температура мен газ мөлшері тұрақты",
            "Қысым тұрақты",
            "Көлем тұрақты"
          ]
        ],
        "correct": 0,
        "why": [
          "Для фиксированного количества идеального газа при постоянной температуре P×V постоянно.",
          "For a fixed amount of ideal gas at constant temperature, P×V is constant.",
          "Идеал газдың тұрақты мөлшері мен температурасында P×V тұрақты."
        ],
        "id": "patient-23-stage-2"
      },
      {
        "title": [
          "Интерпретация физиологического механизма",
          "Mechanistic interpretation",
          "Физиологиялық механизмді түсіндіру"
        ],
        "question": [
          "При удвоении абсолютного давления как изменится объём идеального газа при постоянной температуре?",
          "If absolute pressure doubles, how does ideal-gas volume change at constant temperature?",
          "Абсолют қысым екі есе артса, тұрақты температурада идеал газ көлемі қалай өзгереді?"
        ],
        "options": [
          [
            "Уменьшится вдвое",
            "Увеличится вдвое",
            "Не изменится"
          ],
          [
            "Halves",
            "Doubles",
            "Does not change"
          ],
          [
            "Екі есе азаяды",
            "Екі есе артады",
            "Өзгермейді"
          ]
        ],
        "correct": 0,
        "why": [
          "По закону Бойля P₁V₁=P₂V₂ при постоянной температуре и количестве газа.",
          "Boyle’s law gives P₁V₁=P₂V₂ at constant temperature and gas amount.",
          "Бойль заңы бойынша температура мен газ мөлшері тұрақты болса P₁V₁=P₂V₂."
        ],
        "id": "patient-23-stage-3"
      }
    ]
  },
  {
    "title": [
      "Раздел 24: Спирометрия: FEV1/FVC ниже нижней границы нормы",
      "Module 24: Spirometry: FEV1/FVC below lower limit of normal",
      "24-бөлім: Спирометрия: FEV1/FVC норманың төменгі шегінен аз"
    ],
    "stages": [
      {
        "title": [
          "Исходные данные",
          "Initial findings",
          "Бастапқы деректер"
        ],
        "question": [
          "Спирометрия: FEV1/FVC ниже нижней границы нормы. Какой паттерн наиболее вероятен?",
          "Spirometry: FEV1/FVC below lower limit of normal. Which pattern is most likely?",
          "Спирометрия: FEV1/FVC норманың төменгі шегінен аз. Қандай үлгі ықтимал?"
        ],
        "options": [
          [
            "Обструктивный",
            "Подтверждённая рестрикция",
            "Нормальный"
          ],
          [
            "Obstructive",
            "Confirmed restrictive",
            "Normal"
          ],
          [
            "Обструктивті",
            "Расталған рестриктивті",
            "Қалыпты"
          ]
        ],
        "correct": 0,
        "why": [
          "Пониженное FEV1/FVC указывает на обструктивный вентиляционный дефект.",
          "Пониженное FEV1/FVC указывает на обструктивный вентиляционный дефект.",
          "Пониженное FEV1/FVC указывает на обструктивный вентиляционный дефект."
        ],
        "id": "patient-24-stage-1"
      },
      {
        "title": [
          "Механизм",
          "Mechanism",
          "Механизм"
        ],
        "question": [
          "Как подтвердить рестриктивный дефект, если FVC снижена?",
          "How is restriction confirmed when FVC is low?",
          "FVC төмен болса рестрикцияны қалай растауға болады?"
        ],
        "options": [
          [
            "Измерить TLC и сравнить с LLN",
            "Использовать только FEV₁/FVC",
            "Использовать только пульсоксиметрию"
          ],
          [
            "Measure TLC and compare with LLN",
            "Use FEV₁/FVC alone",
            "Use pulse oximetry alone"
          ],
          [
            "TLC өлшеп, LLN-мен салыстыру",
            "Тек FEV₁/FVC қолдану",
            "Тек пульсоксиметрияны қолдану"
          ]
        ],
        "correct": 0,
        "why": [
          "Сниженная FVC лишь предполагает рестрикцию; её подтверждает низкая TLC.",
          "Low FVC suggests restriction, but reduced TLC confirms it.",
          "FVC төмендеуі рестрикцияны болжайды, ал TLC төмендігі оны растайды."
        ],
        "id": "patient-24-stage-2"
      },
      {
        "title": [
          "Интерпретация физиологического механизма",
          "Mechanistic interpretation",
          "Физиологиялық механизмді түсіндіру"
        ],
        "question": [
          "FEV₁/FVC ниже нижней границы нормы. Какой спирометрический паттерн наиболее вероятен?",
          "FEV₁/FVC is below the lower limit of normal. Which spirometric pattern is most likely?",
          "FEV₁/FVC қалыптың төменгі шегінен төмен. Қай спирометриялық үлгі ықтимал?"
        ],
        "options": [
          [
            "Обструктивный",
            "Подтверждённая рестрикция без TLC",
            "Нормальная спирометрия"
          ],
          [
            "Obstructive",
            "Confirmed restriction without TLC",
            "Normal spirometry"
          ],
          [
            "Обструктивті",
            "TLC өлшемей расталған рестрикция",
            "Қалыпты спирометрия"
          ]
        ],
        "correct": 0,
        "why": [
          "Снижение FEV₁/FVC ниже LLN указывает на обструкцию; рестрикцию подтверждают снижением TLC.",
          "FEV₁/FVC below LLN indicates obstruction; restriction requires reduced TLC for confirmation.",
          "FEV₁/FVC LLN-нен төмен болуы обструкцияны көрсетеді; рестрикцияны TLC төмендеуімен растайды."
        ],
        "id": "patient-24-stage-3"
      }
    ]
  },
  {
    "title": [
      "Раздел 25: Hb 8 г/дл при SaO2 98%",
      "Module 25: Hb 8 g/dL with SaO2 98%",
      "25-бөлім: Hb 8 г/дл, SaO2 98%"
    ],
    "stages": [
      {
        "title": [
          "Исходные данные",
          "Initial findings",
          "Бастапқы деректер"
        ],
        "question": [
          "Hb 8 г/дл при SaO2 98%. Что может снижаться при нормальной сатурации?",
          "Hb 8 g/dL with SaO2 98%. What can be low despite normal saturation?",
          "Hb 8 г/дл, SaO2 98%. Қанығу қалыпты болса да не төмендеуі мүмкін?"
        ],
        "options": [
          [
            "Содержание O2 в крови",
            "Доля O2 в воздухе",
            "Барометрическое давление"
          ],
          [
            "Blood oxygen content",
            "Inspired oxygen fraction",
            "Barometric pressure"
          ],
          [
            "Қандағы O2 мөлшері",
            "Ауадағы O2 үлесі",
            "Барометрлік қысым"
          ]
        ],
        "correct": 0,
        "why": [
          "CaO2 зависит от концентрации гемоглобина; нормальная сатурация не исключает анемическую гипоксию.",
          "CaO2 зависит от концентрации гемоглобина; нормальная сатурация не исключает анемическую гипоксию.",
          "CaO2 зависит от концентрации гемоглобина; нормальная сатурация не исключает анемическую гипоксию."
        ],
        "id": "patient-25-stage-1"
      },
      {
        "title": [
          "Механизм",
          "Mechanism",
          "Механизм"
        ],
        "question": [
          "Почему при анемии SpO₂ может оставаться нормальной?",
          "Why may SpO₂ remain normal in anaemia?",
          "Анемияда SpO₂ неге қалыпты болуы мүмкін?"
        ],
        "options": [
          [
            "Сатурация отражает долю насыщенного Hb, а не его массу",
            "SpO₂ непосредственно измеряет CaO₂",
            "При анемии PaO₂ всегда равен нулю"
          ],
          [
            "Saturation reflects Hb occupancy, not total Hb mass",
            "SpO₂ directly measures CaO₂",
            "PaO₂ is always zero in anaemia"
          ],
          [
            "Сатурация Hb қанығу үлесін көрсетеді, жалпы массасын емес",
            "SpO₂ CaO₂-ні тікелей өлшейді",
            "Анемияда PaO₂ әрдайым нөл"
          ]
        ],
        "correct": 0,
        "why": [
          "Содержание кислорода зависит от концентрации Hb даже при высокой сатурации.",
          "Oxygen content depends on Hb concentration even with high saturation.",
          "Оттегі мөлшері сатурация жоғары болса да Hb концентрациясына тәуелді."
        ],
        "id": "patient-25-stage-2"
      },
      {
        "title": [
          "Интерпретация физиологического механизма",
          "Mechanistic interpretation",
          "Физиологиялық механизмді түсіндіру"
        ],
        "question": [
          "При Hb 8 г/дл и SaO₂ 98% почему доставка O₂ может быть снижена?",
          "With Hb 8 g/dL and SaO₂ 98%, why can oxygen delivery be low?",
          "Hb 8 г/дл және SaO₂ 98% болса, O₂ жеткізілуі неге төмен болуы мүмкін?"
        ],
        "options": [
          [
            "Уменьшается содержание O₂ в крови из-за низкого Hb",
            "Нормальная сатурация гарантирует нормальную доставку",
            "PaO₂ полностью определяет содержание O₂"
          ],
          [
            "Low Hb reduces blood oxygen content",
            "Normal saturation guarantees normal delivery",
            "PaO₂ alone determines oxygen content"
          ],
          [
            "Hb төмен болғандықтан қандағы O₂ мөлшері азаяды",
            "Қалыпты сатурация жеткізілімді кепілдейді",
            "PaO₂ оттегі мөлшерін толық анықтайды"
          ]
        ],
        "correct": 0,
        "why": [
          "CaO₂≈1,34×Hb×SaO₂+0,003×PaO₂; низкий Hb уменьшает CaO₂ даже при высокой сатурации.",
          "CaO₂≈1.34×Hb×SaO₂+0.003×PaO₂; low Hb lowers oxygen content despite high saturation.",
          "CaO₂≈1,34×Hb×SaO₂+0,003×PaO₂; Hb төмендігі жоғары сатурацияда да оттегі мөлшерін азайтады."
        ],
        "id": "patient-25-stage-3"
      }
    ]
  }
];

// V43: distinct optional investigation decisions; educational interpretation only.
const investigationCases = [
 {name:['Выбор исследования: гиповентиляция','Choose investigation: hypoventilation','Зерттеуді таңдау: гиповентиляция'],
 question:['Какое исследование лучше всего непосредственно оценивает гиперкапнию и кислотно-основное состояние?','Which test directly assesses hypercapnia and acid–base status?','Гиперкапния мен қышқыл-негіз күйін тікелей қандай зерттеу бағалайды?'],
 options:[['Газы артериальной крови','Пульсоксиметрия','Пикфлоуметрия'],['Arterial blood gas analysis','Pulse oximetry','Peak expiratory flow'],['Артериялық қан газдарын талдау','Пульсоксиметрия','Шыңдық экспираторлық ағын']],correct:0,
 results:[['PaCO₂ 60 мм рт. ст.; pH 7,27: гиперкапнический респираторный ацидоз.','PaCO₂ 60 mmHg; pH 7.27: hypercapnic respiratory acidosis.','PaCO₂ 60 мм сын. бағ.; pH 7,27: гиперкапниялық респираторлық ацидоз.'],['SpO₂ не измеряет PaCO₂ и не определяет кислотно-основное состояние.','SpO₂ does not measure PaCO₂ or acid–base status.','SpO₂ PaCO₂ мен қышқыл-негіз күйін өлшемейді.'],['Пиковая скорость выдоха не определяет PaCO₂ или pH.','Peak flow cannot establish PaCO₂ or pH.','Шыңдық ағын PaCO₂ не pH анықтамайды.']],values:[['PaCO₂',60,40],['pH × 10',72.7,74]]},
 {name:['Выбор исследования: ателектаз','Choose investigation: atelectasis','Зерттеуді таңдау: ателектаз'],question:['Какое исследование лучше выявляет спадение участка лёгкого как возможную причину шунтирования?','Which investigation best demonstrates regional lung collapse as a possible cause of shunt?','Шунттың ықтимал себебі ретінде өкпе бөлігінің солуын қандай зерттеу жақсы көрсетеді?'],options:[['Рентгенография грудной клетки','Определение гемоглобина','Пикфлоуметрия'],['Chest radiography','Hemoglobin measurement','Peak expiratory flow'],['Кеуде қуысының рентгенографиясы','Гемоглобинді анықтау','Шыңдық экспираторлық ағын']],correct:0,results:[['Участок спадения лёгкого может иметь низкую вентиляцию при сохраняющемся кровотоке: низкое V/Q.','Collapsed lung units may have little ventilation despite perfusion: low V/Q.','Солған өкпе бөлігінде перфузия сақталып, вентиляция төмендейді: V/Q төмен.'],['Гемоглобин важен для содержания O₂, но не показывает локальный ателектаз.','Hemoglobin informs O₂ content but cannot localize atelectasis.','Гемоглобин O₂ мөлшерін бағалайды, бірақ ателектаз орнын көрсетпейді.'],['Пиковый поток не визуализирует региональное спадение лёгкого.','Peak flow does not image regional lung collapse.','Шыңдық ағын өкпенің жергілікті солуын бейнелемейді.']],values:[['V/Q условно',0.1,0.8]]},
 {name:['Выбор исследования: анемия','Choose investigation: anemia','Зерттеуді таңдау: анемия'],question:['При SpO₂ 98% какое измерение необходимо для оценки снижения кислородной ёмкости крови из-за анемии?','With SpO₂ 98%, which measurement is needed to assess reduced oxygen carrying capacity due to anemia?','SpO₂ 98% болғанда анемияға байланысты оттегі сыйымдылығының төмендеуін бағалау үшін не өлшенеді?'],options:[['Концентрация гемоглобина','Только повторная SpO₂','Пиковая скорость выдоха'],['Hemoglobin concentration','Repeat SpO₂ alone','Peak expiratory flow'],['Гемоглобин концентрациясы','Тек SpO₂ қайта өлшеу','Шыңдық экспираторлық ағын']],correct:0,results:[['Hb 8 г/дл: CaO₂≈1,34×8×0,98 + 0,003×100 ≈10,8 мл/дл.','Hb 8 g/dL: CaO₂≈1.34×8×0.98 + 0.003×100 ≈10.8 mL/dL.','Hb 8 г/дл: CaO₂≈1,34×8×0,98 + 0,003×100 ≈10,8 мл/дл.'],['SpO₂ не измеряет концентрацию гемоглобина и не позволяет вычислить CaO₂ самостоятельно.','SpO₂ alone does not measure hemoglobin concentration or establish CaO₂.','SpO₂ гемоглобин концентрациясын өлшемейді және CaO₂ анықтамайды.'],['Пиковый поток не оценивает кислородную ёмкость крови.','Peak flow does not measure blood oxygen carrying capacity.','Шыңдық ағын қанның оттегі сыйымдылығын өлшемейді.']],values:[['CaO₂, мл/дл',10.8,19.7]]},
 {name:['Выбор исследования: обструкция','Choose investigation: obstruction','Зерттеуді таңдау: обструкция'],question:['Какой тест позволяет количественно оценить ограничение воздушного потока по FEV₁/FVC?','Which test quantifies airflow obstruction using FEV₁/FVC?','FEV₁/FVC арқылы ауа ағынының шектелуін қандай зерттеу бағалайды?'],options:[['Спирометрия','Пульсоксиметрия','Определение гемоглобина'],['Spirometry','Pulse oximetry','Hemoglobin measurement'],['Спирометрия','Пульсоксиметрия','Гемоглобинді анықтау']],correct:0,results:[['FEV₁/FVC оценивают по качественной спирометрии и сравнивают с нижней границей нормы.','Interpret FEV₁/FVC from quality-assured spirometry against the lower limit of normal.','FEV₁/FVC сапалы спирометриядан алынып, қалыптың төменгі шегімен салыстырылады.'],['SpO₂ отражает оксигенацию, но не измеряет обструкцию.','SpO₂ measures oxygenation, not airflow obstruction.','SpO₂ оксигенацияны бағалайды, обструкцияны емес.'],['Hb не позволяет вычислить FEV₁/FVC.','Hemoglobin does not provide FEV₁/FVC.','Hb FEV₁/FVC көрсетпейді.']],values:[['FEV₁/FVC, %',55,78]]},
 {name:['Выбор исследования: высота','Choose investigation: altitude','Зерттеуді таңдау: биіктік'],question:['Какой показатель нужен для расчёта вдыхаемого парциального давления O₂ на высоте?','Which measurement is required to calculate inspired O₂ partial pressure at altitude?','Биіктікте тыныс алатын O₂ парциалдық қысымын есептеу үшін қандай көрсеткіш керек?'],options:[['Барометрическое давление','Только частота пульса','Только гемоглобин'],['Barometric pressure','Heart rate alone','Hemoglobin alone'],['Барометрлік қысым','Тек жүрек жиілігі','Тек гемоглобин']],correct:0,results:[['PIO₂=FiO₂×(PB−47 мм рт. ст.) при 37 °C; уменьшение PB снижает PIO₂.','PIO₂=FiO₂×(PB−47 mmHg) at 37°C; lower PB reduces PIO₂.','37 °C кезінде PIO₂=FiO₂×(PB−47 мм сын. бағ.); PB төмендесе PIO₂ азаяды.'],['Пульс может изменяться при гипоксии, но не задаёт PIO₂.','Heart rate may respond to hypoxia but does not determine PIO₂.','Пульс гипоксияға жауап береді, бірақ PIO₂ анықтамайды.'],['Hb влияет на содержание кислорода, но не определяет PIO₂.','Hb affects oxygen content, not inspired O₂ pressure.','Hb оттегі мөлшеріне әсер етеді, PIO₂ емес.']],values:[['PIO₂, мм рт. ст.',100,150]]}
];
const additionalInvestigations = [
 {
  "name": [
   "Измерение вентиляции",
   "Ventilation measurement",
   "Желдетуді өлшеу"
  ],
  "question": [
   "Как определить минутную вентиляцию при VT 500 мл и f 12/мин?",
   "How to determine minute ventilation with VT 500 mL and f 12/min?",
   "VT 500 мл және f 12/мин болса, минуттық желдетуді қалай анықтайды?"
  ],
  "options": [
   [
    "Измерить VT и частоту дыхания",
    "Измерить только SpO₂",
    "Измерить только Hb"
   ],
   [
    "Measure VT and breathing frequency",
    "Measure SpO₂ alone",
    "Measure Hb alone"
   ],
   [
    "VT мен тыныс жиілігін өлшеу",
    "Тек SpO₂ өлшеу",
    "Тек Hb өлшеу"
   ]
  ],
  "correct": 0,
  "results": [
   [
    "VE=0,5×12=6 л/мин; альвеолярная вентиляция дополнительно зависит от мёртвого пространства.",
    "VE=0.5×12=6 L/min; alveolar ventilation also depends on dead space.",
    "VE=0,5×12=6 л/мин; альвеолалық желдету өлі кеңістікке де тәуелді."
   ],
   [
    "Измерить только SpO₂ — не отвечает на поставленный физиологический вопрос.",
    "Measure SpO₂ alone does not answer the stated physiological question.",
    "Тек SpO₂ өлшеу қойылған физиологиялық сұраққа жауап бермейді."
   ],
   [
    "Измерить только Hb — не позволяет получить нужный показатель.",
    "Measure Hb alone cannot provide the required measurement.",
    "Тек Hb өлшеу қажетті көрсеткішті бермейді."
   ]
  ],
  "values": []
 },
 {
  "name": [
   "Оценка диффузии",
   "Assess diffusion",
   "Диффузияны бағалау"
  ],
  "question": [
   "Какое исследование помогает оценить перенос газа через лёгкие после резекции?",
   "Which test helps assess pulmonary gas transfer after resection?",
   "Резекциядан кейін өкпедегі газ тасымалын қандай зерттеу бағалайды?"
  ],
  "options": [
   [
    "DLCO с коррекцией по Hb",
    "Пиковая скорость выдоха",
    "Частота пульса"
   ],
   [
    "DLCO corrected for Hb",
    "Peak expiratory flow",
    "Heart rate"
   ],
   [
    "Hb бойынша түзетілген DLCO",
    "Шыңдық дем шығару ағыны",
    "Жүрек жиілігі"
   ]
  ],
  "correct": 0,
  "results": [
   [
    "DLCO оценивает перенос CO; результат зависит от площади, капиллярного объёма и Hb.",
    "DLCO reflects CO transfer and depends on surface area, capillary blood volume and Hb.",
    "DLCO CO тасымалын бағалайды; беткей ауданына, капилляр қанына және Hb-ға тәуелді."
   ],
   [
    "Пиковая скорость выдоха — не отвечает на поставленный физиологический вопрос.",
    "Peak expiratory flow does not answer the stated physiological question.",
    "Шыңдық дем шығару ағыны қойылған физиологиялық сұраққа жауап бермейді."
   ],
   [
    "Частота пульса — не позволяет получить нужный показатель.",
    "Heart rate cannot provide the required measurement.",
    "Жүрек жиілігі қажетті көрсеткішті бермейді."
   ]
  ],
  "values": []
 },
 {
  "name": [
   "Давление при вдохе",
   "Inspiratory pressure",
   "Дем алудағы қысым"
  ],
  "question": [
   "Как непосредственно зарегистрировать изменение плеврального давления в физиологическом эксперименте?",
   "How can pleural pressure changes be approximated in a physiology experiment?",
   "Физиологиялық тәжірибеде плевра қысымының өзгерісін қалай жуықтап бағалауға болады?"
  ],
  "options": [
   [
    "Пищеводный баллон как суррогат",
    "Пульсоксиметрия",
    "Измерение Hb"
   ],
   [
    "Esophageal balloon as surrogate",
    "Pulse oximetry",
    "Hemoglobin measurement"
   ],
   [
    "Өңеш баллоны арқылы жуықтау",
    "Пульсоксиметрия",
    "Hb өлшеу"
   ]
  ],
  "correct": 0,
  "results": [
   [
    "Пищеводное давление служит приближением плеврального и требует правильного позиционирования баллона.",
    "Esophageal pressure approximates pleural pressure if the balloon is correctly positioned.",
    "Өңеш қысымы плевра қысымын жуықтайды; баллонды дұрыс орналастыру қажет."
   ],
   [
    "Пульсоксиметрия — не отвечает на поставленный физиологический вопрос.",
    "Pulse oximetry does not answer the stated physiological question.",
    "Пульсоксиметрия қойылған физиологиялық сұраққа жауап бермейді."
   ],
   [
    "Измерение Hb — не позволяет получить нужный показатель.",
    "Hemoglobin measurement cannot provide the required measurement.",
    "Hb өлшеу қажетті көрсеткішті бермейді."
   ]
  ],
  "values": []
 },
 {
  "name": [
   "Функция диафрагмы",
   "Diaphragm function",
   "Диафрагма қызметі"
  ],
  "question": [
   "Как визуализировать движение диафрагмы при подозрении на парез?",
   "How to visualize diaphragm motion in suspected paresis?",
   "Диафрагма парезі күдігінде оның қозғалысын қалай көруге болады?"
  ],
  "options": [
   [
    "УЗИ диафрагмы",
    "Только общий анализ крови",
    "Только SpO₂"
   ],
   [
    "Diaphragm ultrasound",
    "Blood count alone",
    "SpO₂ alone"
   ],
   [
    "Диафрагма УДЗ",
    "Тек жалпы қан талдауы",
    "Тек SpO₂"
   ]
  ],
  "correct": 0,
  "results": [
   [
    "УЗИ позволяет оценить экскурсию и утолщение диафрагмы во время дыхания.",
    "Ultrasound assesses diaphragm excursion and thickening during breathing.",
    "УДЗ тыныс кезіндегі диафрагма экскурсиясы мен қалыңдауын бағалайды."
   ],
   [
    "Только общий анализ крови — не отвечает на поставленный физиологический вопрос.",
    "Blood count alone does not answer the stated physiological question.",
    "Тек жалпы қан талдауы қойылған физиологиялық сұраққа жауап бермейді."
   ],
   [
    "Только SpO₂ — не позволяет получить нужный показатель.",
    "SpO₂ alone cannot provide the required measurement.",
    "Тек SpO₂ қажетті көрсеткішті бермейді."
   ]
  ],
  "values": []
 },
 {
  "name": [
   "Подозрение на пневмоторакс",
   "Suspected pneumothorax",
   "Пневмоторакс күдігі"
  ],
  "question": [
   "Какое исследование у постели может быстро выявить признаки пневмоторакса?",
   "Which bedside study can rapidly identify signs of pneumothorax?",
   "Төсек жанында пневмоторакс белгілерін тез анықтайтын зерттеу қайсы?"
  ],
  "options": [
   [
    "УЗИ лёгких",
    "Измерение Hb",
    "Спирометрия с форсированным выдохом"
   ],
   [
    "Lung ultrasound",
    "Hemoglobin measurement",
    "Forced spirometry"
   ],
   [
    "Өкпе УДЗ",
    "Hb өлшеу",
    "Форсирленген спирометрия"
   ]
  ],
  "correct": 0,
  "results": [
   [
    "УЗИ может показать отсутствие скольжения плевры; находку интерпретируют с клиническим контекстом.",
    "Ultrasound may show absent pleural sliding; interpret findings in clinical context.",
    "УДЗ плевра сырғуының болмауын көрсете алады; клиникалық жағдаймен бірге бағалау керек."
   ],
   [
    "Измерение Hb — не отвечает на поставленный физиологический вопрос.",
    "Hemoglobin measurement does not answer the stated physiological question.",
    "Hb өлшеу қойылған физиологиялық сұраққа жауап бермейді."
   ],
   [
    "Спирометрия с форсированным выдохом — не позволяет получить нужный показатель.",
    "Forced spirometry cannot provide the required measurement.",
    "Форсирленген спирометрия қажетті көрсеткішті бермейді."
   ]
  ],
  "values": []
 },
 {
  "name": [
   "Сопротивление бронха",
   "Airway resistance",
   "Бронх кедергісі"
  ],
  "question": [
   "Как оценить зависимость сопротивления от радиуса в идеализированной трубке?",
   "How to evaluate resistance versus radius in an idealized tube?",
   "Идеал түтікте кедергінің радиусқа тәуелділігін қалай бағалайды?"
  ],
  "options": [
   [
    "Использовать закон Пуазейля",
    "Оценить только SpO₂",
    "Определить только Hb"
   ],
   [
    "Use Poiseuille law",
    "Use SpO₂ alone",
    "Use Hb alone"
   ],
   [
    "Пуазейль заңын қолдану",
    "Тек SpO₂ бағалау",
    "Тек Hb анықтау"
   ]
  ],
  "correct": 0,
  "results": [
   [
    "При ламинарном течении R∝1/r⁴: уменьшение радиуса вдвое повышает R в 16 раз.",
    "For laminar flow R∝1/r⁴: halving radius raises R sixteenfold.",
    "Ламинар ағыста R∝1/r⁴: радиус екі есе азайса, R 16 есе өседі."
   ],
   [
    "Оценить только SpO₂ — не отвечает на поставленный физиологический вопрос.",
    "Use SpO₂ alone does not answer the stated physiological question.",
    "Тек SpO₂ бағалау қойылған физиологиялық сұраққа жауап бермейді."
   ],
   [
    "Определить только Hb — не позволяет получить нужный показатель.",
    "Use Hb alone cannot provide the required measurement.",
    "Тек Hb анықтау қажетті көрсеткішті бермейді."
   ]
  ],
  "values": []
 },
 {
  "name": [
   "Объёмы лёгких",
   "Lung volumes",
   "Өкпе көлемдері"
  ],
  "question": [
   "Как получить жизненную ёмкость из VT, IRV и ERV?",
   "How to obtain vital capacity from VT, IRV and ERV?",
   "VT, IRV және ERV арқылы тіршілік сыйымдылығын қалай табады?"
  ],
  "options": [
   [
    "Сложить VT+IRV+ERV",
    "Сложить VT+RV",
    "Измерить только SpO₂"
   ],
   [
    "Add VT+IRV+ERV",
    "Add VT+RV",
    "Measure SpO₂ alone"
   ],
   [
    "VT+IRV+ERV қосу",
    "VT+RV қосу",
    "Тек SpO₂ өлшеу"
   ]
  ],
  "correct": 0,
  "results": [
   [
    "VC=0,5+3+1=4,5 л; остаточный объём не определяется обычной спирометрией.",
    "VC=0.5+3+1=4.5 L; residual volume is not measured by simple spirometry.",
    "VC=0,5+3+1=4,5 л; қалдық көлем қарапайым спирометриямен өлшенбейді."
   ],
   [
    "Сложить VT+RV — не отвечает на поставленный физиологический вопрос.",
    "Add VT+RV does not answer the stated physiological question.",
    "VT+RV қосу қойылған физиологиялық сұраққа жауап бермейді."
   ],
   [
    "Измерить только SpO₂ — не позволяет получить нужный показатель.",
    "Measure SpO₂ alone cannot provide the required measurement.",
    "Тек SpO₂ өлшеу қажетті көрсеткішті бермейді."
   ]
  ],
  "values": []
 },
 {
  "name": [
   "Альвеолярная вентиляция",
   "Alveolar ventilation",
   "Альвеолалық желдету"
  ],
  "question": [
   "Как оценить VA при VT 400 мл, VD 150 мл, f 16/мин?",
   "How to estimate VA with VT 400 mL, VD 150 mL, f 16/min?",
   "VT 400 мл, VD 150 мл, f 16/мин болса VA қалай есептеледі?"
  ],
  "options": [
   [
    "Вычислить (VT−VD)×f",
    "Вычислить VT×f",
    "Измерить только Hb"
   ],
   [
    "Compute (VT−VD)×f",
    "Compute VT×f",
    "Measure Hb alone"
   ],
   [
    "(VT−VD)×f есептеу",
    "VT×f есептеу",
    "Тек Hb өлшеу"
   ]
  ],
  "correct": 0,
  "results": [
   [
    "VA=(0,4−0,15)×16=4 л/мин; VE=6,4 л/мин.",
    "VA=(0.4−0.15)×16=4 L/min; VE=6.4 L/min.",
    "VA=(0,4−0,15)×16=4 л/мин; VE=6,4 л/мин."
   ],
   [
    "Вычислить VT×f — не отвечает на поставленный физиологический вопрос.",
    "Compute VT×f does not answer the stated physiological question.",
    "VT×f есептеу қойылған физиологиялық сұраққа жауап бермейді."
   ],
   [
    "Измерить только Hb — не позволяет получить нужный показатель.",
    "Measure Hb alone cannot provide the required measurement.",
    "Тек Hb өлшеу қажетті көрсеткішті бермейді."
   ]
  ],
  "values": []
 },
 {
  "name": [
   "Вдыхаемый кислород",
   "Inspired oxygen",
   "Тыныспен кіретін оттегі"
  ],
  "question": [
   "Как вычислить PIO₂ при PB 560 мм рт. ст. и FiO₂ 0,21?",
   "How to calculate PIO₂ at PB 560 mmHg and FiO₂ 0.21?",
   "PB 560 мм сын. бағ., FiO₂ 0,21 болса PIO₂ қалай есептеледі?"
  ],
  "options": [
   [
    "FiO₂×(PB−47)",
    "FiO₂×PB без поправки",
    "PaCO₂×FiO₂"
   ],
   [
    "FiO₂×(PB−47)",
    "FiO₂×PB without correction",
    "PaCO₂×FiO₂"
   ],
   [
    "FiO₂×(PB−47)",
    "Түзетусіз FiO₂×PB",
    "PaCO₂×FiO₂"
   ]
  ],
  "correct": 0,
  "results": [
   [
    "PIO₂≈0,21×513≈108 мм рт. ст. при температуре тела 37 °C.",
    "PIO₂≈0.21×513≈108 mmHg at 37°C.",
    "37 °C кезінде PIO₂≈0,21×513≈108 мм сын. бағ."
   ],
   [
    "FiO₂×PB без поправки — не отвечает на поставленный физиологический вопрос.",
    "FiO₂×PB without correction does not answer the stated physiological question.",
    "Түзетусіз FiO₂×PB қойылған физиологиялық сұраққа жауап бермейді."
   ],
   [
    "PaCO₂×FiO₂ — не позволяет получить нужный показатель.",
    "PaCO₂×FiO₂ cannot provide the required measurement.",
    "PaCO₂×FiO₂ қажетті көрсеткішті бермейді."
   ]
  ],
  "values": []
 },
 {
  "name": [
   "Диффузионная способность",
   "Diffusing capacity",
   "Диффузиялық қабілет"
  ],
  "question": [
   "Какое исследование помогает оценить нарушение газопереноса при интерстициальном фиброзе?",
   "Which test helps assess impaired gas transfer in interstitial fibrosis?",
   "Интерстициалды фиброзда газ тасымалының бұзылуын қандай тест бағалайды?"
  ],
  "options": [
   [
    "DLCO",
    "Пиковая скорость выдоха",
    "Только SpO₂ в покое"
   ],
   [
    "DLCO",
    "Peak expiratory flow",
    "Resting SpO₂ alone"
   ],
   [
    "DLCO",
    "Шыңдық ағын",
    "Тек тыныштықтағы SpO₂"
   ]
  ],
  "correct": 0,
  "results": [
   [
    "DLCO может снижаться при утолщении барьера; интерпретация требует учёта Hb и других факторов.",
    "DLCO may fall with barrier thickening; account for Hb and other determinants.",
    "Тосқауыл қалыңдаса DLCO төмендеуі мүмкін; Hb және басқа факторларды ескеру керек."
   ],
   [
    "Пиковая скорость выдоха — не отвечает на поставленный физиологический вопрос.",
    "Peak expiratory flow does not answer the stated physiological question.",
    "Шыңдық ағын қойылған физиологиялық сұраққа жауап бермейді."
   ],
   [
    "Только SpO₂ в покое — не позволяет получить нужный показатель.",
    "Resting SpO₂ alone cannot provide the required measurement.",
    "Тек тыныштықтағы SpO₂ қажетті көрсеткішті бермейді."
   ]
  ],
  "values": []
 },
 {
  "name": [
   "Лёгочное сосудистое сопротивление",
   "Pulmonary vascular resistance",
   "Өкпе тамырлық кедергісі"
  ],
  "question": [
   "Как рассчитать PVR по mPAP, PAWP и сердечному выбросу?",
   "How to calculate PVR from mPAP, PAWP and cardiac output?",
   "mPAP, PAWP және жүрек шығаруынан PVR қалай есептеледі?"
  ],
  "options": [
   [
    "(mPAP−PAWP)/CO",
    "mPAP×CO",
    "PAWP/CO без mPAP"
   ],
   [
    "(mPAP−PAWP)/CO",
    "mPAP×CO",
    "PAWP/CO without mPAP"
   ],
   [
    "(mPAP−PAWP)/CO",
    "mPAP×CO",
    "mPAP-сыз PAWP/CO"
   ]
  ],
  "correct": 0,
  "results": [
   [
    "PVR=(25−10)/5=3 единицы Вуда; значения интерпретируют с учётом клинического контекста.",
    "PVR=(25−10)/5=3 Wood units; interpretation depends on context.",
    "PVR=(25−10)/5=3 Вуд бірлігі; нәтижені клиникалық контексте бағалайды."
   ],
   [
    "mPAP×CO — не отвечает на поставленный физиологический вопрос.",
    "mPAP×CO does not answer the stated physiological question.",
    "mPAP×CO қойылған физиологиялық сұраққа жауап бермейді."
   ],
   [
    "PAWP/CO без mPAP — не позволяет получить нужный показатель.",
    "PAWP/CO without mPAP cannot provide the required measurement.",
    "mPAP-сыз PAWP/CO қажетті көрсеткішті бермейді."
   ]
  ],
  "values": []
 },
 {
  "name": [
   "Газовый состав крови",
   "Blood gas analysis",
   "Қан газдарын талдау"
  ],
  "question": [
   "Какое исследование напрямую определяет PaCO₂ и pH при подозрении на ацидоз?",
   "Which test directly measures PaCO₂ and pH in suspected acidosis?",
   "Ацидоз күдігінде PaCO₂ мен pH тікелей қай тест анықтайды?"
  ],
  "options": [
   [
    "Анализ газов артериальной крови",
    "Пикфлоуметрия",
    "Спирометрия без газов крови"
   ],
   [
    "Arterial blood gas analysis",
    "Peak expiratory flow",
    "Spirometry without blood gases"
   ],
   [
    "Артериялық қан газдары",
    "Пикфлоуметрия",
    "Қан газдарынсыз спирометрия"
   ]
  ],
  "correct": 0,
  "results": [
   [
    "При PaCO₂ 60 и HCO₃⁻ 24 pH≈7,22 по Хендерсону–Хассельбальху (упрощённая оценка).",
    "With PaCO₂ 60 and HCO₃⁻ 24, pH≈7.22 by Henderson–Hasselbalch (simplified).",
    "PaCO₂ 60 және HCO₃⁻ 24 болса, Хендерсон–Хассельбальх бойынша pH≈7,22."
   ],
   [
    "Пикфлоуметрия — не отвечает на поставленный физиологический вопрос.",
    "Peak expiratory flow does not answer the stated physiological question.",
    "Пикфлоуметрия қойылған физиологиялық сұраққа жауап бермейді."
   ],
   [
    "Спирометрия без газов крови — не позволяет получить нужный показатель.",
    "Spirometry without blood gases cannot provide the required measurement.",
    "Қан газдарынсыз спирометрия қажетті көрсеткішті бермейді."
   ]
  ],
  "values": []
 },
 {
  "name": [
   "Центральный дыхательный драйв",
   "Central respiratory drive",
   "Орталық тыныс драйвы"
  ],
  "question": [
   "Какое наблюдение непосредственно выявит гиповентиляцию при седации?",
   "Which observation directly detects hypoventilation during sedation?",
   "Седация кезінде гиповентиляцияны тікелей не көрсетеді?"
  ],
  "options": [
   [
    "Капнография с клинической оценкой",
    "Только SpO₂",
    "Только температура кожи"
   ],
   [
    "Capnography with clinical assessment",
    "SpO₂ alone",
    "Skin temperature alone"
   ],
   [
    "Капнография және клиникалық бағалау",
    "Тек SpO₂",
    "Тек тері температурасы"
   ]
  ],
  "correct": 0,
  "results": [
   [
    "Капнография отслеживает выдыхаемый CO₂; EtCO₂ не всегда равен PaCO₂, особенно при V/Q-нарушениях.",
    "Capnography tracks exhaled CO₂; EtCO₂ may differ from PaCO₂, especially with V/Q mismatch.",
    "Капнография шығарылған CO₂ бақылайды; V/Q бұзылса EtCO₂ PaCO₂-ден өзгеше болуы мүмкін."
   ],
   [
    "Только SpO₂ — не отвечает на поставленный физиологический вопрос.",
    "SpO₂ alone does not answer the stated physiological question.",
    "Тек SpO₂ қойылған физиологиялық сұраққа жауап бермейді."
   ],
   [
    "Только температура кожи — не позволяет получить нужный показатель.",
    "Skin temperature alone cannot provide the required measurement.",
    "Тек тері температурасы қажетті көрсеткішті бермейді."
   ]
  ],
  "values": []
 },
 {
  "name": [
   "Рецепторы растяжения",
   "Stretch receptors",
   "Созылу рецепторлары"
  ],
  "question": [
   "Какой афферентный нерв передаёт сигналы рецепторов растяжения лёгких?",
   "Which afferent nerve carries signals from pulmonary stretch receptors?",
   "Өкпе созылу рецепторлары сигналын қай афференттік жүйке өткізеді?"
  ],
  "options": [
   [
    "Блуждающий нерв (X)",
    "Зрительный нерв (II)",
    "Подъязычный нерв (XII)"
   ],
   [
    "Vagus nerve (X)",
    "Optic nerve (II)",
    "Hypoglossal nerve (XII)"
   ],
   [
    "Кезбе жүйке (X)",
    "Көру жүйкесі (II)",
    "Тіласты жүйкесі (XII)"
   ]
  ],
  "correct": 0,
  "results": [
   [
    "Вагусные афференты участвуют в рефлексе Геринга—Брейера, особенно при больших дыхательных объёмах.",
    "Vagal afferents mediate the Hering–Breuer reflex, especially at large tidal volumes.",
    "Кезбе жүйке афференттері Геринг–Брейер рефлексіне қатысады, әсіресе үлкен тыныс көлемінде."
   ],
   [
    "Зрительный нерв (II) — не отвечает на поставленный физиологический вопрос.",
    "Optic nerve (II) does not answer the stated physiological question.",
    "Көру жүйкесі (II) қойылған физиологиялық сұраққа жауап бермейді."
   ],
   [
    "Подъязычный нерв (XII) — не позволяет получить нужный показатель.",
    "Hypoglossal nerve (XII) cannot provide the required measurement.",
    "Тіласты жүйкесі (XII) қажетті көрсеткішті бермейді."
   ]
  ],
  "values": []
 },
 {
  "name": [
   "Гипоксический ответ",
   "Hypoxic response",
   "Гипоксиялық жауап"
  ],
  "question": [
   "Какие рецепторы особенно важны при резком снижении PaO₂ до 45 мм рт. ст.?",
   "Which receptors are especially important when PaO₂ drops sharply to 45 mmHg?",
   "PaO₂ 45 мм сын. бағ. дейін күрт төмендесе, қай рецепторлар маңызды?"
  ],
  "options": [
   [
    "Каротидные тельца",
    "Рецепторы сетчатки",
    "Мышечные веретёна как единственный путь"
   ],
   [
    "Carotid bodies",
    "Retinal receptors",
    "Muscle spindles alone"
   ],
   [
    "Каротид денешіктері",
    "Тор қабық рецепторлары",
    "Тек бұлшықет ұршықтары"
   ]
  ],
  "correct": 0,
  "results": [
   [
    "Каротидные тельца усиливают афферентацию по IX нерву и повышают вентиляционный драйв.",
    "Carotid bodies increase glossopharyngeal afferent signaling and ventilatory drive.",
    "Каротид денешіктері IX жүйке афферентациясын және тыныс драйвын күшейтеді."
   ],
   [
    "Рецепторы сетчатки — не отвечает на поставленный физиологический вопрос.",
    "Retinal receptors does not answer the stated physiological question.",
    "Тор қабық рецепторлары қойылған физиологиялық сұраққа жауап бермейді."
   ],
   [
    "Мышечные веретёна как единственный путь — не позволяет получить нужный показатель.",
    "Muscle spindles alone cannot provide the required measurement.",
    "Тек бұлшықет ұршықтары қажетті көрсеткішті бермейді."
   ]
  ],
  "values": []
 },
 {
  "name": [
   "Нагрузка и газообмен",
   "Exercise gas exchange",
   "Жүктемедегі газ алмасу"
  ],
  "question": [
   "Как рассчитать вентиляционный эквивалент по O₂ при VE 45 и VO₂ 1,5 л/мин?",
   "How to calculate ventilatory equivalent for O₂ with VE 45 and VO₂ 1.5 L/min?",
   "VE 45 және VO₂ 1,5 л/мин болса, O₂ желдету эквиваленті қалай есептеледі?"
  ],
  "options": [
   [
    "VE/VO₂",
    "VO₂/VE",
    "VE×VO₂"
   ],
   [
    "VE/VO₂",
    "VO₂/VE",
    "VE×VO₂"
   ],
   [
    "VE/VO₂",
    "VO₂/VE",
    "VE×VO₂"
   ]
  ],
  "correct": 0,
  "results": [
   [
    "VE/VO₂=45/1,5=30; значение зависит от интенсивности нагрузки и методики измерения.",
    "VE/VO₂=45/1.5=30; it varies with exercise intensity and measurement conditions.",
    "VE/VO₂=45/1,5=30; жүктеме қарқыны мен өлшеу жағдайына тәуелді."
   ],
   [
    "VO₂/VE — не отвечает на поставленный физиологический вопрос.",
    "VO₂/VE does not answer the stated physiological question.",
    "VO₂/VE қойылған физиологиялық сұраққа жауап бермейді."
   ],
   [
    "VE×VO₂ — не позволяет получить нужный показатель.",
    "VE×VO₂ cannot provide the required measurement.",
    "VE×VO₂ қажетті көрсеткішті бермейді."
   ]
  ],
  "values": []
 },
 {
  "name": [
   "Апноэ во сне",
   "Sleep apnea",
   "Ұйқы апноэсы"
  ],
  "question": [
   "Какой тест регистрирует дыхательные события и стадии сна?",
   "Which test records respiratory events and sleep stages?",
   "Тыныс оқиғалары мен ұйқы сатыларын қандай зерттеу тіркейді?"
  ],
  "options": [
   [
    "Полисомнография",
    "Только дневная спирометрия",
    "Только Hb"
   ],
   [
    "Polysomnography",
    "Daytime spirometry alone",
    "Hemoglobin alone"
   ],
   [
    "Полисомнография",
    "Тек күндізгі спирометрия",
    "Тек Hb"
   ]
  ],
  "correct": 0,
  "results": [
   [
    "Полисомнография позволяет сопоставлять поток, усилие дыхания, оксигенацию и стадии сна.",
    "Polysomnography links airflow, respiratory effort, oxygenation and sleep stages.",
    "Полисомнография ауа ағынын, тыныс күшін, оксигенацияны және ұйқы сатыларын салыстырады."
   ],
   [
    "Только дневная спирометрия — не отвечает на поставленный физиологический вопрос.",
    "Daytime spirometry alone does not answer the stated physiological question.",
    "Тек күндізгі спирометрия қойылған физиологиялық сұраққа жауап бермейді."
   ],
   [
    "Только Hb — не позволяет получить нужный показатель.",
    "Hemoglobin alone cannot provide the required measurement.",
    "Тек Hb қажетті көрсеткішті бермейді."
   ]
  ],
  "values": []
 },
 {
  "name": [
   "Погружение и газ",
   "Diving and gas",
   "Сүңгу және газ"
  ],
  "question": [
   "Что лучше описывает изменение объёма газа при удвоении абсолютного давления при постоянной температуре?",
   "What predicts gas volume when absolute pressure doubles at constant temperature?",
   "Температура тұрақты, абсолют қысым екі есе артса, газ көлемін не болжайды?"
  ],
  "options": [
   [
    "Закон Бойля",
    "Закон Фика",
    "Закон Пуазейля"
   ],
   [
    "Boyle law",
    "Fick law",
    "Poiseuille law"
   ],
   [
    "Бойль заңы",
    "Фик заңы",
    "Пуазейль заңы"
   ]
  ],
  "correct": 0,
  "results": [
   [
    "По Бойлю P×V=const: объём газа в идеализированной замкнутой системе уменьшается вдвое.",
    "By Boyle law P×V=constant: volume halves in an idealized closed system.",
    "Бойль заңы бойынша P×V=тұрақты: идеал жабық жүйеде көлем екі есе азаяды."
   ],
   [
    "Закон Фика — не отвечает на поставленный физиологический вопрос.",
    "Fick law does not answer the stated physiological question.",
    "Фик заңы қойылған физиологиялық сұраққа жауап бермейді."
   ],
   [
    "Закон Пуазейля — не позволяет получить нужный показатель.",
    "Poiseuille law cannot provide the required measurement.",
    "Пуазейль заңы қажетті көрсеткішті бермейді."
   ]
  ],
  "values": []
 },
 {
  "name": [
   "Интерпретация обструкции",
   "Obstruction interpretation",
   "Обструкцияны түсіндіру"
  ],
  "question": [
   "С чем сравнивают FEV₁/FVC при интерпретации спирометрии?",
   "What reference is used to interpret FEV₁/FVC?",
   "Спирометриядағы FEV₁/FVC немен салыстырылады?"
  ],
  "options": [
   [
    "С нижней границей нормы (LLN)",
    "Только с SpO₂",
    "Только с Hb"
   ],
   [
    "With lower limit of normal (LLN)",
    "With SpO₂ alone",
    "With Hb alone"
   ],
   [
    "Қалыптың төменгі шегімен (LLN)",
    "Тек SpO₂",
    "Тек Hb"
   ]
  ],
  "correct": 0,
  "results": [
   [
    "FEV₁/FVC ниже LLN указывает на ограничение воздушного потока при надлежащем качестве теста.",
    "FEV₁/FVC below LLN indicates airflow obstruction when test quality is adequate.",
    "FEV₁/FVC LLN-нен төмен болса және тест сапалы болса, ауа ағынының шектелуін көрсетеді."
   ],
   [
    "Только с SpO₂ — не отвечает на поставленный физиологический вопрос.",
    "With SpO₂ alone does not answer the stated physiological question.",
    "Тек SpO₂ қойылған физиологиялық сұраққа жауап бермейді."
   ],
   [
    "Только с Hb — не позволяет получить нужный показатель.",
    "With Hb alone cannot provide the required measurement.",
    "Тек Hb қажетті көрсеткішті бермейді."
   ]
  ],
  "values": []
 },
 {
  "name": [
   "Кислородная ёмкость",
   "Oxygen content",
   "Оттегі сыйымдылығы"
  ],
  "question": [
   "Что необходимо дополнительно измерить при Hb 8 г/дл и SaO₂ 98% для оценки DO₂?",
   "What else is needed to assess DO₂ with Hb 8 g/dL and SaO₂ 98%?",
   "Hb 8 г/дл және SaO₂ 98% болса, DO₂ бағалау үшін тағы не керек?"
  ],
  "options": [
   [
    "Сердечный выброс",
    "Только частоту дыхания",
    "Только пиковую скорость выдоха"
   ],
   [
    "Cardiac output",
    "Breathing rate alone",
    "Peak flow alone"
   ],
   [
    "Жүрек шығару көлемі",
    "Тек тыныс жиілігі",
    "Тек шыңдық ағын"
   ]
  ],
  "correct": 0,
  "results": [
   [
    "DO₂=CO×CaO₂×10 при CO в л/мин и CaO₂ в мл/дл; низкий Hb уменьшает CaO₂.",
    "DO₂=CO×CaO₂×10 for CO in L/min and CaO₂ in mL/dL; low Hb reduces CaO₂.",
    "CO л/мин, CaO₂ мл/дл болса DO₂=CO×CaO₂×10; Hb төмендігі CaO₂ азайтады."
   ],
   [
    "Только частоту дыхания — не отвечает на поставленный физиологический вопрос.",
    "Breathing rate alone does not answer the stated physiological question.",
    "Тек тыныс жиілігі қойылған физиологиялық сұраққа жауап бермейді."
   ],
   [
    "Только пиковую скорость выдоха — не позволяет получить нужный показатель.",
    "Peak flow alone cannot provide the required measurement.",
    "Тек шыңдық ағын қажетті көрсеткішті бермейді."
   ]
  ],
  "values": []
 }
];
// V47: Twenty-five distinct synthetic teaching datasets. These are not real patient records.
const evidenceCases = [
 {measure:[['pH','7.27','7.35–7.45'],['PaCO₂','60 mmHg','35–45 mmHg'],['HCO₃⁻','26 mmol/L','22–26 mmol/L']],
  q:['При PaCO₂ 60 мм рт. ст. и HCO₃⁻ 26 ммоль/л какой pH получается по Хендерсону–Хассельбаху (6,1 + log₁₀(HCO₃⁻/(0,03×PaCO₂)))?','With PaCO₂ 60 mmHg and HCO₃⁻ 26 mmol/L, what pH follows from Henderson–Hasselbalch (6.1 + log₁₀(HCO₃⁻/(0.03×PaCO₂)))?','PaCO₂ 60 мм сын. бағ. және HCO₃⁻ 26 ммоль/л болса, Хендерсон–Хассельбалх бойынша pH қандай?'],
  a:[['Около 7,26','Около 7,40','Около 7,55'],['About 7.26','About 7.40','About 7.55'],['Шамамен 7,26','Шамамен 7,40','Шамамен 7,55']],
  why:['6,1 + log₁₀(26/1,8) ≈ 7,26; повышение PaCO₂ снижает pH.','6.1 + log₁₀(26/1.8) ≈ 7.26; increased PaCO₂ lowers pH.','6,1 + log₁₀(26/1,8) ≈ 7,26; PaCO₂ артуы pH төмендетеді.']},
 {measure:[['PaO₂','55 mmHg','80–100 mmHg'],['PaCO₂','40 mmHg','35–45 mmHg'],['FiO₂','0.21','Room air']],
  q:['При дыхании воздухом на уровне моря (PB 760, PH₂O 47, R 0,8) и PaCO₂ 40 вычислите A–a градиент, если PaO₂ 55 мм рт. ст.','On room air at sea level (PB 760, PH₂O 47, R 0.8), PaCO₂ 40 and PaO₂ 55 mmHg, calculate the A–a gradient.','Теңіз деңгейінде ауа жұтқанда (PB 760, PH₂O 47, R 0,8), PaCO₂ 40 және PaO₂ 55 болса A–a градиентін есептеңіз.'],
  a:[['Около 45 мм рт. ст.','Около 5 мм рт. ст.','Около 95 мм рт. ст.'],['About 45 mmHg','About 5 mmHg','About 95 mmHg'],['Шамамен 45 мм сын. бағ.','Шамамен 5 мм сын. бағ.','Шамамен 95 мм сын. бағ.']],
  why:['PAO₂ ≈ 0,21×713 − 40/0,8 ≈ 100; A–a ≈ 100−55 = 45 мм рт. ст.','PAO₂ ≈ 0.21×713 − 40/0.8 ≈ 100; A–a ≈ 100−55 = 45 mmHg.','PAO₂ ≈ 0,21×713 − 40/0,8 ≈ 100; A–a ≈ 100−55 = 45 мм сын. бағ.']},
 {measure:[['Hb','8 g/dL','12–16 g/dL (example)'],['SaO₂','98%','95–100%'],['PaO₂','100 mmHg','80–100 mmHg']],
  q:['При Hb 8 г/дл, SaO₂ 98% и PaO₂ 100 мм рт. ст. чему примерно равно CaO₂ (1,34×Hb×SaO₂ + 0,003×PaO₂)?','With Hb 8 g/dL, SaO₂ 98%, and PaO₂ 100 mmHg, estimate CaO₂ (1.34×Hb×SaO₂ + 0.003×PaO₂).','Hb 8 г/дл, SaO₂ 98% және PaO₂ 100 мм сын. бағ. болса CaO₂ шамамен қанша?'],
  a:[['10,8 мл O₂/дл','19,7 мл O₂/дл','8,0 мл O₂/дл'],['10.8 mL O₂/dL','19.7 mL O₂/dL','8.0 mL O₂/dL'],['10,8 мл O₂/дл','19,7 мл O₂/дл','8,0 мл O₂/дл']],
  why:['1,34×8×0,98 + 0,003×100 = 10,81 мл/дл; нормальная сатурация не исключает низкого содержания O₂.','1.34×8×0.98 + 0.003×100 = 10.81 mL/dL; normal saturation does not imply normal oxygen content.','1,34×8×0,98 + 0,003×100 = 10,81 мл/дл; қалыпты сатурация O₂ мөлшерінің қалыпты екенін білдірмейді.']},
 {measure:[['FEV₁','1.65 L','Measured'],['FVC','3.00 L','Measured'],['FEV₁/FVC','0.55','Compare with LLN']],
  q:['FEV₁ = 1,65 л, FVC = 3,00 л. Какой показатель следует сравнить с LLN для оценки ограничения воздушного потока?','FEV₁ = 1.65 L, FVC = 3.00 L. Which calculated value should be compared with the LLN for airflow obstruction?','FEV₁ = 1,65 л, FVC = 3,00 л. Ауа ағыны шектелуін бағалау үшін қандай мәнді LLN-мен салыстырады?'],
  a:[['FEV₁/FVC = 0,55','FEV₁/FVC = 1,82','FVC/FEV₁ = 0,55'],['FEV₁/FVC = 0.55','FEV₁/FVC = 1.82','FVC/FEV₁ = 0.55'],['FEV₁/FVC = 0,55','FEV₁/FVC = 1,82','FVC/FEV₁ = 0,55']],
  why:['1,65/3,00 = 0,55. Заключение об обструкции требует сравнения с LLN и контроля качества спирометрии.','1.65/3.00 = 0.55. Interpretation requires the LLN and acceptable spirometry quality.','1,65/3,00 = 0,55. Қорытынды үшін LLN және спирометрия сапасы қажет.']},
 {measure:[['PB','500 mmHg','Sea level: 760'],['FiO₂','0.21','Ambient air'],['PH₂O','47 mmHg','At 37 °C']],
  q:['При PB 500 мм рт. ст., FiO₂ 0,21 и PH₂O 47 мм рт. ст. чему равно PIO₂?','With PB 500 mmHg, FiO₂ 0.21 and PH₂O 47 mmHg, what is PIO₂?','PB 500 мм сын. бағ., FiO₂ 0,21 және PH₂O 47 мм сын. бағ. болса PIO₂ қанша?'],
  a:[['Около 95 мм рт. ст.','Около 150 мм рт. ст.','Около 105 мм рт. ст.'],['About 95 mmHg','About 150 mmHg','About 105 mmHg'],['Шамамен 95 мм сын. бағ.','Шамамен 150 мм сын. бағ.','Шамамен 105 мм сын. бағ.']],
  why:['PIO₂ = 0,21×(500−47) = 95,1 мм рт. ст.; влажный вдыхаемый воздух имеет меньший PO₂ при низком PB.','PIO₂ = 0.21×(500−47) = 95.1 mmHg; inspired PO₂ falls with barometric pressure.','PIO₂ = 0,21×(500−47) = 95,1 мм сын. бағ.; PB төмендегенде PIO₂ төмендейді.']},
{"measure": [["Радиус бронха", "2 mm", "4 mm baseline"], ["Относительный радиус", "0.5", "1.0"]], "q": ["Если радиус бронха уменьшается вдвое, во сколько раз возрастает сопротивление при идеальном ламинарном течении?", "If airway radius is halved, how much does resistance increase in an ideal laminar-flow tube?", "Бронх радиусы екі есе азайса, идеал ламинарлық ағыста кедергі неше есе өседі?"], "a": [["В 16 раз", "В 4 раза", "В 2 раза"], ["16-fold", "4-fold", "2-fold"], ["16 есе", "4 есе", "2 есе"]], "why": ["По закону Пуазейля R пропорционально 1/r⁴: (4/2)⁴=16. Реальные дыхательные пути сложнее идеальной трубки.", "Poiseuille: R ∝ 1/r⁴, so (4/2)⁴=16. Real airways are more complex.", "Пуазейль заңы: R ∝ 1/r⁴, сондықтан (4/2)⁴=16. Нақты тыныс жолдары күрделірек."]},
{"measure": [["VT", "0.5 L", "Quiet breathing"], ["Частота", "14/min", "Example"]], "q": ["Какова минутная вентиляция при VT 0,5 л и частоте 14/мин?", "What is minute ventilation at VT 0.5 L and 14 breaths/min?", "VT 0,5 л және жиілік 14/мин болса, минуттық вентиляция қанша?"], "a": [["7 л/мин", "5,5 л/мин", "14 л/мин"], ["7 L/min", "5.5 L/min", "14 L/min"], ["7 л/мин", "5,5 л/мин", "14 л/мин"]], "why": ["VE=VT×f=0,5×14=7 л/мин; это не альвеолярная вентиляция.", "VE=VT×f=0.5×14=7 L/min; this is not alveolar ventilation.", "VE=VT×f=0,5×14=7 л/мин; бұл альвеолалық вентиляция емес."]},
{"measure": [["VT", "450 mL", "Measured"], ["VD", "150 mL", "Assumed"], ["f", "16/min", "Measured"]], "q": ["Какова альвеолярная вентиляция за минуту?", "What is alveolar ventilation per minute?", "Бір минуттағы альвеолалық вентиляция қанша?"], "a": [["4,8 л/мин", "7,2 л/мин", "2,4 л/мин"], ["4.8 L/min", "7.2 L/min", "2.4 L/min"], ["4,8 л/мин", "7,2 л/мин", "2,4 л/мин"]], "why": ["VA=(450−150)×16=4800 мл/мин.", "VA=(450−150)×16=4800 mL/min.", "VA=(450−150)×16=4800 мл/мин."]},
{"measure": [["Площадь барьера", "70 m²", "Example"], ["Толщина", "0.5 μm", "Example"]], "q": ["Если толщина диффузионного барьера удваивается при неизменных остальных условиях, что происходит с потоком по закону Фика?", "If membrane thickness doubles with other variables unchanged, how does Fick diffusion flux change?", "Мембрана қалыңдығы екі есе артса, басқа шарттар тұрақты болғанда Фик ағыны қалай өзгереді?"], "a": [["Уменьшается вдвое", "Удваивается", "Не меняется"], ["Halves", "Doubles", "Unchanged"], ["Екі есе азаяды", "Екі есе артады", "Өзгермейді"]], "why": ["По закону Фика поток обратно пропорционален толщине мембраны.", "Fick flux is inversely proportional to membrane thickness.", "Фик заңы бойынша ағын мембрана қалыңдығына кері пропорционал."]},
{"measure": [["PB", "760 mmHg", "Sea level"], ["PH₂O", "47 mmHg", "37°C"], ["FiO₂", "0.21", "Air"]], "q": ["Каково приблизительное PIO₂?", "What is approximate inspired PO₂?", "Жұтылатын ауадағы PIO₂ шамамен қанша?"], "a": [["150 мм рт. ст.", "160 мм рт. ст.", "100 мм рт. ст."], ["150 mmHg", "160 mmHg", "100 mmHg"], ["150 мм сын. бағ.", "160 мм сын. бағ.", "100 мм сын. бағ."]], "why": ["PIO₂=0,21×(760−47)≈150 мм рт. ст.", "PIO₂=0.21×(760−47)≈150 mmHg.", "PIO₂=0,21×(760−47)≈150 мм сын. бағ."]},
{"measure": [["DLCO", "12 mL/min/mmHg", "Measured"], ["Expected DLCO", "24 mL/min/mmHg", "Illustrative"]], "q": ["Какова доля измеренной DLCO от указанной ожидаемой величины?", "What fraction of the stated expected DLCO is measured?", "Өлшенген DLCO берілген күтілетін шаманың қандай үлесі?"], "a": [["50%", "75%", "25%"], ["50%", "75%", "25%"], ["50%", "75%", "25%"]], "why": ["12/24×100%=50%. Для клинической интерпретации нужны Hb-коррекция, референсы и качество измерения.", "12/24×100%=50%. Clinical interpretation also needs Hb adjustment, references, and test quality.", "12/24×100%=50%. Клиникалық түсіндіруге Hb түзетуі, референстер және сапа қажет."]},
{"measure": [["mPAP", "25 mmHg", "Measured"], ["PAWP", "10 mmHg", "Measured"], ["CO", "5 L/min", "Measured"]], "q": ["Рассчитайте лёгочное сосудистое сопротивление PVR в единицах Вуда.", "Calculate pulmonary vascular resistance in Wood units.", "Өкпе тамырлық кедергісін Вуд бірлігінде есептеңіз."], "a": [["3 WU", "5 WU", "1 WU"], ["3 WU", "5 WU", "1 WU"], ["3 Вуд бірл.", "5 Вуд бірл.", "1 Вуд бірл."]], "why": ["PVR=(25−10)/5=3 WU.", "PVR=(25−10)/5=3 Wood units.", "PVR=(25−10)/5=3 Вуд бірлігі."]},
{"measure": [["Альвеолярная вентиляция", "2 L/min", "Regional"], ["Кровоток", "4 L/min", "Regional"]], "q": ["Каково региональное отношение V/Q?", "What is regional V/Q?", "Аймақтық V/Q қатынасы қандай?"], "a": [["0,5", "2,0", "1,0"], ["0.5", "2.0", "1.0"], ["0,5", "2,0", "1,0"]], "why": ["V/Q=2/4=0,5, что означает относительно низкую вентиляцию по отношению к перфузии.", "V/Q=2/4=0.5, indicating relatively low ventilation versus perfusion.", "V/Q=2/4=0,5, яғни перфузияға қатысты вентиляция төмен."]},
{"measure": [["Hb", "10 g/dL", "Measured"], ["SaO₂", "0.95", "Fraction"], ["PaO₂", "80 mmHg", "Measured"]], "q": ["Каково приблизительное CaO₂ по формуле 1,34×Hb×SaO₂+0,003×PaO₂?", "Estimate CaO₂ using 1.34×Hb×SaO₂+0.003×PaO₂.", "1,34×Hb×SaO₂+0,003×PaO₂ бойынша CaO₂ шамамен қанша?"], "a": [["13,0 мл/дл", "19,5 мл/дл", "9,5 мл/дл"], ["13.0 mL/dL", "19.5 mL/dL", "9.5 mL/dL"], ["13,0 мл/дл", "19,5 мл/дл", "9,5 мл/дл"]], "why": ["1,34×10×0,95+0,003×80=12,97 мл O₂/дл.", "1.34×10×0.95+0.003×80=12.97 mL O₂/dL.", "1,34×10×0,95+0,003×80=12,97 мл O₂/дл."]},
{"measure": [["PaCO₂", "50 mmHg", "Measured"], ["HCO₃⁻", "24 mmol/L", "Measured"]], "q": ["Чему примерно равен pH по Хендерсону–Хассельбаху?", "Approximate pH by Henderson–Hasselbalch?", "Хендерсон–Хассельбалх бойынша pH шамамен қанша?"], "a": [["7,30", "7,40", "7,50"], ["7.30", "7.40", "7.50"], ["7,30", "7,40", "7,50"]], "why": ["pH=6,1+log₁₀(24/(0,03×50))≈7,30.", "pH=6.1+log₁₀(24/(0.03×50))≈7.30.", "pH=6,1+log₁₀(24/(0,03×50))≈7,30."]},
{"measure": [["Na⁺", "140 mmol/L", "Measured"], ["Cl⁻", "104 mmol/L", "Measured"], ["HCO₃⁻", "16 mmol/L", "Measured"]], "q": ["Какова анионная разница без K⁺?", "What is the anion gap excluding K⁺?", "K⁺ есептемегенде аниондық айырма қанша?"], "a": [["20 ммоль/л", "12 ммоль/л", "36 ммоль/л"], ["20 mmol/L", "12 mmol/L", "36 mmol/L"], ["20 ммоль/л", "12 ммоль/л", "36 ммоль/л"]], "why": ["AG=140−(104+16)=20 ммоль/л. Интерпретация зависит от альбумина.", "AG=140−(104+16)=20 mmol/L; interpretation depends on albumin.", "AG=140−(104+16)=20 ммоль/л; түсіндіру альбуминге тәуелді."]},
{"measure": [["PaCO₂", "55 mmHg", "High"], ["pH", "7.31", "Low"]], "q": ["Какой химический сигнал особенно важен для центральной хемочувствительности?", "Which chemical signal is particularly important for central chemosensitivity?", "Орталық хемосезімталдық үшін қандай химиялық сигнал маңызды?"], "a": [["Изменение pH ликвора вследствие CO₂", "Непосредственное измерение Hb", "Изменение глюкозы плазмы"], ["CSF pH change driven by CO₂", "Direct Hb measurement", "Plasma glucose change"], ["CO₂ әсерінен жұлын сұйықтығы pH өзгеруі", "Hb тікелей өлшенуі", "Плазма глюкозасының өзгеруі"]], "why": ["CO₂ проходит гематоэнцефалический барьер и изменяет концентрацию H⁺ в мозговой внеклеточной жидкости.", "CO₂ crosses the blood–brain barrier and changes H⁺ in brain extracellular fluid.", "CO₂ гематоэнцефалдық тосқауылдан өтіп, мидағы жасушадан тыс H⁺ өзгертеді."]},
{"measure": [["VT", "1.1 L", "Large breath"], ["Афферентный путь", "Vagus", "Intact"]], "q": ["Какой путь проводит импульсы от медленно адаптирующихся рецепторов растяжения лёгких?", "Which pathway carries input from slowly adapting pulmonary stretch receptors?", "Өкпенің баяу бейімделетін созылу рецепторларының сигналын қандай жол өткізеді?"], "a": [["Блуждающий нерв", "Зрительный нерв", "Лицевой нерв"], ["Vagus nerve", "Optic nerve", "Facial nerve"], ["Кезбе жүйке", "Көру жүйкесі", "Бет жүйкесі"]], "why": ["Миелинизированные вагусные афференты передают сигнал к структурам продолговатого мозга.", "Myelinated vagal afferents carry signals to medullary networks.", "Миелинді вагустық афференттер сигналды сопақша миға жеткізеді."]},
{"measure": [["PaO₂", "48 mmHg", "Low"], ["PaCO₂", "40 mmHg", "Example"]], "q": ["Какие рецепторы особенно усиливают вентиляцию при таком снижении PaO₂?", "Which receptors strongly increase ventilation at this low PaO₂?", "PaO₂ осылай төмендегенде қандай рецепторлар вентиляцияны күшейтеді?"], "a": [["Каротидные тельца", "Рецепторы сухожилий", "Рецепторы сетчатки"], ["Carotid bodies", "Tendon receptors", "Retinal receptors"], ["Каротид денешіктері", "Сіңір рецепторлары", "Тор қабық рецепторлары"]], "why": ["Периферические артериальные хеморецепторы чувствительны к снижению PaO₂, особенно ниже примерно 60 мм рт. ст.", "Peripheral arterial chemoreceptors respond strongly as PaO₂ falls, especially below about 60 mmHg.", "Перифериялық хеморецепторлар PaO₂ төмендеуіне, әсіресе шамамен 60 мм сын. бағ.-тан төменде, жауап береді."]},
{"measure": [["VO₂", "1.8 L/min", "Exercise"], ["HR", "120/min", "Exercise"]], "q": ["Каков кислородный пульс VO₂/HR?", "What is oxygen pulse VO₂/HR?", "VO₂/HR оттектік пульсі қанша?"], "a": [["15 мл/удар", "9 мл/удар", "25 мл/удар"], ["15 mL/beat", "9 mL/beat", "25 mL/beat"], ["15 мл/соғу", "9 мл/соғу", "25 мл/соғу"]], "why": ["1800 мл/мин / 120 ударов/мин = 15 мл/удар.", "1800 mL/min divided by 120 beats/min = 15 mL/beat.", "1800 мл/мин / 120 соғу/мин = 15 мл/соғу."]},
{"measure": [["PB", "550 mmHg", "Altitude"], ["FiO₂", "0.21", "Air"], ["PH₂O", "47 mmHg", "37°C"]], "q": ["Чему приблизительно равно PIO₂ на этой высоте?", "What is approximate PIO₂ at this altitude?", "Осы биіктікте PIO₂ шамамен қанша?"], "a": [["106 мм рт. ст.", "150 мм рт. ст.", "95 мм рт. ст."], ["106 mmHg", "150 mmHg", "95 mmHg"], ["106 мм сын. бағ.", "150 мм сын. бағ.", "95 мм сын. бағ."]], "why": ["PIO₂=0,21×(550−47)=105,6 мм рт. ст.", "PIO₂=0.21×(550−47)=105.6 mmHg.", "PIO₂=0,21×(550−47)=105,6 мм сын. бағ."]},
{"measure": [["Апноэ + гипопноэ", "90 events", "Study"], ["Время сна", "6 h", "Study"]], "q": ["Чему равен индекс апноэ-гипопноэ (AHI)?", "What is the apnea–hypopnea index (AHI)?", "Апноэ-гипопноэ индексі (AHI) қанша?"], "a": [["15 событий/ч", "9 событий/ч", "30 событий/ч"], ["15 events/h", "9 events/h", "30 events/h"], ["15 оқиға/сағ", "9 оқиға/сағ", "30 оқиға/сағ"]], "why": ["AHI=90/6=15 событий за час сна; необходимы правила скоринга и качество записи.", "AHI=90/6=15 events per hour of sleep; scoring rules and recording quality matter.", "AHI=90/6=15 оқиға/сағ; бағалау ережелері мен жазба сапасы маңызды."]},
{"measure": [["Глубина", "20 m", "Seawater"], ["Давление поверхности", "1 ATA", "Approximate"]], "q": ["Каково приблизительное абсолютное давление на глубине 20 м в морской воде?", "What is approximate absolute pressure at 20 m seawater depth?", "Теңіз суының 20 м тереңдігінде абсолюттік қысым шамамен қанша?"], "a": [["3 ATA", "2 ATA", "4 ATA"], ["3 ATA", "2 ATA", "4 ATA"], ["3 ATA", "2 ATA", "4 ATA"]], "why": ["Около 1 ATA на поверхности плюс 1 ATA на каждые 10 м морской воды: 3 ATA.", "About 1 ATA at surface plus 1 ATA per 10 m seawater: 3 ATA.", "Бетінде 1 ATA және әр 10 м теңіз суына шамамен 1 ATA: 3 ATA."]},
{"measure": [["FEV₁ до", "1.60 L", "Pre"], ["FEV₁ после", "1.85 L", "Post"]], "q": ["Каково абсолютное увеличение FEV₁ после бронходилататора?", "What is the absolute FEV₁ increase after bronchodilator?", "Бронходилататордан кейін FEV₁ абсолюттік өсуі қанша?"], "a": [["250 мл", "150 мл", "450 мл"], ["250 mL", "150 mL", "450 mL"], ["250 мл", "150 мл", "450 мл"]], "why": ["1,85−1,60=0,25 л=250 мл. Критерий значимого ответа зависит от стандарта и должной величины.", "1.85−1.60=0.25 L=250 mL. A significant response requires the applicable standard and predicted value.", "1,85−1,60=0,25 л=250 мл. Маңыздылық критерийі стандарт пен болжамды мәнге тәуелді."]},
{"measure": [["CO", "4.5 L/min", "Measured"], ["CaO₂", "12 mL/dL", "Measured"]], "q": ["Какова доставка кислорода DO₂ в мл/мин?", "What is oxygen delivery DO₂ in mL/min?", "DO₂ оттегі жеткізілімі мл/мин қанша?"], "a": [["540 мл/мин", "54 мл/мин", "900 мл/мин"], ["540 mL/min", "54 mL/min", "900 mL/min"], ["540 мл/мин", "54 мл/мин", "900 мл/мин"]], "why": ["DO₂=CO×CaO₂×10=4,5×12×10=540 мл/мин.", "DO₂=CO×CaO₂×10=4.5×12×10=540 mL/min.", "DO₂=CO×CaO₂×10=4,5×12×10=540 мл/мин."]}
];
function showEvidence(L,panel,c,done){
 panel.innerHTML=`<div class="patient-investigation"><p><strong>${panel.closest('[data-advanced]').dataset.totalStages}/${panel.closest('[data-advanced]').dataset.totalStages}</strong></p><h3>${txt(L,'Данные исследования и расчёт','Investigation data and calculation','Зерттеу деректері мен есеп')}</h3><p class="small-note">${txt(L,'Синтетические учебные данные, не реальный пациент.','Synthetic educational data, not a real patient.','Оқу мақсатындағы жасанды деректер, нақты пациент емес.')}</p><table class="evidence-table"><thead><tr><th>${txt(L,'Показатель','Parameter','Көрсеткіш')}</th><th>${txt(L,'Результат','Result','Нәтиже')}</th><th>${txt(L,'Ориентир','Reference','Бағдар')}</th></tr></thead><tbody>${c.measure.map(x=>`<tr><th>${esc(patientLabel(x[0],L))}</th><td>${esc(patientLabel(x[1],L))}</td><td>${esc(patientLabel(x[2],L))}</td></tr>`).join('')}</tbody></table><p><strong>${esc(c.q[L])}</strong></p><div class="patient-options">${shuffledEntries(c.a[L]).map(([x,i])=>`<button type="button" data-evidence="${i}">${esc(x)}</button>`).join('')}</div><p class="patient-feedback" role="status" aria-live="polite"></p><div class="advanced-next"></div></div>`;
 panel.querySelectorAll('[data-evidence]').forEach(b=>b.onclick=()=>{
  if(b.disabled)return;
  const ok=Number(b.dataset.evidence)===0;
  panel.querySelectorAll('[data-evidence]').forEach(x=>{x.disabled=true;x.classList.toggle('correct',x.dataset.evidence==='0');x.classList.toggle('incorrect',x===b&&!ok)});
  panel.querySelector('.patient-feedback').textContent=(ok?'✓ ':'✗ ')+c.why[L];
  const next=document.createElement('button');next.type='button';next.textContent=txt(L,'Завершить случай','Finish case','Жағдайды аяқтау');next.onclick=()=>done(ok);panel.querySelector('.advanced-next').replaceChildren(next);
 });
}
const allInvestigationCases = investigationCases.concat(additionalInvestigations);
for(const c of cases){const id=Number(c.title[0].match(/^Раздел (\d+):/)?.[1]);if(id)c.stages[0].why=[...patientCases[id-1].explanation];}
const caseEvidenceIndices=repairPatientEvidence(cases,evidenceCases,allInvestigationCases);
const evidenceFor=index=>evidenceCases[caseEvidenceIndices[index]];
export const patientEvidenceData=cases.map((c,index)=>({caseIndex:index,evidenceIndex:caseEvidenceIndices[index],evidence:evidenceFor(index),investigation:allInvestigationCases[index]}));
const investigate=(L,c)=>`<div class="patient-investigation"><h3>${esc(c.name[L])}</h3><p>${esc(c.question[L])}</p><div class="patient-options">${shuffledEntries(c.options[L]).map(([o,i])=>`<button type="button" data-investigation="${i}">${esc(o)}</button>`).join('')}</div><p class="patient-feedback" role="status" aria-live="polite"></p><div class="investigation-graph" aria-label="${txt(L,'Сравнение физиологических показателей','Comparison of physiological values','Физиологиялық көрсеткіштерді салыстыру')}"></div><div class="advanced-next"></div></div>`;
function showInvestigation(L,panel,c,done){
 panel.innerHTML=`<p><strong>4/${panel.closest('[data-advanced]').dataset.totalStages}</strong></p>`+investigate(L,c);
 panel.querySelectorAll('[data-investigation]').forEach(b=>b.onclick=()=>{
  if(b.disabled)return;
  const j=Number(b.dataset.investigation),ok=j===c.correct;
  panel.querySelectorAll('[data-investigation]').forEach(x=>{x.disabled=true;x.classList.toggle('correct',Number(x.dataset.investigation)===c.correct);x.classList.toggle('incorrect',x===b&&!ok)});
  panel.querySelector('.patient-feedback').textContent=(ok?'✓ ':'✗ ')+c.results[j][L];
  const next=document.createElement('button');next.type='button';
  next.textContent=ok?txt(L,'Интерпретировать результат →','Interpret result →','Нәтижені түсіндіру →'):txt(L,'Пересмотреть исследование →','Reconsider investigation →','Зерттеуді қайта қарау →');
  next.onclick=()=>showBranch(L,panel,c,ok,done);
  panel.querySelector('.advanced-next').replaceChildren(next);
 });
}
function showBranch(L,panel,c,firstCorrect,done){
 const order=[c.correct,(c.correct+1)%3,(c.correct+2)%3];
 const choices=firstCorrect?order.map(i=>c.results[i][L]):order.map(i=>txt(L,'Получить данные: ','Obtain data from: ','Деректерді алу: ')+c.options[L][i]);
 const question=firstCorrect?txt(L,'Какие данные следует использовать для физиологического заключения?','Which evidence should support the physiological conclusion?','Физиологиялық қорытындыға қандай деректер негіз болады?'):txt(L,'Выбранный тест не отвечает на вопрос. Как поступить?','The selected test cannot answer the question. What next?','Таңдалған тест сұраққа жауап бермейді. Келесі қадам қандай?');
 const evidence=firstCorrect?c.results[c.correct][L]:c.results[c.correct][L];
 panel.innerHTML=`<div class="patient-investigation"><p><strong>5/${panel.closest('[data-advanced]').dataset.totalStages}</strong></p><h3>${txt(L,'Разветвлённый этап','Branching stage','Тармақталған кезең')}</h3><p>${esc(question)}</p><div class="patient-options">${shuffledEntries(choices).map(([o,i])=>`<button type="button" data-branch="${i}">${esc(o)}</button>`).join('')}</div><p class="patient-feedback" role="status" aria-live="polite"></p><div class="investigation-graph"></div><div class="advanced-next"></div></div>`;
 panel.querySelectorAll('[data-branch]').forEach(b=>b.onclick=()=>{
  if(b.disabled)return;
  const correct=Number(b.dataset.branch)===0;
  panel.querySelectorAll('[data-branch]').forEach(x=>{x.disabled=true;x.classList.toggle('correct',x.dataset.branch==='0');x.classList.toggle('incorrect',x===b&&!correct)});
  panel.querySelector('.patient-feedback').textContent=correct?'✓ '+evidence:'✗ '+txt(L,'Это не подтверждает искомый физиологический механизм. ','This does not establish the target physiological mechanism. ','Бұл қажетті физиологиялық механизмді дәлелдемейді. ')+evidence;
  if(correct&&c.values.length){panel.querySelector('.investigation-graph').innerHTML=c.values.map(([label,value,reference])=>`<div class="investigation-measure"><strong>${esc(label)}</strong><div class="investigation-bar"><span style="width:${Math.min(100,Math.abs(value)/Math.max(Math.abs(value),Math.abs(reference),0.001)*100)}%"></span></div><small>${txt(L,'Случай','Case','Жағдай')}: ${value}; ${txt(L,'ориентир','reference','салыстыру')}: ${reference}</small></div>`).join('');}
  const next=document.createElement('button');next.type='button';next.textContent=evidenceFor(Number(panel.closest('[data-advanced]').dataset.advanced))?txt(L,'Перейти к данным и расчёту','Continue to data and calculation','Деректер мен есепке өту'):txt(L,'Завершить случай','Finish case','Жағдайды аяқтау');next.onclick=()=>done(firstCorrect,correct);panel.querySelector('.advanced-next').replaceChildren(next);
 });
}

const txt=(L,a,b,c)=>[a,b,c][L];
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
// Explicit topic mapping: the first five integrative cases precede module cases.
export const modulePatientIndices = [5,6,7,8,26,10,11,12,25,13,14,15,1,2,16,0,17,18,19,20,4,21,22,23,24];
function caseContext(index,L){
 const mid=modulePatientIndices.indexOf(index)+1;
 if(mid)return patientContext(mid,L);
 if(index===3)return patientContext(6,L);
 return `<details><summary>${txt(L,'Анамнез и осмотр','History and examination','Анамнез және тексеру')}</summary><p>${txt(L,'Синтетический случай пневмоторакса: воздух в плевральной полости нарушает передачу растягивающего давления на лёгкое. Оценивается механизм, не лечебная тактика.','Synthetic pneumothorax case: air in the pleural space disrupts transmission of distending pressure to the lung. The task addresses mechanism, not treatment.','Пневмоторакстың жасанды жағдайы: плевра қуысындағы ауа керуші қысымның өкпеге берілуін бұзады. Емдеу тактикасы емес, механизм бағаланады.')}</p></details>`;
}
function patientVisuals(L){return `<div class="patient-illustrations" style="display:flex;gap:16px;align-items:start;flex-wrap:wrap"><figure style="margin:0;max-width:150px"><img src="/assets/module2/patient.webp" alt="${txt(L,'Учебная иллюстрация пациента','Educational patient illustration','Пациенттің оқу иллюстрациясы')}" loading="lazy" style="max-width:100%;height:110px;object-fit:contain"><figcaption style="font-size:12px">${txt(L,'Пациент · иллюстрация','Patient · illustration','Пациент · иллюстрация')}</figcaption></figure><figure style="margin:0;max-width:150px"><img src="/assets/module2/mentor.webp" alt="${txt(L,'Учебная иллюстрация наставника','Educational mentor illustration','Тәлімгердің оқу иллюстрациясы')}" loading="lazy" style="max-width:100%;height:110px;object-fit:contain"><figcaption style="font-size:12px">${txt(L,'Наставник · иллюстрация','Mentor · illustration','Тәлімгер · иллюстрация')}</figcaption></figure></div>`;}
export function modulePatient(mid,L){
 const index=modulePatientIndices[mid-1],c=cases[index];
 if(!c)return '';
 return `<section class="lesson"><article class="patient-card advanced-case" data-advanced="${index}"><h3>${esc(c.title[L])}</h3>${patientVisuals(L)}<p>${txt(L,'Сначала интерпретируйте данные, затем выберите исследование и объясните результат.','Interpret the findings, choose an investigation, then explain its result.','Алдымен деректерді түсіндіріп, зерттеуді таңдаңыз және нәтижесін талдаңыз.')}</p>${patientContext(mid,L)}<div class="advanced-stage"></div></article></section>`;
}
export const patientScenarioData=cases;
export function advancedPatients(L){
return `<main class="wrap" id="main"><h1>${txt(L,'Многоэтапные виртуальные пациенты','Advanced virtual patients','Көпкезеңді виртуалды пациенттер')}</h1><p>${txt(L,'Клинико-физиологические сценарии: три основных этапа, выбор исследования и разветвлённое решение. Учебная модель, не инструмент диагностики.','Clinical physiology scenarios: three core stages, investigation choice and branching follow-up. Educational only, not diagnostic.','Клиникалық-физиологиялық сценарийлер: үш негізгі кезең, зерттеу таңдауы және тармақталған шешім. Тек оқу мақсатында.')}</p><div class="patient-grid">${cases.map((c,i)=>`<article class="patient-card advanced-case" data-advanced="${i}"><h2>${i+1}. ${esc(c.title[L])}</h2>${patientVisuals(L)}${caseContext(i,L)}<div class="advanced-stage"></div></article>`).join('')}</div></main>`;
}
export function initAdvancedPatients(L){
 document.querySelectorAll('[data-advanced]').forEach(el=>{
  const c=cases[Number(el.dataset.advanced)];let step=0,score=0,answered=false;const extra=allInvestigationCases[Number(el.dataset.advanced)]||null;
  const panel=el.querySelector('.advanced-stage');const total=c.stages.length+(extra?2:0)+(evidenceFor(Number(el.dataset.advanced))?1:0);el.dataset.totalStages=total;let reviews=[];
 el.addEventListener('click',event=>{const button=event.target.closest('[data-answer],[data-investigation],[data-branch],[data-evidence]');if(!button||!panel.contains(button))return;const type=['answer','investigation','branch','evidence'].find(key=>button.hasAttribute('data-'+key));const question=type==='answer'?c.stages[step].question[L]:type==='investigation'?extra.question[L]:type==='evidence'?evidenceFor(Number(el.dataset.advanced)).q[L]:panel.querySelector('.patient-investigation>p:not(:has(strong))')?.textContent||txt(L,'Интерпретация данных','Evidence interpretation','Деректерді түсіндіру');const correct=panel.querySelector('.patient-options .correct');reviews.push({question,chosen:button.textContent,correct:correct?.textContent||'',ok:button.classList.contains('correct'),why:panel.querySelector('.patient-feedback')?.textContent||''});});
  function render(){answered=false;if(extra&&step===3){showInvestigation(L,panel,extra,(firstCorrect,branchCorrect)=>{if(firstCorrect)score++;if(branchCorrect)score++;step++;render()});return;}if(step===4&&evidenceFor(Number(el.dataset.advanced))){showEvidence(L,panel,evidenceFor(Number(el.dataset.advanced)),ok=>{if(ok)score++;step++;render()});return;}const s=c.stages[step];
   if(!s){panel.innerHTML=`<p role="status"><strong>${txt(L,'Результат','Result','Нәтиже')}: ${score}/${total} (${Math.round(100*score/total)}%)</strong></p><ol class="patient-final-review">${reviews.map(r=>`<li><p data-feedback>${r.ok?'✓':'✗'} ${esc(r.question)}</p><p>${txt(L,'Ваш ответ: ','Your answer: ','Сіздің жауабыңыз: ')}${esc(r.chosen)}</p><p>${txt(L,'Правильный ответ: ','Correct answer: ','Дұрыс жауап: ')}${esc(r.correct)}</p><p>${esc(r.why)}</p></li>`).join('')}</ol><button type="button" class="advanced-restart">${txt(L,'Пройти заново','Restart','Қайта бастау')}</button>`;panel.querySelector('button').onclick=()=>{step=0;score=0;reviews=[];render()};return;}
   panel.innerHTML=`<p><strong>${step+1}/${total} · ${esc(s.title[L])}</strong></p><p>${esc(s.question[L])}</p><div class="patient-options">${shuffledEntries(s.options[L]).map(([o,j])=>`<button type="button" data-answer="${j}">${esc(o)}</button>`).join('')}</div><p class="patient-feedback" role="status" aria-live="polite"></p><div class="advanced-next"></div>`;
   panel.querySelectorAll('[data-answer]').forEach(button=>button.onclick=()=>{
    if(answered)return;answered=true;const chosen=Number(button.dataset.answer),ok=chosen===s.correct;if(ok)score++;
    panel.querySelectorAll('[data-answer]').forEach(b=>{b.disabled=true;b.classList.toggle('correct',Number(b.dataset.answer)===s.correct);b.classList.toggle('incorrect',b===button&&!ok)});
    panel.querySelector('.patient-feedback').textContent=`${ok?txt(L,'Верно. ','Correct. ','Дұрыс. '):txt(L,'Неверно. ','Incorrect. ','Қате. ')}${s.why[L]}`;
    const next=document.createElement('button');next.type='button';next.textContent=step===2&&extra?txt(L,'Выбрать исследование','Choose investigation','Зерттеуді таңдау'):step===2?txt(L,'Завершить случай','Finish case','Жағдайды аяқтау'):txt(L,'Следующий этап →','Next stage →','Келесі кезең →');next.onclick=()=>{step++;render()};panel.querySelector('.advanced-next').append(next);
   });
  }render();
 });
}

function shuffledEntries(values){const entries=values.map((value,index)=>[value,index]);for(let i=entries.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[entries[i],entries[j]]=[entries[j],entries[i]];}return entries;}
