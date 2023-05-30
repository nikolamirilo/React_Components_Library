import { Product } from "../interfaces/entities";

export interface ProductsProps {
  data: {
    allProducts: Product[];
  };
  isLoading: boolean;
}
export interface HeroProps {
  type: string;
  title: string;
  subtitle: string;
  image: string;
}
