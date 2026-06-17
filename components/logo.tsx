import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "default" | "light";
}

export function Logo({ className, variant = "default" }: LogoProps) {
  const isLight = variant === "light";

  return (
    <Link href="/" className={cn("flex items-baseline gap-1 group", className)}>
      <span
        className={cn(
          "font-serif text-xl tracking-tight",
          isLight ? "text-white" : "text-green-deep",
        )}
      >
        Jann
      </span>
      <span
        className={cn(
          "font-sans text-sm font-normal",
          isLight ? "text-white/70" : "text-green-deep/70",
        )}
      >
        Inc
      </span>
    </Link>
  );
}
