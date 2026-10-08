import { ProductService } from "./services/product.js";

const product = new ProductService;

/*let img : string = "";
let noome : string = "Misto Quente";
let preco : number = 12;
let descricao : string = "saboroso";
let id_categoria : number = 1;

console.log(await product.create(img,noome,preco,descricao,id_categoria));*/

console.log(await product.listAll());
