"use client";
import AuthForm from "components/AuthForm";
import React, { useReducer, useState } from "react";

const SignUp: React.FC = () => {
    const handleSignUp = () => {};
    const initialData = {
        username: "",
        password: "",
    };
    const [credentials, setCredentials] = useReducer(
        (credentials: any, updates: any) => ({
            ...credentials,
            ...updates,
        }),
        initialData
    );
    return (
        <main id="sign-up">
            <AuthForm
                type="sign-up"
                handleSubmitForm={handleSignUp}
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

export default SignUp;
