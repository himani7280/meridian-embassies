import Image from "next/image";
import type { HomeData, ProcessStep } from "@/data/siteData";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

interface Props {
  intro: HomeData["process"];
  steps: ProcessStep[];
}

export function ProcessSteps({ intro, steps }: Props) {
  return (
    <section className="pt-6 pb-6 mt-6 mb-6">
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-10">
        <SectionHeading
          center
          eyebrow={intro.eyebrow}
          title={intro.title}
          accent={intro.titleAccent}
          className="mx-auto"
        />

        <div className="mt-6 divide-y divide-(color:--color-navy)/10 lg:mt-8">
          {steps.map((step, i) => {
            const reverse = i % 2 === 1;
            return (
              <div
                key={step.id}
                className={cn("grid items-center gap-6 py-3 lg:gap-0", reverse ? "lg:grid-cols-[1fr_1.35fr]" : "lg:grid-cols-[1.35fr_1fr]")}
              >
                <Reveal
                  direction={reverse ? "right" : "left"}
                  className={cn(reverse && "lg:order-2")}
                >
                  <div className="group relative aspect-[2.3/1] overflow-hidden rounded-md shadow-(--shadow-card)">
                    <Image
                      src={step.image}
                      alt={step.alt}
                      fill
                      sizes="(min-width: 1024px) 760px, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </Reveal>

                <Reveal
                  direction={reverse ? "left" : "right"}
                  delay={0.1}
                  className={cn(reverse && "lg:order-1")}
                >
                  <div className="flex items-center gap-4 sm:gap-6 lg:px-12 xl:px-16">
                    <span className="font-(family-name:--family-title) text-4xl font-extrabold text-(color:--color-brand) sm:text-5xl">
                      {step.number}
                    </span>
                    <span className="h-16 w-px shrink-0 bg-(color:--color-navy)/20 sm:h-20" />
                    <div>
                      <h3 className="font-(family-name:--family-title) text-xl font-bold leading-snug text-(color:--color-navy) sm:text-2xl">
                        {step.title}
                      </h3>
                      <p className="mt-2 max-w-[420px] text-[15px] leading-7 text-(color:--color-mute) sm:text-base">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


