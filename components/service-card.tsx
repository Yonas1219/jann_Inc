import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Service } from "@/lib/services";

interface ServiceCardProps {
  service: Service;
  className?: string;
  linked?: boolean;
}

export function ServiceCard({
  service,
  className,
  linked = true,
}: ServiceCardProps) {
  const Icon = service.icon;

  const content = (
    <>
      <ArrowUpRight className="absolute right-6 top-6 h-5 w-5 text-zinc-400 transition-colors duration-200 group-hover:text-zinc-600" />

      <Icon
        className="h-12 w-12"
        style={{ color: service.iconColor }}
        strokeWidth={1.5}
      />

      <h3
        className="mt-6 mb-3 text-xl font-bold"
        style={{ color: service.titleColor }}
      >
        {service.title}
      </h3>

      <p className="text-sm leading-relaxed text-zinc-600">
        {service.description}
      </p>
    </>
  );

  const classes = cn(
    "group relative block rounded-2xl p-8 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md",
    className,
  );

  if (linked) {
    return (
      <Link
        href={`/services#${service.id}`}
        className={classes}
        style={{ backgroundColor: service.background }}
      >
        {content}
      </Link>
    );
  }

  return (
    <article
      className={classes}
      style={{ backgroundColor: service.background }}
    >
      {content}
    </article>
  );
}
