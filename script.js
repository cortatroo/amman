// MENU MOBILE
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");
});

// FECHAR MENU AO CLICAR
document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("show");
  });
});

// ANIMAÇÃO SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const trigger = window.innerHeight * 0.88;

  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < trigger) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// HEADER SHADOW AO ROLAR
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");

  if(window.scrollY > 10){
    header.style.boxShadow = "0 8px 20px rgba(0,0,0,.06)";
  }else{
    header.style.boxShadow = "none";
  }
});