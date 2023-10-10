import clientPromise from "lib/mongodb";

export const logIn = async (username: string, password: string) => {
  try {
    const client = await clientPromise;
    const db = client.db("Used_Cars");
    const allUsers = await db.collection("users").find({}).toArray();
    const isUsernameExisting = allUsers.some((user) => user.username === username);
    const isPasswordSame = allUsers.some((user) => user.password === password);
    if (isUsernameExisting && isPasswordSame) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log((error as Error).message);
  }
};
export const signUp = async (user) => {
  try {
    const client = await clientPromise;
    const db = client.db("Used_Cars");
    const newProduct = await db.collection("users").insertOne(user);
  } catch (error) {
    console.log((error as Error).message);
  }
};
