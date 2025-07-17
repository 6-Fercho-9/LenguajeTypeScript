import { obtenerArraysPositivosYNegativosv2 } from "./for-tradicional";

function mostrarValores () {
    const objeto = obtenerArraysPositivosYNegativosv2();
    const { arreglo_negativos , arreglo_positivos } = objeto;
    arreglo_negativos.forEach((elemento,index) => console.log(`index: [${index}], elemento: ${elemento}`))
    arreglo_positivos.forEach((elemento,index) => console.log(`index: [${index}], elemento: ${elemento}`));
}

//mostrar solo los indices pares
function mostrarValoresConCondicion () {
    const objeto = obtenerArraysPositivosYNegativosv2();
    const { arreglo_negativos } = objeto;
    arreglo_negativos.forEach((elemento,index) => {
        if (index % 2 != 0) {
            return;
        }
        console.log(`index: [${index}], elemento: [${elemento}]`);
    })
}
mostrarValoresConCondicion();
