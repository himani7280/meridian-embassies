import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";
import type { LegalContent } from "@/data/siteData";

export function LegalPage({ data }: { data: LegalContent }) {
  return (
    <section className="pt-6 pb-6 sm:pt-8 sm:pb-8 lg:pt-12 lg:pb-12">
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[900px]">
          <Reveal>
            <Eyebrow>{data.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.08} className="mt-3 sm:mt-4">
            <h1 className="font-(family-name:--family-title) text-[1.35rem] font-extrabold leading-[1.18] tracking-tight text-[#043468] sm:text-4xl sm:leading-[1.12] lg:text-[2.9rem]">
              {data.title} <span className="text-[#dc3a1f]">{data.titleAccent}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-2.5 text-[15px] text-[#6b7384] sm:mt-3">Last updated: {data.updated}</p>
            <p className="mt-4 text-base leading-7 text-[#6b7384] sm:mt-5 sm:leading-8">{data.intro}</p>
          </Reveal>

          <div className="mt-6 space-y-6 sm:mt-10 sm:space-y-8">
            {data.sections.map((s, i) => (
              <Reveal key={s.heading}>
                <h2 className="flex items-center gap-3 font-(family-name:--family-title) text-xl font-bold text-[#043468] sm:text-2xl">
                  <span className="h-[2px] w-6 bg-[#dc3a1f]" aria-hidden="true" />
                  {i + 1}. {s.heading}
                </h2>
                {s.body.map((p) => (
                  <p key={p} className="mt-3.5 text-base leading-7 text-[#6b7384] sm:mt-6 sm:leading-8">
                    {p}
                  </p>
                ))}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


