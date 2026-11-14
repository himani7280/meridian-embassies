import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { getServiceDetail, pageBanners } from "@/data/siteData";
import { PageBanner } from "@/components/layout/PageBanner";
import { Float, Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Icon } from "@/components/ui/Icon";
import { PlaneTrail } from "@/components/ui/PlaneTrail";
import { Eyebrow, GradientTitle, SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Service Details",
  description:
    "Expert study abroad counselling tailored to your goals: course and country selection, university shortlisting, application and visa support.",
};

export default async function ServicesDetailsPage() {
  const d = await getServiceDetail();

  return (
    <>
      <PageBanner title={pageBanners.servicesDetails.title} />

      <section className="pt-6 pb-6 sm:pt-8 sm:pb-8 lg:pt-12 lg:pb-12">
        <div className="mx-auto grid w-full max-w-[1320px] items-center gap-6 px-4 sm:gap-8 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-10">
          <Reveal direction="left">
            <div className="group relative aspect-[571/511] overflow-hidden rounded-lg shadow-[0_10px_40px_-12px_rgba(4,52,104,0.18)]">
              <Image
                src={d.about.image}
                alt="Counsellor advising a student in front of a world map"
                fill
                priority
                sizes="(min-width: 1024px) 600px, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow={d.about.eyebrow}
              title={d.about.title}
              accent={d.about.titleAccent}
              text={d.about.text}
              textClassName="max-w-[560px]"
            />
            <Stagger
              className="mt-6 grid grid-cols-2 gap-4 sm:mt-8 sm:grid-cols-4 sm:gap-5"
              stagger={0.1}
              delay={0.2}
            >
              {d.about.features.map((f) => (
                <StaggerItem key={f.label} className="group text-center">
                  <span className="mx-auto grid h-[72px] w-[72px] place-items-center rounded-full bg-[#e7eff9] text-[#043468] transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-105 group-hover:bg-[#043468] group-hover:text-white">
                    <Icon name={f.icon} className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.4} />
                  </span>
                  <span className="mx-auto mt-3 block max-w-[110px] text-[13px] font-semibold leading-5 text-[#043468] transition-colors duration-300 group-hover:text-[#dc3a1f] sm:mt-6">
                    {f.label}
                  </span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <section className="bg-[#eef3fa] pt-6 pb-6 sm:pt-8 sm:pb-8 lg:pt-12 lg:pb-12">
        <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-10">
          <SectionHeading
            center
            eyebrow={d.benefits.eyebrow}
            title={d.benefits.title}
            accent={d.benefits.titleAccent}
            inline
            text={d.benefits.text}
          />
          <Stagger
            className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5 lg:mt-6 lg:grid-cols-4"
            stagger={0.1}
          >
            {d.benefits.items.map((b) => (
              <StaggerItem key={b.title} className="h-full">
                <div className="group h-full rounded-lg bg-white p-6 text-center shadow-[0_6px_28px_-8px_rgba(4,52,104,0.14)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-12px_rgba(4,52,104,0.18)]">
                  <span className="relative mx-auto grid h-16 w-16 place-items-center text-[#043468]">
                    <Icon name={b.icon} className="h-12 w-12 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.4} />
                    <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-[#dc3a1f]" />
                  </span>
                  <h3 className="mt-4 font-(family-name:--family-title) text-lg font-bold text-[#043468]">{b.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#6b7384]">{b.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="pt-6 pb-6 sm:pt-8 sm:pb-8 lg:pt-12 lg:pb-12">
        <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-10">
          <SectionHeading
            center
            eyebrow={d.process.eyebrow}
            title={d.process.title}
            accent={d.process.titleAccent}
            inline
          />
          <Stagger
            className="relative mt-6 grid gap-6 sm:grid-cols-2 sm:gap-8 lg:mt-16 lg:grid-cols-4 lg:gap-8"
            stagger={0.14}
          >
            <span
              aria-hidden="true"
              className="absolute left-8 right-8 top-8 hidden h-px bg-[#043468]/15 lg:block"
            />
            {d.process.steps.map((s) => (
              <StaggerItem key={s.number} className="group relative flex h-full flex-col">
                <span className="relative z-10 grid h-16 w-16 place-items-center rounded-full bg-[#e3ecf8] text-[#043468] transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-105 group-hover:bg-[#043468] group-hover:text-white">
                  <Icon name={s.icon} className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.6} />
                  <span className="absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full border-2 border-white bg-[#dc3a1f]" />
                </span>
                <p className="mt-4 font-(family-name:--family-title) text-4xl font-extrabold text-[#dc3a1f] sm:mt-5">{s.number}</p>
                <h3 className="mt-1 font-(family-name:--family-title) text-base font-bold leading-snug text-[#043468] sm:text-lg">
                  {s.title}
                </h3>
                <p className="mt-2 mb-4 max-w-[250px] text-sm leading-6 text-[#6b7384] sm:mb-6">{s.text}</p>
                <ArrowRight className="mt-auto h-5 w-5 text-[#dc3a1f] transition-transform duration-300 group-hover:translate-x-1.5" strokeWidth={2} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-[#f1f5fa] pt-6 pb-6 sm:pt-8 sm:pb-8 lg:pt-12 lg:pb-12">
        <div className="mx-auto grid w-full max-w-[1320px] items-center gap-6 px-4 sm:gap-8 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-10">
          <div>
            <Reveal>
              <Eyebrow>{d.audience.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.08} className="mt-3 sm:mt-4">
              <GradientTitle title={d.audience.title} accent={d.audience.titleAccent} />
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-4 max-w-[560px] text-base leading-7 text-[#6b7384] sm:mt-5">
                {d.audience.text}
              </p>
            </Reveal>
            <Stagger className="mt-5 space-y-3 sm:mt-6 sm:space-y-3.5" stagger={0.1} delay={0.2}>
              {d.audience.points.map((p) => (
                <StaggerItem key={p} className="group flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#dc3a1f] text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-[#043468]">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-[15px] leading-6 text-[#071f37]/85">{p}</span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <Reveal direction="right" className="relative">
            <PlaneTrail
              flip
              className="absolute -top-8 right-4 z-10 hidden h-[90px] w-[150px] text-[#dc3a1f] sm:block"
            />
            <span
              aria-hidden="true"
              className="absolute -right-3 top-[18%] z-0 hidden h-[34%] w-6 bg-[#dc3a1f] sm:block"
            />
            <div className="group relative aspect-[540/470] overflow-hidden rounded-md shadow-[0_10px_40px_-12px_rgba(4,52,104,0.18)] sm:mr-6">
              <Image
                src={d.audience.image}
                alt="Smiling student holding a laptop at an airport"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#043468] pt-6 pb-6 mt-6 mb-6 sm:pt-8 sm:pb-8 sm:mt-8 sm:mb-8 lg:pt-12 lg:pb-12 lg:mt-12 lg:mb-12">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle,#6b93c4_1.2px,transparent_1.5px)] [background-size:15px_15px] [mask-image:linear-gradient(to_left,black,transparent_70%)] [-webkit-mask-image:linear-gradient(to_left,black,transparent_70%)]"
        />
        <PlaneTrail
          className="absolute right-[6%] top-6 hidden h-[110px] w-[190px] text-white/55 lg:block"
        />
        <div className="relative mx-auto grid w-full max-w-[1320px] items-center gap-6 px-4 sm:gap-8 sm:px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <Reveal>
              <Eyebrow light>{d.cta.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.08} className="mt-3 sm:mt-4">
              <h2 className="font-(family-name:--family-title) text-[1.3rem] font-extrabold leading-[1.18] tracking-tight text-white sm:text-4xl lg:text-[2.9rem]">
                {d.cta.title}
                <br />
                {d.cta.titleLine2} <span className="text-[#e8603f]">{d.cta.titleAccent}</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-4 max-w-[460px] text-base leading-7 text-white/80 sm:mt-5">{d.cta.text}</p>
            </Reveal>
            <Reveal delay={0.24}>
              <ButtonLink href={d.cta.button.href} size="lg" className="mt-6 sm:mt-8">
                {d.cta.button.label}
              </ButtonLink>
            </Reveal>
          </div>

          <Reveal direction="right" className="relative">
            <Float amplitude={8} duration={7}>
              <div className="relative mx-auto aspect-[513/305] w-full max-w-[560px] [mask-image:linear-gradient(to_right,transparent,black_28%)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_28%)]">
                <Image
                  src={d.cta.image}
                  alt="Graduation cap, books and a diploma"
                  fill
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-cover"
                />
              </div>
            </Float>
          </Reveal>
        </div>
      </section>
    </>
  );
}



