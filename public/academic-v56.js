// Academic teaching additions; synthetic cases, not clinical decision support.
const entries = {
  10: {
    title:['Альвеолярное газовое уравнение: допущения и границы применения','Alveolar gas equation: assumptions and limits','Альвеолалық газ теңдеуі: болжамдары мен шектеулері'],
    theory:[
      'При устойчивом состоянии и пренебрежении малыми поправками PAO₂ ≈ FiO₂(PB − PH₂O) − PaCO₂/R. При 37 °C PH₂O ≈ 47 мм рт. ст.; R — дыхательный коэффициент газообмена, часто приближённо 0,8. PAO₂ является расчётным альвеолярным, а PaO₂ — измеренным артериальным давлением. Их разность (A–a градиент) зависит от возраста, FiO₂ и распределения вентиляции и перфузии. Уравнение не заменяет анализ газов крови.',
      'At steady state, neglecting small corrections, PAO₂ ≈ FiO₂(PB − PH₂O) − PaCO₂/R. At 37 °C PH₂O is about 47 mmHg; R is the respiratory exchange ratio, commonly approximated as 0.8. PAO₂ is calculated alveolar oxygen tension, whereas PaO₂ is measured arterial oxygen tension. Their A–a difference varies with age, FiO₂ and ventilation–perfusion distribution. The equation does not replace blood gas analysis.',
      'Тұрақты жағдайда шағын түзетулерді ескермегенде PAO₂ ≈ FiO₂(PB − PH₂O) − PaCO₂/R. 37 °C-та PH₂O шамамен 47 мм сын. бағ.; R — тыныстық алмасу коэффициенті, жиі 0,8 деп алынады. PAO₂ — есептелген альвеолалық, ал PaO₂ — өлшенген артериялық оттегі қысымы. Олардың A–a айырмасы жасқа, FiO₂-ге және вентиляция–перфузия таралуына тәуелді. Теңдеу қан газдарын талдауды алмастырмайды.'
    ],
    task:['PB = 760 мм рт. ст., FiO₂ = 0,21, PaCO₂ = 40 мм рт. ст., R = 0,8, PaO₂ = 90 мм рт. ст. Найдите PAO₂ и A–a градиент.','PB = 760 mmHg, FiO₂ = 0.21, PaCO₂ = 40 mmHg, R = 0.8, PaO₂ = 90 mmHg. Calculate PAO₂ and the A–a gradient.','PB = 760 мм сын. бағ., FiO₂ = 0,21, PaCO₂ = 40 мм сын. бағ., R = 0,8, PaO₂ = 90 мм сын. бағ. PAO₂ және A–a градиентін есептеңіз.'],
    answer:['PAO₂ ≈ 0,21 × (760 − 47) − 40/0,8 = 99,73 мм рт. ст.; A–a ≈ 9,73 мм рт. ст. Оценка относится только к заданным условиям.','PAO₂ ≈ 0.21 × (760 − 47) − 40/0.8 = 99.73 mmHg; A–a ≈ 9.73 mmHg. Interpretation is conditional on the stated assumptions.','PAO₂ ≈ 0,21 × (760 − 47) − 40/0,8 = 99,73 мм сын. бағ.; A–a ≈ 9,73 мм сын. бағ. Түсіндіру берілген шарттарға тәуелді.']
  },
  16: {
    title:['Системный анализ кислотно-основных нарушений','Systematic analysis of acid–base disorders','Қышқыл-негіз бұзылыстарын жүйелі талдау'],
    theory:[
      'Начинают с pH, затем определяют первичное изменение PaCO₂ или HCO₃⁻ и проверяют ожидаемую компенсацию. Для метаболического ацидоза формула Уинтера: ожидаемое PaCO₂ ≈ 1,5 × [HCO₃⁻] + 8 ± 2 мм рт. ст. Несоответствие указывает на возможное смешанное нарушение. Анионная разница AG = Na⁺ − (Cl⁻ + HCO₃⁻); интерпретация требует учёта альбумина. Компенсация не является самостоятельным «излечением» первичного расстройства.',
      'Start with pH, identify the primary PaCO₂ or HCO₃⁻ change, then test expected compensation. For metabolic acidosis, Winter’s formula predicts PaCO₂ ≈ 1.5 × [HCO₃⁻] + 8 ± 2 mmHg. A discrepancy suggests a possible mixed disorder. Anion gap AG = Na⁺ − (Cl⁻ + HCO₃⁻); albumin affects interpretation. Compensation does not independently resolve the primary disorder.',
      'Алдымен pH бағаланады, содан кейін PaCO₂ немесе HCO₃⁻ бастапқы өзгерісі анықталып, күтілетін компенсация тексеріледі. Метаболизмдік ацидозда Уинтер формуласы: PaCO₂ ≈ 1,5 × [HCO₃⁻] + 8 ± 2 мм сын. бағ. Сәйкессіздік аралас бұзылысты көрсетуі мүмкін. Аниондық айырма AG = Na⁺ − (Cl⁻ + HCO₃⁻); түсіндіруде альбуминді ескеру қажет. Компенсация бастапқы бұзылысты өздігінен жоймайды.'
    ],
    task:['pH = 7,25; HCO₃⁻ = 12 ммоль/л; PaCO₂ = 26 мм рт. ст. Соответствует ли PaCO₂ ожидаемой компенсации?','pH = 7.25; HCO₃⁻ = 12 mmol/L; PaCO₂ = 26 mmHg. Is PaCO₂ consistent with expected compensation?','pH = 7,25; HCO₃⁻ = 12 ммоль/л; PaCO₂ = 26 мм сын. бағ. PaCO₂ күтілетін компенсацияға сай келе ме?'],
    answer:['Ожидаемое PaCO₂ = 1,5 × 12 + 8 = 26 ± 2 мм рт. ст. Измеренное значение соответствует ожидаемой респираторной компенсации метаболического ацидоза.','Expected PaCO₂ = 1.5 × 12 + 8 = 26 ± 2 mmHg. The measured value is consistent with respiratory compensation for metabolic acidosis.','Күтілетін PaCO₂ = 1,5 × 12 + 8 = 26 ± 2 мм сын. бағ. Өлшенген мән метаболизмдік ацидоздың тыныстық компенсациясына сәйкес.']
  },
  25: {
    title:['Гипоксемия, содержание кислорода и доставка тканям','Hypoxaemia, oxygen content and tissue delivery','Гипоксемия, оттегі мөлшері және тіндерге жеткізу'],
    theory:[
      'PaO₂ отражает напряжение растворённого кислорода, SaO₂ — насыщение гемоглобина, а CaO₂ — суммарное содержание кислорода. При анемии PaO₂ и SaO₂ могут быть нормальными, хотя CaO₂ снижен. При нарушении вентиляционно-перфузионных отношений возникает гипоксемия; при шунтировании ответ на повышение FiO₂ может быть ограничен. Доставка кислорода DO₂ = CO × CaO₂ × 10 при CO в л/мин и CaO₂ в мл/дл. Клиническая оценка требует учёта потребления O₂ и перфузии тканей.',
      'PaO₂ describes dissolved oxygen tension, SaO₂ haemoglobin saturation, and CaO₂ total arterial oxygen content. In anaemia, PaO₂ and SaO₂ can remain normal while CaO₂ falls. V/Q mismatch can cause hypoxaemia; a true shunt may respond incompletely to increased FiO₂. Oxygen delivery is DO₂ = CO × CaO₂ × 10 for CO in L/min and CaO₂ in mL/dL. Interpretation also requires consideration of tissue perfusion and oxygen consumption.',
      'PaO₂ еріген оттегінің қысымын, SaO₂ гемоглобиннің қанығуын, CaO₂ артериялық қандағы жалпы оттегі мөлшерін сипаттайды. Анемияда PaO₂ мен SaO₂ қалыпты болса да, CaO₂ төмендеуі мүмкін. V/Q сәйкессіздігі гипоксемия туғызады; нағыз шунтта FiO₂ арттыру әсері шектеулі болуы мүмкін. Оттегі жеткізілімі DO₂ = CO × CaO₂ × 10 (CO — л/мин, CaO₂ — мл/дл). Түсіндіруде тін перфузиясы мен оттегі тұтынылуы да ескеріледі.'
    ],
    task:['Hb = 8 г/дл, SaO₂ = 0,98, PaO₂ = 100 мм рт. ст., CO = 5 л/мин. Вычислите CaO₂ и DO₂, используя коэффициенты 1,34 и 0,003.','Hb = 8 g/dL, SaO₂ = 0.98, PaO₂ = 100 mmHg, CO = 5 L/min. Calculate CaO₂ and DO₂ using coefficients 1.34 and 0.003.','Hb = 8 г/дл, SaO₂ = 0,98, PaO₂ = 100 мм сын. бағ., CO = 5 л/мин. 1,34 және 0,003 коэффициенттерімен CaO₂ мен DO₂ есептеңіз.'],
    answer:['CaO₂ ≈ 1,34 × 8 × 0,98 + 0,003 × 100 = 10,81 мл/дл; DO₂ ≈ 5 × 10,81 × 10 = 540,3 мл/мин. Нормальная сатурация не исключает снижения доставки O₂.','CaO₂ ≈ 1.34 × 8 × 0.98 + 0.003 × 100 = 10.81 mL/dL; DO₂ ≈ 5 × 10.81 × 10 = 540.3 mL/min. Normal saturation does not exclude reduced oxygen delivery.','CaO₂ ≈ 1,34 × 8 × 0,98 + 0,003 × 100 = 10,81 мл/дл; DO₂ ≈ 5 × 10,81 × 10 = 540,3 мл/мин. Қалыпты сатурация оттегі жеткізілімінің төмендеуін жоққа шығармайды.']
  }
};
const esc = v => String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function academicV56(moduleId, section, lang) {
  const item=entries[moduleId];
  if (!item || !['theory','practice','clinical','questions','self-study'].includes(section)) return '';
  const headings=[['Научный разбор','Scientific explanation','Ғылыми түсіндірме'],['Расчётно-аналитическая задача','Calculation and interpretation','Есептеу және талдау тапсырмасы'],['Показать решение','Show worked solution','Шешімін көрсету'],['Модель с указанными допущениями; не заменяет клиническую оценку.','Educational model with stated assumptions; not a substitute for clinical assessment.','Берілген болжамдары бар оқу моделі; клиникалық бағалауды алмастырмайды.']];
  return `<section class="academic-v56" style="margin:1.5rem 0;padding:1.4rem;border:1px solid #7eafad;border-radius:14px"><p class="eyebrow">${headings[0][lang]}</p><h3>${esc(item.title[lang])}</h3><p>${esc(item.theory[lang])}</p><h4>${headings[1][lang]}</h4><p>${esc(item.task[lang])}</p><details><summary>${headings[2][lang]}</summary><p>${esc(item.answer[lang])}</p></details><small>${headings[3][lang]}</small></section>`;
}
