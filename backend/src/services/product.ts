import { ProductModel } from "../model/product.js";

const product = new ProductModel();

export class ProductService {

    async listAll() {

        return await product.listAll();

    }

    async listById(id: number) {

        return await product.listById(id);

    }

    async create(image: string, name: string, price: number, text: string, id_category: number) {


        if(image.trim() === ""){
            image = "semimagem.jpg";
        }
        
        if (name.trim().length < 3) {

            throw new Error("deve conter pelomenos 3 caracteres");

        }

        if(price < 0){
            throw new Error("não deve conter numeros negativos em preço");
        }

        return await product.createProducts(image, name, price, text, id_category);

    }

    async update(id: number, image: string, name: string, price: number, text: string, id_category: number) {

         if(image.trim() === ""){
            image = "semimagem.jpg";
        }

        if (name.trim().length < 3) {
            throw new Error("deve conter pelomenos 3 caracteres");
        }

        if(price < 0){
            throw new Error("não deve conter numeros negativos em preço");
        }

        return await product.updateProducts(id, image, name, price, text, id_category);


    }

    async delete(id: number) {

        return await product.deleteProducts(id);

    }




}