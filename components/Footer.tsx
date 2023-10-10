"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import logo from "../public/images/logo.png";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="left-content">
                <Image src={logo} alt="Logo" />
            </div>
            <div className="middle-content">
                <div className="email">
                    <label htmlFor="email">Email:</label>
                    <Link href="mailto:ultra.tim@gmail.com" id="email">
                        v-products@gmail.com
                    </Link>
                </div>
                <div className="phone">
                    <label htmlFor="phone">Phone:</label>
                    <Link href="tel:+381 60 42 78 175" id="phone">
                        +381 60 42 78 175
                    </Link>
                </div>
            </div>
            <div className="right-content">
                <div className="social-media">
                    <button
                        onClick={() => {
                            window.location.href = "https://www.instagram.com/ultra_tim_s/";
                        }}
                    >
                        <AiOutlineInstagram />
                    </button>
                    <button>
                        <FaFacebookF />
                    </button>
                </div>
                <p>Copyright @2023 V-Products</p>
            </div>
        </footer>
    );
};

export default Footer;
