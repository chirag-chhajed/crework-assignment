import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product, Category } from "@/types/index";

interface ProductsResponse {
  products: Product[];
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/products" }),
  endpoints: (build) => ({
    getProducts: build.query<
      ProductsResponse,
      { page?: number; category?: Category }
    >({
      query: (params) => ({
        url: "/",
        params: {
          page: params.page,
          category: params.category,
        },
      }),
    }),
  }),
});

export const { useGetProductsQuery, useLazyGetProductsQuery } = productApi;
