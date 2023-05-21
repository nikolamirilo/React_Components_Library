import clientPromise from "@/lib/mongodb";

export const getAllProducts = async () => {
  try {
    const client = await clientPromise;
    const db = client.db("Used_Cars");
    const allProducts = (await db.collection("products").find({}).toArray()).sort(
      (a, b) => a.id - b.id
    );
    const length = allProducts.length;
    return { allProducts, length };
  } catch (error) {
    console.log(error.message);
  }
};
export const deleteAllProducts = async () => {
  try {
    const client = await clientPromise;
    const db = client.db("Used_Cars");
    db.collection("products").deleteMany({});
  } catch (error) {
    console.log(error.message);
  }
};

export const getSingleProduct = async (id: number) => {
  try {
    const { allProducts } = await getAllProducts();
    const singleProduct = allProducts.find((singleProduct) => singleProduct._id == id);
    return { singleProduct };
  } catch (error) {
    console.log(error.message);
  }
};

export const addNewProduct = async (product) => {
  try {
    const client = await clientPromise;
    const db = client.db("Used_Cars");
    const newProduct = await db.collection("products").insertOne(product);
  } catch (error) {
    console.log(error.message);
  }
};
export const deleteProduct = async (productId) => {
  try {
    const client = await clientPromise;
    const db = client.db("Used_Cars");
    const productToDelete = await db.collection("products").deleteOne({ _id: productId });
  } catch (error) {
    console.log(error.message);
  }
};
export const updateProduct = async (productInputData, productId) => {
  try {
    const client = await clientPromise;
    const db = client.db("Used_Cars");
    const result = await db.collection("products").updateOne(
      { _id: productId },
      {
        $set: {
          title: productInputData.title,
        },
      },
      { returnOriginal: false }
    );
  } catch (error) {
    console.log(error.message);
  }
};
