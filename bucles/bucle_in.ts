//ejercicio para aplicar bucles 
import prompt from "prompt-sync"
// funcion tradicional
function ejecutarBucleWhile(){
    const input = prompt();
    let numero: number;
    do{
        numero = parseInt(input('Introduzca un valor menor o igual a 0 para parar el bucle: '));
        console.log(numero);
    }while(numero > 0);   
}
// funcion tradicional
function capturarDatosDelUsuario(){
    const array = guardarNumerosIntroducidos();
    imprimirDatosNumericos(array);
}
// funcion de expresion, no se puede llamar antes de ser definida(parece que si se puede)
export const guardarNumerosIntroducidos = function(): number[]{
    const input = prompt()
    let str:string;
    let array:number[] = [];
    do{
        str = input("Introduzca un numero: ");
        try {
            if (!isNaN(+str)){
                let x = +str;
                array.push(x);
            }
        } catch (error) {
            console.error(`error ocurrio un error inesperado, ${error}`);
        }
    }while(str.toUpperCase() !== "ALTO");
    return array;
};

// funcion flecha
export const imprimirDatosNumericos = (array:number[]) => {
    console.log("Imprimiendo el array...");
    /**
     * EQUIVALENTE
     * for(let x of array){
     *  console.log(x);
     * }
    */
   array.forEach(x => console.log(x));
}


capturarDatosDelUsuario();