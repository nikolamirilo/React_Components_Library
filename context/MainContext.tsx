"use client";
import React, { createContext, useContext } from "react";
import GeneralContextProvider from "./GeneralContext";
import ProductsContextProvider from "./ProductsContext";
import { GeneralContextProviderProps } from "typescript/types/types";

const MainContext = createContext({});

export const useMainContext = () => {
    return useContext(MainContext);
};

const MainContextProvider: React.FC<GeneralContextProviderProps> = ({ children }) => {
    return (
        <MainContext.Provider value={{}}>
            <ProductsContextProvider>
                <GeneralContextProvider>{children}</GeneralContextProvider>
            </ProductsContextProvider>
        </MainContext.Provider>
    );
};
export default MainContextProvider;
