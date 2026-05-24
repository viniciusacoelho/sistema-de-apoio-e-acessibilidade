const menuBtn = document.getElementById("menuButton");
const sidebar = document.getElementById("sidebar");

// abrir/fechar sidebar
menuBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // impede fechar imediatamente
    sidebar.classList.toggle("active");
});

// impedir que clique dentro da sidebar feche ela
sidebar.addEventListener("click", (e) => {
    e.stopPropagation();
});

// fechar ao clicar fora
document.addEventListener("click", () => {
    sidebar.classList.remove("active");
});