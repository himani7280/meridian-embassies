import type { Metadata } from "next";
import { getServices, pageBanners } from "@/data/siteData";
import { PageBanner } from "@/components/layout/PageBanner";
import { CounsellingCards } from "@/components/sections/CounsellingCards";

export const metadata: Metadata = {
  title: "Counselling Services",
  description:
    "Study abroad counselling, application support, visa guidance, pre-departure briefing, accommodation and ongoing support.",
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <>
      <PageBanner title={pageBanners.services.title} />
      <CounsellingCards data={services.counselling} />
    </>
  );
}
