"use client";

import { useGetProductsQuery } from "@/store/features/productApi";
import { parseAsInteger, parseAsStringLiteral, useQueryState } from "nuqs";
import { Category } from "@/types/index";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const categories: Category[] = [
  "",
  "Product Design",
  "Guesstimates",
  "Product Strategy",
  "Behavioral",
  "Analytics",
  "System Design",
  "Technical",
] as const;

const Data = () => {
  const [page, setPage] = useQueryState("page", parseAsInteger.withDefault(1));
  const [category, setCategory] = useQueryState(
    "category",
    parseAsStringLiteral(categories).withDefault("")
  );
  const { data, isLoading, isFetching } = useGetProductsQuery({
    page,
    category,
  });
  const { products, hasNextPage, hasPrevPage, totalPages } = data ?? {};

  const RenderPageLinks = () => {
    const pageLinks = [];
    const maxVisiblePages = 3;

    for (let i = 1; i <= maxVisiblePages; i++) {
      const pageNumber = page + i - 2;
      // @ts-ignore
      if (pageNumber > 0 && pageNumber <= totalPages) {
        pageLinks.push(
          <PaginationItem key={pageNumber}>
            <PaginationLink
              isActive={pageNumber === page}
              className={cn(
                "text-white border border-white rounded bg-blackGray hover:bg-brightYellow hover:border-brightYellow font-normal text-base leading-5 tagline",
                pageNumber === page &&
                  "border border-brightYellow text-brightYellow"
              )}
              href={`?page=${pageNumber}&category=${category}`}
            >
              {pageNumber}
            </PaginationLink>
          </PaginationItem>
        );
      }
    }

    return pageLinks;
  };
  return (
    <div>
      <div className="flex flex-wrap gap-4 mb-4">
        {categories.map((categoryMap) => (
          <button
            key={categoryMap}
            type="button"
            aria-label={categoryMap === "" ? "All" : categoryMap}
            className={cn(
              "rounded text-white text-sm font-normal leading-5 border border-white bg-blackGray py-2 px-4 tagline",
              categoryMap === category && "bg-white text-blackGray"
            )}
            onClick={() => {
              setCategory(categoryMap);
              setPage(1);
            }}
          >
            {categoryMap === "" ? "All" : categoryMap}
          </button>
        ))}
      </div>
      <div className="space-y-3 md:space-y-4">
        {(isLoading || isFetching) &&
          Array.from({ length: 10 }).map((_, index) => (
            <div key={`skeleton ${index}`} className="space-y-2">
              <Skeleton className="h-9 w-full max-w-screen-sm" />
              <div className="flex items-center justify-start gap-4">
                <Skeleton className="h-6 w-24" />
                <Skeleton className="h-6 w-24" />
              </div>
            </div>
          ))}
        {products?.map((product) => (
          <div key={product.id} className="space-y-2">
            <p className="text-lg font-normal leading-6 text-white tagline ">
              {product.question}
            </p>
            <div className="flex items-center justify-start gap-4">
              <h4 className="text-coolGray tagline font-inter font-normal leading-5">
                {product.categories[0]}
              </h4>
              <h4 className="text-coolGray tagline font-inter font-normal leading-5">
                {product.categories[1]}
              </h4>
            </div>
          </div>
        ))}
      </div>
      <Pagination className="items-center gap-5 mt-4">
        <p className="hidden md:block text-white leading-5 text-base">
          Showing {page} of {totalPages} pages
        </p>
        <PaginationContent className="gap-4 flex-wrap">
          {hasPrevPage && (
            <PaginationItem>
              <PaginationPrevious
                className="rounded bg-brightYellow border border-brightYellow hover:bg-current/90 text-blackGray text-base font-normal leading-5 tagline"
                href={`?page=${page - 1}&category=${encodeURIComponent(
                  category
                )}`}
              />
            </PaginationItem>
          )}
          <RenderPageLinks />
          {/* @ts-ignore */}
          {!(page === totalPages || page === totalPages - 1) && (
            <>
              <PaginationItem>
                <PaginationEllipsis className="text-white" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  className={cn(
                    "text-white border border-white rounded bg-blackGray hover:bg-brightYellow hover:border-brightYellow font-normal text-base leading-5 tagline",
                    totalPages === page &&
                      "border border-brightYellow text-brightYellow"
                  )}
                  href={`?page=${totalPages}&category=${encodeURIComponent(
                    category
                  )}`}
                >
                  {totalPages}
                </PaginationLink>
              </PaginationItem>
            </>
          )}

          {hasNextPage && (
            <PaginationItem>
              <PaginationNext
                className="rounded bg-brightYellow border border-brightYellow hover:bg-current/90 text-blackGray text-base font-normal leading-5 tagline"
                href={`?page=${page + 1}&category=${encodeURIComponent(
                  category
                )}`}
              />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default Data;
