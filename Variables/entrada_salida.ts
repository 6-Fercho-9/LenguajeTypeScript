import prompt from "prompt-sync";
const input = prompt();
const cadena: string = 'cual es tu nombre?: ';
const nombre =  input(cadena);
console.log(`hola ${nombre}`)

