import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default function AuthContextProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState({
    username: "nikola.mirilo",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHx8MHx8&w=1000&q=80",
  });
  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
}
