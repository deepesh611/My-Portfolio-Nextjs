"use client";

import React from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "./ui/aurora-background";

export function AuroraBG() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10"
      >
      </motion.div>
    </AuroraBackground>
  );
}
