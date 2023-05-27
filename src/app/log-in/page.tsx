"use client";
import AuthForm from "@/components/AuthForm";
import React from "react";

const LogIn: React.FC = () => {
  const handleLogIn = () => {};
  return (
    <main id="log-in">
      <AuthForm type="log-in" handleSubmitForm={handleLogIn} />
    </main>
  );
};

export default LogIn;
