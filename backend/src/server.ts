import { CategoryService } from "./services/category.js";

const category = new CategoryService;

/*let noome : string = "Lanches";

console.log(await category.create(noome));*/

console.log(await category.listAll());
