import type { Metadata, Viewport } from "next";
import type { CSSProperties } from "react";
import "./globals.css";
import { getSite, globalTheme } from "@/data/siteData";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Providers } from "@/components/motion/Providers";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "The Meridian | Immigration & Visa Consultancy",
    template: "%s | The Meridian",
  },
  description:
    "Expert immigration, visa and passport advisory. End-to-end embassy and consulate support for students, families and professionals.",
  icons: { icon: "/img/favicon.webp" },
  openGraph: {
    title: "The Meridian | Embassies & Consulates",
    description:
      "From application guidance and document preparation to embassy support, we provide end-to-end assistance with clarity, care and expertise.",
    type: "website",
    images: ["/img/hero-1.webp"],
  },
};

export const viewport: Viewport = {
  themeColor: "#043468",
  width: "device-width",
  initialScale: 1,
};

const themeVariables = {
  ...globalTheme.colors,
  ...globalTheme.shadows,
  "--family-title": globalTheme.fonts["--family-title"],
  "--family-body": globalTheme.fonts["--family-body"],
} as CSSProperties;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const site = await getSite();

  return (
    <html lang="en" style={themeVariables}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={globalTheme.fonts.stylesheet} />
        <style>{globalTheme.globalCss}</style>
      </head>
      <body>
        <Providers>
          <div className="mx-auto w-full max-w-[1350px] overflow-x-clip bg-white">
            <Header nav={site.nav} cta={site.cta} />
            <main>{children}</main>
            <Footer site={site} />
          </div>
        </Providers>
      </body>
    </html>
  );
}
