function aplanarArray(array: any[]) {
  let arregloRetorno: any[] = [];
  aplanarArrayR(array, arregloRetorno);
  return arregloRetorno;
}
function aplanarArrayR(array: any[], arregloRetorno: any[]) {
  //si es arreglo vacio
  for (let i = 0; i < array.length; i++) {
    const elemento = array[i];
    //console.log(elemento);
    if (!Array.isArray(elemento)) {
      arregloRetorno.push(elemento);
    } else {
      aplanarArrayR(elemento, arregloRetorno);
    }
  }
}
const array = aplanarArray([1, 2, [0, [0, [0, [0], 90]]], 0]);
console.log(array);