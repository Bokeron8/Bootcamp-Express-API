import express from "express";
import { productController } from "./controller";
import { isVendedor } from "../../middlewares";

const { getProduct, getProducts, createProduct, deleteProduct, editProduct } =
  productController;

const productRouter = express.Router();

productRouter.get("/", getProducts);
productRouter.get("/:id", getProduct);
productRouter.use(isVendedor);
productRouter.post("/addProduct", createProduct);
productRouter.delete("/deleteProduct/:id", deleteProduct);
productRouter.put("/editProduct/:id", editProduct);

export default productRouter;
