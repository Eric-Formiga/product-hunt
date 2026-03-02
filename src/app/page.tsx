"use client";

import { useState } from "react";
import { products } from "@/data/products";
import { CategoryFilter } from "@/components/category-filter";
import { ProductList } from "@/components/product-list";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("Trending Topics");

  const filtered =
    activeFilter === "Trending Topics"
      ? products
      : products.filter((p) => p.tags.includes(activeFilter));

  const sorted = [...filtered].sort((a, b) => b.upvoteCount - a.upvoteCount);

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <CategoryFilter
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      <h2 className="mt-8 text-xl font-bold text-zinc-900">
        O Próximo Grande App 🚀
      </h2>

      <ProductList products={sorted} />
    </main>
  );
}
