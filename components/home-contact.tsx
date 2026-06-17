import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { SectionBadge } from "@/components/section-badge";
import { SiteContainer } from "@/components/site-container";

type HomeContactProps = {
  description?: string;
};

export function HomeContact({
  description = "Have a project in mind or want to learn more about our products? We'd love to hear from you.",
}: HomeContactProps) {
  return (
    <section className="bg-background py-20 lg:py-28">
      <SiteContainer>
        <div className="rounded-3xl bg-green-light p-8 sm:p-12 lg:p-16 text-center">
          <SectionBadge>Contact</SectionBadge>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl text-foreground mb-5">
            Get in touch
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed mb-10 max-w-md mx-auto">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="mailto:hello@janninc.com"
              className="inline-flex items-center gap-3 text-foreground hover:text-green-deep transition-colors"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-green-deep">
                <Mail className="h-4 w-4" />
              </span>
              <span className="text-sm sm:text-base font-medium">
                hello@janninc.com
              </span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-green-mid"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
