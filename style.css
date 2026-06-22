/* ------------------- Reset & tipografie ------------------- */
*{margin:0;padding:0;box-sizing:border-box;font-family:Arial,Helvetica,sans-serif;}
body{background:#f0f8ff;color:#212121;text-align:center;padding:2rem;}

/* ------------------- Stadii (stage) ------------------- */
.stage{
  max-width:600px;margin:0 auto;
  animation:fadeIn .6s ease-out;
}
.hidden{display:none;}

/* ------------------- Intro ------------------- */
#intro h1{font-size:2.4rem;color:#004080;margin-bottom:.5rem;}
#intro p{font-size:1.1rem;margin-bottom:2rem;color:#003366;}
.balloon{
  width:90px;height:130px;
  margin:0 auto;
  background:url('data:image/svg+xml;utf8,\
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">\
<path fill="%23ff4081" d="M32 2C17 2 5 14 5 29c0 12 9 22 20 24v8h14v-8c11-2 20-12 20-24C59 14 47 2 32 2z"/>\
</svg>') no-repeat center/contain;
  cursor:pointer;
  animation:float 3s infinite ease-in-out;
}

/* ------------------- Quiz ------------------- */
.question-box{
  background:#e6f7ff;
  padding:2rem;
  border-radius:12px;
  animation:pop .6s ease;
}
.question{
  font-size:1.6rem;color:#003366;margin-bottom:1.5rem;
}
.options button{
  background:#0066cc;color:#fff;border:none;
  padding:.8rem 1.4rem;margin:.4rem;
  font-size:1rem;border-radius:8px;
  cursor:pointer;transition:transform .2s;
}
.options button:hover{transform:translateY(-4px);}

/* Progress bar (numeric) */
.progress{
  margin-top:1rem;font-size:.9rem;color:#555;
}

/* ------------------- Final ------------------- */
#final h2{font-size:3rem;margin-bottom:.5rem;}
#final p{font-size:1.2rem;margin:1rem 0;}
.choices{display:flex;justify-content:center;gap:2rem;margin-top:1rem;}
.choice{
  background:#0066cc;color:#fff;border:none;
  padding:1rem 2rem;font-size:1.2rem;
  border-radius:12px;cursor:pointer;transition:transform .2s;
}
.choice:hover{background:#004c99;transform:translateY(-4px);}
#finalMsg{font-size:1.4rem;margin-top:1.5rem;color:#003366;}

/* ------------------- Animaţii ------------------- */
@keyframes fadeIn{
  from{opacity:0;transform:translateY(20px);}
  to{opacity:1;transform:none;}
}
@keyframes pop{
  0%{transform:scale(.5);opacity:0;}
  80%{transform:scale(1.1);}
  100%{transform:scale(1);opacity:1;}
}
@keyframes float{
  0%,100%{transform:translateY(0);}
  50%{transform:translateY(-20px);}
}
@keyframes shake{
  0%{transform:translateX(0);}
  25%{transform:translateX(-5px);}
  50%{transform:translateX(5px);}
  75%{transform:translateX(-5px);}
  100%{transform:translateX(0);}
}

/* ------------------- Falling hearts ------------------- */
@keyframes fall{
  0%   {transform: translateY(-50px) rotate(0deg); opacity:0;}
  10%  {opacity:1;}
  100% {transform: translateY(800px) rotate(360deg); opacity:0;}
}
.heart{
  position:fixed;width:30px;height:30px;
  background:url('data:image/svg+xml;utf8,\
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">\
<path fill="%23ff4081" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5\
 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81\
 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55\
 11.54L12 21.35z"/>\
</svg>') no-repeat center/contain;
  pointer-events:none;
  animation:fall 2s linear forwards;
}
