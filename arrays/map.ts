import { obtenerArraysPositivosYNegativosv2 } from "./for-tradicional";

function obtenerArrayPorN(n:number = 2){
    const {arreglo_positivos} = obtenerArraysPositivosYNegativosv2();
    const nuevo_array = arreglo_positivos.map((elemento) => elemento * n );
    return nuevo_array;
}

const convertirAObjeto = () => {
    const {arreglo_positivos} = obtenerArraysPositivosYNegativosv2();
    const arrayDeObjeto = arreglo_positivos.map((elemento,index) => {
        return {id:index, elemento:elemento}
    })
    return arrayDeObjeto;
}

const convertirAObjetov2 = function() {
    const {arreglo_positivos} = obtenerArraysPositivosYNegativosv2();
    const arregloObjects = arreglo_positivos.map((elemento,index) => ({id:index, elemento:elemento*2}))
    return arregloObjects;
}


function parsearAString() {
    const {arreglo_positivos} = obtenerArraysPositivosYNegativosv2();
    const arregloString = arreglo_positivos.map((elemento) => String(elemento))
    return arregloString;
}

//const arreglo = obtenerArrayPorN(4);
const array = parsearAString();
console.log(array);