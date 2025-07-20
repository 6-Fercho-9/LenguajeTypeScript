// el metodo join se encarga de pasar de arreglo a string separado por el parametro indicado

import { usuario } from "../utils/objetos";

// ejemplo [1,2,4], array.join('*') salida: -> "1*2*4"
const frutas = ["pera","frutilla","amaranto"]
const array = ["uno", "dos", null, "tres", undefined];
const devolverCadenaDeArreglo = (array:string[] = frutas) => {
    return array.join('-');
}
console.log(devolverCadenaDeArreglo());

