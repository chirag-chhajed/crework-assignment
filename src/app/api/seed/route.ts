import { faker } from "@faker-js/faker";
import { NextResponse } from "next/server";

type Category =
  | "Product Design"
  | "Guesstimates"
  | "Product Strategy"
  | "Behavioral"
  | "Analytics"
  | "System Design"
  | "Technical";

type Product = {
  id: string;
  question: string;
  categories: Category[];
};

const products: Product[] = [];

export async function GET() {
  for (let i = 0; i < 1000; i++) {
    const product: Product = {
      id: faker.string.nanoid(),
      question: faker.lorem.sentence({ min: 5, max: 10 }),
      categories: faker.helpers.arrayElements(
        [
          "Product Design",
          "Guesstimates",
          "Product Strategy",
          "Behavioral",
          "Analytics",
          "System Design",
          "Technical",
        ],
        2
      ),
    };
    products.push(product);
  }
  return NextResponse.json(products);
}
