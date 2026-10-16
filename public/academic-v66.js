// V66: targeted trilingual academic lessons, modules 11-15.
const lessons={
  "11": {
    "title": [
      "Диффузионная способность и капиллярное время транзита",
      "Diffusing capacity and capillary transit time",
      "Диффузиялық қабілет және капиллярлық транзит уақыты"
    ],
    "theory": [
      "Перенос кислорода через аэрогематический барьер определяется градиентом парциального давления, площадью поверхности, толщиной барьера и физико-химическими свойствами газа. Закон Фика описывает диффузионный поток как величину, пропорциональную A·D·ΔP/T. У здорового человека в покое насыщение гемоглобина кислородом обычно достигает почти полного равновесия с альвеолярным газом до окончания капиллярного транзита. При интерстициальном поражении и высокой нагрузке диффузионный резерв может уменьшаться. DLCO отражает не только свойства мембраны, но и капиллярный объём крови и гемоглобин; результаты интерпретируют с учётом Hb.",
      "Oxygen transfer across the blood–gas barrier depends on the partial-pressure gradient, surface area, barrier thickness and gas properties. Fick’s law describes flux as proportional to A·D·ΔP/T. In healthy lungs at rest, end-capillary oxygen usually approaches alveolar equilibrium before transit ends. Interstitial disease and heavy exercise can reduce this reserve. DLCO reflects both membrane conductance and pulmonary capillary blood volume and depends on haemoglobin concentration.",
      "Оттегінің альвеола–капилляр тосқауылы арқылы өтуі парциалдық қысым айырмасына, ауданға, тосқауыл қалыңдығына және газ қасиеттеріне тәуелді. Фик заңы бойынша ағын A·D·ΔP/T шамасына пропорционал. Тыныштықта сау өкпеде капилляр қаны транзит аяқталмай тұрып альвеолалық оттегімен тепе-теңдікке жуықтайды. Интерстициялық ауруда және ауыр жүктемеде диффузиялық резерв төмендеуі мүмкін. DLCO мембраналық өткізгіштікке, капилляр қанының көлеміне және гемоглобинге тәуелді."
    ],
    "task": [
      "Если площадь диффузии уменьшается на 30%, а толщина барьера увеличивается в 1,5 раза, как изменится поток при прежних D и ΔP? Почему это не является прямым прогнозом PaO₂?",
      "If surface area decreases by 30% and barrier thickness increases 1.5-fold, how does predicted flux change at constant D and ΔP? Why does this not directly predict PaO₂?",
      "Диффузия ауданы 30%-ға азайып, тосқауыл қалыңдығы 1,5 есе артса, D және ΔP өзгермегенде ағын қалай өзгереді? Неліктен бұл PaO₂-ні тікелей болжай алмайды?"
    ],
    "answer": [
      "Отношение потоков =0,70/1,50≈0,47, то есть идеализированный поток снижается примерно на 53%. Артериальное PaO₂ дополнительно зависит от V/Q, шунта, вентиляции и сердечного выброса.",
      "Flux ratio =0.70/1.50≈0.47, an approximately 53% reduction in this idealized model. Arterial PaO₂ also depends on V/Q mismatch, shunt, ventilation and cardiac output.",
      "Ағындар қатынасы 0,70/1,50≈0,47: идеал модельде ағын шамамен 53%-ға төмендейді. Артериялық PaO₂ V/Q сәйкестігіне, шунтқа, вентиляцияға және жүрек шығарылымына да тәуелді."
    ]
  },
  "12": {
    "title": [
      "Лёгочное сосудистое сопротивление и рекрутирование",
      "Pulmonary vascular resistance and recruitment",
      "Өкпе тамырлық кедергісі және капиллярлардың ашылуы"
    ],
    "theory": [
      "Лёгочное кровообращение — система низкого давления и низкого сосудистого сопротивления. Среднее давление в лёгочной артерии, давление в левом предсердии (приближённо оцениваемое по давлению заклинивания при корректном измерении) и сердечный выброс позволяют рассчитать PVR=(mPAP−PAWP)/CO. При нагрузке повышение потока сопровождается рекрутированием и растяжением сосудов, поэтому давление растёт относительно умеренно. Альвеолярная гипоксия вызывает локальную вазоконстрикцию и перераспределяет перфузию, но при распространённой гипоксии повышает общее сосудистое сопротивление.",
      "Pulmonary circulation operates at low pressure and low resistance. PVR=(mPAP−PAWP)/CO, using mean pulmonary arterial pressure, pulmonary arterial wedge pressure and cardiac output, provided wedge pressure is validly measured. Recruitment and distension accommodate increased flow during exercise. Regional alveolar hypoxia causes vasoconstriction, which can redirect perfusion, whereas widespread hypoxia raises total resistance.",
      "Өкпелік қанайналым төмен қысымды және төмен кедергілі жүйе. PVR=(mPAP−PAWP)/CO; мұнда өкпе артериясының орташа қысымы, сына қысымы және жүрек шығарылымы қолданылады. Жүктемеде тамырлардың ашылуы мен кеңеюі қан ағынының артуын қамтамасыз етеді. Жергілікті альвеолалық гипоксия вазоконстрикция туғызады, ал жайылған гипоксия жалпы кедергіні арттырады."
    ],
    "task": [
      "mPAP=25 мм рт. ст., PAWP=10 мм рт. ст., CO=5 л/мин. Рассчитайте PVR в единицах Вуда и объясните ограничение этого расчёта.",
      "mPAP=25 mmHg, PAWP=10 mmHg and CO=5 L/min. Calculate PVR in Wood units and name one limitation.",
      "mPAP=25 мм сын. бағ., PAWP=10 мм сын. бағ., CO=5 л/мин. PVR-ді Вуд бірлігінде есептеп, бір шектеуін түсіндіріңіз."
    ],
    "answer": [
      "PVR=(25−10)/5=3 единицы Вуда. Это гемодинамическое отношение, зависящее от корректного измерения давлений и потока; оно не описывает напрямую микрососудистую архитектуру.",
      "PVR=(25−10)/5=3 Wood units. The estimate requires reliable pressure and flow measurements and does not directly describe microvascular anatomy.",
      "PVR=(25−10)/5=3 Вуд бірлігі. Есептеу үшін қысым мен ағын дәл өлшенуі керек; нәтиже микроқантамыр құрылымын тікелей сипаттамайды."
    ]
  },
  "13": {
    "title": [
      "Шунт, мёртвое пространство и неоднородность V/Q",
      "Shunt, dead space and V/Q heterogeneity",
      "Шунт, өлі кеңістік және V/Q біркелкі еместігі"
    ],
    "theory": [
      "Отношение альвеолярной вентиляции к перфузии (V/Q) различается между лёгочными единицами. При V/Q→0 кровь проходит через невентилируемые альвеолы — это шунтоподобный крайний случай; при V/Q→∞ альвеолы вентилируются без перфузии — крайний случай альвеолярного мёртвого пространства. Смешение крови из участков с низким V/Q особенно существенно снижает PaO₂, поскольку высокая сатурация крови из хорошо вентилируемых единиц не компенсирует полностью низкое содержание кислорода из плохо вентилируемых единиц. Ответ на кислород различается при V/Q-несоответствии и значительном истинном шунте.",
      "The ventilation-to-perfusion ratio varies among lung units. V/Q approaching zero describes perfused but unventilated units (shunt limit), while V/Q approaching infinity describes ventilated but unperfused units (dead-space limit). Blood mixing from low-V/Q units lowers arterial oxygenation; high-V/Q units cannot fully compensate because haemoglobin is already near saturation. Supplemental oxygen often improves V/Q mismatch more than a large true shunt.",
      "Альвеолалық вентиляция мен перфузияның қатынасы (V/Q) өкпе аймақтарында әртүрлі. V/Q нөлге жақындаса, қан вентиляцияланбайтын альвеоладан өтеді (шунт шегі); V/Q шексіздікке жақындаса, вентиляция бар, бірақ перфузия жоқ (өлі кеңістік шегі). Төмен V/Q аймақтарынан келетін қан артериялық оттегіленуді төмендетеді; жоғары V/Q аймақтары оны толық өтей алмайды, себебі гемоглобин қанығуы шектелген."
    ],
    "task": [
      "Две единицы имеют V̇A/Q̇: первая 2 л/мин / 4 л/мин, вторая 3 л/мин / 1 л/мин. Найдите отношения и объясните, почему среднее арифметическое этих отношений не равно глобальному V/Q.",
      "Two units have ventilation/perfusion 2/4 and 3/1 L/min. Calculate each ratio and explain why their arithmetic mean is not global V/Q.",
      "Екі аймақта вентиляция/перфузия 2/4 және 3/1 л/мин. Әр V/Q қатынасын есептеп, олардың арифметикалық ортасы неге жалпы V/Q-ға тең емес екенін түсіндіріңіз."
    ],
    "answer": [
      "Локальные V/Q равны 0,5 и 3,0; среднее 1,75, но глобальное V/Q=(2+3)/(4+1)=1,0. Суммарное отношение вычисляют из суммарных потоков, а не как невзвешенное среднее локальных отношений.",
      "Local V/Q values are 0.5 and 3.0; their mean is 1.75, but global V/Q=(2+3)/(4+1)=1.0. Total flows, not an unweighted mean of ratios, determine global V/Q.",
      "Жергілікті V/Q мәндері 0,5 және 3,0; орташа 1,75, ал жалпы V/Q=(2+3)/(4+1)=1,0. Жалпы қатынас жеке қатынастардың жай орташа мәнімен емес, ағындардың қосындысымен есептеледі."
    ]
  },
  "14": {
    "title": [
      "Содержание кислорода и его доставка тканям",
      "Oxygen content and systemic oxygen delivery",
      "Оттегі мөлшері және тіндерге жеткізілуі"
    ],
    "theory": [
      "Артериальное содержание кислорода CaO₂≈1,34·Hb·SaO₂+0,003·PaO₂ (мл O₂/дл при Hb в г/дл, PaO₂ в мм рт. ст., SaO₂ как доля). Основная часть кислорода связана с гемоглобином; растворённая доля обычно мала. Системная доставка кислорода DO₂=CO·CaO₂·10 (мл/мин, если CO в л/мин). Поэтому нормальная сатурация не исключает уменьшения кислородной доставки при анемии или низком сердечном выбросе.",
      "Arterial oxygen content is CaO₂≈1.34·Hb·SaO₂+0.003·PaO₂ (mL O₂/dL with Hb in g/dL, PaO₂ in mmHg and SaO₂ as a fraction). Most oxygen is haemoglobin-bound. Oxygen delivery is DO₂=CO·CaO₂·10 (mL/min for CO in L/min). Normal saturation does not rule out impaired delivery in anaemia or low cardiac output.",
      "Артериялық оттегі мөлшері CaO₂≈1,34·Hb·SaO₂+0,003·PaO₂ (мл O₂/дл; Hb г/дл, PaO₂ мм сын. бағ., SaO₂ үлес түрінде). Оттегінің басым бөлігі гемоглобинмен байланысқан. Жеткізілуі DO₂=CO·CaO₂·10 (мл/мин, CO л/мин). Сондықтан қалыпты сатурация анемияда немесе жүрек шығарылымы төмендегенде жеткіліксіз оттегі тасымалын жоққа шығармайды."
    ],
    "task": [
      "Hb=10 г/дл, SaO₂=0,98, PaO₂=100 мм рт. ст., CO=5 л/мин. Вычислите CaO₂ и DO₂.",
      "Hb=10 g/dL, SaO₂=0.98, PaO₂=100 mmHg, CO=5 L/min. Calculate CaO₂ and DO₂.",
      "Hb=10 г/дл, SaO₂=0,98, PaO₂=100 мм сын. бағ., CO=5 л/мин. CaO₂ және DO₂ есептеңіз."
    ],
    "answer": [
      "CaO₂≈1,34·10·0,98+0,003·100=13,43 мл/дл; DO₂≈5·13,43·10=671,6 мл/мин. Это оценка доставки, не показатель фактического потребления кислорода тканями.",
      "CaO₂≈1.34·10·0.98+0.003·100=13.43 mL/dL; DO₂≈5·13.43·10=671.6 mL/min. Delivery is not the same as tissue oxygen consumption.",
      "CaO₂≈1,34·10·0,98+0,003·100=13,43 мл/дл; DO₂≈5·13,43·10=671,6 мл/мин. Бұл жеткізілу бағасы, тіндердің нақты оттегі тұтынуы емес."
    ]
  },
  "15": {
    "title": [
      "Бикарбонатный перенос CO₂ и эффект Холдейна",
      "Bicarbonate transport of CO₂ and the Haldane effect",
      "CO₂ бикарбонат түрінде тасымалдануы және Холдейн әсері"
    ],
    "theory": [
      "CO₂ переносится в крови в растворённой форме, в виде карбаминовых соединений и преимущественно как бикарбонат. В эритроцитах карбоангидраза ускоряет обратимую реакцию CO₂+H₂O⇌H₂CO₃⇌H⁺+HCO₃⁻. Выход HCO₃⁻ в плазму сопровождается обменом на Cl⁻ (хлоридный сдвиг). Дезоксигемоглобин лучше связывает H⁺ и способствует переносу CO₂ в тканях; оксигенация гемоглобина в лёгких облегчает отдачу CO₂ — эффект Холдейна. Его необходимо отличать от эффекта Бора, описывающего влияние CO₂/H⁺ на сродство Hb к O₂.",
      "CO₂ travels dissolved, as carbamino compounds and predominantly as bicarbonate. Erythrocyte carbonic anhydrase catalyses CO₂+H₂O⇌H₂CO₃⇌H⁺+HCO₃⁻. Bicarbonate exits in exchange for chloride (chloride shift). Deoxygenated haemoglobin buffers H⁺ more effectively, favouring CO₂ carriage in tissues; oxygenation in the lungs promotes CO₂ unloading (Haldane effect). This differs from the Bohr effect, which concerns how CO₂/H⁺ changes haemoglobin affinity for oxygen.",
      "CO₂ қанда еріген күйде, карбамин қосылыстары түрінде және көбіне бикарбонат ретінде тасымалданады. Эритроциттегі карбоангидраза CO₂+H₂O⇌H₂CO₃⇌H⁺+HCO₃⁻ реакциясын жылдамдатады. Бикарбонат плазмаға шыққанда хлоридпен алмасады (хлоридтік ығысу). Оттегісізденген гемоглобин H⁺ иондарын жақсырақ байланыстырады, ал өкпеде оттегімен қанығу CO₂ бөлінуін жеңілдетеді (Холдейн әсері). Бұл CO₂/H⁺ әсерінен Hb-ның O₂-ге туыстығы өзгеретін Бор әсерінен өзгеше."
    ],
    "task": [
      "При PaCO₂=40 мм рт. ст. и HCO₃⁻=24 ммоль/л оцените pH по уравнению Хендерсона–Хассельбаха: pH=6,1+log₁₀(HCO₃⁻/(0,03·PaCO₂)). Укажите физиологическое допущение.",
      "At PaCO₂=40 mmHg and HCO₃⁻=24 mmol/L estimate pH using pH=6.1+log₁₀(HCO₃⁻/(0.03·PaCO₂)). State one assumption.",
      "PaCO₂=40 мм сын. бағ., HCO₃⁻=24 ммоль/л болғанда pH=6,1+log₁₀(HCO₃⁻/(0,03·PaCO₂)) бойынша pH есептеңіз. Бір болжамын көрсетіңіз."
    ],
    "answer": [
      "pH=6,1+log₁₀(24/1,2)=6,1+log₁₀(20)≈7,40. Расчёт предполагает применимость стандартных констант при температуре тела и согласованность измерений крови.",
      "pH=6.1+log₁₀(24/1.2)=6.1+log₁₀(20)≈7.40. The calculation assumes standard body-temperature constants and internally consistent blood measurements.",
      "pH=6,1+log₁₀(24/1,2)=6,1+log₁₀(20)≈7,40. Есептеуде дене температурасына сәйкес стандарт тұрақтылар және қан өлшемдерінің үйлесімділігі болжанады."
    ]
  }
};
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]||c));
export function academicV66(mid,section,L){const x=lessons[mid];if(!x||!["theory","practice","cases"].includes(section))return "";const h=[["Академический разбор","Academic analysis","Академиялық талдау"],["Задача","Exercise","Тапсырма"],["Решение","Solution","Шешімі"]];return `<section class="lesson-card academic-v66"><h3>${esc(h[0][L])}: ${esc(x.title[L])}</h3><p>${esc(x.theory[L])}</p>${section==="theory"?"":`<h4>${esc(h[1][L])}</h4><p>${esc(x.task[L])}</p><details><summary>${esc(h[2][L])}</summary><p>${esc(x.answer[L])}</p></details>`}</section>`;}
