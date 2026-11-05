const labels=[{done:'Отметить раздел изученным',undo:'Снять отметку',progress:'Отмечено разделов'},{done:'Mark section studied',undo:'Unmark section',progress:'Sections marked'},{done:'Бөлімді оқылды деп белгілеу',undo:'Белгіні алып тастау',progress:'Белгіленген бөлімдер'}];
const key=(mid,section)=>'respiratory-study-v1:'+mid+':'+section;
function read(mid,section){try{return localStorage.getItem(key(mid,section))==='1'}catch{return false}}
export function progressBadge(mid,section,sections,L){
 const n=sections.filter(s=>read(mid,s[0])).length;
 const pct=Math.round(n/sections.length*100);
 const l=labels[L]||labels[0];
 return '<div class="study-progress" data-study-progress="'+mid+'"><div class="study-progress-summary"><strong>'+l.progress+': <span data-study-count>'+n+'</span>/'+sections.length+'</strong><span data-study-percent>'+pct+'%</span></div><div class="study-progress-track" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="'+pct+'" aria-label="'+l.progress+'"><span style="width:'+pct+'%"></span></div>'+(section?'<button type="button" data-study-mark="'+section+'" aria-pressed="'+read(mid,section)+'">'+(read(mid,section)?l.undo:l.done)+'</button>':'')+'</div>';
}
export function initStudyProgress(sections,L){
 document.querySelectorAll('[data-study-progress]').forEach(root=>{
  const mid=Number(root.dataset.studyProgress),button=root.querySelector('[data-study-mark]');if(!button)return;
  button.addEventListener('click',()=>{
   const section=button.dataset.studyMark,checked=!read(mid,section);
   try{localStorage.setItem(key(mid,section),checked?'1':'0')}catch{}
   const n=sections.filter(s=>read(mid,s[0])).length,pct=Math.round(n/sections.length*100),l=labels[L]||labels[0];
   root.querySelector('[data-study-count]').textContent=String(n);
   root.querySelector('[data-study-percent]').textContent=pct+'%';
   root.querySelector('[role=progressbar]').setAttribute('aria-valuenow',String(pct));
   root.querySelector('.study-progress-track span').style.width=pct+'%';
   button.setAttribute('aria-pressed',String(checked));button.textContent=checked?l.undo:l.done;
  });
 });
}
