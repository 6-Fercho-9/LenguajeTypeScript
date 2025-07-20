const numerosPares = [2,4,6,8];
const numerosImpares = [2, 4, 6, 9];

function todosLosNumerosSonPares(array: number[]){
    return array.every( element => element % 2 === 0);
}

console.log(todosLosNumerosSonPares(numerosPares));
console.log(todosLosNumerosSonPares(numerosImpares));


