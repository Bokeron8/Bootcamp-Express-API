import { IOrder } from "../../types";
import Order from "./model";

class OrderDao {
  async getOrdersByUserId(userId: string) {
    try {
      const orderHistory = await Order.find({ user_id: userId });
      return orderHistory;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
  async getOrderById(id: string) {
    try {
      const order = await Order.findById(id);

      return order;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
  async createOrder(order: IOrder) {
    try {
      const newOrder = await Order.create(order);

      return newOrder;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }
}

export const orderDao = new OrderDao();
