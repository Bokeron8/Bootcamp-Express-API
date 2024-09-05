import { Request, Response } from "express";
import { categoryService } from "./service";

const { addCategory, getCategories, updateCategory, deleteCategory } =
  categoryService;

class CategoryController {
  async getCategories(req: Request, res: Response) {
    try {
      const categories = await getCategories();
      return res.status(200).json(categories);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
  async addCategory(req: Request, res: Response) {
    const category = req.body;
    try {
      const newCategory = await addCategory(category);
      return res.status(200).json(newCategory);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
  async updateCategory(req: Request, res: Response) {
    const { id } = req.params;
    const category = req.body;
    try {
      const updated = await updateCategory(id, category);
      return res.status(200).json(updated);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
  async deleteCategory(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const deleted = await deleteCategory(id);
      return res.status(200).json(deleted);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
}

export const categoryController = new CategoryController();
