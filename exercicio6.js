function verificarLetra() {
    const letra = prompt("Digite uma letra:").toLowerCase();
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    
    if (vogais.includes(letra)) {
        console.log("É uma vogal");
    } else if (letra >= 'a' && letra <= 'z') {
        console.log("É uma consoante");
    } else {
        console.log("Não é uma letra válida");
    }
}
