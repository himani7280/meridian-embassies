"use client";

import Image from "next/image";
import { motion } from "framer-motion";

function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

interface Piece {
  src: string;
  alt: string;
  box: string;
  z: string;
  delay: number;
  float: number;
}

const PIECES: Piece[] = [
  {
    src: "/img/hero-1.webp",
    alt: "National flags outside a classic embassy building",
    box: "left-[0.9%] top-[6.8%] h-[73%] w-[51.5%]",
    z: "z-10",
    delay: 0.2,
    float: 7,
  },
  {
    src: "/img/hero-2.webp",
    alt: "Passenger aircraft flying into a sunset sky",
    box: "left-[54.2%] top-[10.9%] h-[38.5%] w-[40.8%]",
    z: "z-10",
    delay: 0.4,
    float: 9,
  },
  {
    src: "/img/hero-3.webp",
    alt: "City skyline with a tall tower on the waterfront",
    box: "left-[35.7%] top-[51.5%] h-[47.5%] w-[55.7%]",
    z: "z-20",
    delay: 0.6,
    float: 8,
  },
];

export function HeroCollage() {
  return (
    <div className="relative mx-auto aspect-[635/470] w-full max-w-[640px]">
      <motion.span
        aria-hidden="true"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="absolute left-[42.8%] top-[0.8%] z-0 h-[50%] w-[15.9%] rounded-2xl bg-(color:--color-brand)"
      />
      <motion.span
        aria-hidden="true"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute left-[87.4%] top-[43.6%] z-0 h-[18%] w-[11.3%] rounded-xl bg-(color:--color-slate2)"
      />

      {PIECES.map((p) => (
        <motion.div
          key={p.src}
          initial={{ opacity: 0, scale: 0.86, y: 36 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: p.delay, ease: [0.22, 1, 0.36, 1] }}
          className={cn("absolute", p.box, p.z)}
        >
          <motion.div
            animate={{ y: [0, -p.float, 0] }}
            transition={{
              duration: 5 + p.float / 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
            className="relative h-full w-full overflow-hidden rounded-[18px] border-[4px] border-white shadow-(--shadow-soft) sm:rounded-[22px] sm:border-[5px]"
          >
            <Image
              src={p.src}
              alt={p.alt}
              fill
              priority
              sizes="(min-width: 1024px) 340px, 60vw"
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
