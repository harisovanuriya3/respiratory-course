// Translations for legacy question banks that stored answer labels only in Russian.
const options={
 'Перфузируемая, но невентилируемая альвеола':['Perfused but unventilated alveolus','Перфузиясы бар, бірақ вентиляциясыз альвеола'],
 'Вентилируемая альвеола без кровотока':['Ventilated alveolus without blood flow','Қан ағымы жоқ, вентиляциясы бар альвеола'],
 'Высокое V/Q на верхушке':['High V/Q at the apex','Өкпе ұшындағы жоғары V/Q'],
 'Нормальная альвеола':['Normal alveolus','Қалыпты альвеола'],
 'Гемоглобин уже почти насыщен кислородом':['Hemoglobin is already nearly oxygen-saturated','Гемоглобин оттегімен дерлік қаныққан'],
 'Гемоглобин не переносит кислород':['Hemoglobin does not carry oxygen','Гемоглобин оттегіні тасымалдамайды'],
 'CO₂ не диффундирует':['CO₂ does not diffuse','CO₂ диффузияланбайды'],
 'Перфузия всегда равна нулю':['Perfusion is always zero','Перфузия әрқашан нөлге тең'],
 'Альвеолярное мёртвое пространство':['Alveolar dead space','Альвеолалық өлі кеңістік'],
 'Истинный шунт этой единицы':['True shunt in this unit','Осы бірліктегі нағыз шунт'],
 'Перфузия этой единицы':['Perfusion of this unit','Осы бірліктің перфузиясы'],
 'Потребление кислорода этой единицей':['Oxygen consumption by this unit','Осы бірліктің оттегі тұтынуы'],
 'Вызывает вазоконстрикцию':['Causes vasoconstriction','Вазоконстрикция туғызады'],
 'Вызывает обязательную вазодилатацию':['Always causes vasodilation','Міндетті түрде вазодилатация туғызады'],
 'Не влияет на сосудистый тонус':['Does not affect vascular tone','Тамыр тонусына әсер етпейді'],
 'Немедленно прекращает сердечный выброс':['Immediately stops cardiac output','Жүрек шығарылымын дереу тоқтатады'],
 'Шунтируемая кровь не контактирует с вентилируемыми альвеолами':['Shunted blood does not contact ventilated alveoli','Шунтталған қан вентиляциясы бар альвеолалармен жанаспайды'],
 'FiO₂ никогда не повышает альвеолярный PO₂':['FiO₂ never increases alveolar PO₂','FiO₂ альвеолалық PO₂-ні ешқашан арттырмайды'],
 'Гемоглобин отсутствует в крови':['Hemoglobin is absent from blood','Қанда гемоглобин жоқ'],
 'При шунте полностью прекращается кровообращение':['Shunt completely stops circulation','Шунт кезінде қанайналым толығымен тоқтайды'],
 'Из-за гипоксически стимулированной гипервентиляции':['Because of hypoxia-driven hyperventilation','Гипоксиядан туындаған гипервентиляция салдарынан'],
 'Из-за снижения продукции CO₂ до нуля':['Because CO₂ production falls to zero','CO₂ өндірілуі нөлге төмендегендіктен'],
 'Из-за прекращения работы каротидных телец':['Because carotid bodies stop functioning','Каротидтік денешіктер қызметі тоқтағандықтан'],
 'Из-за роста барометрического давления':['Because barometric pressure rises','Барометрлік қысым артқандықтан'],
 'Усиленное почечное выведение HCO₃⁻':['Increased renal HCO₃⁻ excretion','HCO₃⁻ бүйрекпен шығарылуының артуы'],
 'Полное выключение периферических хеморецепторов':['Complete loss of peripheral chemoreceptor activity','Перифериялық хеморецепторлар белсенділігінің толық жойылуы'],
 'Повышение PaCO₂ выше исходного':['PaCO₂ rises above baseline','PaCO₂ бастапқы деңгейден жоғарылауы'],
 'Прекращение выделения эритропоэтина':['Cessation of erythropoietin release','Эритропоэтин бөлінуінің тоқтауы'],
 'Повышение лёгочного сосудистого сопротивления':['Increased pulmonary vascular resistance','Өкпе тамырлық кедергісінің артуы'],
 'Снижение давления в лёгочной артерии до нуля':['Pulmonary arterial pressure falls to zero','Өкпе артериясындағы қысымның нөлге төмендеуі'],
 'Полное отсутствие сосудистой реакции':['No vascular response at all','Тамырлық жауаптың толық болмауы'],
 'Обязательное повышение системного артериального давления':['An obligatory rise in systemic blood pressure','Жүйелік артериялық қысымның міндетті түрде артуы'],
 'Новая атаксия и изменение сознания':['New ataxia and altered consciousness','Жаңадан пайда болған атаксия және сана өзгерісі'],
 'Умеренное увеличение частоты дыхания':['Moderate increase in respiratory rate','Тыныс жиілігінің орташа артуы'],
 'Снижение PaCO₂ при гипервентиляции':['Reduced PaCO₂ during hyperventilation','Гипервентиляция кезіндегі PaCO₂ төмендеуі'],
 'Увеличение диуреза после акклиматизации':['Increased urine output after acclimatization','Акклиматизациядан кейін диурездің артуы'],
 'Оценку насыщения гемоглобина кислородом':['An estimate of hemoglobin oxygen saturation','Гемоглобиннің оттегімен қанығуын бағалау'],
 'Оптический сигнал пульсирующей крови':['An optical signal from pulsatile blood','Пульсациялайтын қанның оптикалық сигналы'],
 'Изменения насыщения во времени':['Changes in saturation over time','Қанығудың уақыт ішіндегі өзгерістері'],
 'Повышается вязкость крови, что может ограничивать кровоток':['Blood viscosity increases and may limit flow','Қан тұтқырлығы артып, қан ағымын шектеуі мүмкін'],
 'Гемоглобин перестаёт связывать O₂':['Hemoglobin stops binding O₂','Гемоглобин O₂ байланыстыруды тоқтатады'],
 'Полностью исчезает кислородная ёмкость':['Oxygen-carrying capacity disappears completely','Оттегі сыйымдылығы толық жойылады'],
 'SpO₂ обязательно становится 100%':['SpO₂ necessarily reaches 100%','SpO₂ міндетті түрде 100% болады'],
 'Измерить TLC и сравнить с LLN':['Measure TLC and compare with LLN','TLC өлшеп, LLN-мен салыстыру'],
 'Оценить только PEF':['Assess only PEF','Тек PEF бағалау'],
 'Повторить только SpO₂':['Repeat only SpO₂','Тек SpO₂ қайта өлшеу'],
 'Оценить только FEV₁':['Assess only FEV₁','Тек FEV₁ бағалау'],
 'Раннее прекращение форсированного выдоха':['Early termination of forced expiration','Форсирленген дем шығаруды ерте тоқтату'],
 'Полное достижение плато':['Complete attainment of a plateau','Платоға толық жету'],
 'Хорошая воспроизводимость':['Good repeatability','Жақсы қайталанымдылық'],
 'Адекватный старт манёвра':['An adequate start of the maneuver','Маневрдің дұрыс басталуы'],
 'Только FEV₁/FVC':['FEV₁/FVC alone','Тек FEV₁/FVC'],
 'Только SpO₂':['SpO₂ alone','Тек SpO₂'],
 'Только частота дыхания':['Respiratory rate alone','Тек тыныс жиілігі'],
 'Анемия':['Anemia','Анемия'],
 'Повышение гемоглобина':['Increased hemoglobin','Гемоглобиннің жоғарылауы'],
 'Идеальное качество манёвра':['Perfect maneuver quality','Маневрдің мінсіз сапасы'],
 'Нормальная температура помещения':['Normal room temperature','Бөлменің қалыпты температурасы']
};
export function lessonOption(text,L){
 if(L===0)return text;
 if(options[text])return options[text][L-1];
 if(/^[-\d,.\s]+(?:мм рт\. ст\.)?$/.test(text))return L===1?text.replace('мм рт. ст.','mmHg').replaceAll(',','.'):text.replace('мм рт. ст.','мм сын. бағ.');
 return text;
}
export const acidBaseExplanations=[
 ['High PaCO₂ with acidemia indicates a primary respiratory disturbance.','PaCO₂ жоғары болғандағы ацидемия бастапқы тыныстық бұзылысты көрсетеді.'],
 ['1.5 × 12 + 8 = 26 mmHg; the expected interval is 24–28.','1,5 × 12 + 8 = 26 мм сын. бағ.; күтілетін аралық 24–28.'],
 ['Dissolved CO₂ decreases in the denominator of the buffer ratio, raising pH.','Буферлік қатынастың бөліміндегі еріген CO₂ азайып, pH жоғарылайды.'],
 ['140 − (104 + 12) = 24 mmol/L.','140 − (104 + 12) = 24 ммоль/л.'],
 ['Over several days, kidneys increase bicarbonate regeneration and retention.','Бірнеше тәулікте бүйрек бикарбонаттың жаңадан түзілуі мен сақталуын арттырады.'],
 ['Alkalemia accompanies a primary reduction in PaCO₂.','Алкалемия PaCO₂ бастапқы төмендеуімен қатар жүреді.'],
 ['Two primary disturbances can partly offset one another’s effects on pH.','Екі бастапқы бұзылыс бір-бірінің pH-қа әсерін ішінара теңестіруі мүмкін.'],
 ['Kidneys excrete titratable acid and NH₄⁺ and regenerate bicarbonate.','Бүйрек титрленетін қышқылдар мен NH₄⁺ шығарып, бикарбонатты жаңадан түзеді.'],
 ['PaCO₂ above the expected range in metabolic acidosis indicates additional respiratory acidosis.','Метаболизмдік ацидозда PaCO₂ күтілетін аралықтан жоғары болса қосымша респираторлық ацидоз бар.'],
 ['Albumin is the main unmeasured plasma anion; low albumin reduces the observed anion gap.','Альбумин — плазманың негізгі өлшенбейтін анионы; оның азаюы байқалатын аниондық айырманы төмендетеді.']
];
const prose=[
 ['Educational illustrations are original SVG; no third-party media embedded without licensing review.','Учебные иллюстрации — авторские SVG; встраивание сторонних медиа требует проверки лицензии.','Оқу суреттері — авторлық SVG; бөгде медианы енгізу үшін лицензия тексерілуі керек.'],
 ['Original educational explanations; not reproduced textbook passages. Kazakhstan-specific textbook editions require bibliographic verification.','Авторские учебные объяснения; страницы учебников не воспроизводятся. Издания казахстанских учебников требуют библиографической проверки.','Түсіндірмелер авторлық; оқулық беттері көшірілмейді. Қазақстандық оқулық басылымдарын библиографиялық тексеру қажет.'],
 ['Dry PO₂:','PO₂ сухого газа:','Құрғақ газдың PO₂:'],
 ['V (from surface to depth):','V (от поверхности на глубину):','V (беттен тереңдікке):'],
 ['V (same trapped gas on ascent to surface):','V (тот же замкнутый газ при подъёме):','V (жоғары көтерілгендегі сол жабық газ):'],
 ['3. FEV₁ before=1.80 L, after=2.10 L, predicted=3.00 L → response = (2.10−1.80)/3.00 ×100 = 10% predicted; the newer criterion is strictly >10% predicted.','3. FEV₁ до=1,80 л, после=2,10 л, должное=3,00 л → ответ=(2,10−1,80)/3,00×100=10% должного. Критерий ERS/ATS 2022: строго >10% должного; ровно 10% не превышает порог.','3. FEV₁ бастапқы=1,80 л, кейін=2,10 л, болжамды=3,00 л → жауап=(2,10−1,80)/3,00×100=болжамды мәннің 10%-ы. ERS/ATS 2022 критерийі: қатаң >10%; дәл 10% шектен аспайды.']
];
export function localizeLessonProse(html,L){if(L===1)return html;for(const [en,ru,kz] of prose)html=html.replaceAll(en,L===0?ru:kz);return html;}
