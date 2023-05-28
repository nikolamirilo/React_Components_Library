"use client";
import { AuthFormProps } from "@/typescript/interfaces/components";
import React from "react";

const AuthForm: React.FC<AuthFormProps> = ({
  type,
  handleSubmitForm,
  username,
  handleUsernameChange,
  email,
  handleEmailChange,
  password,
  handlePasswordChange,
  confirmPassword,
  handleConfirmPasswordChange,
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
      {type === "sign-up" ? (
        <input
          type="email"
          className="email"
          placeholder="Enter your email*"
          value={email}
          onChange={handleEmailChange}
        />
      ) : null}
      <input
        type="password"
        className="password"
        placeholder="Enter your password*"
        value={password}
        onChange={handlePasswordChange}
      />
      {type === "sign-up" ? (
        <input
          type="password"
          className="confirm-password"
          placeholder="Confirm your password*"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
      ) : null}

      <button className="login-button" onClick={handleSubmitForm}>
        Log In
      </button>
    </form>
  );
};

export default AuthForm;
