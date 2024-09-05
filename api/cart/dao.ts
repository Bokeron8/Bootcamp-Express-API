import Cart from "./model";
import { ICart } from "../../types";

class CartDao {
  async addCart(cart: ICart) {
    try {
      const newCart = await Cart.create(cart);

      return newCart;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
  async getCarts() {
    try {
      const carts = await Cart.find();

      return carts;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
  async updateCartById(id: string, cart: ICart) {
    try {
      const userCart = await Cart.findByIdAndUpdate(id, cart, { new: true });
      return userCart;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
  async deleteCartById(id: string) {
    try {
      const deletedCart = await Cart.findByIdAndDelete(id);
      return deletedCart;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
}

export const cartDao = new CartDao();
