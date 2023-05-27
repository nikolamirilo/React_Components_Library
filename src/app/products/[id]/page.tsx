"use client";
import { SingleProductProps } from "@/typescript/interfaces/pages";
import React, { useEffect, useState } from "react";

export async function getData(id: string) {
  const response = await fetch(`http://localhost:3000/api/products/${id}`, { cache: "no-cache" });
  return response.json();
}

const SingleProduct: React.FC<SingleProductProps> = ({ params }) => {
  const [singleProduct, setSingleProduct] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const id: string = params.id;
      const singleProductData = await getData(id);
      setSingleProduct(singleProductData);
    }
    fetchData();
  }, [params.id]);

  return (
    <main id="single-product">
      <h1>Single Product Page</h1>
      {singleProduct && (
        <>
          <p>Product Name: {singleProduct.title}</p>
          <p>Product Description: {singleProduct.description}</p>
          <p>Product Price: {singleProduct.price}</p>
        </>
      )}
    </main>
  );
};

export default SingleProduct;
