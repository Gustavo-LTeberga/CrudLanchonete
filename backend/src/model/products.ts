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

    async createProducts(name: string, price: number, description: string, id_categoria: number) {

        const [result] = await connection.query(
            "INSERT INTO products (name, price, description, id_category) VALUE (?,?,?,?)",
            [name, price, description, id_categoria]
        )

        return result;

    }

    async updateProducts(id: number, name: string, price: number, description: string, id_categoria: number) {

        const [result] = await connection.query(
            "UPDATE products SET name = ?, price = ?, description = ?, id_category = ? WHERE id = ?",
            [name, price, description, id_categoria, id]
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