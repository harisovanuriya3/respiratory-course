// Original, schematic teaching diagrams. No clinical measurements or diagnostic inference.
const titles = [
  ['Нейронные сети дыхательного ритма','Respiratory rhythm networks','Тыныс ырғағының нейрондық желілері'],
  ['Афферентные дыхательные рефлексы','Afferent respiratory reflexes','Тыныс алу афференттік рефлекстері'],
  ['Хеморецепторная регуляция','Chemoreceptor regulation','Хеморецепторлық реттелу'],
  ['Вентиляция при физической нагрузке','Ventilation during exercise','Жүктеме кезіндегі вентиляция'],
  ['Высота и альвеолярный кислород','Altitude and alveolar oxygen','Биіктік және альвеолалық оттегі'],
  ['Дыхание во сне','Breathing during sleep','Ұйқы кезіндегі тыныс алу'],
  ['Давление при погружении','Pressure during diving','Сүңгу кезіндегі қысым'],
  ['Спирометрическая петля поток–объём','Spirometric flow–volume loop','Спирометриялық ағын–көлем ілмегі'],
  ['Доставка кислорода тканям','Oxygen delivery to tissues','Тіндерге оттегінің жеткізілуі']
];
const nodes = [
  [['Ствол мозга','Дыхательные мышцы','Вентиляция'],['Brainstem','Respiratory muscles','Ventilation'],['Ми бағаны','Тыныс бұлшықеттері','Вентиляция']],
  [['Рецепторы лёгких','Блуждающий нерв','Ствол мозга'],['Lung receptors','Vagus nerve','Brainstem'],['Өкпе рецепторлары','Кезбе жүйке','Ми бағаны']],
  [['PaCO₂ / pH','Хеморецепторы','Вентиляция'],['PaCO₂ / pH','Chemoreceptors','Ventilation'],['PaCO₂ / pH','Хеморецепторлар','Вентиляция']],
  [['Метаболизм ↑','V̇CO₂ ↑','V̇E ↑'],['Metabolism ↑','V̇CO₂ ↑','V̇E ↑'],['Метаболизм ↑','V̇CO₂ ↑','V̇E ↑']],
  [['Барометрическое P ↓','PIO₂ ↓','PAO₂ ↓'],['Barometric P ↓','PIO₂ ↓','PAO₂ ↓'],['Барометрлік P ↓','PIO₂ ↓','PAO₂ ↓']],
  [['Стадия сна','Тонус мышц','Проходимость путей'],['Sleep stage','Muscle tone','Airway patency'],['Ұйқы сатысы','Бұлшықет тонусы','Жол өткізгіштігі']],
  [['Глубина ↑','Давление ↑','Объём газа ↓'],['Depth ↑','Pressure ↑','Gas volume ↓'],['Тереңдік ↑','Қысым ↑','Газ көлемі ↓']],
  [['Усилие','Поток','Объём'],['Effort','Flow','Volume'],['Күш салу','Ағын','Көлем']],
  [['Сердечный выброс','CaO₂','DO₂'],['Cardiac output','CaO₂','DO₂'],['Жүрек лақтырысы','CaO₂','DO₂']]
];
const notes = [
  ['Ритмогенез обеспечивают взаимосвязанные нейронные сети ствола мозга; схема не представляет отдельный «центр вдоха».','Rhythm emerges from interacting brainstem networks; this diagram does not imply a single inspiration centre.','Ырғақ ми бағанындағы өзара байланысқан желілерден туындайды; сызба бір ғана дем алу орталығын білдірмейді.'],
  ['Рефлексы зависят от типа рецептора и состояния дыхательных путей; направление ответа не универсально.','Reflex responses depend on receptor type and airway conditions; their direction is not universal.','Рефлекстік жауап рецептор түрі мен тыныс жолының күйіне тәуелді; жауап бағыты әмбебап емес.'],
  ['Центральные хеморецепторы чувствительны к изменениям pH внеклеточной жидкости мозга, связанным с CO₂; периферические реагируют также на снижение PaO₂.','Central chemoreceptors sense brain extracellular-fluid pH changes related to CO₂; peripheral chemoreceptors also respond to low PaO₂.','Орталық хеморецепторлар CO₂-мен байланысты ми жасушааралық сұйықтығы pH өзгерісін сезеді; шеткілері PaO₂ төмендеуіне де жауап береді.'],
  ['При нагрузке вентиляция обычно возрастает вместе с образованием CO₂; зависимость меняется с интенсивностью и порогами.','Ventilation generally rises with CO₂ production during exercise; the relationship changes with intensity and thresholds.','Жүктемеде вентиляция CO₂ түзілуімен бірге көбіне артады; байланыс қарқындылыққа тәуелді.'],
  ['При неизменной FiO₂ снижение барометрического давления уменьшает вдыхаемое PO₂; акклиматизация изменяет ответ.','At constant FiO₂, reduced barometric pressure lowers inspired PO₂; acclimatization modifies the response.','FiO₂ тұрақты болса, барометрлік қысымның төмендеуі жұтылатын PO₂-ні азайтады; бейімделу жауапты өзгертеді.'],
  ['Влияние сна на дыхательный контроль и тонус верхних дыхательных путей зависит от стадии сна.','Sleep affects respiratory control and upper-airway muscle tone differently across sleep stages.','Ұйқы тыныс реттелуіне және жоғарғы тыныс жолдарының тонусына ұйқы сатысына қарай әсер етеді.'],
  ['Закон Бойля описывает идеализированную зависимость объёма газа от абсолютного давления при постоянной температуре; физиологические ограничения важны.','Boyle’s law describes an idealized inverse gas-volume/absolute-pressure relationship at constant temperature; physiological limits matter.','Бойль заңы тұрақты температурада газ көлемі мен абсолюттік қысымның кері байланысын сипаттайды; физиологиялық шектеулер маңызды.'],
  ['Петля поток–объём зависит от усилия и качества манёвра; по одной схеме диагноз не устанавливают.','The flow–volume loop depends on effort and manoeuvre quality; this schematic alone cannot establish a diagnosis.','Ағын–көлем ілмегі күш салу мен маневр сапасына тәуелді; бұл сызба жеке диагноз қоймайды.'],
  ['DO₂ = сердечный выброс × CaO₂ (с согласованными единицами). Доставка кислорода не равна его потреблению тканями.','DO₂ = cardiac output × CaO₂ (with consistent units). Oxygen delivery is not the same as tissue oxygen consumption.','DO₂ = жүрек лақтырысы × CaO₂ (бірліктерді сәйкестендіріп). Оттегі жеткізілуі тіндердің тұтынуымен бірдей емес.']
];
const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function topicSpecificAtlas(moduleId,language){
 const i=moduleId-17;
 if(!Number.isInteger(i)||i<0||i>=titles.length||![0,1,2].includes(language))return '';
 const labels=nodes[i][language];
 const title=titles[i][language];
 const note=notes[i][language];
 const blocks=labels.map((label,j)=>`<g><rect x="${12+j*196}" y="38" width="180" height="90" rx="14" fill="${['#dbeafe','#dcfce7','#fef3c7'][j]}" stroke="#475569"/><text x="${102+j*196}" y="87" text-anchor="middle" fill="#172554" font-size="${label.length>18?12:15}" font-weight="600">${esc(label)}</text></g>`).join('');
 return `<figure class="media-figure topic-specific"><svg viewBox="0 0 600 160" role="img" aria-label="${esc(title)}" xmlns="http://www.w3.org/2000/svg"><title>${esc(title)}</title>${blocks}<g stroke="#334155" stroke-width="3" fill="none"><path d="M192 83h16m-9-7 9 7-9 7M388 83h16m-9-7 9 7-9 7"/></g></svg><figcaption>${esc(note)}</figcaption></figure>`;
}
