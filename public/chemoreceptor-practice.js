const tr=(L,ru,en,kz)=>[ru,en,kz][L];
export const cases=[
 {question:['Пациент с PaO₂ 52 мм рт. ст. и нормальным PaCO₂. Какой сенсор наиболее непосредственно регистрирует гипоксемию?','PaO₂ is 52 mmHg with normal PaCO₂. Which sensor most directly detects hypoxemia?','PaO₂ 52 мм сын. бағ., PaCO₂ қалыпты. Гипоксемияны қай рецептор тікелей сезеді?'],choices:[['Каротидное тельце','Центральный хеморецептор RTN','Рецептор растяжения лёгких'],['Carotid body','Central RTN chemoreceptor','Pulmonary stretch receptor'],['Каротид денешігі','Орталық RTN хеморецепторы','Өкпе созылу рецепторы']],answer:0,why:['Каротидные тельца чувствительны к снижению артериального PO₂.','Carotid bodies sense reductions in arterial PO₂.','Каротид денешіктері артериялық PO₂ төмендеуін сезеді.']},
 {question:['При повышении PaCO₂ какой сигнал особенно важен для центральной хемочувствительности?','Which signal is particularly important for central chemosensitivity during elevated PaCO₂?','PaCO₂ өскенде орталық хемосезімталдық үшін қай сигнал маңызды?'],choices:[['Изменение pH жидкости мозга','Прямое измерение SaO₂ рецепторами растяжения','Сокращение диафрагмы как единственный сенсор'],['Brain extracellular-fluid pH change','Direct SaO₂ sensing by stretch receptors','Diaphragm contraction as sole sensor'],['Ми сұйықтығы pH өзгеруі','Созылу рецепторларымен SaO₂ тікелей сезілуі','Тек көкет жиырылуы']],answer:0,why:['CO₂ влияет на pH жидкости мозга, активируя центральные хемочувствительные сети.','CO₂ affects brain extracellular-fluid pH, engaging central chemosensitive networks.','CO₂ ми сұйықтығы pH-на әсер етіп, орталық хемосезімтал желілерді белсендіреді.']},
 {question:['По какому черепному нерву афферентные сигналы каротидного тельца поступают в NTS?','Which cranial nerve conveys carotid-body afferents to the NTS?','Каротид денешігінің афференттері NTS-ке қай бассүйек жүйкесімен барады?'],choices:[['IX — языкоглоточный','X — блуждающий','XII — подъязычный'],['IX — glossopharyngeal','X — vagus','XII — hypoglossal'],['IX — тіл-жұтқыншақ','X — кезбе','XII — тіласты']],answer:0,why:['Афференты каротидного тельца проходят в составе языкоглоточного нерва (IX).','Carotid-body afferents travel via the glossopharyngeal nerve (IX).','Каротид денешігінің афференттері тіл-жұтқыншақ жүйкесімен (IX) өтеді.']}
];
export function chemoreceptorPractice(L){
 return '<section class="chemoreceptor-practice" data-chemoreceptor-practice data-l="'+L+'"><h4>'+tr(L,'Проверьте понимание хеморецепции','Check chemoreceptor understanding','Хеморецепцияны түсінуді тексеріңіз')+'</h4>'+cases.map((c,i)=>'<article data-chem-case="'+i+'"><p><strong>'+(i+1)+'. '+c.question[L]+'</strong></p><div class="chem-case-choices">'+[0,1,2].map(k=>(k+i+1)%3).map(k=>'<button type="button" data-chem-answer="'+k+'">'+c.choices[L][k]+'</button>').join('')+'</div><p data-chem-feedback role="status" aria-live="polite"></p></article>').join('')+'</section>';
}
export function initChemoreceptorPractice(){
 document.querySelectorAll('[data-chemoreceptor-practice]').forEach(root=>{
 if(root.dataset.ready)return;root.dataset.ready='1';const L=Number(root.dataset.l);
 root.querySelectorAll('[data-chem-case]').forEach(article=>article.addEventListener('click',e=>{
 const b=e.target.closest('[data-chem-answer]');if(!b||article.dataset.answered)return;
 article.dataset.answered='1';const c=cases[Number(article.dataset.chemCase)],ok=Number(b.dataset.chemAnswer)===c.answer;
 article.querySelectorAll('[data-chem-answer]').forEach(x=>{x.disabled=true;x.classList.toggle('correct',Number(x.dataset.chemAnswer)===c.answer);x.classList.toggle('incorrect',x===b&&!ok);});
 article.querySelector('[data-chem-feedback]').textContent=(ok?tr(L,'Верно. ','Correct. ','Дұрыс. '):tr(L,'Неверно. ','Incorrect. ','Қате. '))+c.why[L];
 }));
 });
}
