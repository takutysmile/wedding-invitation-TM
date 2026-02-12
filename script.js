document.addEventListener("DOMContentLoaded", () => {

  /* ======================
     スクロールアニメーション
  ====================== */
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add("active");
      }
    });
  });

  reveals.forEach(r => observer.observe(r));


  /* ======================
     カウントダウン
  ====================== */
  const countdown = document.getElementById("countdown");
  const weddingDate = new Date("2026-05-01");

  function updateCountdown(){
    const now = new Date();
    const diff = weddingDate - now;

    const days = Math.floor(diff / (1000*60*60*24));
    countdown.textContent = `Weddingまで あと ${days} 日`;
  }

  updateCountdown();
  setInterval(updateCountdown,1000);


  /* ======================
     ランダムタイポ配置
  ====================== */
  const words = document.querySelectorAll(".floating-words span");

  words.forEach(w=>{
    w.style.top = Math.random()*100 + "vh";
    w.style.left = Math.random()*100 + "vw";
    w.style.transform = `rotate(${Math.random()*360}deg)`;
  });

});
