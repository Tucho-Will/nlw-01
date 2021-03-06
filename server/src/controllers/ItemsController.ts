import { Request, Response } from "express";
import Knex from "../databases/connection";

class ItemsController {
  async index(request: Request, response: Response) {
    const items = await Knex("items").select("*");

    const serializedItems = items.map((item) => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://192.168.2.134:3333/uploads/${item.image}`,
      };
    });

    return response.json(serializedItems);
  }
}

export default ItemsController;
