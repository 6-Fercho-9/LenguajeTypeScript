import { Product, taxCalculation} from "./destructuring-argumentos"
const productos: Product[] = 
    [
        {
            description:"sda",
            price:222
        },{
            description:"dsadad",
            price:999
        }
    ]
const tax = 0.17
const [total,totalImp] = taxCalculation({
    products:productos,
    tax
});
console.log(total,totalImp);

