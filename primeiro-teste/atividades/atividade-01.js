function pulaLinha() {
    document.write("<br><br>");
}

function mostra (frase) {
    document.write(frase);
    pulaLinha();
}


let i = 20;

while(i > 0) {
    mostra(i);
    i = i - 1;
}

mostra(i)