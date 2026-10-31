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

      <section className="pt-6 pb-6 mt-6 mb-6">
        <div className="mx-auto grid w-full max-w-[1320px] items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-10">
          <Reveal direction="left">
            <div className="group relative aspect-[571/511] overflow-hidden rounded-lg shadow-(--shadow-soft)">
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
              className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-4"
              stagger={0.1}
              delay={0.2}
            >
              {d.about.features.map((f) => (
                <StaggerItem key={f.label} className="text-center">
                  <span className="mx-auto grid h-[72px] w-[72px] place-items-center rounded-full bg-(color:--color-navy-100) text-(color:--color-navy) transition-all duration-300 hover:-translate-y-1 hover:bg-(color:--color-navy) hover:text-white">
                    <Icon name={f.icon} className="h-8 w-8" strokeWidth={1.4} />
                  </span>
                  <span className="mt-6 block text-[13px] font-semibold leading-5 text-(color:--color-navy)">
                    {f.label}
                  </span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <section className="bg-[#eef3fa] pt-6 pb-6 mt-6 mb-6">
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
            className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-6 lg:grid-cols-4"
            stagger={0.1}
          >
            {d.benefits.items.map((b) => (
              <StaggerItem key={b.title} className="h-full">
                <div className="group h-full rounded-lg bg-white p-6 text-center shadow-(--shadow-card) transition-all duration-300 hover:-translate-y-2 hover:shadow-(--shadow-soft)">
                  <span className="relative mx-auto grid h-16 w-16 place-items-center text-(color:--color-navy)">
                    <Icon name={b.icon} className="h-12 w-12 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.4} />
                    <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-(color:--color-brand)" />
                  </span>
                  <h3 className="mt-4 font-(family-name:--family-title) text-lg font-bold text-(color:--color-navy)">{b.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-(color:--color-mute)">{b.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="pt-6 pb-6 mt-6 mb-6">
        <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-10">
          <SectionHeading
            center
            eyebrow={d.process.eyebrow}
            title={d.process.title}
            accent={d.process.titleAccent}
            inline
          />
          <Stagger
            className="relative mt-6 grid gap-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-8"
            stagger={0.14}
          >
            <span
              aria-hidden="true"
              className="absolute left-8 right-8 top-8 hidden h-px bg-(color:--color-navy)/15 lg:block"
            />
            {d.process.steps.map((s) => (
              <StaggerItem key={s.number} className="relative">
                <span className="relative z-10 grid h-16 w-16 place-items-center rounded-full bg-[#e3ecf8] text-(color:--color-navy)">
                  <Icon name={s.icon} className="h-7 w-7" strokeWidth={1.6} />
                  <span className="absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full border-2 border-white bg-(color:--color-brand)" />
                </span>
                <p className="mt-5 font-(family-name:--family-title) text-4xl font-extrabold text-(color:--color-brand)">{s.number}</p>
                <h3 className="mt-1 font-(family-name:--family-title) text-lg font-bold leading-snug text-(color:--color-navy)">
                  {s.title}
                </h3>
                <p className="mt-2 max-w-[250px] text-sm leading-6 text-(color:--color-mute)">{s.text}</p>
                <ArrowRight className="mt-6 h-5 w-5 text-(color:--color-brand)" strokeWidth={2} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-[#f1f5fa] pt-6 pb-6 mt-6 mb-6">
        <div className="mx-auto grid w-full max-w-[1320px] items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-10">
          <div>
            <Reveal>
              <Eyebrow>{d.audience.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.08} className="mt-4">
              <GradientTitle title={d.audience.title} accent={d.audience.titleAccent} />
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 max-w-[560px] text-base leading-7 text-(color:--color-mute)">
                {d.audience.text}
              </p>
            </Reveal>
            <Stagger className="mt-6 space-y-3.5" stagger={0.1} delay={0.2}>
              {d.audience.points.map((p) => (
                <StaggerItem key={p} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-(color:--color-brand) text-white">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-[15px] leading-6 text-(color:--color-navy-900)/85">{p}</span>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <Reveal direction="right" className="relative">
            <PlaneTrail
              flip
              className="absolute -top-8 right-4 z-10 hidden h-[90px] w-[150px] text-(color:--color-brand) sm:block"
            />
            <span
              aria-hidden="true"
              className="absolute -right-3 top-[18%] z-0 hidden h-[34%] w-6 bg-(color:--color-brand) sm:block"
            />
            <div className="group relative aspect-[540/470] overflow-hidden rounded-md shadow-(--shadow-soft) sm:mr-6">
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

      <section className="relative overflow-hidden bg-(color:--color-navy) pt-6 pb-6 mt-6 mb-6">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle,#6b93c4_1.2px,transparent_1.5px)] [background-size:15px_15px] [mask-image:linear-gradient(to_left,black,transparent_70%)] [-webkit-mask-image:linear-gradient(to_left,black,transparent_70%)]"
        />
        <PlaneTrail
          className="absolute right-[6%] top-6 hidden h-[110px] w-[190px] text-white/55 lg:block"
        />
        <div className="relative mx-auto grid w-full max-w-[1320px] items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <Reveal>
              <Eyebrow light>{d.cta.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.08} className="mt-4">
              <h2 className="font-(family-name:--family-title) text-[2rem] font-extrabold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[2.9rem]">
                {d.cta.title}
                <br />
                {d.cta.titleLine2} <span className="text-(color:--color-brand-400)">{d.cta.titleAccent}</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 max-w-[460px] text-base leading-7 text-white/80">{d.cta.text}</p>
            </Reveal>
            <Reveal delay={0.24}>
              <ButtonLink href={d.cta.button.href} size="lg" className="mt-8">
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



