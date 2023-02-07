function pulaLinha() {
    document.write("<br>");
}

function mostra (frase) {
    document.write(frase);
    pulaLinha();
}

for (linha = 1; linha <= 10; linha++) {

    for(coluna = 1; coluna <= 10; coluna++) {
        document.write("*");
    }
    pulaLinha();
    
}