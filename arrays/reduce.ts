import { obtenerArraysPositivosYNegativosv2 } from "./for-tradicional";

function obtenerSumaDeElementos(){
    const {arreglo_positivos} = obtenerArraysPositivosYNegativosv2();
    return arreglo_positivos.reduce((acc,elemento) => acc + elemento,0);
}




//console.log(obtenerSumaDeElementos())
const frutas = ["manzana", "banana", "manzana", "naranja", "banana", "manzana"];
function ejecutarConteoDeFrutas() {
    //se quiere hacer que retorne un json con la furta y las cantidad de veces que esta esa fruta
    const conteoDeFrutas = frutas.reduce((acc:{ [key:string] :number},elemento) => {
        //acc[elemento] lo que hace es actualizar el valor de la clave elemento, inicialmente si no existe
        // valor lo hace 0, y luego si encuentra coincidencia incrementa el valor y lo reasigna
        acc[elemento] = (acc[elemento] || 0) + 1;
        return acc;
    },{});
    return conteoDeFrutas;
}

const ejecutarConteoDeFrutas2 = () => {
    const conteoDeFrutas = frutas.reduce((acc:{[key:string]:number},elemento) => {
        acc[elemento] = (acc[elemento] || 0) + 1;
        return acc;
    },{});
    return conteoDeFrutas;
}


//console.log(ejecutarConteoDeFrutas2());
interface Usuario {
  nombre: string;
  ciudad: string;
  edad: number;
}

const usuarios: Usuario[] = [
  { nombre: "Ana", ciudad: "Madrid", edad: 30 },
  { nombre: "Pedro", ciudad: "Barcelona", edad: 25 },
  { nombre: "Luis", ciudad: "Madrid", edad: 35 },
  { nombre: "María", ciudad: "Sevilla", edad: 28 },
];

// de cada ciudad mostrar los usuarios
function usuariosPorCiudad() {
    return usuarios.reduce((acc:{[key:string]:Usuario[]}, usuario) => {
        const {ciudad} = usuario;
        if(!acc[ciudad]){
            acc[ciudad] = [];
        }
        acc[ciudad].push(usuario);
        return acc;
    },{})
}
console.log(usuariosPorCiudad());