import {modules,sections} from './content.js';
const languages=['RU','EN','KZ'];
const qs=new URLSearchParams(location.search);
const lang=languages.includes(qs.get('lang'))?qs.get('lang'):'RU';
const li=languages.indexOf(lang);
const tx=(ru,en,kz)=>[ru,en,kz][li];
const escapeHTML=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const url=p=>`${p}?lang=${lang}`;
const entries=[];
for(const m of modules){
 entries.push({title:m.title[li],subtitle:tx('Модуль','Module','Модуль')+' '+m.id,url:url(`/modules/${m.id}`),terms:m.title.join(' ')});
 for(const s of sections)entries.push({title:s[li+1],subtitle:`${m.id}. ${m.title[li]}`,url:url(`/modules/${m.id}/${s[0]}`),terms:m.title.join(' ')+' '+s.slice(1).join(' ')});
}
const host=document.createElement('div');host.id='site-tools';
host.innerHTML=`<div class="study-toolbar" role="group" aria-label="${tx('Инструменты учебника','Study tools','Оқу құралдары')}"><time id="study-clock" aria-label="${tx('Местное время','Local time','Жергілікті уақыт')}">--:--</time><button id="study-search-toggle" type="button" aria-expanded="false" aria-controls="study-search-panel">⌕ ${tx('Поиск','Search','Іздеу')}</button><button id="study-timer-toggle" type="button" aria-expanded="false" aria-controls="study-timer-panel">◷ ${tx('Таймер','Timer','Таймер')}</button></div><section id="study-search-panel" class="study-popover" hidden><label for="study-global-search">${tx('Поиск по модулям и разделам','Search modules and sections','Модульдер мен бөлімдерді іздеу')}</label><input id="study-global-search" type="search" autocomplete="off" placeholder="${tx('Название, термин, номер…','Title, term, number…','Атауы, термин, нөмірі…')}"/><div id="study-search-results" role="status" aria-live="polite"></div><button type="button" class="study-close" data-close="study-search-panel">${tx('Закрыть','Close','Жабу')}</button></section><section id="study-timer-panel" class="study-popover" hidden><h2>${tx('Учебный таймер','Study timer','Оқу таймері')}</h2><output id="study-timer-output" aria-live="off">25:00</output><div class="study-presets"><button type="button" data-minutes="5">5</button><button type="button" data-minutes="15">15</button><button type="button" data-minutes="25">25</button><button type="button" data-minutes="45">45</button><span>min</span></div><div class="study-timer-actions"><button type="button" id="study-timer-start">${tx('Старт','Start','Бастау')}</button><button type="button" id="study-timer-pause">${tx('Пауза','Pause','Үзіліс')}</button><button type="button" id="study-timer-reset">${tx('Сброс','Reset','Қалпына келтіру')}</button></div><p id="study-timer-status" role="status" aria-live="polite"></p><button type="button" class="study-close" data-close="study-timer-panel">${tx('Закрыть','Close','Жабу')}</button></section>`;
document.body.append(host);
const $=id=>document.getElementById(id);
const clock=()=>{$('study-clock').textContent=new Intl.DateTimeFormat(lang==='KZ'?'kk-KZ':lang==='EN'?'en-GB':'ru-RU',{hour:'2-digit',minute:'2-digit',hour12:false}).format(new Date())};clock();setInterval(clock,15000);
for(const [toggle,panel] of [['study-search-toggle','study-search-panel'],['study-timer-toggle','study-timer-panel']]){
 $(toggle).addEventListener('click',()=>{const next=$(panel).hidden;for(const p of ['study-search-panel','study-timer-panel'])$(p).hidden=true;for(const b of ['study-search-toggle','study-timer-toggle'])$(b).setAttribute('aria-expanded','false');$(panel).hidden=!next;$(toggle).setAttribute('aria-expanded',String(next));if(next&&panel==='study-search-panel')$('study-global-search').focus()});
}
document.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',()=>{const id=b.dataset.close;$(id).hidden=true;$(id==='study-search-panel'?'study-search-toggle':'study-timer-toggle').setAttribute('aria-expanded','false')}));
document.addEventListener('keydown',e=>{if(e.key==='Escape')document.querySelectorAll('.study-popover').forEach(p=>p.hidden=true);if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();$('study-search-toggle').click()}});
const normalize=s=>String(s).toLocaleLowerCase().normalize('NFKC').replace(/ё/g,'е').trim();
$('study-global-search').addEventListener('input',e=>{const q=normalize(e.target.value);const box=$('study-search-results');if(q.length<2){box.textContent=tx('Введите не менее двух символов','Enter at least two characters','Кемінде екі таңба енгізіңіз');return}const matches=entries.filter(x=>normalize(x.title+' '+x.subtitle+' '+x.terms).includes(q)).slice(0,35);box.innerHTML=matches.length?`<p>${tx('Найдено (первые 35)','Matches (first 35)','Табылды (алғашқы 35)')}: ${matches.length}${matches.length===35?'+':''}</p><ul>${matches.map(x=>`<li><a href="${x.url}"><strong>${escapeHTML(x.title)}</strong><small>${escapeHTML(x.subtitle)}</small></a></li>`).join('')}</ul>`:tx('Совпадений нет','No matches','Сәйкестік жоқ')});
let duration=25*60,remaining=duration,deadline=0,running=false;
const format=s=>`${String(Math.floor(s/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`;
function draw(){if(running){remaining=Math.max(0,Math.ceil((deadline-Date.now())/1000));if(remaining===0){running=false;$('study-timer-status').textContent=tx('Время вышло!','Time is up!','Уақыт аяқталды!')}}$('study-timer-output').textContent=format(remaining)}
for(const b of document.querySelectorAll('[data-minutes]'))b.addEventListener('click',()=>{duration=Number(b.dataset.minutes)*60;remaining=duration;running=false;$('study-timer-status').textContent='';draw()});
$('study-timer-start').addEventListener('click',()=>{if(remaining===0)remaining=duration;if(!running){deadline=Date.now()+remaining*1000;running=true;$('study-timer-status').textContent=''}});
$('study-timer-pause').addEventListener('click',()=>{draw();running=false});
$('study-timer-reset').addEventListener('click',()=>{running=false;remaining=duration;$('study-timer-status').textContent='';draw()});
setInterval(draw,250);draw();
