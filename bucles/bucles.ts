import prompt from "prompt-sync";

const input = prompt();
const valorNumerico:number = parseInt(input('Introduzca un numero: '));

console.log('Iterando con While')
let iterador :number = valorNumerico;
// con While
while (iterador > 0) {
    console.log(iterador);
    iterador--;
}
// con repeat
console.log("Iterando con Repeat");
iterador = valorNumerico;
do{
    console.log(iterador);
    iterador--;
}while(iterador > 0);

// con for
console.log("Iterando con for");
iterador = valorNumerico;
for(let i = iterador; i>0; i--){
    console.log(i);
}