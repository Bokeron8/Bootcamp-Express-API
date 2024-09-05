import { categoryDao } from "./dao";

const { addCategory, getCategories, updateCategoryById, deleteCategoryById } =
  categoryDao;

class CategoryService {
  async getCategories() {
    try {
      const categories = await getCategories();
      return categories;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
  async addCategory(category: { name: string }) {
    try {
      const newCategory = await addCategory(category);
      return newCategory;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
  async updateCategory(id: string, category: { name: string }) {
    try {
      const updated = await updateCategoryById(id, category);
      return updated;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
  async deleteCategory(id: string) {
    try {
      const deleted = await deleteCategoryById(id);
      return deleted;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
}

export const categoryService = new CategoryService();
