import type { Metadata } from "next";
import {
  getHome,
  getServices,
  getSite,
  getSteps,
  getTestimonials,
} from "@/data/siteData";
import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { HomeServices } from "@/components/sections/HomeServices";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: { absolute: "The Meridian | Immigration & Visa Consultancy" },
};

export default async function HomePage() {
  const [home, services, steps, testimonials, site] = await Promise.all([
    getHome(),
    getServices(),
    getSteps(),
    getTestimonials(),
    getSite(),
  ]);

  return (
    <>
      <Hero data={home.hero} />
      <AboutSection data={home.about} />
      <HomeServices intro={home.services} items={services.highlights} />
      <ProcessSteps intro={home.process} steps={steps} />
      <Testimonials intro={home.testimonials} items={testimonials} />
      <CtaSection data={home.cta} contact={site.contact} />
    </>
  );
}
