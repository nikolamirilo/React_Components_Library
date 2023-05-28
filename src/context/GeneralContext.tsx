"use client";
import { GeneralContextProviderProps } from "@/typescript/types/types";
import React, { createContext, useContext } from "react";

const GeneralContext = createContext({});

export const useGeneralContext = () => {
  return useContext(GeneralContext);
};

const GeneralContextProvider:React.FC<GeneralContextProviderProps> = ({ children }) => {
  return <GeneralContext.Provider value={{}}>{children}</GeneralContext.Provider>;
};
export default GeneralContextProvider;
