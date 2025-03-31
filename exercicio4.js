function ordenarDecrescente() {
    const valores = [];
    
    for (let i = 0; i < 4; i++) {
        valores.push(parseInt(prompt(`Digite o ${i + 1}º valor inteiro:`)));
    }

    valores.sort((a, b) => b - a);
    console.log("Valores em ordem decrescente:", valores);
}