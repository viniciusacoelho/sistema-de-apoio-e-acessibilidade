const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

/* TOGGLE (abre e fecha no mesmo botão) */
menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

