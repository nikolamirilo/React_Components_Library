import { i18n } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import logo from "../../public/images/logo.png";

const Navbar: React.FC = () => {
  const router = useRouter();
  const { route, asPath, query } = router;
  const [isOpen, setIsOpen] = useState(false);

  async function handleChangeLanguage(lang: string) {
    if (i18n) {
      i18n.changeLanguage(lang);
      await router.push({ pathname: route, query }, asPath, { locale: lang });
      window.location.reload();
    }
  }
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
