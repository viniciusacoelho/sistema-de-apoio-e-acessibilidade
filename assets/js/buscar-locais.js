const searchInput = document.getElementById('searchInput');

const container = document.querySelector('.container-notificacoes');

// salva ordem original
const originalItems = Array.from(
    document.querySelectorAll('.card-link')
);

searchInput.addEventListener('input', () => {

    const value = searchInput.value.toLowerCase().trim();

    // SE O INPUT ESTIVER VAZIO
    if (value === '') {

        // mostra todos
        originalItems.forEach(item => {

            item.style.display = 'block';

            // volta para ordem original
            container.appendChild(item);

        });

        return;
    }

    // filtra
    const filtered = originalItems.filter(item => {
        return item.innerText.toLowerCase().includes(value);
    });

    // ordena alfabeticamente
    filtered.sort((a, b) => {

        const nomeA = a.querySelector('h3').innerText.toLowerCase();

        const nomeB = b.querySelector('h3').innerText.toLowerCase();

        return nomeA.localeCompare(
            nomeB,
            'pt-BR',
            { sensitivity: 'base' }
        );

    });

    // esconde todos
    originalItems.forEach(item => {
        item.style.display = 'none';
    });

    // mostra os filtrados
    filtered.forEach(item => {

        item.style.display = 'block';

        container.appendChild(item);

    });

});