import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/ui/SectionHeading";
import type { LegalContent } from "@/data/siteData";

export function LegalPage({ data }: { data: LegalContent }) {
  return (
    <section className="pt-6 pb-6 mt-6 mb-6">
      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[900px]">
          <Reveal>
            <Eyebrow>{data.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.08} className="mt-4">
            <h1 className="font-[family-name:Manrope,system-ui,sans-serif] text-[2rem] font-extrabold leading-[1.12] tracking-tight text-[#043468] sm:text-4xl lg:text-[2.9rem]">
              {data.title} <span className="text-[#dc3a1f]">{data.titleAccent}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-3 text-[15px] text-[#6b7384]">Last updated: {data.updated}</p>
            <p className="mt-5 text-base leading-8 text-[#6b7384]">{data.intro}</p>
          </Reveal>

          <div className="mt-10 space-y-8">
            {data.sections.map((s, i) => (
              <Reveal key={s.heading}>
                <h2 className="flex items-center gap-3 font-[family-name:Manrope,system-ui,sans-serif] text-2xl font-bold text-[#043468]">
                  <span className="h-[2px] w-6 bg-[#dc3a1f]" aria-hidden="true" />
                  {i + 1}. {s.heading}
                </h2>
                {s.body.map((p) => (
                  <p key={p} className="mt-6 text-base leading-8 text-[#6b7384]">
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


