function pulaLinha() {
    document.write("<br><br>");
}

function mostra (frase) {
    document.write(frase);
    pulaLinha();
}

let numeroPensado = Math.random() * 10;
let tentativas = 1;
while( tentativas <= 3 ) {

    let chute = parseInt(prompt("Chute um número de 0 a 10:"));

    if(chute == numeroPensado.toFixed(0)){
        mostra(`Parabéns você ACERTOU, o número pensado era ${numeroPensado}`);
        break;
        
    }else {
        mostra("Você ERROU!");
    }

    tentativas++;
}

