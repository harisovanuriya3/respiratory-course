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
 const safe=s=>String(s).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
 const items=refs.filter(n=>sources[n-1]?.url).map(n=>{
  const source=sources[n-1];
  return '<li><a href="'+safe(source.url)+'" target="_blank" rel="noopener noreferrer">['+n+'] '+safe(source.title)+'</a> · '+safe(source.edition)+' · <a href="/bibliography?lang='+encodeURIComponent(lang)+'#ref-'+n+'">'+tr(L,'Библиографическая запись','Bibliography entry','Библиографиялық жазба')+'</a></li>';
 }).join('');
 return '<section class="lesson-card academic-source-links" id="module-theory-sources-'+mid+'"><h3>'+tr(L,'Источники к теоретическому разделу','Sources for this theory section','Теория бөліміне арналған дереккөздер')+'</h3><ol>'+items+'</ol><p>'+tr(L,'Это проверяемые библиографические записи издательств и библиотек. Список тематический: соответствие каждого утверждения конкретной странице издания пока не установлено.','These are traceable publisher and library catalogue records. The list is topic-based; individual claims have not been verified against specific pages.','Бұл баспа және кітапхана каталогтарының тексерілетін жазбалары. Тізім тақырыптық; әр тұжырымның нақты бетке сәйкестігі әлі тексерілмеген.')+'</p></section>';
}
