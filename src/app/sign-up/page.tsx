"use client";
import AuthForm from "@/components/AuthForm";
import React from "react";

const SignUp: React.FC = () => {
  const handleSignUp = () => {};
  return (
    <main id="sign-up">
      <AuthForm type="sign-up" 
      handleSubmitForm={handleSignUp}
      // username={credentials.username}
      // handleUsernameChange={(e) => {
      //     setCredentials({ username: e.target.value });
      //   }}
      // password={credentials.password}
      // handlePasswordChange={(e) => {
      //     setCredentials({ password: e.target.value });
      //   }} 
        
        />
    </main>
  );
};

export default SignUp;
