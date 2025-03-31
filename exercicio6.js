function verificarLetra() {
    const vogal = ["a", "e", "i", "o", "u"];
    letra = prompt("Digite uma letra.");

    for (i = 0; i < vogal.length; i++) {
        if (letra == vogal[i]) {
            alert("A letra é uma vogal");
            break;
        }
        
        alert("A letra é consoante");
        break;
    };
}
