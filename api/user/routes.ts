import express from "express";
import { userController } from "./controller";
import { isAdmin, isLogged } from "../../middlewares/index";

const userRouter = express.Router();

const { getUsers, getUser, createUser, loginUser, deleteUser, editUser } =
  userController;

userRouter.get("/", isAdmin, getUsers);
userRouter.get("/:id", getUser);
userRouter.post("/register", createUser);
userRouter.post("/login", loginUser);
userRouter.delete("/deleteUser/:id", isAdmin, deleteUser);
userRouter.put("/editUser/:id", isLogged, editUser);

export default userRouter;
