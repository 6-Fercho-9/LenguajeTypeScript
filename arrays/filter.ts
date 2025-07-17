const productos = [
  { id: 1, nombre: "Laptop", stock: 5 },
  { id: 2, nombre: "Mouse", stock: 0 },
  { id: 4, nombre:"adaddsdadsadasd", stock:3}
];
function mostrarProductosDisponibles(){
    const disponibles = productos.filter((elemento,index) => elemento.stock > 0 );
    const noDisponibles = productos.filter((elemento) => elemento.stock <= 0);
    const longitudGrande = productos.filter( elemento => elemento.nombre.length > 6);
    
    console.log(disponibles);
}

const palabras = ["casa", "ordenador", "sol", "bicicleta"];
function mostrarPalabrasFiltradas(){
    const palabrasLargas = palabras.filter((elemento) => elemento.length > 5);
    console.log(palabrasLargas);
}
mostrarPalabrasFiltradas()
