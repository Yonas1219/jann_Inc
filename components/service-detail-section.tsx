import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { SiteContainer } from "@/components/site-container";
import { FadeIn } from "@/components/fade-in";
import { ServiceIllustration } from "@/components/service-illustrations";
import { cn } from "@/lib/utils";
import type { Service } from "@/lib/services";

interface ServiceDetailSectionProps {
  service: Service;
  index: number;
}

export function ServiceDetailSection({
  service,
  index,
}: ServiceDetailSectionProps) {
  const isReversed = index % 2 === 1;
  const Icon = service.icon;

  return (
    <section
      id={service.id}
      className="scroll-mt-24 border-t border-border py-20"
      style={{ backgroundColor: service.tintBg }}
    >
      <SiteContainer>
        <div
          className={cn(
            "grid gap-12 lg:grid-cols-2 lg:items-center",
            isReversed && "lg:[&>*:first-child]:order-2"
          )}
        >
          <FadeIn direction={isReversed ? "right" : "left"}>
            <ServiceIllustration
              variant={service.id as "custom-software" | "b2b-saas" | "consultancy" | "ai-workflows"}
            />
          </FadeIn>

          <FadeIn delay={0.1} direction={isReversed ? "left" : "right"}>
            <div
              className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl"
              style={{ backgroundColor: service.background }}
            >
              <Icon
                className="h-6 w-6"
                style={{ color: service.iconColor }}
                strokeWidth={1.5}
              />
            </div>

            <h2
              className="font-serif text-3xl sm:text-4xl mb-4"
              style={{ color: service.titleColor }}
            >
              {service.title}
            </h2>

            <p className="text-zinc-600 leading-relaxed mb-8 max-w-lg">
              {service.longDescription}
            </p>

            <ul className="space-y-0 divide-y divide-border/60">
              {service.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 py-4 text-sm text-zinc-700"
                >
                  <span
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                    style={{
                      backgroundColor: service.background,
                      color: service.iconColor,
                    }}
                  >
                    <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </SiteContainer>
    </section>
  );
}

export function ServicesHero() {
  return (
    <section className="pt-16 pb-20">
      <SiteContainer className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <FadeIn>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1a1a1a] leading-tight">
            Our{" "}
            <span className="text-green-deep">Services</span>
          </h1>
          <p className="mt-6 max-w-lg text-zinc-500 leading-relaxed">
            We offer a range of technology services to help businesses leverage
            innovation for growth and digital transformation.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#custom-software"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-green-mid"
            >
              Explore services
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-border bg-white px-6 py-3 text-sm font-medium text-foreground transition-all duration-200 hover:shadow-card"
            >
              Get in touch
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <ServiceIllustration variant="hero" />
        </FadeIn>
      </SiteContainer>
    </section>
  );
}
