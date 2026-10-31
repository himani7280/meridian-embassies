import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { HighlightService, HomeData } from "@/data/siteData";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface Props {
  intro: HomeData["services"];
  items: HighlightService[];
}

export function HomeServices({ intro, items }: Props) {
  return (
    <section className="pt-6 pb-6 mt-6 mb-6">
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow={intro.eyebrow}
            title={intro.title}
            accent={intro.titleAccent}
            text={intro.text}
            className="max-w-[780px]"
          />
          <Reveal direction="left" className="lg:mb-16">
            <ButtonLink href={intro.button.href}>{intro.button.label}</ButtonLink>
          </Reveal>
        </div>

        <div className="mt-10 grid items-center gap-10 lg:mt-6 lg:grid-cols-[1.02fr_1fr] lg:gap-12">
          <Reveal direction="left">
            <div className="group relative aspect-[584/470] overflow-hidden rounded-xl shadow-(--shadow-soft)">
              <Image
                src="/img/services-main.webp"
                alt="Traveller smiling at an airport with a passport and boarding pass"
                fill
                sizes="(min-width: 1024px) 600px, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </Reveal>

          <Stagger className="divide-y divide-(color:--color-navy)/10" stagger={0.12}>
            {items.map((s) => (
              <StaggerItem key={s.id}>
                <Link
                  href={s.href}
                  className="group flex items-center gap-4 py-5 transition-transform duration-300 hover:translate-x-1.5 sm:gap-5"
                >
                  <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-(color:--color-navy-100) text-(color:--color-navy) transition-colors duration-300 group-hover:bg-(color:--color-navy) group-hover:text-white sm:h-[78px] sm:w-[78px]">
                    <Icon name={s.icon} className="h-7 w-7 sm:h-9 sm:w-9" strokeWidth={1.4} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-(family-name:--family-title) text-[1.05rem] font-bold leading-snug text-(color:--color-navy) sm:text-[1.2rem]">
                      {s.title}
                    </span>
                    <span className="mt-1 block text-sm leading-6 text-(color:--color-mute) sm:text-[15px]">
                      {s.text}
                    </span>
                  </span>
                  <span className="hidden h-12 w-px bg-(color:--color-navy)/15 sm:block" />
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-[1.5px] border-(color:--color-brand) text-(color:--color-brand) transition-all duration-300 group-hover:bg-(color:--color-brand) group-hover:text-white sm:h-12 sm:w-12">
                    <ArrowRight className="h-5 w-5" strokeWidth={2} />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}


