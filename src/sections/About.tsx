"use client";
import Image from "next/image";
import React from "react";
import city from "../../public/images/city.jpeg";

const About: React.FC = () => {
  return (
    <section id="about">
      <div className="content">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti itaque iusto, nostrum praesentium excepturi
          magni error fuga tenetur incidunt natus eius exercitationem, nam ipsa. Autem nisi doloremque minus molestiae
          quia!
        </p>
      </div>
      <div className="image">
        <Image src={city} alt="Belgrade" />
      </div>
    </section>
  );
};

export default About;
