// Botão "Voltar ao topo" com rolagem suave
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Adicionar pequeno efeito de destaque suave nos cards (opcional)
const cards = document.querySelectorAll('.feature-card, .tech-item, .img-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transition = 'transform 0.2s, box-shadow 0.2s';
    });
});

// Footer com ano dinâmico
const ano = new Date().getFullYear();
const footerCredits = document.querySelector('.footer-credits p:last-child');
if (footerCredits) {
    footerCredits.innerHTML = `<i class="fas fa-copyright"></i> ${ano} - Projeto educacional | Agro Forte, futuro sustentável`;
}

// console de boas-vindas sutil
console.log('🌱 Site Agricultura de Precisão | Tecnologia e Conservação do solo');