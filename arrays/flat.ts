// lo que hace el flat es aplanar el array es decir de un arreglo que contiene arreglos lo pasa a un arreglo simple
//por lo general solo aplana el primer nivel,pero podria aplanar todo
const arrayAnidado = [1,[1,[0,0],2],[3,5,6,1]];
const arrayAplanado = arrayAnidado.flat(1);
// console.log(arrayAnidado);
console.log(arrayAplanado);

const arrayAplanadoInfinito = arrayAnidado.flat(Infinity);

