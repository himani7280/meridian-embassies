import Image from "next/image";
import type { HomeData } from "@/data/siteData";
import { Reveal } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";
import { Eyebrow, GradientTitle } from "@/components/ui/SectionHeading";

export function AboutSection({ data }: { data: HomeData["about"] }) {
  return (
    <section className="relative pt-6 pb-6 mt-6 mb-6">
      <div className="mx-auto grid w-full max-w-[1320px] items-stretch gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.12fr] lg:gap-14 lg:px-10">
        <Reveal direction="left" className="relative lg:h-full">
          <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl shadow-(--shadow-soft) lg:aspect-auto lg:h-full lg:min-h-[640px]">
            <Image
              src="/img/about-1.webp"
              alt="Smiling traveller holding a passport at the airport"
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </Reveal>

        <div className="flex flex-col lg:pt-6">
          <Reveal>
            <Eyebrow>{data.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.08} className="mt-5">
            <GradientTitle
              title={data.title}
              line2={data.titleLine2}
              accent={data.titleAccent}
            />
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-(color:--color-mute) sm:text-base sm:leading-8">
              {data.text}
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mx-auto mt-6 flex max-w-[520px] flex-col items-center text-center">
              <span className="h-10 w-[2px] bg-(color:--color-navy)" />
              <div className="flex w-full items-center gap-5">
                <span className="h-px flex-1 bg-(color:--color-navy)/15" />
                <span className="font-(family-name:--family-title) text-5xl font-extrabold text-(color:--color-navy)">
                  <CountUp to={data.statValue} suffix={data.statSuffix} />
                </span>
                <span className="h-px flex-1 bg-(color:--color-navy)/15" />
              </div>
              <p className="mt-1 max-w-[270px] text-base text-(color:--color-mute)">{data.statLabel}</p>
            </div>
          </Reveal>

          <Reveal delay={0.3} direction="right" className="mt-8 lg:mt-auto lg:pt-8">
            <div className="group relative aspect-[621/270] overflow-hidden rounded-xl shadow-(--shadow-card)">
              <Image
                src="/img/about-2.webp"
                alt="Consultant stamping passport documents"
                fill
                sizes="(min-width: 1024px) 620px, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}


