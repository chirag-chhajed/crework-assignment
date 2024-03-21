type Category =
  | "Product Design"
  | "Guesstimates"
  | "Product Strategy"
  | "Behavioral"
  | "Analytics"
  | "System Design"
  | "Technical"
  | "";

type Product = {
  id: string;
  question: string;
  categories: Category[];
};

export { type Category, type Product };
