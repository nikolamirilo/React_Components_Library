import { useTranslation } from "next-i18next";
import Image from "next/image";
import React from "react";
import BW from "../../public/images/BW.webp";

const About: React.FC = () => {
  return (
    <section id="about">
      <div className="content">
        <p>
          When looking at an unfinished design — whether it's a web graphic, newspaper, or magazine layout — the content
          will always draw people's attention. Instead of using repeating English text, like the words "Sample Text,
          Sample Text…" over and over, Lorem Ipsum uses a variety of words, with different lengths that reflect how
          writing actually looks. However, many versions of today's Lorem Ipsum text are altered to be randomized, so
          that text doesn't repeat as often. They may also employ a humorous take on Latin words, turning them into
          made-up English versions. Popular applications like Wordpress, Google Docs, and Microsoft Word all have
          built-in Lorem Ipsum features
        </p>
      </div>
      <div className="image">
        <Image src={BW} alt="Belgrade" />
      </div>
    </section>
  );
};

export default About;
