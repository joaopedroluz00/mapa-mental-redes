// Exemplo: Mostrar uma mensagem quando o usuário clica em uma seção
document.querySelectorAll('.section').forEach(item => {
    item.addEventListener('click', () => {
        console.log("Você clicou em uma seção do mapa mental!");
    });
});