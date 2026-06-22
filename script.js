/* ------------------- Config ------------------- */
const nickname = "Printesa";
const photos = [
  "assets/photos/1.jpg",
  "assets/photos/2.jpg",
  "assets/photos/3.jpg",
  "assets/photos/4.jpg"
]; // adaugă/șterge după nevoie

/* ------------------- DOM refs ------------------- */
const nickEl          = document.getElementById("nick");
const startBtn        = document.getElementById("startBtn");
const gallerySec      = document.getElementById("gallery");
const closeGalleryBtn = document.getElementById("closeGallery");
const loveBoxSec      = document.getElementById("loveBox");
const answerBtns      = document.querySelectorAll(".answer");
const finalSec        = document.getElementById("finalMsg");
const choiceBtns      = document.querySelectorAll(".choice");
const answerMsg       = document.getElementById("answerMsg");

/* ------------------- Init ------------------- */
nickEl.textContent = nickname;

/* ------------------- Funcții ------------------- */
function showGallery() {
  const container = gallerySec.querySelector(".photos");
  container.innerHTML = "";
  photos.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    container.appendChild(img);
  });
  gallerySec.classList.remove("hidden");
  gallerySec.classList.add("fade-in");
}

/* Crearea inimioarelor când se apasă “Da” */
function spawnHearts() {
  const count = 12; // câte inimioare apar simultan
  for (let i = 0; i < count; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.animationDuration = 1.5 + Math.random() * 1 + "s";
    document.body.appendChild(heart);
    // elimină elementul după animație
    setTimeout(() => heart.remove(), 2500);
  }
}

/* ------------------- Evenimente ------------------- */
startBtn.addEventListener("click", () => {
  showGallery();
});

closeGalleryBtn.addEventListener("click", () => {
  gallerySec.classList.add("hidden");
  // trecem la cutia de iubire
  setTimeout(() => {
    loveBoxSec.classList.remove("hidden");
    loveBoxSec.classList.add("fade-in");
  }, 300);
});

/* Răspunsurile “Da” / “Nu” */
answerBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const val = btn.dataset.value;
    if (val === "da") {
      // arată inimioare și trece la final
      spawnHearts();
      loveBoxSec.classList.add("hidden");
      setTimeout(() => {
        finalSec.classList.remove("hidden");
        finalSec.classList.add("fade-in");
      }, 800);
    } else {
      // “Nu” – cutia se blochează (fără mișcare)
      btn.disabled = true;
      btn.style.opacity = "0.4";
      // poți adăuga un mic „shake” dacă vrei
      loveBoxSec.querySelector(".box").style.animation = "shake 0.5s";
      setTimeout(() => loveBoxSec.querySelector(".box").style.animation = "", 500);
    }
  });
});

/* Opțiunile finale – Mare / Piscină */
choiceBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const ans = btn.dataset.answer;
    answerMsg.textContent = `Super! Ne vedem la ${ans}!`;
    answerMsg.classList.remove("hidden");
    answerMsg.classList.add("fade-in");
    // opțional: redă un sunet de „celebrare”
    // const snd = new Audio('assets/sounds/heart.wav');
    // snd.play();
    choiceBtns.forEach(b => b.disabled = true);
  });
});
