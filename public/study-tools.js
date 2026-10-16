import {modules,sections} from './content.js';
const params=new URLSearchParams(location.search);
const lang=['RU','EN','KZ'].includes(params.get('lang'))?params.get('lang'):'RU';
const L=['RU','EN','KZ'].indexOf(lang);
const strings={RU:['Поиск','Часы','Таймер','Поиск по разделам и подразделам','Введите название или термин','Ничего не найдено','Старт','Пауза','Продолжить','Сброс','Минуты','Закрыть','Инструменты'],EN:['Search','Clock','Timer','Search modules and sections','Enter a title or term','No results','Start','Pause','Resume','Reset','Minutes','Close','Tools'],KZ:['Іздеу','Сағат','Таймер','Бөлімдер мен бөлімшелерден іздеу','Атау немесе термин енгізіңіз','Нәтиже табылмады','Бастау','Үзіліс','Жалғастыру','Қалпына келтіру','Минут','Жабу','Құралдар']}[lang];
const tr=i=>strings[i];
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const root=document.createElement('div');root.id='study-tools';
root.innerHTML=`<div class="study-tools-bar" role="group" aria-label="${tr(12)}"><button type="button" id="st-search-open">⌕ ${tr(0)}</button><button type="button" id="st-clock-open">◷ ${tr(1)} <time id="st-clock" aria-live="off"></time></button><button type="button" id="st-timer-open">⏱ ${tr(2)} <span id="st-timer-mini"></span></button></div><section id="st-panel" class="study-tools-panel" hidden aria-label="${tr(12)}"><div class="st-panel-head"><strong id="st-title"></strong><button type="button" id="st-close" aria-label="${tr(11)}">×</button></div><div id="st-body"></div></section>`;
document.body.append(root);
for(const id of ['st-search-open','st-clock-open','st-timer-open']){const btn=root.querySelector('#'+id);btn.setAttribute('aria-controls','st-panel');btn.setAttribute('aria-expanded','false');}
const panel=root.querySelector('#st-panel'),body=root.querySelector('#st-body'),title=root.querySelector('#st-title');
const url=(p)=>`${p}?lang=${lang}`;
// Terminology aliases improve discovery without claiming to search the full lesson text.
const searchAliases={
  3:'diaphragm pleura диафрагма плевра көкет',
  5:'compliance surfactant комплаенс сурфактант серпімділік',
  6:'poiseuille bronchospasm airway resistance бронхоспазм пуазейль',
  7:'spirometry FEV1 FVC TLC RV спирометрия спирография',
  8:'dead space alveolar ventilation мертвое пространство альвеолярная вентиляция',
  9:'fick diffusion диффузия фик',
  10:'alveolar gas equation PAO2 A-a gradient альвеолярное газовое уравнение',
  11:'DLCO membrane альвеолокапиллярный барьер диффузионная способность',
  12:'pulmonary vascular resistance PVR зоны веста',
  13:'VQ shunt dead space шунт перфузия вентиляция',
  14:'hemoglobin P50 oxygen content CaO2 DO2 гемоглобин',
  15:'carbon dioxide bicarbonate haldane chloride shift бикарбонат',
  16:'acid base pH winter anion gap ацидоз алкалоз',
  17:'prebotzinger brainstem medulla дыхательный центр',
  18:'hering breuer vagus mechanoreceptors блуждающий нерв рефлекс',
  19:'chemoreceptors CO2 O2 carotid bodies хеморецепторы',
  20:'exercise VO2 VCO2 CPET нагрузка эргоспирометрия',
  21:'altitude hypoxia acclimatization высота гипоксия',
  22:'sleep apnea REM NREM сон апноэ',
  23:'diving hyperbaric decompression погружение декомпрессия',
  24:'spirometry DLCO FEV1 FVC plethysmography спирометрия бодиплетизмография',
  25:'respiratory failure hypoxemia oxygen delivery дыхательная недостаточность'
};
const normalizeSearch=s=>String(s).toLocaleLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g,'').replace(/ё/g,'е').replace(/[^\p{L}\p{N}]+/gu,' ').trim();
const items=modules.flatMap(m=>[{title:`${m.id}. ${m.title[L]}`,sub:m.title.join(' ')+' '+(searchAliases[m.id]||''),url:url(`/modules/${m.id}`)},...sections.map((s,i)=>({title:`${m.id}.${i+1} ${m.title[L]} — ${s[L+1]}`,sub:[...m.title,...s.slice(1)].join(' ')+' '+(searchAliases[m.id]||''),url:url(`/modules/${m.id}/${s[0]}`)}))]);
let lastTrigger=null;
function open(name){
  if(panel.hidden && document.activeElement instanceof HTMLElement)lastTrigger=document.activeElement;
  panel.hidden=false;title.textContent=name;
  for(const id of ['st-search-open','st-clock-open','st-timer-open'])root.querySelector('#'+id).setAttribute('aria-expanded','false');
  const current=name===tr(0)?'st-search-open':name===tr(1)?'st-clock-open':'st-timer-open';
  root.querySelector('#'+current).setAttribute('aria-expanded','true');
  root.querySelector('#st-close').focus();
}
function close(){
  if(panel.hidden)return;
  panel.hidden=true;
  for(const id of ['st-search-open','st-clock-open','st-timer-open'])root.querySelector('#'+id).setAttribute('aria-expanded','false');
  if(lastTrigger?.isConnected)lastTrigger.focus();
}
root.querySelector('#st-close').onclick=close;
function showSearch(){open(tr(0));body.innerHTML=`<label class="st-label" for="st-query">${tr(3)}</label><input id="st-query" type="search" autocomplete="off" placeholder="${tr(4)}"><div id="st-results" class="st-results" role="status"></div>`;const input=body.querySelector('input'),results=body.querySelector('#st-results');function render(){const terms=normalizeSearch(input.value).split(' ').filter(Boolean);const matches=terms.length?items.filter(i=>{const hay=normalizeSearch(i.title+' '+i.sub);return terms.every(term=>hay.includes(term));}).slice(0,60):[];results.innerHTML=matches.length?matches.map(i=>`<a href="${i.url}">${esc(i.title)}</a>`).join(''):terms.length?`<p>${tr(5)}</p>`:'';}input.addEventListener('input',render);input.focus();}
const locale={RU:'ru-RU',EN:'en-GB',KZ:'kk-KZ'}[lang];
function clock(){root.querySelector('#st-clock').textContent=new Intl.DateTimeFormat(locale,{hour:'2-digit',minute:'2-digit',hour12:false}).format(new Date());}
clock();setInterval(clock,15000);
function showClock(){open(tr(1));body.innerHTML=`<p class="st-clock-large" id="st-clock-large"></p><p>${esc(new Intl.DateTimeFormat(locale,{dateStyle:'full'}).format(new Date()))}</p>`;const update=()=>{const el=body.querySelector('#st-clock-large');if(el)el.textContent=new Intl.DateTimeFormat(locale,{timeStyle:'medium'}).format(new Date());};update();}
let remaining=5*60,running=false,last=0,interval=null,started=false;
const fmt=s=>`${String(Math.floor(s/3600)).padStart(2,'0')}:${String(Math.floor(s%3600/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`;
function paintTimer(){root.querySelector('#st-timer-mini').textContent=running?fmt(remaining):'';const output=body.querySelector('#st-timer-display');if(output)output.textContent=fmt(remaining);const toggle=body.querySelector('#st-toggle');if(toggle)toggle.textContent=running?tr(7):remaining===0?tr(6):!started?tr(6):tr(8);}
function tick(){if(!running)return;const now=Date.now();const elapsed=Math.floor((now-last)/1000);if(elapsed<1)return;remaining=Math.max(0,remaining-elapsed);last+=elapsed*1000;if(!remaining){running=false;root.querySelector('#st-timer-open').classList.add('st-finished');root.querySelector('#st-timer-open').setAttribute('aria-label',tr(2)+' — 00:00:00');root.querySelector('#st-timer-mini').textContent='00:00:00';}paintTimer();}
interval=setInterval(tick,250);
function showTimer(){tick();open(tr(2));body.innerHTML=`<label class="st-label" for="st-minutes">${tr(10)}</label><input type="number" id="st-minutes" min="1" max="180" step="1" value="${Math.max(1,Math.ceil(remaining/60))}"><div class="st-timer-large" id="st-timer-display" role="timer" aria-live="off"></div><div class="st-actions"><button type="button" id="st-toggle"></button><button type="button" id="st-reset">${tr(9)}</button></div>`;body.querySelector('#st-toggle').onclick=()=>{if(running){tick();running=false;}else{if(!started || !remaining)remaining=Math.max(1,Math.min(180,Math.floor(Number(body.querySelector('#st-minutes').value)||5)))*60;started=true;running=true;last=Date.now();root.querySelector('#st-timer-open').classList.remove('st-finished');root.querySelector('#st-timer-open').removeAttribute('aria-label');}paintTimer();};body.querySelector('#st-minutes').addEventListener('change',()=>{if(!running){started=false;remaining=Math.max(1,Math.min(180,Math.floor(Number(body.querySelector('#st-minutes').value)||5)))*60;paintTimer();}});body.querySelector('#st-reset').onclick=()=>{running=false;started=false;last=0;remaining=Math.max(1,Math.min(180,Math.floor(Number(body.querySelector('#st-minutes').value)||5)))*60;root.querySelector('#st-timer-open').classList.remove('st-finished');root.querySelector('#st-timer-open').removeAttribute('aria-label');paintTimer();};paintTimer();}
root.querySelector('#st-search-open').onclick=showSearch;
root.querySelector('#st-clock-open').onclick=showClock;
root.querySelector('#st-timer-open').onclick=showTimer;
document.addEventListener('keydown',e=>{if(e.key==='Escape')close();if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();showSearch();}});

// Accessibility: refresh the clock panel while it remains open.
setInterval(()=>{const el=body.querySelector('#st-clock-large');if(el)el.textContent=new Intl.DateTimeFormat(locale,{timeStyle:'medium'}).format(new Date());},1000);
