export const usuario: { [key: string]: any } = {
  id: 101,
  nombre: "Carlos Pérez",
  email: "carlos@example.com",
  activo: true,
  ultimoAcceso: new Date("2023-05-15"),
};

export const producto = {
  sku: "PROD-78945",
  nombre: "Smartphone X200",
  precio: 599.99,
  especificaciones: {
    pantalla: "6.5 pulgadas",
    ram: "8GB",
    almacenamiento: "128GB",
  },
  enStock: false,
};

export const pedido = {
  numeroPedido: "ORD-2023-456",
  cliente: "María González",
  items: [
    { producto: "Camiseta", cantidad: 2, precio: 15.99 },
    { producto: "Pantalón", cantidad: 1, precio: 29.99 },
  ],
  total: 61.97,
  metodoPago: "tarjeta",
};

export const libro = {
  isbn: "978-3-16-148410-0",
  titulo: "Aprendiendo JavaScript Moderno",
  autores: ["Sofía Martínez", "Jorge Rodríguez"],
  editorial: {
    nombre: "TechBooks",
    pais: "España",
  },
  comentarios:[
    {
        id:1,
        descripcion:"hola como estas",
        usuario:{
            id:2,
            nombre:"ferando"
        }
    },
    {
        id:2,
        descripcion:"muy buen comentario",
        usuario:{
            id:3,
            nombre:"marcos arroyo"
        }
    }
  ],
  paginas: 342,
  temas: ["Programación", "JavaScript", "Web"],
};
