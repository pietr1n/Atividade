function menorValor(lista) {
    let menor = lista[0];
    
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] < menor) {
            menor = lista[i]; 
        }
    }
    
    return menor;
}

const numeros = [1,8,9,0.5];
console.log(menorValor(numeros));