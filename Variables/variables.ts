//Variables primitivas
/*
    number -> {1,2,34,5,2,-4,0,-1000} U {3.1415,2.71,34.5,-45.2}
    string -> {"Hola como estas","esto es una cadena","esto es una frase","holaaa",
                "!343234","12354","-1","12Esadsadasd","@#$%^&*_)(**&**(()Hola como estas#$^@^@&&*#*#*#*"}
    boolean -> {true,false}

*/

let numeroEntero: number = 12;
var numeroDecimal: number = 12.3;

numeroEntero = 13;
numeroDecimal = 12.6;

const valorConstante:number = 12;


let valorDeVerdad: boolean = true;
let nombreVariable: string = "adsadad";


let cadena: string = "Hola como estas";

console.log('cadena',cadena);
console.log(`cadena ${cadena}`);

console.info("Info:", "informacion"); // Mensaje informativo
console.warn("Advertencia:", "18 years"); // Mensaje de advertencia
console.error("Error: No se encontró el dato"); // Mensaje de error