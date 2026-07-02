document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.flashcard');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });

    // Pressione a tecla 'R' para resetar todos os cards
    document.addEventListener('keydown', (e) => {
        if (e.key.toLowerCase() === 'r') {
            cards.forEach(card => {
                card.classList.remove('flipped');
            });
        }
    });
});
