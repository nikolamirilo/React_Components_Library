"use client";
import React, { createContext, useContext } from "react";
import GeneralContextProvider from "./GeneralContext";
import ProductsContextProvider from "./ProductsContext";
import AuthContextProvider from "./AuthContext";
import { GeneralContextProviderProps } from "@/typescript/types/types";

const MainContext = createContext({});

export const useMainContext = () => {
  return useContext(MainContext);
};

const MainContextProvider:React.FC<GeneralContextProviderProps> = ({ children }) => {
  return (
    <MainContext.Provider value={{}}>
      <AuthContextProvider>
        <ProductsContextProvider>
          <GeneralContextProvider>{children}</GeneralContextProvider>
        </ProductsContextProvider>
      </AuthContextProvider>
    </MainContext.Provider>
  );
};
export default MainContextProvider;
