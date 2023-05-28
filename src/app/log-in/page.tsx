"use client";
import { useReducer } from "react";
import AuthForm from "@/components/AuthForm";
import axios from "axios";
import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/router";

const LogIn: React.FC = () => {
  const { setUser, user } = useAuthContext();
  const initialCredentialsState = {
    username: "",
    password: "",
  };
  const [credentials, setCredentials] = useReducer(
    (credentials, updates) => ({
      ...credentials,
      ...updates,
    }),
    initialCredentialsState
  );
  const handleLogIn = (e) => {
    e.preventDefault();
    console.log(credentials);
    axios
      .post("http://localhost:3000/api/auth/log-in", credentials)
      .then(async function (response) {
        console.log(response);
        setUser({ username: credentials.username });
        await localStorage.setItem("currentUser", credentials.username);
        window.location.href = "/";
      })
      .catch(function (error) {
        alert("Username or Password Incorrect");
        console.log(error);
      });
  };
  return (
    <main id="log-in">
      <AuthForm
        type="log-in"
        handleSubmitForm={handleLogIn}
        username={credentials.username}
        handleUsernameChange={(e) => {
          setCredentials({ username: e.target.value });
        }}
        password={credentials.password}
        handlePasswordChange={(e) => {
          setCredentials({ password: e.target.value });
        }}
      />
    </main>
  );
};

export default LogIn;
