document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário

    const campoA = parseFloat(document.getElementById('campo1').value);
    const campoB = parseFloat(document.getElementById('campo2').value);
    const mensagem = document.getElementById('mensagem');

    if (campoB > campoA) {
        mensagem.textContent = 'Formulário válido: B é maior que A.';
        mensagem.style.color = 'green';
    } else {
        mensagem.textContent = 'Formulário inválido: B deve ser maior que A.';
        mensagem.style.color = 'red';
    }
});
