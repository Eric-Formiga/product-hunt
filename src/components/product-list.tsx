import type { Product } from "@/data/products";

const ICON_COLORS = [
  "bg-green-200",
  "bg-blue-200",
  "bg-yellow-200",
  "bg-purple-200",
  "bg-pink-200",
  "bg-orange-200",
  "bg-teal-200",
  "bg-red-200",
];

type ProductCardProps = {
  product: Product;
  colorClass: string;
};

function ProductCard({ product, colorClass }: ProductCardProps) {
  return (
    <div className="flex items-center gap-4 px-4 py-4 transition-colors hover:bg-zinc-50 hover:cursor-pointer">
      <div
        className={`flex h-12 w-12 shrink-0 rotate-45 items-center justify-center rounded-lg ${colorClass}`}
      >
        <div className="-rotate-45 text-lg font-bold text-zinc-700">
          {product.name.charAt(0)}
        </div>
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="font-semibold text-zinc-900">{product.name}</h3>
        <p className="truncate text-sm text-zinc-500">{product.description}</p>
        <div className="mt-1 flex gap-2">
          {product.tags.map((tag) => (
            <span key={tag} className="text-xs font-medium text-zinc-400">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <button className="flex shrink-0 flex-col items-center rounded-lg border border-zinc-200 px-3 py-2 transition-colors hover:border-orange-300 hover:bg-orange-50">
        <span className="text-sm text-orange-500">▲</span>
        <span className="text-sm font-semibold text-zinc-700">
          {product.upvoteCount}
        </span>
      </button>
    </div>
  );
}

type ProductListProps = {
  products: Product[];
};

export function ProductList({ products }: ProductListProps) {
  if (products.length === 0) {
    return (
      <div className="mt-6 rounded-lg border border-zinc-200 px-4 py-8 text-center text-sm text-zinc-400">
        Nenhum app encontrado nessa categoria.
      </div>
    );
  }

  return (
    <div className="mt-6 divide-y divide-zinc-200 rounded-lg border border-zinc-200">
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          colorClass={ICON_COLORS[index % ICON_COLORS.length]}
        />
      ))}
    </div>
  );
}
