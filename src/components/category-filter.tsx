import { CATEGORIES } from "@/data/products";

type CategoryFilterProps = {
  activeFilter: string;
  onFilterChange: (category: string) => void;
};

export function CategoryFilter({
  activeFilter,
  onFilterChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          onClick={() => onFilterChange(cat)}
          className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors hover:cursor-pointer ${
            activeFilter === cat
              ? "border-zinc-900 bg-zinc-900 text-white"
              : "border-zinc-300 bg-white text-zinc-600 hover:border-zinc-400 hover:text-zinc-900"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
