import type { Product } from "@/data/content";
export function ProductCard({ product }: { product: Product }) {
  return (
    <article className={`product-card ${product.tone}`}>
      <span className="product-number">{product.number}</span>
      <p className="card-kicker">{product.kicker}</p>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <span className="product-outcome">{product.outcome}</span>
    </article>
  );
}
