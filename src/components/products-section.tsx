import { SectionLabel } from "./ui";
import { products } from "@/data/content";
import { ProductCard } from "./product-card";

export function ProductsSection() {
  return (
    <section className="products section" id="products">
      <div className="products-heading">
        <div>
          <SectionLabel>Collaboration products</SectionLabel>
          <h2>
            Shared capabilities.
            <br />
            Solutions in action.
          </h2>
        </div>
        <p>
          Each product illustrates how clinical expertise, community
          relationships, research operations, and technology can work together
          across the research journey.
        </p>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.number} product={product} />
        ))}
      </div>
    </section>
  );
}
