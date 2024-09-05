import { Request, Response } from "express";
import { cartService } from "./service";
import { ICart } from "../../types";
const { getCarts, addCart, updateCart, deleteCart } = cartService;

class CartController {
  async addCart(req: Request, res: Response) {
    const cart = req.body;
    try {
      const newCart = await addCart(cart);
      return res.status(200).json(newCart);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
  async getCarts(req: Request, res: Response) {
    try {
      const carts = await getCarts();
      return res.status(200).json(carts);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
  async getCart(req: Request, res: Response) {
    const { id } = req.params;
    const cart = req.body;
    try {
      const newCart = await addCart(cart);
      return res.status(200).json(newCart);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
  async updateCart(req: Request, res: Response) {
    const { id } = req.params;
    const cart: ICart = req.body;
    try {
      const userCart = await updateCart(id, cart);
      return res.status(200).json(userCart);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
  async deleteCart(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const deletedCart = await deleteCart(id);
      return res.status(200).json(deletedCart);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
}

export const cartController = new CartController();
