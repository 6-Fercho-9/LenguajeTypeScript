const sumar = (a:number,b:number):number => {
    return a + b;
}
const result = sumar(10,10);
console.log({result})

interface Caracter {
    name:string;
    hp:number;
    showHp: () => void;
}

const strider2: Caracter = {
    name:"Strider",
    hp:100,
    showHp:() => {
        console.log("Punbtos de vida en xxx")
    }
}

const healCaracter = (caracter:Caracter ,amount:number) => {
    caracter.hp += amount;
}


healCaracter(strider2,10);