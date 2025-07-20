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


// Define las interfaces para mayor claridad y tipado en TypeScript
interface Producto {
    id: string;
    nombre: string;
    categoria: 'bebida' | 'comida' | 'postre';
    precio: number;
    enStock: boolean;
}

interface ItemPedido {
    productoId: string;
    cantidad: number;
}

interface Pedido {
    id: string;
    cliente: string;
    items: ItemPedido[];
    estado: 'pendiente' | 'preparando' | 'completado' | 'cancelado';
    fecha: string; // Formato YYYY-MM-DD
}

// Datos de productos disponibles
export const productos: Producto[] = [
    { id: 'p001', nombre: 'Café Espresso', categoria: 'bebida', precio: 2.50, enStock: true },
    { id: 'p002', nombre: 'Latte', categoria: 'bebida', precio: 3.00, enStock: true },
    { id: 'p003', nombre: 'Croissant', categoria: 'comida', precio: 2.00, enStock: true },
    { id: 'p004', nombre: 'Muffin Chocolate', categoria: 'postre', precio: 2.80, enStock: true },
    { id: 'p005', nombre: 'Jugo Naranja', categoria: 'bebida', precio: 3.50, enStock: false }, // No en stock
    { id: 'p006', nombre: 'Té Verde', categoria: 'bebida', precio: 2.20, enStock: true },
    { id: 'p007', nombre: 'Sándwich Jamón y Queso', categoria: 'comida', precio: 4.50, enStock: true },
];

// Datos de pedidos de los clientes
export const pedidos: Pedido[] = [
    {
        id: 'o001', cliente: 'Ana García', estado: 'completado', fecha: '2025-07-18',
        items: [
            { productoId: 'p001', cantidad: 2 },
            { productoId: 'p003', cantidad: 1 }
        ]
    },
    {
        id: 'o002', cliente: 'Pedro Martínez', estado: 'pendiente', fecha: '2025-07-19',
        items: [
            { productoId: 'p002', cantidad: 1 },
            { productoId: 'p004', cantidad: 2 }
        ]
    },
    {
        id: 'o003', cliente: 'Laura Fernández', estado: 'preparando', fecha: '2025-07-19',
        items: [
            { productoId: 'p001', cantidad: 1 },
            { productoId: 'p005', cantidad: 1 } // Producto no en stock
        ]
    },
    {
        id: 'o004', cliente: 'Carlos Ruiz', estado: 'completado', fecha: '2025-07-18',
        items: [
            { productoId: 'p006', cantidad: 3 }
        ]
    },
    {
        id: 'o005', cliente: 'Ana García', estado: 'cancelado', fecha: '2025-07-20',
        items: [
            { productoId: 'p007', cantidad: 1 }
        ]
    }
];