let jogoAlugados = 0;

function alterarStatus(id){
    let jogoClicado = document.getElementById(`game-${id}`);
    let imagem = jogoClicado.querySelector('.dashboard__item__img');
    let botao = jogoClicado.querySelector('.dashboard__item__button');
    let nomeJogo = jogoClicado.querySelector('.dashboard__item__name');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
            jogosAlugados--;
        }
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        jogoAlugados++
    }

    contarEExibirJogosAlugados();
}

function contarEExibirJogosAlugados(){
    console.log(`Número de jogos alugados: ${jogoAlugados}`);
}

//???
document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});

function palindromo(){
    var palavra = "Pedro";
    var letras = palavra.split("");
    var latrasInvertidas = letras.reverse();
    var palavraInvertida = latrasInvertidas.join("");
    if(palavra == palavraInvertida){
        console.log("É palíndromo.");
    } else {
        console.log("Não é palíndromo.");
    }
}

function ordenarNumeros(a, b, c) {
    const numerosOrdenados = [a, b, c].sort((x, y) => x - y);
    console.log(`Números ordenados: ${numerosOrdenados.join(', ')}`);
}