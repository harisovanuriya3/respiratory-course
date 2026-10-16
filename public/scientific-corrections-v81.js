// Evidence-oriented physiological corrections. Original instructional material.
const material = {
  13: {
    theory: [
      'Вентиляционно-перфузионное отношение V̇A/Q̇ определяется локально. При V̇A/Q̇ → 0 сохраняется перфузия практически невентилируемых альвеол: это шунтоподобный эффект. При V̇A/Q̇ → ∞ вентиляция сохраняется при исчезающей перфузии: альвеолярное мёртвое пространство. Смешанная артериальная кровь формируется с учётом содержания O₂, а не простым усреднением PO₂. Низкое V̇A/Q̇ и истинный шунт по-разному отвечают на повышение FiO₂.',
      'The local ventilation–perfusion ratio is V̇A/Q̇. As V̇A/Q̇ approaches zero, perfused but poorly ventilated units produce shunt-like admixture. As V̇A/Q̇ approaches infinity, ventilated but unperfused units contribute to alveolar dead space. Oxygen mixing must be calculated using O₂ content, not an arithmetic mean of PO₂. Low V̇A/Q̇ and true shunt respond differently to supplemental oxygen.',
      'Жергілікті вентиляция-перфузия қатынасы V̇A/Q̇ арқылы сипатталады. V̇A/Q̇ нөлге жақындағанда қан ағымы сақталып, альвеолалар нашар желдетіледі: шунтқа ұқсас араласу пайда болады. V̇A/Q̇ шексіздікке ұмтылғанда желдетілу сақталып, перфузия азаяды: альвеолалық өлі кеңістік ұлғаяды. Артериялық қандағы O₂ араласуын PO₂-нің жай орташа мәнімен емес, оттегінің мөлшері арқылы есептеу қажет.'
    ],
    question: [
      'Две области лёгкого имеют одинаковый кровоток, но разную вентиляцию. Почему среднее значение их альвеолярных PO₂ не равно артериальному PaO₂?',
      'Two lung units have equal perfusion but different ventilation. Why is the average of their alveolar PO₂ values not the arterial PaO₂?',
      'Өкпенің екі аймағында қан ағымы бірдей, ал желдетілуі әртүрлі. Неліктен олардың альвеолалық PO₂ орташа мәні артериялық PaO₂-ге тең емес?'
    ],
    answer: [
      'Смешивается кровь с различным содержанием O₂; зависимость насыщения гемоглобина от PO₂ нелинейна. Сначала рассчитывают содержание O₂ в выходящей крови каждого компартмента, затем смешивают его пропорционально кровотоку и лишь после этого определяют итоговый PO₂.',
      'Blood mixes according to oxygen content, and the Hb–O₂ saturation curve is nonlinear. Determine the oxygen content of blood leaving each unit, mix the contents weighted by perfusion, and only then infer the resulting PO₂.',
      'Қан оттегі мөлшері бойынша араласады, ал гемоглобиннің қанығуы мен PO₂ арасындағы тәуелділік сызықтық емес. Әуелі әр аймақтан шығатын қанның O₂ мөлшерін анықтап, оны қан ағымына сәйкес араластырады; содан кейін қорытынды PO₂ бағаланады.'
    ]
  },
  14: {
    theory: [
      'Артериальное содержание кислорода CaO₂ ≈ 1,34 × Hb × SaO₂ + 0,003 × PaO₂ (мл O₂/дл), где Hb — г/дл, SaO₂ — доля, PaO₂ — мм рт. ст. Доставка кислорода DO₂ = сердечный выброс (л/мин) × CaO₂ (мл/дл) × 10. Пульсоксиметрия не измеряет концентрацию гемоглобина и доставку кислорода. Коэффициенты являются приближёнными.',
      'Arterial oxygen content is CaO₂ ≈ 1.34 × Hb × SaO₂ + 0.003 × PaO₂ (mL O₂/dL), with Hb in g/dL, SaO₂ as a fraction and PaO₂ in mmHg. Oxygen delivery is DO₂ = cardiac output (L/min) × CaO₂ (mL/dL) × 10. Pulse oximetry does not directly measure hemoglobin concentration or oxygen delivery. These coefficients are approximations.',
      'Артериялық қанның оттегі мөлшері CaO₂ ≈ 1,34 × Hb × SaO₂ + 0,003 × PaO₂ (мл O₂/дл); мұнда Hb — г/дл, SaO₂ — үлестік шама, PaO₂ — мм сын. бағ. Оттегі жеткізілуі DO₂ = жүректің минуттық қан көлемі (л/мин) × CaO₂ (мл/дл) × 10. Пульсоксиметрия гемоглобин концентрациясын немесе DO₂-ні тікелей анықтамайды.'
    ],
    question: [
      'Hb 8 г/дл, SaO₂ 0,98, PaO₂ 95 мм рт. ст., сердечный выброс 5 л/мин. Рассчитайте CaO₂ и DO₂.',
      'Hb 8 g/dL, SaO₂ 0.98, PaO₂ 95 mmHg, cardiac output 5 L/min. Calculate CaO₂ and DO₂.',
      'Hb 8 г/дл, SaO₂ 0,98, PaO₂ 95 мм сын. бағ., жүректің минуттық қан көлемі 5 л/мин. CaO₂ және DO₂ есептеңіз.'
    ],
    answer: [
      'CaO₂ = 1,34×8×0,98 + 0,003×95 = 10,79 мл/дл. DO₂ ≈ 5×10,79×10 = 539,5 мл O₂/мин. Нормальная сатурация не исключает снижения кислородной ёмкости при анемии.',
      'CaO₂ = 1.34×8×0.98 + 0.003×95 = 10.79 mL/dL. DO₂ ≈ 5×10.79×10 = 539.5 mL O₂/min. Normal saturation does not rule out reduced oxygen content in anemia.',
      'CaO₂ = 1,34×8×0,98 + 0,003×95 = 10,79 мл/дл. DO₂ ≈ 5×10,79×10 = 539,5 мл O₂/мин. Анемия кезінде қанығу қалыпты болса да, оттегі мөлшері төмендеуі мүмкін.'
    ]
  }
};
const escapeHtml = s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function scientificCorrectionsV81(mid,section,L){
 const item=material[mid]; if(!item||!['theory','practice','cases'].includes(section))return '';
 const headings=[['Физиологический механизм','Physiological mechanism','Физиологиялық механизм'],['Задание для анализа','Reasoning exercise','Талдау тапсырмасы'],['Разбор решения','Worked explanation','Шешім талдауы']];
 return `<section class="lesson-card scientific-corrections"><h3>${headings[0][L]}</h3><p>${escapeHtml(item.theory[L])}</p>${section==='theory'?'':`<h4>${headings[1][L]}</h4><p>${escapeHtml(item.question[L])}</p><details><summary>${headings[2][L]}</summary><p>${escapeHtml(item.answer[L])}</p></details>`}</section>`;
}
