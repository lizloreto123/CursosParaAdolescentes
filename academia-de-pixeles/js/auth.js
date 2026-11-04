/* auth */
function nav(){$('#nav').innerHTML=me?`<span class="px" style="font-size:12px">Hola, ${U().name.split(' ')[0]}</span> <button class="btn" onclick="files()">🏆 Archivos</button><button class="btn alt" onclick="out()">Salir</button>`:`<button class="btn" onclick="auth('log')">Entrar</button>`}
const out=()=>{me=null;save();nav();courses();closePlay()};
function auth(m){const a=$('#ab');$('#am').classList.add('on');
 if(m=='log')a.innerHTML=`<h2>🔑 Entrar</h2><input id="e" type="email" placeholder="Correo"><input id="p" type="password" placeholder="Contraseña"><div class="err" id="er"></div><button class="btn" id="ok">Entrar</button><button class="btn alt" onclick="auth('reg')">Crear cuenta</button><button class="btn alt" onclick="$('#am').classList.remove('on')">✖</button>`;
 if(m=='reg')a.innerHTML=`<h2>🚀 Registro</h2><input id="n" placeholder="Nombre completo"><input id="e" type="email" placeholder="Correo"><input id="p" type="password" placeholder="Contraseña (6+ caracteres y un número)"><div class="err" id="er"></div><button class="btn" id="ok">Registrarme</button><button class="btn alt" onclick="auth('log')">Ya tengo cuenta</button>`;
 if(m=='forg')a.innerHTML=`<h2>📧 Recuperar contraseña</h2><p>Te enviaremos una contraseña nueva.</p><input id="e" type="email" placeholder="Tu correo"><div class="err" id="er"></div><div id="mail"></div><button class="btn" id="ok">Enviar contraseña nueva</button><button class="btn alt" onclick="auth('log')">Volver</button>`;
 const er=t=>{$('#er').textContent=t};$('#ok').onclick=()=>{const e=($('#e').value||'').trim().toLowerCase();
  if(!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(e))return er('Escribe un correo válido, por ejemplo nombre@correo.com');
  if(m=='forg'){const u=db.users[e];if(u){const np=Math.random().toString(36).slice(2,8)+(Math.random()*90+10|0);u.pw=hs(np);save();$('#mail').innerHTML=`<div class="glass" style="font-size:14px"><b>✉️ Correo enviado a ${e}</b><br>Asunto: Tu nueva contraseña CodeKids<br>Contraseña temporal: <b>${np}</b><br><i>(Demo: el envío real requiere un servidor de correo.)</i></div>`}else $('#mail').innerHTML='<p>Si el correo está registrado, recibirás tu nueva contraseña.</p>';return er('')}
  const p=$('#p').value;
  if(m=='log'){const u=db.users[e];if(!u||u.pw!=hs(p))return er('Correo o contraseña incorrectos');me=e;done()}
  else{const n=$('#n').value.trim().replace(/\s+/g,' ');if(n.length<2)return er('El nombre no puede estar vacío ni solo espacios');if(!/^(?=.*\d).{6,}$/.test(p)||/^\s+$/.test(p))return er('La contraseña necesita mínimo 6 caracteres y al menos un número');if(db.users[e])return er('Ese correo ya está registrado');db.users[e]={name:n,pw:hs(p),prog:{},certs:[]};me=e;done()}};
 function done(){save();$('#am').classList.remove('on');nav();courses();boom()}}
