// Move existing labels between their original slots: input values, names,
// answer keys, event listeners and the surrounding layout stay attached.
export function shuffleSelfAssessments(root=document,random=Math.random){
 const move=labels=>{
  if(labels.length<2)return;
  const shuffled=[...labels];
  for(let i=shuffled.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[shuffled[i],shuffled[j]]=[shuffled[j],shuffled[i]];}
  const slots=labels.map(label=>{const slot=label.ownerDocument.createComment('answer slot');label.replaceWith(slot);return slot;});
  slots.forEach((slot,i)=>slot.replaceWith(shuffled[i]));
 };
 root.querySelectorAll('#main fieldset').forEach(fieldset=>{
  const labels=[...fieldset.querySelectorAll('label')].filter(label=>label.closest('fieldset')===fieldset&&label.querySelector('input[type=radio]'));
  move(labels);
 });
 root.querySelectorAll('#main .quiz').forEach(quiz=>move([...quiz.querySelectorAll('button[data-choice]')]));
}
