const container = document.querySelector(".circulos");
const btnDir = document.querySelector(".direita");
const btnEsq = document.querySelector(".esquerda");

let animando = false;

function atualizarAtivo() {
    const itens = document.querySelectorAll(".circulo");
    itens.forEach(i => i.classList.remove("ativo"));
    itens[1].classList.add("ativo");
}

// 👉 DIREITA
btnDir.addEventListener("click", () => {
    if (animando) return;
    animando = true;

    const primeiro = container.firstElementChild;

    // 👉 move o primeiro pro final ANTES da animação
    container.appendChild(primeiro);

    // posiciona “fora da tela” à direita
    container.style.transition = "none";
    container.style.transform = "translateX(80px)";

    setTimeout(() => {
        // anima voltando pro centro
        container.style.transition = "transform 0.4s ease";
        container.style.transform = "translateX(0)";
        atualizarAtivo();

        setTimeout(() => {
            animando = false;
        }, 400);
    }, 50);
});

// 👉 ESQUERDA
btnEsq.addEventListener("click", () => {
    if (animando) return;
    animando = true;

    const ultimo = container.lastElementChild;

    container.insertBefore(ultimo, container.firstElementChild);
    container.style.transition = "none";
    container.style.transform = "translateX(-80px)";

    setTimeout(() => {
        container.style.transition = "transform 0.4s ease";
        container.style.transform = "translateX(0)";
        atualizarAtivo();

        setTimeout(() => {
            animando = false;
        }, 400);
    }, 50);
});

// inicia correto
atualizarAtivo();