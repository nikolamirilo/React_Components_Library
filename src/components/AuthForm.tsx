"use client";
import { AuthFormProps } from "@/typescript/interfaces/components";
import React from "react";

const AuthForm: React.FC<AuthFormProps> = ({
  type,
  handleSubmitForm,
  username,
  password,
  handleUsernameChange,
  handlePasswordChange,
}) => {
  return (
    <form className="auth-form">
      <h2>{type === "log-in" ? "Log In" : "Sign Up"}</h2>
      <input
        type="text"
        className="username"
        placeholder="Enter your username*"
        value={username}
        onChange={handleUsernameChange}
      />
      <input
        type="password"
        className="password"
        placeholder="Enter your password*"
        value={password}
        onChange={handlePasswordChange}
      />
      <button className="login-button" onClick={handleSubmitForm}>
        Log In
      </button>
    </form>
  );
};

export default AuthForm;
