"use client";

import SearchRecipes from "@/components/recipes/search-recipes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Image from "next/image";

export default function Home() {
  const client = new QueryClient()

  return (
    <>
      <div>
        <QueryClientProvider client={client}>
          <SearchRecipes />
        </QueryClientProvider>
      </div>
    </>
  );
}
