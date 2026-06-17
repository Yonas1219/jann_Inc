"use client";

import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
}

const directionHidden: Record<string, string> = {
  up: "translate-y-5",
  down: "-translate-y-5",
  left: "translate-x-5",
  right: "-translate-x-5",
  none: "",
};

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.45,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const isBelowFold =
      el.getBoundingClientRect().top > window.innerHeight * 0.9;

    if (!isBelowFold) return;

    setVisible(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "-32px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-[opacity,transform] ease-out",
        visible
          ? "opacity-100 translate-x-0 translate-y-0"
          : cn("opacity-0", directionHidden[direction]),
        className,
      )}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: visible ? `${delay}s` : "0s",
      }}
    >
      {children}
    </div>
  );
}
