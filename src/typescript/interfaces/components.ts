import type { StaticImageData } from "next/image";
import React from "react";

export interface CardProps {
  title: string;
  subtitle: string;
  price: string;
  id: string;
}
export interface CarouselProps {
  slides: StaticImageData[];
  index: number;
  handlePreviousSlide: React.MouseEventHandler<HTMLButtonElement>;
  handleNextSlide: React.MouseEventHandler<HTMLButtonElement>;
}
export interface AuthFormProps {
  type: string;
  handleSubmitForm(): void;
}
export interface FormProps {}
export interface OfferCardProps {
  type: string;
  title: string;
  text: string;
  image: string;
}
