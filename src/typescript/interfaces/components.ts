import type { StaticImageData } from "next/image";
import React from "react";

export interface CardProps {
  title: string;
  subtitle: string;
  price: string;
  user: string;
  id: string;
  location: string;
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
  username: string;
  handleUsernameChange(): void;
  email: string;
  handleEmailChange(): void;
  password: string;
  handlePasswordChange(): void;
  confirmPassword: string;
  handleConfirmPasswordChange(): void;
}
export interface FormProps {}
export interface OfferCardProps {
  type: string;
  title: string;
  text: string;
  image: string;
}
