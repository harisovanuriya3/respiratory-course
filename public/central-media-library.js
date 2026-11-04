import {modules} from './content.js';
const tr=(L,ru,en,kz)=>[ru,en,kz][L];
const link=(path,lang)=>path+'?lang='+lang;
export function centralMediaLibrary(L,lang){
 const cards=modules.map(m=>{
 const id=m.id, title=m.title[L],img=id===1?'<img src="/images/respiratory-alveolus-exchange.svg" alt="Original alveolar-capillary gas exchange diagram" loading="lazy" style="max-width:100%;height:auto">':'';
 return '<article class="lesson-card" data-search="'+title.replace(/"/g,'&quot;')+'"><h2>'+id+'. '+title+'</h2>'+img+
 '<p>'+tr(L,'Материалы данного модуля: иллюстрации, схемы, анимации и доступные лаборатории.','Module materials: illustrations, diagrams, animations, and available laboratories.','Модуль материалдары: суреттер, сызбалар, анимациялар және қолжетімді зертханалар.')+'</p>'+
 '<p><a href="'+link('/modules/'+id+'/media',lang)+'">'+tr(L,'Открыть визуальные материалы','Open visual materials','Көрнекі материалдарды ашу')+'</a> · <a href="'+link('/modules/'+id+'/interactive',lang)+'">'+tr(L,'Виртуальная лаборатория','Virtual laboratory','Виртуалды зертхана')+'</a> · <a href="'+link('/modules/'+id+'/theory',lang)+'">'+tr(L,'Перейти к теории','Go to theory','Теорияға өту')+'</a></p>'+
 (id===1?'<p>'+tr(L,'Авторская схема, без внешней лицензии.','Original diagram, no third-party image license.','Авторлық сызба, сыртқы лицензия қажет емес.')+'</p>':'')+'</article>';
 }).join('');
 return '<main class="wrap" id="main"><h1>'+tr(L,'Единая медиатека дыхательной системы','Respiratory physiology media library','Тыныс алу физиологиясының медиатекасы')+'</h1><p>'+tr(L,'Каждая карточка связана с исходным модулем. Существующие медиа и лаборатории не переносятся и не удаляются: здесь собраны прямые переходы к ним.','Every card links back to its source module. Existing media and laboratories remain in place; this index links to them.','Әр карточка бастапқы модульге сілтейді. Бұрынғы медиа мен зертханалар өз орнында қалады; бұл тізім оларға өтуді қамтамасыз етеді.')+'</p><div class="module-grid">'+cards+'</div></main>';
}
export function mediaBacklink(mid,L,lang){
 return '<section class="lesson-card"><p><a href="'+link('/media-library',lang)+'">'+tr(L,'Все материалы в единой медиатеке','All materials in the media library','Барлық материалдар медиатекада')+'</a> · <a href="'+link('/modules/'+mid+'/media',lang)+'">'+tr(L,'Медиа этого модуля','This module’s media','Осы модульдің медиасы')+'</a></p></section>';
}
