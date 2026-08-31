"use client";

import { motion } from "motion/react";

const ROWS = [0, 1, 2];

export default function ScrollChevrons() {
  return (
    <div aria-hidden="true" className="flex flex-col items-center gap-1.5">
      {ROWS.map((row) => (
        <motion.svg
          key={row}
          width="34"
          height="18"
          viewBox="0 0 34 18"
          fill="none"
          initial={{ opacity: 0.15, y: -4 }}
          animate={{ opacity: [0.15, 1, 0.15], y: [-4, 6, -4] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: row * 0.22,
          }}
        >
          <polyline
            points="3,3 17,15 31,3"
            stroke="var(--color-safety-yellow)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      ))}
    </div>
  );
}
