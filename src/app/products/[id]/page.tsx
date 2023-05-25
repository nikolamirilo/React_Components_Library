"use client";
import { SingleProductProps } from "@/typescript/interfaces/pages";
import React from "react";

export async function getData(id: string) {
  const response = await fetch(`http://localhost:3000/api/products/${id}`, { cache: "force-cache" });
  return response.json();
}
const SingleProduct: React.FC<SingleProductProps> = async ({ params: { id } }: { params: { id: string } }) => {
  const singleProductData = getData(id);
  const singleProduct = await singleProductData;
  return (
    <main id="single-product">
      <h1>Single Product Page</h1>
      <p>Product Name: {singleProduct.title}</p>
      <p>Product Description: {singleProduct.description}</p>
      <p>Product Price: {singleProduct.price}</p>
    </main>
  );
};

export default SingleProduct;
