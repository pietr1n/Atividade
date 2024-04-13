function valoresMenoresQue20(lista) {
    const valoresMenores = lista.filter(num => num < 20);
    return valoresMenores;
}
const numeros = [10,21,28,16,15,9];
console.log(valoresMenoresQue20(numeros)); 
