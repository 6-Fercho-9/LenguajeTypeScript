export interface Product {
    description:string;
    price:number
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'iPad Air',
    price: 250.0
}

interface TaxCalculationOptions {
    tax:number,
    products: Product[]
}
export function taxCalculation({tax,products}: TaxCalculationOptions ): [number,number] {
    
    const total = products.reduce((acc,{price}) => acc + price,0);
    return [total, total * tax];
}

const optionParam: TaxCalculationOptions = {
    tax: 0.15,
    products: [phone,tablet]
}
const [total, totalConImpuestos] = taxCalculation(optionParam);

console.log(total,totalConImpuestos);
export {};
