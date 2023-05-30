"use client";
import AuthForm from "@/components/AuthForm";
import { useAuthContext } from "@/context/AuthContext";
import axios from "axios";
import React, { useReducer } from "react";
import { auth, googleProvider } from "@/utils/firebase";

const LogIn: React.FC = () => {
    const { user, setUser } = useAuthContext();
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
    const handleGoogleSignIn = async () => {
        try {
            await auth.signInWithPopup(googleProvider);
            // The user has successfully signed in with Google
        } catch (error) {
            console.log(error.message);
        }
    };
    const handleLogIn = (e: any) => {
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
                handleUsernameChange={(e: any) => {
                    setCredentials({ username: e.target.value });
                }}
                password={credentials.password}
                handlePasswordChange={(e: any) => {
                    setCredentials({ password: e.target.value });
                }}
            />
            <button onClick={handleGoogleSignIn}>Google</button>
        </main>
    );
};

export default LogIn;
