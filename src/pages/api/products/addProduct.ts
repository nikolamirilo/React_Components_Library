import { addNewProduct } from "@/utils/backend/products";
import { NextApiRequest, NextApiResponse } from "next";

//!Routes for creating, upadting and deleting Single Product

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { method, body } = req;
    const { title } = body;
    res.setHeader("Cache-Control", "s-maxage=86400");
    //* Process a POST request - create new product
    switch (method) {
      case "POST":
        res.status(200).json(`Product: ${title} added to Database!`);
        await addNewProduct(body);
        break;
      default:
        //* Handle unsupported HTTP methods
        res.status(405).end(`Method ${method} is not allowed`);
        break;
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
