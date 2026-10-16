// Original supplemental teaching examples. Educational interpretation, not clinical decision support.
const examples = {
  "1": [
    "При одинаковой вентиляции кислородная доставка может снижаться из-за анемии: содержание O₂ в крови зависит прежде всего от гемоглобина, а не только от PaO₂.",
    "With unchanged ventilation, oxygen delivery may fall in anemia: blood O₂ content depends chiefly on hemoglobin, not PaO₂ alone.",
    "Желдетілу өзгермесе де, анемияда оттегінің жеткізілуі төмендеуі мүмкін: қандағы O₂ мөлшері тек PaO₂-ге емес, көбіне гемоглобинге тәуелді."
  ],
  "2": [
    "Проводящие пути не участвуют непосредственно в альвеолярном газообмене; их объём формирует анатомическое мёртвое пространство.",
    "Conducting airways do not directly exchange alveolar gases; their volume contributes to anatomical dead space.",
    "Ауа өткізетін жолдар альвеолалық газ алмасуға тікелей қатыспайды; олардың көлемі анатомиялық өлі кеңістікті құрайды."
  ],
  "3": [
    "При сокращении диафрагмы плевральное давление становится более отрицательным, а транспульмональное давление увеличивается.",
    "Diaphragm contraction makes pleural pressure more negative and increases transpulmonary pressure.",
    "Көкет жиырылғанда плевралық қысым терісірек болып, транспульмоналдық қысым жоғарылайды."
  ],
  "4": [
    "В спокойном дыхании выдох преимущественно пассивен; при форсированном выдохе включаются мышцы живота и внутренние межрёберные мышцы.",
    "Quiet expiration is mainly passive; forced expiration recruits abdominal and internal intercostal muscles.",
    "Тыныш дем шығару негізінен пассивті; күшті дем шығаруға құрсақ және ішкі қабырғааралық бұлшықеттер қатысады."
  ],
  "5": [
    "Сурфактант снижает поверхностное натяжение и работу вдоха. Закон Лапласа для идеальной сферы не следует напрямую переносить на связанные между собой альвеолы.",
    "Surfactant reduces surface tension and inspiratory work. Laplace's law for an ideal sphere should not be applied uncritically to interconnected alveoli.",
    "Сурфактант беттік керілуді және дем алу жұмысын азайтады. Идеал шарға арналған Лаплас заңын өзара байланысқан альвеолаларға тікелей қолдануға болмайды."
  ],
  "6": [
    "Уменьшение радиуса бронха при ламинарном потоке резко повышает сопротивление; в реальном бронхиальном дереве важны также турбулентность и динамическое сдавление.",
    "Reducing airway radius sharply raises laminar resistance; real airways also exhibit turbulence and dynamic compression.",
    "Бронх радиусы кішірейсе, ламинарлық ағыста кедергі күрт өседі; нақты тыныс жолдарында турбуленттілік пен динамикалық қысылу да маңызды."
  ],
  "7": [
    "Обычная спирометрия не измеряет остаточный объём напрямую; поэтому ФОЕ и ОЕЛ требуют дополнительных методов.",
    "Simple spirometry cannot measure residual volume directly; FRC and TLC require additional methods.",
    "Қарапайым спирометрия қалдық көлемді тікелей өлшемейді; сондықтан функционалдық қалдық сыйымдылық пен жалпы өкпе сыйымдылығын анықтауға қосымша әдістер қажет."
  ],
  "8": [
    "Если дыхательный объём 500 мл, мёртвое пространство 150 мл, частота 12/мин, альвеолярная вентиляция составляет (500−150)×12 = 4200 мл/мин.",
    "For tidal volume 500 mL, dead space 150 mL and rate 12/min, alveolar ventilation is (500−150)×12 = 4200 mL/min.",
    "Тыныс көлемі 500 мл, өлі кеңістік 150 мл, жиілік 12/мин болса, альвеолалық желдетілу (500−150)×12 = 4200 мл/мин."
  ],
  "9": [
    "По закону Фика диффузионный поток увеличивается с площадью и градиентом парциального давления и уменьшается при утолщении барьера.",
    "By Fick's law, diffusion increases with surface area and partial-pressure gradient and decreases as barrier thickness rises.",
    "Фик заңына сәйкес диффузия беткей ауданы мен парциалдық қысым айырмасы артқанда күшейеді, ал тосқауыл қалыңдағанда азаяды."
  ],
  "10": [
    "На уровне моря при атмосферном давлении 760 мм рт. ст. и температуре тела увлажнённый вдохновляемый газ имеет PIO₂≈(760−47)×0,21≈150 мм рт. ст.",
    "At sea level with barometric pressure 760 mmHg, humidified inspired oxygen has PIO₂≈(760−47)×0.21≈150 mmHg at body temperature.",
    "Теңіз деңгейінде барометрлік қысым 760 мм сын.бағ. болса, дене температурасында ылғалданған дем ауасындағы PIO₂≈(760−47)×0,21≈150 мм сын.бағ."
  ],
  "11": [
    "Утолщение альвеолокапиллярного барьера и сокращение времени контакта крови с альвеолой могут ограничивать диффузию, особенно при нагрузке.",
    "Thickening the alveolar–capillary barrier and shortening capillary transit time can limit diffusion, especially during exercise.",
    "Альвеола-капилляр тосқауылының қалыңдауы және қанның жанасу уақытының қысқаруы, әсіресе жүктемеде, диффузияны шектеуі мүмкін."
  ],
  "12": [
    "Гипоксическая вазоконстрикция лёгочных артериол перераспределяет кровоток от плохо вентилируемых альвеол; распространённая гипоксия может повысить лёгочное сосудистое сопротивление.",
    "Hypoxic pulmonary vasoconstriction diverts flow away from poorly ventilated alveoli; widespread hypoxia may increase pulmonary vascular resistance.",
    "Өкпе артериолаларының гипоксиялық тарылуы қанды нашар желдетілетін альвеолалардан бұрады; жайылған гипоксия өкпелік тамырлық кедергіні арттыруы мүмкін."
  ],
  "13": [
    "Шунт характеризуется перфузией без эффективной вентиляции, тогда как альвеолярное мёртвое пространство — вентиляцией без достаточной перфузии.",
    "Shunt means perfusion without effective ventilation; alveolar dead space means ventilation without adequate perfusion.",
    "Шунт — тиімді желдетілусіз перфузия, ал альвеолалық өлі кеңістік — жеткілікті перфузиясыз желдетілу."
  ],
  "14": [
    "При Hb 15 г/дл и SaO₂ 98% связанный с гемоглобином O₂ ≈1,34×15×0,98≈19,7 мл/дл; растворённая фракция значительно меньше.",
    "At Hb 15 g/dL and SaO₂ 98%, hemoglobin-bound O₂ ≈1.34×15×0.98≈19.7 mL/dL; dissolved O₂ is much smaller.",
    "Hb 15 г/дл және SaO₂ 98% кезінде гемоглобинмен байланысқан O₂ ≈1,34×15×0,98≈19,7 мл/дл; еріген үлесі әлдеқайда аз."
  ],
  "15": [
    "CO₂ переносится преимущественно в виде бикарбоната; карбоангидраза эритроцитов ускоряет взаимопревращение CO₂ и HCO₃⁻.",
    "Most CO₂ is transported as bicarbonate; erythrocyte carbonic anhydrase accelerates CO₂/HCO₃⁻ interconversion.",
    "CO₂ негізінен бикарбонат түрінде тасымалданады; эритроцит карбоангидразасы CO₂ мен HCO₃⁻ өзара айналуын жылдамдатады."
  ],
  "16": [
    "Острая гипервентиляция снижает PaCO₂ и повышает pH; компенсация почками развивается медленнее дыхательного ответа.",
    "Acute hyperventilation lowers PaCO₂ and raises pH; renal compensation develops more slowly than respiratory change.",
    "Жедел гипервентиляция PaCO₂-ні төмендетіп, pH-ты арттырады; бүйректік компенсация тыныстық жауаптан баяу дамиды."
  ],
  "17": [
    "Дыхательный ритм формируется распределёнными нейронными сетями ствола мозга; один изолированный «центр вдоха» не объясняет всю регуляцию.",
    "Respiratory rhythm arises from distributed brainstem networks; a single isolated inspiratory center does not explain all control.",
    "Тыныс ырғағы ми бағанының таралған нейрондық желілерінде түзіледі; жалғыз «дем алу орталығы» барлық реттелуді түсіндірмейді."
  ],
  "18": [
    "Вагусные афференты от рецепторов растяжения могут ограничивать вдох; выраженность рефлекса зависит от вида, возраста и дыхательного объёма.",
    "Vagal stretch-receptor afferents can terminate inspiration; reflex prominence depends on species, age and tidal volume.",
    "Созылу рецепторларынан келетін кезбе жүйке афференттері дем алуды шектей алады; рефлекс айқындығы түрге, жасқа және тыныс көлеміне тәуелді."
  ],
  "19": [
    "Центральная хемочувствительность главным образом связана с CO₂-обусловленным изменением pH мозговой внеклеточной жидкости; периферические тельца реагируют также на снижение PaO₂.",
    "Central chemosensitivity mainly reflects CO₂-driven brain extracellular pH changes; peripheral bodies also respond to low PaO₂.",
    "Орталық хемосезімталдық көбіне CO₂ әсерінен мидың жасушадан тыс сұйықтығы pH-ының өзгеруіне байланысты; шеткі денешіктер PaO₂ төмендеуіне де жауап береді."
  ],
  "20": [
    "При умеренной нагрузке вентиляция обычно растёт соразмерно продукции CO₂; при тяжёлой нагрузке буферизация лактат-ассоциированной кислоты дополнительно стимулирует вентиляцию.",
    "During moderate exercise ventilation generally tracks CO₂ production; at heavy exercise buffering of lactate-associated acid further stimulates ventilation.",
    "Орташа жүктемеде желдетілу көбіне CO₂ түзілуіне сай артады; ауыр жүктемеде лактатпен байланысты қышқылдың буферленуі желдетілуді қосымша күшейтеді."
  ],
  "21": [
    "На высоте снижение барометрического давления уменьшает PIO₂. Гипервентиляция частично поддерживает PAO₂, но вызывает респираторный алкалоз, который со временем компенсируется почками.",
    "At altitude lower barometric pressure reduces PIO₂. Hyperventilation partly preserves PAO₂ but causes respiratory alkalosis, later compensated by kidneys.",
    "Биіктікте барометрлік қысым төмендеп, PIO₂ азаяды. Гипервентиляция PAO₂-ні ішінара сақтайды, бірақ кейін бүйрек өтейтін тыныстық алкалоз туғызады."
  ],
  "22": [
    "Во сне уменьшается поведенческая стимуляция дыхания, а ответ на CO₂ и гипоксию изменяется; параметры зависят от фазы сна и возраста.",
    "During sleep behavioral respiratory drive decreases and CO₂/hypoxic responsiveness changes; effects depend on sleep stage and age.",
    "Ұйқыда тыныстың мінез-құлықтық ынталануы төмендеп, CO₂ мен гипоксияға жауап өзгереді; әсер ұйқы кезеңі мен жасқа байланысты."
  ],
  "23": [
    "При погружении повышенное внешнее давление изменяет плотность вдыхаемого газа и работу дыхания; парциальные давления газов зависят от глубины и состава смеси.",
    "During diving ambient pressure changes inspired-gas density and breathing work; gas partial pressures depend on depth and mixture.",
    "Сүңгу кезінде сыртқы қысым тыныс газының тығыздығы мен тыныс жұмысын өзгертеді; газдардың парциалдық қысымы тереңдік пен қоспаға тәуелді."
  ],
  "24": [
    "ОФВ₁/ФЖЕЛ помогает выявить обструкцию, но интерпретация требует качественной спирограммы, референсных уравнений и учёта возраста.",
    "FEV₁/FVC helps detect obstruction, but interpretation requires acceptable maneuvers, reference equations and age consideration.",
    "FEV₁/FVC обструкцияны анықтауға көмектеседі, бірақ түсіндіру үшін сапалы маневрлер, референстік теңдеулер және жас ерекшелігі ескеріледі."
  ],
  "25": [
    "Гипоксемия — снижение кислорода в артериальной крови, гипоксия — недостаточное обеспечение тканей кислородом; эти понятия не тождественны.",
    "Hypoxemia means low arterial oxygen; hypoxia means inadequate tissue oxygenation. These concepts are not synonymous.",
    "Гипоксемия — артериялық қанда оттегінің азаюы, гипоксия — тіндердің оттегімен жеткіліксіз қамтамасыз етілуі; бұл ұғымдар бірдей емес."
  ]
};
const labels=["Разбор физиологического примера","Worked physiological example","Физиологиялық мысалды талдау"];
const notes=["Условия и ограничения","Conditions and limitations","Шарттары мен шектеулері"];
const caveats=["Пример иллюстрирует механизм; численные значения зависят от условий и не являются индивидуальной нормой.","The example illustrates a mechanism; numerical values depend on conditions and are not individual reference limits.","Мысал механизмді түсіндіреді; сандық мәндер жағдайға тәуелді және жеке қалыпты шек болып саналмайды."];
export function expandedTheoryExample(mid,section,L){
 if(section!=="theory"||!examples[mid])return "";
 const e=examples[mid][L]||examples[mid][0];
 const escape=s=>String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
 return `<section class="note theory-worked-example"><h3>${escape(labels[L])}</h3><p>${escape(e)}</p><h4>${escape(notes[L])}</h4><p>${escape(caveats[L])}</p></section>`;
}
