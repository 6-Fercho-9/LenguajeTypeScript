interface Product {
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
function taxCalculation(options: TaxCalculationOptions ): number[] {
    
    const total = options.products.reduce((acc,product) => acc + product.price,0);
    return [total, total * options.tax];
}
// const optionParam: TaxCalculationOptions = {
//     tax,
//     products:
// }
const shoppingCart = [phone,tablet];

const tax = 0.15;//impuesto sobre la venta

const result = taxCalculation({
    tax,
    products: shoppingCart
})
const [total, totalConImpuestos] = result

console.log(result);
console.log(total,totalConImpuestos);
export {};
