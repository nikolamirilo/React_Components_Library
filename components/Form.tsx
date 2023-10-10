"use client";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import React, { useRef, useState } from "react";
import logo from "../public/images/logo.png";
import { FormProps } from "../typescript/interfaces/components";

const Form: React.FC<FormProps> = () => {
    const [isFormSubmited, setIsFormSubmited] = useState(false);

    const form = useRef<HTMLFormElement>(null);

    const service_id = "service_0cttsm8";
    const template_id = "template_v2tzetg";
    const public_key = "oT1XBMBTSrIaWiqq4";

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const nameInput = document.getElementById("nameInput") as HTMLInputElement;
        const emailInput = document.getElementById("emailInput") as HTMLInputElement;
        const subjectInput = document.getElementById("subjectInput")! as HTMLInputElement;
        const messageInput = document.getElementById("messageInput")! as HTMLInputElement;

        emailjs.sendForm(service_id, template_id, form.current!, public_key).then(
            (result) => {
                setIsFormSubmited(true);
                nameInput.value = "";
                emailInput.value = "";
                subjectInput.value = "";
                messageInput.value = "";
            },
            (error) => {
                alert(`Error`);
                console.log(error);
            }
        );
    };

    if (isFormSubmited) {
        alert("Poslata poruka");
    }

    return (
        <div className="form">
            <form className="left-content" ref={form} onSubmit={handleFormSubmit}>
                <h1>Contact Us</h1>
                <input type="text" id="nameInput" placeholder="Enter name" name="name" required={true} />
                <input type="email" id="emailInput" placeholder="Enter address" name="email" required={true} />
                <input type="text" id="subjectInput" placeholder="Subject" name="subject" required={true} />
                <textarea id="messageInput" required={true} name="message" placeholder="Enter Message"></textarea>
                <button type="submit">Pošalji</button>
            </form>
            <div className="right-content">
                <Image src={logo} alt="V-Products" width={140} height={140} />
            </div>
        </div>
    );
};

export default Form;
