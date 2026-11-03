"use client";

import { motion } from "framer-motion";

export function RingPulse({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.span
      className={className}
      animate={{
        boxShadow: [
          "0 0 0 0 rgba(220,58,31,0.45)",
          "0 0 0 16px rgba(220,58,31,0)",
          "0 0 0 0 rgba(220,58,31,0)",
        ],
      }}
      transition={{ duration: 2, times: [0, 0.7, 1], repeat: Infinity }}
    >
      {children}
    </motion.span>
  );
}
