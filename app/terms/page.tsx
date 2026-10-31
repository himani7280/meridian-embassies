import type { Metadata } from "next";
import { legalPages, pageBanners } from "@/data/siteData";
import { PageBanner } from "@/components/layout/PageBanner";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that apply when you use The Meridian website and consultancy services.",
};

export default function TermsPage() {
  return (
    <>
      <PageBanner title={pageBanners.terms.title} />
      <LegalPage data={legalPages.terms} />
    </>
  );
}
