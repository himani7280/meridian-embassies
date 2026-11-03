import type { Metadata, Viewport } from "next";
import "./globals.css";
import { getSite } from "@/data/siteData";
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

const fontsStylesheet =
  "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const site = await getSite();

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={fontsStylesheet} />
      </head>
      <body className="overflow-x-hidden bg-white font-[family-name:Inter,system-ui,sans-serif] text-[15px] leading-[1.625] text-[#071f37] antialiased selection:bg-[#dc3a1f] selection:text-white [&_*:focus-visible]:outline-2 [&_*:focus-visible]:outline-offset-2 [&_*:focus-visible]:outline-[#dc3a1f] [&_img]:[-webkit-user-drag:none]">
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
