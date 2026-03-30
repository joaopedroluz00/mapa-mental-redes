document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicializa os ícones do Lucide
    lucide.createIcons();

    // 2. Gerador de Estrelas (Consertando o bug do fundo vazio)
    const starsContainer = document.getElementById('stars-container');
    const numberOfStars = 150;

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Tamanho aleatório
        const size = Math.random() * 3 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Posição aleatória na tela
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        
        // Duração e delay da animação aleatórios para efeito orgânico
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        
        starsContainer.appendChild(star);
    }

    // 3. Efeito de Scroll Reveal (Aparecer ao rolar a página)
    const cards = document.querySelectorAll('.card');
    
    const observerOptions = {
        threshold: 0.1, // Dispara quando 10% do card estiver visível
        rootMargin: "0px 0px -50px 0px"
    };

    const cardObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // Para de observar após aparecer
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        cardObserver.observe(card);
    });
});