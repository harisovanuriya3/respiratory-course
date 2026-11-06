import {lectureRespiratoryCasePanel} from './author-lecture-respiratory-case.js';
import {spirometryVideoLesson} from './spirometry-video-lesson.js';
import {embeddedSpirogramImage} from './embedded-spirogram-sample.js';
const t=(L,ru,en,kz)=>[ru,en,kz][L];
export function parseSpirographCsv(text){
 const lines=String(text).trim().split(/\r?\n/).filter(Boolean);
 if(lines.length<3||lines.length>20002)throw new RangeError('CSV row count');
 const rows=lines.map(line=>line.trim().split(/[;,\t]/).map(s=>s.trim().replace(/^"|"$/g,'')));
 const header=rows[0].map(s=>s.toLowerCase().replace(/\s/g,''));
 if(!/^(time|time_s|seconds|t)$/.test(header[0])||!/^(volume|volume_l|volumel|liters|litres|v)$/.test(header[1]))throw new Error('Expected time_s,volume_l');
 if(rows.slice(1).some(r=>r.length!==2||r.some(cell=>cell==='')))throw new RangeError('Missing CSV values');
 const values=rows.slice(1).map(r=>[Number(r[0]),Number(r[1])]);
 if(values.some(([time,volume])=>!Number.isFinite(time)||!Number.isFinite(volume)||time<0||Math.abs(volume)>20))throw new RangeError('Invalid sample');
 if(values.some((r,i)=>i&&r[0]<=values[i-1][0]))throw new RangeError('Nonmonotonic time');
 if(values.at(-1)[0]-values[0][0]>3600)throw new RangeError('Duration too long');
 return values;
}
export function recordedSpirogramPanel(L){
 return '<section class="recorded-spirogram" data-recorded-spiro data-l="'+L+'"><h4>'+t(L,'Запись спирографа: загрузка реальных измерений','Spirograph recording: import real measurements','Спирограф жазбасы: нақты өлшемдерді жүктеу')+'</h4><p>'+t(L,'Загрузите обезличенный CSV, экспортированный с реального спирографа: time_s,volume_l. Время — секунды, объём — литры.','Import a de-identified CSV exported from a real spirograph: time_s,volume_l. Time in seconds, volume in liters.','Нақты спирографтан алынған жеке дерексіз CSV жүктеңіз: time_s,volume_l. Уақыт секундпен, көлем литрмен.')+'</p>'+'<div class="lecture-case-slot">'+lectureRespiratoryCasePanel(L)+'</div>'+'<div id="spirograph-video">'+spirometryVideoLesson(L,['RU','EN','KZ'][L])+'</div>'+'<figure class="real-spirogram-example"><img src="'+embeddedSpirogramImage+'" alt="'+t(L,'Фрагмент реальной приборной спирограммы из учебного пособия Spiro S-100','Excerpt of an actual instrument spirogram from the Spiro S-100 teaching guide','Spiro S-100 оқу құралынан алынған нақты спирограмма үзіндісі')+'" width="480" height="360"><figcaption>'+t(L,'Реальная запись из предоставленного методического пособия Spiro S-100. Заголовок с идентификатором удалён. Уменьшенный скан служит для качественного анализа дыхательных фаз; точные числовые измерения по нему не выполняются.','Actual instrument printout from the supplied Spiro S-100 teaching guide. Identifying header removed. Reduced scan is for qualitative phase analysis, not precise numerical measurement.','Spiro S-100 оқу құралындағы нақты жазба. Идентификатор бар тақырып алынды. Кішірейтілген скан тыныс фазаларын сапалық талдауға арналған, дәл өлшеуге емес.')+'</figcaption></figure>'+'<div class="recorded-study-steps"><h5>'+t(L,'Цель и ход работы','Objective and procedure','Мақсат және жұмыс барысы')+'</h5><ol><li>'+t(L,'Откройте обезличенный скан реальной спирограммы или CSV прибора.','Open an anonymized real spirogram scan or instrument CSV.','Жеке дерексіз нақты спирограмма сканын немесе CSV файлын ашыңыз.')+'</li><li>'+t(L,'Определите спокойные циклы, максимальный вдох и выдох, прочитайте шкалы.','Identify tidal cycles, maximal inspiration and expiration, and read the scales.','Тыныш циклдер, барынша дем алу мен шығаруды анықтап, шкаланы оқыңыз.')+'</li><li>'+t(L,'Запишите VT, IRV, ERV, VC и FEV₁/FVC только если они доступны в записи.','Record VT, IRV, ERV, VC and FEV₁/FVC only where the recording supports them.','Жазбада болғанда ғана VT, IRV, ERV, VC және FEV₁/FVC көрсеткіштерін жазыңыз.')+'</li><li>'+t(L,'Сравните с учебной моделью и объясните расхождения.','Compare with the simulation and explain differences.','Модельмен салыстырып, айырмашылықтарды түсіндіріңіз.')+'</li></ol></div><label>'+t(L,'Скан реальной записи (изображение)','Real recording scan (image)','Нақты жазба сканы (сурет)')+' <input data-spiro-image type="file" accept="image/png,image/jpeg,image/webp"></label><figure data-spiro-image-figure hidden><img data-spiro-image-preview alt="'+t(L,'Загруженная приборная спирограмма','Imported instrument spirogram','Жүктелген приборлық спирограмма')+'" style="max-width:100%;max-height:520px;object-fit:contain"><figcaption>'+t(L,'Загруженная приборная запись. Измеряйте показатели только по видимым шкалам.','Imported instrument record. Read values only from visible scales.','Жүктелген прибор жазбасы. Мәндерді көрінетін шкала бойынша анықтаңыз.')+'</figcaption></figure><label>'+t(L,'Файл записи CSV','Recording CSV file','CSV жазба файлы')+' <input data-spiro-file type="file" accept=".csv,text/csv,text/plain"></label><p data-spiro-message role="status" aria-live="polite">'+t(L,'Реальная запись пока не загружена. Моделируемые кривые в других вкладках не являются записями пациента.','No real recording loaded. Simulated curves in other tabs are not patient recordings.','Нақты жазба жүктелмеген. Басқа қойындылардағы модельдік қисықтар пациент жазбасы емес.')+'</p><svg data-spiro-record viewBox="0 0 640 260" role="img" aria-label="'+t(L,'Объём-время из загруженного спирографа','Volume-time trace from imported spirograph','Жүктелген спирографтың көлем-уақыт қисығы')+'"><path d="M55 20V220H615" fill="none" stroke="#456b70" stroke-width="2"/><g data-spiro-grid></g><path data-spiro-record-path d="" fill="none" stroke="#087e89" stroke-width="2.5" stroke-linecap="round"/><text x="5" y="18" font-size="12">L</text><text x="570" y="246" font-size="12">s</text></svg><div class="spiro-playback-controls"><button type="button" data-spiro-replay disabled>'+t(L,'Воспроизвести запись','Replay recording','Жазбаны қайта ойнату')+'</button><label>'+t(L,'Скорость','Speed','Жылдамдық')+' <select data-spiro-speed><option value="1">1×</option><option value="2">2×</option><option value="4">4×</option></select></label></div><p>'+t(L,'Используйте только записи, разрешённые для учебного использования. Не загружайте имена, идентификаторы или другие персональные данные. Обработка файла происходит в браузере, без отправки на сервер.','Use only recordings licensed for teaching. Do not upload names, identifiers or other personal data. The file is processed in the browser without server upload.','Тек оқу үшін рұқсат етілген жазбаларды пайдаланыңыз. Аты-жөні мен жеке деректерді жүктемеңіз. Файл серверге жіберілмей, браузерде өңделеді.')+'</p></section>';
}
export function initRecordedSpirogramPanels(){
 document.querySelectorAll('[data-recorded-spiro]').forEach(root=>{
  if(root.dataset.ready)return;root.dataset.ready='1';
  const L=Number(root.dataset.l||0),file=root.querySelector('[data-spiro-file]'),msg=root.querySelector('[data-spiro-message]'),path=root.querySelector('[data-spiro-record-path]');
  const replay=root.querySelector('[data-spiro-replay]'),speed=root.querySelector('[data-spiro-speed]'),grid=root.querySelector('[data-spiro-grid]');
  const imageInput=root.querySelector('[data-spiro-image]'),preview=root.querySelector('[data-spiro-image-preview]'),figure=root.querySelector('[data-spiro-image-figure]');let previousUrl=null;
  imageInput.addEventListener('change',()=>{const f=imageInput.files?.[0];if(!f)return;if(!['image/png','image/jpeg','image/webp'].includes(f.type)||f.size>5*1024*1024){msg.textContent=t(L,'Файл должен быть PNG/JPEG/WebP до 5 МБ.','Use PNG/JPEG/WebP up to 5 MB.','5 МБ дейінгі PNG/JPEG/WebP қажет.');return;}if(previousUrl)URL.revokeObjectURL(previousUrl);previousUrl=URL.createObjectURL(f);preview.src=previousUrl;figure.hidden=false;msg.textContent=t(L,'Реальная запись открыта локально; проверьте шкалы и подписи.','Real record opened locally; inspect scales and labels.','Нақты жазба жергілікті ашылды; шкала мен белгілерді тексеріңіз.');});
  file.addEventListener('change',async()=>{
   const f=file.files?.[0];if(!f)return;
   try{
    if(f.size>1024*1024)throw new RangeError('File too large');
    const rows=parseSpirographCsv(await f.text());
    const minT=rows[0][0],duration=rows.at(-1)[0]-minT;
    const vols=rows.map(r=>r[1]),lo=Math.min(...vols),hi=Math.max(...vols),range=Math.max(.01,hi-lo);
    const stride=Math.max(1,Math.ceil(rows.length/1500));
    path.setAttribute('d',rows.filter((_,i)=>i%stride===0||i===rows.length-1).map(([time,volume],i)=>(i?'L':'M')+(55+560*(time-minT)/duration).toFixed(2)+' '+(220-190*(volume-lo)/range).toFixed(2)).join(' '));
    const ns='http://www.w3.org/2000/svg';grid.replaceChildren();
    for(let i=0;i<=4;i++){
     const y=220-190*i/4,x=55+560*i/4;
     const line=document.createElementNS(ns,'path');line.setAttribute('d','M55 '+y+'H615 M'+x+' 20V220');line.setAttribute('stroke','#cbd5e1');line.setAttribute('stroke-width','0.7');grid.appendChild(line);
     const yl=document.createElementNS(ns,'text');yl.setAttribute('x','50');yl.setAttribute('y',String(y+4));yl.setAttribute('text-anchor','end');yl.setAttribute('font-size','11');yl.textContent=(lo+range*i/4).toFixed(2);grid.appendChild(yl);
     const xl=document.createElementNS(ns,'text');xl.setAttribute('x',String(x));xl.setAttribute('y','235');xl.setAttribute('text-anchor','middle');xl.setAttribute('font-size','11');xl.textContent=(minT+duration*i/4).toFixed(1);grid.appendChild(xl);
    }
    replay.disabled=false;
    const play=()=>{
     const length=path.getTotalLength();
     path.style.transition='none';path.style.strokeDasharray=String(length);path.style.strokeDashoffset=String(length);
     if(window.matchMedia?.('(prefers-reduced-motion: reduce)').matches){path.style.strokeDashoffset='0';return;}
     requestAnimationFrame(()=>requestAnimationFrame(()=>{path.style.transition='stroke-dashoffset '+Math.max(1,Math.min(20,duration/Number(speed.value)))+'s linear';path.style.strokeDashoffset='0';}));
    };
    replay.onclick=play;play();
    msg.textContent=t(L,'Загружено точек: ','Samples loaded: ','Жүктелген нүктелер: ')+rows.length+' · '+t(L,'Длительность','Duration','Ұзақтығы')+': '+duration.toFixed(1)+' s · '+t(L,'Диапазон объёма','Volume range','Көлем аралығы')+': '+lo.toFixed(2)+'–'+hi.toFixed(2)+' L';
   }catch{replay.disabled=true;grid.replaceChildren();path.setAttribute('d','');msg.textContent=t(L,'Ошибка формата: требуется CSV time_s,volume_l с возрастающим временем и числовыми значениями.','Invalid format: use CSV time_s,volume_l with increasing time and numeric values.','Формат қатесі: уақыт өсу ретімен және сандық мәндермен CSV time_s,volume_l қажет.');}
  });
 });
}
