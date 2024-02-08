let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function verificarConsole() {
    console.log('O botão foi clicado');
}
 function escreverMensagem() {
    alert('eu amo JS');
 }
 
 function nomeCidade() {
    let cidade = prompt('Escreva o nome de uma cidade do Brasil:');
    alert(`Estive em ${cidade} e lembrei de você`);
}

function somaNumeros() {
    let valor1 = parseInt(prompt('Digite o Primeiro Valor:'));
    let valor2 = parseInt(prompt('Digite o Segundo Valor:'));
    let soma = valor1 + valor2;
    alert(`A soma de ${valor1} + ${valor2} é igual ${soma}`);
}

