document.addEventListener('keydown', function(event) {
    const searchInput = document.getElementById('searchInput');

    if (event.key === '/' || event.code === 'Slash') {
        event.preventDefault(); 
        searchInput.focus();
    }
});

const search = document.querySelector('.search');
const cards = document.querySelectorAll('.card-inclusao');
const cards = document.querySelectorAll('.card-notificacao');

search.addEventListener('input', () => {
    const value = search.value.toLowerCase();

    cards.forEach(card => {
        const text = card.innerText.toLowerCase();
        card.style.display = text.includes(value) ? 'block' : 'none';
    });
});

function buscar() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.card-inclusao');
    const cards = document.querySelectorAll('.card-notificacao');

    cards.forEach(card => {
        const texto = card.innerText.toLowerCase();

        if (texto.includes(input)) {
            card.parentElement.style.display = "block";
        } else {
            card.parentElement.style.display = "none";
        }
    });
}