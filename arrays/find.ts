// el metodo find nos permite buscar en el array el primer elemento que coincida con el criterio de busqueda
// retorna el objeto que cumple con el criterio de busqueda
// si no lo encuentra retorna undefined
const productosv2 = [{id:900,nombre:'laptop'},{id:2,nombre:"pc"},{id:3,nombre:'laptop 2'}];
const laptop = productosv2.find((elemento) => elemento.nombre.includes('laptop'));
console.log(laptop);


// caso especial con findIndex que permite buscar el elemento igualmente, pero este retorna la posicion donde lo encontro
const index = productosv2.findIndex((elemento) => elemento.nombre.includes('laptop'));
console.log(index);