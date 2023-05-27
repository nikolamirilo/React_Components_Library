"use client";
import AuthForm from "@/components/AuthForm";
import React from "react";

const SignUp: React.FC = () => {
  const handleSignUp = () => {};
  return (
    <main id="sign-up">
      <AuthForm type="sign-up" handleSubmitForm={handleSignUp} />
    </main>
  );
};

export default SignUp;
