import { CategoryModel } from "../model/category.js";

const categoryModel = new CategoryModel();

export class CategoryService {

    async listAll() {

        return await categoryModel.listAll();

    }

    async listById(id:number){

        return await categoryModel.listById(id); 

    }

    async create(name:string){

        if(name.trim().length < 3){
            throw new Error("o nome deve ter pelomenos de 3 caracteres");
        }

        return await categoryModel.createCategory(name);

    }

    async update(id: number, name:string){

        if(name.trim().length < 3){
            throw new Error("o nome deve ter pelomenos de 3 caracteres");
        }

        return await categoryModel.updateCategory(id, name);

    }

    async delete(id:number){
        return await categoryModel.deleteCategory(id);
    }

}