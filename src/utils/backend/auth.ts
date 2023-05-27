import clientPromise from "@/lib/mongodb";

export const checkIfUserIsAuthenticated = async (username: string) => {
  try {
    const client = await clientPromise;
    const db = client.db("Used_Cars");
    const allUsers = (await db.collection("users").find({}).toArray()).sort((a, b) => a.id - b.id);
    return allUsers.some((user) => user.username === username);
  } catch (error) {
    console.log(error.message);
  }
};
