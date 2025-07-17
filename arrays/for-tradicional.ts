import { mostrarNumerosRandom,generarArrayRandom } from "../utils/random";

const frutas: string[] = ["manzana","pera","almeja","guineo"];

export function generarArrayDeNumerosRandom(cantidad:number){
    let array: number[] = [];
    for(let i = 0; i < cantidad; i++){
        const random = Math.random();

        array.push(random);
    }
}

function ejecutarForTradicional(){
    console.log('Ejecutando for tradicional')
    for(let i = 0; i < frutas.length; i++){
        console.log(`indices: ${i}: fruta: ${frutas[i]}`);
    }
}

const ejecutarForTradicionalInverso = function(){
    console.log("Ejecutando for tradicional inverso");
    for(let i = frutas.length; i > 0; i--){
        console.log(`indice ${i}: fruta: ${frutas[i]}`)
    }
}

const ejecutarForTradicionalV2 = () => {
    console.log("Ejecutando for tradicional nueveamente");
    for(let i = 0; i < frutas.length; i++){
        console.log("indice",i,"fruta",frutas[i]);
    }
}

function imprimirDatosDeArrayNumerico(array:number[]){
    for(let i = 0; i < array.length; i++){
        console.log(`elemento[${i}]: ${array[i]}`);
    }
}

// prueba final hacer un metodo que retorne un objeto con 2 arrays un array de positivos y un array de negativos
const obtenerArraysPositivosYNegativos = () => {
    const array = generarArrayRandom(30);
    let arrayPositivos: number[] = [];
    let arrayNegativos: number[] = [];
    for(let i = 0; i < array.length; i++){
        const elemento = array[i]; 
        if(elemento < 0){
            arrayNegativos.push(elemento);
        }else{
            arrayPositivos.push(elemento)
        }
    }
    console.log('Imprimiendo array positivos..')
    imprimirDatosDeArrayNumerico(arrayPositivos);
    console.log("Imprimiendo array negativos..");
    imprimirDatosDeArrayNumerico(arrayNegativos);
    return {
        arreglo_positivos: arrayPositivos,
        arreglo_negativos: arrayNegativos
    }

}

export const obtenerArraysPositivosYNegativosv2 = () => {
    const arrayRandom = generarArrayRandom(50);
    const arreglo_negativos = arrayRandom.filter(elemento => elemento < 0);
    const arreglo_positivos = arrayRandom.filter(elemento => elemento >= 0);
    return {
        arreglo_negativos,arreglo_positivos
    }
}


// ejecutarForTradicional();
// ejecutarForTradicionalInverso();
// ejecutarForTradicionalV2();
obtenerArraysPositivosYNegativosv2()