import {textbookSources,regionalTextbookSources} from './scientific-sources.js';
const sources=[...textbookSources,...regionalTextbookSources];
const tr=(L,ru,en,kz)=>[ru,en,kz][L];
// These are reading recommendations, not claims of page-level source verification.
const topicSources={
 1:[1,2,3,5,6],2:[1,2,4,5,6],3:[1,2,4,5],4:[1,2,4,5],5:[1,2,4,5],
 6:[1,2,4,5],7:[1,2,3,5],8:[1,2,3,5],9:[1,2,4,5],10:[1,2,3,5],
 11:[1,2,4,5],12:[1,2,4,5],13:[1,2,3,5],14:[1,2,3,5],15:[1,3,4,5],
 16:[1,3,4,5,6],17:[1,3,4,5,6],18:[1,3,4,5,6],19:[1,3,4,5,6],
 20:[1,2,3,5],21:[1,2,3,5],22:[1,2,3,5],23:[1,2,3,5],24:[1,2,3,5],
 25:[1,2,3,5,6]
};
export function moduleReadingReferences(mid,section,L,lang){
 if(section!=='theory')return '';
 const refs=topicSources[mid];if(!refs)return '';
 const anchors=refs.filter(n=>sources[n-1]?.url).map(n=>'<a href="/bibliography?lang='+lang+'#ref-'+n+'" aria-label="'+tr(L,'Источник ','Source ','Дереккөз ')+n+'">['+n+']</a>').join(' ');
 return '<section class="lesson-card academic-source-links"><h3>'+tr(L,'Учебники для изучения темы','Textbooks for further reading','Тақырыпты оқуға арналған оқулықтар')+'</h3><p>'+anchors+'</p><p>'+tr(L,'Ссылки ведут к проверяемым библиографическим записям издательств и библиотечных каталогов. Это тематические рекомендации, а не подтверждение конкретных страниц или каждого утверждения. Постраничные цитаты добавляются только после сверки с текстом соответствующего издания.','Links point to traceable publisher and library catalogue records. These are topic-level reading recommendations, not verification of specific pages or every claim. Page citations require checking the actual edition.','Сілтемелер баспа мен кітапхана каталогтарының тексерілетін жазбаларына апарады. Бұлар тақырып бойынша оқу ұсыныстары; нақты беттер мен әр тұжырымның расталуы емес. Бет нөмірлері басылым мәтінімен салыстырылғаннан кейін ғана беріледі.')+'</p></section>';
}
