// app/api/products/route.ts

import { NextResponse } from "next/server";
import { products } from "@/data/products";

type Category =
  | "Product Design"
  | "Guesstimates"
  | "Product Strategy"
  | "Behavioral"
  | "Analytics"
  | "System Design"
  | "Technical";

const itemsPerPage = 10; // Number of items to show per page

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page")
    ? parseInt(searchParams.get("page") || "1")
    : 1;
  const category = searchParams.get("category") as Category | undefined;

  const filteredProducts = category
    ? products.filter((product) => product.categories.includes(category))
    : products;

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const hasNextPage = page < totalPages;
  const hasPrevPage = page > 1;

  return NextResponse.json({
    products: paginatedProducts,
    currentPage: page,
    totalPages,
    hasNextPage,
    hasPrevPage,
  });
}
