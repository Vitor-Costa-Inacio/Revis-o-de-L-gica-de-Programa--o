function ordenarDecrescente() {
    var numeros = [];
    
    numeros[1] = parseFloat(prompt("Informe um número:"))
    numeros[2] = parseFloat(prompt("Informe um número:"))
    numeros[3] = parseFloat(prompt("Informe um número:"))
    numeros[4] = parseFloat(prompt("Informe um número:"))
    
    numeros.sort((a,b) => b - a);

    alert("Ordem decrescente: " + numeros)
}