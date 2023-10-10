"use client";
// import { useAuthContext } from "context/AuthContext";
import axios from "axios";
import React, { MouseEventHandler, useReducer } from "react";
import { Product } from "typescript/interfaces/entities";

const AddNewProduct: React.FC = () => {
    const user = {
        username: "nikola.mirilo",
    };
    const initialProductState = {
        title: "",
        description: "",
        price: "",
        location: "",
        user: user,
    };
    const [product, setProduct] = useReducer(
        (post: Product, updates: any) => ({
            ...post,
            ...updates,
        }),
        initialProductState
    );
    const handleAddNewProduct = (e: any) => {
        e.preventDefault();
        axios
            .post("http://localhost:3000/api/products/addProduct", product)
            .then(function (response) {
                console.log(product);
                alert("Product added to Database");
                window.location.reload();
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    return (
        <form className="add-new-product">
            <input
                type="text"
                placeholder="Enter Product Name"
                value={product.title}
                onChange={(e) => {
                    setProduct({ title: e.target.value });
                }}
            />
            <input
                type="text"
                placeholder="Enter Product Description"
                value={product.description}
                onChange={(e) => {
                    setProduct({ description: e.target.value });
                }}
            />
            <input
                type="text"
                placeholder="Enter Product Price"
                value={product.price}
                onChange={(e) => {
                    setProduct({ price: e.target.value });
                }}
            />
            <input
                type="text"
                placeholder="Enter Product Location"
                value={product.location}
                onChange={(e) => {
                    setProduct({ location: e.target.value });
                }}
            />
            <button onClick={handleAddNewProduct}>Add new Product</button>
        </form>
    );
};

export default AddNewProduct;
