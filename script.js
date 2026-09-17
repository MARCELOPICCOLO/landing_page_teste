document.getElementById("year").textContent = new Date().getFullYear();

// Pequena melhoria de acessibilidade: permite ativar links com teclado normalmente
// e adiciona uma classe ao header quando a página é rolada.
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  header.style.boxShadow = window.scrollY > 8
    ? "0 8px 30px rgba(55, 33, 16, .06)"
    : "none";
}, { passive: true });
