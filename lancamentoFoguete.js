function lancamentoFoguete() {
    var contagem = 10;

    let sequencia = setInterval(function contagemLancamento() {
        console.log(contagem);

        if (contagem == 5) {
            console.log("Ingnação...");
        }

        if (contagem < 1) {
            console.log("Lançamento");
            clearInterval(sequencia);
        }

        contagem--;

    }, 1000);

}