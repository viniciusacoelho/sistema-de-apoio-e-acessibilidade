const botaoExcluir = document.getElementById('botao-excluir-inclusao-detalhe');
const modal = document.getElementById('modalExcluir');

const cancelar = document.getElementById('cancelarExcluir');
const confirmar = document.getElementById('confirmarExcluir');

const form = document.getElementById('formExcluir');

botaoExcluir.addEventListener('click', () => {
    modal.classList.add('ativo');
});

cancelar.addEventListener('click', () => {
    modal.classList.remove('ativo');
});

confirmar.addEventListener('click', () => {
    form.submit();
});