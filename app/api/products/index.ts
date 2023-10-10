import { deleteAllProducts, getProducts } from "utils/backend/products";
import type { NextApiRequest, NextApiResponse } from "next";

//!Route for getting All Products from Database

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  try {
    switch (method) {
      case "GET":
        const {allProducts, expensiveProducts}  = await getProducts();
        res.status(200).json({ allProducts, expensiveProducts });
        break;
      case "DELETE":
        await deleteAllProducts();
        res.status(200).json("All Products Deleted!");
        break;
      default:
        res.status(405).json({ message: "Method Not Allowed" });
        break;
    }
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
}
