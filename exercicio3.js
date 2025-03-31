function balancoFinanceiro() {
    let ganhoBrutoAnual = 0;
    let gastoAnual = 0;

    for (let mes = 1; mes <= 12; mes++) {
        const ganhoBruto = parseFloat(prompt(`Digite o ganho bruto do mês ${mes}:`));
        const gasto = parseFloat(prompt(`Digite os gastos do mês ${mes}:`));
        
        ganhoBrutoAnual += ganhoBruto;
        gastoAnual += gasto;
    }

    const saldoFinanceiro = ganhoBrutoAnual - gastoAnual;
    const situacao = saldoFinanceiro >= 0 ? "Lucro" : "Prejuízo";

    console.log(`Ganho Bruto Anual: R$ ${ganhoBrutoAnual.toFixed(2)}`);
    console.log(`Gasto Anual: R$ ${gastoAnual.toFixed(2)}`);
    console.log(`Saldo Financeiro: R$ ${saldoFinanceiro.toFixed(2)}`);
    console.log(`Situação: ${situacao}`);
}


