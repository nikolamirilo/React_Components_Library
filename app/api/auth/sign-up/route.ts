import { NextApiRequest, NextApiResponse } from "next";
import { signUp } from "utils/backend/auth";

//!Route for Sign-Up

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { method, body } = req;
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Cache-Control", "max-age=180000");
    if (method === "POST") {
      await signUp(body);
    }
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
}
