/* ------------------- Date quiz ------------------- */
const quizData = [
  {
    q: "Care a fost primul nostru film împreună?",
    a: ["Titanic", "Inception", "La La Land"],
    correct: 2, // indexul răspunsului corect (0‑based)
    feedback: "Acel film a fost începutul poveștii noastre! ❤️"
  },
  {
    q: "Unde am avut cea mai amuzantă întâlnire?",
    a: ["La cafenea", "În parc", "La cinema"],
    correct: 0,
    feedback: "Cafeneaua a fost locul în care am râs fără oprire."
  },
  {
    q: "Ce culoare îți aduce zâmbetul?",
    a: ["Roșu", "Verde", "Albastru"],
    correct: 2,
    feedback: "Albastrul e cu adevărat culoarea noastră specială."
  }
];

/* ------------------- DOM refs ------------------- */
const introSec    = document.getElementById('intro');
const balloon     = document.getElementById('balloon');
const quizSec     = document.getElementById('quiz');
const questionTx  = document.getElementById('questionText');
const optionList  = document.getElementById('optionList');
const stepSpan    = document.getElementById('step');
const totalSpan   = document.getElementById('total');
const finalSec    = document.getElementById('final');
const choiceBtns  = document.querySelectorAll('.choice');
const finalMsg    = document.getElementById('finalMsg');

/* ------------------- State ------------------- */
let current = 0;               // indexul întrebării curente

/* ------------------- Inițializare ------------------- */
totalSpan.textContent = quizData.length;

/* ------------------- Funcții UI ------------------- */
function spawnHearts(num = 12) {
  for (let i = 0; i < num; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.animationDuration = (1.5 + Math.random()) + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 2500);
  }
}

/* Afișează întrebarea curentă */
function renderQuestion() {
  const data = quizData[current];
  questionTx.textContent = data.q;
  optionList.innerHTML = '';
  data.a.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.dataset.idx = i;
    btn.className = 'option';
    optionList.appendChild(btn);
  });
  stepSpan.textContent = current + 1;
}

/* ------------------- Evenimente ------------------- */
balloon.addEventListener('click', () => {
  // animație pop → inimi
  spawnHearts();
  // (opțional) sunet pop‑heart.wav
  // const s = new Audio('assets/sounds/pop-heart.wav');
  // s.play();

  introSec.classList.add('hidden');
  quizSec.classList.remove('hidden');
  renderQuestion();
});

optionList.addEventListener('click', e => {
  if (!e.target.matches('button')) return;
  const chosen = Number(e.target.dataset.idx);
  const data   = quizData[current];

  if (chosen === data.correct) {
    // răspuns corect → inimioare + feedback
    spawnHearts(8);
    alert(data.feedback);
    current++;
    if (current < quizData.length) {
      renderQuestion();                // următoarea întrebare
    } else {
      // quiz terminat → final
      quizSec.classList.add('hidden');
      finalSec.classList.remove('hidden');
    }
  } else {
    // răspuns greșit → shake + mesaj scurt
    e.target.classList.add('shake');
    e.target.style.animation = 'shake .4s';
    setTimeout(() => {
      e.target.style.animation = '';
    }, 400);
    alert('Hai să încercăm din nou!'); // poţi schimba mesajul
  }
});

/* Opţiunile finale */
choiceBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const ans = btn.dataset.answer;
    finalMsg.textContent = `Super! Ne vedem la ${ans}!`;
    finalMsg.classList.remove('hidden');
    finalMsg.classList.add('fadeIn');
    // confetti (canvas‑confetti prin CDN)
    import('https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js')
      .then(mod => {
        const confetti = mod.default;
        confetti({particleCount: 80, spread: 70});
      });
    // dezactivează butoanele
    choiceBtns.forEach(b => b.disabled = true);
  });
});
