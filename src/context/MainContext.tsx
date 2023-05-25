"use client";
import React, { createContext, useContext } from "react";
import GeneralContextProvider from "./GeneralContext";
import ProductsContextProvider from "./ProductsContext";
import AuthContextProvider from "./AuthContext";

const MainContext = createContext(null);

export const useMainContext = () => {
  return useContext(MainContext);
};

export default function MainContextProvider({ children }: { children: React.ReactNode }) {
  return (
    <MainContext.Provider value="">
      <AuthContextProvider>
        <ProductsContextProvider>
          <GeneralContextProvider>{children}</GeneralContextProvider>
        </ProductsContextProvider>
      </AuthContextProvider>
    </MainContext.Provider>
  );
}
