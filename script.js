// Loading + Nhạc
window.addEventListener("load", () => {
  const loadingEl = document.getElementById("loading");
  loadingEl.style.opacity = "0";
  setTimeout(() => (loadingEl.style.display = "none"), 1000);

  const audio = document.getElementById("bgMusic");
  audio.play().catch(e => console.log("Error:", e));
});


// ===== VŨ TRỤ HẠT SAO =====
const canvas = document.getElementById("universe");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 800; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5,
    speed: Math.random() * 0.5
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "white";

  particles.forEach(p => {
    p.y -= p.speed;
    if (p.y < 0) p.y = canvas.height;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fill();
  });

  requestAnimationFrame(animate);
}

animate();


// ===== LIGHTBOX =====
function openLightbox(src) {
  const lightboxImage = document.getElementById("lightboxImage");
  const lightboxModal = document.getElementById("lightboxModal");

  lightboxImage.src = src;
  lightboxModal.classList.add("active");
}

function closeLightbox() {
  const lightboxModal = document.getElementById("lightboxModal");
  lightboxModal.classList.remove("active");
}

document.getElementById("lightboxClose")
  .addEventListener("click", closeLightbox);

document.getElementById("lightboxModal")
  .addEventListener("click", (e) => {
    if (e.target.id === "lightboxModal") closeLightbox();
  });
