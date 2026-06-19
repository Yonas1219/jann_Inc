import { FadeIn } from "@/components/fade-in";
import { SectionBadge } from "@/components/section-badge";
import { SiteContainer } from "@/components/site-container";

export function OurStory() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,_#f0f7f2_0%,_transparent_65%)]"
        aria-hidden="true"
      />
      <SiteContainer className="relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <FadeIn>
            <SectionBadge>Story</SectionBadge>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl text-foreground mb-6">
              Our Story
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed text-base sm:text-lg">
              <p>
                Jann Inc started with a simple observation: the best software
                isn&apos;t built in boardrooms. it&apos;s built by people who
                care deeply about the problems they&apos;re solving.
              </p>
              <p>
                We started small. One builder, one product, one problem worth
                solving. That&apos;s still how we think today: focused,
                intentional, and obsessed with getting the details right.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <blockquote className="border-l-[3px] border-green-mid pl-6 sm:pl-8">
              <p className="font-serif text-2xl sm:text-3xl italic text-foreground leading-snug">
                No bloat, no noise. Just tools that do exactly what they
                promise.
              </p>
              <footer className="mt-5 text-sm text-muted-foreground">
                — Jann Inc
              </footer>
            </blockquote>
          </FadeIn>
        </div>
      </SiteContainer>
    </section>
  );
}
