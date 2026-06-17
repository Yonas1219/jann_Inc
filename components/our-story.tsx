import { FadeIn } from "@/components/fade-in";
import { SectionBadge } from "@/components/section-badge";
import { AfricaIllustration } from "@/components/africa-illustration";
import { SiteContainer } from "@/components/site-container";

export function OurStory() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,_#f0f7f2_0%,_transparent_65%)]"
        aria-hidden="true"
      />
      <SiteContainer className="relative">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <div>
              <SectionBadge>Story</SectionBadge>
              <h2 className="mt-4 font-serif text-3xl sm:text-4xl text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Jann Inc started with a simple observation: the best software
                  isn&apos;t built in boardrooms — it&apos;s built by people who
                  understand real problems in real communities.
                </p>
                <p>
                  We&apos;re a product studio focused on finance, health, and
                  education — verticals where thoughtful tools can change how
                  people work, learn, and grow.
                </p>
                <p className="text-foreground font-medium">
                  Jann Inc was built with a simple belief — great software
                  should be accessible to everyone, everywhere.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <AfricaIllustration />
          </FadeIn>
        </div>
      </SiteContainer>
    </section>
  );
}
