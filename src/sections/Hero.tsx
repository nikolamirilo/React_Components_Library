import { HeroProps } from "@/typescript/interfaces/sections";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero: React.FC<HeroProps> = ({ type, title, span, subtitle, image }) => {
  return (
    <section id="hero">
      <Image src={image} alt="Transport" fill priority />
      <div className="hero-content">
        <h2 className="title">
          {title} <span>{span}</span>
        </h2>
        <h1 className="subtitle">{subtitle}</h1>
        {type === "home" ? (
          <div className="hero-buttons">
            <Link href="#about">About Us</Link>
            <Link href="#products">Products</Link>
          </div>
        ) : null}
      </div>
    </section>
  );
};
export default Hero;
