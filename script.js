// ==============================
// スクロールフェードアニメーション
// ==============================
window.addEventListener("DOMContentLoaded", () => {

  const fades = document.querySelectorAll(".fade");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: "0px 0px -80px 0px"
  });

  fades.forEach(el => observer.observe(el));
});


// ==============================
// スムーススクロール（アンカー用）
// ==============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});
