import React, { createContext, useContext } from "react";

const GeneralContext = createContext(null);

export const useGeneralContext = () => {
  return useContext(GeneralContext);
};

export default function GeneralContextProvider({ children }: { children: React.ReactNode }) {
  return <GeneralContext.Provider value={{}}>{children}</GeneralContext.Provider>;
}
