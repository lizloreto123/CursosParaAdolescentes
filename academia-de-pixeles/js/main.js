ages();courses();nav();
/* video: se reproduce solo al verse en pantalla */
{const v=document.querySelector('#video video');if(v){v.muted=true;const p=()=>{const r=v.play();r&&r.catch&&r.catch(()=>{})};p();new IntersectionObserver(es=>es.forEach(x=>x.isIntersecting?p():v.pause()),{threshold:.25}).observe(v)}}
