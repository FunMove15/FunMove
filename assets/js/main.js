
// Mensagem de carregamento
console.log("FunMove site loaded");

// ------------------------------
// MENU MOBILE
// ------------------------------
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// ------------------------------
// SCROLL SUAVE
// ------------------------------
document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", e => {
    if (link.hash) {
      e.preventDefault();
      const target = document.querySelector(link.hash);
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ------------------------------
// FAQ INTERATIVO
// ------------------------------
document.querySelectorAll(".faq-item").forEach(item => {
  item.addEventListener("click", () => {
    item.classList.toggle("open");
  });
});

// ------------------------------
// BOTÃO VOLTAR AO TOPO
// ------------------------------
const backToTop = document.createElement("div");
backToTop.innerText = "↑";
backToTop.classList.add("back-to-top");
document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ------------------------------
// ANIMAÇÕES AO FAZER SCROLL
// ------------------------------
const animatedElements = document.querySelectorAll(".faq-item, .hero, footer");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

animatedElements.forEach(el => observer.observe(el));
