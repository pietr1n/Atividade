function primeiroUltimo(lista) {

    const primeiro = lista[0];
    const ultimo = lista[lista.length - 1]; 
    
    return [primeiro, ultimo];
}


const numeros = [1,2,3,4,5,6,7,8,9,10];
console.log(primeiroUltimo(numeros));