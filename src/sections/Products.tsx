"use client";
import Card from "@/components/Card";
import { ProductsProps } from "@/typescript/interfaces/sections";
import React from "react";

const Products: React.FC<ProductsProps> = ({ data }) => {
  return (
    <section id="products">
      <h1>{data && Products}</h1>
      <div className="cards-container">
        {data
          ? data.allProducts.map((item, idx) => {
              return (
                <Card
                  key={idx}
                  id={item._id}
                  title={item.title}
                  subtitle={item.description}
                  price={item.price}
                  location={item?.location}
                  user={item.user?.username}
                />
              );
            })
          : null}
      </div>
    </section>
  );
};

export default Products;
