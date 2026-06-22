/* ------------------- Config ------------------- */
const nickname = "Printesa";

/* ------------------- DOM refs ------------------- */
const nickEl          = document.getElementById("nick");
const startBtn        = document.getElementById("startBtn");
const animationSec    = document.getElementById("animation");
const balloon         = document.getElementById("balloon");
const loveBoxSec      = document.getElementById("loveBox");
const answerBtns      = document.querySelectorAll(".answer");
const finalSec        = document.getElementById("finalMsg");
const choiceBtns      = document.querySelectorAll(".choice");
const answerMsg       = document.getElementById("answerMsg");

/* ------------------- Inițializare ------------------- */
nickEl.textContent = nickname;

/* ------------------- Funcții ------------------- */
function spawnHearts() {
  const total = 15;
  for (let i = 0; i < total; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.animationDuration = 1.5 + Math.random() * 1 + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 2500);
  }
}

/* ------------------- Evenimente ------------------- */
startBtn.addEventListener("click", () => {
  // arată balonul interactiv
  animationSec.classList.remove("hidden");
  animationSec.classList.add("fade-in");
});

/* Balonul „pop‑ează” când este apăsat */
balloon.addEventListener("click", () => {
  // efect de pop → inimi
  spawnHearts();
  // opțional: sunet dacă ai assets/sounds/pop‑heart.wav
  // const snd = new Audio('assets/sounds/pop-heart.wav');
  // snd.play();
  // trece la întrebarea de iubire
  animationSec.classList.add("hidden");
  setTimeout(() => {
    loveBoxSec.classList.remove("hidden");
    loveBoxSec.classList.add("fade-in");
  }, 400);
});

/* Răspunsurile “Da” și “Nu” */
answerBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const val = btn.dataset.value;
    if (val === "da") {
      spawnHearts();                      // inimi suplimentare
      loveBoxSec.classList.add("hidden");
      setTimeout(() => {
        finalSec.classList.remove("hidden");
        finalSec.classList.add("fade-in");
      }, 600);
    } else {
      // “Nu” – butonul devine inactiv, cutia nu se mișcă
      btn.disabled = true;
      btn.style.opacity = "0.4";
      // mică vibrație pentru efect „shake”
      loveBoxSec.querySelector(".box").style.animation = "shake 0.4s";
      setTimeout(() => loveBoxSec.querySelector(".box").style.animation = "", 400);
    }
  });
});

/* Opţiuni finale – Mare / Piscină */
choiceBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const ans = btn.dataset.answer;
    answerMsg.textContent = `Super! Ne vedem la ${ans}!`;
    answerMsg.classList.remove("hidden");
    answerMsg.classList.add("fade-in");
    // dezactivează ambele butoane
    choiceBtns.forEach(b => b.disabled = true);
  });
});
