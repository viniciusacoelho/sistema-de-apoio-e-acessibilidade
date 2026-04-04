const container = document.querySelector(".circulos");
const btnDir = document.querySelector(".direita");
const btnEsq = document.querySelector(".esquerda");

let animando = false;

function atualizarAtivo() {
    const itens = document.querySelectorAll(".circulo");
    itens.forEach(i => i.classList.remove("ativo"));

    // sempre o do meio (índice 1)
    itens[1].classList.add("ativo");
}

// 👉 DIREITA (vai pra frente)
// < 3 - 1 - 2 > → < 2 - 3 - 1 >
btnDir.addEventListener("click", () => {
    if (animando) return;
    animando = true;

    const primeiro = container.firstElementChild;

    // animação: meio diminui
    atualizarAtivo();

    setTimeout(() => {
        container.appendChild(primeiro);
        atualizarAtivo();
        animando = false;
    }, 200);
});

// 👉 ESQUERDA (volta)
// < 3 - 1 - 2 > → < 1 - 2 - 3 >
btnEsq.addEventListener("click", () => {
    if (animando) return;
    animando = true;

    const ultimo = container.lastElementChild;

    setTimeout(() => {
        container.insertBefore(ultimo, container.firstElementChild);
        atualizarAtivo();
        animando = false;
    }, 200);
});

// inicia correto
atualizarAtivo();