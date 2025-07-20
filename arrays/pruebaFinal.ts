import { pedidos, productos } from "../utils/objetos";

//obtener los nombres de los productos que esten en stock
function obtenerNombresDeProductosConStock(){
    return productos
            .filter((elemento) => elemento.enStock)
            .map((elemento) => elemento.nombre);
}

// metodo para calcular el total de un pedido
// dado el id del pedido
const calcularTotalPedido = (id:string) => {
    //busco el objeto
    const pedido = pedidos.find((elemento) => elemento.id === id);
    const total = pedido?.items.reduce((acc,elementoReduce) => {
        const precioProducto = productos.find((producto) => producto.id === elementoReduce.productoId )?.precio ?? 0;
        return acc + precioProducto * elementoReduce.cantidad;
    },0);
    return total;
}
//console.log(calcularTotalPedido('o005'));


//verificar disponibilidad de pedidos pendientes
const verificarDispinibilidadDePedidos = function(){
    return pedidos.some((elemento) => elemento.estado === 'pendiente');
}

interface TemporalDTO {
    producto: string;
    cantidad: number;
}
function listarProductosPopulares(){
    //aunque aqui se hace doble for
    //const arreglo: string[] = productos.filter((producto) => producto.categoria).map(elemento => elemento.categoria);

    let categoryTree = new Set<string>();
    productos.forEach((producto) => categoryTree.add(producto.categoria));
    let arregloObj:Record<string,any[]> = {};
    categoryTree.forEach((categoria) => {
        arregloObj[categoria] = [];
        // let objTemporal: Record<string, number> = {};
        // let arregloTemporal = [];
        let productosDeCategoria = productos.filter((producto) => producto.categoria === categoria && producto.enStock);
        // mapeo a objeto clave, valor {producto:,cantidad:}
        let arregloObjetosCantidad: TemporalDTO[] = productosDeCategoria.map((producto) => {
            //calculo la cantidad de ventas
            const cantidadVentas = pedidos.reduce( (acc,pedido) => {
                const pedidoEncontrado = pedido.items.find(x => x.productoId === producto.id);
                const cantidad = pedidoEncontrado?.cantidad ?? 0;
                return acc + cantidad;
            },0);
            
            return {
                producto:producto.nombre,cantidad:cantidadVentas
            };
        })
        arregloObjetosCantidad.sort(
          (a, b) => b.cantidad - a.cantidad
        );
        arregloObj[categoria] = arregloObjetosCantidad.map((elemento) => elemento.producto)
    })
    return arregloObj;
}
console.log(listarProductosPopulares());