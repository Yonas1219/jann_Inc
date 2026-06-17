"use client";

import { useState } from "react";
import { FadeIn } from "@/components/fade-in";
import { SectionBadge } from "@/components/section-badge";
import { SiteContainer } from "@/components/site-container";
import {
  DeliveryIcon,
  DevelopmentIcon,
  DiscoveryIcon,
  StrategyIcon,
} from "@/components/process-icons";
import { processSteps } from "@/lib/services";
import { cn } from "@/lib/utils";

const stepIcons = [DiscoveryIcon, StrategyIcon, DevelopmentIcon, DeliveryIcon];

export function OurProcess() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="py-24">
      <SiteContainer>
        <FadeIn className="text-center mb-14">
          <SectionBadge>Process</SectionBadge>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl text-[#1a1a1a] mb-3">
            Our Process
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto">
            We follow a proven methodology to deliver exceptional results for
            every project.
          </p>
        </FadeIn>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:items-end">
          {processSteps.map((step, i) => {
            const Icon = stepIcons[i];
            const isActive = activeIndex === i;

            return (
              <FadeIn key={step.number} delay={i * 0.08}>
                <article
                  onMouseEnter={() => setActiveIndex(i)}
                  className={cn(
                    "relative flex h-full flex-col rounded-2xl border-2 p-6 transition-all duration-300",
                    isActive
                      ? "shadow-card-hover lg:-translate-y-3 lg:scale-[1.03] lg:pb-8"
                      : "border-transparent shadow-sm hover:shadow-card"
                  )}
                  style={{
                    backgroundColor: step.background,
                    borderColor: isActive ? `${step.accent}55` : "transparent",
                    ...(isActive && step.activeGradient
                      ? { background: step.activeGradient }
                      : {}),
                  }}
                >
                  <div className="mb-5 flex items-start justify-between gap-3">
                    <span
                      className={cn(
                        "inline-flex h-8 min-w-8 items-center justify-center rounded-lg px-2 text-sm font-bold",
                        isActive
                          ? "bg-green-deep text-white"
                          : "border border-green-deep/30 bg-white text-green-deep"
                      )}
                    >
                      {step.displayNumber}
                    </span>
                    <Icon
                      className="h-11 w-11 shrink-0"
                      color={step.accent}
                    />
                  </div>

                  <h3 className="font-bold text-foreground text-lg mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-zinc-500 mb-4">{step.subtitle}</p>

                  <div
                    className="mb-4 border-t"
                    style={{ borderColor: `${step.accent}22` }}
                  />

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
