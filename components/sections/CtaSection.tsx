import Image from "next/image";
import { Phone } from "lucide-react";
import type { HomeData, SiteData } from "@/data/siteData";
import { Reveal, Float } from "@/components/motion/Reveal";
import { ArrowLine } from "@/components/motion/ArrowLine";

interface Props {
  data: HomeData["cta"];
  contact: SiteData["contact"];
}

export function CtaSection({ data, contact }: Props) {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-(color:--color-navy-50) via-white to-(color:--color-brand-50) pt-6 pb-6 mt-6 mb-6 shadow-[0_8px_40px_-8px_rgba(4,52,104,0.22)]">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-2 top-2 select-none font-(family-name:--family-title) text-[7rem] font-extrabold leading-none tracking-tight text-(color:--color-navy)/[0.045] sm:left-[3%] sm:text-[12rem] lg:top-0 lg:text-[18rem]"
      >
        {data.watermark}
      </span>
      <div
        aria-hidden="true"
        className="absolute -right-32 top-1/4 hidden h-[560px] w-[560px] rounded-full bg-(color:--color-navy-50) sm:block"
      />
      <div
        aria-hidden="true"
        className="absolute -right-10 top-[42%] hidden h-[320px] w-[320px] rounded-full border-[36px] border-white/70 sm:block"
      />

      <div className="relative mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal direction="left">
              <h2 className="font-(family-name:--family-title) text-[2rem] font-extrabold leading-[1.12] tracking-tight text-(color:--color-navy) sm:text-4xl lg:text-[2.9rem]">
                {data.titleLine1}
                <br />
                <span className="text-(color:--color-brand)">{data.titleAccent}</span>
                <span className="relative mx-2 inline-block h-12 w-12 -translate-y-1 overflow-hidden rounded-full border-4 border-white align-middle shadow-(--shadow-card) sm:mx-3 sm:h-[84px] sm:w-[84px]">
                  <Image
                    src="/img/cta-woman.webp"
                    alt=""
                    fill
                    sizes="84px"
                    className="scale-110 object-cover"
                  />
                </span>
                {data.titleEnd}
              </h2>
            </Reveal>
            <Reveal direction="left" delay={0.12}>
              <p className="mt-6 max-w-[560px] text-base leading-8 text-(color:--color-navy-900)/80">
                {data.text}
              </p>
            </Reveal>
          </div>

          <div className="flex lg:col-span-4 lg:justify-center">
            <Float amplitude={12} duration={7}>
              <div className="relative h-[120px] w-[120px] rounded-full border border-(color:--color-navy)/10 bg-white p-2 shadow-(--shadow-soft) sm:h-[150px] sm:w-[150px] lg:h-[165px] lg:w-[165px]">
                <div className="relative h-full w-full overflow-hidden rounded-full">
                  <Image
                    src="/img/cta-man.webp"
                    alt="Friendly visa consultant in a suit"
                    fill
                    sizes="165px"
                    className="scale-110 object-cover"
                  />
                </div>
              </div>
            </Float>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-start gap-6 lg:mt-6 lg:flex-row lg:items-center lg:justify-end lg:gap-8">
          <ArrowLine className="hidden h-4 w-[250px] text-(color:--color-navy) lg:block" />
          <Reveal direction="up" delay={0.2}>
            <p className="text-[13px] font-medium uppercase tracking-[0.08em] text-(color:--color-navy)">
              {data.label}
            </p>
            <a
              href={contact.ctaPhoneHref}
              className="group mt-2 inline-flex items-center gap-3"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-(color:--color-brand) text-white animate-[ring-pulse_2s_infinite]">
                <Phone className="h-5 w-5" fill="currentColor" strokeWidth={1.5} />
              </span>
              <span className="font-(family-name:--family-title) text-2xl font-extrabold text-(color:--color-navy) transition-colors group-hover:text-(color:--color-brand) sm:text-[1.9rem]">
                {contact.ctaPhone}
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}


