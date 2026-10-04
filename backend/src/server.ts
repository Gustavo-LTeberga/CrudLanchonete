import { ProductModel } from "./model/products.js";

const productModel = new ProductModel();

const products = await productModel.listAll();


console.log(products);