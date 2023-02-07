function pulaLinha() {
    document.write("<br><br>");
}

function mostra (frase) {
    document.write(frase);
    pulaLinha();
}

let numero = parseInt(prompt("Digite um numero:"));


/*
    let multiplicador = 1; 

    while(multiplicador <= 10) {
    mostra(numero * multiplicador);
    multiplicador = multiplicador + 1;
}

*/

for(let multiplicador = 1; multiplicador <= 10; multiplicador++) {
    mostra(numero * multiplicador);

}