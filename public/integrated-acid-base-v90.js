// V90: integrated oxygen/CO2 acid-base laboratory. All cases are synthetic educational data.
const match = location.pathname.match(/^\/modules\/16\/([a-z-]+)\/?$/);
if (match && ['theory','interactive','practice','cases'].includes(match[1])) {
  const query = new URLSearchParams(location.search);
  const lang = ['RU','KZ','EN'].includes(query.get('lang')) ? query.get('lang') : 'RU';
  const t = (ru,kz,en) => ({RU:ru,KZ:kz,EN:en})[lang];
  const main = document.getElementById('main');
  if (main) {
    const section = document.createElement('section');
    section.className = 'guided-v38';
    section.innerHTML = `<h3>${t('Интегративная лаборатория: вентиляция, кислотно-основное состояние и доставка O₂','Интеграциялық зертхана: вентиляция, қышқыл-негіз күйі және O₂ жеткізілуі','Integrated laboratory: ventilation, acid-base balance and O₂ delivery')}</h3>
    <p>${t('Изменяйте независимые показатели учебного случая и сравнивайте pH, содержание O₂ и доставку O₂. Расчёты иллюстрируют разные физиологические величины; они не предсказывают компенсаторный ответ пациента.','Оқу жағдайының тәуелсіз көрсеткіштерін өзгертіп, pH, O₂ мөлшері және O₂ жеткізілуін салыстырыңыз. Есептеулер әртүрлі физиологиялық шамаларды көрсетеді; пациенттің компенсациялық жауабын болжай алмайды.','Change independent values in this synthetic case and compare pH, O₂ content and O₂ delivery. These calculations illustrate different physiological quantities; they do not predict patient compensation.')}</p>
    <div class="v90-controls" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:12px">
      <label>PaCO₂: <output id="v90-pco2-val">40</output> mmHg<input id="v90-pco2" type="range" min="20" max="80" step="2" value="40"></label>
      <label>HCO₃⁻: <output id="v90-hco3-val">24</output> mmol/L<input id="v90-hco3" type="range" min="10" max="40" step="1" value="24"></label>
      <label>Hb: <output id="v90-hb-val">15</output> g/dL<input id="v90-hb" type="range" min="6" max="18" step="1" value="15"></label>
      <label>SaO₂: <output id="v90-sao2-val">98</output> %<input id="v90-sao2" type="range" min="60" max="100" step="1" value="98"></label>
      <label>PaO₂: <output id="v90-pao2-val">95</output> mmHg<input id="v90-pao2" type="range" min="40" max="110" step="5" value="95"></label>
      <label>CO: <output id="v90-co-val">5</output> L/min<input id="v90-co" type="range" min="2" max="10" step="0.5" value="5"></label>
    </div>
    <div aria-live="polite" style="display:flex;flex-wrap:wrap;gap:16px;margin-top:16px"><p><strong>pH ≈ <output id="v90-ph">7.40</output></strong></p><p><strong>CaO₂ ≈ <output id="v90-cao2">19.8</output> mL/dL</strong></p><p><strong>DO₂ ≈ <output id="v90-do2">990</output> mL/min</strong></p></div>
    <svg viewBox="0 0 420 100" width="100%" role="img" aria-label="Relative oxygen content and delivery" style="max-width:650px;background:#f8fafc;border-radius:12px"><text x="10" y="22" font-size="13" fill="#334155">CaO₂</text><rect x="85" y="9" width="300" height="20" rx="5" fill="#dbeafe"/><rect id="v90-bar1" x="85" y="9" width="250" height="20" rx="5" fill="#2563eb"/><text x="10" y="65" font-size="13" fill="#334155">DO₂</text><rect x="85" y="52" width="300" height="20" rx="5" fill="#dcfce7"/><rect id="v90-bar2" x="85" y="52" width="240" height="20" rx="5" fill="#16a34a"/></svg>
    <details><summary>${t('Научное обоснование и ограничения','Ғылыми негіздеме және шектеулер','Scientific rationale and limitations')}</summary>
      <p>pH = 6.1 + log₁₀(HCO₃⁻ / (0.03 × PaCO₂)); CaO₂ ≈ 1.34 × Hb × SaO₂ + 0.003 × PaO₂ (mL O₂/dL); DO₂ = CO × CaO₂ × 10 (mL O₂/min).</p>
      <p>${t('SaO₂ вводится отдельно от PaO₂ намеренно, чтобы показать различие сатурации и парциального давления. Однако некоторые комбинации этих параметров физиологически несовместимы без изменения кривой диссоциации гемоглобина. Модель не оценивает сродство Hb к O₂, компенсацию или смешанные кислотно-основные нарушения.','SaO₂ мен PaO₂ сатурация мен парциалдық қысымның айырмашылығын көрсету үшін бөлек беріледі. Бірақ гемоглобиннің диссоциация қисығы өзгермесе, кейбір комбинациялар физиологиялық тұрғыдан үйлеспейді. Модель Hb–O₂ аффиндігін, компенсацияны немесе аралас қышқыл-негіз бұзылыстарын бағаламайды.','SaO₂ and PaO₂ are independent controls to highlight saturation versus partial pressure. Some combinations are physiologically inconsistent unless the hemoglobin dissociation curve changes. This model does not calculate Hb–O₂ affinity, compensation or mixed acid-base disorders.')}</p>
      <p>${t('Результаты предназначены исключительно для учебной демонстрации; интерпретация газов крови требует клинического контекста и оценки компенсации.','Нәтижелер тек оқу демонстрациясына арналған; қан газдарын түсіндіру үшін клиникалық деректер мен компенсацияны бағалау қажет.','Results are for teaching only; interpreting blood gases requires clinical context and compensation assessment.')}</p>
    </details>
    <details><summary>${t('Контрольная задача и решение','Бақылау есебі және шешімі','Practice problem and solution')}</summary><p>${t('При Hb = 8 г/дл, SaO₂ = 98%, PaO₂ = 95 мм рт. ст. и CO = 5 л/мин определите CaO₂ и DO₂. Почему нормальная сатурация не гарантирует нормальную доставку кислорода?','Hb = 8 г/дл, SaO₂ = 98%, PaO₂ = 95 мм сын. бағ. және CO = 5 л/мин болса, CaO₂ мен DO₂ есептеңіз. Неліктен қалыпты сатурация O₂ жеткізілуінің қалыпты болуына кепіл емес?','For Hb 8 g/dL, SaO₂ 98%, PaO₂ 95 mmHg and CO 5 L/min, calculate CaO₂ and DO₂. Why does normal saturation not ensure normal oxygen delivery?')}</p><p>${t('Решение: CaO₂ ≈ 1,34 × 8 × 0,98 + 0,003 × 95 = 10,79 мл/дл; DO₂ ≈ 5 × 10,79 × 10 = 540 мл/мин. При анемии уменьшается кислородная ёмкость крови.','Шешімі: CaO₂ ≈ 1,34 × 8 × 0,98 + 0,003 × 95 = 10,79 мл/дл; DO₂ ≈ 5 × 10,79 × 10 = 540 мл/мин. Анемияда қанның оттегі сыйымдылығы төмендейді.','Solution: CaO₂ ≈ 1.34 × 8 × 0.98 + 0.003 × 95 = 10.79 mL/dL; DO₂ ≈ 5 × 10.79 × 10 = 540 mL/min. Anemia reduces oxygen-carrying capacity.')}</p></details>`;
    const pagination = main.querySelector('.pagination');
    if (pagination) main.insertBefore(section,pagination); else main.append(section);
    const keys=['pco2','hco3','hb','sao2','pao2','co'];
    const update=()=>{
      const v=Object.fromEntries(keys.map(k=>[k,Number(section.querySelector('#v90-'+k).value)]));
      keys.forEach(k=>section.querySelector('#v90-'+k+'-val').textContent=v[k]);
      const ph=6.1+Math.log10(v.hco3/(0.03*v.pco2));
      const cao2=1.34*v.hb*(v.sao2/100)+0.003*v.pao2;
      const do2=v.co*cao2*10;
      section.querySelector('#v90-ph').textContent=ph.toFixed(2);
      section.querySelector('#v90-cao2').textContent=cao2.toFixed(2);
      section.querySelector('#v90-do2').textContent=do2.toFixed(0);
      section.querySelector('#v90-bar1').setAttribute('width',String(Math.min(300,cao2/25*300)));
      section.querySelector('#v90-bar2').setAttribute('width',String(Math.min(300,do2/1800*300)));
    };
    keys.forEach(k=>section.querySelector('#v90-'+k).addEventListener('input',update));update();
  }
}
