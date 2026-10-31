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

      {sections.map((s, i) => {
        const imageLeft = s.imageSide === "left";
        return (
          <section
            key={s.id}
            className={cn(
              "overflow-hidden pt-6 pb-6 mt-6 mb-6",
              s.tone === "tint" ? "bg-[#f5f8fc]" : "bg-transparent",
            )}
          >
            <div className="mx-auto grid w-full max-w-[1320px] items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-10">
              <Reveal
                direction={imageLeft ? "left" : "right"}
                className={cn(imageLeft ? "lg:order-1" : "lg:order-2")}
              >
                <div className="group relative aspect-[1.7/1] overflow-hidden rounded-md shadow-(--shadow-soft)">
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
                <Reveal direction={imageLeft ? "right" : "left"} delay={0.1} className="mt-4">
                  <h2 className="font-(family-name:--family-title) text-[2rem] font-extrabold leading-[1.12] tracking-tight text-(color:--color-navy) sm:text-4xl lg:text-[2.9rem]">
                    {s.title}
                    <br />
                    {s.titleLine2 ? `${s.titleLine2} ` : null}
                    <span className="text-(color:--color-brand)">{s.titleAccent}</span>
                    {s.titleEnd ? ` ${s.titleEnd}` : null}
                  </h2>
                </Reveal>
                <Reveal direction={imageLeft ? "right" : "left"} delay={0.2}>
                  <p className="mt-5 max-w-[540px] text-base leading-8 text-(color:--color-mute)">{s.text}</p>
                </Reveal>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}



