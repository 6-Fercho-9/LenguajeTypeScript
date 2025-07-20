
// metodo de slice es un substrinng [posicion_inicio,posicion_fin), sin tomar en cuenta la posicion final
const str = "sdsada";
console.log(str.slice(1,6));

const oraciones = ["Hola Mundo","JavaScript es genial","Aprende TypeScript"];
//console.log(oraciones.flatMap((elemento) => elemento.split(" ")));

//para multiplicar cada elemento por 2 y agregarle ese elemento mas 1, es decir hacer crecer el array

const numerosPrueba = [1,2,3];// salida esperada -> [2,3,4,5,6,7]
console.log(numerosPrueba.flatMap((elemento) => [elemento*2,elemento*2+1]));