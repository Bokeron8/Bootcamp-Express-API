import express from "express";
import { cartController } from "./controller";
import { isLogged } from "../../middlewares";
const { addCart, getCarts, updateCart, deleteCart } = cartController;
const cartRouter = express.Router();

cartRouter.use(isLogged);
cartRouter.get("/", getCarts);
cartRouter.post("/addCart", addCart);
cartRouter.put("/updateCart/:id", updateCart);
cartRouter.delete("/deleteCart/:id", deleteCart);

export default cartRouter;
