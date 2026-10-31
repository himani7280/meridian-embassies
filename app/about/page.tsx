import type { Metadata } from "next";
import { getHome, getTestimonials, pageBanners } from "@/data/siteData";
import { PageBanner } from "@/components/layout/PageBanner";
import { AboutSection } from "@/components/sections/AboutSection";
import { Testimonials } from "@/components/sections/Testimonials";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about The Meridian: 25+ years of experience in visa and immigration consultancy.",
};

export default async function AboutPage() {
  const [home, testimonials] = await Promise.all([getHome(), getTestimonials()]);

  return (
    <>
      <PageBanner title={pageBanners.about.title} crumb={pageBanners.about.title} />
      <AboutSection data={home.about} />
      <Testimonials intro={home.testimonials} items={testimonials} />
    </>
  );
}
