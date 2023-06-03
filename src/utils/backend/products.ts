import clientPromise from "@/lib/mongodb";
import { Product } from "@/typescript/interfaces/entities";
import { ObjectId } from "mongodb";

//Function for getting allProducts and other subsets of allProducts
export const getProducts =  async (): Promise<{ allProducts: Product[]; expensiveProducts: Product[]; }> => { 
  try {
    const client = await clientPromise;
    const db = client.db("Used_Cars");
    //Add filters to the products so it can be used on frontend
    const allProducts: Product[] = (await db.collection("products").find({}).toArray());
    const expensiveProducts: Product[] = allProducts.filter((product:Product)=> parseInt(product.price) > 750 )
    return {allProducts, expensiveProducts};
  } catch (error) {
    console.log((error as Error).message);
  }
  //Default case to return empty array
  return { allProducts: [], expensiveProducts: [] };
};
//Function for deleting all products
export const deleteAllProducts = async () => {
  try {
    const client = await clientPromise;
    const db = client.db("Used_Cars");
    db.collection("products").deleteMany({});
  } catch (error) {
    console.log((error as Error).message);
  }
};
//Function for getting single product using _id of product
export const getSingleProduct = async (id: string) => {
  try {
    const {allProducts} = await getProducts();
    const singleProduct: Product | undefined = allProducts?.find((singleProduct:Product) => singleProduct._id.toString() === id);
    return { singleProduct };
  } catch (error) {
    console.log((error as Error).message);
  }
};
//Function for adding new product
export const addNewProduct = async (product: object) => {
  try {
    const client = await clientPromise;
    const db = client.db("Used_Cars");
    const newProduct = await db.collection("products").insertOne(product);
  } catch (error) {
    console.log((error as Error).message);
  }
};
//Function for deleting one specific product using _id of product
export const deleteProduct = async (productId:string ) => {
  try {
    const client = await clientPromise;
    const id = new ObjectId(productId)
    const db = client.db("Used_Cars");
    await db.collection("products").deleteOne({ _id: id});
  } catch (error) {
    console.log((error as Error).message);
  }
};
//Function for update-ing one specific product using _id of product
export const updateProduct = async (productInputData:Product, productId: string) => {
  try {
    const client = await clientPromise;
    const id = new ObjectId(productId)
    const db = client.db("Used_Cars");
    await db.collection("products").updateOne(
      { _id:  id},
      {
        $set: {
          title: productInputData.title,
        },
      }
    );
  } catch (error) {
    console.log((error as Error).message);
  }
};
