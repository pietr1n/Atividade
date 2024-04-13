function valoresMaioresQueMedia(lista) {
    const media = lista.reduce((acc, num) => acc + num, 0) / lista.length;
    const valores = lista.filter(num => num > media);
    
    return valores;
}

const numeros = [20, 40, 60];
const valores = valoresMaioresQueMedia(numeros);
console.log(valores); 
