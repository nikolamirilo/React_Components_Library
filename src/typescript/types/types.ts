import { ReactNode } from "react";

export type GeneralContextProviderProps = {
  children: ReactNode;
};

//Product
export type Product = {
  _id: string;
  title: string;
  description: string;
  price: string;
};
export const initialProductState: Product = {
  _id: "",
  title: "",
  description: "",
  price: "",
};

//User
export type User = {
  email: string;
  username: string;
  password: string;
  image: string;
}
export const initialUserState: User = {
  email: "nikola.mirilo@gmail.com",
  username: "nikola.mirilo",
  password: "react123",
  image: "https://assets.stickpng.com/thumbs/585e4beacb11b227491c3399.png",
};