function picoleteria() {
    const sabores = {
        'a': { nome: 'Chocolate', preco: 1.50 },
        'b': { nome: 'Morango', preco: 2.50 },
        'c': { nome: 'Creme', preco: 2.50 },
        'd': { nome: 'Manga', preco: 3.20 },
        'e': { nome: 'Melancia', preco: 3.40 },
        'f': { nome: 'Vanilla Ice', preco: 3.00 },
        'g': { nome: 'Céu Azul', preco: 3.60 },
        'h': { nome: 'Brownie', preco: 4.00 },
        'i': { nome: 'Hawaiano', preco: 5.00 }
    };

    const opcao = prompt(
        "Escolha o sabor do picolé:\n" +
        "a. Chocolate\nb. Morango\nc. Creme\nd. Manga\ne. Melancia\n" +
        "f. Vanilla Ice\ng. Céu Azul\nh. Brownie\ni. Hawaiano"
    ).toLowerCase();

    if (sabores[opcao]) {
        console.log(`Sabor: ${sabores[opcao].nome} - Preço: R$ ${sabores[opcao].preco.toFixed(2)}`);
    } else {
        console.log("Opção inválida");
    }
}