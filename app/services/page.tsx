import { HashScroll } from "@/components/hash-scroll";
import { HomeContact } from "@/components/home-contact";
import {
  ServicesHero,
  ServiceDetailSection,
} from "@/components/service-detail-section";
import { OurProcess } from "@/components/our-process";
import { services } from "@/lib/services";

export const metadata = {
  title: "Services — Jann Inc",
  description:
    "We build focused software products and offer select services to help businesses grow with technology.",
};

export default function ServicesPage() {
  return (
    <>
      <HashScroll />
      <ServicesHero />

      {services.map((service, index) => (
        <ServiceDetailSection
          key={service.id}
          service={service}
          index={index}
        />
      ))}

      <OurProcess />

      <HomeContact description="Have a project in mind or want to learn more about our services? We'd love to hear from you." />
    </>
  );
}
