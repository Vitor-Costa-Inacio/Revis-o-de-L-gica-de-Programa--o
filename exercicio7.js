function picoleteria() {
    
    alert("Sabores: ")
    alert("a.Chocolate ")
    alert("b.Morango ")
    alert("c.Creme ")
    alert("d.Manga ")
    alert("e.Melancia ")
    alert("f.Vanilla ice ")
    alert("g.Céu azul ")
    alert("h.Brownie ")
    alert("i.Havaiano ")

    const sabor = (prompt("Digite a letra do sabor desejado: "))

    if (sabor == "a"){
        alert("Custa: R$1.50"); 
    } else if (sabor == "b") {
        alert("Custa: R$2,50") 
    } else if (sabor == "c") {
        alert("Custa: R$2,50"); 
    } else if (sabor == "d"){
        alert("Custa: R$3,20") 
    } else if (sabor == "e") {
        alert("Custa: R$3,40") 
    } else if (sabor == "f"){
        alert("Custa: R$3,00") 
    } else if (sabor == "g") {
        alert("Custo: R$3,60"); 
    } else if (sabor == "h") {
        alert("Custa: R$4,00"); 
    } else if (sabor == "i") {
        alert("Custa: R$5,00"); 
    }
}