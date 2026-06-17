import { FadeIn } from "@/components/fade-in";
import { SiteContainer } from "@/components/site-container";
import { ProductCard } from "@/components/product-card";
import { allProducts } from "@/lib/products";

export const metadata = {
  title: "Products — Jann Inc",
  description:
    "Each product solves one real problem, for one specific audience.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="pt-20 pb-12">
        <SiteContainer>
          <FadeIn>
            <h1 className="font-serif text-4xl sm:text-5xl text-foreground mb-4">
              Our Products
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Each product solves one real problem, for one specific audience —
              exceptionally well.
            </p>
          </FadeIn>
        </SiteContainer>
      </section>

      <section className="pb-24">
        <SiteContainer>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {allProducts.map((product, i) => (
              <FadeIn key={product.id} delay={i * 0.08}>
                <ProductCard
                  product={product}
                  variant="full"
                  className="h-full"
                />
              </FadeIn>
            ))}
          </div>
        </SiteContainer>
      </section>
    </>
  );
}
