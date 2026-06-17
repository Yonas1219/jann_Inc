import { FadeIn } from "@/components/fade-in";

const points = [
  {
    number: "01",
    title: "We identify real problems in overlooked verticals",
    description:
      "We start with signal, not noise, and focus where thoughtful software can make measurable impact.",
  },
  {
    number: "02",
    title: "We build focused tools, not bloated platforms",
    description:
      "Every product is opinionated, specific, and designed to do one job exceptionally well.",
  },
  {
    number: "03",
    title: "We ship fast, iterate faster",
    description:
      "We release early, learn in production, and continuously refine with real user feedback.",
  },
];

export function WhatWeDo() {
  return (
    <section className="section-rule py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="space-y-12">
          {points.map((point, i) => (
            <FadeIn key={point.number} delay={i * 0.08}>
              <div className="grid gap-5 border-b border-white/[0.05] pb-10 md:grid-cols-[120px_1fr] md:items-start">
                <p className="text-5xl font-semibold tracking-tight text-zinc-800 md:text-6xl">
                  {point.number}
                </p>
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-zinc-100">
                    {point.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-base leading-relaxed text-zinc-500">
                    {point.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
