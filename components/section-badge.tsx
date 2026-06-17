import { cn } from "@/lib/utils";

type SectionBadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionBadge({ children, className }: SectionBadgeProps) {
  return (
    <span
      className={cn(
        "inline-block rounded-full border border-green-deep px-4 py-1.5 text-sm font-medium text-green-deep",
        className
      )}
    >
      {children}
    </span>
  );
}
