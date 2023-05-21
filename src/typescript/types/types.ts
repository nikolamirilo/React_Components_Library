import { ReactNode } from "react";

export type Service = {
  title: string;
  subtitle: string;
};
export type GeneralContextProviderProps = {
  children: ReactNode;
};
export type Product = {
  name: string;
  description: string;
  price: string;
};
