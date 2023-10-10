import { Document, ObjectId, WithId } from "mongodb";

//User
export interface User {
    email: string | null;
    username: string | null;
    password: string | null;
    image: string | null;
}
export const initialUserState: User = {
    email: "nikola.mirilo@gmail.com",
    username: "nikola.mirilo",
    password: "react123",
    image: "https://assets.stickpng.com/thumbs/585e4beacb11b227491c3399.png",
};
//Product
export interface Product extends WithId<Document> {
    title: string;
    description: string;
    price: string;
    user: User;
}
export const initialProductState: Product = {
    _id: new ObjectId(),
    title: "",
    description: "",
    price: "",
    user: initialUserState,
};
