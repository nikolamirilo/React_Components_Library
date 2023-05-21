import { OfferCardProps } from "@/typescript/interfaces/components";
import Image from "next/image";
import React from "react";

const OfferCard: React.FC<OfferCardProps> = ({ type, image, text, title }) => {
  return (
    <div
      className={
        type === "grid" ? "offer-card" : type === "grid-reverse" ? "offer-card-reverse" : undefined
      }
    >
      {type === "grid" ? (
        <div className="left-content">
          <div className="image">
            <Image src={image} alt="Offer card" fill objectFit="cover" />
          </div>
        </div>
      ) : type === "grid-reverse" ? (
        <div className="right-content">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      ) : null}
      {type === "grid" ? (
        <div className="right-content">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      ) : type === "grid-reverse" ? (
        <div className="left-content">
          <div className="image">
            <Image src={image} alt="Offer card" fill objectFit="cover" />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default OfferCard;
