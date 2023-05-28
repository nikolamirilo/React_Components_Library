"use client";
import { GeneralContextProviderProps, User, initialUserState } from "@/typescript/types/types";
import React, { createContext, useContext, useEffect, useReducer } from "react";

const AuthContext = createContext({});

export const useAuthContext = () => {
  return useContext(AuthContext);
};


const AuthContextProvider:React.FC<GeneralContextProviderProps> = ({ children }) => {
  const [user, setUser] = useReducer(
    (user, updates) => ({
      ...user,
      ...updates,
    }),
    initialUserState
  );

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (
      currentUser !== "" ||
      currentUser !== undefined ||
      currentUser !== null ||
      currentUser !== "Null"
    ) {
      setUser({ username: currentUser });
    } else {
      setUser({ username: "" });
    }
  }, []);
  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};
export default AuthContextProvider;
