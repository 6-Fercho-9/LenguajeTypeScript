export class Person{

    constructor(
        public name:string,
        private address:string = 'Sin Direccion'
    ){
        this.name = name;
        this.address = address
    }
}

// Herencia
// export class Hero extends Person{
//     constructor(
//         public alterEgo:string,
//         public age:number,
//         public realName:string
//     )
//     {
//         super(realName,"New York");

//     }
// }

// const ironMan = new Hero("Iron man",45,'Tony');
// console.log(ironMan);

//priorizacion de composicion sobre herencia

export class Hero {
    constructor(
        public alterEgo:string,
        public age:number,
        public realName:string,
        public person: Person
    )
    {
      
    }
}
const tony = new Person('Tony Startk','NY');
const ironMan = new Hero("Iron man",45,'Tony',tony);
console.log(ironMan);