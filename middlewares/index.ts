import { Request, Response } from "express";

import jwt from "jsonwebtoken";
import { IUser } from "../types";
export function isAdmin(req: Request, res: Response, next: Function) {
  const token = req.headers;
  try {
    const isTokenvalid = jwt.verify(
      token["auth-token"] as string,
      process.env.JWT_SECRET!
    ) as IUser;
    const admin = isTokenvalid.role == "admin";
    if (admin) {
      next();
    } else {
      res.status(401).send("Unauthorized User");
    }
  } catch (error) {
    return res.status(500).send(error);
  }
}
export function isComprador(req: Request, res: Response, next: Function) {
  const token = req.headers;
  try {
    const isTokenvalid = jwt.verify(
      token["auth-token"] as string,
      process.env.JWT_SECRET!
    ) as IUser;
    const comprador = isTokenvalid.role == "comprador";
    if (comprador) {
      next();
    } else {
      res.status(401).send("Unauthorized User");
    }
  } catch (error) {
    return res.status(500).send(error);
  }
}

export function isVendedor(req: Request, res: Response, next: Function) {
  const token = req.headers;
  try {
    const isTokenvalid = jwt.verify(
      token["auth-token"] as string,
      process.env.JWT_SECRET!
    ) as IUser;
    const vendedor = isTokenvalid.role == "vendedor";
    if (vendedor) {
      next();
    } else {
      res.status(401).send("Unauthorized User");
    }
  } catch (error) {
    return res.status(500).send(error);
  }
}
export function isLogged(req: Request, res: Response, next: Function) {
  const token = req.headers;
  try {
    const isTokenvalid = jwt.verify(
      token["auth-token"] as string,
      process.env.JWT_SECRET!
    ) as IUser;
    if (isTokenvalid) {
      next();
    } else {
      res.status(401).send("Unauthorized User");
    }
  } catch (error) {
    return res.status(500).send(error);
  }
}
