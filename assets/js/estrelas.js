document.querySelectorAll('.star-rating input').forEach(star => {
    star.addEventListener('change', (e) => {
        console.log('Avaliação selecionada: ' + e.target.value);
    });
});