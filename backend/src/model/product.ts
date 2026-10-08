import { connection } from "../config/connections.js";

export class ProductModel{

    async listAll() {

        const [rows] = await connection.query(
            "SELECT * FROM products"
        )

        return rows;

    }

    async listById(id: number) {

        const [rows] = await connection.query(
            "SELECT * FROM products WHERE id = ?",
            [id]
        )

        return rows;

    }

    async createProducts(image : string, name: string, price: number, description: string, id_categoria: number) {

        const [result] = await connection.query(
            "INSERT INTO products (image, name, price, description, id_category) VALUE (?,?,?,?,?)",
            [image, name, price, description, id_categoria]
        )

        return result;

    }

    async updateProducts(id: number,image:string, name: string, price: number, description: string, id_categoria: number) {

        const [result] = await connection.query(
            "UPDATE products SET image = ?, name = ?, price = ?, description = ?, id_category = ? WHERE id = ?",
            [image, name, price, description, id_categoria, id]
        )

        return result;
    }

    async deleteProducts(id: number) {

        const [result] = await connection.query(
            "DELETE from products WHERE id = ?",
            [id]
        )
        return result;

    }


}