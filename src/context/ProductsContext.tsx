"use client";
import { GeneralContextProviderProps } from "@/typescript/types/types";
import React, { createContext, useContext } from "react";
import useSWR from "swr";

const ProductsContext = createContext({});

export const useProductsContext = () => {
  return useContext(ProductsContext);
};

const ProductsContextProvider:React.FC<GeneralContextProviderProps> = ({ children }) => {
  const fetcher = (url: any) => fetch(url).then((res) => res.json());
  const {
    data: allProducts,
    error,
    isLoading,
  } = useSWR("http://localhost:3000/api/products", fetcher, { revalidateOnMount: true });
  return <ProductsContext.Provider value={{ allProducts, isLoading, error }}>{children}</ProductsContext.Provider>;
};
export default ProductsContextProvider;
