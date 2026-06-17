import type { LucideIcon } from "lucide-react";
import { Code2, Cloud, Lightbulb, Cpu } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  background: string;
  icon: LucideIcon;
  iconColor: string;
  titleColor: string;
  tintBg: string;
}

export const services: Service[] = [
  {
    id: "custom-software",
    title: "Custom Software Development",
    description:
      "We design and build bespoke software tailored to your exact needs — from MVP to production-ready product.",
    longDescription:
      "Tailored software solutions designed to address your specific business challenges and opportunities. We build software that aligns perfectly with your workflows and objectives.",
    features: [
      "Web & Mobile Applications",
      "Enterprise Software",
      "Integration Solutions",
    ],
    background: "#edfaf3",
    tintBg: "#f4fdf8",
    icon: Code2,
    iconColor: "#1a4d2e",
    titleColor: "#1a4d2e",
  },
  {
    id: "b2b-saas",
    title: "B2B SaaS Products",
    description:
      "Our SaaS products are built for teams and businesses — robust, scalable, and designed for real workflows.",
    longDescription:
      "End-to-end development of scalable, cloud-based software-as-a-service solutions for businesses. We help you build, launch, and scale your SaaS product from concept to market.",
    features: [
      "Multi-tenant Architecture",
      "Subscription Management",
      "API Development & Integration",
      "Scalable Cloud Infrastructure",
    ],
    background: "#f0edff",
    tintBg: "#f7f5ff",
    icon: Cloud,
    iconColor: "#5b21b6",
    titleColor: "#5b21b6",
  },
  {
    id: "consultancy",
    title: "Technology Consultancy",
    description:
      "We help businesses navigate complex technology decisions with strategic insight and hands-on expertise.",
    longDescription:
      "Strategic technology guidance to help your business make confident decisions, modernize systems, and plan for sustainable digital growth.",
    features: [
      "Digital Transformation Strategy",
      "Technology Roadmapping",
      "Architecture Review",
      "Team Advisory & Mentorship",
    ],
    background: "#eff6ff",
    tintBg: "#f5f9ff",
    icon: Lightbulb,
    iconColor: "#1d4ed8",
    titleColor: "#1d4ed8",
  },
  {
    id: "ai-workflows",
    title: "AI Workflow Solutions",
    description:
      "We build custom AI workflows that automate processes, surface insights, and drive revenue growth.",
    longDescription:
      "Custom AI workflows that automate repetitive processes, surface actionable insights, and help your team move faster with intelligent tooling.",
    features: [
      "Process Automation",
      "AI-Powered Insights",
      "Custom ML Pipelines",
      "Workflow Integration",
    ],
    background: "#fff8ed",
    tintBg: "#fffbf3",
    icon: Cpu,
    iconColor: "#b45309",
    titleColor: "#b45309",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discovery",
    subtitle: "Understanding your needs",
    description:
      "We begin by deeply understanding your business, challenges, and objectives through collaborative workshops and research.",
    background: "#f0edff",
    accent: "#5b21b6",
  },
  {
    number: "02",
    title: "Strategy",
    subtitle: "Planning the solution",
    description:
      "We develop a comprehensive strategy and roadmap tailored to your specific requirements and business goals.",
    background: "#fff1f0",
    accent: "#be4b3a",
  },
  {
    number: "03",
    title: "Development",
    subtitle: "Building with precision",
    description:
      "Our expert team designs and develops your solution using agile methodologies, ensuring quality at every step.",
    background: "#fff8ed",
    accent: "#b45309",
  },
  {
    number: "04",
    title: "Delivery & Growth",
    subtitle: "Continuous improvement",
    description:
      "We deploy your solution and provide ongoing support, optimization, and enhancements to ensure long-term success.",
    background: "#edfaf3",
    accent: "#1a4d2e",
  },
];
