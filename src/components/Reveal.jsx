"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}) {
  const reduceMotion = useReducedMotion();

  const positions = {
    up: { x: 0, y: 45 },
    down: { x: 0, y: -45 },
    left: { x: 45, y: 0 },
    right: { x: -45, y: 0 },
  };

  const initialPosition = positions[direction] || positions.up;

  return (
    <motion.div
      className={className}
      initial={
        reduceMotion
          ? { opacity: 1 }
          : {
              opacity: 0,
              ...initialPosition,
            }
      }
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.75,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}