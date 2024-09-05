import express from "express";
import { categoryController } from "./controller";
import { isAdmin } from "../../middlewares/index";
const { addCategory, getCategories, updateCategory, deleteCategory } =
  categoryController;
const categoryRouter = express.Router();

categoryRouter.get("/", getCategories);
categoryRouter.use(isAdmin);
categoryRouter.post("/addCategory", addCategory);
categoryRouter.put("/updateCategory/:id", updateCategory);
categoryRouter.delete("/deleteCategory/:id", deleteCategory);

export default categoryRouter;
