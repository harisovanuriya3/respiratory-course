import type {Language} from '../lib/course';

const info={
 RU:{title:'Анатомия и физиология дыхания',caption:'Анатомический учебный атлас. Показаны основные структуры; изменение дыхательных давлений исследуйте в виртуальной лаборатории.',sections:[
 ['Проводящая зона','Полость носа, глотка, гортань, трахея, бронхи и проводящие бронхиолы проводят воздух, согревают, увлажняют и очищают его. Газообмен в этой части дыхательных путей практически отсутствует.'],
 ['Респираторная зона','Респираторные бронхиолы, альвеолярные ходы и альвеолы формируют область газообмена. Альвеолярная вентиляция обновляет воздух в этой области; для обмена газов необходим также кровоток в лёгочных капиллярах.'],
 ['Аэрогематический барьер','Кислород диффундирует из альвеолярного воздуха через тонкий барьер в кровь; углекислый газ перемещается в обратном направлении. Барьер образован альвеолярным эпителием, базальными мембранами и капиллярным эндотелием.'],
 ['Плевра и диафрагма','Диафрагма — главная мышца спокойного вдоха. При её сокращении грудная полость расширяется, плевральное давление становится более отрицательным, транспульмональное давление увеличивается и лёгкие расправляются.'],
 ['Путь кислорода','Атмосфера → вентиляция альвеол → диффузия через аэрогематический барьер → транспорт кровью → поступление в ткани → использование в митохондриях. Нарушение любого этапа способно уменьшить снабжение клеток кислородом.'],
 ['Минутная и альвеолярная вентиляция','Минутная вентиляция V̇E = VT × f включает воздух проводящих путей. Альвеолярная вентиляция V̇A = (VT − VD) × f учитывает мёртвое пространство. При VT = 500 мл, VD = 150 мл, f = 12/мин получаем V̇E = 6,0 л/мин и V̇A = 4,2 л/мин.'],
 ['Частота и глубина','При VT = 300 мл и f = 30/мин минутная вентиляция равна 9,0 л/мин, альвеолярная — 4,5 л/мин. При VT = 600 мл и f = 15/мин минутная вентиляция также 9,0 л/мин, но альвеолярная достигает 6,75 л/мин при неизменном VD = 150 мл.']],go:'Изучить динамическую лабораторию'},
 EN:{title:'Anatomy and physiology of breathing',caption:'Educational anatomical atlas. Explore breathing pressure changes in the interactive laboratory.',sections:[
 ['Conducting zone','The nose, pharynx, larynx, trachea, bronchi and conducting bronchioles transport, warm, humidify and filter inspired air. Little direct gas exchange occurs in these airways.'],
 ['Respiratory zone','Respiratory bronchioles, alveolar ducts and alveoli make up the gas-exchanging region. Alveolar ventilation renews its air, while pulmonary capillary perfusion is also necessary for gas exchange.'],
 ['Alveolar–capillary barrier','Oxygen diffuses from alveolar gas into blood; carbon dioxide moves in the opposite direction. The thin barrier includes alveolar epithelium, basement membranes and capillary endothelium.'],
 ['Pleura and diaphragm','The diaphragm is the principal muscle of quiet inspiration. Its contraction expands the thorax, makes pleural pressure more negative, increases transpulmonary pressure and expands the lungs.'],
 ['Path of oxygen','Atmosphere → alveolar ventilation → diffusion → transport in blood → delivery to tissues → mitochondrial use. Failure at any stage may impair oxygen availability.'],
 ['Minute and alveolar ventilation','Minute ventilation V̇E = VT × f includes conducting-airway ventilation. Alveolar ventilation V̇A = (VT − VD) × f subtracts dead space. At VT = 500 mL, VD = 150 mL and f = 12/min, V̇E = 6.0 L/min and V̇A = 4.2 L/min.'],
 ['Breathing frequency and depth','At VT = 300 mL and f = 30/min, minute ventilation is 9.0 L/min and alveolar ventilation 4.5 L/min. At VT = 600 mL and f = 15/min, minute ventilation remains 9.0 L/min while alveolar ventilation becomes 6.75 L/min, assuming VD = 150 mL.']],go:'Explore the interactive laboratory'},
 KZ:{title:'Тыныс алудың анатомиясы мен физиологиясы',caption:'Анатомиялық оқу атласы. Тыныс алу қысымдарының өзгерісін виртуалды зертханада зерттеңіз.',sections:[
 ['Өткізгіш аймақ','Мұрын қуысы, жұтқыншақ, көмей, кеңірдек, бронхтар және өткізгіш бронхиолалар ауаны өткізеді, жылытады, ылғалдандырады және тазартады. Бұл жолдарда газ алмасу өте аз.'],
 ['Респираторлық аймақ','Респираторлық бронхиолалар, альвеолалық жолдар және альвеолалар газ алмасу аймағын құрайды. Альвеолалық желдетілу ауаны жаңартады, ал газ алмасу үшін өкпе капиллярларындағы қан ағысы да қажет.'],
 ['Альвеола-капиллярлық тосқауыл','Оттегі альвеолалық ауадан қанға диффузияланады; көмірқышқыл газы кері бағытта өтеді. Жұқа тосқауыл альвеолалық эпителийден, базальды мембраналардан және капилляр эндотелийінен тұрады.'],
 ['Плевра және диафрагма','Диафрагма — тыныш дем алудың негізгі бұлшықеті. Ол жиырылғанда кеуде қуысы кеңейеді, плевраішілік қысым терісірек болады, транспульмоналдық қысым артып, өкпе кеңейеді.'],
 ['Оттегінің жолы','Атмосфера → альвеолалық желдетілу → диффузия → қанмен тасымалдану → тіндерге жеткізілу → митохондрияда пайдаланылу. Кез келген кезеңнің бұзылуы жасушалардың оттегімен қамтамасыз етілуін төмендетеді.'],
 ['Минуттық және альвеолалық желдетілу','Минуттық желдетілу V̇E = VT × f өткізгіш жолдардағы ауаны да қамтиды. Альвеолалық желдетілу V̇A = (VT − VD) × f өлі кеңістікті есепке алады. VT = 500 мл, VD = 150 мл және f = 12/мин болғанда V̇E = 6,0 л/мин, V̇A = 4,2 л/мин.'],
 ['Тыныс жиілігі мен тереңдігі','VT = 300 мл және f = 30/мин кезінде минуттық желдетілу 9,0 л/мин, альвеолалық желдетілу 4,5 л/мин. VT = 600 мл және f = 15/мин кезінде минуттық желдетілу сол 9,0 л/мин болып, VD = 150 мл болса, альвеолалық желдетілу 6,75 л/мин болады.']],go:'Виртуалды зертхананы ашу'}
} as const;
export default function ModuleOneTheoryAtlas({language}:{language:Language}){
 const t=info[language];
 return <section className="card" aria-label={t.title} style={{marginBottom:24}}>
  <h2>{t.title}</h2>
  <figure style={{margin:0}}>
   <img src="/visuals/thorax-lungs-pleura-diaphragm.png" alt={t.title} width={1536} height={1024} style={{display:'block',width:'100%',height:'auto',objectFit:'contain',borderRadius:14,background:'#eaf4f4'}}/>
   <figcaption style={{fontSize:14,marginTop:10}}>{t.caption}</figcaption>
  </figure>
  <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,280px),1fr))',gap:14,marginTop:18}}>
   {t.sections.map(([heading,description],index)=><article key={heading} style={{background:index%2?'#f0f8f8':'#edf4fa',border:'1px solid #d0e1e5',borderRadius:12,padding:16}}>
    <h3 style={{fontSize:18,margin:'0 0 8px',color:'#123d4a'}}>{index+1}. {heading}</h3>
    <p style={{fontSize:15,lineHeight:1.65,margin:0,color:'#243c47'}}>{description}</p>
   </article>)}
  </div>
  <p style={{marginTop:18}}><a href={`/modules/1/interactive?lang=${language}`}>{t.go} →</a></p>
 </section>;
}