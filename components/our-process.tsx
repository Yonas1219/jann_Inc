import { Search, Brain, Cog, Rocket } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { SiteContainer } from "@/components/site-container";
import { processSteps } from "@/lib/services";

const stepIcons = [Search, Brain, Cog, Rocket];

export function OurProcess() {
  return (
    <section className="py-24">
      <SiteContainer>
        <FadeIn className="text-center mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1a1a1a] mb-3">
            Our Process
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto">
            We follow a proven methodology to deliver exceptional results for
            every project.
          </p>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <FadeIn key={step.number} delay={i * 0.08}>
                <article
                  className="rounded-2xl p-6 h-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                  style={{ backgroundColor: step.background }}
                >
                  <span
                    className="inline-block rounded-md px-2 py-0.5 text-xs font-bold text-white mb-5"
                    style={{ backgroundColor: step.accent }}
                  >
                    {step.number}
                  </span>
                  <Icon
                    className="h-8 w-8 mb-4"
                    style={{ color: step.accent }}
                    strokeWidth={1.5}
                  />
                  <h3 className="font-bold text-foreground mb-1">
                    {step.title}
                  </h3>
                  <p
                    className="text-sm font-medium mb-3"
                    style={{ color: step.accent }}
                  >
                    {step.subtitle}
                  </p>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {step.description}
                  </p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </SiteContainer>
    </section>
  );
}
