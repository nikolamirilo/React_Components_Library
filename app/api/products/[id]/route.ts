import { deleteProduct, getSingleProduct, updateProduct } from "utils/backend/products";
import { NextApiRequest, NextApiResponse } from "next";

//!Route for getting Single Product from Database

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { method, body } = req;
    const { title } = body;
    const id = req.query.id;
    if (typeof id === "string") {
      switch (method) {
        case "GET":
          // Process a GET request - get specific project data
          const data = await getSingleProduct(id);
          const singleProduct = data ? data.singleProduct : {};
          res.status(200).json(singleProduct);
          break;
        case "PUT":
          //* Process a PUT request - update existing product
          await updateProduct(title, id);
          res.status(200).json("PUT request of product " + id);
          break;
        case "DELETE":
          //* Process a DELETE request - delete product
          await deleteProduct(id);
          res.status(200).json("DELETED product with id " + id);
          break;
        default:
          break;
      }
    }
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
}
