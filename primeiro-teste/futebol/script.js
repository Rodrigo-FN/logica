function pulaLinha() {
    document.write("<br><br>");
}

function mostra (frase) {
    document.write(frase);
    pulaLinha();
}

let vitorias = parseInt(prompt("Entre com o número de vitórias"));
let empates = parseInt(prompt("Entre com o número de empates"));


let pontos = vitorias * 3 + empates;
let pontosTemporadaPassada = 70

mostra(`Os pontos do seu time é ${pontos}`);

if (pontos > pontosTemporadaPassada) {
    mostra("Seu time está melhor do que o ano passado.");
}else if (pontos == pontosTemporadaPassada) {
    mostra("Seu time está igual ao ano passado.");
}else {
    mostra("Seu time está pior do que o ano passado.");
}

mostra("Fim!")






