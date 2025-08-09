function cualEsMiTipo<T>(argument:T): T {
    return argument;
}

const soyString = cualEsMiTipo<string>("Fernando");
const soyNumber = cualEsMiTipo<number>(2);
const soyBoolean = cualEsMiTipo<boolean>(true);
const soyArrayNumber = cualEsMiTipo<number[]>([1,2,3]);