"use client";

import { useEffect } from "react";

export function GridParallax() {
  useEffect(() => {
    const root = document.documentElement;

    const onMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 8;
      const y = (event.clientY / window.innerHeight - 0.5) * 8;

      root.style.setProperty("--grid-x", `${x}px`);
      root.style.setProperty("--grid-y", `${y}px`);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      root.style.setProperty("--grid-x", "0px");
      root.style.setProperty("--grid-y", "0px");
    };
  }, []);

  return null;
}
