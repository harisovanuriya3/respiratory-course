const labels={
 RU:{title:'О версии учебника',revision:'Коммит',built:'Дата сборки',unknown:'Не определён',source:'Исходный код',notice:'Дата сборки не означает завершение научной экспертизы.'},
 EN:{title:'Textbook version',revision:'Commit',built:'Build date',unknown:'Unavailable',source:'Source code',notice:'Build date does not imply completed academic review.'},
 KZ:{title:'Оқулық нұсқасы',revision:'Коммит',built:'Жинақтау күні',unknown:'Белгісіз',source:'Бастапқы код',notice:'Жинақтау күні ғылыми сараптаманың аяқталғанын білдірмейді.'}
};
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[c]));
function locale(){const p=new URLSearchParams(location.search).get('lang')?.toUpperCase();return p==='EN'||p==='KZ'?p:'RU'}
function insertVersion(meta){
 const footer=document.getElementById('footer');if(!footer)return;
 const l=locale(),s=labels[l],date=meta.builtAt&&Number.isFinite(Date.parse(meta.builtAt))?new Date(meta.builtAt).toLocaleString(l==='RU'?'ru-RU':l==='KZ'?'kk-KZ':'en-GB',{timeZone:'UTC',timeZoneName:'short'}):s.unknown;
 const sha=/^[a-f0-9]{40}$/.test(meta.revision||'')?meta.revision:null;
 const link=sha?'https://github.com/harisovanuriya3/respiratory-course/commit/'+sha:'https://github.com/harisovanuriya3/respiratory-course';
 footer.querySelector('[data-textbook-version]')?.remove();
 const el=document.createElement('section');el.dataset.textbookVersion='';el.setAttribute('aria-label',s.title);
 el.style.cssText='max-width:1100px;margin:1rem auto;padding:1rem;border-top:1px solid #b5cbc6;font-size:.9rem;line-height:1.6';
 el.innerHTML='<strong>'+s.title+'</strong><div>'+s.revision+': <code>'+esc(meta.shortRevision||s.unknown)+'</code> · '+s.built+': <time>'+esc(date)+'</time></div><div><a href="'+link+'" target="_blank" rel="noopener noreferrer">'+s.source+'</a></div><small>'+s.notice+'</small>';
 footer.append(el);
}
async function showVersion(){
 try{const response=await fetch('/build-info.json',{cache:'no-store'});if(!response.ok)throw Error('metadata unavailable');insertVersion(await response.json())}
 catch{insertVersion({shortRevision:'unknown'})}
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',showVersion,{once:true});else showVersion();
