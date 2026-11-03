import type { Metadata } from "next";
import Image from "next/image";
import { getVisaSections, pageBanners } from "@/data/siteData";
import { PageBanner } from "@/components/layout/PageBanner";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";

function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export const metadata: Metadata = {
  title: "Visa & Passport Information",
  description:
    "Accurate, up-to-date information on passport applications, student visa requirements and the complete visa process.",
};

export default async function VisaPassportPage() {
  const sections = await getVisaSections();

  return (
    <>
      <PageBanner title={pageBanners.visaPassport.title} />

      <div className="pt-4 pb-8 sm:pt-6 sm:pb-10">
        {sections.map((s, i) => {
          const imageLeft = s.imageSide === "left";
          const isTint = s.tone === "tint";
          return (
            <section
              key={s.id}
              className={cn(
                "overflow-hidden",
                isTint
                  ? "bg-[#f5f8fc] py-3.5 my-2 sm:py-4 sm:my-2.5"
                  : "bg-transparent py-1.5 my-1 sm:py-2 sm:my-1",
              )}
            >
              <div className="mx-auto grid w-full max-w-[1320px] items-center gap-y-4 gap-x-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-10">
                <Reveal
                  direction={imageLeft ? "left" : "right"}
                  className={cn(imageLeft ? "lg:order-1" : "lg:order-2")}
                >
                  <div className="group relative aspect-[1.7/1] overflow-hidden rounded-md shadow-[0_10px_40px_-12px_rgba(4,52,104,0.18)]">
                    <Image
                      src={s.image}
                      alt={s.alt}
                      fill
                      priority={i === 0}
                      sizes="(min-width: 1024px) 640px, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </Reveal>

                <div className={cn(imageLeft ? "lg:order-2" : "lg:order-1")}>
                  <Reveal direction={imageLeft ? "right" : "left"}>
                    <Eyebrow>{s.eyebrow}</Eyebrow>
                  </Reveal>
                  <Reveal direction={imageLeft ? "right" : "left"} delay={0.1} className="mt-2.5">
                    <h2 className="font-[family-name:Manrope,system-ui,sans-serif] text-[2rem] font-extrabold leading-[1.12] tracking-tight text-[#043468] sm:text-4xl lg:text-[2.9rem]">
                      {s.title}
                      <br />
                      {s.titleLine2 ? `${s.titleLine2} ` : null}
                      <span className="text-[#dc3a1f]">{s.titleAccent}</span>
                      {s.titleEnd ? ` ${s.titleEnd}` : null}
                    </h2>
                  </Reveal>
                  <Reveal direction={imageLeft ? "right" : "left"} delay={0.2}>
                    <p className="mt-3.5 max-w-[540px] text-base leading-7 text-[#6b7384] sm:leading-8">
                      {s.text}
                    </p>
                  </Reveal>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
