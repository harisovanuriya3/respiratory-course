// Student sketchpad: pointer-based drawing, eraser, undo, clear, PNG export.
const labels=[
 ['Поле для рисования схемы','Карандаш','Ластик','Отменить','Очистить','Сохранить PNG'],
 ['Diagram sketchpad','Pen','Eraser','Undo','Clear','Save PNG'],
 ['Сызба салу алаңы','Қалам','Өшіргіш','Болдырмау','Тазалау','PNG сақтау']
];
export function diagramSketchpad(mid,L){
 const t=labels[L]||labels[0];
 return `<details class="lesson-card diagram-sketchpad" data-sketchpad="${mid}" data-sketch-lang="${L}"><summary><strong>${t[0]}</strong></summary><div class="sketch-tools" style="display:flex;flex-wrap:wrap;gap:8px;margin:12px 0"><button type="button" data-sketch-tool="pen">${t[1]}</button><button type="button" data-sketch-tool="erase">${t[2]}</button><button type="button" data-sketch-undo>${t[3]}</button><button type="button" data-sketch-clear>${t[4]}</button><button type="button" data-sketch-export>${t[5]}</button><input type="color" data-sketch-color value="#173b65" aria-label="Color"><input type="range" data-sketch-width min="2" max="18" value="4" aria-label="Stroke width"></div><canvas width="900" height="500" aria-label="${t[0]}" style="width:100%;height:auto;border:1px solid #64748b;border-radius:8px;background:white;touch-action:none;display:block"></canvas></details>`;
}
export function initDiagramSketchpads(){
 document.querySelectorAll('[data-sketchpad]').forEach(root=>{
  const canvas=root.querySelector('canvas'),ctx=canvas.getContext('2d'),undo=[],color=root.querySelector('[data-sketch-color]'),width=root.querySelector('[data-sketch-width]');
  let active=false,tool='pen',previous=null;
  const storageKey='respiratory-sketch-v2-'+root.dataset.sketchpad;
  const persist=()=>{try{localStorage.setItem(storageKey,canvas.toDataURL('image/png'))}catch(_){/* PNG export remains available. */}};
  try{const saved=localStorage.getItem(storageKey);if(saved){const img=new Image();img.onload=()=>ctx.drawImage(img,0,0,canvas.width,canvas.height);img.src=saved;}}catch(_){/* Storage unavailable. */}
  const snapshot=()=>{if(undo.length>=25)undo.shift();undo.push(ctx.getImageData(0,0,canvas.width,canvas.height))};
  const point=e=>{const r=canvas.getBoundingClientRect();return {x:(e.clientX-r.left)*canvas.width/r.width,y:(e.clientY-r.top)*canvas.height/r.height}};
  canvas.addEventListener('pointerdown',e=>{if(e.button!==0&&e.pointerType==='mouse')return;snapshot();active=true;previous=point(e);canvas.setPointerCapture(e.pointerId);ctx.beginPath();ctx.fillStyle=tool==='erase'?'#ffffff':color.value;ctx.arc(previous.x,previous.y,+width.value/2,0,Math.PI*2);ctx.fill();});
  canvas.addEventListener('pointermove',e=>{if(!active)return;const p=point(e);ctx.beginPath();ctx.moveTo(previous.x,previous.y);ctx.lineTo(p.x,p.y);ctx.strokeStyle=tool==='erase'?'#ffffff':color.value;ctx.lineWidth=tool==='erase'?+width.value*2:+width.value;ctx.lineCap='round';ctx.lineJoin='round';ctx.stroke();previous=p;});
  const end=()=>{if(active)persist();active=false;previous=null};canvas.addEventListener('pointerup',end);canvas.addEventListener('pointercancel',end);canvas.addEventListener('lostpointercapture',end);
  root.querySelectorAll('[data-sketch-tool]').forEach(b=>b.addEventListener('click',()=>{tool=b.dataset.sketchTool;root.querySelectorAll('[data-sketch-tool]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)))}));
  root.querySelector('[data-sketch-undo]').addEventListener('click',()=>{const img=undo.pop();if(img){ctx.putImageData(img,0,0);persist()}});
  root.querySelector('[data-sketch-clear]').addEventListener('click',()=>{snapshot();ctx.clearRect(0,0,canvas.width,canvas.height);persist()});
  root.querySelector('[data-sketch-export]').addEventListener('click',()=>{const output=document.createElement('canvas');output.width=canvas.width;output.height=canvas.height;const c=output.getContext('2d');c.fillStyle='white';c.fillRect(0,0,output.width,output.height);c.drawImage(canvas,0,0);const a=document.createElement('a');a.download='respiratory-module-'+root.dataset.sketchpad+'-diagram.png';a.href=output.toDataURL('image/png');a.click()});
 });
}
