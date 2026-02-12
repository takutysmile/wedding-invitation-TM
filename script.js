document.addEventListener("DOMContentLoaded", () => {

  /* スクロール reveal */
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add("active");
      }
    });
  });

  reveals.forEach(r=>observer.observe(r));


  /* 秒までカウントダウン */
  const countdown = document.getElementById("countdown");
  const wedding = new Date("2026-05-01T10:00:00");

  function update(){
    const diff = wedding - new Date();

    const d = Math.floor(diff/86400000);
    const h = Math.floor(diff/3600000)%24;
    const m = Math.floor(diff/60000)%60;
    const s = Math.floor(diff/1000)%60;

    countdown.textContent =
      `${d}日 ${h}時間 ${m}分 ${s}秒`;
  }

  setInterval(update,1000);
  update();


  /* パララックス */
  const bg = document.querySelector(".parallax");

  window.addEventListener("scroll", ()=>{
    bg.style.transform = `translateY(${window.scrollY * 0.3}px)`;
  });


  /* ランダムタイポ */
  document.querySelectorAll(".floating-words span").forEach(w=>{
    w.style.top = Math.random()*100+"vh";
    w.style.left = Math.random()*100+"vw";
    w.style.transform = `rotate(${Math.random()*360}deg)`;
  });

});
