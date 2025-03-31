function transformarParImpar() {
    const numero = parseInt(prompt("Digite um número inteiro:"));
    const resultado = numero % 2 === 0 ? numero + 1 : numero - 1;
    
    console.log(`Número transformado: ${resultado}`);
}