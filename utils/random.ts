export const mostrarNumerosRandom = function(n:number = 20) {
    for(let i = 0; i < n; i++){
        console.log(generarNumeroEnteroRandom());
    }
}

export function generarArrayRandom(n:number): number[]{
    const array:number[] = [];
    for(let i = 0; i < n; i++){
        array.push(generarNumeroEnteroRandom());
    }
    return array;
}
export const generarNumeroEnteroRandom = ():number => {
    const base = [10, 100, 1000];
    const random = generarNumeroRandomFlotanteEnIntervalo();
    const index = Math.floor(Math.random() * base.length);
    const signo:number = generarNumeroRandomEnteroEnIntervalo(0,1) === 0 ? -1 : 1;
    return Math.floor(random * base[index]) * signo;
}

// retorna un random entero incluyendo el intervalo
function generarNumeroRandomEnteroEnIntervalo(min:number, max:number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// me generar un random float sin incluir el extremo superior
function generarNumeroRandomFlotanteEnIntervalo(min: number = 0, max: number = 1) {
  return Math.random() * (max - min ) + min;
}

