export interface Product {
  id: string;
  name: string;
  tagline?: string;
  description?: string;
  tags?: string[];
  href?: string;
  status: "live" | "coming-soon" | "in-development";
  vertical?: string;
}

export const researchIntel: Product = {
  id: "researchintel",
  name: "ResearchIntel",
  tagline: "AI & Finance Intelligence",
  description:
    "A research workspace for finance professionals. Trending papers, AI briefings, and chat — all in one place.",
  tags: ["Finance", "AI", "Research"],
  href: "https://researchintel.tech",
  status: "live",
};

export const comingSoonProducts: Product[] = [
  {
    id: "health-1",
    name: "???",
    status: "in-development",
    vertical: "Health",
  },
  {
    id: "education-1",
    name: "???",
    status: "coming-soon",
    vertical: "Education",
  },
  {
    id: "productivity-1",
    name: "???",
    status: "coming-soon",
    vertical: "Productivity",
  },
];

export const allProducts: Product[] = [
  researchIntel,
  ...comingSoonProducts,
];
