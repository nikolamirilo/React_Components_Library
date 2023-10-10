"use client";
import { CardProps } from "typescript/interfaces/components";
import React from "react";

const Card: React.FC<CardProps> = ({ title, subtitle, price, user, location, id }) => {
    return (
        <div
            className="card"
            onClick={() => {
                window.location.href = `/products/${id}`;
            }}
        >
            <div className="card-text">
                <h2>{title}</h2>
                <p>{subtitle}</p>
                <span>{price}$</span>
                <p>Location: {location}</p>
                {user ? <p>User: @{user}</p> : null}
            </div>
        </div>
    );
};
export default Card;
