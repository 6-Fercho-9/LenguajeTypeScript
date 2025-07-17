import { libro, pedido, producto, usuario } from "../utils/objetos";

interface Animal {
    id:number;
    nombre:string;
    sexo:string
}
// for in para propiedades de los objetos
function imprimirDatoPersona1() {
    const persona: {[key: string]: any} = {
        nombre:"Juan alberto",
        edad:18,
        apellido:"perez"
    }
    for( const clave in persona){
        console.log(`clave: ${clave}, valor: ${persona[clave]}`);
    }
}




const imprimirAnimal = () => {
    const animal:Animal = {
        id:1,
        nombre:"Cody",
        sexo:"macho"
    }
    
    for (const clave in animal) {
        if(animal.hasOwnProperty(clave)){
            console.log(`clave ${clave}, valor ${animal[clave as keyof Animal]}`)
        }   
    }   

}

const imprimirConEntries = function () {
    const objeto = { nombre: "Juan", edad: 30, ciudad: "Madrid" };
    //entries retorna la clave valor de un objeto  
    // entradas es un  array de clave valor, donde cada elemento es un clave valor
    const entradas = Object.entries(objeto);
    console.log(entradas);
    entradas.forEach(([clave,valor]) => {
        console.log(`clave: ${clave}, valor ${valor}`);
    });
}

const imprimirConKeys = () => {
    const objeto: {[key:string]:any} = { nombre: "Pegaso", edad: 22};
    const claves: string[] =  Object.keys(objeto);
    claves.forEach((clave) => {
        console.log(`clave: ${clave}, valor : ${objeto[clave]}`)
    })
}

// imprimir con for
function imprimirObjetoConFor(objeto: {[key:string]:any} = usuario){
    for(const clave in objeto){
        if(objeto.hasOwnProperty(clave)){
            console.log(`clave ${clave}, valor: ${objeto[clave]}`)
        }
    }
}

function imprimirObjetoConsola(objeto: {[key:string]:any} = producto){
    //arreglo de keys
    // console.log(JSON.stringify(objeto,null,2));
    // console.dir(producto, {depth:null, colors:true});
    // console.table(producto);
    
    console.dir(objeto,{depth:true,colors:true});
    console.table(objeto);
    console.log(JSON.stringify(objeto,null,2))
    
}

const imprimirObjetoConKeys = (objeto: {[key:string]:any} = pedido) =>{
    //arreglo de claves o arreglo de sting
    const claves = Object.keys(objeto);
    claves.forEach((clave) => console.log(`${clave}:`,objeto[clave]));
}

const imprimirObjetoConEntries = function (objeto: {[key:string]:any} = libro) {
    //arreglo de clave valor, cada elemento que s edebe recorrer es un clave,valor

    const entradas = Object.entries(objeto);
    entradas.forEach(([clave,valor]) => console.log(clave,valor) );
}   
//imprimirObjetoConKeys();
//
// imprimirObjetoConKeys();
imprimirObjetoConEntries();
