import { Request, Response } from "express";
import { orderService } from "./service";
import { IOrder } from "../../types";

const { createOrder, getOrdersByUserId, getOrderById } = orderService;

class OrderController {
  async getOrdersByUserId(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const orderHistory = await getOrdersByUserId(id);
      return res.status(200).json(orderHistory);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
  async createOrder(req: Request, res: Response) {
    const order: IOrder = req.body;
    try {
      const newOrder = await createOrder(order);
      return res.status(200).json(newOrder);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
  async getOrderById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const order = await getOrderById(id);
      return res.status(200).json(order);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
}

export const orderController = new OrderController();
