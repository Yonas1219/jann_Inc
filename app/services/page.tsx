import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { SiteContainer } from "@/components/site-container";
import { HashScroll } from "@/components/hash-scroll";
import {
  ServicesHero,
  ServiceDetailSection,
} from "@/components/service-detail-section";
import { OurProcess } from "@/components/our-process";
import { services } from "@/lib/services";

export const metadata = {
  title: "Services — Jann Inc",
  description:
    "We build focused software products and offer select services to help businesses grow with technology.",
};

export default function ServicesPage() {
  return (
    <>
      <HashScroll />
      <ServicesHero />

      {services.map((service, index) => (
        <ServiceDetailSection
          key={service.id}
          service={service}
          index={index}
        />
      ))}

      <OurProcess />

      <section className="pb-24">
        <SiteContainer>
          <FadeIn>
            <div className="rounded-2xl bg-[#faf8f3] border border-border p-10 lg:p-14 grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="font-serif text-3xl text-[#1a1a1a] mb-4">
                  Get in touch
                </h2>
                <p className="text-zinc-600 leading-relaxed mb-6">
                  Have a project in mind or want to learn more about our
                  services? We&apos;d love to hear from you.
                </p>
                <Link
                  href="mailto:hello@janninc.com"
                  className="text-green-deep font-medium hover:text-green-mid transition-colors"
                >
                  hello@janninc.com
                </Link>
              </div>
              <div className="flex justify-center">
                <div className="flex h-40 w-40 items-center justify-center rounded-full bg-green-light">
                  <span className="font-serif text-5xl text-green-deep">J</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </SiteContainer>
      </section>

      <section className="bg-[#1a4d2e] py-20 text-center">
        <SiteContainer>
          <FadeIn>
            <h2 className="font-serif text-3xl text-white">
              Have a project in mind?
            </h2>
            <p className="mt-3 text-white/70">
              Let&apos;s talk about what we can build together.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-green-deep transition-all duration-200 hover:bg-zinc-100"
            >
              Get in touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>
        </SiteContainer>
      </section>
    </>
  );
}
