import type { Metadata } from "next";
import { legalPages, pageBanners } from "@/data/siteData";
import { PageBanner } from "@/components/layout/PageBanner";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How The Meridian collects, uses and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageBanner title={pageBanners.privacyPolicy.title} />
      <LegalPage data={legalPages.privacy} />
    </>
  );
}
