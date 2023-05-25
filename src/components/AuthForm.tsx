"use client";
import { AuthFormProps } from "@/typescript/interfaces/components";
import React from "react";

const AuthForm: React.FC<AuthFormProps> = ({ type, handleSubmitForm }) => {
  return (
    <form className="auth-form">
      <h2>{type === "log-in" ? "Log In" : "Sign Up"}</h2>
      <input type="email" className="email" placeholder="Enter your email*" />
      <input type="password" className="password" placeholder="Enter your password*" />
      <button className="login-button" onClick={handleSubmitForm}>
        Log In
      </button>
    </form>
  );
};

export default AuthForm;
