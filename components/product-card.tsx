import Link from "next/link";
import { ArrowRight, Lock } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
  variant?: "preview" | "full";
  className?: string;
}

export function ProductCard({
  product,
  variant = "preview",
  className,
}: ProductCardProps) {
  const isLive = product.status === "live";

  if (isLive) {
    return (
      <div
        className={cn(
          "group overflow-hidden rounded-2xl bg-white shadow-card card-lift",
          className
        )}
      >
        <div className="h-3 bg-green-deep" />
        <div className="p-6">
          <div className="flex items-start justify-between gap-3 mb-4">
            <h3 className="font-serif text-2xl text-foreground">
              {product.name}
            </h3>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-green-light px-2.5 py-1 text-xs font-medium text-green-deep">
              <span className="h-1.5 w-1.5 rounded-full bg-green-deep animate-pulse" />
              Live
            </span>
          </div>

          {product.tagline && (
            <span className="inline-block rounded-full bg-green-light px-3 py-1 text-xs font-medium text-green-deep mb-4">
              {product.tagline}
            </span>
          )}

          {product.description && (
            <p
              className={cn(
                "text-sm text-muted-foreground leading-relaxed mb-5",
                variant === "preview" && "line-clamp-3"
              )}
            >
              {product.description}
            </p>
          )}

          {product.href && (
            <Link
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-green-deep transition-colors duration-200 hover:text-green-mid"
            >
              Learn more
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "group overflow-hidden rounded-2xl bg-[#f0f0eb] card-lift",
        className
      )}
    >
      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/80">
            <Lock className="h-4 w-4 text-muted-foreground/60" />
          </div>
          <span className="inline-flex items-center rounded-full bg-amber-gold/15 px-2.5 py-1 text-xs font-medium text-amber-gold">
            Coming Soon
          </span>
        </div>

        {product.vertical && (
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
            {product.vertical}
          </p>
        )}

        <h3 className="font-serif text-xl text-muted-foreground/50">???</h3>
      </div>
    </div>
  );
}
