function pulaLinha() {
    document.write("<br><br>");
}

function mostra (frase) {
    document.write(frase);
    pulaLinha();
}

let totalFamiliares = parseInt(prompt("Quantidade de Familiares?"));

let numero = 1

var totalIdades = 0;

while(numero <= totalFamiliares) {
    var idadeFamiliar = parseInt(prompt("Informe idade do familiar:"));
    totalIdades = totalIdades + idadeFamiliar;
    numero++;
}

let mediaIdaes = totalIdades / totalFamiliares;

mostra(`A média das idades dos familiares é ${mediaIdaes}.`);


