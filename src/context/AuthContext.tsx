"use client";
import React, { createContext, useContext, useReducer, useEffect } from "react";

const AuthContext = createContext(null);

export const useAuthContext = () => {
  return useContext(AuthContext);
};

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const initialUserState = {
    username: "user",
    password: "",
    image: "https://assets.stickpng.com/thumbs/585e4beacb11b227491c3399.png",
  };
  const [user, setUser] = useReducer(
    (user, updates) => ({
      ...user,
      ...updates,
    }),
    initialUserState
  );
  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser !== "" || !currentUser !== undefined || currentUser !== null || currUser !== "Null") {
      setUser(currentUser);
    } else {
      setUser("");
    }
  }, [user]);
  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};
export default AuthContextProvider;
