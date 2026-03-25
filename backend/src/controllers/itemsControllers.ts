import { Request, Response } from "express";
import Item from "../models/items";

export const getItems = async (req: Request, res: Response) => {
  const items = await Item.find();
  res.json(items);
};

export const createItem = async (req: Request, res: Response) => {
  const item = new Item({ name: req.body.name });
  await item.save();
  res.json(item);
};