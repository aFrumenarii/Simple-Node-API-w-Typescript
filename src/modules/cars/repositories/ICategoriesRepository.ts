import { Category } from "../model/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoryRepository {
  findByName(name: string): Category;
  listAll(): Category[];
  create({ name, description }: ICreateCategoryDTO): void;
}

export { ICategoryRepository, ICreateCategoryDTO };
