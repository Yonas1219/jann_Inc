import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { SectionBadge } from "@/components/section-badge";
import { SquiggleUnderline } from "@/components/squiggle-underline";
import { SiteContainer } from "@/components/site-container";
import { ProductCard } from "@/components/product-card";
import { OurStory } from "@/components/our-story";
import { TrustedBy } from "@/components/trusted-by";
import { ServicesSection } from "@/components/services-section";
import { HomeContact } from "@/components/home-contact";
import {
  researchIntel,
  comingSoonProducts,
} from "@/lib/products";

export default function HomePage() {
  const previewComingSoon = comingSoonProducts.slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="grain-texture absolute inset-0" aria-hidden="true" />

        <SiteContainer className="relative z-10 text-center">
          <h1 className="font-serif text-foreground leading-[1.1] mx-auto max-w-4xl">
            <span className="block text-4xl sm:text-5xl md:text-6xl">
              We build software
            </span>
            <span className="relative inline-block mt-1">
              <span className="font-script text-5xl sm:text-6xl md:text-7xl text-green-deep">
                that matters.
              </span>
              <SquiggleUnderline className="absolute -bottom-1 left-0 w-full h-4" />
            </span>
          </h1>

          <p className="mt-8 mx-auto max-w-2xl text-base leading-relaxed text-zinc-600">
            Jann Inc is a product studio creating focused software tools
            across finance, health, education, and beyond.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full border border-foreground bg-white px-6 py-3 text-sm font-medium text-foreground transition-all duration-200 hover:shadow-card"
            >
              Explore our products
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-green-mid"
            >
              Get in touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </SiteContainer>
      </section>

      <ServicesSection />

      {/* Products */}
      <section className="py-24">
        <SiteContainer>
          <FadeIn>
            <SectionBadge>Products</SectionBadge>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl text-foreground mb-3">
              What we&apos;ve built
            </h2>
            <p className="text-muted-foreground mb-12 max-w-xl">
              Each product solves one real problem, for one specific audience.
            </p>
          </FadeIn>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FadeIn>
              <ProductCard product={researchIntel} variant="preview" className="h-full" />
            </FadeIn>
            {previewComingSoon.map((product, i) => (
              <FadeIn key={product.id} delay={(i + 1) * 0.08}>
                <ProductCard product={product} variant="preview" className="h-full" />
              </FadeIn>
            ))}
          </div>
        </SiteContainer>
      </section>

      <OurStory />
      <TrustedBy />
      <HomeContact />
    </>
  );
}
