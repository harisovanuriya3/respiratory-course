/* Curated external educational videos. Links open at the original publisher.
   No video is copied, downloaded or represented as original course media. */
import {modules} from './content.js';
const locale=new URLSearchParams(location.search).get('lang');
const L=locale==='EN'?1:locale==='KZ'?2:0;
const tr=(ru,en,kz)=>[ru,en,kz][L];
const sources={
 anatomy:{url:'https://www.khanacademy.org/science/health-and-medicine/respiratory-system/gas_exchange',title:['Анатомия дыхания и газообмен — Khan Academy','Respiratory anatomy and gas exchange — Khan Academy','Тыныс алу анатомиясы және газ алмасу — Khan Academy'],desc:['Видеоуроки об анатомии лёгких, вентиляции и диффузии.','Video lessons on lung anatomy, ventilation and diffusion.','Өкпе анатомиясы, желдетілуі және диффузиясы туралы бейнесабақтар.']},
 mechanics:{url:'https://www.ninjanerd.org/topic/pulmonology-physiology',title:['Механика дыхания и спирометрия — Ninja Nerd','Breathing mechanics and spirometry — Ninja Nerd','Тыныс алу механикасы және спирометрия — Ninja Nerd'],desc:['Лекции по давлению, сопротивлению дыхательных путей, комплаенсу и объёмам лёгких.','Lectures on pressures, airway resistance, compliance and lung volumes.','Қысым, тыныс жолдарының кедергісі, комплаенс және өкпе көлемдері туралы дәрістер.']},
 gas:{url:'https://en.khanacademy.org/science/health-and-medicine/respiratory-system/gas-exchange-jv/v/oxygen-movement-from-alveoli-to-capillaries',title:['Перенос кислорода из альвеол в кровь — Khan Academy','Oxygen movement from alveoli to capillaries — Khan Academy','Оттегінің альвеоладан қылтамырға өтуі — Khan Academy'],desc:['Путь O₂ через альвеолярно-капиллярный барьер.','The path of O₂ across the alveolar-capillary barrier.','O₂-нің альвеола-капиллярлық бөгет арқылы өтуі.']},
 vq:{url:'https://www.youtube.com/watch?v=yUtngVm93-c',title:['Соотношение вентиляции и перфузии — Ninja Nerd','Ventilation-perfusion coupling — Ninja Nerd','Желдетілу мен перфузия сәйкестігі — Ninja Nerd'],desc:['Разбор V/Q, шунта и мёртвого пространства. В описании автора есть уточнение региональных градиентов.','V/Q, shunt and dead-space teaching; see the publisher correction about regional gradients.','V/Q, шунт және өлі кеңістік; аймақтық градиенттер туралы автор түзетуін қараңыз.']},
 regulation:{url:'https://www.khanacademy.org/science/health-and-medicine/respiratory-system/gas_exchange',title:['Регуляция дыхания — Khan Academy','Control of breathing — Khan Academy','Тыныс алудың реттелуі — Khan Academy'],desc:['Центральные и периферические хеморецепторы, дыхательные центры и рефлексы.','Central and peripheral chemoreceptors, respiratory centres and reflexes.','Орталық және шеткі хеморецепторлар, тыныс алу орталықтары және рефлекстер.']},
 exercise:{url:'https://www.youtube.com/watch?v=6B3TUj2cLgo',title:['Дыхание при физической нагрузке — Ninja Nerd','Respiration during exercise — Ninja Nerd','Дене жүктемесі кезіндегі тыныс алу — Ninja Nerd'],desc:['Нейронные и химические механизмы усиления вентиляции при нагрузке.','Neural and chemical mechanisms of exercise hyperpnoea.','Жүктемеде желдетілудің артуының жүйкелік және химиялық механизмдері.']},
 west:{url:'https://pulmonary.ucsd.edu/research/labs-centers/west/video-lectures.html',title:['Лекции Джона Уэста по физиологии дыхания — UC San Diego','John West respiratory physiology lectures — UC San Diego','Джон Уэсттің тыныс алу физиологиясы дәрістері — UC San Diego'],desc:['Университетские видеолекции по кровотоку, газообмену и дыхательной физиологии.','University lectures on pulmonary blood flow, gas exchange and physiology.','Өкпе қанайналымы, газ алмасу және физиология бойынша университет дәрістері.']}
};
function choose(mid){if(mid<=2)return ['anatomy','west'];if(mid<=6)return ['mechanics','anatomy'];if(mid<=11)return ['gas','vq'];if(mid<=16)return ['vq','west'];if(mid<=19)return ['regulation','west'];if(mid<=22)return ['exercise','west'];return ['west','mechanics'];}
const match=location.pathname.match(/^\/modules\/(\d+)\/(media|theory|interactive)\/?$/);
if(match){
 const mid=Number(match[1]);
 const main=document.querySelector('#main');
 if(main&&modules.some(m=>m.id===mid)){
  const section=document.createElement('section');section.className='curated-video-library';
  section.setAttribute('aria-label',tr('Внешние учебные видеоматериалы','External educational video resources','Сыртқы оқу бейнематериалдары'));
  const h=document.createElement('h2');h.textContent=tr('Дополнительные видеоресурсы по теме','Supplementary video resources','Тақырып бойынша қосымша бейнересурстар');section.append(h);
  const p=document.createElement('p');p.textContent=tr('Материалы открываются на сайтах авторов. Доступность, язык озвучивания и условия использования определяются правообладателями. Внешние видео дополняют, но не заменяют текст учебника.','Videos open on their publishers’ sites. Availability, spoken language and usage terms are controlled by the rights holders. These resources supplement the textbook.','Бейнелер авторлардың сайттарында ашылады. Қолжетімділік, дыбыстау тілі және пайдалану шарттарын құқық иелері белгілейді. Олар оқулықты толықтырады.');section.append(p);
  const ul=document.createElement('ul');ul.className='curated-video-list';
  for(const key of choose(mid)){
   const v=sources[key],li=document.createElement('li'),a=document.createElement('a');
   a.href=v.url;a.target='_blank';a.rel='noopener noreferrer';a.textContent=v.title[L]+' ↗';
   const description=document.createElement('p');description.textContent=v.desc[L];li.append(a,description);
   if(key==='vq'||key==='exercise'){
    const button=document.createElement('button');button.type='button';button.className='video-play';
    button.textContent=tr('Воспроизвести здесь (YouTube)','Play here (YouTube)','Осында ойнату (YouTube)');
    button.addEventListener('click',()=>{
      const frame=document.createElement('iframe');frame.title=v.title[L];
      frame.src='https://www.youtube-nocookie.com/embed/'+(key==='vq'?'yUtngVm93-c':'6B3TUj2cLgo');
      frame.loading='lazy';frame.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';frame.allowFullscreen=true;
      const wrap=document.createElement('div');wrap.className='video-embed';wrap.append(frame);button.replaceWith(wrap);
    },{once:true});li.append(button);
   }
   ul.append(li);
  }
  section.append(ul);main.append(section);
 }
}
