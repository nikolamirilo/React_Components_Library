import { checkIfUserIsAuthenticated } from "@/utils/backend/auth";
import { NextApiRequest, NextApiResponse } from "next";

//! Route for Log-In

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { method, body } = req;
    if (method === "POST") {
      const { username } = body; // Extract the username from req.body
      let isUserAuthorized = await checkIfUserIsAuthenticated(username);
      if (isUserAuthorized) {
        res.json({ message: `User ${username} is Authorized` });
      } else {
        res.json({ message: `User ${username} is Not Authorized` });
      }
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
