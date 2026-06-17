import { cn } from "@/lib/utils";

interface SiteContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "nav";
}

export function SiteContainer({
  children,
  className,
  as: Tag = "div",
}: SiteContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-site px-5 sm:px-8 lg:px-10 xl:px-12",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
