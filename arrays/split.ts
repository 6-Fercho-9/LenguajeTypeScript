// el split nos sirve para pasar de cadena a array mediante un limitador, similar al join
// const productosString = "manzana,banana,cereza,naranja";
// const productosArray = productosString.split(",");
// console.log(productosArray); // ["manzana", "banana", "cereza", "naranja"]

// es decir retorna un array
const productosTest: string = "Leche Pil,Mortadela,Leche Chocolatada,Yogurt";

console.log(productosTest.split(","));

// si no tiene parametro, separara cada elemento de la cadena
const lenguaje = "TypeScript";
// resultado -> ["T","y","p","e","S","c","r","i","p","t"]
console.log(lenguaje.split(""));


// casos especiales
/// divide por uno o mas espacios
const textoConEspacioVariado = "Uno   dos tres   cuatro";
console.log(textoConEspacioVariado.split(/\s+/));




const preciosConComas = "10, 20,  30,40";
const preciosArray = preciosConComas.split(/,\s*/); // Divide por coma seguida de cero o más espacios
console.log(preciosArray); // ["10", "20", "30", "40"]