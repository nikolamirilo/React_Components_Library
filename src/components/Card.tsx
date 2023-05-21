import { CardProps } from "@/typescript/interfaces/components";
import { useRouter } from "next/navigation";
import React from "react";

const Card: React.FC<CardProps> = ({ title, subtitle, price, id }) => {
  const router = useRouter();
  return (
    <div
      className="card"
      onClick={() => {
        router.push(`/products/${id}`);
      }}
    >
      <div className="card-text">
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <span>{price}$</span>
      </div>
    </div>
  );
};
export default Card;
