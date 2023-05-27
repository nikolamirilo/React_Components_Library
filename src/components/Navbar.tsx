"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../public/images/logo.png";
import { useGeneralContext } from "@/context/GeneralContext";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar">
      <div className="logo">
        <Image src={logo} alt="Logo" style={{ margin: "0.5vh 0" }} priority />
      </div>
      <label
        className="menu-button-container"
        id={isOpen ? "open" : "closed"}
        onClick={() => {
          if (isOpen) {
            setIsOpen(false);
          } else {
            setIsOpen(true);
          }
        }}
      >
        <div className="menu-button"></div>
      </label>
      <div className="links">
        <Link
          href="/"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Home
        </Link>
        <Link
          href="/products"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Products
        </Link>
        <Link
          href="/log-in"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Log In
        </Link>
        <Link
          href="/sign-up"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Sign Up
        </Link>
        <Link
          href="/contact"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
