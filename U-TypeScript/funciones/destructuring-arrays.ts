const dbz = ['Goku','Vegeta','Trunks']
/// destructuring
const [ p1, p2, trunks] = dbz
//solo quiero trunks
const dbz2 = ['Goku','Vegeta']
const [, , trunk = 'No definido' ] = dbz2
console.log(trunk);