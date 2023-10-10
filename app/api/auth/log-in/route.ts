import { NextApiRequest, NextApiResponse } from "next";
import { logIn } from "utils/backend/auth";

//! Route for Log-In

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { method, body } = req;
    if (method === "POST") {
      const { username, password } = body; // Extract the username from req.body
      res.setHeader("Content-Type", "application/json");
      res.setHeader("Cache-Control", "max-age=180000");
      const isUserAuthorized = await logIn(username, password);
      if (isUserAuthorized) {
        res.status(200).json({ message: `User ${username} is Authorized` });
      } else {
        res.status(401).json({ message: `User ${username} is Not Authorized` });
      }
    }
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
}
