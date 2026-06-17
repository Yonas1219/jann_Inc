import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { SiteContainer } from "@/components/site-container";
import { ContactForm } from "@/components/contact-form";

export const metadata = {
  title: "Contact — Jann Inc",
  description:
    "Have a question, partnership idea, or just want to say hi? Get in touch with Jann Inc.",
};

export default function ContactPage() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <SiteContainer>
        <div className="rounded-3xl bg-green-light p-8 sm:p-12 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
            <div>
              <h1 className="font-serif text-4xl sm:text-5xl text-foreground mb-5">
                Get in touch
              </h1>
              <p className="text-base sm:text-lg text-zinc-600 leading-relaxed mb-10 max-w-md">
                Have a project in mind or want to learn more about our products?
                We&apos;d love to hear from you.
              </p>

              <div className="space-y-4 mb-10">
                <Link
                  href="mailto:hello@janninc.com"
                  className="flex items-center gap-3 text-foreground hover:text-green-deep transition-colors"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-green-deep">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span className="text-sm sm:text-base font-medium">
                    hello@janninc.com
                  </span>
                </Link>
              </div>

              <Link
                href="mailto:hello@janninc.com"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-green-mid"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-card">
              <ContactForm />
            </div>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
