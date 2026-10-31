"use client";

import { motion } from "framer-motion";

export function ArrowLine({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 250 14"
      fill="none"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M0 7 H246 M240 1 L246 7 L240 13"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />
    </svg>
  );
}
