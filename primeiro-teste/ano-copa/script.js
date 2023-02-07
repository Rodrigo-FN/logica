function pulaLinha() {
    document.write("<br><br>");
}

function mostra (frase) {
    document.write(frase);
    pulaLinha();
}

let limite = parseInt(prompt("Entre com a data limite:"))
let anoCopa = 1930;

while (anoCopa < limite ) {
    mostra(`Teve copa em ${anoCopa}`);
    anoCopa = anoCopa + 4;
}

mostra(`A última copa que teve até o ano de ${limite}, foi em ${anoCopa - 4}.`)

