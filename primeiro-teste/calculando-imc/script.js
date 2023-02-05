function pulaLinha() {
    document.write("<br><br>");
}

function mostra (frase) {
    document.write(frase);
    pulaLinha();
}

let peso = prompt('Informe seu peso:')
let altura = prompt("Informe sua altura:")

let pesoPerson = peso;
let alturaPeson = altura;
let pesoAbaixo = 18.5
let pesonormal = 24.9
let pesoExcesso = 29.9
let pesoObesidade1 = 34.9
let pesoObesidade2 = 39.9
let pesoObesidade3 = 40


let imc = pesoPerson / (alturaPeson * alturaPeson);


if (imc < pesoAbaixo) {
    mostra(imc.toFixed(2) + " Abaixo do peso normal")
}else if (imc <= pesonormal ) {
    mostra(imc.toFixed(2) + " Peso Normal")
}else if (imc < pesoExcesso) {
    mostra(imc.toFixed(2) + " Excesso de peso")
} else if (imc < pesoObesidade1) {
    mostra(imc.toFixed(2) + " Obesidade classe 1")
}else if (imc < pesoObesidade2) {
    mostra(imc.toFixed(2) + " Obesidade classe 2")
}else if (imc > pesoObesidade3){
    mostra(imc.toFixed(2) + " Obesidade classe 3")
}