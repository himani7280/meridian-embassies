import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ServicesData } from "@/data/siteData";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Icon } from "@/components/ui/Icon";
import { PlaneTrail } from "@/components/ui/PlaneTrail";
import { SectionHeading } from "@/components/ui/SectionHeading";

function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export function CounsellingCards({ data }: { data: ServicesData["counselling"] }) {
  return (
    <section className="relative overflow-hidden pt-6 pb-6 mt-6 mb-6">
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 h-[360px] w-full max-w-[760px] opacity-40 [background-image:radial-gradient(circle,#b9c8dd_1.2px,transparent_1.4px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_at_top_right,black_30%,transparent_72%)] [-webkit-mask-image:radial-gradient(ellipse_at_top_right,black_30%,transparent_72%)]"
      />
      <PlaneTrail
        flip
        className="absolute right-[6%] top-14 hidden h-[110px] w-[190px] text-[#dc3a1f]/50 lg:block"
      />

      <div className="relative mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-10">
        <SectionHeading
          center
          eyebrow={data.eyebrow}
          title={data.title}
          accent={data.titleAccent}
          text={data.text}
        />

        <Stagger
          className="mt-10 grid gap-5 lg:mt-14 lg:grid-cols-2"
          stagger={0.1}
        >
          {data.items.map((item) => (
            <StaggerItem key={item.id} className="h-full">
              <Link
                href={item.href}
                className={cn(
                  "group flex h-full flex-col overflow-hidden bg-[#f3f5f9] transition-all duration-300",
                  "hover:-translate-y-1 hover:shadow-[0_6px_28px_-8px_rgba(4,52,104,0.14)] sm:min-h-[196px]",
                  item.side === "right" ? "sm:flex-row-reverse" : "sm:flex-row",
                )}
              >
                <span className="relative block h-48 w-full shrink-0 overflow-hidden sm:h-auto sm:w-[39%]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 280px, (min-width: 640px) 300px, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </span>
                <span className="flex flex-1 items-center gap-3.5 p-5 xl:gap-4 xl:p-6">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#e7eff9] text-[#043468] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#043468] group-hover:text-white sm:h-14 sm:w-14 xl:h-[60px] xl:w-[60px]">
                    <Icon name={item.icon} className="h-6 w-6 transition-transform duration-300 group-hover:scale-110 sm:h-7 sm:w-7" strokeWidth={1.5} />
                  </span>
                  <span className="flex min-w-0 flex-1 flex-col self-stretch">
                    <span className="block font-(family-name:--family-title) text-base font-bold leading-snug text-[#043468] lg:text-[15px] xl:text-[17px]">
                      {item.title}
                    </span>
                    <span className="mt-1.5 block text-sm leading-6 text-[#6b7384]">
                      {item.text}
                    </span>
                    <span className="mt-auto pt-3 inline-flex self-start items-center gap-2 border-b border-[#043468]/60 pb-0.5 text-[13px] font-semibold text-[#043468]">
                      Learn More
                      <ArrowRight
                        className="h-4 w-4 text-[#dc3a1f] transition-transform duration-300 group-hover:translate-x-1"
                        strokeWidth={2}
                      />
                    </span>
                  </span>
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}


