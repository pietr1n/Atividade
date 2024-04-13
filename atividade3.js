function SomaLista(lista) {
    let soma = 0; 
    
    for (let i = 0; i < lista.length; i++) {
        soma += lista[i];
    }
    
    return soma;
}

const numeros = [10,20,30,40,50];
console.log(SomaLista(numeros)); 