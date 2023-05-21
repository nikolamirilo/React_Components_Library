import React, { createContext, useContext } from "react";
import useSWR from "swr";

const ProductsContext = createContext(null);

export const useProductsContext = () => {
  return useContext(ProductsContext);
};

export default function ProductsContextProvider({ children }: { children: React.ReactNode }) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const {
    data: allProducts,
    error,
    isLoading,
  } = useSWR("http://localhost:3000/api/products", fetcher, { revalidateOnMount: true });
  return <ProductsContext.Provider value={{ allProducts, isLoading, error }}>{children}</ProductsContext.Provider>;
}
