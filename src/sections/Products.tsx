import Card from "@/components/Card";
import { ProductsProps } from "@/typescript/interfaces/sections";
import React from "react";

const Products: React.FC<ProductsProps> = ({ data, isLoading }) => {
  if (isLoading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <section id="products">
        <h1>Products</h1>
        <div className="cards-container">
          {data
            ? data.allProducts.map((item, idx) => {
                return (
                  <Card key={idx} id={item._id} title={item.title} subtitle={item.description} price={item.price} />
                );
              })
            : null}
        </div>
      </section>
    );
  }
};

export default Products;
