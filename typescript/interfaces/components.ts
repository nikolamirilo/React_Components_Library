import type { StaticImageData } from "next/image";

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
  handleSubmitForm(e:any): void;
  username: string;
  handleUsernameChange(e:any): void;
  email?: string;
  handleEmailChange?(e:any): void;
  password: string;
  handlePasswordChange(e:any): void;
  confirmPassword?: string;
  handleConfirmPasswordChange?(e:Event): void;
}
export interface FormProps {}
export interface OfferCardProps {
  type: string;
  title: string;
  text: string;
  image: string;
}
