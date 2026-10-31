import type { HomeData } from "@/data/siteData";
import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { HeroCollage } from "./HeroCollage";

export function Hero({ data }: { data: HomeData["hero"] }) {
  return (
    <section className="relative overflow-hidden pt-6 pb-6 mb-6">
      <div
        aria-hidden="true"
        className="absolute -left-40 top-10 -z-10 h-[420px] w-[420px] rounded-full bg-(color:--color-navy-100)/50 blur-3xl"
      />
      <div className="mx-auto grid w-full max-w-[1320px] items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-10">
        <div>
          <Reveal direction="left">
            <span className="mb-6 block h-[2px] w-12 bg-(color:--color-brand)" />
          </Reveal>
          <Reveal direction="left" delay={0.1}>
            <h1 className="font-(family-name:--family-title) text-[2.4rem] font-extrabold leading-[1.08] tracking-tight text-(color:--color-slate2) sm:text-5xl lg:text-[3.4rem] xl:text-[4rem]">
              {data.titleLine1}
              <span className="block text-(color:--color-brand)">{data.titleAccent}</span>
            </h1>
          </Reveal>
          <Reveal direction="left" delay={0.25}>
            <ButtonLink
              href={data.button.href}
              size="lg"
              className="mt-9"
            >
              {data.button.label}
            </ButtonLink>
          </Reveal>
        </div>

        <HeroCollage />
      </div>
    </section>
  );
}


