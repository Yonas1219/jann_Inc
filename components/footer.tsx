import Link from "next/link";
import { Logo } from "@/components/logo";
import { SiteContainer } from "@/components/site-container";

const footerLinks = [
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-[#0f2419] text-white">
      <SiteContainer className="py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-4">
            <Logo variant="light" />
            <p className="text-sm text-white/60 max-w-xs">
              Building software that matters.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:items-end">
            <nav className="flex gap-8">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <p className="text-xs text-white/40">
              © 2025 Jann Inc. All rights reserved.
            </p>
          </div>
        </div>
      </SiteContainer>
    </footer>
  );
}
