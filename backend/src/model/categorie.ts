import {connection} from "../config/connections.js";

export class CategoryModel {

    async listAll (){

        const [rows] = await connection.query(
            "SELECT * FROM categories"
        );

        return rows;

    }

    async listById (id: number){

        const [rows] = await connection.query(
            "SELECT * FROM categories WHERE id = ?",
            [id]
        );

        return rows;

    }

    async createCategory(name: string){

        const [result] = await connection.query(
            "INSERT INTO categories (name) VALUE (?)",
            [name]
        )

        return result;

    }

    async updateCategory(id: number , name: string){

        const [result] = await connection.query(
            "UPDATE categories SET name = ? WHERE id =?",
            [name , id]
        )

        return result;

    }

    async deleteCategory(id: number){

        const[result] = await connection.query(
            "DELETE FROM categories WHERE id = ?",
            [id]
        )

        return  result;


    }

}