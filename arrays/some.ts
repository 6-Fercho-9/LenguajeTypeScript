// el metodo some retorna un boolean, es decir si el arreglo cumple o no esas condiciones
// si al menos uno cumple entonces retorna true, de lo contrario false
const numeros = [1,2,34,4,-9,-6];

// funcion para verificar si el arreglo tiene numeros negativos
function tieneAlgunNegativos(){
    return numeros.some((elemento) => elemento < 0);
}

const cadenas = ["caednas largas","cadenas","cadenas2"];
const tieneAlgunosElArregloLaPalabraCadena = () => {
    return cadenas.some((element) => element.includes("cadena"));
}

console.log(tieneAlgunosElArregloLaPalabraCadena());
// funcion con some


