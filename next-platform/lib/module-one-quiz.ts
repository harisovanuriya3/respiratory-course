import type {Language} from '../lib/course';
import type {QuizQuestion} from '../lib/legacy-quiz';
type Row=[string,[string,string,string,string],number,string];
const bank:Record<Language,{pre:Row[];tests:Row[]}>={
RU:{pre:[
['Какова основная функция вентиляции лёгких?',['Перенос воздуха между атмосферой и альвеолами','Перенос O₂ гемоглобином','Синтез сурфактанта','Использование O₂ в митохондриях'],0,'Вентиляция обновляет воздух в лёгких; перенос в крови и тканевое потребление — другие процессы.'],
['Что обеспечивает спокойный вдох?',['Расслабление диафрагмы','Сокращение диафрагмы','Сокращение брюшных мышц','Пассивная эластическая отдача лёгких'],1,'Диафрагма сокращается и опускается, увеличивая объём грудной клетки.'],
['Где заканчивается проводящая зона?',['В альвеолярных ходах','В респираторных бронхиолах','В терминальных бронхиолах','В альвеолярных мешочках'],2,'Терминальные бронхиолы — последняя часть проводящей зоны.'],
['Если альвеолярная вентиляция снижается, а продукция CO₂ неизменна, что обычно происходит?',['PaCO₂ уменьшается','PaCO₂ не изменяется','SpO₂ всегда возрастает','PaCO₂ увеличивается'],3,'При постоянной продукции CO₂ PaCO₂ примерно обратно пропорционально альвеолярной вентиляции.'],
['Какой показатель отражает насыщение гемоглобина кислородом по пульсоксиметру?',['SpO₂','PaCO₂','V̇A','Дыхательный объём'],0,'SpO₂ оценивает насыщение гемоглобина, но не его концентрацию или вентиляцию.']
],tests:[
['Что происходит с альвеолярным давлением во время входа воздуха при спокойном вдохе?',['Становится выше атмосферного','Становится немного ниже атмосферного','Равно артериальному давлению','Не изменяется'],1,'Поток воздуха внутрь требует небольшого снижения Palv ниже атмосферного давления.'],
['Как определить транспульмональное давление?',['Ppl − Palv','Palv + Ppl','Palv − Ppl','Ppl − атмосферное давление'],2,'Ptp = Palv − Ppl: растягивающее давление для лёгких.'],
['Какая функция относится к сурфактанту?',['Увеличивать вязкость крови','Увеличивать поверхностное натяжение','Закрывать капилляры','Снижать поверхностное натяжение'],3,'Сурфактант снижает поверхностное натяжение, облегчая расширение альвеол.'],
['При VT 500 мл и f 12/мин чему равна V̇E?',['6 л/мин','4,2 л/мин','0,6 л/мин','12 л/мин'],0,'V̇E = VT × f = 0,5 л × 12/мин = 6 л/мин.'],
['При VT 500 мл, VD 150 мл, f 12/мин чему равна V̇A?',['6 л/мин','4,2 л/мин','2,4 л/мин','0,35 л/мин'],1,'V̇A = (0,5 − 0,15) × 12 = 4,2 л/мин.'],
['Почему равная V̇E не обеспечивает равную V̇A?',['Из-за одинаковой частоты дыхания','Из-за постоянства PaO₂','Из-за разной доли мёртвого пространства','Из-за полного отсутствия диффузии'],2,'При поверхностном дыхании VD занимает большую долю каждого VT.'],
['Что происходит с PaCO₂ при снижении V̇A и неизменной продукции CO₂?',['Оно обязательно становится нулевым','Оно всегда снижается','Оно не зависит от вентиляции','Оно повышается'],3,'При постоянном V̇CO₂ PaCO₂ примерно обратно пропорционально V̇A.'],
['Какова роль эластической отдачи при спокойном выдохе?',['Она уменьшает объём лёгких','Она увеличивает объём грудной клетки','Она вызывает активное сокращение диафрагмы','Она полностью прекращает газообмен'],0,'Эластическая отдача обеспечивает пассивное опорожнение лёгких при спокойном выдохе.'],
['При уменьшении радиуса идеальной трубки вдвое как меняется сопротивление ламинарному потоку?',['В 2 раза','В 16 раз','В 4 раза','Не изменяется'],1,'По уравнению Пуазёйля сопротивление пропорционально 1/r⁴ при заданных допущениях.'],
['Что происходит с V̇A/Q̇ в вентилируемой, но неперфузируемой альвеоле?',['Стремится к нулю','Остаётся около 1','Стремится к бесконечности','Обязательно становится отрицательным'],2,'При Q̇ → 0 и сохранённой вентиляции отношение V̇A/Q̇ возрастает.'],
['Почему при выраженной анемии доставка кислорода может снижаться при нормальной SpO₂?',['Из-за высокой частоты дыхания','Из-за снижения плеврального давления','Потому что SpO₂ измеряет PaCO₂','Из-за меньшего содержания гемоглобина'],3,'CaO₂ зависит от количества Hb, его насыщения и небольшого растворённого компонента O₂.'],
['Что образует анатомическое мёртвое пространство?',['Дыхательные пути до терминальных бронхиол','Вся газообменная зона','Лёгочные капилляры','Только альвеолярные мешочки'],0,'Проводящие дыхательные пути не имеют альвеолярного газообмена.']
]},
EN:{pre:[
['What does lung ventilation chiefly do?',['Move air between atmosphere and alveoli','Carry O₂ on hemoglobin','Synthesize surfactant','Consume oxygen in mitochondria'],0,'Ventilation renews lung gas; blood transport and cellular use are separate processes.'],
['What drives quiet inspiration?',['Diaphragm relaxation','Diaphragm contraction','Abdominal muscle contraction','Passive elastic recoil'],1,'Diaphragm contraction enlarges the thorax.'],
['Where does the conducting zone end?',['Alveolar ducts','Respiratory bronchioles','Terminal bronchioles','Alveolar sacs'],2,'Terminal bronchioles are the last conducting-zone airways.'],
['With constant CO₂ production, what happens when alveolar ventilation decreases?',['PaCO₂ decreases','PaCO₂ is unchanged','SpO₂ always rises','PaCO₂ increases'],3,'PaCO₂ is approximately inversely related to V̇A at fixed CO₂ production.'],
['What is estimated by a pulse oximeter?',['SpO₂','PaCO₂','V̇A','Tidal volume'],0,'SpO₂ estimates hemoglobin saturation, not hemoglobin concentration or ventilation.']
],tests:[
['How does alveolar pressure change during inward airflow in quiet inspiration?',['Rises above atmosphere','Falls slightly below atmosphere','Equals arterial pressure','Never changes'],1,'Airflow inward needs a small alveolar-to-atmospheric pressure gradient.'],
['How is transpulmonary pressure defined?',['Ppl − Palv','Palv + Ppl','Palv − Ppl','Ppl minus atmosphere'],2,'Ptp = Palv − Ppl.'],
['What is a key action of surfactant?',['Increases blood viscosity','Increases surface tension','Closes capillaries','Reduces surface tension'],3,'Surfactant reduces alveolar surface tension.'],
['With VT 500 mL and f 12/min, what is V̇E?',['6 L/min','4.2 L/min','0.6 L/min','12 L/min'],0,'V̇E = 0.5 × 12 = 6 L/min.'],
['With VT 500 mL, VD 150 mL and f 12/min, what is V̇A?',['6 L/min','4.2 L/min','2.4 L/min','0.35 L/min'],1,'V̇A = (0.5 − 0.15) × 12 = 4.2 L/min.'],
['Why can equal V̇E yield unequal V̇A?',['Breathing rates are equal','PaO₂ is fixed','The dead-space fraction differs','Diffusion stops entirely'],2,'Smaller tidal breaths leave a larger fraction in dead space.'],
['At constant CO₂ production, reduced V̇A usually does what to PaCO₂?',['Makes it zero','Always lowers it','Has no effect','Raises it'],3,'PaCO₂ varies inversely with V̇A.'],
['What does elastic recoil do during quiet expiration?',['Reduces lung volume','Increases thoracic volume','Actively contracts diaphragm','Stops gas exchange'],0,'Elastic recoil drives passive lung emptying.'],
['When the radius of an ideal laminar-flow tube halves, resistance changes by what factor?',['Two','Sixteen','Four','Unchanged'],1,'Under Poiseuille assumptions resistance varies as 1/r⁴.'],
['In a ventilated but unperfused alveolus, V̇A/Q̇ tends toward what?',['Zero','One','Infinity','A negative number'],2,'Flow approaches zero while ventilation persists.'],
['Why can severe anemia reduce O₂ delivery with normal SpO₂?',['Raised breathing rate','Reduced pleural pressure','SpO₂ measures PaCO₂','Lower hemoglobin concentration'],3,'Oxygen content is strongly dependent on hemoglobin concentration.'],
['Which structure contributes to anatomical dead space?',['Airways ending at terminal bronchioles','All alveoli','Pulmonary capillaries','Only alveolar sacs'],0,'Conducting airways do not exchange alveolar gases.']
]},
KZ:{pre:[
['Өкпе вентиляциясының негізгі қызметі қандай?',['Атмосфера мен альвеола арасындағы ауаны алмастыру','O₂-ні гемоглобинмен тасымалдау','Сурфактант синтездеу','Митохондрияда O₂ пайдалану'],0,'Вентиляция альвеолалық ауаны жаңартады, қанмен тасымал және жасушалық пайдалану бөлек үрдістер.'],
['Тыныш дем алуды не қамтамасыз етеді?',['Диафрагманың босаңсуы','Диафрагманың жиырылуы','Іш бұлшықеттерінің жиырылуы','Енжар серпімді қайту'],1,'Диафрагма жиырылғанда кеуде көлемі ұлғаяды.'],
['Өткізгіш аймақ қайда аяқталады?',['Альвеолалық өзектерде','Респираторлық бронхиолаларда','Терминалдық бронхиолаларда','Альвеолалық қапшықтарда'],2,'Терминалдық бронхиолалар өткізгіш аймақтың соңғы бөлігі.'],
['CO₂ түзілуі тұрақты кезде V̇A азайса не болады?',['PaCO₂ төмендейді','PaCO₂ өзгермейді','SpO₂ міндетті түрде артады','PaCO₂ жоғарылайды'],3,'PaCO₂ тұрақты CO₂ өндірілуінде V̇A-ға кері тәуелді.'],
['Пульсоксиметр қандай көрсеткішті бағалайды?',['SpO₂','PaCO₂','V̇A','Тыныстық көлем'],0,'SpO₂ гемоглобин қанығуын бағалайды.']
],tests:[
['Тыныш дем алуда ауа ішке енгенде альвеолалық қысым қалай өзгереді?',['Атмосфералықтан жоғарылайды','Атмосфералықтан сәл төмендейді','Артериялық қысымға тең болады','Өзгермейді'],1,'Ауа ішке қысым айырмасы бойынша кіреді.'],
['Транспульмоналдық қысым қалай анықталады?',['Ppl − Palv','Palv + Ppl','Palv − Ppl','Ppl минус атмосфера'],2,'Ptp = Palv − Ppl.'],
['Сурфактанттың негізгі әсері қандай?',['Қан тұтқырлығын арттырады','Беттік керілуді арттырады','Капиллярларды жабады','Беттік керілуді азайтады'],3,'Сурфактант альвеоладағы беттік керілуді азайтады.'],
['VT 500 мл және f 12/мин болса V̇E қанша?',['6 л/мин','4,2 л/мин','0,6 л/мин','12 л/мин'],0,'V̇E = 0,5 × 12 = 6 л/мин.'],
['VT 500 мл, VD 150 мл, f 12/мин болса V̇A қанша?',['6 л/мин','4,2 л/мин','2,4 л/мин','0,35 л/мин'],1,'V̇A = (0,5 − 0,15) × 12 = 4,2 л/мин.'],
['Неге V̇E бірдей болса да V̇A әртүрлі болуы мүмкін?',['Тыныс жиілігі бірдей','PaO₂ тұрақты','Өлі кеңістік үлесі әртүрлі','Диффузия толық тоқтайды'],2,'Кіші VT кезінде өлі кеңістік үлесі жоғары.'],
['V̇A азайып CO₂ түзілуі өзгермесе PaCO₂ қалай өзгереді?',['Нөлге айналады','Әрқашан төмендейді','Әсер етпейді','Жоғарылайды'],3,'PaCO₂ альвеолалық вентиляцияға кері тәуелді.'],
['Тыныш дем шығаруда серпімді қайту не істейді?',['Өкпе көлемін азайтады','Кеуде көлемін арттырады','Диафрагманы белсенді жиырады','Газ алмасуды тоқтатады'],0,'Серпімді қайту өкпенің енжар босауына көмектеседі.'],
['Идеалды ламинарлық түтік радиусы екі есе азайса кедергі қалай өзгереді?',['Екі есе','Он алты есе','Төрт есе','Өзгермейді'],1,'Пуазейль заңы бойынша кедергі 1/r⁴ тәуелді.'],
['Вентиляция сақталып, перфузия жоқ альвеолада V̇A/Q̇ қалай өзгереді?',['Нөлге ұмтылады','Бірге тең','Шексіздікке ұмтылады','Теріс болады'],2,'Перфузия нөлге жақындаса қатынас ұлғаяды.'],
['Қалыпты SpO₂ жағдайында анемия неге O₂ жеткізілуін төмендетуі мүмкін?',['Тыныс жиілігі артады','Плевралық қысым азаяды','SpO₂ PaCO₂ өлшейді','Гемоглобин мөлшері аз'],3,'Оттегі мөлшері гемоглобин концентрациясына тәуелді.'],
['Анатомиялық өлі кеңістікке не кіреді?',['Терминалдық бронхиолаларға дейінгі ауа жолдары','Барлық альвеолалар','Өкпе капиллярлары','Тек альвеолалық қапшықтар'],0,'Өткізгіш аймақта альвеолалық газ алмасу жүрмейді.']
]}};
export function moduleOneQuiz(language:Language,mode:'pretest'|'tests'):QuizQuestion[]{return bank[language][mode==='pretest'?'pre':'tests'].map((q,id)=>({id,prompt:q[0],options:q[1].map((text,id)=>({id,text})),correctId:q[2],explanation:q[3]}))}
