const skills: string[] = ["Bash","Counter","Healing"];


interface Strider {
    name:string;
    hp:number,
    skills:string[]
    hometown?:string
}
const strider:Strider = {
    name: 'Strider',
    hp:100,
    skills: ['bash','Counter']
}

console.table(strider)
