"use client";
import React, { createContext, useContext, useReducer } from "react";

const AuthContext = createContext(null);

export const useAuthContext = () => {
  return useContext(AuthContext);
};

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const initialUserState = {
    username: "",
    password: "",
    image:
      "https://assets.stickpng.com/thumbs/585e4beacb11b227491c3399.png",
  };
  const [user, setUser] = useReducer(
    (user, updates) => ({
      ...user,
      ...updates,
    }),
    initialUserState
  );
  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};
export default AuthContextProvider;
