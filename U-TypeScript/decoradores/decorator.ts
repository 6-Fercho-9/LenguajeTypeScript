// inyeccion manual de atributos
function classDecorator<T extends { new (...args:any[]): {} }> (
    constructor:T
){
    return class extends constructor {
        newProperty = 'New Property';
        hellow = 'override'
    }
}

@classDecorator
export class SuperClass {
    public myProperty:string = "Abc123";
    print() {
        console.log("Hellow World");
    }
}
console.log(SuperClass)
const sp = new SuperClass();
console.log(sp)