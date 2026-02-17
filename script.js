// Exemplo: Alerta ao clicar em um benefício parq desconto, carinho e entrega
document.querySelectorAll('.benefit-item').forEach(item => {
    item.addEventListener('click', () => {
        const texto = item.querySelector('p').innerText;
        alert('Você selecionou: ' + texto);
    });
});