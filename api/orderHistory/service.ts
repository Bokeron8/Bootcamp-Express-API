import { IOrder } from "../../types";
import { orderDao } from "./dao";

import { productDao } from "../product/dao";

const { createOrder, getOrdersByUserId, getOrderById } = orderDao;
const { getProductById, editProduct } = productDao;

class OrderService {
  async getOrdersByUserId(userId: string) {
    try {
      const orderHistory = await getOrdersByUserId(userId);
      return orderHistory;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
  async getOrderById(id: string) {
    try {
      const order = await getOrderById(id);
      return order;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
  async createOrder(order: IOrder) {
    const { products } = order;
    try {
      const newOrder = await createOrder(order);
      products.forEach(async ({ product_id, quantity }) => {
        const productData = await getProductById(product_id);
        console.log(products);
        if (!productData) {
          throw Error("Product not found!");
        }

        await editProduct(product_id, {
          stock: productData.stock - quantity,
        });
      });

      return newOrder;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
}

export const orderService = new OrderService();
