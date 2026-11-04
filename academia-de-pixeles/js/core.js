const $=s=>document.querySelector(s),E=(t,c,h)=>{const e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e};
let db={users:{}},me=null,age=12;try{db=JSON.parse(localStorage.getItem('ckdb'))||db;me=localStorage.getItem('ckme')}catch(e){}
if(!db.users||!db.users[me])me=null;
const save=()=>{try{localStorage.setItem('ckdb',JSON.stringify(db));me?localStorage.setItem('ckme',me):localStorage.removeItem('ckme')}catch(e){}};
const hs=s=>{let h=2166136261;for(const c of s){h^=c.charCodeAt(0);h=Math.imul(h,16777619)}return(h>>>0).toString(36)};
const sh=a=>a.map(x=>[Math.random(),x]).sort((a,b)=>a[0]-b[0]).map(x=>x[1]);
const U=()=>db.users[me],key=(c,t)=>c+'_'+age+'_'+t,P=(c,t)=>(U().prog[key(c,t)]||0);
