const searchInput = document.getElementById('searchInput');
const neighborhoodSelect = document.getElementById('neighborhood');
const dateFilter = document.getElementById('dateFilter');
const ratingFilter = document.getElementById('ratingFilter');

const contador = document.querySelector('.span-contador-inclusoes, .span-contador-notificacoes');
const container = document.querySelector('.container-notificacoes');

// salva ordem original
const originalItems = Array.from(document.querySelectorAll('.card-link'));

function filtrarListagem() {
    const searchValue = searchInput.value.toLowerCase().trim();
    const selectedNeighborhood = neighborhoodSelect.value.toLowerCase();
    const selectedDate = dateFilter.value;
    const selectedRating = ratingFilter.value;

    // mostra todos inicialmente
    originalItems.forEach(item => {
        item.style.display = 'none';
    });

    // filtra tudo junto
    const filtered = originalItems.filter(item => {

        const text = item.innerText.toLowerCase();
        const card = item.querySelector('.card-inclusao, .card-notificacao');
        const bairro = card.dataset.bairro.toLowerCase();
        const data = card.dataset.data;
        const avaliacao = Number(card.dataset.avaliacao);

        const buscaValida = text.includes(searchValue);
        const bairroValido = selectedNeighborhood === '' || bairro === selectedNeighborhood;
        const dataValida = selectedDate === '' || data === selectedDate;
        const avaliacaoValida = selectedRating === '' || avaliacao === Number(selectedRating);

        return buscaValida && bairroValido && dataValida && avaliacaoValida;

    });

    // ordena alfabeticamente
    filtered.sort((a, b) => {
        const nomeA = a.querySelector('h3').innerText.toLowerCase();
        const nomeB = b.querySelector('h3').innerText.toLowerCase();

        return nomeA.localeCompare(nomeB, 'pt-BR',{ sensitivity: 'base' });

    });

    // mostra filtrados
    filtered.forEach(item => {
        item.style.display = 'block';
        container.appendChild(item);

    });

    // atualiza contador
    contador.textContent = filtered.length;

}

searchInput.addEventListener('input', filtrarListagem);
neighborhoodSelect.addEventListener('change', filtrarListagem);
dateFilter.addEventListener('input', filtrarListagem);
ratingFilter.addEventListener('change', filtrarListagem);