import Category from "./model";

class CategoryDao {
  async getCategories() {
    try {
      const categories = await Category.find();
      return categories;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
  async addCategory(category: { name: string }) {
    try {
      const newCategory = await Category.create(category);

      return newCategory;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
  async updateCategoryById(id: string, category: { name: string }) {
    try {
      const updated = await Category.findByIdAndUpdate(id, category);

      return updated;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
  async deleteCategoryById(id: string) {
    try {
      const deleted = await Category.findByIdAndDelete(id);

      return deleted;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
}

export const categoryDao = new CategoryDao();
