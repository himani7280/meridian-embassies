"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star } from "lucide-react";
import type { HomeData, Testimonial } from "@/data/siteData";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlaneTrail } from "@/components/ui/PlaneTrail";

interface Props {
  intro: HomeData["testimonials"];
  items: Testimonial[];
}

export function Testimonials({ intro, items }: Props) {
  const [active, setActive] = useState(0);
  const current = items[active] ?? items[0];

  useEffect(() => {
    if (items.length < 2) return;
    const id = window.setTimeout(
      () => setActive((i) => (i + 1) % items.length),
      7000,
    );
    return () => window.clearTimeout(id);
  }, [active, items.length]);

  if (!current) return null;

  const others = items
    .map((item, index) => ({ item, index }))
    .filter(({ index }) => index !== active);

  return (
    <section className="relative overflow-hidden pt-6 pb-6 mt-6 mb-6">
      <PlaneTrail className="absolute left-0 top-24 hidden h-[110px] w-[190px] text-(color:--color-navy)/10 lg:block" />

      <div className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-10">
        <SectionHeading
          center
          inline
          eyebrow={intro.eyebrow}
          title={intro.title}
          accent={intro.titleAccent}
          text={intro.text}
        />

        <div className="mt-10 grid items-start gap-8 lg:mt-14 lg:grid-cols-[1fr_1.02fr] lg:gap-8">
          <Reveal direction="left">
            <div className="group relative aspect-[580/510] overflow-hidden rounded-xl shadow-(--shadow-soft)">
              <Image
                src="/img/testimonial.webp"
                alt="Happy client at the airport with her passport"
                fill
                sizes="(min-width: 1024px) 600px, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.1}>
            <div className="relative">
              <div className="relative min-h-[210px] rounded-b-lg rounded-t-sm bg-[#003468] p-6 text-white shadow-(--shadow-soft) sm:p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.35 }}
                  >
                    <div className="flex gap-1" aria-label={`${current.rating} out of 5 stars`}>
                      {Array.from({ length: current.rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-white text-white" />
                      ))}
                    </div>
                    <blockquote className="mt-6 text-[15px] leading-7 sm:text-lg sm:leading-8">
                      “{current.quote}”
                    </blockquote>
                  </motion.div>
                </AnimatePresence>
              </div>
              <span
                aria-hidden="true"
                className="absolute -bottom-[18px] left-10 h-[18px] w-6 bg-[#003468] [clip-path:polygon(0_0,100%_0,100%_100%)]"
              />
            </div>

            <div className="mt-6 flex items-start gap-5 sm:gap-8">
              <div className="flex flex-col gap-2">
                {others.map(({ item, index }) => (
                  <motion.button
                    key={item.id}
                    type="button"
                    onClick={() => setActive(index)}
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.96 }}
                    aria-label={`Show testimonial from ${item.name}`}
                    className="relative h-[70px] w-20 overflow-hidden rounded-md bg-(color:--color-navy-100) ring-2 ring-transparent transition-shadow hover:ring-(color:--color-brand)"
                  >
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </motion.button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35 }}
                  className="flex items-center gap-4"
                >
                  <span className="relative h-[84px] w-[84px] shrink-0 overflow-hidden rounded-full bg-(color:--color-navy-100) shadow-(--shadow-card)">
                    <Image
                      src={current.avatar}
                      alt={current.name}
                      fill
                      sizes="84px"
                      className="object-cover"
                    />
                  </span>
                  <span>
                    <span className="block font-(family-name:--family-title) text-xl font-bold text-(color:--color-navy)">
                      {current.name}
                    </span>
                    <span className="block text-[15px] text-(color:--color-mute)">{current.role}</span>
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}


