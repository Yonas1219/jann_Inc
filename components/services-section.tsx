import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { SectionBadge } from "@/components/section-badge";
import { SiteContainer } from "@/components/site-container";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/lib/services";

export function ServicesSection() {
  return (
    <section className="py-24">
      <SiteContainer className="text-left">
        <FadeIn>
          <SectionBadge>Services</SectionBadge>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl text-[#1a1a1a] mb-3">
            What We Do
          </h2>
          <p className="max-w-xl text-zinc-500 leading-relaxed mb-12">
            We build focused software products and offer select services to help
            businesses grow with technology.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
          <FadeIn className="md:col-span-2">
            <ServiceCard service={services[0]} className="h-full" />
          </FadeIn>
          <FadeIn delay={0.08} className="md:col-span-3">
            <ServiceCard service={services[1]} className="h-full" />
          </FadeIn>
          <FadeIn delay={0.12} className="md:col-span-3">
            <ServiceCard service={services[2]} className="h-full" />
          </FadeIn>
          <FadeIn delay={0.16} className="md:col-span-2">
            <ServiceCard service={services[3]} className="h-full" />
          </FadeIn>
        </div>

        <FadeIn delay={0.2} className="mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-green-deep transition-colors duration-200 hover:text-green-mid"
          >
            View all services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeIn>
      </SiteContainer>
    </section>
  );
}
