import { GetServerSidePropsContext } from "next";
import React from "react";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = await context.params?.id;
  const response = await fetch(`http://localhost:3000/api/products/${id}`);
  const singleProduct = await response.json();
  context.res.setHeader("Cache-Control", "public, s-maxage=10, stale-while-revalidate=59");
  return {
    props: {
      singleProduct: singleProduct ? singleProduct : null,
    },
  };
}
const SingleProduct: React.FC = ({ singleProduct }) => {
  console.log(singleProduct);
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
