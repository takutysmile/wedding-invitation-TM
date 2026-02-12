window.addEventListener("DOMContentLoaded", () => {

  // ========================
  // フェードアニメ
  // ========================
  const fades = document.querySelectorAll(".fade");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.15
  });

  fades.forEach(el => observer.observe(el));


  // ========================
  // ボタン安全処理（null防止）
  // ========================
  const btn = document.querySelector(".button");

  if (btn) {
    btn.onclick = () => {
      console.log("button clicked");
    };
  }

});
