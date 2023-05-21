import { ReactNode } from "react";

export type GeneralContextProviderProps = {
  children: ReactNode;
};
export type Product = {
  _id: string;
  title: string;
  description: string;
  price: string;
};
