const labels={
 RU:{title:'Версия учебника',revision:'Коммит',built:'Сборка',unknown:'не определено',source:'Исходный код',notice:'Техническая версия; научная экспертиза проводится отдельно.'},
 EN:{title:'Textbook version',revision:'Commit',built:'Build',unknown:'unavailable',source:'Source code',notice:'Technical version; academic review is separate.'},
 KZ:{title:'Оқулық нұсқасы',revision:'Коммит',built:'Жинақтау',unknown:'анықталмады',source:'Бастапқы код',notice:'Техникалық нұсқа; ғылыми сараптама бөлек жүргізіледі.'}
};
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[c]));
function locale(){const p=new URLSearchParams(location.search).get('lang')?.toUpperCase();return p==='EN'||p==='KZ'?p:'RU'}
function versionLabel(meta,L){
 const s=labels[L];
 const valid=/^[a-f0-9]{40}$/.test(meta.revision||'');
 const sha=valid?meta.revision.slice(0,7):s.unknown;
 const date=Number.isFinite(Date.parse(meta.builtAt||''))?new Date(meta.builtAt).toLocaleString(L==='KZ'?'kk-KZ':L==='EN'?'en-GB':'ru-RU',{timeZone:'Asia/Almaty',timeZoneName:'short',hour12:false}):s.unknown;
 return {s,sha,date,valid};
}
function mountVersion(meta){
 const L=locale(),v=versionLabel(meta,L),target=document.getElementById('header')||document.body;
 if(!target)return;
 document.querySelectorAll('[data-textbook-version]').forEach(el=>el.remove());
 const bar=document.createElement('div');
 bar.dataset.textbookVersion='';bar.setAttribute('role','status');
 bar.style.cssText='box-sizing:border-box;position:relative;z-index:5;width:100%;padding:8px 16px;background:#e9f3f1;color:#153f3a;border-bottom:1px solid #a4c5bc;font:600 13px/1.5 system-ui,sans-serif;text-align:center';
 const link=v.valid?'https://github.com/harisovanuriya3/respiratory-course/commit/'+meta.revision:'https://github.com/harisovanuriya3/respiratory-course';
 bar.innerHTML='<strong>'+v.s.title+'</strong> · '+v.s.revision+': <a href="'+link+'" target="_blank" rel="noopener noreferrer" style="color:#075f58;text-decoration:underline">'+esc(v.sha)+'</a> · '+v.s.built+': <time>'+esc(v.date)+'</time>';
 target.prepend(bar);
 const footer=document.getElementById('footer');
 if(footer){const note=document.createElement('p');note.dataset.textbookVersion='';note.style.cssText='padding:10px 16px;font-size:12px;text-align:center';note.textContent=v.s.notice;footer.append(note);}
}
async function showVersion(){
 let meta={revision:'unknown'};
 try{const response=await fetch('/build-info.json',{cache:'no-store'});if(response.ok)meta=await response.json()}catch{}
 mountVersion(meta);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',showVersion,{once:true});else showVersion();
