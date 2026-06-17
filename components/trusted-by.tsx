import { FadeIn } from "@/components/fade-in";
import { SectionBadge } from "@/components/section-badge";
import { SiteContainer } from "@/components/site-container";

const partners = [
  { name: "Radiant Health", style: "text-orange-600 font-bold tracking-tight" },
  { name: "Hey Trading", style: "text-blue-900 font-semibold" },
  {
    name: "EDF Gym & Spa",
    style: "text-amber-700 font-black uppercase text-xs tracking-wider",
  },
  {
    name: "Grand Palace",
    style: "text-zinc-800 font-serif text-sm tracking-wide",
  },
  { name: "AquaLife", style: "text-sky-600 font-medium" },
  { name: "Meridian Co.", style: "text-zinc-600 font-semibold tracking-tight" },
  { name: "Africa Ventures", style: "text-green-deep font-bold" },
];

export function TrustedBy() {
  return (
    <section className="border-t border-border bg-white py-20">
      <SiteContainer className="text-center">
        <FadeIn>
          <SectionBadge>Partners</SectionBadge>
          <h2 className="mt-4 font-serif text-2xl sm:text-3xl text-green-deep mb-2">
            Trusted by Industry Leaders
          </h2>
          <p className="text-sm text-zinc-500 mb-12 max-w-md mx-auto">
            Powering innovation across leading companies worldwide
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 sm:gap-x-14">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex h-10 items-center justify-center px-2 grayscale opacity-70 transition-opacity duration-200 hover:opacity-100 hover:grayscale-0"
              >
                <span
                  className={`text-sm sm:text-base whitespace-nowrap ${partner.style}`}
                >
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </SiteContainer>
    </section>
  );
}
