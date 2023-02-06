function pulaLinha() {
    document.write("<br><br>");
}

function mostra (frase) {
    document.write(frase);
    pulaLinha();
}

let numeroPensado = Math.random() * 10;
let chute = parseInt(prompt("Chute um número de 0 a 10:"));

if(chute == numeroPensado.toFixed(0)){
    mostra(`Parabéns você acertou!`);
}else {
    mostra("Que pena você errou! O número pensado era " + numeroPensado.toFixed(0));
}